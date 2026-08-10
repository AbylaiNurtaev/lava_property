import { getMongoDb, cleanMongoDocuments } from '../../../utils/mongo'

export default defineEventHandler(async () => {
  const db = await getMongoDb()
  const properties = await db.collection('properties').find({}).sort({ id: -1 }).toArray()
  return cleanMongoDocuments(properties)
})
