import { fetchProducts } from './googleSheets';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  minQuantity?: number;
  customizationOptions?: string[];
}

// API configuration
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || '';

if (!API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL environment variable is not set');
}

if (!API_TOKEN) {
  throw new Error('NEXT_PUBLIC_API_TOKEN environment variable is not set');
}

// Cache for products
let productsCache: Product[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

export async function getAllProducts(): Promise<Product[]> {
  // Check if cache is valid
  const now = Date.now();
  if (productsCache && now - lastFetchTime < CACHE_TTL) {
    return productsCache;
  }
  
  // Fetch fresh data from Google Sheets
  const products = await fetchProducts();
  
  // Update cache
  productsCache = products;
  lastFetchTime = now;
  
  return products;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const products = await getAllProducts();
  return products.filter(product => product.category === category);
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getAllProducts();
  const product = products.find(p => p.id === id);
  return product || null;
}

export async function addProduct(product: Omit<Product, 'id'>): Promise<string | null> {
  try {
    const params = new URLSearchParams({
      token: API_TOKEN,
      action: 'addProduct',
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      imageUrl: product.imageUrl,
      category: product.category,
      minQuantity: product.minQuantity?.toString() || '',
      customizationOptions: product.customizationOptions?.join(';') || '',
    });

    const response = await fetch(`${API_URL}?${params.toString()}`, {
      method: 'GET', // Google Apps Script requires GET for CORS
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`API Error: ${response.status} - ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    
    // Invalidate cache
    productsCache = null;
    
    if (data.data?.id) {
      return String(data.data.id);
    }
    return null;
  } catch (error) {
    console.error('Error adding product:', error);
    return null;
  }
}

export async function updateProduct(id: string, updates: Partial<Omit<Product, 'id'>>): Promise<boolean> {
  try {
    const params = new URLSearchParams({
      token: API_TOKEN,
      action: 'updateProduct',
      id: id,
    });

    Object.entries(updates).forEach(([key, value]) => {
      if (value !== undefined) {
        if (key === 'customizationOptions' && Array.isArray(value)) {
          params.append(key, value.join(';'));
        } else {
          params.append(key, value.toString());
        }
      }
    });

    const response = await fetch(`${API_URL}?${params.toString()}`, {
      method: 'GET', // Google Apps Script requires GET for CORS
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`API Error: ${response.status} - ${response.statusText}`);
      return false;
    }

    const data = await response.json();
    
    // Invalidate cache
    productsCache = null;
    
    return data.data?.success === true;
  } catch (error) {
    console.error(`Error updating product ${id}:`, error);
    return false;
  }
}

export async function deleteProduct(id: string): Promise<boolean> {
  try {
    const params = new URLSearchParams({
      token: API_TOKEN,
      action: 'deleteProduct',
      id: id,
    });

    const response = await fetch(`${API_URL}?${params.toString()}`, {
      method: 'GET', // Google Apps Script requires GET for CORS
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`API Error: ${response.status} - ${response.statusText}`);
      return false;
    }

    const data = await response.json();
    
    // Invalidate cache
    productsCache = null;
    
    return data.data?.success === true;
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error);
    return false;
  }
} 