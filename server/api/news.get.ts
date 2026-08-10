import { getMongoDb, cleanMongoDocuments } from '../utils/mongo'

export default defineEventHandler(async () => {
  const db = await getMongoDb()
  const categories = cleanMongoDocuments(
    await db.collection('news_categories').find({}).sort({ id: -1 }).toArray()
  )
  const articles = cleanMongoDocuments(
    await db.collection('news_articles').find({}).sort({ id: -1 }).toArray()
  )

  return {
    categories: categories.map((category: any) => ({
      ...category,
      articles: articles
        .filter((article: any) => article.categorySlug === category.slug)
        .map((article: any) => ({
          id: article.id,
          title: article.title,
          date: article.date,
          excerpt: article.excerpt,
          image: article.image,
          content: article.content,
        })),
    })),
  }
})
