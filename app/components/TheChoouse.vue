<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCityStore } from '~/stores/useCityStore'

const route = useRoute()
const cityStore = useCityStore()

const effectiveCity = computed<'phuket' | 'pattaya' | ''>(() => {
    if (cityStore.city) return cityStore.city
    const p = route.path || ''
    if (p.startsWith('/phuket')) return 'phuket'
    if (p.startsWith('/pattaya')) return 'pattaya'
    return ''
})
</script>
<template>
    <div class="lg:h-[50px]"></div>
    <div
        class="container mx-auto mt-10 lg:my-36 flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10 items-stretch">
        <div class="relative bg-[url(/img/magazine.webp)] w-full lg:w-1/2 cursor-pointer bg-cover bg-center h-[200px] lg:h-[400px]  rounded-[20px] flex flex-col justify-end p-6"
            data-aos="fade-right" data-aos-delay="200" data-aos-duration="1200" data-aos-once="true"
            data-aos-easing="ease-out-cubic">
            <!--  -->
            <!-- <div style="background-color:#0F5C43"
                class="absolute lg:-top-40 lg:right-0 hidden lg:flex flex-col justify-start  w-[250px] items-start  p-4 lg:p-6 rounded-[20px]"
                data-aos="fade-left" data-aos-delay="200" data-aos-once="true" data-aos-duration="1200"
                data-aos-easing="ease-out-cubic">
                <div class="flex gap-4 items-center mb-2">
                    <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.736328" y="0.741699" width="62" height="62" rx="31" fill="#ffffff" />
                        <path
                            d="M49.5042 27.0947V23.5411C49.5042 22.721 48.9575 22.1743 48.1374 22.1743H39.5267C39.1166 22.9944 38.1599 23.5411 37.2031 23.5411C36.2464 23.5411 35.2896 22.9944 34.8796 22.1743H15.3346C14.5145 22.1743 13.9678 22.721 13.9678 23.5411V27.0947C15.6079 28.0515 16.7013 29.8283 16.7013 31.7418C16.7013 33.6553 15.6079 35.5688 13.9678 36.3889V39.9425C13.9678 40.7626 14.5145 41.3093 15.3346 41.3093H34.8796C35.2896 40.4893 36.2464 39.9425 37.2031 39.9425C38.1599 39.9425 39.1166 40.4893 39.5267 41.3093H48.1374C48.9575 41.3093 49.5042 40.7626 49.5042 39.9425V36.3889C47.8641 35.4321 46.7706 33.6553 46.7706 31.7418C46.7706 29.8283 47.8641 27.9148 49.5042 27.0947Z"
                            stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M37.2031 26.2747V30.375" stroke="black" stroke-width="2" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M37.2031 37.209V33.1086" stroke="black" stroke-width="2" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.5352 35.8421L29.0023 27.6414" stroke="black" stroke-width="2"
                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.1685 26.2747V30.375" stroke="black" stroke-width="2" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30.3691 33.1086V37.209" stroke="black" stroke-width="2" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p><span class="bl0 m-0 leading-0 block">Кондо</span></p>
                </div>
                <p><span class="bl0 m-0 leading-0">Хороший объект </span>для инвестирования</p>
                <NuxtLink href="/objects/25">
                    <ButtonsTheGreen text="Cмотреть" color="white" class="w-full ml-0" />
                </NuxtLink>
            </div> -->
            <!--  -->
            <!--  -->
            <div class="absolute lg:-top-20 hidden lg:flex flex-col justify-start  w-[250px] items-start bg-white  p-4 lg:p-6 rounded-[20px]"
                data-aos="fade-right" data-aos-delay="200" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
                <div class="flex gap-4 items-center mb-2">
                    <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.736328" y="0.741699" width="62" height="62" rx="31" fill="#0F5C43" />
                        <path
                            d="M49.5042 27.0947V23.5411C49.5042 22.721 48.9575 22.1743 48.1374 22.1743H39.5267C39.1166 22.9944 38.1599 23.5411 37.2031 23.5411C36.2464 23.5411 35.2896 22.9944 34.8796 22.1743H15.3346C14.5145 22.1743 13.9678 22.721 13.9678 23.5411V27.0947C15.6079 28.0515 16.7013 29.8283 16.7013 31.7418C16.7013 33.6553 15.6079 35.5688 13.9678 36.3889V39.9425C13.9678 40.7626 14.5145 41.3093 15.3346 41.3093H34.8796C35.2896 40.4893 36.2464 39.9425 37.2031 39.9425C38.1599 39.9425 39.1166 40.4893 39.5267 41.3093H48.1374C48.9575 41.3093 49.5042 40.7626 49.5042 39.9425V36.3889C47.8641 35.4321 46.7706 33.6553 46.7706 31.7418C46.7706 29.8283 47.8641 27.9148 49.5042 27.0947Z"
                            stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M37.2031 26.2747V30.375" stroke="black" stroke-width="2" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M37.2031 37.209V33.1086" stroke="black" stroke-width="2" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.5352 35.8421L29.0023 27.6414" stroke="black" stroke-width="2"
                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.1685 26.2747V30.375" stroke="black" stroke-width="2" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30.3691 33.1086V37.209" stroke="black" stroke-width="2" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p><span class="bl0 m-0 leading-0 block">Апарты</span></p>
                </div>
                <p><span class="bl0 m-0 leading-0">Хороший объект </span>для инвестирования</p>
                <NuxtLink href="/objects/16">
                    <ButtonsTheGreen text="Cмотреть" text-color="white" class="w-full ml-0" />
                </NuxtLink>
            </div>

        </div>
        <div class=" w-full lg:w-1/2">
            <h2 class="light text-2xl lg:text-4xl mb-10">
                <span class="bl0"> Подберем </span> жилье {{
                    effectiveCity === 'phuket'
                        ? 'на Пхукете'
                        : effectiveCity === 'pattaya'
                            ? 'в Паттайе'
                            : 'в Таиланде'
                }} — лучшие объекты острова<br></br>
                для жизни, отдыха или инвестиций
            </h2>
            <p class="my-2">Мы знаем рынок Тайланда изнутри и работаем только с проверенными застройщиками. Каждый
                клиент получает личного менеджера, который подберёт подходящие объекты, подробно объяснит все нюансы и
                обеспечит безопасное оформление сделки.

            </p>
            <p class="my-2"> Наши специалисты контролируют весь процесс — от выбора недвижимости и проверки документов
                до регистрации собственности в Land Department.
                С Lava Property покупка недвижимости в Таиланде становится простой, прозрачной и комфортной. </p>
            <div class="flex items-center text-white gap-6 mt-10">
                <a href="#contacts">
                    <ButtonsTheGreen text="Связаться с нами" text-color="white" />
                </a>
                <div class="flex gap-4">
                    <IconsTheTelegram />
                    <IconsTheWhatsApp />
                </div>
            </div>

        </div>
    </div>

</template>