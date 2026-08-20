<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCityStore } from '~/stores/useCityStore'
import { usePropertyStore } from '~/stores/useProperties'

const route = useRoute()
const cityStore = useCityStore()
const propertyStore = usePropertyStore()

const effectiveCity = computed<'phuket' | 'pattaya' | ''>(() => {
    if (cityStore.city) return cityStore.city
    const path = route.path || ''
    if (path.startsWith('/phuket')) return 'phuket'
    if (path.startsWith('/pattaya')) return 'pattaya'
    return ''
})

const catalogPath = computed(() => '/best')
const cityLabel = computed(() => {
    if (effectiveCity.value === 'pattaya') return 'Паттайи'
    if (effectiveCity.value === 'phuket') return 'Пхукета'
    return 'Таиланда'
})
const cityNominative = computed(() => {
    if (effectiveCity.value === 'pattaya') return 'Паттайя'
    if (effectiveCity.value === 'phuket') return 'Пхукет'
    return 'Таиланд'
})

const phuketDistricts = [
    { title: 'Камала', keys: ['камала'], image: '/img/districts/kamala.webp', variant: 'small' },
    { title: 'Лагуна Пхукет', keys: ['лагуна', 'банг тао', 'бангтао'], filterDistrict: 'Банг Тао', image: '/img/districts/laguna.webp', variant: 'hero' },
    { title: 'Банг Тао', keys: ['банг тао', 'бангтао'], image: '/img/districts/bang-tao.webp', variant: 'wide' },
    { title: 'Май Кхао', keys: ['май кхао', 'найянг', 'най янг'], image: '/img/districts/mai-khao.webp', variant: 'small' },
    { title: 'Равай', keys: ['раваи', 'равай'], image: '/img/districts/rawai.webp', variant: 'small' },
    { title: 'Патонг', keys: ['патонг', 'катху'], image: '/img/districts/patong.webp', variant: 'small' },
    { title: 'Карон', keys: ['карон', 'ката'], image: '/img/districts/karon.webp', variant: 'small' },
    { title: 'Пляж Сурин', keys: ['сурин', 'surin'], image: '/img/districts/surin.webp', variant: 'small' },
]

const pattayaDistricts = [
    { title: 'Джомтьен', keys: ['джомтьен'], image: '/img/districts/rawai.webp', variant: 'wide' },
    { title: 'Вонгамат', keys: ['вонгамат'], image: '/img/districts/surin.webp', variant: 'small' },
    { title: 'Наклуа', keys: ['наклуа'], image: '/img/districts/kamala.webp', variant: 'hero' },
    { title: 'Пратумнак', keys: ['пратумнак'], image: '/img/districts/karon.webp', variant: 'small' },
    { title: 'Центр', keys: ['центр'], image: '/img/districts/patong.webp', variant: 'small' },
]

const normalize = (value: any) => String(value || '').toLowerCase().replaceAll('ё', 'е')
const districtFromLocation = (value: any) => normalize(String(value || '').split(',')[0]?.trim())

const properties = computed(() => propertyStore.getAllBestProperties || propertyStore.properties || [])

const districts = computed(() => {
    const source = effectiveCity.value === 'pattaya' ? pattayaDistricts : phuketDistricts
    return source.map((district) => ({
        ...district,
        count: properties.value.filter((property: any) => {
            if (effectiveCity.value && property?.city !== effectiveCity.value) return false
            const location = districtFromLocation(property?.location)
            return district.keys.some((key) => location.includes(normalize(key)))
        }).length,
    }))
})

const allCount = computed(() =>
    properties.value.filter((property: any) => !effectiveCity.value || property?.city === effectiveCity.value).length
)

const districtLink = (district: { title: string; filterDistrict?: string }) => ({
    path: catalogPath.value,
    query: {
        city: effectiveCity.value || 'phuket',
        district: district.filterDistrict || district.title,
    },
})

const allLink = computed(() => ({
    path: catalogPath.value,
    query: {
        city: effectiveCity.value || 'phuket',
    },
}))

const valueLink = computed(() => ({
    path: catalogPath.value,
    query: {
        city: effectiveCity.value || 'phuket',
        priceMax: '150000',
    },
}))

const pluralObjects = (count: number) => {
    const mod10 = count % 10
    const mod100 = count % 100
    if (mod10 === 1 && mod100 !== 11) return 'объект'
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'объекта'
    return 'объектов'
}
</script>

<template>
    <section class="districts-section">
        <div class="container mx-auto">
            <div class="districts-heading">
                <p>Lava Property</p>
                <h2>
                    Выберите район {{ cityLabel }} для жизни и инвестиций
                </h2>
            </div>

            <div class="districts-grid" :class="`districts-grid--${effectiveCity || 'thailand'}`">
                <NuxtLink :to="valueLink" class="district-card district-card--value">
                    <div class="district-card__content">
                        <strong>Цена ниже рынка</strong>
                        <span>Подборка объектов с сильным потенциалом</span>
                    </div>
                </NuxtLink>

                <NuxtLink v-for="(district, index) in districts" :key="district.title" :to="districtLink(district)"
                    class="district-card" :class="[`district-card--${district.variant}`, `district-card--district-${index + 1}`]">
                    <img :src="district.image" :alt="district.title" loading="lazy" decoding="async">
                    <div class="district-card__content">
                        <strong>{{ district.title }}</strong>
                        <span>{{ district.count }} {{ pluralObjects(district.count) }}</span>
                    </div>
                </NuxtLink>

                <NuxtLink :to="allLink" class="district-card district-card--all">
                    <div class="district-card__content">
                        <strong>Весь {{ cityNominative }}</strong>
                        <span>{{ allCount }} {{ pluralObjects(allCount) }}</span>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.districts-section {
    padding: 84px 0 44px;
}

.districts-heading {
    display: grid;
    gap: 10px;
    max-width: 760px;
    margin-bottom: 30px;
}

.districts-heading p {
    color: #0F5C43;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 13px;
    letter-spacing: 0;
    text-transform: uppercase;
}

.districts-heading h2 {
    color: #2B2925;
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: clamp(30px, 3vw, 48px);
    line-height: 1.12;
}

.districts-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-rows: 152px;
    gap: 20px;
    grid-auto-flow: row;
}

.districts-grid--phuket {
    grid-template-areas:
        "value district1 district2 district2"
        "district3 district3 district2 district2"
        "district3 district3 district4 district5"
        "district6 district7 district8 all";
}

.districts-grid--pattaya {
    grid-template-areas:
        "value district1 district1 district2"
        "district3 district3 district4 district5"
        "district3 district3 all all";
}

.districts-grid--thailand {
    grid-template-areas:
        "value district1 district2 district2"
        "district3 district3 district2 district2"
        "district3 district3 district4 district5"
        "district6 district7 district8 all";
}

.district-card--value {
    grid-area: value;
}

.district-card--district-1 {
    grid-area: district1;
}

.district-card--district-2 {
    grid-area: district2;
}

.district-card--district-3 {
    grid-area: district3;
}

.district-card--district-4 {
    grid-area: district4;
}

.district-card--district-5 {
    grid-area: district5;
}

.district-card--district-6 {
    grid-area: district6;
}

.district-card--district-7 {
    grid-area: district7;
}

.district-card--district-8 {
    grid-area: district8;
}

.district-card {
    position: relative;
    min-width: 0;
    overflow: hidden;
    border-radius: 8px;
    background: #2B2925;
    box-shadow: 0 16px 36px rgba(43, 41, 37, 0.08);
    transform: translateZ(0);
    isolation: isolate;
}

.district-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
        linear-gradient(to top, rgba(20, 31, 58, 0.86) 0%, rgba(20, 31, 58, 0.42) 42%, rgba(20, 31, 58, 0.03) 100%);
    transition: background 0.22s ease;
}

.district-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.45s ease, filter 0.45s ease;
}

.district-card:hover img {
    filter: saturate(1.06);
    transform: scale(1.06);
}

.district-card:hover::after {
    background:
        linear-gradient(to top, rgba(15, 92, 67, 0.88) 0%, rgba(15, 92, 67, 0.32) 46%, rgba(15, 92, 67, 0.02) 100%);
}

.district-card__content {
    position: absolute;
    right: 22px;
    bottom: 20px;
    left: 22px;
    z-index: 2;
    display: grid;
    gap: 4px;
    color: #FFFFFF;
}

.district-card__content strong {
    color: #FFFFFF;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: clamp(26px, 2.6vw, 44px);
    line-height: 1.04;
}

.district-card__content span {
    color: rgba(255, 255, 255, 0.86);
    font-size: 17px;
}

.district-card--value {
    background:
        linear-gradient(135deg, #6FA8FF 0%, #E9DFA3 100%);
}

.district-card--value::before {
    content: '🔥';
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: 2;
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    border: 6px solid rgba(255, 255, 255, 0.72);
    border-radius: 999px;
    background: #FFFFFF;
    box-shadow: 0 10px 22px rgba(43, 41, 37, 0.16);
    font-size: 22px;
}

.district-card--value::after {
    background: linear-gradient(135deg, rgba(15, 92, 67, 0.08), rgba(20, 31, 58, 0.12));
}

.district-card--value .district-card__content strong {
    max-width: 230px;
    font-size: clamp(25px, 2vw, 34px);
    line-height: 1.12;
}

.district-card--value .district-card__content span {
    max-width: 260px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 15px;
    line-height: 1.35;
}

.district-card--wide {
    min-height: 0;
}

.district-card--hero {
    min-height: 0;
}

.district-card--all {
    grid-area: all;
    display: flex;
    align-items: flex-end;
    min-height: 152px;
    background:
        linear-gradient(135deg, #0F5C43 0%, #2A3B66 100%);
}

.district-card--all::after {
    display: none;
}

@media (max-width: 1024px) {
    .districts-section {
        padding-top: 72px;
    }

    .districts-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-auto-rows: 190px;
        grid-template-areas: none;
    }

    .district-card {
        grid-area: auto;
    }

    .district-card--hero,
    .district-card--wide {
        grid-column: span 2;
        grid-row: span 2;
    }

    .district-card--all {
        grid-column: span 2;
    }
}

@media (max-width: 640px) {
    .districts-section {
        padding: 54px 0 28px;
    }

    .districts-grid {
        grid-template-columns: 1fr;
        grid-auto-rows: 220px;
        grid-template-areas: none;
        gap: 14px;
    }

    .district-card,
    .district-card--wide,
    .district-card--hero {
        grid-area: auto;
        grid-column: auto;
        grid-row: auto;
        min-height: 220px;
    }

    .district-card__content {
        right: 18px;
        bottom: 18px;
        left: 18px;
    }

    .district-card__content span {
        font-size: 15px;
    }

    .district-card__content strong {
        font-size: clamp(30px, 11vw, 42px);
    }

    .district-card--value .district-card__content strong {
        font-size: 32px;
    }
}
</style>
