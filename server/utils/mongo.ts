import { MongoClient } from 'mongodb'

let clientPromise: Promise<MongoClient> | null = null

export const getMongoDb = async () => {
  const config = useRuntimeConfig()
  const uri = config.mongodbUri

  if (!uri) {
    throw createError({
      statusCode: 500,
      statusMessage: 'MONGODB_URI is not configured',
    })
  }

  if (!clientPromise) {
    clientPromise = new MongoClient(uri, {
      serverSelectionTimeoutMS: 8000,
      connectTimeoutMS: 8000,
    }).connect()
  }

  const client = await clientPromise
  return client.db(config.mongodbDb)
}

export const cleanMongoDocument = <T extends Record<string, any>>(doc: T) => {
  if (!doc) return doc
  const { _id, ...rest } = doc
  return rest
}

export const cleanMongoDocuments = <T extends Record<string, any>>(docs: T[]) =>
  docs.map(cleanMongoDocument)
