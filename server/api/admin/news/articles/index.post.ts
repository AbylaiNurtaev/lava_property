import { getMongoDb, cleanMongoDocument } from '../../../../utils/mongo'

export default defineEventHandler(async (event) => {
  const db = await getMongoDb()
  const body = await readBody(event)
  const collection = db.collection('news_articles')
  const last = await collection.find({}).sort({ id: -1 }).limit(1).next()
  const category = await db.collection('news_categories').findOne({ slug: body.categorySlug })
  const article = {
    ...body,
    id: body.id ? Number(body.id) : Number(last?.id || 0) + 1,
    categoryTitle: category?.title || body.categoryTitle || '',
    categoryColor: category?.color || body.categoryColor || '#96D630',
    updatedAt: new Date().toISOString(),
  }

  await collection.updateOne({ id: article.id }, { $set: article }, { upsert: true })
  return cleanMongoDocument(await collection.findOne({ id: article.id }))
})
