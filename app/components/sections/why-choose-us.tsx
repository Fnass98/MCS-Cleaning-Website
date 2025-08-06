
'use client'

import React, { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Shield, 
  Award, 
  Leaf, 
  Clock, 
  Users, 
  CheckCircle,
  Star,
  Phone
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Shield,
      title: 'Fully Insured & Bonded',
      description: 'Complete protection with comprehensive insurance coverage and bonded staff for your peace of mind.',
      highlight: '£2M Public Liability'
    },
    {
      icon: Award,
      title: 'VAT Registered Business',
      description: 'Professional business credentials with VAT registration number 487 5861 29.',
      highlight: 'VAT Reg: 487 5861 29'
    },
    {
      icon: Star,
      title: '40+ Five-Star Reviews',
      description: 'Consistently rated 5 stars by our satisfied commercial and residential clients.',
      highlight: '100% Customer Satisfaction'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Practices',
      description: 'Committed to sustainability with environmentally responsible cleaning products and methods.',
      highlight: 'Green Cleaning Solutions'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Available when you need us with flexible timing options including out-of-hours service.',
      highlight: '24/7 Availability'
    },
    {
      icon: Users,
      title: 'Trained Professionals',
      description: 'Experienced and thoroughly trained cleaning specialists with ongoing professional development.',
      highlight: 'CQC Compliant Team'
    }
  ]

  const stats = [
    { value: '500+', label: 'Happy Clients', icon: Users },
    { value: '10+', label: 'Years Experience', icon: Award },
    { value: '40+', label: '5-Star Reviews', icon: Star },
    { value: '24/7', label: 'Support Available', icon: Clock }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-brand-navy">MCS Cleaning & Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a cleaning company. We're your trusted partner in maintaining professional, 
            clean, and healthy environments across North West London.
          </p>
        </div>

        {/* Stats Section */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat, index) => {
            const IconComponent = stat?.icon
            return (
              <div
                key={index}
                className={`text-center p-6 bg-gray-50 rounded-xl transition-all duration-700 delay-${index * 100} ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-navy rounded-lg mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-brand-navy mb-2 animate-count-up">
                  {stat?.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat?.label}</div>
              </div>
            )
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features?.map((feature, index) => {
            const IconComponent = feature?.icon
            return (
              <Card key={index} className="card-hover bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-brand-navy rounded-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature?.title}</h3>
                      <div className="text-sm font-medium text-brand-navy mb-3">{feature?.highlight}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature?.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Simple 4-Step Process</h3>
            <p className="text-gray-600">From initial contact to exceptional service delivery</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Browse Services', desc: 'Choose the service that fits your needs' },
              { step: '2', title: 'Get Quote', desc: 'Complete our simple form for a tailored quote' },
              { step: '3', title: 'Site Visit', desc: 'Expert assessment for accurate pricing' },
              { step: '4', title: 'Service Delivery', desc: 'Professional cleaning that exceeds expectations' }
            ]?.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item?.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item?.title}</h4>
                <p className="text-sm text-gray-600">{item?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
