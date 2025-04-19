import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Corporate Monkey - Professional Corporate Gifting Solutions',
  description: 'Corporate Monkey provides premium corporate gifting solutions, bulk gifting, and customized printing services for businesses across India.',
  keywords: 'corporate gifts, bulk gifting, custom printing, corporate merchandise, business gifts, promotional products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
} 