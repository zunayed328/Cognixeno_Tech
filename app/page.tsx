import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('../components/Navbar'))
const Hero = dynamic(() => import('../components/Hero'))
const Services = dynamic(() => import('../components/Services'))
const AIAgents = dynamic(() => import('../components/AIAgents'))
const WhyUs = dynamic(() => import('../components/WhyUs'))
const ChatbotPreview = dynamic(() => import('../components/ChatbotPreview'))
const Stats = dynamic(() => import('../components/Stats'))
const Testimonials = dynamic(() => import('../components/Testimonials'))
const ContactCTA = dynamic(() => import('../components/ContactCTA'))
const Footer = dynamic(() => import('../components/Footer'))

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(65,194,255,0.22),transparent_42%)]" />
        <div className="pointer-events-none absolute right-0 top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(141,92,255,0.22),transparent_52%)] blur-3xl" />
        <div className="pointer-events-none absolute left-0 bottom-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(47,89,255,0.18),transparent_58%)] blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="mx-auto max-w-7xl space-y-28 px-6 py-16 lg:px-8">
        <Stats />
        <Services />
        <AIAgents />
        <WhyUs />
        <ChatbotPreview />
        <Testimonials />
        <ContactCTA />
      </div>
      <Footer />
    </main>
  )
}
