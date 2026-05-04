'use client'

import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/layout/PageTransition'

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <Navbar />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </div>
  )
}
