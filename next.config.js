/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization where possible
  output: 'standalone',
  
  // Configure environment variables that should be available at build time
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
  },

  // Optimize images from trusted domains
  images: {
    domains: [
      'images.unsplash.com',
      'cms.cloudinary.vpsvc.com',
      'thot-media.thehouseofthings.com',
      '5.imimg.com'
    ],
  },
}

module.exports = nextConfig 