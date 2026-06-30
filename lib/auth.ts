import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const email = process.env.ADMIN_EMAIL
const username = process.env.ADMIN_USERNAME ?? email
const password = process.env.ADMIN_PASSWORD
const passwordHash = process.env.ADMIN_PASSWORD_HASH
const secret = process.env.ADMIN_AUTH_SECRET

function validateConfig() {
  if (!email || !secret) {
    throw new Error('Missing ADMIN_EMAIL or ADMIN_AUTH_SECRET environment variables')
  }
}

export const ADMIN_COOKIE_NAME = 'blog_admin_token'

export async function verifyAdminCredentials(identifier: string, rawPassword: string) {
  validateConfig()
  const isUser = email && identifier.trim().toLowerCase() === email.toLowerCase()
  const isUsername = username && identifier.trim().toLowerCase() === username.toLowerCase()
  if (!isUser && !isUsername) {
    return false
  }

  if (passwordHash) {
    return bcrypt.compare(rawPassword, passwordHash)
  }

  if (password) {
    return rawPassword === password
  }

  return false
}

export function createAdminToken() {
  validateConfig()
  if (!email || !secret) {
    throw new Error('Missing admin configuration')
  }
  return jwt.sign({ sub: email }, secret, { expiresIn: '8h' })
}

export function verifyAdminToken(token: string) {
  validateConfig()
  if (!secret) {
    throw new Error('Missing admin auth secret')
  }
  try {
    return jwt.verify(token, secret)
  } catch {
    return null
  }
}

export function getTokenFromRequest(request: Request) {
  const cookie = request.headers.get('cookie')
  if (!cookie) return null
  const match = cookie.split(';').find((segment) => segment.trim().startsWith(`${ADMIN_COOKIE_NAME}=`))
  if (!match) return null
  const index = match.indexOf('=')
  return index < 0 ? null : match.slice(index + 1).trim()
}

export function requireAdmin(request: Request) {
  const token = getTokenFromRequest(request)
  if (!token) {
    return null
  }

  return verifyAdminToken(token)
}
