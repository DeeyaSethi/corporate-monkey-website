import Navigation from './components/Navigation'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Indian Corporate Gifting"
            style={{display: 'block'}}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
        </div>
        <div className="relative mx-auto max-w-7xl py-16 sm:py-24 px-4 sm:px-6 lg:py-32 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl">
            Premium Corporate Gifting <br className="hidden sm:inline" />Solutions
          </h1>
          <p className="mt-4 sm:mt-6 max-w-2xl text-lg sm:text-xl leading-8 text-gray-300">
            Elevate your corporate relationships with our curated collection of premium gifts 
            and bulk merchandise at the most competitive prices in India.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-y-4 gap-x-6">
            <Link
              href="/products"
              className="w-full sm:w-auto rounded-md bg-primary-600 px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 text-center"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="text-base sm:text-lg font-semibold leading-6 text-white hover:text-gray-300"
            >
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Why Choose Corporate Monkey?
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-600">
              We provide end-to-end corporate gifting solutions with premium quality, 
              best prices, and exceptional service across India.
            </p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3 lg:max-w-none">
              {[
                {
                  name: 'Premium Quality',
                  description: 'Handpicked selection of high-quality traditional and modern Indian corporate gifts that make a lasting impression.',
                  icon: '🎁'
                },
                {
                  name: 'Best Prices',
                  description: 'Direct sourcing from Indian manufacturers ensures the most competitive prices without compromising on quality.',
                  icon: '💰'
                },
                {
                  name: 'Pan-India Service',
                  description: 'We deliver exceptional corporate gifting solutions to businesses across India with fast and reliable shipping.',
                  icon: '🚚'
                }
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col items-center text-center px-4">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600">
                    <span className="text-2xl" aria-hidden="true">{feature.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Categories section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Our Product Categories
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-8 text-gray-600">
              Discover our wide range of corporate gifting solutions tailored to your needs.
            </p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-y-8 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8">
            {[
              {
                title: 'Corporate Gifting',
                description: 'Premium gifting solutions for corporate events and client appreciation.',
                image: 'https://images.pexels.com/photos/6476118/pexels-photo-6476118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                href: '/products/corporate-gifting',
                color: 'from-blue-500 to-blue-700'
              },
              {
                title: 'Bulk Gifting',
                description: 'Cost-effective solutions for large-scale corporate gifts.',
                image: 'https://images.pexels.com/photos/6177639/pexels-photo-6177639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                color: 'from-green-500 to-green-700',
                href: '/products/bulk-gifting'
              }
            ].map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group relative block overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-48 sm:h-64 lg:h-80">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover object-center"
                    style={{display: 'block'}}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${category.color} mix-blend-multiply`} />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{category.title}</h3>
                    <p className="mt-2 text-sm text-gray-100">{category.description}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-white">
                      Explore Collection →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-12 sm:mt-16 px-4 sm:px-6 py-16 sm:py-24 lg:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Ready to elevate your corporate gifting?
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-8 text-gray-300">
            Get in touch with our team to discuss your requirements and find the perfect gifting solutions for your business.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-4 gap-x-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-md bg-white px-6 py-3 text-base sm:text-lg font-semibold text-primary-600 shadow-sm hover:bg-gray-100"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="text-base sm:text-lg font-semibold leading-6 text-white hover:text-gray-300"
            >
              Browse Products <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 