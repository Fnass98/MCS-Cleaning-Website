
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown, MapPin, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const servicesDropdown = [
    { name: 'All Services', href: '/services' },
    { name: 'Office Cleaning', href: '/services/office-cleaning' },
    { name: 'Medical Cleaning', href: '/services/medical-cleaning' },
    { name: 'End of Tenancy', href: '/services/end-of-tenancy' },
    { name: 'Deep Cleaning', href: '/services#deep-cleaning' },
    { name: 'Communal Cleaning', href: '/services#communal-cleaning' },
    { name: 'Estate Agents', href: '/estate-agents' },
    { name: 'Healthcare Cleaning', href: '/healthcare-cleaning' }
  ]

  const areasDropdown = [
    { name: 'All Areas', href: '/areas' },
    { name: 'Harrow', href: '/areas/harrow' },
    { name: 'Watford', href: '/areas/watford' },
    { name: 'Rickmansworth', href: '/areas/rickmansworth' },
    { name: 'Northwood', href: '/areas#northwood' },
    { name: 'Pinner', href: '/areas#pinner' },
    { name: 'Wembley', href: '/areas#wembley' }
  ]

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-12 h-12">
              <Image
                src="/images/mcs-logo.png"
                alt="MCS Cleaning & Facilities"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-brand-navy font-bold text-lg hidden sm:block">
              MCS Cleaning & Facilities
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-brand-gold transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-brand-gold-light"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('services')}
                className="flex items-center text-gray-700 hover:text-brand-gold transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-brand-gold-light"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-brand-gold-light hover:text-brand-gold transition-colors"
                    >
                      <Building2 className="w-4 h-4 mr-2 text-brand-gold" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Areas Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('areas')}
                className="flex items-center text-gray-700 hover:text-brand-gold transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-brand-gold-light"
              >
                Areas
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {areasDropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-brand-gold-light hover:text-brand-gold transition-colors"
                    >
                      <MapPin className="w-4 h-4 mr-2 text-brand-gold" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-gray-700 hover:text-brand-gold transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-brand-gold-light"
            >
              About
            </Link>

            <Link
              href="/blog"
              className="text-gray-700 hover:text-brand-gold transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-brand-gold-light"
            >
              Blog
            </Link>

            <Link
              href="/quote"
              className="bg-brand-gold text-white hover:bg-brand-gold-dark transition-colors duration-200 font-medium px-4 py-2 rounded-md"
            >
              Get Quote
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-brand-gold transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-brand-gold-light"
            >
              Contact
            </Link>
            
            {/* Contact Info */}
            <div className="flex items-center space-x-4 border-l border-gray-200 pl-4">
              <a href="tel:+447385813282" className="flex items-center text-brand-navy hover:text-brand-gold transition-colors duration-200 bg-brand-gold-light px-3 py-2 rounded-full">
                <Phone className="w-4 h-4 mr-1" />
                <span className="text-sm font-semibold">Call Now</span>
              </a>
            </div>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Link href="/quote" className="btn-accent text-sm px-4 py-2">
              Get Quote
            </Link>
            <a href="tel:+447385813282" className="flex items-center text-brand-navy hover:text-brand-gold">
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-0 pt-2 pb-4">
              <Link
                href="/"
                className="mobile-nav-item block text-gray-700 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services Section */}
              <div className="px-6 py-2">
                <div className="font-medium text-gray-800 py-2 border-b border-gray-100">Services</div>
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center py-2 text-gray-600 hover:text-brand-gold transition-colors pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <Building2 className="w-4 h-4 mr-2 text-brand-gold" />
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Areas Section */}
              <div className="px-6 py-2">
                <div className="font-medium text-gray-800 py-2 border-b border-gray-100">Areas</div>
                {areasDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center py-2 text-gray-600 hover:text-brand-gold transition-colors pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <MapPin className="w-4 h-4 mr-2 text-brand-gold" />
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/about"
                className="mobile-nav-item block text-gray-700 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                href="/blog"
                className="mobile-nav-item block text-gray-700 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="mobile-nav-item block text-gray-700 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="px-6 pt-4 border-t border-gray-200 mt-4 space-y-3">
                <a
                  href="tel:+447385813282"
                  className="flex items-center justify-center bg-brand-gold text-white py-3 px-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                <Link
                  href="/quote"
                  className="flex items-center justify-center bg-brand-navy text-white py-3 px-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
