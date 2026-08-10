import { getMongoDb, cleanMongoDocument } from '../../../../utils/mongo'

export default defineEventHandler(async (event) => {
  const db = await getMongoDb()
  const id = Number(getRouterParam(event, 'id'))
  const body = await readBody(event)
  const collection = db.collection('news_categories')
  const previous = await collection.findOne({ id })
  const category = {
    ...body,
    id,
    updatedAt: new Date().toISOString(),
  }

  await collection.updateOne({ id }, { $set: category }, { upsert: true })

  if (previous?.slug && body.slug && previous.slug !== body.slug) {
    await db.collection('news_articles').updateMany(
      { categorySlug: previous.slug },
      {
        $set: {
          categorySlug: body.slug,
          categoryTitle: body.title,
          categoryColor: body.color,
        },
      }
    )
  }

  return cleanMongoDocument(await collection.findOne({ id }))
})
