<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { usePropertyStore } from '~/stores/useProperties'

const propertyStore = usePropertyStore()
const config = useRuntimeConfig()

const desktopMapEl = ref<HTMLElement | null>(null)
const mobileMapEl = ref<HTMLElement | null>(null)
const mapError = ref('')

const selected = ref(new Set(['Все объекты']))

const chips = ['Все объекты', 'Апартаменты', 'Виллы', 'Новинки рынка', 'Пхукет', 'Паттайя']
const TYPE_GROUP = new Set(['Апартаменты', 'Виллы'])
const CITY_GROUP = new Set(['Пхукет', 'Паттайя'])

const properties = computed(() =>
    (propertyStore.getAllBestProperties || []).filter((item: any) => Array.isArray(item?.coordinates))
)

const matchers: Record<string, (item: any) => boolean> = {
    'Апартаменты': (item) => String(item?.specs?.propertyType || '').includes('Апартаменты'),
    'Виллы': (item) => String(item?.specs?.propertyType || '').includes('Вилла'),
    'Новинки рынка': (item) => !!item?.new,
    'Пхукет': (item) => item?.city === 'phuket',
    'Паттайя': (item) => item?.city === 'pattaya',
}

const toggle = (label: string) => {
    const s = new Set(selected.value)

    if (label === 'Все объекты') {
        selected.value = new Set(['Все объекты'])
        return
    }

    s.delete('Все объекты')

    if (s.has(label)) {
        s.delete(label)
        selected.value = s.size ? s : new Set(['Все объекты'])
        return
    }

    if (TYPE_GROUP.has(label)) for (const item of TYPE_GROUP) s.delete(item)
    if (CITY_GROUP.has(label)) for (const item of CITY_GROUP) s.delete(item)

    s.add(label)
    selected.value = s
}

const isActive = (label: string) => selected.value.has(label)

const filteredItems = computed(() => {
    const active = Array.from(selected.value).filter((label) => label !== 'Все объекты')
    if (!active.length) return properties.value

    return properties.value.filter((item: any) =>
        active.every((label) => (matchers[label] ? matchers[label](item) : true))
    )
})

const fmt = (value: any) => value || ''

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
            <circle cx="21" cy="21" r="19" fill="#96D630" stroke="#ffffff" stroke-width="4"/>
            <path d="M11 21.2 21 12l10 9.2v10.3a1.5 1.5 0 0 1-1.5 1.5h-5.8v-7.4h-5.4V33h-5.8a1.5 1.5 0 0 1-1.5-1.5V21.2Z" fill="#172E4D"/>
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
        center: { lat: 10.42, lng: 99.34 },
        zoom: 6,
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

    const bounds = new Google.maps.LatLngBounds()
    const infoWindow = new Google.maps.InfoWindow({
        disableAutoPan: false,
        maxWidth: 320,
    })
    let removeHoverWatcher: (() => void) | null = null

    const closeInfoWindow = () => {
        infoWindow.close()
        removeHoverWatcher?.()
        removeHoverWatcher = null
    }

    const watchHoverExit = () => {
        removeHoverWatcher?.()

        const handleMove = (event: MouseEvent) => {
            const targetElement = event.target as Element | null
            if (targetElement?.closest('img[src^="data:image/svg+xml"]')) return
            closeInfoWindow()
        }

        window.setTimeout(() => {
            document.addEventListener('mousemove', handleMove)
            removeHoverWatcher = () => document.removeEventListener('mousemove', handleMove)
        }, 0)
    }

    properties.value.forEach((property: any) => {
        const [lng, lat] = property.coordinates
        const position = { lat, lng }
        bounds.extend(position)

        const marker = new Google.maps.Marker({
            position,
            map,
            title: property.name,
            icon: markerIcon(),
            optimized: true,
        })

        marker.addListener('mouseover', () => {
            infoWindow.setContent(infoWindowHtml(property))
            infoWindow.open({ map, anchor: marker })
            watchHoverExit()
        })

        marker.addListener('mouseout', () => {
            closeInfoWindow()
        })

        marker.addListener('click', () => {
            window.location.href = propertyUrl(property)
        })
    })

    if (!bounds.isEmpty()) map.fitBounds(bounds, 64)
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

            <div class="filter-bar">
                <button v-for="chip in chips" :key="chip" type="button" class="filter-chip"
                    :class="{ active: isActive(chip) }" @click="toggle(chip)">
                    {{ chip }}
                </button>
            </div>

            <div class="mobile-map">
                <div ref="mobileMapEl" class="google-map"></div>
                <div v-if="mapError" class="map-error">{{ mapError }}</div>
            </div>

            <div class="listing-grid">
                <NuxtLink v-for="item in filteredItems" :key="item.id" :to="propertyUrl(item)" class="listing-card">
                    <div class="listing-image"
                        :style="{ backgroundImage: `url(${item.firstImg || item.bgImg || '/img/fallback.webp'})` }">
                        <span v-if="item.new" class="badge">New</span>
                        <span class="city">{{ cityLabel(item.city) }}</span>
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
    background: #f2f2f2;
}

.catalog-panel {
    width: 50vw;
    min-height: 100vh;
    padding: 124px 18px 40px;
}

.catalog-heading {
    margin-bottom: 18px;
}

.catalog-eyebrow {
    color: #96D630;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
}

.catalog-heading h1 {
    margin-top: 4px;
    color: #172E4D;
    font-size: 28px;
    line-height: 1.08;
}

.catalog-heading p:last-child {
    margin-top: 6px;
    color: #656565;
}

.filter-bar {
    position: sticky;
    top: 92px;
    z-index: 20;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
    padding: 12px;
    border: 1px solid #e7e7e7;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(14px);
}

.filter-chip {
    min-height: 38px;
    border-radius: 999px;
    padding: 0 14px;
    background: #f2f2f2;
    color: #172E4D;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 13px;
    transition: background 0.2s ease, color 0.2s ease;
}

.filter-chip.active {
    background: #96D630;
    color: #172E4D;
}

.listing-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
}

.listing-card {
    display: block;
    overflow: hidden;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    background: #fff;
    color: #172E4D;
    box-shadow: 0 12px 30px rgba(23, 46, 77, 0.06);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.listing-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 38px rgba(23, 46, 77, 0.1);
}

.listing-image {
    position: relative;
    aspect-ratio: 1.28;
    background-size: cover;
    background-position: center;
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
    background: #96D630;
    color: #172E4D;
}

.city {
    right: 10px;
    background: rgba(255, 255, 255, 0.92);
    color: #172E4D;
}

.listing-body {
    padding: 14px;
}

.listing-topline,
.spec-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    color: #656565;
    font-size: 12px;
}

.listing-body h2 {
    min-height: 46px;
    margin: 8px 0;
    color: #172E4D;
    font-size: 17px;
    line-height: 1.25;
}

.price-row {
    display: grid;
    gap: 2px;
    margin: 10px 0;
}

.price-row strong {
    color: #172E4D;
    font-size: 20px;
}

.price-row span {
    color: #656565;
    font-size: 12px;
}

.spec-row span {
    border-radius: 999px;
    background: #f2f2f2;
    padding: 6px 8px;
}

.desktop-map {
    position: fixed;
    top: 102px;
    right: 0;
    bottom: 0;
    width: 50vw;
    border-left: 1px solid #dedede;
    background: #dfe8df;
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
    background: #dfe8df;
}

.map-error {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: #e7eee7;
    color: #172E4D;
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
    color: #172E4D;
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
    color: #656565;
    font-size: 14px;
    line-height: 1.3;
}

:deep(.google-info-specs) {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
    margin-top: 4px;
    color: #172E4D;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 13px;
}

.empty-state {
    grid-column: 1 / -1;
    padding: 48px 20px;
    border-radius: 8px;
    background: #fff;
    color: #656565;
    text-align: center;
}

@media (max-width: 1180px) {
    .catalog-panel {
        width: 56vw;
    }

    .desktop-map {
        width: 44vw;
    }

    .listing-grid {
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

    .filter-bar {
        top: 82px;
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

    .listing-grid {
        grid-template-columns: 1fr;
    }
}
</style>
