import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Cognixeno Tech — AI-Powered Digital Solutions',
  description: 'Mobile apps, web development, AI automation and chatbots — all managed by intelligent AI agents.',
  keywords: [
    'AI development',
    'mobile app',
    'web development',
    'AI automation',
    'chatbot',
    'Cognixeno Tech'
  ],
  metadataBase: new URL('https://cognixeno-tech.example.com'),
  openGraph: {
    title: 'Cognixeno Tech — AI-Powered Digital Solutions',
    description: 'Mobile apps, web development, AI automation and chatbots — all managed by intelligent AI agents.',
    url: 'https://cognixeno-tech.example.com',
    siteName: 'Cognixeno Tech',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://cognixeno-tech.example.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cognixeno Tech AI-Powered Digital Solutions'
      }
    ]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
