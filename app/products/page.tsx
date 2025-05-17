import Navigation from '../components/Navigation'
import Link from 'next/link'
import { getAllProducts } from '../utils/productApi'

// Reduce cache time to 5 minutes to match the API cache TTL
export const revalidate = 300;

const categories = [
  {
    name: 'Corporate Gifting',
    slug: 'corporate-gifting',
    description: 'Premium gifting solutions for corporate events and client appreciation',
    image: 'https://images.pexels.com/photos/6476118/pexels-photo-6476118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Bulk Gifting',
    slug: 'bulk-gifting',
    description: 'Cost-effective solutions for large-scale corporate gifts',
    image: 'https://images.pexels.com/photos/6177639/pexels-photo-6177639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-green-500 to-green-700'
  }
];

async function Products() {
  // Fetch all products
  const products = await getAllProducts();

  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <div className="bg-white">
      <Navigation />
      
      <div className="relative">
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
          <div className="relative mx-auto max-w-7xl py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl">
              Corporate Gifting Solutions
            </h1>
            <p className="mt-4 sm:mt-6 max-w-2xl text-lg sm:text-xl text-gray-300">
              Discover our premium collection of corporate gifts and bulk merchandise at competitive prices.
            </p>
            
            {/* Coming Soon Banner - Premium Design */}
            <div className="mt-8 sm:mt-10 bg-primary-600 rounded-lg shadow-xl p-5 sm:p-6 max-w-2xl">
              <div className="flex items-center">
                <div className="mr-4 bg-white rounded-full p-2 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-bold text-lg sm:text-xl text-white tracking-tight">More product options coming soon on May 25, 2025!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product sections */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Products */}
          {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
            <div key={category} className="mt-12 sm:mt-16">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 capitalize">
                  {category.replace('-', ' ')}
                </h2>
                <Link
                  href={`/products/${category}`}
                  className="text-sm font-medium text-primary-600 hover:text-primary-500"
                >
                  View all
                </Link>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                {categoryProducts.slice(0, 4).map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                        style={{display: 'block'}}
                      />
                      <div className="flex items-end p-2 sm:p-4">
                        <div className="w-full rounded-md bg-white/90 backdrop-blur p-2 sm:p-4 text-sm">
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">
                            <Link href={`/products/${category}/${product.id}`}>
                              <span aria-hidden="true" className="absolute inset-0" />
                              {product.name}
                            </Link>
                          </h3>
                          <p className="mt-1 text-xs sm:text-sm text-gray-500">{product.description.substring(0, 50)}...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Contact section */}
          <div className="relative mt-24 rounded-3xl bg-gradient-to-r from-primary-600 to-primary-800 px-6 py-16 sm:py-24 lg:px-8">
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Need help choosing the perfect gifts?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                Our team is here to help you select the perfect corporate gifts for your needs and budget.
                Get in touch for personalized assistance and bulk order inquiries.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-primary-600 shadow-sm hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products 