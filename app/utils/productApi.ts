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

// Get the base URL for API calls
const getBaseUrl = () => {
  return ''; // We don't need a base URL for external API calls
};

export async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}?token=${API_TOKEN}&action=getProducts`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`API Error: ${response.status} - ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    
    if (!data.data?.products || !Array.isArray(data.data.products)) {
      console.warn('No products found or invalid data format');
      return [];
    }

    return data.data.products.map((product: any) => ({
      id: String(product.id),
      name: String(product.name),
      description: String(product.description),
      price: Number(product.price),
      imageUrl: String(product.imageUrl),
      category: String(product.category).toLowerCase(),
      minQuantity: product.minQuantity ? Number(product.minQuantity) : undefined,
      customizationOptions: Array.isArray(product.customizationOptions) 
        ? product.customizationOptions 
        : typeof product.customizationOptions === 'string'
          ? product.customizationOptions.split(';').filter(Boolean)
          : undefined
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}?token=${API_TOKEN}&action=getProducts&category=${encodeURIComponent(category)}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`API Error: ${response.status} - ${response.statusText}`);
      return [];
    }

    const data = await response.json();

    if (!data.data?.products || !Array.isArray(data.data.products)) {
      console.warn(`No products found for category: ${category}`);
      return [];
    }

    return data.data.products.map((product: any) => ({
      id: String(product.id),
      name: String(product.name),
      description: String(product.description),
      price: Number(product.price),
      imageUrl: String(product.imageUrl),
      category: String(product.category).toLowerCase(),
      minQuantity: product.minQuantity ? Number(product.minQuantity) : undefined,
      customizationOptions: Array.isArray(product.customizationOptions) 
        ? product.customizationOptions 
        : typeof product.customizationOptions === 'string'
          ? product.customizationOptions.split(';').filter(Boolean)
          : undefined
    }));
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    return [];
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${API_URL}?token=${API_TOKEN}&action=getProduct&id=${encodeURIComponent(id)}`, {
      method: 'GET',
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

    if (!data.data?.product) {
      console.warn(`No product found with ID: ${id}`);
      return null;
    }

    const product = data.data.product;
    return {
      id: String(product.id),
      name: String(product.name),
      description: String(product.description),
      price: Number(product.price),
      imageUrl: String(product.imageUrl),
      category: String(product.category).toLowerCase(),
      minQuantity: product.minQuantity ? Number(product.minQuantity) : undefined,
      customizationOptions: Array.isArray(product.customizationOptions) 
        ? product.customizationOptions 
        : typeof product.customizationOptions === 'string'
          ? product.customizationOptions.split(';').filter(Boolean)
          : undefined
    };
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
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
    return data.data?.success === true;
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error);
    return false;
  }
} 