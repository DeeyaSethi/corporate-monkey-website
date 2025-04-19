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

// Using environment variables for API configuration
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

if (!API_URL || !TOKEN) {
  throw new Error('Missing required environment variables: NEXT_PUBLIC_API_URL or NEXT_PUBLIC_API_TOKEN');
}

// After the check, we can safely assert these values exist
const VALIDATED_API_URL = API_URL as string;
const VALIDATED_TOKEN = TOKEN as string;

export async function getAllProducts(): Promise<Product[]> {
  try {
    const url = `${VALIDATED_API_URL}?token=${VALIDATED_TOKEN}&action=getProducts`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
      redirect: 'follow'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.data?.products || !Array.isArray(data.data.products)) {
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
    const formattedCategory = category.toLowerCase();
    const url = `${VALIDATED_API_URL}?token=${VALIDATED_TOKEN}&action=getProducts&category=${encodeURIComponent(formattedCategory)}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
      redirect: 'follow'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products for category ${category}: ${response.status}`);
    }

    const data = await response.json();

    if (!data.data?.products || !Array.isArray(data.data.products)) {
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
    const url = `${VALIDATED_API_URL}?token=${VALIDATED_TOKEN}&action=getProduct&id=${encodeURIComponent(id)}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
      redirect: 'follow'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch product ${id}: ${response.status}`);
    }

    const data = await response.json();

    if (!data.data?.product) {
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

export async function addProduct(product: Omit<Product, 'id'>): Promise<number | null> {
  try {
    const params = new URLSearchParams({
      token: VALIDATED_TOKEN,
      action: 'addProduct',
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      imageUrl: product.imageUrl,
      category: product.category,
      minQuantity: product.minQuantity?.toString() || '',
      customizationOptions: product.customizationOptions?.join(';') || '',
    });

    const response = await fetch(`${VALIDATED_API_URL}?${params.toString()}`);
    const data = await response.json();
    if (data.status === 200 && data.data.success) {
      return data.data.id;
    }
    return null;
  } catch (error) {
    console.error('Error adding product:', error);
    return null;
  }
}

export async function updateProduct(id: number, updates: Partial<Omit<Product, 'id'>>): Promise<boolean> {
  try {
    const params = new URLSearchParams();
    params.append('token', VALIDATED_TOKEN);
    params.append('action', 'updateProduct');
    params.append('id', id.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value !== undefined) {
        if (key === 'customizationOptions' && Array.isArray(value)) {
          params.append(key, value.join(';'));
        } else {
          params.append(key, value.toString());
        }
      }
    });

    const response = await fetch(`${VALIDATED_API_URL}?${params.toString()}`);
    const data = await response.json();
    
    return data.status === 200 && data.data.success;
  } catch (error) {
    console.error(`Error updating product ${id}:`, error);
    return false;
  }
}

export async function deleteProduct(id: number): Promise<boolean> {
  try {
    const response = await fetch(`${VALIDATED_API_URL}?token=${VALIDATED_TOKEN}&action=deleteProduct&id=${id}`);
    const data = await response.json();
    
    return data.status === 200 && data.data.success;
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error);
    return false;
  }
} 