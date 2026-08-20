<script setup lang="ts">
const site = {
    name: 'LAVA PROPERTY',
    url: 'https://lavaproperty.com/',
    image: '/img/bg.webp',
}

const route = useRoute()
const title = `Недвижимость в Таиланде — ${site.name}`
const description = 'Продажа недвижимости в Таиланде: виллы, апартаменты, подбор объектов и сопровождение сделки.'
const canonical = site.url + route.fullPath

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: canonical,
    ogImage: site.url + site.image,
    twitterCard: 'summary_large_image',
    robots: 'index, follow, max-image-preview:large',
})

useHead({
    htmlAttrs: { lang: 'ru' },
    link: [
        { rel: 'canonical', href: canonical },
    ],
    meta: [
        { property: 'og:site_name', content: site.name },
        { property: 'og:locale', content: 'ru_RU' },
    ],
})
</script>

<template>
    <div class="home-hero flex items-center">
        <video class="home-hero-video" src="/video/home-hero.webm" autoplay muted loop playsinline preload="metadata"
            poster="/img/bg-phuket.webp" aria-hidden="true"></video>
        <div class="container w-full z-10">
            <div class="hero">
                <div class="hero-content text-white">
                    <h1>
                        <span>Недвижимость в Таиланде</span>
                        <span>для жизни и инвестиций</span>
                    </h1>
                    <p>
                        Подбираем виллы, апартаменты и инвестиционные проекты по всему Таиланду: с понятной логикой,
                        реальными цифрами и сопровождением до сделки.
                    </p>

                    <div class="hero-actions">
                        <NuxtLink to="/phuket" class="hero-primary-button">
                            Пхукет
                        </NuxtLink>
                        <NuxtLink to="/pattaya" class="hero-secondary-button">
                            Паттайя
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <TheCatalogs />
    <TheBestOffers />
    <TheInvest />
    <TheReviews />
</template>

<style lang="css" scoped>
.home-hero {
    position: relative;
    overflow: hidden;
    min-height: 100svh;
    padding: 132px 0 72px;
    background: #0B4433;
}

.home-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/img/bg-phuket.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
    pointer-events: none;
}

.home-hero-video {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
}

.home-hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 50% 46%, rgba(15, 92, 67, 0.38), transparent 40%),
        linear-gradient(90deg, rgba(5, 12, 14, 0.74) 0%, rgba(5, 12, 14, 0.54) 50%, rgba(5, 12, 14, 0.74) 100%),
        linear-gradient(to top, rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.08));
    z-index: 2;
    pointer-events: none;
}

.home-hero>.container {
    position: relative;
    z-index: 3;
}

.hero {
    display: flex;
    justify-content: center;
    width: 100%;
}

.hero-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(1240px, 100%);
    min-height: 520px;
    justify-content: center;
    text-align: center;
}

.hero h1 {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 6px;
    max-width: 1120px;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: clamp(46px, 4.85vw, 68px);
    line-height: 0.98;
    letter-spacing: 0;
    color: #FFFFFF;
}

.hero h1 span {
    display: block;
    white-space: nowrap;
}

.hero p {
    position: relative;
    z-index: 1;
    max-width: 680px;
    margin-top: 22px;
    color: rgba(255, 255, 255, 0.86);
    font-size: 18px;
    line-height: 1.6;
}

.hero-actions {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 34px;
}

.hero-primary-button,
.hero-secondary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 56px;
    padding: 0 28px;
    border-radius: 999px;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 15px;
    line-height: 1;
    transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.hero-primary-button {
    border: 1px solid #0F5C43;
    background: #0F5C43;
    color: #FFFFFF;
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.24);
}

.hero-secondary-button {
    border: 1px solid rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.12);
    color: #FFFFFF;
    backdrop-filter: blur(16px);
}

.hero-primary-button:hover,
.hero-secondary-button:hover {
    transform: translateY(-2px);
}

.hero-primary-button:hover {
    background: #0B4433;
    border-color: #0B4433;
}

.hero-secondary-button:hover {
    background: #FFFFFF;
    color: #0F5C43;
    border-color: #FFFFFF;
}

@media (max-width: 640px) {
    .home-hero {
        min-height: 100svh;
        padding: 112px 0 48px;
    }

    .hero h1 {
        font-size: 36px;
        line-height: 1;
    }

    .hero h1 span {
        white-space: normal;
    }

    .hero p {
        font-size: 15px;
        line-height: 1.55;
    }

    .hero-actions {
        grid-template-columns: 1fr;
        width: 100%;
    }

    .hero-primary-button,
    .hero-secondary-button {
        width: 100%;
    }
}
</style>
