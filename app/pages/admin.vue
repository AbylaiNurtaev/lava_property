<script setup lang="ts">
definePageMeta({
    layout: false,
})

type AdminTab = 'properties' | 'articles' | 'categories' | 'feedback'

const emptyProperty = () => ({
    city: 'phuket',
    new: true,
    status: 'best',
    name: '',
    priceDollars: '',
    priceTHB: '',
    location: '',
    coordinates: [98.3923, 7.8804],
    firstImg: '',
    bgImg: '',
    bigImg: '',
    genImg: '',
    genplanImages: [],
    sketchPlanImages: [],
    description: '',
    genDesc: '',
    descriptionExterior: '',
    specs: {
        readyDate: '',
        areaTotal: '',
        propertyType: 'Апартаменты',
        finishing: '',
        bedrooms: '',
        bathrooms: '',
        developer: '',
    },
    amenities: [],
    galleryExterior: [],
    galleryInterior: [],
    units: [],
    bookingConditions: [],
    infrastructure: [],
})

const emptyArticle = () => ({
    title: '',
    date: new Date().toISOString().slice(0, 10),
    excerpt: '',
    image: '',
    categorySlug: '',
    content: '',
})

const emptyCategory = () => ({
    title: '',
    slug: '',
    color: '#0F5C43',
})

const activeTab = ref<AdminTab>('properties')
const loading = ref(false)
const initialLoading = ref(true)
const saving = ref(false)
const message = ref('')
const errorMessage = ref('')
const uploadingField = ref('')

const properties = ref<any[]>([])
const categories = ref<any[]>([])
const articles = ref<any[]>([])
const feedbackItems = ref<any[]>([])

const propertyForm = ref<any>(emptyProperty())
const propertyJson = ref(JSON.stringify(propertyForm.value, null, 2))
const articleForm = ref<any>(emptyArticle())
const categoryForm = ref<any>(emptyCategory())
const articleEditor = ref<HTMLElement | null>(null)
const editorRenderKey = ref(0)

const loadingTitle = computed(() => initialLoading.value ? 'Загружаем админку' : 'Обновляем данные')

const switchTab = async (tab: AdminTab) => {
    activeTab.value = tab
    await nextTick()
    if (tab === 'articles') setArticleEditorContent(true)
}

const articleCountLabel = (count: number) => {
    const lastTwo = count % 100
    const last = count % 10
    if (lastTwo >= 11 && lastTwo <= 14) return `${count} статей`
    if (last === 1) return `${count} статья`
    if (last >= 2 && last <= 4) return `${count} статьи`
    return `${count} статей`
}

const ratingStars = (rating: number) => '★★★★★'.slice(0, rating) + '☆☆☆☆☆'.slice(0, 5 - rating)

const formatDate = (value: string) => {
    if (!value) return ''
    return new Date(value).toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
}

const notify = (text: string) => {
    message.value = text
    errorMessage.value = ''
}

const cloneRecord = <T,>(value: T): T => JSON.parse(JSON.stringify(value))

const fail = (error: any) => {
    errorMessage.value = error?.data?.message || error?.message || 'Что-то пошло не так'
    message.value = ''
}

const normalizeUnit = (unit: any = {}) => ({
    ...unit,
    id: unit.id || `${Date.now()}`,
    area: {
        min: unit.area?.min ?? '',
        max: unit.area?.max ?? unit.area?.min ?? '',
    },
    floor: {
        min: unit.floor?.min ?? '',
        max: unit.floor?.max ?? unit.floor?.min ?? '',
    },
    images: Array.isArray(unit.images) ? unit.images : [],
})

const ensurePropertyArrays = () => {
    propertyForm.value.genplanImages = Array.isArray(propertyForm.value.genplanImages)
        ? propertyForm.value.genplanImages
        : []
    propertyForm.value.sketchPlanImages = Array.isArray(propertyForm.value.sketchPlanImages)
        ? propertyForm.value.sketchPlanImages
        : []
    propertyForm.value.galleryExterior = Array.isArray(propertyForm.value.galleryExterior)
        ? propertyForm.value.galleryExterior
        : []
    propertyForm.value.galleryInterior = Array.isArray(propertyForm.value.galleryInterior)
        ? propertyForm.value.galleryInterior
        : []
    propertyForm.value.units = Array.isArray(propertyForm.value.units)
        ? propertyForm.value.units.map((unit: any) => normalizeUnit(unit))
        : []
}

const propertyCoverFields = [
    { field: 'firstImg' },
    { field: 'bgImg' },
    { field: 'bigImg' },
]

const propertyGalleryPhotos = computed(() => {
    const galleryExterior = Array.isArray(propertyForm.value.galleryExterior)
        ? propertyForm.value.galleryExterior
        : []
    const galleryInterior = Array.isArray(propertyForm.value.galleryInterior)
        ? propertyForm.value.galleryInterior
        : []

    const coverPhotos = propertyCoverFields
        .map((item) => ({
            ...item,
            src: propertyForm.value[item.field],
            index: null as number | null,
        }))
        .filter((item) => Boolean(item.src))

    const galleryPhotos = [
        ...galleryExterior.map((src: string, index: number) => ({
            field: 'galleryExterior',
            src,
            index,
        })),
        ...galleryInterior.map((src: string, index: number) => ({
            field: 'galleryInterior',
            src,
            index,
        })),
    ].filter((item) => Boolean(item.src))

    return [...coverPhotos, ...galleryPhotos]
})

const uploadImage = async (
    event: Event,
    target: 'property' | 'article',
    field: string,
    folder: string,
    mode: 'replace' | 'append' = 'replace',
) => {
    const input = event.target as HTMLInputElement
    const file = input.files?.[0]
    input.value = ''
    if (!file) return

    uploadingField.value = `${target}:${field}`
    try {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('folder', folder)

        const result = await $fetch<{ url: string; savedPercent?: number }>('/api/admin/upload', {
            method: 'POST',
            body: formData,
        })

        if (target === 'property') {
            if (mode === 'append') {
                propertyForm.value[field] = Array.isArray(propertyForm.value[field])
                    ? [...propertyForm.value[field], result.url]
                    : [result.url]
            } else {
                propertyForm.value[field] = result.url
            }
            syncPropertyJson()
        } else {
            articleForm.value[field] = result.url
        }

        notify(result.savedPercent
            ? `Изображение сжато на ${result.savedPercent}% и загружено в AWS`
            : 'Изображение сжато и загружено в AWS')
        return result
    } catch (error) {
        fail(error)
    } finally {
        uploadingField.value = ''
    }
}

const uploadPropertyImage = (event: Event, field: string) =>
    uploadImage(event, 'property', field, `properties/${propertyForm.value.id || 'new'}/${field}`)

const uploadPropertyArrayImage = (event: Event, field: string) =>
    uploadImage(event, 'property', field, `properties/${propertyForm.value.id || 'new'}/${field}`, 'append')

const uploadPropertyGalleryImage = (event: Event) => {
    const targetField = propertyForm.value.firstImg ? 'galleryExterior' : 'firstImg'
    const mode = targetField === 'galleryExterior' ? 'append' : 'replace'
    return uploadImage(event, 'property', targetField, `properties/${propertyForm.value.id || 'new'}/gallery`, mode)
}

const uploadPropertyGenplanImage = (event: Event) => {
    const targetField = propertyForm.value.genImg ? 'genplanImages' : 'genImg'
    const mode = targetField === 'genplanImages' ? 'append' : 'replace'
    return uploadImage(event, 'property', targetField, `properties/${propertyForm.value.id || 'new'}/genplan`, mode)
}

const uploadPropertySketchPlanImage = (event: Event) =>
    uploadImage(event, 'property', 'sketchPlanImages', `properties/${propertyForm.value.id || 'new'}/sketch-plans`, 'append')

const uploadArticleImage = (event: Event, field = 'image') =>
    uploadImage(event, 'article', field, `articles/${articleForm.value.id || 'new'}`)

const isUploading = (target: 'property' | 'article', field: string) =>
    uploadingField.value === `${target}:${field}`

const removeArticleImage = () => {
    articleForm.value.image = ''
}

const removePropertyArrayImage = (field: string, index: number) => {
    if (!Array.isArray(propertyForm.value[field])) return
    propertyForm.value[field] = propertyForm.value[field].filter((_: string, i: number) => i !== index)
    syncPropertyJson()
}

const removePropertyGalleryPhoto = (photo: { field: string; index: number | null }) => {
    if (photo.index !== null) {
        removePropertyArrayImage(photo.field, photo.index)
        return
    }

    propertyForm.value[photo.field] = ''
    syncPropertyJson()
}

const genplanPhotos = computed(() => {
    const genplanImages = Array.isArray(propertyForm.value.genplanImages)
        ? propertyForm.value.genplanImages
        : []

    return [
        propertyForm.value.genImg ? { field: 'genImg', src: propertyForm.value.genImg, index: null as number | null } : null,
        ...genplanImages.map((src: string, index: number) => ({
            field: 'genplanImages',
            src,
            index,
        })),
    ].filter(Boolean) as { field: string; src: string; index: number | null }[]
})

const removePropertyGenplanPhoto = (photo: { field: string; index: number | null }) => {
    if (photo.index !== null) {
        removePropertyArrayImage(photo.field, photo.index)
        return
    }

    propertyForm.value.genImg = ''
    syncPropertyJson()
}

const emptyUnit = () => ({
    id: `${Date.now()}`,
    title: '',
    bedrooms: '',
    bathrooms: '',
    area: { min: '', max: '' },
    floor: { min: '', max: '' },
    priceTHB: '',
    priceDollars: '',
    description: '',
    cover: '',
    images: [],
})

const addPropertyUnit = () => {
    ensurePropertyArrays()
    propertyForm.value.units = [...propertyForm.value.units, emptyUnit()]
    syncPropertyJson()
}

const removePropertyUnit = (index: number) => {
    propertyForm.value.units = propertyForm.value.units.filter((_: any, i: number) => i !== index)
    syncPropertyJson()
}

const propertyUnitImages = (unit: any) => [
    unit?.cover,
    ...(Array.isArray(unit?.images) ? unit.images : []),
].filter(Boolean)

const uploadPropertyUnitImage = async (event: Event, index: number) => {
    const input = event.target as HTMLInputElement
    const file = input.files?.[0]
    input.value = ''
    if (!file) return

    const unit = propertyForm.value.units[index]
    if (!unit) return

    const field = `unit-${index}`
    uploadingField.value = `property:${field}`
    try {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('folder', `properties/${propertyForm.value.id || 'new'}/units/${unit.id || index}`)

        const result = await $fetch<{ url: string; savedPercent?: number }>('/api/admin/upload', {
            method: 'POST',
            body: formData,
        })

        if (!unit.cover) {
            unit.cover = result.url
        } else {
            unit.images = Array.isArray(unit.images) ? [...unit.images, result.url] : [result.url]
        }
        propertyForm.value.units = propertyForm.value.units.map((item: any, itemIndex: number) =>
            itemIndex === index ? { ...unit } : item
        )
        syncPropertyJson()
        notify(result.savedPercent
            ? `Изображение сжато на ${result.savedPercent}% и загружено в AWS`
            : 'Изображение сжато и загружено в AWS')
    } catch (error) {
        fail(error)
    } finally {
        uploadingField.value = ''
    }
}

const removePropertyUnitImage = (unitIndex: number, imageIndex: number) => {
    const unit = propertyForm.value.units[unitIndex]
    if (!unit) return

    if (imageIndex === 0) {
        const nextImages = Array.isArray(unit.images) ? [...unit.images] : []
        unit.cover = nextImages.shift() || ''
        unit.images = nextImages
    } else if (Array.isArray(unit.images)) {
        unit.images = unit.images.filter((_: string, index: number) => index !== imageIndex - 1)
    }
    syncPropertyJson()
}

const loadAdminData = async () => {
    loading.value = true
    try {
        const [propertyData, categoryData, articleData, feedbackData] = await Promise.all([
            $fetch<any[]>('/api/admin/properties'),
            $fetch<any[]>('/api/admin/news/categories'),
            $fetch<any[]>('/api/admin/news/articles'),
            $fetch<any[]>('/api/admin/feedback'),
        ])

        properties.value = propertyData
        categories.value = categoryData
        articles.value = articleData
        feedbackItems.value = feedbackData

        if (!propertyForm.value.id && !propertyForm.value.name) pickProperty(propertyData[0] || emptyProperty())
        if (!categoryForm.value.id && !categoryForm.value.title) categoryForm.value = categoryData[0] || emptyCategory()
        if (!articleForm.value.id && !articleForm.value.title) articleForm.value = articleData[0] || {
            ...emptyArticle(),
            categorySlug: categoryData[0]?.slug || '',
        }
    } catch (error) {
        fail(error)
    } finally {
        loading.value = false
        initialLoading.value = false
    }
}

const pickProperty = (property: any) => {
    propertyForm.value = cloneRecord(property || emptyProperty())
    ensurePropertyArrays()
    propertyJson.value = JSON.stringify(propertyForm.value, null, 2)
}

const newProperty = () => pickProperty(emptyProperty())

const syncPropertyJson = () => {
    propertyJson.value = JSON.stringify(propertyForm.value, null, 2)
}

const saveProperty = async () => {
    saving.value = true
    try {
        const raw = JSON.parse(propertyJson.value || '{}')
        const payload = {
            ...raw,
            id: propertyForm.value.id || raw.id,
            city: propertyForm.value.city,
            new: propertyForm.value.new,
            status: propertyForm.value.status,
            name: propertyForm.value.name,
            priceDollars: propertyForm.value.priceDollars,
            priceTHB: propertyForm.value.priceTHB,
            location: propertyForm.value.location,
            firstImg: propertyForm.value.firstImg,
            bgImg: propertyForm.value.bgImg,
            bigImg: propertyForm.value.bigImg,
            genImg: propertyForm.value.genImg,
            genplanImages: propertyForm.value.genplanImages,
            sketchPlanImages: propertyForm.value.sketchPlanImages,
            galleryExterior: propertyForm.value.galleryExterior,
            galleryInterior: propertyForm.value.galleryInterior,
            description: propertyForm.value.description,
            genDesc: propertyForm.value.genDesc,
            descriptionExterior: propertyForm.value.descriptionExterior,
            amenities: propertyForm.value.amenities,
            units: propertyForm.value.units,
            bookingConditions: propertyForm.value.bookingConditions,
            infrastructure: propertyForm.value.infrastructure,
            specs: {
                ...(raw.specs || {}),
                ...(propertyForm.value.specs || {}),
            },
            coordinates: Array.isArray(propertyForm.value.coordinates)
                ? propertyForm.value.coordinates
                : String(propertyForm.value.coordinates || '')
                    .split(',')
                    .map((item) => Number(item.trim())),
        }

        const saved = payload.id
            ? await $fetch(`/api/admin/properties/${payload.id}`, { method: 'PUT', body: payload })
            : await $fetch('/api/admin/properties', { method: 'POST', body: payload })

        await loadAdminData()
        pickProperty(saved)
        notify('Объект сохранён')
    } catch (error) {
        fail(error)
    } finally {
        saving.value = false
    }
}

const deleteProperty = async () => {
    if (!propertyForm.value?.id) return
    saving.value = true
    try {
        await $fetch(`/api/admin/properties/${propertyForm.value.id}`, { method: 'DELETE' })
        propertyForm.value = {}
        propertyJson.value = '{}'
        await loadAdminData()
        notify('Объект удалён')
    } catch (error) {
        fail(error)
    } finally {
        saving.value = false
    }
}

const pickArticle = async (article: any) => {
    articleForm.value = cloneRecord(article || emptyArticle())
    editorRenderKey.value += 1
    await nextTick()
    setArticleEditorContent(true)
}

const newArticle = () => pickArticle({
    ...emptyArticle(),
    categorySlug: categories.value[0]?.slug || '',
})

const setArticleEditorContent = (force = false) => {
    if (articleEditor.value && (force || articleEditor.value.innerHTML !== (articleForm.value.content || ''))) {
        articleEditor.value.innerHTML = articleForm.value.content || ''
    }
}

const syncArticleContent = () => {
    articleForm.value.content = articleEditor.value?.innerHTML || ''
}

const runEditorCommand = (command: string, value?: string) => {
    articleEditor.value?.focus()
    document.execCommand(command, false, value)
    syncArticleContent()
}

const setEditorBlock = (tag: string) => {
    runEditorCommand('formatBlock', tag)
}

const createEditorLink = () => {
    const url = window.prompt('Вставьте ссылку')
    if (!url) return
    runEditorCommand('createLink', url)
}

const saveArticle = async () => {
    saving.value = true
    try {
        syncArticleContent()
        const payload = { ...articleForm.value }
        const saved = payload.id
            ? await $fetch(`/api/admin/news/articles/${payload.id}`, { method: 'PUT', body: payload })
            : await $fetch('/api/admin/news/articles', { method: 'POST', body: payload })

        await loadAdminData()
        pickArticle(saved)
        notify('Статья сохранена')
    } catch (error) {
        fail(error)
    } finally {
        saving.value = false
    }
}

const deleteArticle = async () => {
    if (!articleForm.value?.id) return
    saving.value = true
    try {
        await $fetch(`/api/admin/news/articles/${articleForm.value.id}`, { method: 'DELETE' })
        articleForm.value = {}
        await loadAdminData()
        notify('Статья удалена')
    } catch (error) {
        fail(error)
    } finally {
        saving.value = false
    }
}

const pickCategory = (category: any) => {
    categoryForm.value = cloneRecord(category || emptyCategory())
}

const newCategory = () => pickCategory(emptyCategory())

const saveCategory = async () => {
    saving.value = true
    try {
        const payload = { ...categoryForm.value }
        const saved = payload.id
            ? await $fetch(`/api/admin/news/categories/${payload.id}`, { method: 'PUT', body: payload })
            : await $fetch('/api/admin/news/categories', { method: 'POST', body: payload })

        await loadAdminData()
        pickCategory(saved)
        notify('Тема сохранена')
    } catch (error) {
        fail(error)
    } finally {
        saving.value = false
    }
}

const deleteCategory = async () => {
    if (!categoryForm.value?.id) return
    saving.value = true
    try {
        await $fetch(`/api/admin/news/categories/${categoryForm.value.id}`, { method: 'DELETE' })
        categoryForm.value = {}
        await loadAdminData()
        notify('Тема и её статьи удалены')
    } catch (error) {
        fail(error)
    } finally {
        saving.value = false
    }
}

const deleteFeedback = async (id: string) => {
    saving.value = true
    try {
        await $fetch(`/api/admin/feedback/${id}`, { method: 'DELETE' })
        await loadAdminData()
        notify('Оценка удалена')
    } catch (error) {
        fail(error)
    } finally {
        saving.value = false
    }
}

const seedDatabase = async () => {
    loading.value = true
    try {
        const result: any = await $fetch('/api/admin/seed', { method: 'POST' })
        await loadAdminData()
        notify(`База заполнена: ${result.properties} объектов, ${result.categories} тем, ${result.articles} статей`)
    } catch (error) {
        fail(error)
    } finally {
        loading.value = false
        initialLoading.value = false
    }
}

watch(activeTab, async (tab) => {
    if (tab === 'articles') {
        await nextTick()
        setArticleEditorContent(true)
    }
})

onMounted(loadAdminData)
</script>

<template>
    <main class="admin-page">
        <section class="admin-shell">
            <aside class="admin-sidebar">
                <div class="admin-brand">
                    <p>Lava Property</p>
                    <h1>Админ панель</h1>
                </div>

                <nav class="admin-tabs">
                    <button type="button" :class="{ active: activeTab === 'properties' }"
                        @click="switchTab('properties')">
                        <i class="pi pi-building"></i>
                        <span>Недвижимость</span>
                        <strong>{{ properties.length }}</strong>
                    </button>
                    <button type="button" :class="{ active: activeTab === 'articles' }" @click="switchTab('articles')">
                        <i class="pi pi-file-edit"></i>
                        <span>Статьи</span>
                        <strong>{{ articles.length }}</strong>
                    </button>
                    <button type="button" :class="{ active: activeTab === 'categories' }"
                        @click="switchTab('categories')">
                        <i class="pi pi-tags"></i>
                        <span>Темы</span>
                        <strong>{{ categories.length }}</strong>
                    </button>
                    <button type="button" :class="{ active: activeTab === 'feedback' }" @click="switchTab('feedback')">
                        <i class="pi pi-star"></i>
                        <span>Оценки</span>
                        <strong>{{ feedbackItems.length }}</strong>
                    </button>
                </nav>

                <div class="status-row">
                    <span v-if="loading">Загрузка...</span>
                    <span v-if="saving">Сохранение...</span>
                    <span v-if="message" class="ok">{{ message }}</span>
                    <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
                </div>
            </aside>

            <div class="admin-content">
                <div v-if="loading" class="admin-loading" :class="{ initial: initialLoading }">
                    <div class="admin-spinner"></div>
                </div>

                <section v-if="activeTab === 'properties'" class="admin-grid">
                    <aside class="admin-list">
                        <button type="button" class="new-button" @click="newProperty">+ Новый объект</button>
                        <div v-if="initialLoading" class="list-skeleton">
                            <span v-for="item in 8" :key="item"></span>
                        </div>
                        <div v-for="property in properties" :key="property.id" role="button" tabindex="0" class="list-item"
                            :class="{ active: propertyForm.id === property.id }" @pointerdown.prevent="pickProperty(property)"
                            @keydown.enter.prevent="pickProperty(property)"
                            @keydown.space.prevent="pickProperty(property)">
                            <strong>{{ property.name || `Объект #${property.id}` }}</strong>
                            <span>{{ property.location || property.city }}</span>
                        </div>
                    </aside>

                    <form class="editor" @submit.prevent="saveProperty">
                        <div class="editor-head">
                            <h2>{{ propertyForm.id ? `Объект #${propertyForm.id}` : 'Новый объект' }}</h2>
                            <div>
                                <button type="button" class="danger" :disabled="!propertyForm.id" @click="deleteProperty">
                                    Удалить
                                </button>
                                <button type="submit" :disabled="saving">Сохранить</button>
                            </div>
                        </div>

                        <div class="form-grid">
                            <label>Название<input v-model="propertyForm.name" type="text"></label>
                            <label>Город
                                <select v-model="propertyForm.city">
                                    <option value="phuket">Пхукет</option>
                                    <option value="pattaya">Паттайя</option>
                                </select>
                            </label>
                            <label>Цена $<input v-model="propertyForm.priceDollars" type="text"></label>
                            <label>Цена THB<input v-model="propertyForm.priceTHB" type="text"></label>
                            <label>Локация<input v-model="propertyForm.location" type="text"></label>
                            <label>Координаты [lng, lat]<input v-model="propertyForm.coordinates" type="text"></label>
                            <div class="upload-label gallery-field">
                                <span>Фотогалерея объекта</span>
                                <div class="photo-gallery-grid">
                                    <article v-for="photo in propertyGalleryPhotos"
                                        :key="`${photo.field}-${photo.index ?? 'cover'}-${photo.src}`"
                                        class="photo-gallery-card">
                                        <img :src="photo.src" :alt="propertyForm.name || 'Фото объекта'" loading="lazy"
                                            referrerpolicy="no-referrer">
                                        <button type="button" class="photo-gallery-remove"
                                            @click="removePropertyGalleryPhoto(photo)">
                                            Удалить
                                        </button>
                                    </article>
                                    <label class="photo-gallery-add"
                                        :class="{ disabled: isUploading('property', 'firstImg') || isUploading('property', 'galleryExterior') }">
                                        <span class="photo-gallery-plus">+</span>
                                        <strong>
                                            {{ isUploading('property', 'firstImg') || isUploading('property', 'galleryExterior') ? 'Загрузка...' : 'Добавить фото' }}
                                        </strong>
                                        <small>Изображение сожмётся и загрузится в AWS</small>
                                        <input type="file" accept="image/*"
                                            :disabled="isUploading('property', 'firstImg') || isUploading('property', 'galleryExterior')"
                                            @change="uploadPropertyGalleryImage">
                                    </label>
                                </div>
                            </div>
                            <label>Тип<input v-model="propertyForm.specs.propertyType" type="text"></label>
                            <label>Спальни<input v-model="propertyForm.specs.bedrooms" type="text"></label>
                            <label>Ванные<input v-model="propertyForm.specs.bathrooms" type="text"></label>
                            <label>Площадь<input v-model="propertyForm.specs.areaTotal" type="text"></label>
                            <div class="upload-label gallery-field">
                                <span>Генплан</span>
                                <div class="photo-gallery-grid compact">
                                    <article v-for="photo in genplanPhotos" :key="`${photo.field}-${photo.index ?? 'main'}-${photo.src}`"
                                        class="photo-gallery-card">
                                        <img :src="photo.src" alt="Генплан" loading="lazy" referrerpolicy="no-referrer">
                                        <button type="button" class="photo-gallery-remove"
                                            @click="removePropertyGenplanPhoto(photo)">
                                            Удалить
                                        </button>
                                    </article>
                                    <label class="photo-gallery-add"
                                        :class="{ disabled: isUploading('property', 'genImg') || isUploading('property', 'genplanImages') }">
                                        <span class="photo-gallery-plus">+</span>
                                        <strong>
                                            {{ isUploading('property', 'genImg') || isUploading('property', 'genplanImages') ? 'Загрузка...' : 'Добавить фото' }}
                                        </strong>
                                        <small>Отдельные изображения генплана</small>
                                        <input type="file" accept="image/*"
                                            :disabled="isUploading('property', 'genImg') || isUploading('property', 'genplanImages')"
                                            @change="uploadPropertyGenplanImage">
                                    </label>
                                </div>
                            </div>
                            <div class="upload-label gallery-field">
                                <span>Эскизные планировки</span>
                                <div class="photo-gallery-grid compact">
                                    <article v-for="(src, index) in propertyForm.sketchPlanImages" :key="`${src}-${index}`"
                                        class="photo-gallery-card">
                                        <img :src="src" alt="Эскизная планировка" loading="lazy"
                                            referrerpolicy="no-referrer">
                                        <button type="button" class="photo-gallery-remove"
                                            @click="removePropertyArrayImage('sketchPlanImages', index)">
                                            Удалить
                                        </button>
                                    </article>
                                    <label class="photo-gallery-add"
                                        :class="{ disabled: isUploading('property', 'sketchPlanImages') }">
                                        <span class="photo-gallery-plus">+</span>
                                        <strong>
                                            {{ isUploading('property', 'sketchPlanImages') ? 'Загрузка...' : 'Добавить фото' }}
                                        </strong>
                                        <small>Эскизы и схемы планировок</small>
                                        <input type="file" accept="image/*"
                                            :disabled="isUploading('property', 'sketchPlanImages')"
                                            @change="uploadPropertySketchPlanImage">
                                    </label>
                                </div>
                            </div>
                        </div>

                        <label>Описание<textarea v-model="propertyForm.description" rows="5"></textarea></label>
                        <div class="units-editor">
                            <div class="section-title-row">
                                <h3>Типы планировок</h3>
                                <button type="button" class="ghost-button" @click="addPropertyUnit">+ Добавить тип</button>
                            </div>
                            <article v-for="(unit, unitIndex) in propertyForm.units" :key="unit.id || unitIndex"
                                class="unit-editor-card">
                                <div class="unit-editor-head">
                                    <strong>{{ unit.title || `Планировка #${unitIndex + 1}` }}</strong>
                                    <button type="button" class="danger small" @click="removePropertyUnit(unitIndex)">
                                        Удалить
                                    </button>
                                </div>
                                <div class="unit-form-grid">
                                    <label>Название<input v-model="unit.title" type="text" @input="syncPropertyJson"></label>
                                    <label>Цена THB<input v-model="unit.priceTHB" type="text" @input="syncPropertyJson"></label>
                                    <label>Цена $<input v-model="unit.priceDollars" type="text" @input="syncPropertyJson"></label>
                                    <label>Спальни<input v-model="unit.bedrooms" type="text" @input="syncPropertyJson"></label>
                                    <label>Ванные<input v-model="unit.bathrooms" type="text" @input="syncPropertyJson"></label>
                                    <label>Площадь от<input v-model="unit.area.min" type="text" @input="syncPropertyJson"></label>
                                    <label>Площадь до<input v-model="unit.area.max" type="text" @input="syncPropertyJson"></label>
                                    <label>Этаж от<input v-model="unit.floor.min" type="text" @input="syncPropertyJson"></label>
                                    <label>Этаж до<input v-model="unit.floor.max" type="text" @input="syncPropertyJson"></label>
                                </div>
                                <label>Описание планировки
                                    <textarea v-model="unit.description" rows="3" @input="syncPropertyJson"></textarea>
                                </label>
                                <div class="photo-gallery-grid compact">
                                    <article v-for="(src, imageIndex) in propertyUnitImages(unit)"
                                        :key="`${unit.id || unitIndex}-${src}-${imageIndex}`" class="photo-gallery-card">
                                        <img :src="src" :alt="unit.title || 'Планировка'" loading="lazy"
                                            referrerpolicy="no-referrer">
                                        <button type="button" class="photo-gallery-remove"
                                            @click="removePropertyUnitImage(unitIndex, imageIndex)">
                                            Удалить
                                        </button>
                                    </article>
                                    <label class="photo-gallery-add"
                                        :class="{ disabled: isUploading('property', `unit-${unitIndex}`) }">
                                        <span class="photo-gallery-plus">+</span>
                                        <strong>
                                            {{ isUploading('property', `unit-${unitIndex}`) ? 'Загрузка...' : 'Добавить фото' }}
                                        </strong>
                                        <small>Фото конкретной планировки</small>
                                        <input type="file" accept="image/*"
                                            :disabled="isUploading('property', `unit-${unitIndex}`)"
                                            @change="uploadPropertyUnitImage($event, unitIndex)">
                                    </label>
                                </div>
                            </article>
                        </div>
                        <label>Полный JSON объекта<textarea v-model="propertyJson" rows="14" spellcheck="false"></textarea></label>
                    </form>
                </section>

                <section v-if="activeTab === 'articles'" class="admin-grid">
                    <aside class="admin-list">
                        <button type="button" class="new-button" @click="newArticle">+ Новая статья</button>
                        <div v-if="initialLoading" class="list-skeleton">
                            <span v-for="item in 8" :key="item"></span>
                        </div>
                        <div v-for="article in articles" :key="article.id" role="button" tabindex="0" class="list-item"
                            :class="{ active: articleForm.id === article.id }" @pointerdown.prevent="pickArticle(article)"
                            @keydown.enter.prevent="pickArticle(article)"
                            @keydown.space.prevent="pickArticle(article)">
                            <strong>{{ article.title || `Статья #${article.id}` }}</strong>
                            <span>{{ article.categoryTitle || article.categorySlug }}</span>
                        </div>
                    </aside>

                    <form class="editor" @submit.prevent="saveArticle">
                        <div class="editor-head">
                            <h2>{{ articleForm.id ? `Статья #${articleForm.id}` : 'Новая статья' }}</h2>
                            <div>
                                <button type="button" class="danger" :disabled="!articleForm.id" @click="deleteArticle">
                                    Удалить
                                </button>
                                <button type="submit" :disabled="saving">Сохранить</button>
                            </div>
                        </div>

                        <div class="form-grid">
                            <label>Заголовок<input v-model="articleForm.title" type="text"></label>
                            <label>Дата<input v-model="articleForm.date" type="date"></label>
                            <label>Тема
                                <select v-model="articleForm.categorySlug">
                                    <option v-for="category in categories" :key="category.slug" :value="category.slug">
                                        {{ category.title }}
                                    </option>
                                </select>
                            </label>
                            <div class="upload-label gallery-field article-image-field">
                                <span>Изображение статьи</span>
                                <div class="article-image-manager">
                                    <article v-if="articleForm.image" class="photo-gallery-card article-image-card">
                                        <img :src="articleForm.image" :alt="articleForm.title || 'Изображение статьи'"
                                            loading="lazy" referrerpolicy="no-referrer">
                                        <div class="photo-gallery-actions">
                                            <label class="photo-gallery-action">
                                                {{ isUploading('article', 'image') ? 'Загрузка...' : 'Изменить' }}
                                                <input type="file" accept="image/*"
                                                    :disabled="isUploading('article', 'image')"
                                                    @change="uploadArticleImage($event)">
                                            </label>
                                            <button type="button" class="photo-gallery-action danger-action"
                                                @click="removeArticleImage">
                                                Удалить
                                            </button>
                                        </div>
                                    </article>
                                    <label v-else class="photo-gallery-add article-image-add"
                                        :class="{ disabled: isUploading('article', 'image') }">
                                        <span class="photo-gallery-plus">+</span>
                                        <strong>
                                            {{ isUploading('article', 'image') ? 'Загрузка...' : 'Добавить изображение' }}
                                        </strong>
                                        <small>Картинка сожмётся и загрузится в AWS</small>
                                        <input type="file" accept="image/*" :disabled="isUploading('article', 'image')"
                                            @change="uploadArticleImage($event)">
                                    </label>
                                </div>
                            </div>
                        </div>

                        <label>Короткое описание<textarea v-model="articleForm.excerpt" rows="3"></textarea></label>

                        <div class="rich-editor-field">
                            <span>Контент статьи</span>
                            <div class="rich-toolbar" aria-label="Форматирование статьи">
                                <button type="button" title="Заголовок" @click="setEditorBlock('h2')">H2</button>
                                <button type="button" title="Подзаголовок" @click="setEditorBlock('h3')">H3</button>
                                <button type="button" title="Обычный текст" @click="setEditorBlock('p')">P</button>
                                <button type="button" title="Жирный" @click="runEditorCommand('bold')">
                                    B
                                </button>
                                <button type="button" title="Курсив" @click="runEditorCommand('italic')">
                                    I
                                </button>
                                <button type="button" title="Маркированный список"
                                    @click="runEditorCommand('insertUnorderedList')">
                                    List
                                </button>
                                <button type="button" title="Нумерованный список"
                                    @click="runEditorCommand('insertOrderedList')">
                                    1.
                                </button>
                                <button type="button" title="Ссылка" @click="createEditorLink">
                                    Link
                                </button>
                                <button type="button" title="Очистить формат" @click="runEditorCommand('removeFormat')">
                                    Clear
                                </button>
                            </div>
                            <div :key="editorRenderKey" ref="articleEditor" class="rich-editor" contenteditable="true"
                                spellcheck="true" @input="syncArticleContent" @blur="syncArticleContent"></div>
                        </div>
                    </form>
                </section>

                <section v-if="activeTab === 'categories'" class="admin-grid">
                    <aside class="admin-list">
                        <button type="button" class="new-button" @click="newCategory">+ Новая тема</button>
                        <div v-if="initialLoading" class="list-skeleton">
                            <span v-for="item in 6" :key="item"></span>
                        </div>
                        <div v-for="category in categories" :key="category.id" role="button" tabindex="0" class="list-item"
                            :class="{ active: categoryForm.id === category.id }" @pointerdown.prevent="pickCategory(category)"
                            @keydown.enter.prevent="pickCategory(category)"
                            @keydown.space.prevent="pickCategory(category)">
                            <strong>{{ category.title }}</strong>
                            <span>{{ articleCountLabel(articles.filter((item) => item.categorySlug === category.slug).length) }}</span>
                        </div>
                    </aside>

                    <form class="editor compact" @submit.prevent="saveCategory">
                        <div class="editor-head">
                            <h2>{{ categoryForm.id ? `Тема #${categoryForm.id}` : 'Новая тема' }}</h2>
                            <div>
                                <button type="button" class="danger" :disabled="!categoryForm.id" @click="deleteCategory">
                                    Удалить
                                </button>
                                <button type="submit" :disabled="saving">Сохранить</button>
                            </div>
                        </div>

                        <div class="form-grid">
                            <label>Название<input v-model="categoryForm.title" type="text"></label>
                            <label>Slug<input v-model="categoryForm.slug" type="text"></label>
                            <label>Цвет<input v-model="categoryForm.color" type="color"></label>
                        </div>
                    </form>
                </section>

                <section v-if="activeTab === 'feedback'" class="feedback-panel">
                    <div class="editor-head">
                        <h2>Оценки страниц</h2>
                    </div>

                    <div v-if="!feedbackItems.length" class="empty-feedback">
                        Оценок пока нет.
                    </div>

                    <div v-else class="feedback-list">
                        <article v-for="item in feedbackItems" :key="item.id" class="feedback-card">
                            <div class="feedback-top">
                                <div>
                                    <strong>{{ item.pageTitle }}</strong>
                                    <span>{{ item.page }}</span>
                                </div>
                                <button type="button" class="danger small" @click="deleteFeedback(item.id)">
                                    Удалить
                                </button>
                            </div>
                            <div class="feedback-rating">{{ ratingStars(Number(item.rating)) }}</div>
                            <p v-if="item.comment">{{ item.comment }}</p>
                            <small>{{ formatDate(item.createdAt) }}</small>
                        </article>
                    </div>
                </section>
            </div>
        </section>
    </main>
</template>

<style scoped>
.admin-page {
    min-height: 100vh;
    padding: 16px;
    background: #FAF9F6;
}

.admin-shell {
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    gap: 16px;
    max-width: 1500px;
    margin: 0 auto;
}

.admin-sidebar,
.admin-list,
.editor,
.feedback-panel {
    border: 1px solid rgba(43, 41, 37, 0.09);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 14px 34px rgba(43, 41, 37, 0.06);
}

.admin-sidebar {
    position: sticky;
    top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: calc(100vh - 32px);
    padding: 18px;
}

.admin-brand p {
    color: #0F5C43;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
}

.admin-brand h1 {
    margin-top: 4px;
    color: #2B2925;
    font-size: 28px;
    line-height: 1.08;
}

.seed-button,
.editor button,
.new-button {
    min-height: 42px;
    border-radius: 999px;
    padding: 0 16px;
    background: #0F5C43;
    color: #FFFFFF;
    font-family: 'Montserrat-Bold', sans-serif;
}

.seed-button:hover,
.editor button:hover,
.new-button:hover {
    background: #0B4433;
}

.seed-button {
    width: 100%;
}

.status-row {
    min-height: 52px;
    margin-top: auto;
    border-radius: 8px;
    background: #F2F0EB;
    padding: 12px;
    color: #6B6864;
    font-size: 13px;
}

.status-row .ok {
    color: #2f7d32;
}

.status-row .error {
    color: #d84f55;
}

.admin-tabs {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.admin-tabs button {
    display: grid;
    grid-template-columns: 22px minmax(0, 1fr) auto;
    align-items: center;
    gap: 8px;
    min-height: 46px;
    border-radius: 8px;
    padding: 0 12px;
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
    text-align: left;
}

.admin-tabs button.active {
    background: #0F5C43;
    color: #fff;
}

.admin-tabs i {
    font-size: 15px;
}

.admin-tabs span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.admin-tabs strong {
    display: grid;
    min-width: 28px;
    height: 28px;
    place-items: center;
    border-radius: 50%;
    background: #E6F0EC;
    color: #0F5C43;
    font-size: 12px;
}

.admin-content {
    position: relative;
    min-width: 0;
}

.admin-loading {
    position: fixed;
    inset: 0;
    z-index: 30;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(250, 249, 246, 0.66);
    backdrop-filter: blur(12px);
}

.admin-loading.initial {
    min-height: 0;
}

.admin-spinner {
    width: 54px;
    height: 54px;
    border: 4px solid #E6F0EC;
    border-top-color: #0F5C43;
    border-radius: 50%;
    animation: admin-spin 0.8s linear infinite;
}

.admin-grid {
    display: grid;
    grid-template-columns: 360px minmax(0, 1fr);
    gap: 18px;
}

.admin-list {
    position: sticky;
    top: 16px;
    z-index: 5;
    overflow: auto;
    max-height: calc(100vh - 32px);
    padding: 12px;
}

.new-button {
    width: 100%;
    margin-bottom: 10px;
}

.list-skeleton {
    display: grid;
    gap: 10px;
}

.list-skeleton span {
    display: block;
    height: 58px;
    overflow: hidden;
    border-radius: 8px;
    background:
        linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.72), transparent),
        #F2F0EB;
    background-size: 220% 100%;
    animation: admin-skeleton 1.1s ease-in-out infinite;
}

.list-item {
    display: grid;
    gap: 5px;
    width: 100%;
    border-radius: 8px;
    padding: 12px;
    color: #2B2925;
    cursor: pointer;
    outline: none;
    text-align: left;
    user-select: none;
    transition: background 0.16s ease, box-shadow 0.16s ease, transform 0.16s ease;
}

.list-item:hover,
.list-item.active {
    background: #E6F0EC;
}

.list-item:hover {
    transform: translateY(-1px);
}

.list-item:focus-visible {
    box-shadow: 0 0 0 3px rgba(15, 92, 67, 0.18);
}

.list-item strong {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.list-item span {
    overflow: hidden;
    color: #6B6864;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.editor {
    padding: 22px;
}

.editor.compact {
    align-self: start;
}

.editor-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 18px;
}

.editor-head h2 {
    color: #2B2925;
    font-size: 24px;
}

.editor-head div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: flex-end;
}

.editor button.danger {
    background: #ffe8e9;
    color: #d84f55;
}

.danger.small {
    min-height: 34px;
    border-radius: 999px;
    padding: 0 12px;
    background: #ffe8e9;
    color: #d84f55;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
}

.editor button.ghost {
    background: #F2F0EB;
    color: #2B2925;
}

.rich-editor-field {
    display: grid;
    gap: 8px;
    margin-top: 14px;
}

.rich-editor-field > span {
    color: #6B6864;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
}

.rich-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    background: #F2F0EB;
    padding: 8px;
}

.rich-toolbar button {
    display: grid;
    min-width: 64px;
    height: 36px;
    place-items: center;
    border-radius: 8px;
    padding: 0 10px;
    border: 1px solid #E3E1DA;
    background: #FFFFFF;
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 13px;
}

.rich-toolbar button:hover {
    border-color: #0F5C43;
    background: #E6F0EC;
    color: #0F5C43;
}

.rich-editor {
    min-height: 420px;
    overflow: auto;
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    background: #fff;
    padding: 18px 20px;
    color: #2B2925;
    line-height: 1.65;
    outline: none;
}

.rich-editor:focus {
    border-color: #0F5C43;
    box-shadow: 0 0 0 3px rgba(15, 92, 67, 0.16);
}

.rich-editor:empty::before {
    content: 'Начните писать статью...';
    color: #9A9A9A;
}

.rich-editor :deep(h2),
.rich-editor :deep(h3) {
    margin: 18px 0 10px;
}

.rich-editor :deep(p) {
    margin: 10px 0;
}

.rich-editor :deep(ul),
.rich-editor :deep(ol) {
    margin: 12px 0;
    padding-left: 22px;
}

.feedback-panel {
    padding: 22px;
}

.empty-feedback {
    border-radius: 8px;
    background: #F2F0EB;
    padding: 32px;
    color: #6B6864;
    text-align: center;
}

.feedback-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
}

.feedback-card {
    display: grid;
    gap: 12px;
    border: 1px solid rgba(43, 41, 37, 0.08);
    border-radius: 8px;
    padding: 16px;
    background: #fff;
}

.feedback-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
}

.feedback-top div {
    display: grid;
    gap: 4px;
}

.feedback-top strong {
    color: #2B2925;
}

.feedback-top span,
.feedback-card small {
    color: #6B6864;
    font-size: 12px;
}

.feedback-rating {
    color: #0F5C43;
    font-size: 22px;
    letter-spacing: 0;
}

.feedback-card p {
    color: #2B2925;
    font-size: 14px;
    line-height: 1.45;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
}

label {
    display: grid;
    gap: 7px;
    margin-bottom: 12px;
    color: #6B6864;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
}

input,
select,
textarea {
    width: 100%;
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    background: #fff;
    padding: 12px;
    color: #2B2925;
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 14px;
}

textarea {
    resize: vertical;
}

.upload-label {
    align-content: start;
}

.upload-row {
    display: flex;
    align-items: center;
    gap: 8px;
}

.upload-button {
    position: relative;
    display: inline-grid;
    min-height: 38px;
    cursor: pointer;
    place-items: center;
    overflow: hidden;
    border: 1px solid #E3E1DA;
    border-radius: 999px;
    background: #F2F0EB;
    padding: 0 14px;
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
    transition: border-color 0.16s ease, background 0.16s ease, color 0.16s ease;
}

.upload-button:hover {
    border-color: #0F5C43;
    background: #E6F0EC;
    color: #0F5C43;
}

.upload-button.disabled {
    cursor: wait;
    opacity: 0.7;
}

.upload-button input {
    position: absolute;
    inset: 0;
    cursor: pointer;
    opacity: 0;
}

.gallery-field {
    grid-column: 1 / -1;
    gap: 12px;
    margin-bottom: 12px;
}

.gallery-field > span:first-child {
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 15px;
}

.photo-gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 12px;
}

.photo-gallery-grid.compact {
    grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
}

.photo-gallery-card,
.photo-gallery-add {
    position: relative;
    min-height: 142px;
    overflow: hidden;
    border: 1px solid #E3E1DA;
    border-radius: 10px;
    background: #FFFFFF;
}

.photo-gallery-card img {
    width: 100%;
    height: 100%;
    min-height: 142px;
    object-fit: cover;
    transition: transform 0.2s ease, filter 0.2s ease;
}

.photo-gallery-card:hover img {
    transform: scale(1.04);
    filter: brightness(0.62);
}

.photo-gallery-tag {
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.9);
    padding: 6px 10px;
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 11px;
}

.photo-gallery-remove {
    position: absolute;
    top: 50%;
    left: 50%;
    cursor: pointer;
    transform: translate(-50%, -40%);
    border: 1px solid rgba(255, 255, 255, 0.55);
    border-radius: 999px;
    background: rgba(43, 41, 37, 0.72);
    padding: 10px 16px;
    color: #FFFFFF;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
    opacity: 0;
    transition: opacity 0.18s ease, transform 0.18s ease, background 0.18s ease;
}

.photo-gallery-card:hover .photo-gallery-remove {
    transform: translate(-50%, -50%);
    opacity: 1;
}

.photo-gallery-remove:hover {
    background: #B42318;
}

.photo-gallery-actions {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    gap: 8px;
    opacity: 0;
    transform: translate(-50%, -40%);
    transition: opacity 0.18s ease, transform 0.18s ease;
}

.photo-gallery-card:hover .photo-gallery-actions {
    opacity: 1;
    transform: translate(-50%, -50%);
}

.photo-gallery-action {
    position: relative;
    display: grid;
    min-height: 40px;
    cursor: pointer;
    place-items: center;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.55);
    border-radius: 999px;
    background: rgba(43, 41, 37, 0.72);
    padding: 0 16px;
    color: #FFFFFF;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
    white-space: nowrap;
    transition: background 0.18s ease;
}

.photo-gallery-action:hover {
    background: #0F5C43;
}

.photo-gallery-action.danger-action:hover {
    background: #B42318;
}

.photo-gallery-action input {
    position: absolute;
    inset: 0;
    cursor: pointer;
    opacity: 0;
}

.photo-gallery-add {
    display: grid;
    cursor: pointer;
    place-items: center;
    align-content: center;
    gap: 8px;
    margin: 0;
    border-style: dashed;
    background: #FAF9F6;
    color: #2B2925;
    text-align: center;
    transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
}

.photo-gallery-add:hover {
    transform: translateY(-1px);
    border-color: #0F5C43;
    background: #E6F0EC;
}

.photo-gallery-add.disabled {
    cursor: wait;
    opacity: 0.72;
}

.photo-gallery-add input {
    position: absolute;
    inset: 0;
    cursor: pointer;
    opacity: 0;
}

.photo-gallery-plus {
    display: grid;
    width: 44px;
    height: 44px;
    place-items: center;
    border-radius: 50%;
    background: #0F5C43;
    color: #FFFFFF;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 30px;
    line-height: 1;
}

.photo-gallery-add strong {
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 14px;
}

.photo-gallery-add small {
    max-width: 150px;
    color: #6B6864;
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 11px;
    line-height: 1.35;
}

.article-image-field {
    grid-column: 1 / -1;
}

.article-image-manager {
    display: grid;
    grid-template-columns: minmax(240px, 420px);
}

.article-image-card,
.article-image-add {
    min-height: 220px;
    max-width: 420px;
}

.article-image-card img {
    min-height: 220px;
}

.units-editor {
    display: grid;
    gap: 14px;
    margin: 6px 0 18px;
}

.section-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}

.section-title-row h3 {
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 18px;
}

.ghost-button {
    border: 1px solid #E3E1DA;
    background: #FFFFFF;
    color: #0F5C43;
}

.ghost-button:hover {
    border-color: #0F5C43;
    background: #E6F0EC;
}

.unit-editor-card {
    display: grid;
    gap: 14px;
    border: 1px solid #E3E1DA;
    border-radius: 12px;
    background: #FFFFFF;
    padding: 14px;
}

.unit-editor-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}

.unit-editor-head strong {
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 15px;
}

.unit-form-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
}

.media-list-field {
    margin-bottom: 12px;
}

.media-list-field > span:first-child {
    color: #6B6864;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
}

.media-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
}

.media-item {
    display: grid;
    gap: 7px;
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    background: #FFFFFF;
    padding: 8px;
}

.media-item img {
    width: 100%;
    aspect-ratio: 1.45;
    border-radius: 6px;
    background: #E6F0EC;
    object-fit: cover;
}

@media (max-width: 980px) {
    .admin-shell {
        grid-template-columns: 1fr;
    }

    .admin-sidebar {
        position: static;
        height: auto;
    }

    .admin-tabs {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .admin-grid {
        grid-template-columns: 1fr;
    }

    .admin-list {
        position: static;
        max-height: 360px;
    }

    .feedback-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .admin-page {
        padding: 10px;
    }

    .editor-head {
        align-items: flex-start;
        flex-direction: column;
    }

    .admin-tabs {
        grid-template-columns: 1fr;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .unit-form-grid {
        grid-template-columns: 1fr;
    }

    .feedback-list {
        grid-template-columns: 1fr;
    }
}

@keyframes admin-spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes admin-skeleton {
    from {
        background-position: 220% 0;
    }

    to {
        background-position: -120% 0;
    }
}
</style>
