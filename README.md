# Corporate Monkey Website

A professional corporate gifting solutions website built with Next.js, featuring product catalog management through Google Sheets integration.

## Features

- Modern, responsive design using Tailwind CSS
- Product catalog management through Google Sheets
- Category-based product browsing
- Corporate gifting, bulk gifting, and custom printing sections
- Easy product updates through Google Sheets

## Prerequisites

- Node.js 18.x or later
- Google Cloud Platform account with Sheets API enabled
- Google service account with access to Sheets API

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd corporate-monkey
```

2. Install dependencies:
```bash
npm install
```

3. Set up Google Sheets:
   - Create a new Google Sheets document
   - Create a sheet named "Products" with the following columns:
     - id
     - name
     - description
     - category
     - price
     - imageUrl
     - minQuantity
     - customizationOptions

4. Set up environment variables:
   - Copy .env.local.example to .env.local
   - Fill in your Google Sheets API credentials and spreadsheet ID

5. Run the development server:
```bash
npm run dev
```

## Google Sheets Setup

1. Go to Google Cloud Console
2. Create a new project or select an existing one
3. Enable the Google Sheets API
4. Create a service account and download the credentials
5. Share your Google Sheets document with the service account email
6. Add the service account credentials to your .env.local file

## Product Management

Products are managed through Google Sheets. The spreadsheet should have the following structure:

| Column | Description |
|--------|-------------|
| id | Unique identifier for the product |
| name | Product name |
| description | Product description |
| category | Product category (corporate-gifting, bulk-gifting, custom-printing) |
| price | Product price in INR |
| imageUrl | URL to product image |
| minQuantity | Minimum order quantity (optional) |
| customizationOptions | Comma-separated list of customization options (optional) |

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting

## Deployment

The site can be deployed to any platform that supports Next.js applications (Vercel, Netlify, etc.).

Remember to:
1. Set up environment variables in your deployment platform
2. Configure build settings if necessary
3. Set up proper domain and SSL certificates

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
