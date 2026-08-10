import { ObjectId } from 'mongodb'
import { getMongoDb } from '../../../utils/mongo'

export default defineEventHandler(async (event) => {
  const db = await getMongoDb()
  const id = String(getRouterParam(event, 'id') || '')

  if (!ObjectId.isValid(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Некорректный id оценки',
    })
  }

  await db.collection('page_feedback').deleteOne({ _id: new ObjectId(id) })
  return { ok: true }
})
