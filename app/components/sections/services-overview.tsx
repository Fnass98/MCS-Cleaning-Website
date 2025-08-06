
'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Building2, 
  Stethoscope, 
  Home, 
  Sparkles, 
  Bed, 
  Users,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const ServicesOverview = () => {
  const services = [
    {
      icon: Building2,
      title: 'Office Cleaning',
      description: 'Professional office cleaning services to maintain a productive and healthy work environment.',
      features: ['Daily/weekly schedules', 'After-hours service', 'Eco-friendly products']
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Facilities',
      description: 'Specialized cleaning for GP surgeries, dental practices, and healthcare facilities with CQC compliance.',
      features: ['CQC compliant', 'Medical-grade cleaning', 'Infection control']
    },
    {
      icon: Home,
      title: 'End of Tenancy',
      description: 'Deep cleaning for property handovers, ensuring perfect condition for new tenants.',
      features: ['Deposit back guarantee', 'Full property clean', 'Inventory checklist']
    },
    {
      icon: Sparkles,
      title: 'Carpet Cleaning',
      description: 'Professional carpet and upholstery cleaning using advanced equipment and techniques.',
      features: ['Steam cleaning', 'Stain removal', 'Fast drying']
    },
    {
      icon: Bed,
      title: 'Serviced Accommodation',
      description: 'Thorough cleaning for Airbnb and serviced apartments, ensuring guest satisfaction.',
      features: ['Turnover cleaning', 'Linen service', 'Same-day service']
    },
    {
      icon: Users,
      title: 'Communal Areas',
      description: 'Maintenance of shared spaces, lobbies, and common areas for property management.',
      features: ['Regular schedules', 'High-traffic areas', 'Professional standards']
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Professional <span className="text-brand-navy">Cleaning Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive commercial and residential cleaning solutions tailored to your specific needs across North West London.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services?.map((service, index) => {
            const IconComponent = service?.icon
            return (
              <Card key={index} className="card-hover bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-brand-navy/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-brand-navy" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service?.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service?.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service?.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-brand-navy rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Specialist Services</h3>
            <p className="text-gray-600">We also provide specialized cleaning solutions for unique requirements</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              'Window Cleaning',
              'Jet Washing',
              'Deep Cleaning',
              'Post-Construction'
            ]?.map((service, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-50 hover:bg-brand-navy/5 transition-colors duration-200">
                <span className="font-medium text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Services for Professionals */}
        <div className="bg-gradient-to-br from-brand-navy to-brand-navy/90 rounded-2xl shadow-lg p-8 mb-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Specialized Services for Professionals</h3>
            <p className="text-gray-200">Tailored cleaning solutions for industry professionals</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/estate-agents" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-4">
                  <Building2 className="w-8 h-8 text-brand-gold mr-3" />
                  <h4 className="text-xl font-semibold">For Estate Agents</h4>
                </div>
                <p className="text-gray-200 mb-4">Fast turnaround end of tenancy cleaning with deposit-back guarantee. Volume discounts available.</p>
                <div className="flex items-center text-brand-gold group-hover:text-brand-gold-light transition-colors">
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link href="/healthcare-cleaning" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-4">
                  <Stethoscope className="w-8 h-8 text-brand-gold mr-3" />
                  <h4 className="text-xl font-semibold">Healthcare Cleaning</h4>
                </div>
                <p className="text-gray-200 mb-4">CQC compliant healthcare cleaning trained by certified CQC inspector. Emergency response available.</p>
                <div className="flex items-center text-brand-gold group-hover:text-brand-gold-light transition-colors">
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button className="btn-primary flex items-center space-x-2 text-lg px-8 py-4 mx-auto">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
