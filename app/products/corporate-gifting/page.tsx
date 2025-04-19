import Navigation from '../../components/Navigation'
import Link from 'next/link'
import { getProductsByCategory } from '../../utils/productApi'

export const revalidate = 0 // Make page dynamic

async function CorporateGiftingPage() {
  const products = await getProductsByCategory('corporate-gifting')

  return (
    <div className="bg-white">
      <Navigation />

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mb-8">
          <Link href="/products" className="text-primary-600 hover:text-primary-500">
            ← Back to Products
          </Link>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Corporate Gifting</h1>
        <p className="mt-4 text-xl text-gray-500">
          Premium gifting solutions for corporate events, employee recognition, and client appreciation.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    <Link href={`/products/corporate-gifting/${product.id}`} className="hover:text-primary-600">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  {product.minQuantity && (
                    <p className="mt-1 text-sm text-gray-500">
                      Minimum quantity: {product.minQuantity}
                    </p>
                  )}
                </div>
                <p className="text-lg font-medium text-gray-900">₹{product.price}</p>
              </div>
              {product.customizationOptions && product.customizationOptions.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900">Customization Options:</h4>
                  <ul className="mt-2 text-sm text-gray-500">
                    {product.customizationOptions.map((option) => (
                      <li key={option}>{option}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-gray-50 px-6 py-8">
          <h2 className="text-2xl font-bold text-gray-900">Need help choosing the right gifts?</h2>
          <p className="mt-2 text-gray-600">
            Our team can help you select the perfect corporate gifts for your needs and budget.
            Contact us for personalized assistance and bulk order inquiries.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md bg-primary-600 px-4 py-2 text-base font-medium text-white hover:bg-primary-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CorporateGiftingPage 