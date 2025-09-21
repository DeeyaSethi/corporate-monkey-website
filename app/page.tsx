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
            src="/main_image.jpg"
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

      {/* Diwali Special Banner */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="relative">
              <img
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
                src="/diwali_special.jpg"
                alt="Diwali Special Collection"
                style={{display: 'block'}}
              />
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                  🪔 Diwali Special Collection
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Celebrate the festival of lights with our exclusive Diwali corporate gifting collection. Premium quality gifts perfect for your valued clients and employees.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="https://wa.me/918882082215?text=Hi%2C%20I%27m%20interested%20in%20Diwali%20corporate%20gifting%20solutions.%20Please%20share%20more%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                    </svg>
                    Order via WhatsApp
                  </a>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center rounded-lg border-2 border-primary-600 px-6 py-3 text-lg font-semibold text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-200"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            </div>
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
                color: 'from-primary-500 to-primary-700'
              },
              {
                title: 'Bulk Gifting',
                description: 'Cost-effective solutions for large-scale corporate gifts.',
                image: 'https://images.pexels.com/photos/6177639/pexels-photo-6177639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                color: 'from-primary-600 to-primary-800',
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