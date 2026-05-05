import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavigationProgress from '@/components/ui/NavigationProgress'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cognixeno Tech — AI-Powered Digital Solutions',
  description:
    'Mobile apps, web development, AI automation and intelligent chatbots managed by AI agents.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased`}
        style={{
          background: '#080810',
          color: 'white',
          overflowX: 'hidden',
        }}
      >
        <NavigationProgress />
        <Navbar />
        <main>
          <Suspense fallback={
            <div style={{
              minHeight: '100vh',
              background: '#080810'
            }} />
          }>
            {children}
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  )
}
