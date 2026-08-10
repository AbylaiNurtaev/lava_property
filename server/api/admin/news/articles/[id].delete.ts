import { getMongoDb } from '../../../../utils/mongo'

export default defineEventHandler(async (event) => {
  const db = await getMongoDb()
  const id = Number(getRouterParam(event, 'id'))
  await db.collection('news_articles').deleteOne({ id })
  return { ok: true }
})
