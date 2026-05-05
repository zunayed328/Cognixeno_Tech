'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { FiSmartphone, FiGlobe, FiCpu, FiZap, FiMail, FiMessageCircle, FiArrowRight } from 'react-icons/fi'
import PageHero from '../../components/ui/PageHero'
import GlassCard from '../../components/ui/GlassCard'
import SectionBadge from '../../components/ui/SectionBadge'
import AnimatedButton from '../../components/ui/AnimatedButton'

const MobileAppAnimation = dynamic(() => import('../../components/animations/MobileAppAnimation'), { ssr: false })
const WebDevAnimation = dynamic(() => import('../../components/animations/WebDevAnimation'), { ssr: false })
const AISolutionsAnimation = dynamic(() => import('../../components/animations/AISolutionsAnimation'), { ssr: false })
const AIAutomationAnimation = dynamic(() => import('../../components/animations/AIAutomationAnimation'), { ssr: false })
const EmailSupportAnimation = dynamic(() => import('../../components/animations/EmailSupportAnimation'), { ssr: false })
const ChatbotsAnimation = dynamic(() => import('../../components/animations/ChatbotsAnimation'), { ssr: false })

const services = [
  { id: 'mobile-app', title: 'Mobile App Development', desc: 'Native and cross-platform mobile applications with fluid animations, offline support, and seamless UX.', tags: ['React Native', 'Flutter', 'iOS', 'Android'], icon: FiSmartphone, accent: '#FF947A' },
  { id: 'web-development', title: 'Web Development', desc: 'High-performance web platforms built with modern frameworks, optimized for speed, SEO, and conversion.', tags: ['Next.js', 'React', 'TypeScript', 'Node.js'], icon: FiGlobe, accent: '#FF947A' },
  { id: 'ai-solutions', title: 'AI-Powered Solutions', desc: 'GPT-integrated platforms with predictive AI, smart recommendations, and autonomous user experiences.', tags: ['GPT-4', 'LangChain', 'Vector DB', 'RAG'], icon: FiCpu, accent: '#C8A8E9' },
  { id: 'ai-automation', title: 'AI Automation', desc: 'Automate repetitive workflows for businesses and institutions using intelligent AI agent pipelines.', tags: ['Workflow AI', 'n8n', 'Zapier', 'Custom'], icon: FiZap, accent: '#E1FF51' },
  { id: 'email-support', title: 'Professional Email Support', desc: 'Enterprise-grade email automation with smart routing, AI-powered responses, and analytics dashboards.', tags: ['SMTP', 'Templates', 'Analytics', 'API'], icon: FiMail, accent: '#F7B638' },
  { id: 'chatbots', title: 'AI Chatbot Solutions', desc: 'Custom chatbots for e-commerce and personal use — handling queries, sales, support and lead capture 24/7.', tags: ['WhatsApp', 'Web Widget', 'E-Commerce'], icon: FiMessageCircle, accent: '#F7B638' },
]

const animationComponents = [
  MobileAppAnimation,
  WebDevAnimation,
  AISolutionsAnimation,
  AIAutomationAnimation,
  EmailSupportAnimation,
  ChatbotsAnimation,
]

const steps = [
  { num: '01', title: 'You Tell Us What You Need', desc: 'Submit your project requirements through our contact form or chat with our AI assistant.', accent: '#C8A8E9' },
  { num: '02', title: 'AI Agents Plan & Execute', desc: 'Our specialized AI agents analyze your request, plan the architecture, and start building immediately.', accent: '#E1FF51' },
  { num: '03', title: 'You Receive the Final Product', desc: 'A polished, tested, and deployment-ready product delivered to you — usually within days, not months.', accent: '#F7B638' },
]

export default function ServicesContent() {
  return (
    <main>
      <PageHero
        badge="Our Services"
        badgeColor="#C8A8E9"
        title="Six Core Services. One AI-Powered Team."
        subtitle="From mobile apps to AI automation — every service is built, tested, and delivered by our specialized AI agents. Infinite possibilities."
      />

      {/* Services with Animations — Alternating Layout */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #080810, #0D0D1A)' }}>
        <div className="mx-auto max-w-7xl space-y-24">
          {services.map((s, i) => {
            const Icon = s.icon
            const AnimComponent = animationComponents[i]
            const isReversed = i % 2 === 1

            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
              >
                {/* Info side */}
                <div className="flex-1 max-w-xl">
                  <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-6" style={{ background: `${s.accent}1F`, border: `1px solid ${s.accent}40`, boxShadow: `0 0 20px ${s.accent}33` }}>
                    <Icon size={24} style={{ color: s.accent }} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-[-0.5px]">{s.title}</h3>
                  <div className="mt-3 w-10 h-[2px] rounded-[1px]" style={{ background: s.accent, boxShadow: `0 0 8px ${s.accent}99` }} />
                  <p className="mt-5 text-[#A0A0B8] leading-[1.8]">{s.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span key={t} className="text-[11px] font-semibold tracking-[0.5px] px-3 py-[5px] rounded-full" style={{ background: `${s.accent}14`, border: `1px solid ${s.accent}33`, color: s.accent }}>{t}</span>
                    ))}
                  </div>
                  <Link
                    href={`/services/${s.id}`}
                    className="inline-flex items-center gap-2 mt-8 text-[14px] font-semibold group"
                    style={{ color: s.accent }}
                  >
                    View Details
                    <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Animation side */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="relative rounded-2xl overflow-visible p-4" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)' }}>
                    <AnimComponent />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #0D0D1A, #080810)' }}>
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <SectionBadge text="How It Works" color="#E1FF51" />
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-6 text-3xl sm:text-5xl font-extrabold text-white tracking-[-1px]">
              Three Simple Steps
            </motion.h2>
          </div>

          <div className="space-y-0 relative">
            {/* Connecting line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-[2px]" style={{ background: 'linear-gradient(180deg, rgba(200,168,233,0.3), rgba(225,255,81,0.3), rgba(247,182,56,0.3))' }} />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: i * 0.15 }}
                className="flex gap-6 py-8"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-lg font-extrabold relative z-10" style={{ background: `${step.accent}1A`, border: `2px solid ${step.accent}40`, color: step.accent, boxShadow: `0 0 20px ${step.accent}33` }}>
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-[#A0A0B8] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center" style={{ background: 'linear-gradient(180deg, #080810, #0a0a14)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-1px]">Not sure which service you need?</h2>
          <p className="mt-4 text-[#A0A0B8]">Talk to our AI agent — it will recommend the perfect solution for your project.</p>
          <div className="mt-8">
            <AnimatedButton href="/contact" color="#F7B638" gradientTo="#D4941F">Talk to Our AI Agent</AnimatedButton>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
