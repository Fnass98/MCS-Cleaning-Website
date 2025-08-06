
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Log the contact form submission (replace with email service in production)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    })

    // In production, you would:
    // 1. Send an email to your business email
    // 2. Store in database
    // 3. Send confirmation email to customer
    // 4. Integrate with CRM system

    // For now, we'll just simulate success
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
