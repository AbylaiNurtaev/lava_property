import { defineStore } from 'pinia'

export const useNewsStore = defineStore('newsStore', {
  state: () => ({
    categories: [],           // сырой список категорий (с color/slug/articles)
    articles: [],             // плоский массив статей с метаданными категории
    selectedCategorySlug: 'all',
    selectedNews: null
  }),

  getters: {

    categoryList: (state) => state.categories.map(c => ({
      id: c.id, title: c.title, slug: c.slug, color: c.color, count: (c.articles?.length || 0)
    })),
      articleById: (s) => (id) => s.articles.find(a => String(a.id) === String(id)),
    allArticles: (state) => state.articles,
    filteredArticles: (state) => {
      if (state.selectedCategorySlug === 'all') return state.articles
      return state.articles.filter(a => a.categorySlug === state.selectedCategorySlug)
    },
    newsCount: (state) => state.articles.length,
    hasSelectedNews: (state) => state.selectedNews !== null
  },

  actions: {
    async loadNewsFromJSON(path = '/api/news') {
      try {
        const res = await fetch(path)
        if (!res.ok) throw new Error('Ошибка загрузки JSON: ' + res.status)
        const data = await res.json()

        if (!data || !Array.isArray(data.categories)) {
          console.error('Ожидался объект вида { categories: [] }:', data)
          if (path !== '/data/news.json') await this.loadNewsFromJSON('/data/news.json')
          return
        }

        if (!data.categories.length && path !== '/data/news.json') {
          await this.loadNewsFromJSON('/data/news.json')
          return
        }

        // 1) сохраняем категории как есть (чтобы были id/title/slug/color/articles)
        this.categories = data.categories

        // 2) делаем плоский список статей + атрибуты категории
        this.articles = data.categories.flatMap(cat =>
          (cat.articles || []).map(a => ({
            // поля статьи
            id: a.id,
            title: a.title,
            date: a.date,
            excerpt: a.excerpt,
            image: a.image,
            content: a.content,
            // мета категории
            categoryId: cat.id,
            categoryTitle: cat.title,
            categorySlug: cat.slug,
            categoryColor: cat.color,
            // удобный href (подставь свой роут при необходимости)
            href: `/news/${a.id}`
          }))
        )
      } catch (e) {
        console.error('Ошибка при загрузке данных:', e)
        if (path !== '/data/news.json') {
          await this.loadNewsFromJSON('/data/news.json')
          return
        }
      }
    },
  async ensureLoaded() {
    if (this.articles.length === 0) await this.loadNewsFromJSON()
  },
    selectCategory(slug) { this.selectedCategorySlug = slug || 'all' },
    clearCategory() { this.selectedCategorySlug = 'all' },

    selectNews(n) { this.selectedNews = n },
    clearSelectedNews() { this.selectedNews = null }
  }
})
