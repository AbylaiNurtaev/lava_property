import { getMongoDb, cleanMongoDocuments } from '../../../../utils/mongo'

export default defineEventHandler(async () => {
  const db = await getMongoDb()
  const categories = await db.collection('news_categories').find({}).sort({ id: -1 }).toArray()
  return cleanMongoDocuments(categories)
})
