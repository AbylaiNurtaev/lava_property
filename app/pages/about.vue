<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCityStore } from '~/stores/useCityStore'

const route = useRoute()
const cityStore = useCityStore()

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
    return 'Пхукет и Паттайя, Таиланд'
})

const officeCoordinates = '7.877035,98.396866'
const googleMapUrl = computed(() =>
    `https://maps.google.com/maps?q=${officeCoordinates}&z=12&hl=ru&output=embed`
)

useSeoMeta({
    title: 'О компании и контакты — Lava Property',
    description: 'Lava Property: подбор недвижимости в Таиланде, сопровождение сделки, контакты и консультация.',
})
</script>

<template>
    <main class="about-page">
        <section class="about-hero">
            <div class="container mx-auto">
                <div class="about-hero-grid">
                    <div>
                        <span class="about-kicker">Lava Property</span>
                        <h1>Недвижимость в Таиланде без лишней сложности</h1>
                        <p>
                            Подбираем виллы, апартаменты и инвестиционные проекты в Таиланде. Помогаем сравнить районы,
                            проверить объект, пройти сделку и решить вопросы после покупки.
                        </p>
                    </div>

                    <div class="contact-card">
                        <span>Связаться с нами</span>
                        <a href="tel:+66618133387" class="contact-phone">+66 61 813 3387</a>
                        <a href="mailto:contact@lavaproperty.com" class="contact-email">contact@lavaproperty.com</a>
                        <p>{{ address }}</p>
                        <div class="contact-icons" aria-label="Мессенджеры">
                            <IconsTheTelegram />
                            <IconsTheWhatsApp />
                            <IconsTheMax />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-content">
            <div class="container mx-auto">
                <div class="about-info-grid">
                    <article class="info-panel">
                        <h2>Что мы делаем</h2>
                        <ul>
                            <li>Подбираем объекты под жизнь, отдых или инвестиции.</li>
                            <li>Объясняем различия районов, проектов, планировок и платежных графиков.</li>
                            <li>Сопровождаем коммуникацию с застройщиком и проверку документов.</li>
                            <li>Помогаем после сделки: аренда, управление, бытовые и организационные вопросы.</li>
                        </ul>
                    </article>

                    <article class="info-panel">
                        <h2>Почему с нами спокойно</h2>
                        <ul>
                            <li>Не перегружаем подборку десятками случайных вариантов.</li>
                            <li>Показываем сильные и слабые стороны объекта до решения.</li>
                            <li>Работаем с реальными бюджетами, сроками и задачами клиента.</li>
                            <li>Остаемся на связи после покупки, а не только до подписания договора.</li>
                        </ul>
                    </article>
                </div>

                <div class="office-grid">
                    <div>
                        <span class="about-kicker">Офис и консультация</span>
                        <h2>Напишите или закажите звонок</h2>
                        <p>
                            Расскажите, какой объект вы ищете: город, бюджет, цель покупки и сроки. Мы соберем короткую
                            подборку и объясним, какие варианты действительно стоит смотреть.
                        </p>
                    </div>

                    <iframe class="google-contact-map" :src="googleMapUrl" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" title="Google Map — офис Lava Property"></iframe>
                </div>
            </div>
        </section>

        <TheForm />
    </main>
</template>

<style scoped>
.about-page {
    background: #FAF9F6;
    color: #2B2925;
}

.about-hero {
    padding: 150px 0 70px;
    background:
        linear-gradient(90deg, rgba(11, 68, 51, 0.84), rgba(11, 68, 51, 0.48)),
        url('/img/a-bg.webp') center / cover no-repeat;
}

.about-hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
    align-items: end;
    gap: 28px;
}

.about-kicker {
    display: inline-flex;
    width: fit-content;
    border-radius: 999px;
    background: #E6F0EC;
    color: #0F5C43;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
    padding: 9px 13px;
    text-transform: uppercase;
}

.about-hero h1 {
    max-width: 820px;
    margin-top: 16px;
    color: #FFFFFF;
    font-size: clamp(38px, 6vw, 78px);
    line-height: 1;
}

.about-hero p {
    max-width: 720px;
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.86);
    font-size: 18px;
    line-height: 1.62;
}

.contact-card,
.info-panel,
.office-grid {
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0 18px 44px rgba(43, 41, 37, 0.08);
}

.contact-card {
    display: grid;
    gap: 12px;
    padding: 24px;
}

.contact-card > span,
.info-panel h2,
.office-grid h2 {
    font-family: 'Montserrat-Bold', sans-serif;
}

.contact-phone {
    color: #0F5C43;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: clamp(28px, 3vw, 42px);
    line-height: 1.05;
}

.contact-email,
.contact-card p {
    color: #6B6864;
    font-size: 16px;
}

.contact-icons {
    display: flex;
    gap: 10px;
    margin-top: 6px;
}

.about-content {
    padding: 72px 0;
}

.about-info-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
}

.info-panel {
    padding: 26px;
}

.info-panel h2,
.office-grid h2 {
    color: #2B2925;
    font-size: clamp(26px, 3vw, 40px);
    line-height: 1.12;
}

.info-panel ul {
    display: grid;
    gap: 12px;
    margin-top: 18px;
    color: #6B6864;
    line-height: 1.5;
}

.info-panel li {
    position: relative;
    padding-left: 22px;
}

.info-panel li::before {
    position: absolute;
    top: 9px;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #0F5C43;
    content: '';
}

.office-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(420px, 1.2fr);
    align-items: center;
    gap: 26px;
    margin-top: 18px;
    padding: 26px;
}

.office-grid h2 {
    margin-top: 14px;
}

.office-grid p {
    margin-top: 14px;
    color: #6B6864;
    font-size: 16px;
    line-height: 1.62;
}

.google-contact-map {
    width: 100%;
    min-height: 360px;
    border: 0;
    border-radius: 8px;
    overflow: hidden;
    background: #F2F0EB;
}

@media (max-width: 900px) {
    .about-hero {
        padding: 120px 0 46px;
    }

    .about-hero-grid,
    .about-info-grid,
    .office-grid {
        grid-template-columns: 1fr;
    }

    .office-grid {
        padding: 18px;
    }

    .google-contact-map {
        min-height: 280px;
    }
}
</style>
