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

// Using the Google Apps Script web app URL instead of direct Sheets API
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

if (!API_URL || !TOKEN) {
  throw new Error('Missing required environment variables');
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}?token=${TOKEN}&action=getProducts`);
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