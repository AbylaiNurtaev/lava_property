import sharp from 'sharp'
import { uploadAdminBufferToS3 } from '../../utils/s3'

const allowedTypes = new Set([
  'image/avif',
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/webp',
])

export default defineEventHandler(async (event) => {
  const form = await readMultipartFormData(event)
  const filePart = form?.find((part) => part.name === 'file')
  const folderPart = form?.find((part) => part.name === 'folder')

  if (!filePart?.data?.length) {
    throw createError({ statusCode: 400, statusMessage: 'Файл не найден' })
  }

  const type = filePart.type || 'application/octet-stream'

  if (!allowedTypes.has(type)) {
    throw createError({ statusCode: 400, statusMessage: 'Можно загружать только изображения' })
  }

  if (filePart.data.length > 8 * 1024 * 1024) {
    throw createError({ statusCode: 400, statusMessage: 'Файл должен быть меньше 8 МБ' })
  }

  const folder = folderPart?.data?.toString('utf8') || 'admin'
  const originalSize = filePart.data.length
  const optimized = await sharp(filePart.data, { animated: false })
    .rotate()
    .resize({
      width: 2200,
      height: 2200,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({
      quality: 78,
      effort: 5,
      smartSubsample: true,
    })
    .toBuffer()

  const uploaded = await uploadAdminBufferToS3({
    body: optimized,
    contentType: 'image/webp',
    extension: 'webp',
    originalName: filePart.filename,
  }, folder)

  return {
    ...uploaded,
    originalSize,
    optimizedSize: optimized.length,
    savedPercent: Math.max(0, Math.round((1 - optimized.length / originalSize) * 100)),
  }
})
