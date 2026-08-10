import { getMongoDb } from '../../../../utils/mongo'

export default defineEventHandler(async (event) => {
  const db = await getMongoDb()
  const id = Number(getRouterParam(event, 'id'))
  const category = await db.collection('news_categories').findOne({ id })

  await db.collection('news_categories').deleteOne({ id })
  if (category?.slug) {
    await db.collection('news_articles').deleteMany({ categorySlug: category.slug })
  }

  return { ok: true }
})
