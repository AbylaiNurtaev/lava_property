<script setup lang="ts">
import { computed } from 'vue'
import { useCityStore } from '~/stores/useCityStore'

const cityStore = useCityStore()

const catalogLink = computed(() => {
    if (!cityStore.city) return '/best'
    return `/${cityStore.city}/catalog`
})
</script>

<template>
    <section class="invest-block container mx-auto">
        <div class="invest-copy">
            <h2 class="light">
                <span class="bl0">Инвестируй</span><br>
                в будущее с нами и нашими клиентами
            </h2>

            <p>
                Недвижимость Таиланда — это не только курорт, но и рынок с устойчивым спросом на аренду,
                ограниченным предложением земли и понятными сценариями роста стоимости.
            </p>
            <p>
                Мы подбираем объекты, где инвестиционная логика видна заранее: район, ликвидность, спрос,
                график платежей и реалистичный сценарий дохода.
            </p>

            <div class="invest-actions">
                <NuxtLink :href="catalogLink">
                    <ButtonsTheGreen text="Cмотреть каталог" text-color="white" />
                </NuxtLink>
                <a href="#contacts">
                    <ButtonsTheGreen text="Написать специалисту" color="white" />
                </a>
            </div>
        </div>

        <div class="invest-photo" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1200"
            data-aos-once="true" data-aos-easing="ease-out-cubic">
            <div class="invest-card invest-card--top" data-aos="fade-right" data-aos-delay="200"
                data-aos-duration="1200" data-aos-easing="ease-out-cubic">
                <div class="invest-card-head">
                    <span class="invest-icon">
                        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 10.6L12 4l8 6.6" stroke="currentColor" stroke-width="1.9"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.5 9.5V20h11V9.5" stroke="currentColor" stroke-width="1.9"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 20v-5h4v5" stroke="currentColor" stroke-width="1.9"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <p><span>Апарты</span>102 896$</p>
                </div>
                <p><strong>Хороший объект</strong> для инвестирования</p>
                <NuxtLink href="/objects/27">
                    <ButtonsTheGreen text="Cмотреть" text-color="white" class="w-full ml-0" />
                </NuxtLink>
            </div>

            <div class="invest-card invest-card--bottom" data-aos="fade-left" data-aos-delay="200"
                data-aos-once="true" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
                <div class="invest-card-head">
                    <span class="invest-icon invest-icon--light">
                        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 10.6L12 4l8 6.6" stroke="currentColor" stroke-width="1.9"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.5 9.5V20h11V9.5" stroke="currentColor" stroke-width="1.9"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 20v-5h4v5" stroke="currentColor" stroke-width="1.9"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <p><span>Вилла</span>151 662$</p>
                </div>
                <p><strong>Подходит</strong> для жизни и аренды</p>
                <NuxtLink href="/objects/26">
                    <ButtonsTheGreen text="Cмотреть" color="white" class="w-full ml-0" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.invest-block {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 32px;
    margin-top: 88px;
    margin-bottom: 132px;
}

.invest-copy {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.invest-copy h2 {
    max-width: 620px;
    margin-bottom: 34px;
    color: #2B2925;
    font-size: clamp(30px, 4vw, 54px);
    line-height: 1.08;
}

.invest-copy p {
    max-width: 620px;
    margin: 8px 0;
    color: #6B6864;
    font-size: 16px;
    line-height: 1.65;
}

.invest-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 34px;
}

.invest-photo {
    position: relative;
    width: 50%;
    min-height: 460px;
    border-radius: 20px;
    background-image: linear-gradient(to top, rgba(43, 41, 37, 0.18), rgba(43, 41, 37, 0.02)), url('/img/manager-villa.webp');
    background-size: cover;
    background-position: center;
    cursor: pointer;
}

.invest-card {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 250px;
    gap: 12px;
    border-radius: 20px;
    padding: 22px;
    box-shadow: 0 18px 46px rgba(43, 41, 37, 0.16);
}

.invest-card--top {
    top: -66px;
    left: 0;
    background: #FFFFFF;
    color: #2B2925;
}

.invest-card--bottom {
    right: 0;
    bottom: -66px;
    background: #0F5C43;
    color: #FFFFFF;
}

.invest-card-head {
    display: flex;
    align-items: center;
    gap: 14px;
}

.invest-card-head p {
    margin: 0;
    color: inherit;
    font-size: 16px;
    line-height: 1.25;
}

.invest-card-head p span,
.invest-card strong {
    display: block;
    font-family: 'Montserrat-Bold', sans-serif;
}

.invest-card>p {
    margin: 0;
    color: inherit;
    font-size: 15px;
    line-height: 1.35;
}

.invest-icon {
    position: relative;
    display: block;
    width: 62px;
    height: 62px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: #0F5C43;
    color: #FFFFFF;
}

.invest-icon svg {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 36px;
    height: 36px;
    transform: translate(-50%, -50%);
}

.invest-icon--light {
    background: #FFFFFF;
    color: #0F5C43;
}

@media (max-width: 1024px) {
    .invest-block {
        flex-direction: column;
        margin-top: 64px;
        margin-bottom: 72px;
    }

    .invest-copy,
    .invest-photo {
        width: 100%;
    }

    .invest-photo {
        min-height: 430px;
    }

    .invest-card {
        position: relative;
        inset: auto;
        margin: 18px;
    }

    .invest-card--bottom {
        display: none;
    }
}

@media (max-width: 640px) {
    .invest-block {
        margin-top: 52px;
        margin-bottom: 56px;
    }

    .invest-copy h2 {
        margin-bottom: 24px;
        font-size: 30px;
    }

    .invest-actions {
        flex-direction: column;
    }

    .invest-photo {
        min-height: 360px;
        background-position: center top;
    }

    .invest-card {
        width: calc(100% - 28px);
        margin: 14px;
        padding: 18px;
    }
}
</style>
