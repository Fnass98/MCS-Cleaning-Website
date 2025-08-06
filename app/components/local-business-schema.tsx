
import React from 'react'

interface LocalBusinessSchemaProps {
  area?: string
  service?: string
}

export default function LocalBusinessSchema({ area, service }: LocalBusinessSchemaProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": area ? `MCS Cleaning & Facilities - ${area}` : "MCS Cleaning & Facilities",
    "image": "https://imgs.search.brave.com/-8vE15PjCgjM6jGXID_GGc1v0co8KOwiBe-vZdZTqUI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bWNzY2xlYW4uY28u/dWsvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDEvRmFjZWJv/b2tfUHJvZmlsZV9Q/aWMtY29weS00MjV4/MzM0LnBuZw",
    "description": service 
      ? `Professional ${service} services in ${area || 'North West London'} by MCS Cleaning & Facilities. Fully insured, CQC compliant cleaning services.`
      : `Professional commercial cleaning services in ${area || 'North West London'} by MCS Cleaning & Facilities. Office cleaning, medical cleaning, end of tenancy cleaning.`,
    "url": area 
      ? `https://mcscleaning.co.uk/areas/${area.toLowerCase().replace(/\s+/g, '-')}`
      : "https://mcscleaning.co.uk",
    "telephone": "+44 7385 813282",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "North West London",
      "addressLocality": area || "London",
      "addressRegion": "Greater London",
      "postalCode": "NW1",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5794,
      "longitude": -0.3359
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 51.5794,
        "longitude": -0.3359
      },
      "geoRadius": "25000"
    },
    "priceRange": "££",
    "paymentAccepted": "Cash, Bank Transfer, Credit Card",
    "currenciesAccepted": "GBP",
    "foundingDate": "2023-11",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "40"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Office Cleaning",
            "description": "Professional office cleaning services for businesses"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Medical Facility Cleaning",
            "description": "CQC compliant medical and healthcare facility cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "End of Tenancy Cleaning",
            "description": "Comprehensive end of tenancy cleaning services"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  )
}
