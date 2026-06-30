import { NextResponse } from 'next/server'
import { requireAdmin } from '../../../lib/auth'
import { createBlog, getAllBlogs, getPublishedBlogs } from '../../../lib/blog'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const publishedOnly = url.searchParams.get('published') === 'true'

  if (publishedOnly) {
    return NextResponse.json(await getPublishedBlogs())
  }

  const admin = requireAdmin(request)
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json(await getAllBlogs())
}

export async function POST(request: Request) {
  const admin = requireAdmin(request)
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const title = String(body?.title || '').trim()
  const category = String(body?.category || '').trim()
  const shortDescription = String(body?.shortDescription || '').trim()
  const content = String(body?.content || '').trim()
  const imageUrl = String(body?.imageUrl || '').trim()
  const published = Boolean(body?.published)

  if (!title || !category || !shortDescription || !content || !imageUrl) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
  }

  const blog = await createBlog({ title, category, shortDescription, content, imageUrl, published })
  return NextResponse.json(blog)
}
