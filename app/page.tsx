import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Hero = dynamic(() => import('../components/Hero'), { ssr: false })
const Stats = dynamic(() => import('../components/Stats'), { ssr: false })
const Services = dynamic(() => import('../components/Services'), { ssr: false })
const AIAgents = dynamic(() => import('../components/AIAgents'), { ssr: false })
const WhyUs = dynamic(() => import('../components/WhyUs'), { ssr: false })
const ChatbotPreview = dynamic(() => import('../components/ChatbotPreview'), { ssr: false })
const Testimonials = dynamic(() => import('../components/Testimonials'), { ssr: false })
const ContactCTA = dynamic(() => import('../components/ContactCTA'), { ssr: false })

export default function Home() {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(200,168,233,0.18),transparent_42%)]" />
        <div className="pointer-events-none absolute right-0 top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(200,168,233,0.15),transparent_52%)] blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <Hero />
        </div>
      </div>
      <Suspense fallback={<div className="h-40" />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <AIAgents />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <WhyUs />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <ChatbotPreview />
      </Suspense>
      <Suspense fallback={<div className="h-64" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="h-64" />}>
        <ContactCTA />
      </Suspense>
    </main>
  )
}
