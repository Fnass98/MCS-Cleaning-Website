
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

// Default password hash for "admin2024"
// In production, store this in environment variables
const DEFAULT_PASSWORD_HASH = '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewAuH4OvmPNzFcou'

// You can change this password by generating a new hash:
// const bcrypt = require('bcryptjs')
// const hash = await bcrypt.hash('your_new_password', 12)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password } = body

    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      )
    }

    // Check password against hash
    const isValid = await bcrypt.compare(password, DEFAULT_PASSWORD_HASH)

    if (isValid) {
      // In a more secure setup, you'd generate a JWT token here
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    )
  }
}
