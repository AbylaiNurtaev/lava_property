import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { createPinia, setActivePinia } from 'pinia'
import { getMongoDb } from '../../utils/mongo'

export default defineEventHandler(async () => {
  const db = await getMongoDb()

  setActivePinia(createPinia())
  const { usePropertyStore } = await import(
    pathToFileURL(resolve(process.cwd(), 'app/stores/useProperties.js')).href
  )
  const propertyStore = usePropertyStore()
  const properties = propertyStore.properties.map((property: any) => ({
    ...property,
    updatedAt: new Date().toISOString(),
  }))

  const newsRaw = await readFile(resolve(process.cwd(), 'public/data/news.json'), 'utf8')
  const news = JSON.parse(newsRaw)
  const categories = (news.categories || []).map((category: any) => {
    const { articles, ...rest } = category
    return {
      ...rest,
      updatedAt: new Date().toISOString(),
    }
  })
  const articles = (news.categories || []).flatMap((category: any) =>
    (category.articles || []).map((article: any) => ({
      ...article,
      categoryId: category.id,
      categoryTitle: category.title,
      categorySlug: category.slug,
      categoryColor: category.color,
      updatedAt: new Date().toISOString(),
    }))
  )

  await Promise.all([
    db.collection('properties').deleteMany({}),
    db.collection('news_categories').deleteMany({}),
    db.collection('news_articles').deleteMany({}),
  ])

  if (properties.length) await db.collection('properties').insertMany(properties)
  if (categories.length) await db.collection('news_categories').insertMany(categories)
  if (articles.length) await db.collection('news_articles').insertMany(articles)

  await Promise.all([
    db.collection('properties').createIndex({ id: 1 }, { unique: true }),
    db.collection('news_categories').createIndex({ id: 1 }, { unique: true }),
    db.collection('news_categories').createIndex({ slug: 1 }, { unique: true }),
    db.collection('news_articles').createIndex({ id: 1 }, { unique: true }),
    db.collection('news_articles').createIndex({ categorySlug: 1 }),
  ])

  return {
    ok: true,
    properties: properties.length,
    categories: categories.length,
    articles: articles.length,
  }
})
