import { getMongoDb, cleanMongoDocument } from '../../../../utils/mongo'

export default defineEventHandler(async (event) => {
  const db = await getMongoDb()
  const id = Number(getRouterParam(event, 'id'))
  const body = await readBody(event)
  const category = await db.collection('news_categories').findOne({ slug: body.categorySlug })
  const article = {
    ...body,
    id,
    categoryTitle: category?.title || body.categoryTitle || '',
    categoryColor: category?.color || body.categoryColor || '#96D630',
    updatedAt: new Date().toISOString(),
  }

  await db.collection('news_articles').updateOne({ id }, { $set: article }, { upsert: true })
  return cleanMongoDocument(await db.collection('news_articles').findOne({ id }))
})
