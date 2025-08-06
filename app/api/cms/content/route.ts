
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const CONTENT_FILE = path.join(process.cwd(), 'data', 'content.json')

// Default content structure
const defaultContent = {
  siteInfo: {
    siteName: "My Cleaning Solutions",
    domain: "https://www.mycleaningsolutions.co.uk",
    phone: "+44 7385 813282",
    email: "info@mycleaningsolutions.co.uk",
    address: {
      locality: "Harrow",
      region: "Greater London",
      country: "GB"
    }
  },
  homepage: {
    title: "Professional Commercial Cleaning | My Cleaning Solutions",
    metaDescription: "Professional commercial cleaning services in North West London. CQC compliant, fully insured. Office, medical, end of tenancy cleaning. 5-star rated.",
    heroSection: {
      heading: "Elevating Standards in Commercial Cleaning",
      subheading: "Professional, CQC compliant cleaning services across North West London",
      ctaText: "Get Free Quote"
    }
  },
  services: {
    office: {
      title: "Office Cleaning Services",
      description: "Professional office cleaning tailored to your business needs",
      features: [
        "Daily, weekly, or monthly schedules",
        "Eco-friendly cleaning products",
        "Fully insured and vetted staff"
      ]
    },
    medical: {
      title: "Medical & Healthcare Cleaning",
      description: "CQC compliant medical facility cleaning services",
      features: [
        "CQC compliant procedures",
        "Specialized medical-grade disinfection",
        "Trained healthcare cleaning staff"
      ]
    },
    endOfTenancy: {
      title: "End of Tenancy Cleaning",
      description: "Comprehensive move-out cleaning services",
      features: [
        "Deposit back guarantee",
        "Deep cleaning all areas",
        "Professional grade equipment"
      ]
    }
  }
}

// Ensure content file exists
function ensureContentFile() {
  const dataDir = path.join(process.cwd(), 'data')
  
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  
  if (!fs.existsSync(CONTENT_FILE)) {
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(defaultContent, null, 2))
  }
}

export async function GET() {
  try {
    ensureContentFile()
    const content = fs.readFileSync(CONTENT_FILE, 'utf8')
    return NextResponse.json(JSON.parse(content))
  } catch (error) {
    console.error('Error reading content:', error)
    return NextResponse.json(defaultContent)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    ensureContentFile()
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(body, null, 2))
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving content:', error)
    return NextResponse.json(
      { error: 'Failed to save content' },
      { status: 500 }
    )
  }
}
