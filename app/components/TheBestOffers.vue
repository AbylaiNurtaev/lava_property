<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePropertyStore } from '~/stores/useProperties'

const route = useRoute()
const propertyStore = usePropertyStore()

// 1) Определяем город по урлу: /phuket/... или /pattaya/...
const currentCity = computed(() => {
    const p = route.path || ''
    // если у тебя роуты вида /:city/... — можно брать route.params.city,
    // но path-check надёжнее для любых страниц
    if (p.startsWith('/phuket')) return 'phuket'
    if (p.startsWith('/pattaya')) return 'pattaya'
    return ''
})

// 2) Текст для заголовка
const cityText = computed(() => {
    if (currentCity.value === 'phuket') return 'на Пхукете'
    if (currentCity.value === 'pattaya') return 'в Паттайе'
    return 'в Таиланде'
})

// 3) Берём объекты и фильтруем по городу
const allByCity = computed(() => {
    const city = currentCity.value
    const all = propertyStore.getBestProperties
    if (!city) return all
    return all.filter(item => item.city === city)
})

// Фильтры по типу
const chips = ['Апартаменты', 'Виллы']
const selected = ref(new Set())
const TYPE_GROUP = new Set(['Апартаменты', 'Виллы'])

const matchers = {
    'Виллы': (item) => String(item?.specs?.propertyType || '').includes('Вилла'),
    'Апартаменты': (item) => String(item?.specs?.propertyType || '').includes('Апартаменты'),
}

const isActive = (label) => selected.value.has(label)

const toggle = (label) => {
    const s = new Set(selected.value)
    if (s.has(label)) { s.delete(label); selected.value = s; return }
    if (TYPE_GROUP.has(label)) for (const t of TYPE_GROUP) s.delete(t)
    s.add(label)
    selected.value = s
}

// 4) Фильтрация по чипам (уже после фильтра по городу)
const filteredItems = computed(() => {
    const active = Array.from(selected.value)
    if (!active.length) return allByCity.value
    return allByCity.value.filter(item =>
        active.every(label => (matchers[label] ? matchers[label](item) : true))
    )
})

// ====== Пагинация ======
const PAGE_SIZE = 8
const visibleCount = ref(PAGE_SIZE)

// при смене фильтров или города — сбрасываем на 8
watch([filteredItems, currentCity], () => { visibleCount.value = PAGE_SIZE })

const pagedItems = computed(() => filteredItems.value.slice(0, visibleCount.value))
const canLoadMore = computed(() => visibleCount.value < filteredItems.value.length)

const loadMore = () => {
    visibleCount.value = Math.min(visibleCount.value + PAGE_SIZE, filteredItems.value.length)
}

const fmt = (v) => v || ''
</script>
<template>
    <div class="container mx-auto my-10 lg:my-36 bg-white p-6 lg:p-10 rounded-[30px]">
        <h2 class="light text-2xl lg:text-4xl mb-10">
            <span class="bl0">Лучшие предложения</span><br />
            {{ cityText }}
        </h2>

        <!-- Кнопки фильтров -->
        <div class="flex flex-wrap gap-6">
            <ButtonsTheGreen2 v-for="chip in chips" :key="chip" :text="chip"
                :color="isActive(chip) ? '#0F5C43' : '#FFFFFF'" :textColor="isActive(chip) ? '#FFFFFF' : '#2B2925'"
                :class="[
                    isActive(chip)
                        ? 'ring-2 ring-[#0F5C43] ring-offset-1 scale-[1.02] transition-transform'
                        : 'transition-transform hover:scale-[1.02]'
                ]" :active="isActive(chip)" @click="toggle(chip)" />
        </div>
        <!--  -->
        <!-- сетка карточек -->
        <div class="flex flex-col lg:flex-row lg:flex-wrap justify-start gap-2 lg:gap-10 my-10">
            <div v-for="item in pagedItems" :key="item.id" class="w-full lg:w-auto">
                <NuxtLink :to="`/objects/${item.id}`">
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

            <div v-if="!pagedItems?.length" class="text-center text-slate-500 py-12">
                Под подходящие фильтры ничего не нашлось.
            </div>
        </div>
        <!-- Кнопка 'Показать ещё' -->
        <div v-if="canLoadMore" class="flex justify-center mt-2">
            <ButtonsTheGreen text="Показать ещё" text-color="white" class="mx-auto w-full lg:w-auto"
                @click="loadMore" />
        </div>

        <!-- <div class="flex justify-center">
            <NuxtLink to="/catalog">
                <ButtonsTheGreen text="Cмотреть все предложения" class="mx-auto w-full lg:w-auto" text-color="white" />
            </NuxtLink>
        </div> -->
    </div>
</template>
