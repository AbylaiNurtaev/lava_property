<script setup>
import { useRoute, createError } from '#imports'
import { storeToRefs } from 'pinia'
import { useNewsStore } from '@/stores/news'

const route = useRoute()
const newsStore = useNewsStore()

// Загружаем данные (работает и при прямом заходе на страницу)
await newsStore.ensureLoaded()

const article = newsStore.articleById(route.params.id)
if (!article) {
  // 404, если id не найден
  throw createError({ statusCode: 404, statusMessage: 'Статья не найдена' })
}

// SEO
useHead({
  title: article.title,
  meta: [
    { name: 'description', content: article.excerpt },
    { property: 'og:title', content: article.title },
    { property: 'og:description', content: article.excerpt },
    { property: 'og:image', content: article.image }
  ]
})
</script>

<template>
  <article class="container mx-auto my-10 bg-white p-6 lg:p-10 rounded-[30px]">
    <div class="h-[50px]"></div>
    <NuxtLink to="/news" class="underline opacity-70 ">← ко всем новостям</NuxtLink>

    <h1 class="text-xl lg:text-4xl font-semibold mt-4 mb-6">{{ article.title }}</h1>

    <div class="flex items-center gap-3 mb-6">
      <span class="text-sm opacity-70">{{ new Date(article.date).toLocaleDateString() }}</span>
      <span class="text-xs px-4 py-3 rounded-full text-white" :style="{ backgroundColor: article.categoryColor }">
        {{ article.categoryTitle }}
      </span>
    </div>

    <img :src="article.image" :alt="article.title" class="w-full rounded-2xl mb-6 h-[200px] lg:h-auto object-cover">

    <!-- контент из JSON HTML-строкой -->
    <div class="prose max-w-none" v-html="article.content"></div>
  </article>
</template>
<style lang="css">
.prose .table-wrap {
  overflow-x: auto;
  margin: 14px 0;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
}

.prose table {
  width: 100%;
  border-collapse: collapse;
  min-width: 720px;
}

table h2 {
  margin: 10px 0;
}

.prose th,
.prose td {
  padding: 12px 12px;
  border-bottom: 1px solid #e2e8f0;
  vertical-align: top;
}

.prose th {
  text-align: left;
  font-weight: 600;
  background: #f1f5f9;
}

.prose tr:last-child td {
  border-bottom: none;
}

@media (max-width: 640px) {
  .prose table {
    min-width: 640px;
  }

  .prose th,
  .prose td {
    font-size: 14px;
    padding: 10px;
  }
}

/* Заголовки */
.prose h2 {
  margin-top: 48px;
  /* главное — верхний отступ */
  margin-bottom: 16px;
  font-size: 28px;
  line-height: 1.2;
  font-weight: 700;
}

.prose h2:first-child {
  margin-top: 0;
  /* чтобы первый заголовок не улетал вниз */
}

.prose h3 {
  margin-top: 28px;
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 1.3;
  font-weight: 600;
}

/* Абзацы */
.prose p {
  margin: 10px 0;
}

/* Списки */


.prose li {
  margin: 6px 0;
}

/* Списки */
.prose ul {
  list-style: none;
  /* убираем стандартные маркеры */
  padding-left: 0;
  margin: 12px 0;
}

.prose li {
  position: relative;
  padding-left: 28px;
  /* место под галочку */
  margin: 6px 0;
}

/* Галочка */
.prose li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  color: #0F5C43;
  /* салатовый (Tailwind green-500) */
  font-weight: 700;
}

.prose-summary {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 20px 24px;
  margin: 24px 0 40px;
}

.prose-divider {
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, #e2e8f0, transparent);
  margin: 48px 0;
}

.prose-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 24px 28px;
  margin: 32px 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
}

.prose-card h2 {
  margin-top: 0;
}

@media (max-width: 640px) {
  .prose-card {
    padding: 18px 20px;
  }
}
</style>