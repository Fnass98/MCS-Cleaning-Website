
'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  name: string
  href: string
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', href: '/' }
  ]

  let currentPath = ''
  paths.forEach((path, index) => {
    currentPath += `/${path}`
    
    // Capitalize and format path names
    let name = path.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    
    // Special cases for better naming
    if (path === 'blog') name = 'Blog'
    if (path === 'services') name = 'Services'
    if (path === 'about') name = 'About Us'
    if (path === 'quote') name = 'Get Quote'
    if (path === 'contact') name = 'Contact'
    
    breadcrumbs.push({
      name,
      href: currentPath
    })
  })

  return breadcrumbs
}

export default function BreadcrumbSchema() {
  const pathname = usePathname()
  const breadcrumbs = generateBreadcrumbs(pathname)

  // Don't show breadcrumbs on home page
  if (pathname === '/') return null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': `https://mcscleaningfacilities.co.uk${crumb.href}`
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                {index === 0 ? (
                  <Link
                    href={crumb.href}
                    className="flex items-center text-gray-600 hover:text-brand-navy transition-colors"
                  >
                    <Home className="w-4 h-4 mr-1" />
                    {crumb.name}
                  </Link>
                ) : index === breadcrumbs.length - 1 ? (
                  <span className="text-brand-navy font-medium">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="text-gray-600 hover:text-brand-navy transition-colors"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
