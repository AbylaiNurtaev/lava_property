import { getMongoDb, cleanMongoDocuments } from '../../../../utils/mongo'

export default defineEventHandler(async () => {
  const db = await getMongoDb()
  const articles = await db.collection('news_articles').find({}).sort({ id: -1 }).toArray()
  return cleanMongoDocuments(articles)
})
