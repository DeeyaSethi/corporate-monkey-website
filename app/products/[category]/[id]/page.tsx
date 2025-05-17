import Navigation from '../../../components/Navigation'
import Link from 'next/link'
import { getAllProducts } from '../../../utils/productApi'

// Make page dynamic to avoid caching
export const revalidate = 0;

export interface ProductPageProps {
  params: {
    category: string;
    id: string;
  };
}

async function ProductPage({ params }: ProductPageProps) {
  const products = await getAllProducts();
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Product Not Found
            </h1>
            <p className="mt-4 text-gray-500">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/products"
              className="mt-8 inline-block rounded-md bg-primary-600 px-4 py-2 text-base font-medium text-white hover:bg-primary-700"
            >
              Return to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Coming Soon Banner */}
      <div className="bg-primary-600 text-white text-center py-3 px-4">
        <p className="text-sm sm:text-base font-medium">More product options coming soon on May 25, 2025!</p>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="aspect-h-4 aspect-w-3 sm:aspect-h-3 sm:aspect-w-4 overflow-hidden rounded-lg">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Product info */}
          <div className="mt-8 lg:mt-0">
            <Link
              href={`/products/${params.category}`}
              className="text-primary-600 hover:text-primary-500 mb-4 inline-block"
            >
              ← Back to {params.category.replace('-', ' ')}
            </Link>
            
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-4">{product.name}</h1>
            
            <div className="mt-4">
              <h2 className="sr-only">Product description</h2>
              <p className="text-sm sm:text-base text-gray-700">{product.description}</p>
            </div>

            <Link
              href="/contact"
              className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Contact Us For Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage 