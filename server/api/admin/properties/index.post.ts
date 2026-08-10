import { getMongoDb, cleanMongoDocument } from '../../../utils/mongo'

export default defineEventHandler(async (event) => {
  const db = await getMongoDb()
  const body = await readBody(event)
  const collection = db.collection('properties')
  const last = await collection.find({}).sort({ id: -1 }).limit(1).next()
  const property = {
    ...body,
    id: body.id ? Number(body.id) : Number(last?.id || 0) + 1,
    updatedAt: new Date().toISOString(),
  }

  await collection.updateOne({ id: property.id }, { $set: property }, { upsert: true })
  return cleanMongoDocument(await collection.findOne({ id: property.id }))
})
