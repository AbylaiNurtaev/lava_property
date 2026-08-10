<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'                // 👈 base styles
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// ---- demo data (adjust as needed) ----
const slides = [
    {
        id: 1,
        title: 'Ever Prime Residences',
        avatar: '/img/people/family2.png',
        url: '/objects/37',
        priceUsd: '213 461$',
        priceThb: '6792360',
        location: 'Карон, Пхукет',
        cardImg: '/img/objects/37/start.webp',
        badge: 'Семья Французовых, купили апартаменты Ever Prime Residences',
        text:
            '«Долго мечтали о жилье у моря, но боялись сложностей с оформлением. Команда Lava Property всё сделала “под ключ”: подбор, переговоры с застройщиком, перевод денег и документы. Теперь у нас есть квартира, куда мы приезжаем всей семьёй отдыхать.»'
    },
    {
        id: 2,
        title: 'Dcondo Cove',
        avatar: '/img/people/f.png',
        url: '/objects/35',
        priceUsd: '76 524$',
        priceThb: '2435000',
        location: 'Катху, Патонг',
        cardImg: '/img/objects/35/start.webp',
        badge: 'Алексей и Марина, инвестировали в апартаменты',
        text:
            '«Покупали недвижимость как инвестицию. Lava Property подробно объяснили риски, доходность и помогли выбрать объект с хорошей арендной перспективой.»'
    },
    {
        id: 3,
        title: 'Siamese Bangtao',
        avatar: '/img/people/igor.png',
        url: '/objects/33',
        priceUsd: '115 336$',
        priceThb: '3670000',
        location: 'Банг Тао, Пхукет',
        cardImg: '/img/objects/33/start.webp',
        badge: 'Игорь, купил апартаменты для переезда',
        text:
            '«В планах переехать в Таиланд и найти дом для жизни.Ребята помогли подобрать недвижимость под мои требования, организовали просмотры и сопровождали на всех этапах сделки.Всё прошло спокойно и прозрачно.»'
    },
    {
        id: 4,
        avatar: '/img/people/family3.png',
        title: 'VIP TROPIKA-VIP Tropika',
        url: '/objects/32',
        priceUsd: '108 248$',
        priceThb: '3 444 451',
        location: 'Банг Тао , Пхукет',
        cardImg: '/img/objects/32/start.webp',
        badge: 'Семья Ковалёвых, купили жильё для отдыха',
        text:
            '«Важно было, чтобы рядом был пляж и инфраструктура для детей. Lava Property быстро подобрали несколько вариантов и помогли выбрать лучший. Сейчас уже планируем приезжать по 2–3 раза в год и очень довольны покупкой.»'
    },

    {
        id: 5,
        avatar: '/img/people/olga.png',
        title: 'The Zero Naiyang',
        url: '/objects/28',
        priceUsd: '99 657$',
        priceThb: '3 200 000',
        location: 'Найянг, Пхукет',
        cardImg: '/img/objects/28/start.webp',
        badge: 'Ольга, купила квартиру под сдачу',
        text:
            '«Боялась покупать недвижимость за границей, но здесь всё объяснили простым языком. »'
    },
    {
        id: 6,
        avatar: '/img/people/dmitriy.png',
        title: 'The Ozone Signature',
        url: '/objects/15',
        priceUsd: '117 926$',
        priceThb: '3 980 000',
        location: 'Бангтао, Пхукет',
        cardImg: '/img/objects/15/start.webp',
        badge: 'Дмитрий, инвестор',
        text:
            '«Работаю с Lava Property уже второй раз. Нравится подход: всё по цифрам, без лишних обещаний. Помогли выбрать объект с хорошей ликвидностью и потенциалом роста цены.»'
    }
]

// ---- swiper options ----
const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: { delay: 5000, disableOnInteraction: false },
    loop: true,
    autoHeight: true,
    navigation: {
        prevEl: '.int-prev',
        nextEl: '.int-next',
    },
    breakpoints: {
        768: { slidesPerView: 1, spaceBetween: 20 },
        1024: { slidesPerView: 2, spaceBetween: 20 },
        1250: { slidesPerView: 3, spaceBetween: 40 }
    }
}
</script>

<template>
    <div class="container">
        <div class="flex justify-center mb-2 mt-10 xl:mt-20">
            <img class="w-[70px] ml-0" src="/img/people/img.png" alt="Отзывы про LavaProperty">
            <img class="w-[70px] -ml-4 " src="/img/people/f.png" alt="Отзывы про LavaProperty">
            <img class="w-[70px] -ml-6" src="/img/people/family2.png" alt="Отзывы про LavaProperty">
            <img class="w-[70px] -ml-6" src="/img/people/family3.png" alt="Отзывы про LavaProperty">
        </div>
        <h2 class="light text-center text-2xl lg:text-4xl mb-10  ">
            <span class="bl0">Про результат:</span><br>
            реальные истории клиентов Lava Property
        </h2>
    </div>
    <div class="container mx-auto  flex  lg:flex-row justify-between gap-6 lg:gap-10 h-full">

        <ClientOnly>
            <Swiper v-bind="swiperOptions">
                <SwiperSlide v-for="s in slides" :key="s.id">
                    <div
                        class=" flex flex-col items-stretch justify-between lg:flex-row relative mx-auto my-4 lg:my-12 bg-white p-8 lg:p-10 rounded-[30px] min-h-[400px]  lg:min-h-[460px]">
                        <!-- left text -->
                        <div class="">
                            <div class="flex items-center gap-2">
                                <img class="w-[70px] -ml-4" :src="s.avatar" alt="Отзывы про LavaProperty">
                                <span class="bl0 block text-sm whitespace-normal break-words">{{ s.badge }}</span>
                            </div>
                            <!-- your stars svg -->
                            <svg class="my-6" width="187" height="31" viewBox="0 0 187 31" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M54.7542 0.138672L58.108 10.4606H68.9612L60.1808 16.8399L63.5346 27.1619L54.7542 20.7826L45.9739 27.1619L49.3277 16.8399L40.5473 10.4606H51.4004L54.7542 0.138672Z"
                                    fill="#FFDC41" />
                                <path
                                    d="M15.878 0.138672L19.2318 10.4606H30.085L21.3046 16.8399L24.6584 27.1619L15.878 20.7826L7.09763 27.1619L10.4514 16.8399L1.67106 10.4606H12.5242L15.878 0.138672Z"
                                    fill="#FFDC41" />
                                <path
                                    d="M93.6302 0.138672L96.984 10.4606H107.837L99.0568 16.8399L102.411 27.1619L93.6302 20.7826L84.8498 27.1619L88.2036 16.8399L79.4233 10.4606H90.2764L93.6302 0.138672Z"
                                    fill="#FFDC41" />
                                <path
                                    d="M132.506 0.138672L135.86 10.4606H146.713L137.933 16.8399L141.287 27.1619L132.506 20.7826L123.726 27.1619L127.08 16.8399L118.299 10.4606H129.153L132.506 0.138672Z"
                                    fill="#FFDC41" />
                                <path
                                    d="M171.383 0.138672L174.736 10.4606H185.59L176.809 16.8399L180.163 27.1619L171.383 20.7826L162.602 27.1619L165.956 16.8399L157.176 10.4606H168.029L171.383 0.138672Z"
                                    fill="#FFDC41" />
                            </svg>

                            <p class="w-full mb-4  whitespace-normal break-words">
                                {{ s.text }}
                            </p>

                        </div>
                    </div>
                </SwiperSlide>
                <template #container-end>
                    <button class="nav-btn nav-prev int-prev" aria-label="Назад">
                        <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button class="nav-btn nav-next int-next" aria-label="Вперёд">
                        <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 6l6 6-6 6" />
                        </svg>
                    </button>
                </template>
            </Swiper>
        </ClientOnly>
    </div>
</template>
<style scoped>
/* Кнопки навигации для Swiper */
.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(6px);
    color: #2B2925;
    transition: all 0.2s ease;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
    cursor: pointer;
}

.nav-btn:hover {
    background: white;
    transform: translateY(-50%) scale(1.04);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.16);
}

.nav-prev {
    left: 12px;
}

.nav-next {
    right: 12px;
}

/* disabled */
.swiper-button-disabled.nav-btn {
    opacity: 0.4;
    cursor: default;
    transform: translateY(-50%) scale(1);
    box-shadow: none;
}

@media (max-width: 640px) {
    .nav-btn {
        width: 38px;
        height: 38px;
    }

    .nav-prev {
        left: 6px;
    }

    .nav-next {
        right: 6px;
    }
}
</style>