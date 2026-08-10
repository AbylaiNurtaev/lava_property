<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// надежно получаем регион из урла
const effectiveCity = computed<'phuket' | 'pattaya' | ''>(() => {
    const p = route.path || ''
    if (p.startsWith('/phuket')) return 'phuket'
    if (p.startsWith('/pattaya')) return 'pattaya'
    return ''
})

const base = computed(() => (effectiveCity.value ? `/${effectiveCity.value}` : '/'))

// региональные страницы
const linkCatalog = computed(() => `${base.value}/catalog`)
const linkVillas = computed(() => `${base.value}/villas`)
const linkCondo = computed(() => `${base.value}/condo`)
const linkBest = computed(() => `${base.value}/best`)

// общие страницы (без региона)
const linkNews = '/news'
</script>
<template>
    <div class=" bg-img  flex items-end" :class="effectiveCity">
        <div class="container w-full z-10 mt-44">
            <div class="hero flex flex-col lg:flex-row justify-between xl:items-end w-full mb-20" data-aos="fade-up"
                data-aos-delay="200" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-once="true">

                <div class="text-left text-white">
                    <div class="flex flex-col gap-10 mb-10">
                        <div class="point-block relative flex items-center justify-end rounded-[30px] w-[250px] p-4  bg-white/20 backdrop-blur-lg
    border border-white/30
    shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <img class="absolute left-0 bottom-0" src="/img/build.png">
                            <div class="flex flex-col w-1/2 ">
                                <div class="text-xl">75 000$</div>

                                <p class="text-[9px] leading-[12px]">Предоставляется рассрочка</p>
                            </div>
                        </div>
                        <div class="point-block relative flex items-center justify-end rounded-[30px] w-[250px]  bg-white/20 backdrop-blur-lg
    border border-white/30
    shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-4 ">
                            <img class="absolute left-0 bottom-0" src="/img/coin.png">
                            <div class="flex flex-col w-1/2">
                                <div class="text-4xl">7-10%</div>
                                <p class="text-sm leading-[15px]"> Доход</p>
                            </div>
                        </div>
                    </div>
                    <h1 class="text-xl lg:text-4xl light">Недвижимость<br></br> <span
                            class="text-4xl lg:text-6xl uppercase bl">
                            в паттайе</span>
                    </h1>
                    <!-- <p class="my-2"> Доход от 7-10%" от 75 000$ "рассрочка</p> -->
                    <!-- <div class="uppercase text-white lg:text-xl  bl">просто. безопасно. прозрачно</div> -->

                </div>

                <div class="buttons-right flex flex-wrap lg:gap-4 lg:gap-4 mt-4 lg:mt-0">
                    <NuxtLink :to="linkCatalog">
                        <ButtonsTheGreen text-color="white" />
                    </NuxtLink>
                    <NuxtLink :to="linkVillas">
                        <ButtonsTheGreen text="Виллы" color="white" />
                    </NuxtLink>
                    <NuxtLink :to="linkCondo">
                        <ButtonsTheGreen text="Апартаменты" color="white" />
                    </NuxtLink>
                    <NuxtLink :to="linkNews">
                        <ButtonsTheGreen text="Гид" color="white" />
                    </NuxtLink>
                </div>

            </div>
        </div>

    </div>
    <TheCatalogs />
    <TheBestOffers />
    <TheMap />
    <TheInvest />
    <ThePurchase />
    <TheChoouse />
    <TheReviews />
    <PageRating class="container my-10 lg:my-36" page="/pattaya" page-title="Страница города: Паттайя" />
</template>
<style lang="css" scoped>
.bg-img {
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    align-items: flex-end;
}

/* фон-слой (анимируем его) */
.bg-img::before {
    content: '';
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    transform: scale(1);
    animation: heroZoom 18s ease-in-out infinite alternate;

    z-index: 0;
    pointer-events: none;
    /* важно — не перекрывать кнопки */
}

/* лёгкое затемнение, чтобы текст читался */
.bg-img::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15));
    z-index: 1;
    pointer-events: none;
}

/* весь контент поверх фона */
.bg-img>* {
    position: relative;
    z-index: 2;
}

/* разные фоны по региону */
.bg-img.pattaya::before {
    background-image: url('/img/bg-pattaya.webp');
}

.bg-img.phuket::before {
    background-image: url('/img/bg-phuket.webp');
    /* поставь нужный файл */
}

@keyframes heroZoom {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.08);
    }
}

/* мобильная подстройка */
@media (max-width: 441px) {
    .bg-img {
        min-height: 70vh;
    }

    .bg-img::before {
        background-position: -14em 0em;
    }

    .bg-img {
        mask-image: linear-gradient(to right,
                rgb(0, 0, 0),
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 1) 100%,
                rgb(0, 0, 0));
    }
}

/* .bg-img {
    background-image: url('/img/bg-pattaya.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;

    display: flex;
    align-items: flex-end;
}

@media (max-width:441px) {
    .bg-img {

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 100vh;

        display: flex;
        align-items: flex-end;
    }

    @media (max-width:441px) {
        .bg-img {
            min-height: 70vh;

            background-position: -14em 0em;
            mask-image: linear-gradient(to right,
                    rgb(0, 0, 0),
                    rgba(0, 0, 0, 1) 0%,
                    rgba(0, 0, 0, 1) 100%,
                    rgb(0, 0, 0))
        }
    }
}

h1 {
    color: white;

}

@media (max-width:441px) {
    .bg-img {
        height: 70vh;
        background-position: -14em 0em;
        mask-image: linear-gradient(to right,
                rgb(0, 0, 0),
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 1) 100%,
                rgb(0, 0, 0))
    }

} */
</style>
