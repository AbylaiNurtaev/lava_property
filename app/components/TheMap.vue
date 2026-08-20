<template>
    <div class="container mx-auto lg:my-20">
        <div class="flex justify-between">
            <h2 class="light text-2xl lg:text-4xl mb-10">
                <span class="bl0">Карта проверенных нами</span><br />
                объектов недвижимости
            </h2>
        </div>

        <div class="google-map-shell">
            <div ref="mapEl" class="google-city-map"></div>
            <div v-if="mapError" class="map-error">{{ mapError }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePropertyStore } from '~/stores/useProperties'

const route = useRoute()
const propertyStore = usePropertyStore()
const config = useRuntimeConfig()

const mapEl = ref<HTMLElement | null>(null)
const mapError = ref('')
const googleMap = ref<google.maps.Map | null>(null)
const markers = ref<google.maps.Marker[]>([])

const currentCity = computed<'phuket' | 'pattaya'>(() => {
    const p = String(route.params.city || '')
    if (p === 'phuket' || p === 'pattaya') return p
    return route.path.startsWith('/pattaya') ? 'pattaya' : 'phuket'
})

const properties = computed(() => propertyStore.properties || [])

const filteredProperties = computed(() => {
    const city = currentCity.value
    return properties.value.filter((property: any) => property?.city === city && Array.isArray(property?.coordinates))
})

const mapCenter = computed(() => {
    const centers = {
        phuket: { lat: 7.8804, lng: 98.3381 },
        pattaya: { lat: 12.9236, lng: 100.8825 },
    }

    return centers[currentCity.value]
})

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

const propertyUrl = (property: any) => `/${currentCity.value}/objects/${property.id}`

const clearMarkers = () => {
    markers.value.forEach((marker) => marker.setMap(null))
    markers.value = []
}

const renderMarkers = () => {
    if (!googleMap.value || !import.meta.client || !window.google) return

    clearMarkers()
    filteredProperties.value.forEach((property: any) => {
        const [lng, lat] = property.coordinates
        const marker = new google.maps.Marker({
            position: { lat, lng },
            map: googleMap.value,
            title: property.name,
            icon: markerIcon(),
        })

        marker.addListener('click', () => {
            window.location.href = propertyUrl(property)
        })

        markers.value.push(marker)
    })
}

const initMap = async () => {
    await nextTick()
    const apiKey = String(config.public.googleMapsApiKey || '')

    if (!apiKey) {
        mapError.value = 'Добавьте NUXT_PUBLIC_GOOGLE_MAPS_API_KEY, чтобы включить Google Maps.'
        return
    }

    if (!mapEl.value) return

    try {
        const { setOptions, importLibrary } = await import('@googlemaps/js-api-loader')
        setOptions({
            key: apiKey,
            v: 'weekly',
            language: 'ru',
        })
        await importLibrary('maps')

        googleMap.value = new google.maps.Map(mapEl.value, {
            center: mapCenter.value,
            zoom: 11,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            clickableIcons: false,
            styles: [
                { featureType: 'poi.business', stylers: [{ visibility: 'off' }] },
                { featureType: 'poi.medical', stylers: [{ visibility: 'off' }] },
            ],
        })

        renderMarkers()
    } catch (error) {
        mapError.value = 'Google Maps не загрузилась. Проверьте API key и доступ к Maps JavaScript API.'
        console.error(error)
    }
}

watch([filteredProperties, currentCity], () => {
    if (!googleMap.value) return
    googleMap.value.setCenter(mapCenter.value)
    googleMap.value.setZoom(11)
    renderMarkers()
})

onMounted(initMap)
</script>

<style scoped>
.google-map-shell {
    position: relative;
    min-height: 500px;
    overflow: hidden;
    border: 1px solid #E3E1DA;
    border-radius: 30px;
    background: #F2F0EB;
}

.google-city-map {
    width: 100%;
    height: 500px;
}

.map-error {
    position: absolute;
    inset: 16px;
    display: grid;
    place-items: center;
    padding: 24px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.92);
    color: #2B2925;
    text-align: center;
}
</style>
