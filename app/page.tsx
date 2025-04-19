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
            src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1600&auto=format&fit=crop&q=80"
            alt="Corporate Gifting"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
        </div>
        <div className="relative mx-auto max-w-7xl py-32 px-6 sm:py-40 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Premium Corporate Gifting <br />Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-300">
            Elevate your corporate relationships with our curated collection of premium gifts, 
            bulk merchandise, and custom printing solutions.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/products"
              className="rounded-md bg-primary-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="text-lg font-semibold leading-6 text-white hover:text-gray-300"
            >
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Corporate Monkey?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide end-to-end corporate gifting solutions with premium quality, 
              customization options, and exceptional service.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Premium Quality',
                  description: 'Carefully curated selection of high-quality corporate gifts that make a lasting impression.',
                  icon: '🎁'
                },
                {
                  name: 'Bulk Orders',
                  description: 'Special pricing and handling for large quantity orders with consistent quality.',
                  icon: '📦'
                },
                {
                  name: 'Custom Branding',
                  description: 'Professional customization services to showcase your brand identity.',
                  icon: '🎨'
                }
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-2xl leading-7">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600">
                      <span className="text-3xl" aria-hidden="true">{feature.icon}</span>
                    </div>
                    <div className="text-xl font-semibold leading-7 text-gray-900">{feature.name}</div>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Categories section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Product Categories
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover our wide range of corporate gifting solutions tailored to your needs.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'Corporate Gifting',
                description: 'Premium gifting solutions for corporate events and client appreciation.',
                image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&auto=format&fit=crop&q=60',
                href: '/products/corporate-gifting',
                color: 'from-blue-500 to-blue-700'
              },
              {
                title: 'Bulk Gifting',
                description: 'Cost-effective solutions for large-scale corporate gifts.',
                image: 'https://images.unsplash.com/photo-1595925889916-2e5c7c9f1180?w=800&auto=format&fit=crop&q=60',
                href: '/products/bulk-gifting',
                color: 'from-green-500 to-green-700'
              },
              {
                title: 'Custom Printing',
                description: 'Personalized merchandise with your company branding.',
                image: 'https://images.unsplash.com/photo-1586768035423-0471c4994d72?w=800&auto=format&fit=crop&q=60',
                href: '/products/custom-printing',
                color: 'from-purple-500 to-purple-700'
              }
            ].map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className={`absolute inset-0 -z-10 bg-gradient-to-t ${category.color} mix-blend-multiply`} />
                <div className="absolute inset-0 -z-10 ring-1 ring-inset ring-gray-900/10" />

                <h3 className="mt-3 text-2xl font-semibold leading-6 text-white">
                  <span className="absolute inset-0" />
                  {category.title}
                </h3>
                <p className="mt-3 text-sm text-gray-200">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-16 px-6 py-32 sm:mt-24 sm:py-40 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to elevate your corporate gifting?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Get in touch with our team to discuss your requirements and find the perfect gifting solutions for your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-primary-600 shadow-sm hover:bg-gray-100"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="text-lg font-semibold leading-6 text-white hover:text-gray-300"
            >
              Browse Products <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 