import { NextResponse } from 'next/server'
import { verifyAdminCredentials, createAdminToken, ADMIN_COOKIE_NAME } from '../../../../lib/auth'

export async function POST(request: Request) {
  const body = await request.json()
  const identifier = String(body?.identifier || '').trim()
  const password = String(body?.password || '')

  if (!identifier || !password) {
    return NextResponse.json({ error: 'Identifier and password are required' }, { status: 400 })
  }

  const valid = await verifyAdminCredentials(identifier, password)
  if (!valid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const token = createAdminToken()
  const response = NextResponse.json({ success: true })
  response.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8,
  })

  return response
}
