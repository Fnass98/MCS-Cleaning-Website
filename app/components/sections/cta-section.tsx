
'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Professional Cleaning?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join 40+ satisfied clients who trust MCS Cleaning & Facilities for their cleaning needs. 
            Get your free, no-obligation quote today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Why Act Now?</h3>
            
            <div className="space-y-4">
              {[
                'Free, no-obligation quotes with detailed breakdown',
                'Same-day response to all enquiries',
                'Flexible scheduling to suit your requirements',
                'Fully insured with comprehensive coverage',
                'Satisfaction guarantee on all services'
              ]?.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Service Areas */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8">
              <h4 className="font-semibold mb-3">Service Areas</h4>
              <p className="text-blue-100 text-sm">
                North West London and all surrounding areas including Watford, Harrow, Brent, Camden, and beyond.
              </p>
            </div>
          </div>

          {/* Right Side - CTA Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
              <p className="text-gray-600">Choose your preferred contact method</p>
            </div>

            <div className="space-y-4">
              <Link href="/quote" className="block">
                <Button className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white py-4 text-lg flex items-center justify-center space-x-2">
                  <ArrowRight className="w-5 h-5" />
                  <span>Complete Online Quote Form</span>
                </Button>
              </Link>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="tel:+44" className="block">
                  <Button variant="outline" className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white py-3 flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </Button>
                </a>

                <Link href="/contact" className="block">
                  <Button variant="outline" className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white py-3 flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Contact Form</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              <div className="grid grid-cols-2 gap-4 text-center text-sm">
                <div>
                  <div className="font-semibold text-brand-navy">Fully Insured</div>
                  <div className="text-gray-600">£2M Coverage</div>
                </div>
                <div>
                  <div className="font-semibold text-brand-navy">VAT Registered</div>
                  <div className="text-gray-600">487 5861 29</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
