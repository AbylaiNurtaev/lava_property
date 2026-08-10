import { getMongoDb, cleanMongoDocument } from '../../../../utils/mongo'

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9а-яё]+/gi, '-')
    .replace(/^-+|-+$/g, '')

export default defineEventHandler(async (event) => {
  const db = await getMongoDb()
  const body = await readBody(event)
  const collection = db.collection('news_categories')
  const last = await collection.find({}).sort({ id: -1 }).limit(1).next()
  const category = {
    id: body.id ? Number(body.id) : Number(last?.id || 0) + 1,
    title: body.title || 'Новая тема',
    slug: body.slug || slugify(body.title || 'new-topic'),
    color: body.color || '#96D630',
    updatedAt: new Date().toISOString(),
  }

  await collection.updateOne({ id: category.id }, { $set: category }, { upsert: true })
  return cleanMongoDocument(await collection.findOne({ id: category.id }))
})
