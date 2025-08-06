
'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'A.M.',
      text: 'First time customer through recommendation and was wowed by the care and quality of work. Amazing customer service and brilliant finish. Highly recommend. Will now be using them for all my end of tenancy cleans in London and Watford.',
      service: 'End of Tenancy Cleaning',
      rating: 5
    },
    {
      name: 'S.J.',
      text: 'Fayaz and his team are excellent at their job. Very thorough, professional and give great attention to detail. They will do over and above what they are supposed to and will leave the premises looking spotless and like new. Highly recommended.',
      service: 'Office Cleaning',
      rating: 5
    },
    {
      name: 'S.G.',
      text: 'Fantastic service from initial enquiry, including great delivery, to post completion. Definitely recommending their service!',
      service: 'Commercial Cleaning',
      rating: 5
    },
    {
      name: 'S.R.',
      text: 'We have had a fantastic experience with My Cleaning Solutions since we launched our business. From excellent customer service to their unwavering flexibility, they have consistently ensured thorough service. Their dedication to quality and customer satisfaction has definitely set them apart.',
      service: 'Regular Commercial Cleaning',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5]?.map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-brand-navy">5.0 Stars</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-brand-navy">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our 40+ satisfied clients have to say about our professional cleaning services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials?.map((testimonial, index) => (
            <Card key={index} className="card-hover bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-2 bg-brand-navy/10 rounded-full flex-shrink-0">
                    <Quote className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[1, 2, 3, 4, 5]?.map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      "{testimonial?.text}"
                    </p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-gray-900">{testimonial?.name}</div>
                      <div className="text-sm text-brand-navy font-medium">{testimonial?.service}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-navy">40+</div>
              <div className="text-gray-600">Five-Star Reviews</div>
              <div className="flex items-center justify-center">
                {[1, 2, 3, 4, 5]?.map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-navy">100%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
              <div className="text-sm text-green-600 font-medium">Quality Guaranteed</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-navy">500+</div>
              <div className="text-gray-600">Jobs Completed</div>
              <div className="text-sm text-brand-navy font-medium">Since 2014</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
