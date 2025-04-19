import Navigation from '../../components/Navigation'
import Link from 'next/link'
import { getProductsByCategory } from '../../utils/productApi'

// Make page dynamic to avoid caching
export const revalidate = 0;

const categoryDetails = {
  'corporate-gifting': {
    title: 'Corporate Gifting',
    description: 'Premium gifting solutions for corporate events, employee recognition, and client appreciation.',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&auto=format&fit=crop&q=60',
    color: 'from-blue-500 to-blue-700'
  },
  'bulk-gifting': {
    title: 'Bulk Gifting',
    description: 'Cost-effective solutions for large-scale corporate events and promotions.',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&auto=format&fit=crop&q=60',
    color: 'from-green-500 to-green-700'
  },
  'custom-printing': {
    title: 'Custom Printing',
    description: 'Personalized printing services for corporate merchandise and promotional materials.',
    image: 'https://images.unsplash.com/photo-1606293459366-910b58b2d276?w=800&auto=format&fit=crop&q=60',
    color: 'from-purple-500 to-purple-700'
  }
};

export interface CategoryPageProps {
  params: {
    category: string;
  };
}

async function CategoryPage({ params }: CategoryPageProps) {
  const products = await getProductsByCategory(params.category);
  const details = categoryDetails[params.category as keyof typeof categoryDetails];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={details.image}
            alt={details.title}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
          <div className="mb-8">
            <Link href="/products" className="text-white hover:text-gray-200 flex items-center">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 4.158a.75.75 0 11-1.04 1.04l-5.5-5.5a.75.75 0 010-1.08l5.5-5.5a.75.75 0 111.04 1.04L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
              </svg>
              Back to All Products
            </Link>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {details.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-300">
            {details.description}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Product grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-4 aspect-w-3 w-full overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
                <div className="flex items-end p-2 sm:p-4">
                  <div className="w-full rounded-md bg-white/90 backdrop-blur p-2 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="font-medium text-gray-900 text-sm sm:text-base">
                      <Link href={`/products/${params.category}/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-500">{product.description}</p>
                    {product.minQuantity && (
                      <p className="mt-1 text-xs sm:text-sm text-primary-600">
                        Min. Quantity: {product.minQuantity}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-sm sm:text-base font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-500">{product.description}</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm sm:text-lg font-medium text-primary-600">₹{product.price}</p>
                  {product.minQuantity && (
                    <p className="text-xs sm:text-sm text-gray-500">
                      Min. Qty: {product.minQuantity}
                    </p>
                  )}
                </div>
                {product.customizationOptions && product.customizationOptions.length > 0 && (
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-900">Customization Options:</h4>
                    <ul className="mt-2 space-y-2">
                      {product.customizationOptions.map((option) => (
                        <li key={option} className="text-xs sm:text-sm text-gray-500 flex items-center">
                          <svg className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="mt-24 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-800 px-6 py-8 sm:py-12 sm:px-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">Need help choosing the right products?</h2>
              <p className="mt-4 text-lg text-primary-100">
                Our team can help you select the perfect products for your needs and budget.
                Contact us for personalized assistance and bulk order inquiries.
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

export default CategoryPage 