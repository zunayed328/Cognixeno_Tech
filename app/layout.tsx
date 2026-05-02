import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cognixeno Tech',
  description: 'Cognixeno Tech builds AI-driven cyber resilience platforms for forward-thinking enterprises.',
  metadataBase: new URL('https://cognixeno-tech.example.com')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
