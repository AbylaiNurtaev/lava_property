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

const fail = (error: any) => {
    errorMessage.value = error?.data?.message || error?.message || 'Что-то пошло не так'
    message.value = ''
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
    propertyForm.value = structuredClone(property || emptyProperty())
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
            description: propertyForm.value.description,
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
    articleForm.value = structuredClone(article || emptyArticle())
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
    categoryForm.value = structuredClone(category || emptyCategory())
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

                <button type="button" class="seed-button" :disabled="loading" @click="seedDatabase">
                    Заполнить базу
                </button>

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
                    <strong>{{ loadingTitle }}</strong>
                    <span>Данные подтягиваются из MongoDB, это может занять несколько секунд.</span>
                </div>

                <section v-if="activeTab === 'properties'" class="admin-grid">
                    <aside class="admin-list">
                        <button type="button" class="new-button" @click="newProperty">+ Новый объект</button>
                        <div v-if="initialLoading" class="list-skeleton">
                            <span v-for="item in 8" :key="item"></span>
                        </div>
                        <button v-for="property in properties" :key="property.id" type="button" class="list-item"
                            :class="{ active: propertyForm.id === property.id }" @click="pickProperty(property)">
                            <strong>{{ property.name || `Объект #${property.id}` }}</strong>
                            <span>{{ property.location || property.city }}</span>
                        </button>
                    </aside>

                    <form class="editor" @submit.prevent="saveProperty">
                        <div class="editor-head">
                            <h2>{{ propertyForm.id ? `Объект #${propertyForm.id}` : 'Новый объект' }}</h2>
                            <div>
                                <button type="button" class="ghost" @click="syncPropertyJson">Обновить JSON</button>
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
                            <label>Главная картинка<input v-model="propertyForm.firstImg" type="text"></label>
                            <label>Фоновая картинка<input v-model="propertyForm.bgImg" type="text"></label>
                            <label>Тип<input v-model="propertyForm.specs.propertyType" type="text"></label>
                            <label>Спальни<input v-model="propertyForm.specs.bedrooms" type="text"></label>
                            <label>Ванные<input v-model="propertyForm.specs.bathrooms" type="text"></label>
                            <label>Площадь<input v-model="propertyForm.specs.areaTotal" type="text"></label>
                        </div>

                        <label>Описание<textarea v-model="propertyForm.description" rows="5"></textarea></label>
                        <label>Полный JSON объекта<textarea v-model="propertyJson" rows="14" spellcheck="false"></textarea></label>
                    </form>
                </section>

                <section v-if="activeTab === 'articles'" class="admin-grid">
                    <aside class="admin-list">
                        <button type="button" class="new-button" @click="newArticle">+ Новая статья</button>
                        <div v-if="initialLoading" class="list-skeleton">
                            <span v-for="item in 8" :key="item"></span>
                        </div>
                        <button v-for="article in articles" :key="article.id" type="button" class="list-item"
                            :class="{ active: articleForm.id === article.id }" @click="pickArticle(article)">
                            <strong>{{ article.title || `Статья #${article.id}` }}</strong>
                            <span>{{ article.categoryTitle || article.categorySlug }}</span>
                        </button>
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
                            <label>Картинка ссылкой<input v-model="articleForm.image" type="text"></label>
                        </div>

                        <label>Короткое описание<textarea v-model="articleForm.excerpt" rows="3"></textarea></label>

                        <div class="rich-editor-field">
                            <span>Контент статьи</span>
                            <div class="rich-toolbar" aria-label="Форматирование статьи">
                                <button type="button" title="Заголовок" @click="setEditorBlock('h2')">H2</button>
                                <button type="button" title="Подзаголовок" @click="setEditorBlock('h3')">H3</button>
                                <button type="button" title="Обычный текст" @click="setEditorBlock('p')">P</button>
                                <button type="button" title="Жирный" @click="runEditorCommand('bold')">
                                    <i class="pi pi-bold"></i>
                                </button>
                                <button type="button" title="Курсив" @click="runEditorCommand('italic')">
                                    <i class="pi pi-italic"></i>
                                </button>
                                <button type="button" title="Маркированный список"
                                    @click="runEditorCommand('insertUnorderedList')">
                                    <i class="pi pi-list"></i>
                                </button>
                                <button type="button" title="Нумерованный список"
                                    @click="runEditorCommand('insertOrderedList')">
                                    1.
                                </button>
                                <button type="button" title="Ссылка" @click="createEditorLink">
                                    <i class="pi pi-link"></i>
                                </button>
                                <button type="button" title="Очистить формат" @click="runEditorCommand('removeFormat')">
                                    <i class="pi pi-eraser"></i>
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
                        <button v-for="category in categories" :key="category.id" type="button" class="list-item"
                            :class="{ active: categoryForm.id === category.id }" @click="pickCategory(category)">
                            <strong>{{ category.title }}</strong>
                            <span>{{ articleCountLabel(articles.filter((item) => item.categorySlug === category.slug).length) }}</span>
                        </button>
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
    position: sticky;
    top: 16px;
    z-index: 30;
    display: grid;
    grid-template-columns: 34px minmax(0, auto);
    align-items: center;
    gap: 4px 12px;
    margin-bottom: 12px;
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.94);
    padding: 14px 16px;
    box-shadow: 0 16px 40px rgba(43, 41, 37, 0.1);
    backdrop-filter: blur(12px);
}

.admin-loading.initial {
    min-height: 86px;
}

.admin-loading strong {
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
}

.admin-loading span {
    grid-column: 2;
    color: #6B6864;
    font-size: 13px;
}

.admin-spinner {
    grid-row: span 2;
    width: 30px;
    height: 30px;
    border: 3px solid #E6F0EC;
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
    text-align: left;
}

.list-item:hover,
.list-item.active {
    background: #E6F0EC;
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
    min-width: 36px;
    height: 36px;
    place-items: center;
    border-radius: 8px;
    padding: 0 10px;
    background: #fff;
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
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
