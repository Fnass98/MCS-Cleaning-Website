
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Star } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 bg-white rounded p-1">
                <Image
                  src="/images/mcs-logo.png"
                  alt="MCS Cleaning & Facilities"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg">MCS Cleaning & Facilities</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional commercial cleaning services in North West London. 
              Fully insured, VAT registered, with 40+ 5-star reviews.
            </p>
            
            {/* Reviews Badge */}
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2 w-fit">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5]?.map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold">40+ Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/services" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Our Services
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                About Us
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Blog & Tips
              </Link>
              <Link href="/quote" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Get Quote
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Commercial Cleaning</p>
              <p className="text-gray-300">CQC Compliant Cleaning</p>
              <p className="text-gray-300">End of Tenancy Cleaning</p>
              <p className="text-gray-300">Post Construction Cleaning</p>
              <p className="text-gray-300">Deep Cleaning Services</p>
              <p className="text-gray-300">Airbnb Cleaning</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">North West London & Surrounding Areas</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="tel:+447385813282" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  +44 7385 813282
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:info@mcscleaningfacilities.co.uk" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Get in Touch
                </a>
              </div>
            </div>
            
            {/* Credentials */}
            <div className="pt-4 border-t border-white/20">
              <p className="text-xs text-gray-400">VAT Reg: 487 5861 29</p>
              <p className="text-xs text-gray-400">Fully Insured & CQC Compliant</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              © 2023-2025 MCS Cleaning & Facilities. All rights reserved. Established November 2023.
            </p>
            <p className="text-gray-500 text-xs">
              Professional commercial cleaning services across North West London and surrounding areas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
