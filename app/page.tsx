import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/Hero'))
const Stats = dynamic(() => import('../components/Stats'))
const Services = dynamic(() => import('../components/Services'))
const AIAgents = dynamic(() => import('../components/AIAgents'))
const WhyUs = dynamic(() => import('../components/WhyUs'))
const ChatbotPreview = dynamic(() => import('../components/ChatbotPreview'))
const Testimonials = dynamic(() => import('../components/Testimonials'))
const ContactCTA = dynamic(() => import('../components/ContactCTA'))

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
      <Stats />
      <Services />
      <AIAgents />
      <WhyUs />
      <ChatbotPreview />
      <Testimonials />
      <ContactCTA />
    </main>
  )
}
