import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'FiscalCanopy - Your Guide to Insurance and Finance',
  description: 'Expert insights and guides on insurance, finance, budgeting, and wealth management to help you make informed financial decisions.',
  keywords: 'insurance, finance, budgeting, investments, financial planning, wealth management, fiscal, canopy',
  authors: [{ name: 'FiscalCanopy' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fiscal-canopy-oy4f.vercel.app',
    siteName: 'FiscalCanopy',
    title: 'FiscalCanopy - Your Guide to Insurance and Finance',
    description: 'Expert insights and guides on insurance, finance, budgeting, and wealth management',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FiscalCanopy - Your Guide to Insurance and Finance',
    description: 'Expert insights and guides on insurance, finance, budgeting, and wealth management',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
