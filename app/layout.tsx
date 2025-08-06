
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import WhatsAppButton from '@/components/whatsapp-button'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Commercial Cleaning | My Cleaning Solutions',
  description: 'Professional commercial cleaning services in North West London. CQC compliant, fully insured. Office, medical, end of tenancy cleaning. 5-star rated.',
  keywords: 'commercial cleaning London, office cleaning, medical cleaning CQC compliant, end of tenancy cleaning, professional cleaners North West London',
  authors: [{ name: 'My Cleaning Solutions' }],
  creator: 'My Cleaning Solutions',
  publisher: 'My Cleaning Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.mycleaningsolutions.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Professional Commercial Cleaning | My Cleaning Solutions',
    description: 'Professional commercial cleaning services in North West London. CQC compliant, fully insured. 5-star rated.',
    url: 'https://www.mycleaningsolutions.co.uk',
    siteName: 'My Cleaning Solutions',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Cleaning Solutions - Professional Commercial Cleaning'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Commercial Cleaning | My Cleaning Solutions',
    description: 'Professional commercial cleaning services in North West London. CQC compliant, fully insured. 5-star rated.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '48x48' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.mycleaningsolutions.co.uk/#business',
      'name': 'My Cleaning Solutions',
      'image': '/logo.png',
      'telephone': '+44 7385 813282',
      'email': 'info@mycleaningsolutions.co.uk',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Harrow',
        'addressRegion': 'Greater London',
        'addressCountry': 'GB'
      },
      'areaServed': [
        'Harrow',
        'Watford', 
        'Rickmansworth',
        'Northwood',
        'Kenton',
        'Pinner',
        'Hatch End',
        'Wembley',
        'Stanmore',
        'Edgware',
        'North West London'
      ],
      'foundingDate': '2023-11',
      'url': 'https://www.mycleaningsolutions.co.uk',
      'logo': '/logo.png',
      'openingHours': [
        'Mo-Sa 08:00-20:00',
        'Su 08:00-18:00'
      ],
      'priceRange': '££',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '5',
        'reviewCount': '40'
      },
      'hasCredential': [
        'Full Public Liability Insurance',
        'CQC Compliant'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.mycleaningsolutions.co.uk/#website',
      'url': 'https://www.mycleaningsolutions.co.uk',
      'name': 'My Cleaning Solutions',
      'description': 'Professional commercial cleaning services in North West London',
      'publisher': {
        '@id': 'https://www.mycleaningsolutions.co.uk/#business'
      }
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* SEO Meta Tags */}
        <meta name="geo.region" content="GB-LON" />
        <meta name="geo.placename" content="Harrow, London" />
        <meta name="geo.position" content="51.5722;-0.3370" />
        <meta name="ICBM" content="51.5722, -0.3370" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.mycleaningsolutions.co.uk" />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton />
          <Toaster />
          
          {/* Social Sharing Buttons */}
          <div id="social-sharing" className="fixed bottom-4 left-4 z-50">
            <div className="flex flex-col gap-2 opacity-75 hover:opacity-100 transition-opacity">
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.mycleaningsolutions.co.uk')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                title="Share on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.mycleaningsolutions.co.uk')}&text=${encodeURIComponent('Check out My Cleaning Solutions - Professional commercial cleaning in North West London')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                title="Share on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.mycleaningsolutions.co.uk')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                title="Share on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
