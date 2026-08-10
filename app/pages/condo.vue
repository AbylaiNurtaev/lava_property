<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePropertyStore } from '~/stores/useProperties'
import { useCityStore } from '~/stores/useCityStore'

const cityStore = useCityStore()

// если город не выбран — на заставку (или на /)
if (!cityStore.city) {
    await navigateTo('/')
} else {
    await navigateTo(`/${cityStore.city}/condo`)
}
const route = useRoute()
const propertyStore = usePropertyStore()

// 1) текущий город из урла: /phuket/condo -> "phuket"
const currentCity = computed(() => String(route.params.city || ''))

// const catalogItems = computed(() => propertyStore.getAllBestProperties)

// 2) берём все объекты и фильтруем по городу
const catalogItems = computed(() => {
    const city = currentCity.value
    const all = propertyStore.getAllBestProperties
    return all.filter(item => item.city === city)
})
// по умолчанию выбраны "Виллы"
const selected = ref(new Set(['Апартаменты']))

// ВАЖНО: правильное написание!
const chips = ['Апартаменты', 'Виллы', 'Новинки рынка']

// группа «Тип» — взаимоисключающая
const TYPE_GROUP = new Set(['Апартаменты', 'Виллы', 'Новинки рынка'])

const isReady = (item) => {
    const rd = String(item?.specs?.readyDate || '').trim()
    if (!rd) return false
    if (/^q\d/i.test(rd)) return false
    const y = parseInt(rd.replace(/\D/g, ''), 10)
    return Number.isFinite(y) && y <= new Date().getFullYear()
}

const matchers = {
    'Виллы': (item) => String(item?.specs?.propertyType || '').includes('Вилла'),
    'Апартаменты': (item) => String(item?.specs?.propertyType || '').includes('Апартаменты'),
    'Новинки рынка': (item) => !!item?.new,
}

const isActive = (label) => selected.value instanceof Set && selected.value.has(label)

const toggle = (label) => {
    const s = new Set(selected.value)

    // если уже активна — снять
    if (s.has(label)) { s.delete(label); selected.value = s; return }

    // внутри группы «Тип» — только один
    if (TYPE_GROUP.has(label)) {
        for (const t of TYPE_GROUP) s.delete(t)
    }

    s.add(label)
    selected.value = s
}

const filteredItems = computed(() => {
    const active = Array.from(selected.value)
    if (!active.length) return catalogItems.value
    return catalogItems.value.filter(item =>
        active.every(label => {
            const fn = matchers[label]
            return fn ? fn(item) : true
        })
    )
})

const fmt = (v) => v || ''
</script>

<template>
    <div class="relative bg-img flex items-start">
        <div class="container w-full z-10 mt-44">
            <div class="hero flex flex-col lg:flex-row justify-between items-start w-full mb-20" data-aos="fade-up"
                data-aos-delay="200" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-once="true">
                <div class="text-left">
                    <h1 class="text-xl lg:text-4xl light">
                        Купить апартаменты <br />
                        <span class="text-4xl lg:text-6xl uppercase bl">в Тайланде</span>
                    </h1>
                    <div class="uppercase text-white lg:text-xl bl">
                        просто. безопасно. прозрачно
                    </div>
                </div>

                <div class="buttons-right flex flex-wrap lg:gap-4">
                    <NuxtLink>
                        <ButtonsTheGreen text="Весь каталог" text-color="white" />
                    </NuxtLink>
                    <NuxtLink>
                        <ButtonsTheGreen text="Виллы" color="#fff" />
                    </NuxtLink>
                    <NuxtLink>
                        <ButtonsTheGreen text="Новости" color="white" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>

    <!-- Каталог -->
    <div class="container mx-auto my-12 lg:my-28 bg-white p-6 lg:p-10 rounded-[30px]">
        <div class="flex flex-col lg:flex-row justify-between items-start">
            <h2 class="light text-2xl lg:text-4xl lg:mb-10 w-full lg:w-1/2">
                <span class="bl0">Каталог апартаментов</span><br />
                на Пхукете
            </h2>
            <p class="block w-full lg:w-1/2 my-4 lg:my-0">
                Мы собрали проверенные объекты с гарантированной доходностью, выгодными
                ценами и прозрачными условиями покупки.
            </p>
        </div>
        <!-- Кнопки фильтров -->
        <div class="flex flex-wrap gap-6">
            <ButtonsTheGreen2 v-for="chip in chips" :key="chip" :text="chip"
                :color="isActive(chip) ? '#F2F2F2' : '#96D630'" :textColor="isActive(chip) ? '#172E4D' : 'white'"
                :class="[
                    isActive(chip)
                        ? 'ring-2 ring-[#96D630] ring-offset-1 scale-[1.02] transition-transform'
                        : 'transition-transform hover:scale-[1.02]'
                ]" :active="isActive(chip)" @click="toggle(chip)" />
        </div>
        <!--  -->
        <!-- 🔹 карточки из store -->
        <!-- сетка карточек -->
        <div class="flex flex-col lg:flex-row lg:flex-wrap justify-start gap-2 lg:gap-10 my-10">
            <div v-for="item in filteredItems" :key="item.id" class="w-full lg:w-auto">
                <NuxtLink :to="`/objects/${item.id}`">
                    <div class="relative cursor-pointer bg-cover bg-center w-full lg:w-[500px] h-[450px] rounded-[20px] flex flex-col justify-end p-4 lg:p-6"
                        :style="{ backgroundImage: `url(${item.firstImg || item.bgImg || '/img/fallback.webp'})` }"
                        data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200" data-aos-once="true"
                        data-aos-easing="ease-out-cubic">
                        <iconsTheNews class="absolute top-10 left-0" />
                        <div class="relative bg-white p-4 lg:p-6 rounded-[20px] w-full lg:w-3/4">
                            <div class="flex gap-2 mb-2">
                                <iconsTheLocation />
                                <span class="bl0">{{ item.name }}</span>
                            </div>
                            <span class="bl0 text-2xl lg:text-4xl">{{ fmt(item.priceDollars) }}</span>
                            <div class="flex flex-col lg:flex-row justify-between text-sm">
                                <p>{{ fmt(item.priceTHB) }}</p>
                                <p>{{ item.location }}</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>

            <div v-if="!filteredItems?.length" class="text-center text-slate-500 py-12">
                Под подходящие фильтры ничего не нашлось.
            </div>
        </div>
    </div>

    <AccordionsTheWeAnswear />
    <TheMap />
    <ThePurchase />
    <TheForm />
</template>

<style lang="css" scoped>
/* .bg-img {
    background-image: url('/img/bg2.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
}

h1 {
    color: white;
}

@media (max-width: 441px) {
    .bg-img {
        min-height: 70vh;
        background-position: -24em 0em;
        mask-image: linear-gradient(to right,
                rgb(0, 0, 0),
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 1) 100%,
                rgb(0, 0, 0));
    }
} */
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
            rgba(0, 0, 0, 0.55),
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
    background-image: url('/img/2.webp');
}

.bg-img.phuket::before {
    background-image: url('/img/2.webp');
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
</style>