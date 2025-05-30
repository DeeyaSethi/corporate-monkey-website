import Navigation from '../../components/Navigation'
import Link from 'next/link'
import { getProductsByCategory } from '../../utils/productApi'

// Cache this page for better performance
export const revalidate = 300; // Revalidate every 5 minutes to match API cache TTL

// Generate static paths for known categories
export async function generateStaticParams() {
  return [
    { category: 'corporate-gifting' },
    { category: 'bulk-gifting' }
  ];
}

const categoryDetails = {
  'corporate-gifting': {
    title: 'Corporate Gifting',
    description: 'Premium gifting solutions for corporate events, employee recognition, and client appreciation.',
    image: 'https://images.pexels.com/photos/6476118/pexels-photo-6476118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-blue-500 to-blue-700'
  },
  'bulk-gifting': {
    title: 'Bulk Gifting',
    description: 'Cost-effective solutions for large-scale corporate events and promotions.',
    image: 'https://images.pexels.com/photos/6177639/pexels-photo-6177639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-green-500 to-green-700'
  }
};

export interface CategoryPageProps {
  params: {
    category: string;
  };
}

async function CategoryPage({ params }: CategoryPageProps) {
  const products = await getProductsByCategory(params.category);
  const details = categoryDetails[params.category as keyof typeof categoryDetails] || {
    title: params.category.replace('-', ' '),
    description: 'Explore our collection of premium products.',
    color: 'from-gray-500 to-gray-700'
  };

  return (
    <div className="bg-white">
      <Navigation />
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col">
          <Link
            href="/products"
            className="text-primary-600 hover:text-primary-500 mb-4"
          >
            ← Back to all products
          </Link>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 capitalize">
            {details.title}
          </h1>

          <p className="text-lg text-gray-500 mb-8">
            {details.description}
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-4 aspect-w-3 w-full overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                  style={{display: 'block'}}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-4 p-2">
                <h3 className="text-sm sm:text-base font-medium text-gray-900">
                  <Link href={`/products/${params.category}/${product.id}`} className="hover:text-primary-600">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-500">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Banner */}
        <div className="mt-12 bg-primary-50 border-l-4 border-primary-600 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-bold text-lg text-primary-700">More {details.title} options coming soon on May 25, 2025!</p>
          </div>
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