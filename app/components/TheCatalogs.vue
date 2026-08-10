<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCityStore } from '~/stores/useCityStore'

const route = useRoute()
const cityStore = useCityStore()

const effectiveCity = computed < 'phuket' | 'pattaya' | '' > (() => {
    if (cityStore.city) return cityStore.city
    const p = route.path || ''
    if (p.startsWith('/phuket')) return 'phuket'
    if (p.startsWith('/pattaya')) return 'pattaya'
    return ''
})

const base = computed(() => (effectiveCity.value ? `/${effectiveCity.value}` : '/'))

const linkBest = computed(() => (effectiveCity.value ? `${base.value}/best` : '/best'))
const linkVillas = computed(() => (effectiveCity.value ? `${base.value}/villas` : '/villas'))
const linkCondo = computed(() => (effectiveCity.value ? `${base.value}/condo` : '/condo'))
</script>
<template>
    <div class="container mx-auto lg:my-36">
        <h2 class="light text-2xl lg:text-4xl mb-10  my-20 ">
            <span class="bl0">Наши каталоги</span><br>
            недвижимости {{
                effectiveCity === 'phuket'
                    ? 'Пхукета'
                    : effectiveCity === 'pattaya'
                        ? 'Паттайи'
                        : 'Таиланда'
            }} — лучшие объекты для жизни и инвестиций
        </h2>
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
            <NuxtLink :to="linkBest">
                <div class="bg-[url(/img/catalog-1.webp)] cursor-pointer bg-cover bg-center w-full h-[400px] lg:h-full rounded-[20px] flex flex-col justify-end p-6"
                    data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200" data-aos-once="true"
                    data-aos-easing="ease-out-cubic">
                    <div class="flex gap-4 items-start bg-white p-4 lg:p-6 rounded-[20px]">
                        <IconsTheHand class="hidden lg:flex" />
                        <div>
                            <span class="bl0">Смотреть лучшие предложения</span>
                            <p class="text-sm">Мы подобрали для вас идеальные варианты для жизни и инвестиций</p>
                        </div>
                    </div>
                </div>
            </NuxtLink>
            <div class="flex flex-col gap-10">
                <NuxtLink :to="linkVillas">
                    <div class="bg-[url(/img/catalog-2.webp)] cursor-pointer  bg-cover bg-center w-full  h-[300px] rounded-2xl flex flex-col justify-end p-6"
                        data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" data-aos-once="true"
                        data-aos-easing="ease-out-cubic">
                        <div class="flex gap-4 items-start bg-white p-4 lg:p-6 rounded-[20px]">
                            <IconsTheVilla class="hidden lg:flex" />
                            <div>
                                <span class="bl0">Cмотреть каталог вилл</span>
                                <p class="text-sm">Мы подобрали для вас идеальные варианты для жизни и инвестиций</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
                <NuxtLink :to="linkCondo">
                    <div class="bg-[url(/img/catalog-3.webp)] cursor-pointer  bg-cover bg-center w-full  h-[300px] rounded-2xl flex flex-col justify-end p-6"
                        data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200" data-aos-once="true"
                        data-aos-easing="ease-out-cubic">
                        <div class="flex gap-4 items-start bg-white p-4 lg:p-6 rounded-[20px]">
                            <IconsTheCondo class="hidden lg:flex" />
                            <div>
                                <span class="bl0">Cмотреть каталог апартаментов</span>
                                <p class="text-sm">Мы подобрали для вас идеальные варианты для жизни и инвестиций</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>

</template>
