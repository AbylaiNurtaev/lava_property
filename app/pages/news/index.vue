<script setup>
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useNewsStore } from '~/stores/news'

const newsStore = useNewsStore()
const { categoryList, filteredArticles, selectedCategorySlug } = storeToRefs(newsStore)

const topicMeta = {
    'buyers-tips': {
        label: 'Покупка',
        description: 'Документы, сделки и безопасный выбор объекта',
        icon: 'pi pi-home',
    },
    investment: {
        label: 'Инвестиции',
        description: 'Доходность, аренда и рост стоимости',
        icon: 'pi pi-chart-line',
    },
    'life-in-thailand': {
        label: 'Жизнь',
        description: 'Переезд, быт и адаптация в Таиланде',
        icon: 'pi pi-sun',
    },
    healthcare: {
        label: 'Медицина',
        description: 'Клиники, страховки и лечение',
        icon: 'pi pi-heart',
    },
    schools: {
        label: 'Школы',
        description: 'Образование и детская инфраструктура',
        icon: 'pi pi-book',
    },
    'tourism-economy': {
        label: 'Экономика',
        description: 'Туризм, рынок и деловая среда',
        icon: 'pi pi-globe',
    },
}

const topicCards = computed(() =>
    categoryList.value
        .map((cat) => ({
            ...cat,
            ...(topicMeta[cat.slug] || {
                label: cat.title,
                description: 'Полезные материалы по теме',
                icon: 'pi pi-file',
            }),
        }))
        .slice(0, 6)
)

const totalArticles = computed(() => categoryList.value.reduce((sum, cat) => sum + cat.count, 0))

const activeTitle = computed(() => {
    if (selectedCategorySlug.value === 'all') return 'Все статьи'
    return topicCards.value.find((topic) => topic.slug === selectedCategorySlug.value)?.title || 'Статьи'
})

const articlesLabel = computed(() => {
    const count = filteredArticles.value.length
    const lastTwo = count % 100
    const last = count % 10

    if (lastTwo >= 11 && lastTwo <= 14) return `${count} статей`
    if (last === 1) return `${count} статья`
    if (last >= 2 && last <= 4) return `${count} статьи`
    return `${count} статей`
})

onMounted(() => {
    newsStore.loadNewsFromJSON()
})

function pickCategory(slug) {
    newsStore.selectCategory(slug)
    document.getElementById('guide-articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
    <main class="guide-page">
        <section class="guide-hero container">
            <div class="guide-copy">
                <p class="guide-eyebrow">Lava Property Guide</p>
                <h1>Гид по недвижимости и жизни в Таиланде</h1>
                <p>
                    Короткие практичные материалы о покупке, инвестициях, переезде и жизни у моря.
                </p>

                <button type="button" class="all-topics" :class="{ active: selectedCategorySlug === 'all' }"
                    @click="pickCategory('all')">
                    <span>Все материалы</span>
                    <strong>{{ totalArticles }}</strong>
                </button>
            </div>

            <div class="topic-grid" aria-label="Темы гида">
                <button v-for="topic in topicCards" :key="topic.id" type="button" class="topic-card"
                    :class="{ active: selectedCategorySlug === topic.slug }" @click="pickCategory(topic.slug)">
                    <span class="topic-icon" :style="{ '--topic-color': topic.color }">
                        <i :class="topic.icon"></i>
                    </span>
                    <span class="topic-content">
                        <strong>{{ topic.label }}</strong>
                        <small>{{ topic.description }}</small>
                    </span>
                    <span class="topic-count">{{ topic.count }}</span>
                </button>
            </div>
        </section>

        <section id="guide-articles" class="guide-articles container">
            <div class="articles-heading">
                <div>
                    <p class="guide-eyebrow">Материалы</p>
                    <h2>{{ activeTitle }}</h2>
                </div>
                <span>{{ articlesLabel }}</span>
            </div>

            <div class="articles-list">
                <NuxtLink v-for="item in filteredArticles" :key="item.id" :to="`/news/${item.id}`"
                    class="article-card">
                    <div class="article-image" :style="{ backgroundImage: `url(${item.image})` }">
                        <span :style="{ backgroundColor: item.categoryColor }">{{ item.categoryTitle }}</span>
                    </div>

                    <div class="article-body">
                        <div class="article-date">
                            <iconsTheTime />
                            <span>{{ item.date }}</span>
                        </div>
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.excerpt }}</p>
                    </div>
                </NuxtLink>
            </div>
        </section>

        <PageRating class="container" page="/news" page-title="Гид" />
    </main>
</template>

<style scoped>
.guide-page {
    min-height: 100vh;
    padding: 120px 0 70px;
    background:
        linear-gradient(180deg, rgba(250, 249, 246, 0.92), rgba(250, 249, 246, 0.96)),
        url('/img/bg2.webp') center top / cover fixed;
}

.guide-hero {
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
    gap: 28px;
    align-items: stretch;
}

.guide-copy,
.topic-grid,
.guide-articles {
    border: 1px solid rgba(43, 41, 37, 0.08);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 18px 44px rgba(43, 41, 37, 0.08);
}

.guide-copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px;
}

.guide-eyebrow {
    color: #0F5C43;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
}

.guide-copy h1 {
    max-width: 560px;
    margin-top: 8px;
    color: #2B2925;
    font-size: 42px;
    line-height: 1.08;
}

.guide-copy p:not(.guide-eyebrow) {
    max-width: 520px;
    margin-top: 16px;
    color: #6B6864;
    line-height: 1.55;
}

.all-topics {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: fit-content;
    min-width: 210px;
    min-height: 48px;
    margin-top: 28px;
    border: 1px solid rgba(43, 41, 37, 0.12);
    border-radius: 999px;
    padding: 0 8px 0 18px;
    background: #fff;
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
    transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}

.all-topics strong {
    display: grid;
    min-width: 36px;
    height: 36px;
    place-items: center;
    border-radius: 50%;
    background: #0F5C43;
    color: #FFFFFF;
}

.all-topics:hover,
.all-topics.active {
    transform: translateY(-1px);
    border-color: #0F5C43;
    background: #E6F0EC;
}

.topic-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    padding: 14px;
}

.topic-card {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr) auto;
    gap: 12px;
    align-items: center;
    min-height: 104px;
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    padding: 14px;
    background: #fff;
    color: #2B2925;
    text-align: left;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.topic-card:hover,
.topic-card.active {
    transform: translateY(-2px);
    border-color: #0F5C43;
    box-shadow: 0 16px 32px rgba(43, 41, 37, 0.1);
}

.topic-card.active {
    background: #E6F0EC;
}

.topic-icon {
    display: grid;
    width: 44px;
    height: 44px;
    place-items: center;
    border-radius: 50%;
    background: #E6F0EC;
    color: #0F5C43;
    font-size: 18px;
}

.topic-content {
    display: grid;
    gap: 5px;
}

.topic-content strong {
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 16px;
}

.topic-content small {
    color: #6B6864;
    font-size: 12px;
    line-height: 1.35;
}

.topic-count {
    display: grid;
    min-width: 30px;
    height: 30px;
    place-items: center;
    border-radius: 50%;
    background: #F2F0EB;
    color: #2B2925;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 12px;
}

.guide-articles {
    margin-top: 24px;
    padding: 26px;
}

.articles-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 18px;
}

.articles-heading h2 {
    margin-top: 4px;
    color: #2B2925;
    font-size: 28px;
}

.articles-heading span {
    border-radius: 999px;
    background: #E6F0EC;
    padding: 10px 14px;
    color: #6B6864;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 13px;
    white-space: nowrap;
}

.articles-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
}

.article-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #E3E1DA;
    border-radius: 8px;
    background: #fff;
    color: #2B2925;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.article-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 34px rgba(43, 41, 37, 0.1);
}

.article-image {
    position: relative;
    aspect-ratio: 1.45;
    background-position: center;
    background-size: cover;
}

.article-image span {
    position: absolute;
    top: 14px;
    left: 14px;
    border-radius: 999px;
    padding: 7px 10px;
    color: #fff;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 10px;
    line-height: 1;
}

.article-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 16px;
}

.article-date {
    display: flex;
    gap: 8px;
    align-items: center;
    color: #6B6864;
    font-size: 12px;
}

.article-body h3 {
    margin-top: 10px;
    color: #2B2925;
    font-size: 17px;
    line-height: 1.25;
}

.article-body p {
    display: -webkit-box;
    overflow: hidden;
    margin-top: 10px;
    color: #6B6864;
    font-size: 13px;
    line-height: 1.45;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

@media (max-width: 1024px) {
    .guide-hero {
        grid-template-columns: 1fr;
    }

    .guide-copy h1 {
        font-size: 34px;
    }

    .articles-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .guide-page {
        padding-top: 96px;
    }

    .guide-copy,
    .guide-articles {
        padding: 18px;
    }

    .guide-copy h1 {
        font-size: 28px;
    }

    .topic-grid {
        grid-template-columns: 1fr;
    }

    .topic-card {
        min-height: 92px;
    }

    .articles-list {
        grid-template-columns: 1fr;
    }

    .articles-heading {
        align-items: flex-start;
        flex-direction: column;
    }
}
</style>
