import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Optimize font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Corporate Monkey - Professional Corporate Gifting Solutions',
  description: 'Corporate Monkey provides premium corporate gifting solutions, bulk gifting, and customized printing services for businesses across India.',
  keywords: 'corporate gifts, bulk gifting, custom printing, corporate merchandise, business gifts, promotional products',
  robots: 'index, follow',
}

// Export viewport separately as recommended by Next.js
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

// Use React cache to avoid recreating layout on navigation
export const dynamic = 'force-static';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${inter.variable}`}>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
} 