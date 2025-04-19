import { google } from 'googleapis'

export interface Product {
  id: string
  name: string
  description: string
  category: string
  price: number
  imageUrl: string
  minQuantity?: number
  customizationOptions?: string[]
}

export async function getGoogleSheetsClient() {
  // This function will need to be configured with your Google Sheets API credentials
  const auth = new google.auth.GoogleAuth({
    credentials: {
      // You'll need to provide these values through environment variables
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  })

  const sheets = google.sheets({ version: 'v4', auth })
  return sheets
}

export async function getProducts(category?: string): Promise<Product[]> {
  try {
    // Your Google Sheet must be published to the web and accessible via CSV
    const sheetId = process.env.GOOGLE_SHEET_ID
    const sheetName = 'Products' // Name of your sheet
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`
    
    const response = await fetch(url)
    const text = await response.text()
    
    // Parse CSV (simple parsing, you might want to use a CSV parser library for more robust handling)
    const rows = text.split('\n').slice(1) // Skip header row
    const products: Product[] = rows.map(row => {
      // Remove quotes and split by comma
      const columns = row.split(',').map(col => col.replace(/^"|"$/g, '').trim())
      
      return {
        id: columns[0],
        name: columns[1],
        description: columns[2],
        category: columns[3],
        price: parseFloat(columns[4]),
        imageUrl: columns[5],
        minQuantity: columns[6] ? parseInt(columns[6]) : undefined,
        customizationOptions: columns[7] ? columns[7].split(';').map(opt => opt.trim()) : undefined,
      }
    })

    if (category) {
      return products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    }

    return products
  } catch (error) {
    console.error('Error fetching products from Google Sheets:', error)
    return []
  }
} 