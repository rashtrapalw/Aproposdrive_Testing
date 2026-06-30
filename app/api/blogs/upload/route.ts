import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

export async function POST(request: Request) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  if (!cloudName || !apiKey || !apiSecret) {
    return NextResponse.json(
      { error: 'Cloudinary is not configured. Contact your administrator.' },
      { status: 500 },
    )
  }

  cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret })

  const body = await request.formData()
  const file = body.get('file') as File | null

  if (!file) {
    return NextResponse.json({ error: 'Missing image file' }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const dataUri = `data:${file.type};base64,${buffer.toString('base64')}`

  try {
    const result = await cloudinary.uploader.upload(dataUri, {
      folder: 'aproposdrive/blogs',
      resource_type: 'image',
      transformation: [{ quality: 'auto', fetch_format: 'auto' }],
    })

    return NextResponse.json({ imageUrl: result.secure_url })
  } catch (error) {
    return NextResponse.json({ error: 'Image upload failed' }, { status: 500 })
  }
}
