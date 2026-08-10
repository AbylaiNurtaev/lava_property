import { getMongoDb, cleanMongoDocument } from '../../../utils/mongo'

export default defineEventHandler(async (event) => {
  const db = await getMongoDb()
  const id = Number(getRouterParam(event, 'id'))
  const body = await readBody(event)
  const collection = db.collection('properties')

  await collection.updateOne(
    { id },
    { $set: { ...body, id, updatedAt: new Date().toISOString() } },
    { upsert: true }
  )

  return cleanMongoDocument(await collection.findOne({ id }))
})
