<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { usePropertyStore } from '~/stores/useProperties'

const propertyStore = usePropertyStore()
const config = useRuntimeConfig()

const desktopMapEl = ref<HTMLElement | null>(null)
const mobileMapEl = ref<HTMLElement | null>(null)
const mapError = ref('')

const PHUKET_MAP_VIEW = {
    center: { lat: 7.92, lng: 98.36 },
    zoom: 11,
}

const emptyFilters = () => ({
    city: 'phuket',
    type: '',
    district: '',
    complex: '',
    rooms: '',
    priceMin: '',
    priceMax: '',
    areaMin: '',
    areaMax: '',
})

const filterForm = ref(emptyFilters())
const appliedFilters = ref(emptyFilters())
const listingImageIndexes = ref<Record<string, number>>({})

const properties = computed(() =>
    (propertyStore.getAllBestProperties || []).filter((item: any) => Array.isArray(item?.coordinates))
)

const cityOptions = [
    { label: 'Все города', value: '' },
    { label: 'Пхукет', value: 'phuket' },
    { label: 'Паттайя', value: 'pattaya' },
]

const typeOptions = [
    { label: 'Любой тип', value: '' },
    { label: 'Квартира', value: 'Апартаменты' },
    { label: 'Вилла', value: 'Вилла' },
]

const roomOptions = [
    { label: 'Любые', value: '' },
    { label: 'Студия', value: '0' },
    { label: '1 комната', value: '1' },
    { label: '2 комнаты', value: '2' },
    { label: '3 комнаты', value: '3' },
    { label: '4+', value: '4' },
]

const uniqueOptions = (values: string[]) =>
    Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b, 'ru'))

const districtOptions = computed(() =>
    uniqueOptions(
        properties.value
            .filter((item: any) => !filterForm.value.city || item.city === filterForm.value.city)
            .map((item: any) => String(item.location || '').split(',')[0]?.trim())
    )
)

const complexOptions = computed(() =>
    uniqueOptions(
        properties.value
            .filter((item: any) => !filterForm.value.city || item.city === filterForm.value.city)
            .filter((item: any) => !filterForm.value.type || String(item?.specs?.propertyType || '').includes(filterForm.value.type))
            .filter((item: any) => !filterForm.value.district || String(item.location || '').split(',')[0]?.trim() === filterForm.value.district)
            .map((item: any) => String(item.name || '').trim())
    )
)

watch(() => filterForm.value.city, () => {
    if (filterForm.value.district && !districtOptions.value.includes(filterForm.value.district)) {
        filterForm.value.district = ''
    }
    if (filterForm.value.complex && !complexOptions.value.includes(filterForm.value.complex)) {
        filterForm.value.complex = ''
    }
})

watch(() => [filterForm.value.type, filterForm.value.district], () => {
    if (filterForm.value.complex && !complexOptions.value.includes(filterForm.value.complex)) {
        filterForm.value.complex = ''
    }
})

const parseNumbers = (value: any) =>
    String(value ?? '')
        .replace(',', '.')
        .match(/\d+(?:\.\d+)?/g)
        ?.map(Number)
        .filter((item) => Number.isFinite(item)) || []

const minNumber = (value: any) => {
    const numbers = parseNumbers(value)
    return numbers.length ? Math.min(...numbers) : 0
}

const maxNumber = (value: any) => {
    const numbers = parseNumbers(value)
    return numbers.length ? Math.max(...numbers) : 0
}

const normalizePrice = (value: any) => Number(String(value ?? '').replace(/[^\d]/g, '')) || 0

const rangeBounds = (values: number[], fallbackMin: number, fallbackMax: number, step = 1) => {
    const usable = values.filter((item) => Number.isFinite(item) && item > 0)
    if (!usable.length) return { min: fallbackMin, max: fallbackMax }
    const min = Math.max(0, Math.floor(Math.min(...usable) / step) * step)
    const max = Math.ceil(Math.max(...usable) / step) * step
    return min === max ? { min, max: min + step } : { min, max }
}

const priceBounds = computed(() =>
    rangeBounds(properties.value.map((item: any) => normalizePrice(item?.priceDollars)), 0, 1000000, 1000)
)

const areaBounds = computed(() =>
    rangeBounds(properties.value.flatMap((item: any) => [
        minNumber(item?.specs?.areaTotal),
        maxNumber(item?.specs?.areaTotal),
    ]), 0, 250, 1)
)

const boundedNumber = (value: any, fallback: number, min: number, max: number) => {
    if (value === '' || value === null || value === undefined) return fallback
    const number = Number(value)
    if (!Number.isFinite(number)) return fallback
    return Math.min(Math.max(number, min), max)
}

const priceMinValue = computed({
    get: () => boundedNumber(filterForm.value.priceMin, priceBounds.value.min, priceBounds.value.min, priceBounds.value.max),
    set: (value: number) => {
        filterForm.value.priceMin = String(Math.min(Number(value), priceMaxValue.value))
    },
})

const priceMaxValue = computed({
    get: () => boundedNumber(filterForm.value.priceMax, priceBounds.value.max, priceBounds.value.min, priceBounds.value.max),
    set: (value: number) => {
        filterForm.value.priceMax = String(Math.max(Number(value), priceMinValue.value))
    },
})

const areaMinValue = computed({
    get: () => boundedNumber(filterForm.value.areaMin, areaBounds.value.min, areaBounds.value.min, areaBounds.value.max),
    set: (value: number) => {
        filterForm.value.areaMin = String(Math.min(Number(value), areaMaxValue.value))
    },
})

const areaMaxValue = computed({
    get: () => boundedNumber(filterForm.value.areaMax, areaBounds.value.max, areaBounds.value.min, areaBounds.value.max),
    set: (value: number) => {
        filterForm.value.areaMax = String(Math.max(Number(value), areaMinValue.value))
    },
})

const rangeOverlaps = (itemMin: number, itemMax: number, filterMin: any, filterMax: any) => {
    const min = Number(filterMin) || 0
    const max = Number(filterMax) || 0
    if (min && itemMax < min) return false
    if (max && itemMin > max) return false
    return true
}

const propertyMatchesFilters = (item: any, filters: ReturnType<typeof emptyFilters>) => {
    const propertyType = String(item?.specs?.propertyType || '')
    const district = String(item?.location || '').split(',')[0]?.trim()
    const price = normalizePrice(item?.priceDollars)
    const areaMin = minNumber(item?.specs?.areaTotal)
    const areaMax = maxNumber(item?.specs?.areaTotal) || areaMin
    const bedroomsMin = minNumber(item?.specs?.bedrooms)
    const bedroomsMax = maxNumber(item?.specs?.bedrooms) || bedroomsMin
    const selectedRooms = Number(filters.rooms)

    if (filters.city && item?.city !== filters.city) return false
    if (filters.type && !propertyType.includes(filters.type)) return false
    if (filters.district && district !== filters.district) return false
    if (filters.complex && item?.name !== filters.complex) return false
    if (filters.rooms && (bedroomsMax < selectedRooms || bedroomsMin > selectedRooms)) return false
    if (!rangeOverlaps(price, price, filters.priceMin, filters.priceMax)) return false
    if (!rangeOverlaps(areaMin, areaMax, filters.areaMin, filters.areaMax)) return false

    return true
}

const filteredItems = computed(() =>
    properties.value.filter((item: any) => propertyMatchesFilters(item, appliedFilters.value))
)

const previewCount = computed(() =>
    properties.value.filter((item: any) => propertyMatchesFilters(item, filterForm.value)).length
)

const applyFilters = () => {
    appliedFilters.value = { ...filterForm.value }
}

const resetFilters = () => {
    filterForm.value = emptyFilters()
    appliedFilters.value = emptyFilters()
}

const priceRangeLabel = computed(() => {
    return `$${priceMinValue.value.toLocaleString('ru-RU')} - $${priceMaxValue.value.toLocaleString('ru-RU')}`
})

const areaRangeLabel = computed(() => {
    return `${areaMinValue.value} - ${areaMaxValue.value} м²`
})

const fmt = (value: any) => value || ''

const uniqueImages = (images: any[]) =>
    Array.from(new Set(images.filter((item) => typeof item === 'string' && item.trim())))

const listingImages = (property: any) =>
    uniqueImages([
        property?.firstImg,
        property?.bgImg,
        property?.bigImg,
        ...(Array.isArray(property?.galleryExterior) ? property.galleryExterior : []),
        ...(Array.isArray(property?.galleryInterior) ? property.galleryInterior : []),
    ]).slice(0, 5)

const listingImageIndex = (property: any) => {
    const images = listingImages(property)
    const index = listingImageIndexes.value[String(property?.id)] || 0
    return Math.min(index, Math.max(images.length - 1, 0))
}

const listingImage = (property: any) =>
    listingImages(property)[listingImageIndex(property)] || property?.firstImg || property?.bgImg || '/img/fallback.webp'

const updateListingImage = (event: MouseEvent, property: any) => {
    const images = listingImages(property)
    if (images.length < 2) return

    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    const ratio = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 0.999)
    listingImageIndexes.value[String(property.id)] = Math.floor(ratio * images.length)
}

const resetListingImage = (property: any) => {
    listingImageIndexes.value[String(property?.id)] = 0
}

const cityLabel = (city: string) => {
    if (city === 'phuket') return 'Пхукет'
    if (city === 'pattaya') return 'Паттайя'
    return 'Таиланд'
}

const escapeHtml = (value: any) =>
    String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;')

const propertyUrl = (property: any) => `/objects/${property.id}`

const markerIcon = () => ({
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
            <circle cx="21" cy="21" r="19" fill="#0F5C43" stroke="#ffffff" stroke-width="4"/>
            <path d="M11 21.2 21 12l10 9.2v10.3a1.5 1.5 0 0 1-1.5 1.5h-5.8v-7.4h-5.4V33h-5.8a1.5 1.5 0 0 1-1.5-1.5V21.2Z" fill="#FFFFFF"/>
        </svg>
    `)}`,
    scaledSize: new google.maps.Size(42, 42),
    anchor: new google.maps.Point(21, 42),
})

const infoWindowHtml = (property: any) => `
    <a class="google-info-card" href="${propertyUrl(property)}">
        <span class="google-info-image" style="background-image:url('${escapeHtml(property.firstImg || property.bgImg || '/img/fallback.webp')}')"></span>
        <span class="google-info-body">
            <strong>${escapeHtml(property.priceDollars)}</strong>
            <span class="google-info-title">${escapeHtml(property.name)}</span>
            <span class="google-info-location">${escapeHtml(property.location)}</span>
            <span class="google-info-specs">
                <span>${escapeHtml(property.specs?.bedrooms)} сп.</span>
                <span>${escapeHtml(property.specs?.bathrooms)} ван.</span>
                <span>${escapeHtml(property.specs?.areaTotal)}</span>
                <span>${escapeHtml(property.specs?.propertyType)}</span>
            </span>
        </span>
    </a>
`

const createGoogleMap = (target: HTMLElement, Google: typeof google) => {
    const map = new Google.maps.Map(target, {
        center: PHUKET_MAP_VIEW.center,
        zoom: PHUKET_MAP_VIEW.zoom,
        disableDefaultUI: false,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        clickableIcons: false,
        styles: [
            { featureType: 'poi.business', stylers: [{ visibility: 'off' }] },
            { featureType: 'poi.medical', stylers: [{ visibility: 'off' }] },
        ],
    })

    const infoWindow = new Google.maps.InfoWindow({
        disableAutoPan: false,
        maxWidth: 320,
    })
    let closeTimer: ReturnType<typeof window.setTimeout> | null = null
    let infoHovered = false

    const clearCloseTimer = () => {
        if (!closeTimer) return
        window.clearTimeout(closeTimer)
        closeTimer = null
    }

    const closeInfoWindow = () => {
        clearCloseTimer()
        infoWindow.close()
        infoHovered = false
    }

    const scheduleCloseInfoWindow = () => {
        clearCloseTimer()
        closeTimer = window.setTimeout(() => {
            if (!infoHovered) closeInfoWindow()
        }, 260)
    }

    infoWindow.addListener('domready', () => {
        const card = document.querySelector('.google-info-card')
        if (!card) return

        card.addEventListener('mouseenter', () => {
            infoHovered = true
            clearCloseTimer()
        })
        card.addEventListener('mouseleave', () => {
            infoHovered = false
            scheduleCloseInfoWindow()
        })
    })

    properties.value.forEach((property: any) => {
        const [lng, lat] = property.coordinates
        const position = { lat, lng }

        const marker = new Google.maps.Marker({
            position,
            map,
            title: property.name,
            icon: markerIcon(),
            optimized: true,
        })

        marker.addListener('mouseover', () => {
            infoHovered = false
            clearCloseTimer()
            infoWindow.setContent(infoWindowHtml(property))
            infoWindow.open({ map, anchor: marker })
        })

        marker.addListener('mouseout', () => {
            scheduleCloseInfoWindow()
        })

        marker.addListener('click', () => {
            window.location.href = propertyUrl(property)
        })
    })

    map.setCenter(PHUKET_MAP_VIEW.center)
    map.setZoom(PHUKET_MAP_VIEW.zoom)
}

onMounted(async () => {
    await nextTick()

    const apiKey = String(config.public.googleMapsApiKey || '')
    if (!apiKey) {
        mapError.value = 'Добавьте NUXT_PUBLIC_GOOGLE_MAPS_API_KEY, чтобы включить Google Maps.'
        return
    }

    try {
        const { setOptions, importLibrary } = await import('@googlemaps/js-api-loader')
        setOptions({
            key: apiKey,
            v: 'weekly',
            language: 'ru',
        })
        await importLibrary('maps')
        await importLibrary('marker')
        const Google = window.google

        if (desktopMapEl.value) createGoogleMap(desktopMapEl.value, Google)
        if (mobileMapEl.value) createGoogleMap(mobileMapEl.value, Google)
    } catch (error) {
        mapError.value = 'Google Maps не загрузилась. Проверьте API key и доступ к Maps JavaScript API.'
        console.error(error)
    }
})
</script>

<template>
    <main class="catalog-map-page">
        <section class="catalog-panel">
            <div class="catalog-heading">
                <p class="catalog-eyebrow">Lava Property</p>
                <h1>Каталог недвижимости в Таиланде</h1>
                <p>{{ filteredItems.length }} объектов в подборке</p>
            </div>

            <form class="catalog-filter" @submit.prevent="applyFilters">
                <div class="filter-main-row">
                    <label class="filter-select">
                        <span>Город</span>
                        <select v-model="filterForm.city">
                            <option v-for="option in cityOptions" :key="option.value" :value="option.value">
                                {{ option.label }}
                            </option>
                        </select>
                    </label>

                    <label class="filter-select">
                        <span>Тип</span>
                        <select v-model="filterForm.type">
                            <option v-for="option in typeOptions" :key="option.value" :value="option.value">
                                {{ option.label }}
                            </option>
                        </select>
                    </label>

                    <label class="filter-select">
                        <span>Район</span>
                        <select v-model="filterForm.district">
                            <option value="">Любой район</option>
                            <option v-for="district in districtOptions" :key="district" :value="district">
                                {{ district }}
                            </option>
                        </select>
                    </label>

                    <label class="filter-select">
                        <span>Жилкомплекс</span>
                        <select v-model="filterForm.complex">
                            <option value="">Любой ЖК</option>
                            <option v-for="complex in complexOptions" :key="complex" :value="complex">
                                {{ complex }}
                            </option>
                        </select>
                    </label>

                    <label class="filter-select">
                        <span>Комнаты</span>
                        <select v-model="filterForm.rooms">
                            <option v-for="option in roomOptions" :key="option.value" :value="option.value">
                                {{ option.label }}
                            </option>
                        </select>
                    </label>
                </div>

                <div class="filter-extra-row">
                    <div class="filter-range-card">
                        <div class="range-head">
                            <span>Цена, $</span>
                        </div>
                        <strong>{{ priceRangeLabel }}</strong>
                        <div class="range-slider">
                            <input v-model.number="priceMinValue" type="range" :min="priceBounds.min"
                                :max="priceBounds.max" step="1000" aria-label="Минимальная цена">
                            <input v-model.number="priceMaxValue" type="range" :min="priceBounds.min"
                                :max="priceBounds.max" step="1000" aria-label="Максимальная цена">
                        </div>
                        <div class="range-inputs">
                            <label>от<input v-model.number="priceMinValue" inputmode="numeric" type="number"></label>
                            <label>до<input v-model.number="priceMaxValue" inputmode="numeric" type="number"></label>
                        </div>
                    </div>

                    <div class="filter-range-card">
                        <div class="range-head">
                            <span>Площадь, м²</span>
                        </div>
                        <strong>{{ areaRangeLabel }}</strong>
                        <div class="range-slider">
                            <input v-model.number="areaMinValue" type="range" :min="areaBounds.min"
                                :max="areaBounds.max" step="1" aria-label="Минимальная площадь">
                            <input v-model.number="areaMaxValue" type="range" :min="areaBounds.min"
                                :max="areaBounds.max" step="1" aria-label="Максимальная площадь">
                        </div>
                        <div class="range-inputs">
                            <label>от<input v-model.number="areaMinValue" inputmode="numeric" type="number"></label>
                            <label>до<input v-model.number="areaMaxValue" inputmode="numeric" type="number"></label>
                        </div>
                    </div>

                    <div class="filter-actions">
                        <button type="submit" class="show-button">
                            Показать {{ previewCount }} объектов
                        </button>
                        <button type="button" class="reset-button" @click="resetFilters">
                            Сбросить
                        </button>
                    </div>
                </div>
            </form>

            <div class="mobile-map">
                <div ref="mobileMapEl" class="google-map"></div>
                <div v-if="mapError" class="map-error">{{ mapError }}</div>
            </div>

            <div class="listing-grid">
                <NuxtLink v-for="item in filteredItems" :key="item.id" :to="propertyUrl(item)" class="listing-card">
                    <div class="listing-image" :style="{ backgroundImage: `url(${listingImage(item)})` }"
                        @mousemove="updateListingImage($event, item)" @mouseleave="resetListingImage(item)">
                        <span v-if="item.new" class="badge">New</span>
                        <span class="city">{{ cityLabel(item.city) }}</span>
                        <div v-if="listingImages(item).length > 1" class="image-progress" aria-hidden="true">
                            <span v-for="(_, imageIndex) in listingImages(item)" :key="imageIndex"
                                :class="{ active: listingImageIndex(item) === imageIndex }"></span>
                        </div>
                    </div>

                    <div class="listing-body">
                        <div class="listing-topline">
                            <span>{{ fmt(item.location) }}</span>
                            <span>{{ fmt(item.specs?.propertyType) }}</span>
                        </div>

                        <h2>{{ item.name }}</h2>

                        <div class="price-row">
                            <strong>{{ fmt(item.priceDollars) }}</strong>
                            <span>{{ fmt(item.priceTHB) }}</span>
                        </div>

                        <div class="spec-row">
                            <span>{{ fmt(item.specs?.bedrooms) }} сп.</span>
                            <span>{{ fmt(item.specs?.bathrooms) }} ван.</span>
                            <span>{{ fmt(item.specs?.areaTotal) }}</span>
                        </div>
                    </div>
                </NuxtLink>

                <div v-if="!filteredItems.length" class="empty-state">
                    Под выбранные фильтры ничего не нашлось.
                </div>
            </div>
        </section>

        <aside class="desktop-map" aria-label="Карта объектов недвижимости">
            <div ref="desktopMapEl" class="google-map"></div>
            <div v-if="mapError" class="map-error">{{ mapError }}</div>
        </aside>
    </main>
</template>

<style scoped>
.catalog-map-page {
    min-height: 100vh;
    background: #FAF9F6;
}

.catalog-panel {
    width: 65vw;
    min-height: 100vh;
    padding: 124px 18px 40px;
}

.catalog-heading {
    margin-bottom: 18px;
}

.catalog-eyebrow {
    color: #0F5C43;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
}

.catalog-heading h1 {
    margin-top: 4px;
    color: #2B2925;
    font-size: 28px;
    line-height: 1.08;
}

.catalog-heading p:last-child {
    margin-top: 6px;
    color: #6B6864;
}

.catalog-filter {
    display: grid;
    gap: 16px;
    margin-bottom: 16px;
    padding: 10px 10px 18px;
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 12px 28px rgba(43, 41, 37, 0.06);
    backdrop-filter: blur(14px);
}

.filter-main-row {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    overflow: hidden;
    border: 1px solid #D8D5CD;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0 0 0 6px rgba(43, 41, 37, 0.06);
}

.filter-select {
    position: relative;
    display: grid;
    gap: 6px;
    min-width: 0;
    margin: 0;
    border-right: 1px solid #E3E1DA;
    background: #FFFFFF;
    padding: 16px 18px;
}

.filter-select:last-child {
    border-right: 0;
}

.filter-select span,
.range-head span {
    color: #6B6864;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
}

.filter-select select {
    min-width: 0;
    width: 100%;
    border: 0;
    background: transparent;
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 18px;
    outline: none;
    appearance: none;
}

.filter-select::after {
    content: '⌄';
    position: absolute;
    right: 16px;
    bottom: 18px;
    color: #8A8F94;
    pointer-events: none;
}

.filter-extra-row {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr) minmax(220px, 0.9fr);
    gap: 18px;
    padding: 0 8px;
}

.filter-range-card {
    display: grid;
    gap: 10px;
    min-width: 0;
}

.range-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}

.filter-range-card strong {
    color: #0F5C43;
    font-size: 19px;
    line-height: 1;
}

.range-slider {
    position: relative;
    height: 28px;
}

.range-slider::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    height: 4px;
    border-radius: 999px;
    background: #E6F0EC;
    transform: translateY(-50%);
}

.range-slider input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 28px;
    margin: 0;
    background: transparent;
    pointer-events: none;
    appearance: none;
}

.range-slider input::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    border: 4px solid #FFFFFF;
    border-radius: 50%;
    background: #0F5C43;
    box-shadow: 0 4px 12px rgba(43, 41, 37, 0.16);
    cursor: pointer;
    pointer-events: auto;
    appearance: none;
}

.range-slider input::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border: 4px solid #FFFFFF;
    border-radius: 50%;
    background: #0F5C43;
    box-shadow: 0 4px 12px rgba(43, 41, 37, 0.16);
    cursor: pointer;
    pointer-events: auto;
}

.range-inputs {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
}

.range-inputs label {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px;
    color: #6B6864;
    font-size: 13px;
}

.range-inputs input {
    min-width: 0;
    height: 38px;
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    background: #FFFFFF;
    padding: 0 12px;
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 14px;
    outline: none;
}

.range-inputs input:focus {
    border-color: #0F5C43;
    box-shadow: 0 0 0 3px rgba(15, 92, 67, 0.12);
}

.filter-actions {
    display: grid;
    align-content: end;
    gap: 10px;
}

.show-button,
.reset-button {
    min-height: 54px;
    border-radius: 8px;
    padding: 0 18px;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 15px;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.show-button {
    background: #0F5C43;
    color: #FFFFFF;
}

.show-button:hover {
    background: #0B4433;
}

.reset-button {
    min-height: 38px;
    border: 1px solid #E3E1DA;
    background: #FFFFFF;
    color: #6B6864;
}

.reset-button:hover {
    border-color: #0F5C43;
    color: #0F5C43;
}

.listing-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
}

.listing-card {
    display: block;
    overflow: hidden;
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    background: #fff;
    color: #2B2925;
    box-shadow: 0 12px 30px rgba(43, 41, 37, 0.06);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.listing-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 38px rgba(43, 41, 37, 0.1);
}

.listing-image {
    position: relative;
    aspect-ratio: 1.28;
    background-size: cover;
    background-position: center;
    transition: background-image 0.16s ease;
}

.badge,
.city {
    position: absolute;
    top: 10px;
    border-radius: 999px;
    padding: 6px 9px;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 11px;
}

.badge {
    left: 10px;
    background: #0F5C43;
    color: #FFFFFF;
}

.city {
    right: 10px;
    background: rgba(255, 255, 255, 0.92);
    color: #2B2925;
}

.image-progress {
    position: absolute;
    right: 10px;
    bottom: 10px;
    left: 10px;
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    gap: 4px;
    opacity: 0;
    transition: opacity 0.18s ease;
}

.listing-card:hover .image-progress {
    opacity: 1;
}

.image-progress span {
    height: 3px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.58);
    box-shadow: 0 1px 4px rgba(43, 41, 37, 0.22);
}

.image-progress span.active {
    background: #FFFFFF;
}

.listing-body {
    padding: 14px;
}

.listing-topline,
.spec-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    color: #6B6864;
    font-size: 12px;
}

.listing-body h2 {
    min-height: 46px;
    margin: 8px 0;
    color: #2B2925;
    font-size: 17px;
    line-height: 1.25;
}

.price-row {
    display: grid;
    gap: 2px;
    margin: 10px 0;
}

.price-row strong {
    color: #2B2925;
    font-size: 20px;
}

.price-row span {
    color: #6B6864;
    font-size: 12px;
}

.spec-row span {
    border-radius: 999px;
    background: #E6F0EC;
    padding: 6px 8px;
}

.desktop-map {
    position: fixed;
    top: 102px;
    right: 0;
    bottom: 0;
    width: 35vw;
    border-left: 1px solid #E3E1DA;
    background: #E6F0EC;
}

.google-map {
    width: 100%;
    height: 100%;
}

.mobile-map {
    position: relative;
    display: none;
    overflow: hidden;
    height: 360px;
    margin-bottom: 16px;
    border-radius: 8px;
    background: #E6F0EC;
}

.map-error {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: #E6F0EC;
    color: #2B2925;
    text-align: center;
    font-family: 'Montserrat-Bold', sans-serif;
}

:deep(.gm-style-iw) {
    padding: 0 !important;
    border-radius: 8px !important;
}

:deep(.gm-style-iw-chr),
:deep(.gm-ui-hover-effect) {
    display: none !important;
}

:deep(.gm-style-iw-d) {
    overflow: hidden !important;
}

:deep(.google-info-card) {
    display: block;
    width: 300px;
    overflow: hidden;
    background: #fff;
    color: #2B2925;
    text-decoration: none;
}

:deep(.google-info-image) {
    display: block;
    width: 100%;
    height: 148px;
    background-size: cover;
    background-position: center;
}

:deep(.google-info-body) {
    display: grid;
    gap: 7px;
    padding: 13px;
}

:deep(.google-info-body strong) {
    color: #d84f55;
    font-size: 24px;
    line-height: 1;
}

:deep(.google-info-title) {
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 19px;
    line-height: 1.15;
}

:deep(.google-info-location) {
    color: #6B6864;
    font-size: 14px;
    line-height: 1.3;
}

:deep(.google-info-specs) {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
    margin-top: 4px;
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 13px;
}

.empty-state {
    grid-column: 1 / -1;
    padding: 48px 20px;
    border-radius: 8px;
    background: #fff;
    color: #6B6864;
    text-align: center;
}

@media (max-width: 1180px) {
    .catalog-panel {
        width: 62vw;
    }

    .desktop-map {
        width: 38vw;
    }

    .listing-grid {
        grid-template-columns: 1fr;
    }

    .filter-main-row {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .filter-select:nth-child(2n) {
        border-right: 0;
    }

    .filter-select:last-child {
        grid-column: 1 / -1;
    }

    .filter-extra-row {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 900px) {
    .catalog-panel {
        width: 100%;
        padding: 108px 18px 40px;
    }

    .desktop-map {
        display: none;
    }

    .mobile-map {
        display: block;
    }

    .filter-main-row {
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }

    .filter-select {
        min-height: 68px;
        padding: 12px;
    }

    .filter-select:nth-child(2n) {
        border-right: 1px solid #E3E1DA;
    }

    .filter-select:last-child {
        grid-column: auto;
        border-right: 0;
    }

    .filter-select select {
        font-size: 15px;
    }

    .listing-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .catalog-panel {
        padding: 96px 14px 32px;
    }

    .catalog-heading h1 {
        font-size: 25px;
    }

    .catalog-filter {
        gap: 12px;
    }

    .filter-main-row {
        grid-template-columns: 1fr;
        box-shadow: 0 0 0 4px rgba(43, 41, 37, 0.06);
    }

    .filter-select,
    .filter-select:nth-child(2n),
    .filter-select:last-child {
        border-right: 0;
        border-bottom: 1px solid #E3E1DA;
    }

    .filter-select:last-child {
        border-bottom: 0;
    }

    .filter-extra-row {
        padding: 0 2px;
    }

    .range-inputs {
        grid-template-columns: 1fr;
    }

    .listing-grid {
        grid-template-columns: 1fr;
    }
}
</style>
