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
    <div class="home-hero flex items-end">
        <div class="container w-full z-10">
            <div class="hero flex flex-col lg:flex-row justify-between xl:items-end w-full mb-10 lg:mb-12"
                data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200" data-aos-easing="ease-out-cubic"
                data-aos-once="true">
                <div class="text-left text-white">
                    <div class="flex flex-col md:flex-row gap-4 mb-8 lg:mb-10">
                        <div class="point-block">
                            <div class="flex flex-col">
                                <div class="text-3xl lg:text-4xl bl0">25%</div>
                                <p class="text-xs leading-[15px] text-white/80">Рост стоимости</p>
                            </div>
                        </div>
                        <div class="point-block">
                            <div class="flex flex-col">
                                <div class="text-3xl lg:text-4xl bl0">8-12%</div>
                                <p class="text-xs leading-[15px] text-white/80">Доходность</p>
                            </div>
                        </div>
                    </div>

                    <h1 class="text-xl lg:text-4xl light">
                        Недвижимость<br>
                        <span class="text-4xl lg:text-6xl uppercase bl">в Таиланде</span>
                    </h1>
                    <p class="mt-4 max-w-[620px] text-sm lg:text-lg leading-relaxed text-white/85">
                        Подбираем виллы и апартаменты для жизни, отдыха и инвестиций без разделения на один город.
                    </p>
                </div>

                <div class="buttons-right flex flex-wrap lg:gap-4 mt-6 lg:mt-0">
                    <NuxtLink to="/best">
                        <ButtonsTheGreen text="Лучшие предложения" text-color="#FFFFFF" />
                    </NuxtLink>
                    <NuxtLink to="/villas">
                        <ButtonsTheGreen text="Виллы" color="#FFFFFF" text-color="#2B2925" />
                    </NuxtLink>
                    <NuxtLink to="/condo">
                        <ButtonsTheGreen text="Апартаменты" color="#FFFFFF" text-color="#2B2925" />
                    </NuxtLink>
                    <NuxtLink to="/news">
                        <ButtonsTheGreen text="Гид" color="#FFFFFF" text-color="#2B2925" />
                    </NuxtLink>
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
    min-height: 92svh;
    padding: 118px 24px 46px;
}

.home-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/img/bg-phuket.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(1);
    animation: heroZoom 18s ease-in-out infinite alternate;
    z-index: 0;
    pointer-events: none;
}

.home-hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
        linear-gradient(90deg, rgba(5, 12, 14, 0.78) 0%, rgba(5, 12, 14, 0.48) 42%, rgba(5, 12, 14, 0.12) 100%),
        linear-gradient(to top, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.08));
    z-index: 1;
    pointer-events: none;
}

.home-hero>* {
    position: relative;
    z-index: 2;
}

.point-block {
    position: relative;
    display: flex;
    align-items: center;
    min-width: 166px;
    min-height: 82px;
    padding: 18px 22px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.24);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(14px);
}

@keyframes heroZoom {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.08);
    }
}

@media (max-width: 640px) {
    .home-hero {
        min-height: 78vh;
        padding: 106px 18px 42px;
    }

    .home-hero::before {
        background-position: 58% center;
    }

    .point-block {
        width: 100%;
        max-width: 260px;
    }
}
</style>
