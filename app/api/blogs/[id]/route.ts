import { NextResponse } from 'next/server'
import { requireAdmin } from '../../../../lib/auth'
import { deleteBlog, getBlogById, updateBlog } from '../../../../lib/blog'

export async function GET(request: Request, context: any) {
  const { params } = context
  const blog = await getBlogById(params.id)
  if (!blog) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json(blog)
}

export async function PUT(request: Request, context: any) {
  const { params } = context
  const admin = requireAdmin(request)
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const updateData = {
    title: body?.title,
    category: body?.category,
    shortDescription: body?.shortDescription,
    content: body?.content,
    imageUrl: body?.imageUrl,
    published: body?.published,
  }

  const blog = await updateBlog(params.id, updateData)
  if (!blog) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json(blog)
}

export async function DELETE(request: Request, context: any) {
  const { params } = context
  const admin = requireAdmin(request)
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const deleted = await deleteBlog(params.id)
  if (!deleted) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json({ success: true })
}
