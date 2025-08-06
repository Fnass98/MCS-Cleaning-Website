
import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import HeroSection from '@/components/sections/hero-section'
import ServicesOverview from '@/components/sections/services-overview'
import WhyChooseUs from '@/components/sections/why-choose-us'
import GoogleReviews from '@/components/google-reviews'
import CTASection from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />
        <GoogleReviews />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
