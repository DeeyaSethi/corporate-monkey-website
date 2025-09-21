'use client';

import Navigation from '../components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../components/Logo'

export default function About() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/main_image.jpg"
            alt="About Corporate Monkey"
            style={{display: 'block'}}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Corporate Monkey
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-300">
            Your trusted Indian partner for premium corporate gifting solutions at the most competitive prices.
          </p>
        </div>
      </div>

      {/* Content sections */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Our Story */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Corporate Monkey was founded in New Delhi with a simple yet powerful vision: to revolutionize the corporate gifting industry in India by offering premium quality products at the most affordable prices. Our journey began with understanding the challenges Indian businesses face in finding unique, high-quality gifts that truly represent their brand values without exceeding their budget.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            By partnering directly with local Indian manufacturers and artisans, we've eliminated middlemen to deliver exceptional value. Today, we pride ourselves on curating the finest selection of traditional and modern Indian gift collections at prices that are unmatched in the industry.
          </p>
        </div>

        {/* Companies We've Worked With */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
            Companies We've Worked With
          </h2>
          
          {/* Animated Company Logos Band */}
          <div className="w-full overflow-hidden bg-white py-8">
            <div className="relative flex animate-scroll">
              <div className="flex space-x-16">
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-700">GreenLam</span>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-primary-600">Google</span>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-600">Incedo</span>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-red-600">KFC</span>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-orange-600">NDRF</span>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-green-600">TCS</span>
                </div>
              </div>
              <div className="flex space-x-16">
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-700">GreenLam</span>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-primary-600">Google</span>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-600">Incedo</span>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-red-600">KFC</span>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-orange-600">NDRF</span>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-green-600">TCS</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">And many more businesses across India trust us for their corporate gifting needs.</p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Our Values</h2>
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Best Price Guarantee",
                description: "We source directly from Indian manufacturers to offer the most competitive prices without compromising on quality.",
                icon: (
                  <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Premium Indian Quality",
                description: "Every product in our collection is handpicked for quality and craftsmanship, showcasing the best of Indian manufacturing.",
                icon: (
                  <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
              {
                title: "Pan-India Service",
                description: "We deliver exceptional corporate gifting solutions to businesses across India, from metro cities to emerging markets.",
                icon: (
                  <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-4 text-base text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-24 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-800 px-6 py-8 sm:py-12 sm:px-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">Ready to get started?</h2>
              <p className="mt-4 text-lg text-primary-100">
                Let us help you create memorable gifting experiences that strengthen your business relationships.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:flex lg:items-center lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-lg font-medium text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 