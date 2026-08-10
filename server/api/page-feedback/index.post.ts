import { getRequestURL } from 'h3'
import { getMongoDb, cleanMongoDocument } from '../../utils/mongo'

export default defineEventHandler(async (event) => {
  const db = await getMongoDb()
  const body = await readBody(event)
  const rating = Number(body.rating)

  if (!body.page || !body.pageTitle || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Некорректная оценка страницы',
    })
  }

  const feedback = {
    page: String(body.page),
    pageTitle: String(body.pageTitle),
    rating,
    comment: String(body.comment || '').trim(),
    createdAt: new Date().toISOString(),
    userAgent: getHeader(event, 'user-agent') || '',
    origin: getRequestURL(event).origin,
  }

  const result = await db.collection('page_feedback').insertOne(feedback)
  return cleanMongoDocument(await db.collection('page_feedback').findOne({ _id: result.insertedId }))
})
