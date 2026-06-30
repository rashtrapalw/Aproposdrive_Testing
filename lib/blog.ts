import { ObjectId } from 'mongodb'
import { getCollection } from './mongodb'

export type BlogItem = {
  _id: string
  title: string
  slug: string
  category: string
  shortDescription: string
  content: string
  imageUrl: string
  published: boolean
  createdAt: string
  updatedAt: string
}

const COLLECTION_NAME = 'blogs'

function generateSlug(rawTitle: string) {
  return rawTitle
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

async function ensureUniqueSlug(baseSlug: string, excludeId?: string) {
  const collection = await getCollection(COLLECTION_NAME)
  let slug = baseSlug
  let suffix = 1

  while (true) {
    const existing = await collection.findOne({
      slug,
      ...(excludeId ? { _id: { $ne: new ObjectId(excludeId) } } : {}),
    })

    if (!existing) {
      return slug
    }

    slug = `${baseSlug}-${suffix}`
    suffix += 1
  }
}

function normalizeBlogDocument(doc: any): BlogItem {
  return {
    _id: doc._id.toString(),
    title: doc.title,
    slug: doc.slug,
    category: doc.category,
    shortDescription: doc.shortDescription,
    content: doc.content,
    imageUrl: doc.imageUrl,
    published: doc.published,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  }
}

export async function getPublishedBlogs() {
  const collection = await getCollection(COLLECTION_NAME)
  const rows = await collection.find({ published: true }).sort({ createdAt: -1 }).toArray()
  return rows.map(normalizeBlogDocument)
}

export async function getAllBlogs() {
  const collection = await getCollection(COLLECTION_NAME)
  const rows = await collection.find().sort({ createdAt: -1 }).toArray()
  return rows.map(normalizeBlogDocument)
}

export async function getBlogBySlug(slug: string) {
  const collection = await getCollection(COLLECTION_NAME)
  const doc = await collection.findOne({ slug })
  return doc ? normalizeBlogDocument(doc) : null
}

export async function getBlogById(id: string) {
  const collection = await getCollection(COLLECTION_NAME)
  const doc = await collection.findOne({ _id: new ObjectId(id) })
  return doc ? normalizeBlogDocument(doc) : null
}

export async function createBlog(data: {
  title: string
  category: string
  shortDescription: string
  content: string
  imageUrl: string
  published: boolean
}) {
  const collection = await getCollection(COLLECTION_NAME)
  const slugBase = generateSlug(data.title || 'untitled-blog')
  const slug = await ensureUniqueSlug(slugBase)
  const now = new Date()

  const result = await collection.insertOne({
    title: data.title,
    category: data.category,
    shortDescription: data.shortDescription,
    content: data.content,
    imageUrl: data.imageUrl,
    published: data.published,
    slug,
    createdAt: now,
    updatedAt: now,
  })

  return getBlogById(result.insertedId.toString())
}

export async function updateBlog(id: string, data: Partial<Omit<BlogItem, '_id' | 'slug' | 'createdAt' | 'updatedAt'>>) {
  const collection = await getCollection(COLLECTION_NAME)
  const existing = await getBlogById(id)
  if (!existing) {
    return null
  }

  const slugBase = generateSlug(data.title ?? existing.title)
  const slug = await ensureUniqueSlug(slugBase, id)
  const updated = {
    title: data.title ?? existing.title,
    category: data.category ?? existing.category,
    shortDescription: data.shortDescription ?? existing.shortDescription,
    content: data.content ?? existing.content,
    imageUrl: data.imageUrl ?? existing.imageUrl,
    published: data.published ?? existing.published,
    slug,
    updatedAt: new Date(),
  }

  await collection.updateOne({ _id: new ObjectId(id) }, { $set: updated })
  return getBlogById(id)
}

export async function deleteBlog(id: string) {
  const collection = await getCollection(COLLECTION_NAME)
  const result = await collection.deleteOne({ _id: new ObjectId(id) })
  return result.deletedCount === 1
}
