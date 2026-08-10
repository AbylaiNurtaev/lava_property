<script setup>
import { ref } from 'vue'
import { vAutoAnimate } from '@formkit/auto-animate';


const faq = ref([
    {
        id: "1",
        question: "Могу ли я (иностранец) владеть квартирой в Таиланде, и на каких условиях?",
        answer: `Да! Иностранцы могут покупать квартиры (condo) в собственность. Главное условие — в доме не более 49% квартир должно быть у иностранцев. Землю можно брать в долгосрочную аренду.`,
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
        question: "Как оплатить",
        answer: `Основной способ — SWIFT-перевод по договору и инвойсу на счёт застройщика или продавца. Поможем с обменом рублей в валюту и переводом. Для квартир в кондоминиумах иностранным покупателям обычно требуется подтверждение поступления средств из-за рубежа (FET/TT3) — подскажем, как получить у банка.`,
    },
])

//const current = ref(faq.value[0].id)
const current = ref(false)
</script>
<template>
    <div
        class="container mx-auto mt-10 lg:my-36 flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 items-stretch">
        <div class=" w-full lg:w-1/2">
            <NuxtLink to="/catalog">
                <buttonsTheGreen text="Смотреть каталог" text-color="white" />
            </NuxtLink>
            <h2 class="bl10 text-2xl lg:text-4xl mb-10 mt-10">
                Мы собрали более 50 проверенных объектов от надёжных застройщиков
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
        <NuxtLink to="" class="w-full lg:w-1/2">
            <div class="bg-[url(/img/catalog-4.webp)] cursor-pointer bg-cover bg-center h-[400px] lg:h-full rounded-[20px] flex flex-col justify-end p-6"
                data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200" data-aos-once="true"
                data-aos-easing="ease-out-cubic">
                <div class="relative flex gap-4 items-start bg-white  p-4 lg:p-6 rounded-[20px]">
                    <iconsTheNews class="-ml-8" />
                    <div>
                        <span class="bl0">Тайланд</span>
                        <p class="text-sm">Объекты до 100 000$</p>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>
