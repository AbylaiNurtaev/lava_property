import { getMongoDb } from '../../../utils/mongo'

export default defineEventHandler(async (event) => {
  const db = await getMongoDb()
  const id = Number(getRouterParam(event, 'id'))
  await db.collection('properties').deleteOne({ id })
  return { ok: true }
})
