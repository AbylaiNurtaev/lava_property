<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePropertyStore } from '~/stores/useProperties'

const route = useRoute()
const propertyStore = usePropertyStore()

const currentCity = computed(() => {
    const path = route.path || ''
    if (path.startsWith('/phuket')) return 'phuket'
    if (path.startsWith('/pattaya')) return 'pattaya'
    return ''
})

const cityText = computed(() => {
    if (currentCity.value === 'phuket') return 'на Пхукете'
    if (currentCity.value === 'pattaya') return 'в Паттайе'
    return 'в Таиланде'
})

const allByCity = computed(() => {
    const city = currentCity.value
    const all = propertyStore.getBestProperties || []
    if (!city) return all
    return all.filter((item) => item.city === city)
})

const offerItems = computed(() => allByCity.value.slice(0, 12))

const fmt = (value) => value || ''

const offerImage = (item) => {
    if (Array.isArray(item?.images) && item.images.length) return item.images[0]
    if (Array.isArray(item?.gallery) && item.gallery.length) return item.gallery[0]
    return item?.firstImg || item?.bgImg || '/img/fallback.webp'
}

const cityLabel = (city) => {
    if (city === 'phuket') return 'Пхукет'
    if (city === 'pattaya') return 'Паттайя'
    return 'Таиланд'
}
</script>

<template>
    <section class="best-offers-section">
        <div class="container mx-auto">
            <div class="best-offers-heading">
                <div class="best-offers-title">
                    <span>Подборка Lava Property</span>
                    <h2>Лучшие предложения {{ cityText }}</h2>
                    <p>Короткая витрина сильных объектов для жизни, отдыха и инвестиций.</p>
                </div>
                <NuxtLink to="/best" class="best-offers-link">В каталог</NuxtLink>
            </div>
        </div>

        <div v-if="offerItems.length" class="best-offers-scroll" aria-label="Лучшие предложения Lava Property">
            <div class="best-offers-track">
                <NuxtLink v-for="item in offerItems" :key="item.id" :to="`/objects/${item.id}`"
                    class="offer-card">
                    <div class="offer-image">
                        <img :src="offerImage(item)" :alt="item.name" loading="lazy" decoding="async">
                        <span v-if="item.new" class="offer-badge">New</span>
                        <span class="offer-city">{{ cityLabel(item.city) }}</span>
                    </div>

                    <div class="offer-body">
                        <div class="offer-topline">
                            <span>{{ fmt(item.location) }}</span>
                            <span>{{ fmt(item.specs?.propertyType) }}</span>
                        </div>

                        <h3>{{ item.name }}</h3>

                        <div class="offer-price">
                            <strong>{{ fmt(item.priceDollars) }}</strong>
                            <span>{{ fmt(item.priceTHB) }}</span>
                        </div>

                        <div class="offer-specs">
                            <span>{{ fmt(item.specs?.bedrooms) }} сп.</span>
                            <span>{{ fmt(item.specs?.bathrooms) }} ван.</span>
                            <span>{{ fmt(item.specs?.areaTotal) }}</span>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <div v-else class="container mx-auto">
            <div class="best-offers-empty">Пока нет объектов для отображения.</div>
        </div>
    </section>
</template>

<style scoped>
.best-offers-section {
    overflow: hidden;
    padding: 74px 0;
    background: #FAF9F6;
}

.best-offers-heading {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
    gap: 22px;
    margin-bottom: 30px;
}

.best-offers-title {
    display: grid;
    justify-items: start;
    gap: 10px;
}

.best-offers-title > span {
    width: fit-content;
    border-radius: 999px;
    background: #E6F0EC;
    color: #0F5C43;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
    padding: 10px 14px;
    text-transform: uppercase;
}

.best-offers-title h2 {
    color: #2B2925;
    font-size: clamp(30px, 4vw, 54px);
    line-height: 1.04;
}

.best-offers-title p {
    max-width: 560px;
    color: #6B6864;
    font-size: 16px;
    line-height: 1.55;
}

.best-offers-link {
    display: inline-flex;
    min-height: 46px;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: #0F5C43;
    color: #FFFFFF;
    font-family: 'Montserrat-Bold', sans-serif;
    padding: 0 22px;
    transition: background 0.18s ease, transform 0.18s ease;
}

.best-offers-link:hover {
    background: #0B4433;
    transform: translateY(-1px);
}

.best-offers-scroll {
    position: relative;
    width: 100%;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-padding-inline: max(24px, calc((100vw - 1280px) / 2));
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
}

.best-offers-scroll::-webkit-scrollbar {
    height: 8px;
}

.best-offers-scroll::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: rgba(15, 92, 67, 0.28);
}

.best-offers-scroll::-webkit-scrollbar-track {
    background: transparent;
}

.best-offers-track {
    display: flex;
    gap: 18px;
    width: max-content;
    padding: 4px max(24px, calc((100vw - 1280px) / 2)) 16px;
}

.offer-card {
    display: block;
    overflow: hidden;
    flex: 0 0 calc((min(1280px, calc(100vw - 48px)) - 54px) / 4);
    min-width: 0;
    max-width: 360px;
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    background: #FFFFFF;
    color: #2B2925;
    box-shadow: 0 14px 34px rgba(43, 41, 37, 0.08);
    scroll-snap-align: start;
    transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.offer-card:hover {
    box-shadow: 0 20px 44px rgba(43, 41, 37, 0.14);
    transform: translateY(-3px);
}

.offer-image {
    position: relative;
    aspect-ratio: 1.35;
    overflow: hidden;
    background: #E6F0EC;
}

.offer-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease, filter 0.4s ease;
}

.offer-card:hover .offer-image img {
    filter: saturate(1.04);
    transform: scale(1.05);
}

.offer-badge,
.offer-city {
    position: absolute;
    top: 12px;
    border-radius: 999px;
    padding: 7px 10px;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 11px;
}

.offer-badge {
    left: 12px;
    background: #0F5C43;
    color: #FFFFFF;
}

.offer-city {
    right: 12px;
    background: rgba(255, 255, 255, 0.92);
    color: #2B2925;
}

.offer-body {
    display: grid;
    gap: 10px;
    padding: 15px;
}

.offer-topline,
.offer-specs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    color: #6B6864;
    font-size: 12px;
}

.offer-body h3 {
    color: #2B2925;
    font-size: 18px;
    line-height: 1.24;
}

.offer-price {
    display: grid;
    gap: 2px;
}

.offer-price strong {
    color: #2B2925;
    font-size: 22px;
    line-height: 1.1;
}

.offer-price span {
    color: #6B6864;
    font-size: 12px;
}

.offer-specs span {
    border-radius: 999px;
    background: #E6F0EC;
    color: #2B2925;
    padding: 6px 9px;
}

.best-offers-empty {
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    background: #FFFFFF;
    color: #6B6864;
    padding: 24px;
    text-align: center;
}

@media (max-width: 900px) {
    .best-offers-heading {
        grid-template-columns: 1fr;
        align-items: start;
    }

    .best-offers-link {
        width: fit-content;
    }
}

@media (max-width: 640px) {
    .best-offers-section {
        padding: 54px 0;
    }

    .offer-card {
        flex-basis: min(82vw, 310px);
    }

    .best-offers-scroll {
        scroll-padding-inline: 16px;
    }

    .best-offers-track {
        padding-inline: 16px;
    }
}
</style>
