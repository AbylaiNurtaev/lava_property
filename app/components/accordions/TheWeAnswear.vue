<script setup>
import { ref } from 'vue'
import { vAutoAnimate } from '@formkit/auto-animate';


const faq = ref([
    {
        id: "1",
        question: "Могу ли я (иностранец) владеть квартирой в Таиланде, и на каких условиях?",
        answer: `Да! Иностранцы могут покупать квартиры (condo) в собственность. Главное условие — в доме не более 49% квартир должно быть у иностранцев.`,
    },
    {
        id: "2",
        question: "Какие документы и этапы включены в процесс покупки?",
        answer: ` Всё просто: бронирование → договор купли-продажи → регистрация сделки в Земельном департаменте. В конце вы получаете официальное свидетельство о собственности.`,
    },
    {
        id: "3",
        question: "Нужен ли юрист или агент?",
        answer: `Наш агент поможет подобрать и оформить сделку. Юрист проверит документы и гарантирует безопасность покупки. Мы берём эти заботы на себя.`,
    },
    {
        id: "4",
        question: "Какие налоги и сборы нужно учитывать при покупке?",
        answer: `Основные расходы: регистрационный сбор 2%, гербовый сбор 0,5%, а также налоги при продаже (если объект продаётся раньше 5 лет).`,
    },
    {
        id: "5",
        question: "Формы собственности в Таиланде",
        answer: `Freehold (фрихолд) - полное право собственности. Покупатель (в т.ч. иностранец) становится полноправным владельцем объекта, записанным в Земельный департамент.
<br><br>
➤ Доступен для кондо (квартир), если доля иностранцев в комплексе ≤ 49%.<br>
➤ Позволяет свободно продавать, сдавать и наследовать недвижимость.
<br><br>
Leasehold (лизхолд) - долгосрочная аренда (обычно 30 лет) с возможностью продления.
Земля остаётся в собственности тайской стороны, а покупатель получает право пользования.
<br><br>
➤ Распространено для вилл и таунхаусов (иностранцы не могут владеть землёй напрямую).<br>
➤ Можно сдавать, но не продать без согласия владельца земли.<br>

`,
    },
])

//const current = ref(faq.value[0].id)
const current = ref(false)
</script>
<template>
    <div
        class="container mx-auto my-10  lg:my-36 flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 items-center">
        <div class=" w-full lg:w-1/2">
            <h2 class="light text-2xl lg:text-4xl mb-10 mt-10">
                У вас появились вопросы?<br></br>
                Мы ответим на все!
            </h2>
            <ul class="accordion">
                <li class="my-2" v-for="q in faq" :key="q.id" v-auto-animate>
                    <div class="question text-[6px] md:text-normal border-b-[1px] leading-4 md:leading-normal flex justify-between py-4 lg:py-6 cursor-pointer"
                        @click="current = current === q.id ? false : q.id">
                        <p class="pr-8 md:pr-0 max-w-[500px]">{{ q.question }}</p>
                        <i class="pi pi-plus" style="font-size: 20px;"></i>

                    </div>
                    <p class="answer mt-4 text-sm" v-if="q.id === current" v-html="q.answer"> </p>
                </li>
            </ul>
        </div>
        <div class="relative bg-[url(/img/manager.webp)] w-full lg:w-1/2 cursor-pointer bg-cover bg-center h-[450px]  rounded-[20px] flex flex-col justify-end p-6"
            data-aos="fade-right" data-aos-delay="200" data-aos-duration="1200" data-aos-once="true"
            data-aos-easing="ease-out-cubic">
            <!--  -->
            <div class="absolute lg:-top-20 flex flex-col justify-start  w-[250px] items-start bg-white  p-4 lg:p-6 rounded-[20px]"
                data-aos="fade-right" data-aos-delay="200" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
                <div class="flex gap-4 items-center mb-2">
                    <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.736328" y="0.741699" width="62" height="62" rx="31" fill="#96D630" />
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
                    <p><span class="bl0 m-0 leading-0 block">Кондо</span>151 662$</p>
                </div>
                <p><span class="bl0 m-0 leading-0">Хороший объект </span>для инвестирования</p>

                <NuxtLink href="/objects/26">
                    <ButtonsTheGreen text="Cмотреть" text-color="white" class="w-full ml-0" />
                </NuxtLink>
            </div>
            <!--  -->
            <div style="background-color:#96D630"
                class="absolute lg:-bottom-20 lg:right-0 hidden lg:flex flex-col justify-start  w-[250px] items-start  p-4 lg:p-6 rounded-[20px]"
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
                    <p><span class="bl0 m-0 leading-0 block">Кондо</span>115 812$</p>
                </div>
                <p><span class="bl0 m-0 leading-0">Хороший объект </span>для инвестирования</p>
                <NuxtLink href="/objects/25">
                    <ButtonsTheGreen text="Cмотреть" color="white" class="w-full ml-0" />
                </NuxtLink>
            </div>
            <!--  -->
        </div>
    </div>
</template>
