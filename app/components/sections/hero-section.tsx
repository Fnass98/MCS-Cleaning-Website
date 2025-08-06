
'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle, Star, Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-navy-light via-white to-brand-gold-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-brand-gold-light to-transparent"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mobile-section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Reviews Badge */}
            <div className="flex items-center justify-center sm:justify-start space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 w-fit shadow-lg border border-brand-gold/20 mobile-text-center">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5]?.map((star) => (
                  <Star key={star} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <span className="text-sm font-semibold text-brand-navy">40+ 5-Star Reviews</span>
            </div>

            <div className="space-y-6 mobile-text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mobile-hero-title">
                Elevating Standards in{' '}
                <span className="text-brand-navy">Commercial</span>
                <span className="text-brand-gold"> Cleaning</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mobile-hero-subtitle mx-auto sm:mx-0">
                Professional cleaning services across North West London and surrounding areas. 
                <span className="text-brand-gold font-semibold"> Fully insured, VAT registered,</span> and trusted by 40+ satisfied clients.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                'Fully Insured & Bonded',
                'VAT Registered Business',
                'CQC Compliant Cleaning',
                'Eco-Friendly Products'
              ]?.map((feature, index) => (
                <div key={index} className="flex items-center justify-center sm:justify-start space-x-3 p-3 bg-white/50 rounded-lg backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/quote" className="flex-1 sm:flex-none">
                <Button className="btn-accent flex items-center justify-center space-x-2 text-lg px-8 py-4 w-full sm:w-auto shadow-lg">
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              
              <a href="tel:+44" className="flex-1 sm:flex-none">
                <Button variant="outline" className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4 w-full sm:w-auto border-2 border-brand-navy hover:bg-brand-navy">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 sm:pt-8">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-sm border border-brand-gold/10">
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-brand-navy">10+</div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">Years<br className="sm:hidden" /> Experience</div>
                </div>
                <div className="space-y-1 border-x border-gray-200">
                  <div className="text-xl sm:text-2xl font-bold text-brand-gold">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">Happy<br className="sm:hidden" /> Clients</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-brand-navy">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className={`relative mt-8 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transform rotate-1 lg:rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-brand-gold-light rounded-lg">
                  <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-brand-gold flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Quality Guaranteed</div>
                    <div className="text-xs sm:text-sm text-gray-600">100% satisfaction promise</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-brand-navy-light rounded-lg">
                  <Star className="w-6 sm:w-8 h-6 sm:h-8 text-brand-gold fill-current flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-brand-navy text-sm sm:text-base">Premium Service</div>
                    <div className="text-xs sm:text-sm text-gray-600">Trusted by 40+ businesses</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <Phone className="w-6 sm:w-8 h-6 sm:h-8 text-brand-navy flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">24/7 Support</div>
                    <div className="text-xs sm:text-sm text-gray-600">Always here when you need us</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements - hidden on mobile for cleaner look */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-brand-gold rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-8 sm:w-10 h-8 sm:h-10 text-white fill-current" />
            </div>
            
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-14 sm:w-16 h-14 sm:h-16 bg-brand-navy rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
