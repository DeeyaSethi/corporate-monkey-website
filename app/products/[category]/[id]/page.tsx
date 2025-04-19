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

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mb-12">
          <Link
            href={`/products/${params.category}`}
            className="text-primary-600 hover:text-primary-500"
          >
            ← Back to {params.category.replace('-', ' ')}
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Image */}
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Product Details */}
          <div className="mt-8 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>
            <div className="mt-4">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">₹{product.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-lg text-gray-500">{product.description}</p>
            </div>

            {product.minQuantity && (
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Minimum Quantity</h3>
                <p className="mt-2 text-sm text-gray-500">{product.minQuantity} units</p>
              </div>
            )}

            {product.customizationOptions && product.customizationOptions.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Customization Options</h3>
                <ul className="mt-2 list-disc pl-4 text-sm text-gray-500">
                  {product.customizationOptions.map((option) => (
                    <li key={option} className="mt-1">{option}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 space-y-6">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-base font-medium text-gray-900">
                  Interested in this product?
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Contact us to discuss your requirements, bulk pricing, and customization options.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block rounded-md bg-primary-600 px-4 py-2 text-base font-medium text-white hover:bg-primary-700"
                >
                  Contact Us
                </Link>
              </div>

              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-base font-medium text-gray-900">
                  Need help with your order?
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Our team is here to assist you with product selection, customization, and ordering.
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  <p>Email: info@corporatemonkey.in</p>
                  <p>Phone: +91 XXXXXXXXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage 