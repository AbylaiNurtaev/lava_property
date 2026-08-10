<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePropertyStore } from '~/stores/useProperties'

const route = useRoute()
const propertyStore = usePropertyStore()

// 1) текущий город из урла: /phuket/best -> "phuket"
const currentCity = computed(() => String(route.params.city || ''))
// const catalogItems = computed(() => propertyStore.getBestProperties)
// 2) лучшие объекты + фильтр по городу
const catalogItems = computed(() => {
    const city = currentCity.value
    const all = propertyStore.getBestProperties
    return all.filter(item => item.city === city)
})

// 3) подпись города для текста
const cityText = computed(() => {
    if (currentCity.value === 'phuket') return 'на Пхукете'
    if (currentCity.value === 'pattaya') return 'в Паттайе'
    return ''
})

// (опционально) ссылки с префиксом города
const base = computed(() => `/${currentCity.value}`)
const linkCatalog = computed(() => `${base.value}/catalog`)
const linkVillas = computed(() => `${base.value}/villas`)
const linkCondo = computed(() => `${base.value}/condo`)
const linkBest = computed(() => `${base.value}/best`)

// по умолчанию выбраны "Виллы"
const selected = ref(new Set(['Апартаменты']))

// ВАЖНО: правильное написание!
const chips = ['Апартаменты', 'Виллы',]

// группа «Тип» — взаимоисключающая
const TYPE_GROUP = new Set(['Апартаменты', 'Виллы',])

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
    // 'Новинки рынка': (item) => !!item?.new,
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
    <div class="container mx-auto my-28 bg-white p-6 lg:p-10 rounded-[30px]">
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200" data-aos-easing="ease-out-cubic"
            data-aos-once="true">
            <div class="flex flex-col lg:flex-row justify-between items-start">
                <h2 class="light text-2xl lg:text-4xl lg:mb-10 w-full lg:w-1/2">
                    <span class="bl0">Лучшие предложения</span><br />
                    на рынке {{ cityText }}
                </h2>
            </div>

            <!-- Кнопки фильтров -->
            <div class="flex flex-wrap gap-6 mt-4">
                <ButtonsTheGreen2 v-for="chip in chips" :key="chip" :text="chip"
                    :color="isActive(chip) ? '#F2F2F2' : '#96D630'" :textColor="isActive(chip) ? '#172E4D' : 'white'"
                    :class="[
                        isActive(chip)
                            ? 'ring-2 ring-[#96D630] ring-offset-1 scale-[1.02] transition-transform'
                            : 'transition-transform hover:scale-[1.02]'
                    ]" :active="isActive(chip)" @click="toggle(chip)" />
            </div>
            <!--  -->
        </div>
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

    <TheCatalogs />
    <TheChoouse />
    <TheMap />
    <TheReviews />
</template>
<style lang="css" scoped>
.bg-img {
    background-image: url('/img/f-bg.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 80vh;
}

h1 {
    color: white;

}

@media (max-width:441px) {
    .bg-img {
        min-height: 70vh;
        background-position: -24em 0em;
        mask-image: linear-gradient(to right,
                rgb(0, 0, 0),
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 1) 100%,
                rgb(0, 0, 0))
    }

}
</style>