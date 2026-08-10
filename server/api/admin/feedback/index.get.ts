import { ObjectId } from 'mongodb'
import { getMongoDb } from '../../../utils/mongo'

export default defineEventHandler(async () => {
  const db = await getMongoDb()
  const items = await db.collection('page_feedback').find({}).sort({ createdAt: -1 }).toArray()

  return items.map(({ _id, ...item }: any) => ({
    ...item,
    id: _id instanceof ObjectId ? _id.toHexString() : String(_id),
  }))
})
