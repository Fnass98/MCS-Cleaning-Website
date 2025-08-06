
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      email, 
      phone, 
      service, 
      propertyType, 
      size, 
      frequency, 
      message 
    } = body

    // Validate required fields
    if (!name || !email || !service) {
      return NextResponse.json(
        { error: 'Name, email, and service type are required' },
        { status: 400 }
      )
    }

    // Log the quote request (replace with email service in production)
    console.log('Quote request submission:', {
      name,
      email,
      phone,
      service,
      propertyType,
      size,
      frequency,
      message,
      timestamp: new Date().toISOString(),
    })

    // In production, you would:
    // 1. Send an email to your business email
    // 2. Store in database
    // 3. Send confirmation email to customer
    // 4. Calculate pricing based on parameters
    // 5. Integrate with scheduling system

    // For now, we'll just simulate success
    return NextResponse.json({
      success: true,
      message: 'Thank you for your quote request. We will contact you within 24 hours with a detailed quote!'
    })
  } catch (error) {
    console.error('Quote request error:', error)
    return NextResponse.json(
      { error: 'Failed to submit quote request' },
      { status: 500 }
    )
  }
}
