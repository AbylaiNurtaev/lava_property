<script setup lang="ts">
import { ref, computed, shallowRef } from 'vue'
import { useRoute } from 'nuxt/app'
import { usePropertyStore } from '~/stores/useProperties'
import type { YMap } from '@yandex/ymaps3-types'
import {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapDefaultFeaturesLayer,
    YandexMapMarker,
} from 'vue-yandex-maps'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Thumbs, Keyboard, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

import { vMaska } from 'maska/vue'

// ----------------------
// СТОР / РОУТ
// ----------------------
const route = useRoute()
const propertyStore = usePropertyStore()

// Текущий объект по id из маршрута
const currentProperty = computed(() =>
    propertyStore.properties.find((p) => String(p.id) === String(route.params.id))
)

// ----------------------
// ЛАЙТБОКС
// ----------------------
const unitImages = (u: any) => [u?.cover].filter(Boolean) as string[]
const lightboxOpen = ref(false)
const lightboxSrc = ref<string | null>(null)
const lightboxIndex = ref<number>(0) // текущий индекс изображения
let lightboxImages = ref<string[]>([]) // список картинок, из которого листаем

const openLightbox = (src: string, list: string[] = [], index = 0) => {
    lightboxImages.value = list
    lightboxIndex.value = index
    lightboxSrc.value = src
    lightboxOpen.value = true
}

const closeLightbox = () => {
    lightboxOpen.value = false
    lightboxSrc.value = null
    lightboxImages.value = []
}

// стрелки:
const prevImage = () => {
    if (!lightboxImages.value.length) return
    lightboxIndex.value =
        (lightboxIndex.value - 1 + lightboxImages.value.length) %
        lightboxImages.value.length
    lightboxSrc.value = lightboxImages.value[lightboxIndex.value]
}

const nextImage = () => {
    if (!lightboxImages.value.length) return
    lightboxIndex.value = (lightboxIndex.value + 1) % lightboxImages.value.length
    lightboxSrc.value = lightboxImages.value[lightboxIndex.value]
}

// ----------------------
// КАРТА
// ----------------------
const coords = computed<[number, number]>(() =>
    (currentProperty.value?.coordinates as [number, number]) ?? [98.396866, 7.877035]
)

const amenities = computed(() => currentProperty.value?.amenities ?? [])

const mapSettings = computed(() => ({
    location: {
        center: coords.value,
        zoom: 14,
    },
}))

const map = shallowRef<YMap | null>(null)

// ----------------------
// SWIPER
// ----------------------
const swiperModules = [Navigation, Pagination, Thumbs, Keyboard, Autoplay]

// ГАЛЕРЕЯ (если понадобится общая)
const gallery = computed(() => (currentProperty.value?.images || []).filter(Boolean))

// ----------------------
// ПРОЧИЕ ДАННЫЕ
// ----------------------
function translateSpecKey(key: string) {
    const map: Record<string, string> = {
        readyDate: 'Срок сдачи',
        areaTotal: 'Площадь',
        propertyType: 'Тип объекта',
        finishing: 'Отделка',
        bedrooms: 'Количество спален',
        bathrooms: 'Количество ванных комнат',
        developer: 'Застройщик',
    }
    return map[key] || key
}

// Генплан
const genplanList = computed<string[]>(() => {
    const v = currentProperty.value?.genImg
    if (!v) return []
    return Array.isArray(v) ? v.filter(Boolean) : [v]
})

const genDesc = computed(() => currentProperty.value?.genDesc || '')
const genLegend = computed(() => currentProperty.value?.genLegend ?? [])

const galleryExterior = computed(() => currentProperty.value?.galleryExterior ?? [])
const galleryInterior = computed(() => currentProperty.value?.galleryInterior ?? [])

const uniqueImages = (images: any[]) =>
    Array.from(new Set(images.filter((item) => typeof item === 'string' && item.trim())))

const propertyGallery = computed(() =>
    uniqueImages([
        currentProperty.value?.firstImg,
        currentProperty.value?.bgImg,
        currentProperty.value?.bigImg,
        ...(galleryExterior.value || []),
        ...(galleryInterior.value || []),
    ])
)

const units = computed(() => currentProperty.value?.units ?? [])

const summarySpecs = computed(() => {
    const specs = currentProperty.value?.specs || {}
    return [
        { label: 'Тип', value: specs.propertyType },
        { label: 'Площадь', value: specs.areaTotal },
        { label: 'Спальни', value: specs.bedrooms },
        { label: 'Ванные', value: specs.bathrooms },
        { label: 'Срок сдачи', value: specs.readyDate },
        { label: 'Отделка', value: specs.finishing },
    ].filter((item) => item.value)
})

const fmt = {
    money(v: number) {
        return new Intl.NumberFormat('ru-RU').format(v) + ' ฿'
    },
    area(a: { min: number; max: number }) {
        return `${a.min}–${a.max} м²`
    },
    floor(f: { min: number; max: number }) {
        return `Этаж ${f.min}-${f.max}`
    },
}

function formatAmount(val: number, cur = 'THB') {
    try {
        return new Intl.NumberFormat('ru-RU').format(val) + ' ' + cur
    } catch {
        return `${val} ${cur}`
    }
}

const percentTotal = computed(() =>
    (currentProperty.value?.bookingConditions ?? [])
        .filter((s) => s.type === 'percent')
        .reduce((sum, s) => sum + Number(s.value || 0), 0)
)

// ----------------------
// ФОРМА
// ----------------------
const phone = ref('')
const message = ref('');
const successfully = ref(false)
// Коды стран (с +), сортировка: длинные сначала
const DIAL_CODE_TO_COUNTRY = [
    { dial: "+380", country: "Ukraine", flag: "🇺🇦" },
    { dial: "+375", country: "Belarus", flag: "🇧🇾" },
    { dial: "+373", country: "Moldova", flag: "🇲🇩" },
    { dial: "+374", country: "Armenia", flag: "🇦🇲" },
    { dial: "+995", country: "Georgia", flag: "🇬🇪" },
    { dial: "+994", country: "Azerbaijan", flag: "🇦🇿" },
    { dial: "+998", country: "Uzbekistan", flag: "🇺🇿" },
    { dial: "+996", country: "Kyrgyzstan", flag: "🇰🇬" },
    { dial: "+992", country: "Tajikistan", flag: "🇹🇯" },
    { dial: "+993", country: "Turkmenistan", flag: "🇹🇲" },
    { dial: "+371", country: "Latvia", flag: "🇱🇻" },
    { dial: "+372", country: "Estonia", flag: "🇪🇪" },
    { dial: "+370", country: "Lithuania", flag: "🇱🇹" },
    { dial: "+7", country: "Russia / Kazakhstan", flag: "🇷🇺" },
    { dial: "+66", country: "Thailand", flag: "🇹🇭" },
    { dial: "+90", country: "Turkey", flag: "🇹🇷" },
    { dial: "+971", country: "UAE", flag: "🇦🇪" },
    { dial: "+48", country: "Poland", flag: "🇵🇱" },
    { dial: "+49", country: "Germany", flag: "🇩🇪" },
    { dial: "+33", country: "France", flag: "🇫🇷" },
    { dial: "+39", country: "Italy", flag: "🇮🇹" },
    { dial: "+34", country: "Spain", flag: "🇪🇸" },
    { dial: "+1", country: "US/CA", flag: "🇺🇸" },
    { dial: "+44", country: "UK", flag: "🇬🇧" },
].sort((a, b) => b.dial.length - a.dial.length);

// Только цифры (для валидации/отправки)
const digitsOnly = computed(() => phone.value.replace(/\D/g, ""));

// Нормализованный вид для определения страны: "+<цифры>"
const normalized = computed(() => {
    let s = phone.value.replace(/[^\d+]/g, "");
    if (!s) return "";

    if (!s.startsWith("+")) s = "+" + s;
    s = s.replace(/\++/g, "+"); // на случай "++"
    return s;
});

const detected = computed(() => {
    const s = normalized.value;
    if (!s || s.length < 2) return null; // пусто или только "+"
    return DIAL_CODE_TO_COUNTRY.find((x) => s.startsWith(x.dial)) || null;
});

const flag = computed(() => detected.value?.flag || "🏳️");
const countryName = computed(() => detected.value?.country || "Unknown");

// Подставить "+" при фокусе
const ensurePlus = () => {
    if (!phone.value) {
        phone.value = "+";
        return;
    }
    if (!phone.value.startsWith("+")) {
        phone.value = "+" + phone.value.replace(/\D/g, "");
    }
};

// Если пользователь начал вводить цифры без плюса — автоматически исправим
watch(phone, (val) => {
    if (!val) return;
    if (!val.startsWith("+")) {
        phone.value = "+" + val.replace(/\D/g, "");
    }
});
const handleSubmit2 = async () => {
    const digits = digitsOnly.value;

    if (digits.length < 8) {
        message.value = "Пожалуйста, введите корректный номер телефона.";
        return;
    }

    const formData = new FormData();
    formData.append("phone", phone.value);
    formData.append("page_url", window.location.href);

    try {
        const res = await fetch('/contacts.php', {
            method: 'POST',
            body: formData,
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        successfully.value = true
        phone.value = "";
        message.value = "";
    } catch (err) {
        console.error('Ошибка отправки:', err)
        message.value = 'Произошла ошибка при отправке. Пожалуйста, попробуйте ещё раз.'
    }
}
</script>

<template>
    <main class="object-page">
        <section v-if="currentProperty" class="object-hero container">
            <div class="object-gallery-panel">
                <ClientOnly>
                    <Swiper :modules="swiperModules" :loop="propertyGallery.length > 1"
                        :keyboard="{ enabled: true }" :pagination="{ clickable: true }"
                        :navigation="{ nextEl: '.object-next', prevEl: '.object-prev' }"
                        class="object-slider">
                        <SwiperSlide v-for="(src, i) in propertyGallery" :key="src">
                            <button type="button" class="object-slide"
                                @click="openLightbox(src, propertyGallery, i)">
                                <img :src="src" :alt="`${currentProperty.name} — фото ${i + 1}`" loading="eager"
                                    decoding="async" referrerpolicy="no-referrer" />
                            </button>
                        </SwiperSlide>

                        <template #container-end>
                            <button class="nav-btn nav-prev object-prev" aria-label="Назад">
                                <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button class="nav-btn nav-next object-next" aria-label="Вперёд">
                                <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </button>
                        </template>
                    </Swiper>
                </ClientOnly>

                <div class="object-photo-strip">
                    <button v-for="(src, i) in propertyGallery.slice(0, 5)" :key="src" type="button"
                        @click="openLightbox(src, propertyGallery, i)">
                        <img :src="src" :alt="`${currentProperty.name} — миниатюра ${i + 1}`" loading="lazy" />
                    </button>
                </div>
            </div>

            <aside class="object-specs-panel">
                <span class="section-kicker">Характеристики</span>
                <h2>Параметры объекта</h2>
                <dl class="object-facts">
                    <div v-for="item in summarySpecs" :key="item.label">
                        <dt>{{ item.label }}</dt>
                        <dd>{{ item.value }}</dd>
                    </div>
                </dl>
                <ul class="spec-list compact">
                    <li v-for="(value, key) in currentProperty.specs" :key="key">
                        <span>{{ translateSpecKey(key as string) }}</span>
                        <strong>{{ value }}</strong>
                    </li>
                </ul>
            </aside>
        </section>

        <section v-if="currentProperty" class="object-info container">
            <div class="object-info-main">
                <div class="object-summary-top">
                    <span class="object-eyebrow">Lava Property</span>
                    <h1>{{ currentProperty.name }}</h1>
                    <p class="object-location">{{ currentProperty.location }}</p>
                </div>

                <div class="object-price-card">
                    <span>Стоимость от</span>
                    <strong>{{ currentProperty.priceDollars || '-' }}</strong>
                    <small v-if="currentProperty.priceTHB">{{ currentProperty.priceTHB }}</small>
                </div>

                <div v-if="amenities.length" class="object-amenities">
                    <span>Удобства</span>
                    <ul>
                        <li v-for="(amenity, i) in amenities.slice(0, 8)" :key="i">{{ amenity }}</li>
                    </ul>
                </div>

                <article class="project-description">
                    <span class="section-kicker">Описание</span>
                    <h2>О проекте</h2>
                    <div v-html="currentProperty.description || ''"></div>
                </article>
            </div>

            <aside class="object-contact-card">
                <div class="manager-row">
                    <div class="manager-avatars">
                        <img src="/img/people/anna.png" alt="Менеджер" />
                        <img src="/img/people/sergio.png" alt="Менеджер" />
                        <img src="/img/people/vika.png" alt="Менеджер" />
                        <img src="/img/people/ekat.png" alt="Менеджер" />
                    </div>
                    <p>Подберём планировку, рассчитаем доходность и ответим на вопросы.</p>
                </div>

                <form @submit.prevent="handleSubmit2" class="object-form">
                    <div v-if="message" class="form-error">{{ message }}</div>
                    <div class="phone-field">
                        <span class="flag-badge" :title="countryName">
                            {{ flag }}
                        </span>
                        <input v-model="phone" v-maska="'+#################'" placeholder="+" type="tel"
                            @focus="ensurePlus" />
                    </div>
                    <button type="submit">Заказать звонок</button>
                    <span v-if="successfully" class="form-success">
                        Мы уже получили ваше сообщение.
                    </span>
                </form>

                <div class="messenger-row">
                    <span>Можно написать сразу:</span>
                    <IconsTheTelegram />
                    <IconsTheWhatsApp />
                </div>
            </aside>
        </section>

        <section v-else class="object-empty container">
            <h1>Объект не найден</h1>
            <NuxtLink to="/best">Вернуться в каталог</NuxtLink>
        </section>

        <!-- SWIPER: Архитектура и территория -->
        <section v-if="galleryExterior.length" class="container my-16">
            <h2 class="text-2xl lg:text-4xl mb-4">Архитектура и территория</h2>
            <p class="my-8" v-html="currentProperty?.descriptionExterior"></p>
            <ClientOnly>
                <Swiper :modules="swiperModules" :loop="galleryExterior.length > 2" :keyboard="{ enabled: true }"
                    :breakpoints="{
                        0: { slidesPerView: 1, spaceBetween: 12 },
                        1024: { slidesPerView: 3, spaceBetween: 22 }
                    }" :navigation="{ nextEl: '.ext-next', prevEl: '.ext-prev' }" :prevent-clicks="false"
                    :prevent-clicks-propagation="false" class="w-full h-[400px] rounded-[20px] overflow-hidden">
                    <SwiperSlide v-for="(src, i) in galleryExterior" :key="i">
                        <!-- обёртка, на ней click.stop -->
                        <div class="w-full h-full" @click.stop="openLightbox(src, galleryExterior, i)">
                            <img :src="src" :alt="`Интерьер — фото ${i + 1}`"
                                class="w-full h-full object-cover cursor-zoom-in" loading="lazy" decoding="async"
                                referrerpolicy="no-referrer" />
                        </div>
                    </SwiperSlide>

                    <template #container-end>
                        <button class="nav-btn nav-prev ext-prev" aria-label="Назад">
                            <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button class="nav-btn nav-next ext-next" aria-label="Вперёд">
                            <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 6l6 6-6 6" />
                            </svg>
                        </button>
                    </template>
                </Swiper>
            </ClientOnly>
        </section>

    <!-- Генплан -->
    <div v-if="genplanList[0]" class="container mx-auto w-full flex flex-col lg:flex-row gap-10 mb-20 items-stretch">
        <div class="w-full lg:w-1/2 bg-white/60 backdrop-blur-sm rounded-2xl p-4">
            <div class="bl0 text-xl pl-4">
                <br />Генплан:
                <br /><br />
                <p v-if="genDesc" v-html="genDesc" class="text-gray-800 leading-relaxed mb-6"></p>
                <ol v-if="genLegend.length" class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 font-normal">
                    <li v-for="item in genLegend" :key="item.n" class="font-normal flex gap-2 text-sm leading-3">
                        <span class="font-normal">{{ item.n }}.</span>
                        <span>{{ item.title }}</span>
                    </li>
                </ol>
            </div>
        </div>

        <div class="w-full lg:w-1/2 h-full">
            <!-- ОБЁРТКА С КЛИКОМ -->
            <div class="w-full h-full cursor-zoom-in" @click.stop="openLightbox(genplanList[0], genplanList, 0)">
                <NuxtImg :src="genplanList[0]" :alt="`Генплан — ${currentProperty?.name}`"
                    class="w-full h-full object-contain rounded-[30px]" />
            </div>
        </div>
    </div>
    <!-- units -->
    <div v-if="units.length" class="container lg:my-20">
        <h2 class="light text-2xl lg:text-4xl mb-10 mt-10 bl0">
            Доступны к покупке
        </h2>
        <div class="container flex flex-wrap justify-start gap-6">
            <article v-for="u in units" :key="u.id"
                class="w-full lg:w-auto rounded-3xl bg-white p-6 flex flex-col gap-4">
                <div>
                    <h3 class="font-bold">
                        {{ u.title }} ({{ fmt.area(u.area) }})
                    </h3>
                    <div v-if="u.priceTHB" class="font-extrabold">
                        {{ fmt.money(u.priceTHB) }}
                    </div>
                    <div class="mt-2 grid grid-cols-2 gap-x-8 gap-y-3 text-slate-800">
                        <div class="flex items-center gap-2">
                            <IconsTheBed />
                            <span>{{ u.bedrooms ? `${u.bedrooms} спальни` : 'студия' }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <IconsTheBath />
                            <span>Ванные {{ u.bathrooms }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <IconsTheArea />
                            <span>{{ u.area.min }} м²</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <IconsTheFloor />
                            <span>{{ fmt.floor(u.floor) }}</span>
                        </div>
                    </div>
                </div>
                <!-- <img class="w-[300px] max-h-[300px]" :src="`${u.cover}`" alt="" /> -->
                <!-- ОБЁРТКА С КЛИКОМ, как в генплане -->
                <div v-if="unitImages(u)?.length" class="cursor-zoom-in"
                    @click.stop="openLightbox(unitImages(u)[0], unitImages(u), 0)">
                    <NuxtImg :src="unitImages(u)[0]" :alt="`Планировка — ${u.title}`"
                        class="w-[300px] max-h-[300px] object-contain rounded-[20px]" loading="lazy" />
                </div>
            </article>
        </div>
    </div>

    <!-- SWIPER: Интерьеры апартаментов -->
    <div v-if="galleryInterior.length" class="container my-20">
        <h2 class="light text-2xl lg:text-4xl mb-10 mt-10 bl0">
            Интерьеры апартаментов
        </h2>
        <ClientOnly>
            <Swiper :modules="swiperModules" :loop="galleryInterior.length > 2" :keyboard="{ enabled: true }"
                :breakpoints="{
                    0: { slidesPerView: 1, spaceBetween: 12 },
                    1024: { slidesPerView: 3, spaceBetween: 22 }
                }" :navigation="{ nextEl: '.int-next', prevEl: '.int-prev' }" :prevent-clicks="false"
                :prevent-clicks-propagation="false" class="w-full h-[400px] rounded-[20px] overflow-hidden">
                <SwiperSlide v-for="(src, i) in galleryInterior" :key="i">
                    <div class="w-full h-full" @click.stop="openLightbox(src, galleryInterior, i)">
                        <img :src="src" :alt="`Экстерьер — фото ${i + 1}`"
                            class="w-full h-full object-cover cursor-zoom-in" loading="lazy" decoding="async"
                            referrerpolicy="no-referrer" />
                    </div>
                </SwiperSlide>

                <template #container-end>
                    <button class="nav-btn nav-prev int-prev" aria-label="Назад">
                        <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button class="nav-btn nav-next int-next" aria-label="Вперёд">
                        <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 6l6 6-6 6" />
                        </svg>
                    </button>
                </template>
            </Swiper>
        </ClientOnly>
    </div>

    <!-- MAP -->
    <div class="container mx-auto w-full flex flex-col-reverse lg:flex-row gap-10 my-20 items-stretch">
        <div class="w-full lg:w-1/2 h-[400px] lg:h-auto">
            <YandexMap v-model="map" :settings="mapSettings" width="100%" height="100%"
                class="w-full h-full rounded-[30px] overflow-hidden">
                <YandexMapDefaultSchemeLayer />
                <YandexMapDefaultFeaturesLayer />
                <YandexMapMarker :settings="{ coordinates: coords }">
                    <div class="relative w-10 h-10 -translate-x-1/2 -translate-y-full">
                        <img src="/img/ping.svg" alt="Метка объекта" class="pin drop-shadow-lg" />
                        <span
                            class="absolute -bottom-20 left-1/2 -translate-x-1/2 text-xs bg-white px-2 py-0.5 rounded shadow">
                            {{ currentProperty?.name }}
                        </span>
                    </div>
                </YandexMapMarker>
            </YandexMap>
        </div>

        <div class="w-full lg:w-1/2 lg:h-auto bg-white/60 backdrop-blur-sm rounded-2xl p-4">
            <div class="bl0 text-xl pl-4">
                <br />Инфраструктура рядом:
            </div>
            <ul class="h-full divide-y divide-gray-300 mt-4 overflow-auto">
                <li v-for="place in currentProperty?.infrastructure || []" :key="place.id"
                    class="flex justify-between items-center py-4 lg:py-6 px-4">
                    <p class="text-gray-800">{{ place.title }}</p>
                    <p class="font-semibold text-gray-900">{{ place.time }}</p>
                </li>
            </ul>
        </div>
    </div>

    <div class="relative flex items-start justify-center mx-auto bg-center bg-cover h-[700px] lg:h-[700px]" :style="{
        backgroundImage: currentProperty?.bigImg
            ? `url(${currentProperty.bigImg})`
            : 'linear-gradient(135deg, #2B2925, #0B4433)',
    }"></div>

    <!-- Условия оплаты -->
    <div
        class="container mx-auto my-10 lg:my-36 flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 items-center">
        <div class="w-full lg:w-1/2">
            <h2 class="light text-2xl lg:text-4xl mb-10 mt-10 bl0">
                Мы подготовили для вас хорошие условия оплаты:
            </h2>
            <ul class="divide-y divide-gray-300 mt-4 rounded-2xl bg-white/60 backdrop-blur-sm">
                <li v-for="step in currentProperty?.bookingConditions || []" :key="step.id"
                    class="flex items-center justify-between py-4 lg:py-6 px-4">
                    <p class="pr-8 md:pr-0 max-w-[560px] text-gray-700">
                        {{ step.title }}
                    </p>
                    <p v-if="step.value" class="font-semibold text-gray-900">
                        <template v-if="step.type === 'percent'">
                            {{ step.value }}%
                        </template>
                        <template v-else>
                            {{ formatAmount(step.value, step.currency) }}
                        </template>
                    </p>
                </li>
            </ul>
        </div>
        <div class="relative bg-cover bg-center w-full lg:w-[500px] h-[300px] lg:h-[600px] rounded-[20px] flex flex-col justify-end p-4 lg:p-6"
            :style="{ backgroundImage: `url(${currentProperty?.firstImg})` }"></div>
    </div>

    <AccordionsTheWeAnswear />

    <!-- LIGHTBOX -->
    <!-- lightbox start -->
    <transition name="fade-zoom">
        <div v-if="lightboxOpen" class="fixed inset-0 flex items-center justify-center p-4 bg-black/80"
            style="z-index: 9999" @click.self="closeLightbox">
            <!-- Кнопка закрытия -->
            <button type="button"
                class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
                @click="closeLightbox">
                ✕
            </button>

            <!-- Стрелка влево -->
            <button v-if="lightboxImages.length > 1" @click.stop="prevImage"
                class="absolute left-4 lg:left-10 w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-white/70 hover:bg-white shadow-lg text-2xl font-bold">
                < </button>

                    <!-- Картинка -->
                    <transition name="fade-zoom" mode="out-in">
                        <img v-if="lightboxSrc" :key="lightboxSrc" :src="lightboxSrc" alt=""
                            class="max-w-[90vw] max-h-[90vh] object-contain rounded-[20px] bg-black/20" />
                    </transition>

                    <!-- Стрелка вправо -->
                    <button v-if="lightboxImages.length > 1" @click.stop="nextImage"
                        class="absolute right-4 lg:right-10 w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-white/70 hover:bg-white shadow-lg text-2xl font-bold">
                        >
                    </button>
        </div>
    </transition>
    </main>
</template>

<style scoped>
.object-page {
    min-height: 100vh;
    background: #FAF9F6;
    color: #2B2925;
    padding-top: 112px;
}

.object-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(360px, 0.65fr);
    gap: 24px;
    align-items: start;
}

.object-gallery-panel,
.object-specs-panel,
.object-info,
.detail-card,
.object-empty {
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0 16px 42px rgba(43, 41, 37, 0.07);
}

.object-gallery-panel {
    overflow: hidden;
}

.object-slider {
    position: relative;
    width: 100%;
    height: clamp(300px, 40vw, 500px);
    background: #E6F0EC;
}

.object-slide {
    display: block;
    width: 100%;
    height: 100%;
    cursor: zoom-in;
}

.object-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.object-photo-strip {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 8px;
    padding: 10px;
    background: #FFFFFF;
}

.object-photo-strip button {
    overflow: hidden;
    aspect-ratio: 1.45;
    border-radius: 8px;
    background: #E6F0EC;
}

.object-photo-strip img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.18s ease;
}

.object-photo-strip button:hover img {
    transform: scale(1.04);
}

.object-specs-panel {
    position: sticky;
    top: 104px;
    display: grid;
    align-content: start;
    gap: 18px;
    padding: 22px;
}

.object-specs-panel h2,
.project-description h2 {
    margin-top: 8px;
    color: #2B2925;
    font-size: 28px;
    line-height: 1.15;
}

.object-eyebrow,
.section-kicker,
.object-price-card span,
.object-amenities > span,
.messenger-row span {
    color: #0F5C43;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
    letter-spacing: 0;
    text-transform: uppercase;
}

.object-info {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 380px);
    gap: 24px;
    margin-top: 24px;
    padding: 24px;
}

.object-info-main {
    display: grid;
    gap: 18px;
    min-width: 0;
}

.object-summary-top h1 {
    margin-top: 8px;
    color: #2B2925;
    font-size: clamp(28px, 3vw, 44px);
    line-height: 1.05;
}

.object-location {
    margin-top: 10px;
    color: #6B6864;
    font-size: 16px;
}

.object-price-card {
    display: grid;
    gap: 4px;
    max-width: 480px;
    border-radius: 8px;
    background: #E6F0EC;
    padding: 16px;
}

.object-price-card strong {
    color: #2B2925;
    font-size: 30px;
    line-height: 1;
}

.object-price-card small {
    color: #6B6864;
}

.object-facts {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
}

.object-facts div {
    display: grid;
    gap: 5px;
    min-width: 0;
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    padding: 12px;
}

.object-facts dt {
    color: #8A8F94;
    font-size: 12px;
}

.object-facts dd {
    overflow: hidden;
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.object-amenities {
    display: grid;
    gap: 10px;
}

.object-amenities ul {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
}

.object-amenities li {
    border-radius: 999px;
    background: #E6F0EC;
    padding: 7px 10px;
    color: #0F5C43;
    font-size: 12px;
}

.object-contact-card {
    display: grid;
    align-self: start;
    gap: 14px;
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    background: #FFFFFF;
    padding: 16px;
    box-shadow: 0 12px 30px rgba(43, 41, 37, 0.05);
}

.manager-row {
    display: grid;
    gap: 10px;
}

.manager-row p {
    color: #6B6864;
    font-size: 14px;
    line-height: 1.45;
}

.manager-avatars {
    display: flex;
}

.manager-avatars img {
    width: 42px;
    height: 42px;
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    object-fit: cover;
}

.manager-avatars img + img {
    margin-left: -12px;
}

.object-form {
    display: grid;
    gap: 10px;
}

.phone-field {
    position: relative;
}

.phone-field input {
    width: 100%;
    border: 1px solid #E3E1DA;
    border-radius: 999px;
    background: #FAF9F6;
    padding: 13px 16px 13px 52px;
    color: #2B2925;
    outline: none;
}

.phone-field input:focus {
    border-color: #0F5C43;
    box-shadow: 0 0 0 3px rgba(15, 92, 67, 0.12);
}

.object-form button {
    min-height: 48px;
    border-radius: 999px;
    background: #0F5C43;
    color: #FFFFFF;
    font-family: 'Montserrat-Bold', sans-serif;
    transition: background 0.2s ease;
}

.object-form button:hover {
    background: #0B4433;
}

.form-error {
    color: #d84f55;
    font-size: 12px;
}

.form-success {
    color: #0F5C43;
    font-size: 12px;
    text-align: center;
}

.messenger-row {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #6B6864;
}

.object-details {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.75fr);
    gap: 24px;
    margin-top: 24px;
    margin-bottom: 72px;
}

.detail-card {
    padding: 24px;
}

.detail-card h2 {
    margin-top: 8px;
    margin-bottom: 16px;
    color: #2B2925;
    font-size: 28px;
    line-height: 1.15;
}

.description-card div,
.project-description div {
    color: #6B6864;
    line-height: 1.75;
}

.spec-list {
    display: grid;
}

.spec-list li {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    border-bottom: 1px solid #E3E1DA;
    padding: 13px 0;
}

.spec-list li:last-child {
    border-bottom: 0;
}

.spec-list span {
    color: #6B6864;
}

.spec-list strong {
    color: #2B2925;
    text-align: right;
}

.spec-list.compact {
    border-top: 1px solid #E3E1DA;
    padding-top: 4px;
}

.object-empty {
    padding: 160px 24px 80px;
    text-align: center;
}

.object-empty h1 {
    margin-bottom: 18px;
    font-size: 36px;
}

.object-empty a {
    color: #0F5C43;
    font-family: 'Montserrat-Bold', sans-serif;
}

:deep(.object-slider .swiper-pagination-bullet) {
    background: #FFFFFF;
    opacity: 0.72;
}

:deep(.object-slider .swiper-pagination-bullet-active) {
    background: #0F5C43;
    opacity: 1;
}

.amenity {
    background-color: var(--point-color);
    color: white;
}

/* Кнопки навигации для Swiper */
.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(6px);
    color: #2B2925;
    transition: all 0.2s ease;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
    cursor: pointer;
}

.nav-btn:hover {
    background: white;
    transform: translateY(-50%) scale(1.04);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.16);
}

.nav-prev {
    left: 12px;
}

.nav-next {
    right: 12px;
}

/* disabled */
.swiper-button-disabled.nav-btn {
    opacity: 0.4;
    cursor: default;
    transform: translateY(-50%) scale(1);
    box-shadow: none;
}

@media (max-width: 640px) {
    .nav-btn {
        width: 38px;
        height: 38px;
    }

    .nav-prev {
        left: 6px;
    }

    .nav-next {
        right: 6px;
    }
}

/* style of pins */
.pin:first-child {
    cursor: pointer;
    max-width: unset;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    animation: bounce-in 6s infinite ease-in;
}

@keyframes bounce-in {
    0% {
        transform: scale(1);
    }

    20% {
        transform: scale(1.25);
    }

    50% {
        transform: scale(1);
    }

    70% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}

/* for light box  */
.fade-zoom-enter-active,
.fade-zoom-leave-active {
    transition: all 0.3s ease;
}

.fade-zoom-enter-from,
.fade-zoom-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

.fade-zoom-enter-to,
.fade-zoom-leave-from {
    opacity: 1;
    transform: scale(1);
}

.flag-badge {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    text-align: center;
    font-size: 20px;
    line-height: 1;
    user-select: none;
    pointer-events: none;
    opacity: 0.95;
}

@media (max-width: 1180px) {
    .object-hero,
    .object-info {
        grid-template-columns: 1fr;
    }

    .object-specs-panel {
        position: static;
    }
}

@media (max-width: 640px) {
    .object-page {
        padding-top: 92px;
    }

    .object-hero {
        gap: 14px;
    }

    .object-slider {
        height: 260px;
    }

    .object-specs-panel,
    .object-info,
    .detail-card {
        padding: 16px;
    }

    .object-facts {
        grid-template-columns: 1fr;
    }

    .object-photo-strip {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .spec-list li {
        align-items: flex-start;
        flex-direction: column;
        gap: 4px;
    }

    .spec-list strong {
        text-align: left;
    }
}
</style>
