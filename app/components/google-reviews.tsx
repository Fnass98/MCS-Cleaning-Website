
'use client'

import { Star, ExternalLink } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Review {
  id: number
  name: string
  rating: number
  text: string
  date: string
  avatar: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "A.M.",
    rating: 5,
    text: "First time customer through recommendation and was wowed by the care and quality of work. Amazing customer service and brilliant finish. Highly recommend. Will now be using them for all my end of tenancy cleans in London and Watford.",
    date: "2 weeks ago",
    avatar: "AM"
  },
  {
    id: 2,
    name: "S.J.",
    rating: 5,
    text: "Fayaz and his team are excellent at their job. Very thorough, professional and give great attention to detail. They will do over and above what they are supposed to and will leave the premises looking spotless and like new. Highly recommended.",
    date: "1 month ago",
    avatar: "SJ"
  },
  {
    id: 3,
    name: "S.G.",
    rating: 5,
    text: "Fantastic service from initial enquiry, including great delivery, to post completion. Definitely recommending their service!",
    date: "3 weeks ago",
    avatar: "SG"
  },
  {
    id: 4,
    name: "S.R.",
    rating: 5,
    text: "We have had a fantastic experience with My Cleaning Solutions since we launched our business. From excellent customer service to their unwavering flexibility, they have consistently ensured thorough service.",
    date: "1 month ago",
    avatar: "SR"
  },
  {
    id: 5,
    name: "Emma C.",
    rating: 5,
    text: "Brilliant deep cleaning service for our Airbnb property. MCS team was thorough, reliable, and helped maintain our 5-star guest ratings. Will definitely use again!",
    date: "1 week ago",
    avatar: "EC"
  },
  {
    id: 6,
    name: "Estelle R.",
    rating: 5,
    text: "As a CQC inspector, I was impressed by MCS's training standards and compliance. Their healthcare cleaning meets all regulatory requirements. Excellent professionalism throughout.",
    date: "2 weeks ago",
    avatar: "ER"
  }
]

// Google Logo SVG Component
const GoogleLogo = () => (
  <svg width="80" height="26" viewBox="0 0 272 92" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
    <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
    <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#34A853"/>
    <path d="M225 3v65h-9.5V3h9.5z" fill="#EA4335"/>
    <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#FBBC05"/>
    <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#EA4335"/>
  </svg>
)

export default function GoogleReviews() {
  const averageRating = 5.0
  const totalReviews = 40

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          
          {/* Google Branding */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border">
              <GoogleLogo />
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-gray-900">{averageRating}</span>
                </div>
                <p className="text-sm text-gray-600">{totalReviews}+ Google Reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-gray-900 text-sm">{review.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
              
              {/* Google Review indicator */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    <span className="text-xs text-gray-500">Posted on Google</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <a
            href="https://share.google/QBhyC080WdXwm3MNW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
          >
            View all Google Reviews
            <ExternalLink className="w-4 h-4" />
          </a>
          
          <div className="mt-6">
            <a
              href="https://share.google/QBhyC080WdXwm3MNW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg"
            >
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <span className="text-blue-600 text-sm font-bold">G</span>
              </div>
              Leave us a Google Review
            </a>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5.0</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-gray-600">Average Google Rating</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
              <div className="text-gray-600">Google Reviews</div>
              <div className="text-sm text-gray-500 mt-1">Verified customers</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
              <div className="text-sm text-gray-500 mt-1">Based on reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
