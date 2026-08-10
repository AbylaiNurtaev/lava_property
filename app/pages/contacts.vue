<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCityStore } from '~/stores/useCityStore';

const route = useRoute();
const cityStore = useCityStore();
// определяем регион безопасно
const effectiveCity = computed(() => {
    if (cityStore.city) return cityStore.city
    const path = route.path || ''
    if (path.startsWith('/pattaya')) return 'pattaya'
    if (path.startsWith('/phuket')) return 'phuket'
    return null
})
const address = computed(() => {
    if (effectiveCity.value === 'pattaya') return 'Паттайя, Таиланд'
    if (effectiveCity.value === 'phuket') return 'Пхукет, Таиланд'
    return 'Таиланд'
})
import { shallowRef } from 'vue';
import type { YMap } from '@yandex/ymaps3-types';
import {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapDefaultFeaturesLayer,
    YandexMapDefaultMarker,
} from 'vue-yandex-maps';

//Можно использовать для различных преобразований
const map = shallowRef<null | YMap>(null);
</script>

<template>
    <div class="container flex flex-col  gap-10 mx-auto my-28  bg-white p-6 lg:p-10  rounded-[30px]">
        <div class=" flex flex-col lg:flex-row justify-between items-start">
            <div class="flex flex-col  w-full lg:w-1/2">
                <h2 class="light text-2xl lg:text-4xl  lg:mb-4 ">
                    Офис компании
                </h2>
                <p class="block   my-2">
                    Мы — агентство недвижимости в Тайланде, предоставляющее персональное сопровождение для иностранных
                    покупателей, стремящихся к безопасному и уверенному приобретению недвижимости в этой стране.
                    <br></br> <br></br>Мы создаём прозрачный, комфортный и высококлассный процесс, где каждая деталь
                    имеет
                    значение.
                </p>

            </div>
            <div class="text-right flex justify-start flex-col  mt-10 lg:mt-0 w-full lg:w-1/2">
                <a href="tel:+66618133387" class=" accent-text text-3xl lg:text-5xl hover:opacity-70">
                    +66 61 813 3387
                </a>
                <span class="block bl0 text-2xl hover:opacity-70 ">{{ address }}</span>
                <a target="_blank" class=" light text-xl  hover:opacity-70"
                    href="mailto:contact@lavaproperty.com">contact@lavaproperty.com</a>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-between items-start ">
            <yandex-map v-model="map" class="rounded-[30px] overflow-hidden" :settings="{
                location: {
                    center: [98.396866, 7.877035],
                    zoom: 6,
                },
            }" width="100%" height="200px">
                <yandex-map-default-scheme-layer />
                <yandex-map-default-features-layer />
                <yandex-map-default-marker :settings="{ coordinates: [98.396866, 7.877035] }" />
            </yandex-map>
            <div class="">
                <p class="block  my-4 lg:my-0">

                    Мы сопровождаем вас на всех этапах: от индивидуального подбора объектов и тщательной проверки
                    документов до регистрации собственности и последующей поддержки.
                    <br></br> <br></br> С нами вы получаете не просто услугу — вы получаете уровень сервиса, который
                    дарит чувство
                    уверенности и абсолютного спокойствия.
                </p>
            </div>
        </div>

    </div>

    <TheForm />
</template>
<style lang="css" scoped>
h1 {
    color: white;

}
</style>