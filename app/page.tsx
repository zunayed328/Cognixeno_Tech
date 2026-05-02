import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import AIAgents from '../components/AIAgents'
import WhyUs from '../components/WhyUs'
import ChatbotPreview from '../components/ChatbotPreview'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'

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
