import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

let client: S3Client | null = null

const safeFileName = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    || 'file'

type S3UploadInput = {
  body: Buffer
  contentType: string
  extension: string
  originalName?: string
}

export const uploadAdminBufferToS3 = async (input: S3UploadInput, folder = 'admin') => {
  const config = useRuntimeConfig()

  if (!config.awsBucketName || !config.awsAccessKey || !config.awsSecretKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'AWS S3 is not configured',
    })
  }

  if (!client) {
    client = new S3Client({
      region: config.awsRegion,
      credentials: {
        accessKeyId: config.awsAccessKey,
        secretAccessKey: config.awsSecretKey,
      },
    })
  }

  const extension = input.extension.replace(/^\./, '') || safeFileName(input.originalName || 'file').split('.').pop()
  const key = [
    'lava-property',
    folder.replace(/[^a-z0-9/_-]+/gi, '-').replace(/^\/+|\/+$/g, ''),
    `${Date.now()}-${crypto.randomUUID()}${extension ? `.${extension}` : ''}`,
  ].filter(Boolean).join('/')

  await client.send(new PutObjectCommand({
    Bucket: config.awsBucketName,
    Key: key,
    Body: input.body,
    ContentType: input.contentType,
  }))

  return {
    key,
    url: `https://${config.awsBucketName}.s3.${config.awsRegion}.amazonaws.com/${key}`,
  }
}

export const uploadAdminFileToS3 = async (file: File, folder = 'admin') =>
  uploadAdminBufferToS3({
    body: Buffer.from(await file.arrayBuffer()),
    contentType: file.type || 'application/octet-stream',
    extension: safeFileName(file.name).split('.').pop() || 'bin',
    originalName: file.name,
  }, folder)
