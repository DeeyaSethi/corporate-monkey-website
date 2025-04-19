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
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-2xl sm:text-3xl tracking-tight text-primary-600">₹{product.price}</p>
            </div>

            <div className="mt-4">
              <h2 className="sr-only">Product description</h2>
              <p className="text-sm sm:text-base text-gray-700">{product.description}</p>
            </div>

            {product.minQuantity && (
              <div className="mt-4 border-t border-gray-200 pt-4">
                <h3 className="text-sm font-medium text-gray-900">Minimum Order Quantity</h3>
                <p className="mt-2 text-sm text-gray-500">{product.minQuantity} units</p>
              </div>
            )}

            {product.customizationOptions && product.customizationOptions.length > 0 && (
              <div className="mt-4 border-t border-gray-200 pt-4">
                <h3 className="text-sm font-medium text-gray-900">Customization Options</h3>
                <ul className="mt-2 space-y-2">
                  {product.customizationOptions.map((option) => (
                    <li key={option} className="text-sm text-gray-500 flex items-center">
                      <svg className="h-4 w-4 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 flex flex-col space-y-4">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Contact for Bulk Order
              </Link>
              <Link
                href={`/products/${product.category}`}
                className="flex w-full items-center justify-center rounded-md border border-primary-600 px-6 py-3 text-base font-medium text-primary-600 shadow-sm hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                View More {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage 