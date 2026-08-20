<script setup>
const reviews = [
    {
        id: 1,
        name: 'Алексей и Марина',
        role: 'купили апартаменты для отдыха',
        avatar: '/img/people/f.png',
        location: 'Банг Тао, Пхукет',
        object: 'Siamese Bangtao',
        text: 'Сначала сомневались, потому что покупка за границей казалась слишком сложной. Команда спокойно провела нас по каждому шагу: сравнили районы, объяснили договор, помогли с оплатой и документами. В итоге выбрали объект без спешки и лишнего давления.'
    },
    {
        id: 2,
        name: 'Игорь',
        role: 'подбирал жилье для переезда',
        avatar: '/img/people/igor.png',
        location: 'Най Харн, Пхукет',
        object: 'Wallaya Residence Nai Harn',
        text: 'Мне было важно понять не только цену, но и как там будет жить каждый день. Показали варианты по районам, честно сказали, где шумно, где слабее инфраструктура, а где объект лучше держит ликвидность. Это сильно упростило решение.'
    },
    {
        id: 3,
        name: 'Семья Ковалевых',
        role: 'выбирали квартиру у моря',
        avatar: '/img/people/family3.png',
        location: 'Карон, Пхукет',
        object: 'Ever Prime Residences',
        text: 'Мы искали место для семейных поездок, поэтому смотрели на пляж, дорогу, магазины и планировку. Нам не просто прислали подборку, а отсеяли неподходящее и оставили несколько сильных вариантов. Сделка прошла спокойно.'
    },
    {
        id: 4,
        name: 'Дмитрий',
        role: 'инвестировал под аренду',
        avatar: '/img/people/dmitriy.png',
        location: 'Банг Тао, Пхукет',
        object: 'The Ozone Signature',
        text: 'Понравилось, что разговор был не про красивые обещания, а про цифры: вход, платежный график, прогноз аренды, ликвидность района. После покупки команда осталась на связи и помогла с дальнейшими вопросами по управлению.'
    },
    {
        id: 5,
        name: 'Ольга',
        role: 'покупала первую недвижимость в Таиланде',
        avatar: '/img/people/olga.png',
        location: 'Найянг, Пхукет',
        object: 'The Zero Naiyang',
        text: 'Я боялась ошибиться с застройщиком и документами. Мне подробно объяснили, чем отличаются объекты, какие расходы будут после покупки и на что смотреть в договоре. Было ощущение, что меня ведут, а не просто продают.'
    },
    {
        id: 6,
        name: 'Семья Французовых',
        role: 'купили апартаменты для отпуска',
        avatar: '/img/people/family2.png',
        location: 'Катху, Пхукет',
        object: 'Dcondo Cove',
        text: 'Мы хотели понятный бюджет и район, где удобно жить с детьми. Lava Property быстро собрали варианты, организовали просмотры и помогли выбрать без лишней суеты. Особенно ценно, что все нюансы проговаривали заранее.'
    }
]

</script>

<template>
    <section class="reviews-section">
        <div class="container">
            <div class="reviews-heading">
                <div class="reviews-avatars" aria-hidden="true">
                    <img src="/img/people/img.png" alt="">
                    <img src="/img/people/f.png" alt="">
                    <img src="/img/people/family2.png" alt="">
                    <img src="/img/people/family3.png" alt="">
                </div>
                <span class="reviews-kicker">Отзывы клиентов</span>
                <h2>Истории людей, которые уже прошли сделку с Lava Property</h2>
            </div>
        </div>

        <div class="reviews-scroll" aria-label="Отзывы клиентов Lava Property">
            <div class="reviews-track">
                <article v-for="review in reviews" :key="review.id" class="review-card">
                    <div class="review-card-top">
                        <img :src="review.avatar" :alt="review.name">
                        <div>
                            <h3>{{ review.name }}</h3>
                            <p>{{ review.role }}</p>
                        </div>
                    </div>

                    <div class="review-meta">
                        <span>{{ review.object }}</span>
                        <span>{{ review.location }}</span>
                    </div>

                    <div class="review-stars" aria-label="Оценка 5 из 5">★★★★★</div>
                    <p class="review-text">{{ review.text }}</p>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.reviews-section {
    overflow: hidden;
    padding: 72px 0;
    background: #FAF9F6;
}

.reviews-heading {
    display: grid;
    justify-items: center;
    gap: 10px;
    margin-bottom: 34px;
    text-align: center;
}

.reviews-avatars {
    display: flex;
    margin-bottom: 4px;
}

.reviews-avatars img {
    width: 58px;
    height: 58px;
    border: 3px solid #FAF9F6;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 10px 24px rgba(43, 41, 37, 0.12);
}

.reviews-avatars img + img {
    margin-left: -16px;
}

.reviews-kicker {
    color: #0F5C43;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
    letter-spacing: 0;
    text-transform: uppercase;
}

.reviews-heading h2 {
    max-width: 760px;
    color: #2B2925;
    font-size: clamp(28px, 4vw, 44px);
    line-height: 1.12;
}

.reviews-scroll {
    position: relative;
    width: 100%;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-padding-inline: max(24px, calc((100vw - 1280px) / 2));
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
}

.reviews-scroll::-webkit-scrollbar {
    height: 8px;
}

.reviews-scroll::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: rgba(15, 92, 67, 0.28);
}

.reviews-scroll::-webkit-scrollbar-track {
    background: transparent;
}

.reviews-track {
    display: flex;
    width: max-content;
    gap: 18px;
    padding: 4px max(24px, calc((100vw - 1280px) / 2)) 16px;
}

.review-card {
    display: grid;
    align-content: start;
    width: 390px;
    min-height: 330px;
    flex: 0 0 auto;
    gap: 16px;
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    background: #FFFFFF;
    padding: 22px;
    box-shadow: 0 14px 36px rgba(43, 41, 37, 0.07);
}

.review-card-top {
    display: flex;
    align-items: center;
    gap: 12px;
}

.review-card-top img {
    width: 54px;
    height: 54px;
    flex: 0 0 auto;
    border-radius: 50%;
    object-fit: cover;
}

.review-card h3 {
    color: #2B2925;
    font-size: 18px;
    line-height: 1.2;
}

.review-card-top p,
.review-meta,
.review-text {
    color: #6B6864;
}

.review-card-top p {
    margin-top: 3px;
    font-size: 13px;
    line-height: 1.35;
}

.review-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 13px;
}

.review-meta span {
    border-radius: 999px;
    background: #E6F0EC;
    padding: 7px 10px;
    color: #0F5C43;
}

.review-stars {
    color: #0F5C43;
    font-size: 17px;
    letter-spacing: 2px;
}

.review-text {
    font-size: 15px;
    line-height: 1.65;
}

@media (max-width: 640px) {
    .reviews-section {
        padding: 52px 0;
    }

    .reviews-heading {
        padding: 0 16px;
    }

    .review-card {
        width: 310px;
        min-height: 380px;
        padding: 18px;
    }

    .reviews-scroll {
        scroll-padding-inline: 16px;
    }

    .reviews-track {
        padding-inline: 16px;
    }
}
</style>
