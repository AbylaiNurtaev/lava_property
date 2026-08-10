<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePropertyStore } from '~/stores/useProperties'

const route = useRoute()
const propertyStore = usePropertyStore()

const currentCity = computed(() => String(route.params.city || ''))
const catalogItems = computed(() => {
    const city = currentCity.value
    const all = propertyStore.getAllBestProperties

    return all.filter(item => item.city === city)
})
// currentCity.value будет 'phuket' или 'pattaya'

const selected = ref(new Set())

// ✅ добавили 3 ценовые кнопки
const chips = [
    'Весь каталог',
    'Виллы',
    'Апартаменты',
    'Новинки рынка',
    'до 100k $',
    'до 150k $',
    '150–250k $',
    'от 250k $'
]

// группа «Тип» — взаимоисключающая
const TYPE_GROUP = new Set(['Виллы', 'Апартаменты', 'Новинки рынка'])

// ✅ группа «Цена» — взаимоисключающая
const PRICE_GROUP = new Set(['до 100k $', 'до 150k $', '150–250k $', 'от 250k $'])

const parsePriceUSD = (v) => {
    const s = String(v ?? '')
    // '102 896$' -> 102896
    const n = Number(s.replace(/[^\d]/g, ''))
    return Number.isFinite(n) ? n : NaN
}

const matchers = {
    'Весь каталог': () => true,

    'Виллы': (item) => String(item?.specs?.propertyType || '').includes('Вилла'),
    'Апартаменты': (item) => String(item?.specs?.propertyType || '').includes('Апартаменты'),
    'Новинки рынка': (item) => !!item?.new,

    'до 100k $': (item) => {
        const p = parsePriceUSD(item?.priceDollars)
        return Number.isFinite(p) && p < 100000
    },
    // ✅ цена
    'до 150k $': (item) => {
        const p = parsePriceUSD(item?.priceDollars)
        return Number.isFinite(p) && p < 150000
    },
    '150–250k $': (item) => {
        const p = parsePriceUSD(item?.priceDollars)
        return Number.isFinite(p) && p >= 150000 && p <= 250000
    },
    'от 250k $': (item) => {
        const p = parsePriceUSD(item?.priceDollars)
        return Number.isFinite(p) && p > 250000
    },
}

const toggle = (label) => {
    const s = new Set(selected.value)

    // снять если уже активна
    if (s.has(label)) { s.delete(label); selected.value = s; return }

    // внутри группы «Тип» — только один
    if (TYPE_GROUP.has(label)) {
        for (const t of TYPE_GROUP) s.delete(t)
    }

    // внутри группы «Цена» — только один
    if (PRICE_GROUP.has(label)) {
        for (const t of PRICE_GROUP) s.delete(t)
    }

    // если нажали "Весь каталог" — сбросить всё
    if (label === 'Весь каталог') {
        s.clear()
        s.add('Весь каталог')
        selected.value = s
        return
    } else {
        // если выбрали что-то другое — убрать "Весь каталог"
        s.delete('Весь каталог')
    }

    s.add(label)
    selected.value = s
}

const filteredItems = computed(() => {
    const active = Array.from(selected.value)
    if (!active.length) return catalogItems.value
    if (active.length === 1 && active[0] === 'Весь каталог') return catalogItems.value

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

        <div class="flex flex-wrap ">
            <ButtonsTheGreen v-for="chip in chips" :key="chip" :text="chip"
                :color="selected.has(chip) ? '#96D630' : '#F2F2F2'"
                :textColor="selected.has(chip) ? '#000000' : '#172E4D'" :active="selected.has(chip)"
                @click="toggle(chip)" class="" />
        </div>


        <div class="flex flex-col lg:flex-row lg:flex-wrap justify-start gap-2 lg:gap-10 my-10">
            <div v-for="item in filteredItems" :key="item.id" class="w-full lg:w-auto">
                <NuxtLink :to="`/${currentCity}/objects/${item.id}`">
                    <!-- <NuxtLink :to="`/objects/${item.id}`"> -->
                    <div class="relative cursor-pointer bg-cover bg-center w-full lg:w-[500px] h-[450px] rounded-[20px] flex flex-col justify-end p-4 lg:p-6"
                        :style="{ backgroundImage: `url(${item.firstImg || item.bgImg || '/img/fallback.webp'})` }"
                        data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200" data-aos-once="true"
                        data-aos-easing="ease-out-cubic">
                        <iconsTheNews v-if="!!item.new" class="absolute top-10 left-0" />
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
    <TheReviews />
    <TheForm />
</template>