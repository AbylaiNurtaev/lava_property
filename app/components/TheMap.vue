<template>
    <div class="container mx-auto lg:my-20">
        <div class="flex justify-between">
            <h2 class="light text-2xl lg:text-4xl mb-10">
                <span class="bl0">Карта проверенных нами</span><br />
                объектов недвижимости
            </h2>
        </div>

        <YandexMap v-model="map" class="rounded-[30px] overflow-hidden" :settings="mapSettings" width="100%"
            height="500px">
            <YandexMapDefaultSchemeLayer />
            <YandexMapDefaultFeaturesLayer />

            <YandexMapMarker v-for="property in filteredProperties" :key="property.id"
                :settings="{ coordinates: property.coordinates }">

                <NuxtLink :to="`/${currentCity}/objects/${property.id}`">
                    <div class="relative w-10 h-10 -translate-x-1/2 -translate-y-full group" title="Перейти к объекту">
                        <img src="/img/ping.svg" alt="Метка объекта"
                            class="pin drop-shadow-lg transition-transform group-hover:scale-110" />
                        <span
                            class="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] bg-white/90 px-2 py-0.5 rounded shadow hidden group-hover:block whitespace-nowrap">
                            {{ property.name }}<br />
                            От {{ property.priceTHB }}
                        </span>
                    </div>
                </NuxtLink>
            </YandexMapMarker>
        </YandexMap>
    </div>
</template>

<script setup lang="ts">
import { shallowRef, computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePropertyStore } from '~/stores/useProperties'
import type { YMap } from '@yandex/ymaps3-types'
import {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapDefaultFeaturesLayer,
    YandexMapMarker,
} from 'vue-yandex-maps'

const route = useRoute()
const propertyStore = usePropertyStore()

// ✅ город из урла: /phuket/... или /pattaya/...
const currentCity = computed<'phuket' | 'pattaya'>(() => {
    const p = String(route.params.city || '')
    if (p === 'phuket' || p === 'pattaya') return p
    // fallback если вдруг страница не в [city]
    return route.path.startsWith('/pattaya') ? 'pattaya' : 'phuket'
})

// все объекты
const properties = computed(() => propertyStore.properties || [])

// ✅ фильтр по городу (проверь, что в данных есть поле city)
const filteredProperties = computed(() => {
    const city = currentCity.value
    return properties.value.filter((p: any) => p?.city === city && Array.isArray(p?.coordinates))
})

// карта
const map = shallowRef<YMap | null>(null)

// ✅ центр карты под город
const mapSettings = computed(() => {
    // ВАЖНО: в Yandex center = [longitude, latitude]
    const centers: Record<string, [number, number]> = {
        phuket: [98.3381, 7.8804],
        pattaya: [100.8825, 12.9236],
    }

    return {
        location: {
            center: centers[currentCity.value],
            zoom: 10,
        },
    }
})

</script>

<style scoped>
.pin {
    width: 50px;
    height: 50px;
    transition: all 0.2s ease-in-out;
}
</style>