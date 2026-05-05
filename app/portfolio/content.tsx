'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../../components/ui/PageHero'
import GlassCard from '../../components/ui/GlassCard'
import AnimatedButton from '../../components/ui/AnimatedButton'
import SectionBadge from '../../components/ui/SectionBadge'
import LexiCodeMockup from '../../components/mockups/LexiCodeMockup'
import ShopFlowMockup from '../../components/mockups/ShopFlowMockup'
import NexaBoardMockup from '../../components/mockups/NexaBoardMockup'
import AutoPilotMockup from '../../components/mockups/AutoPilotMockup'
import MediScanMockup from '../../components/mockups/MediScanMockup'
import EduFlowMockup from '../../components/mockups/EduFlowMockup'
import VoiceDeskMockup from '../../components/mockups/VoiceDeskMockup'
import InsightEngineMockup from '../../components/mockups/InsightEngineMockup'
import MailForgeMockup from '../../components/mockups/MailForgeMockup'

const categories = ['All', 'Mobile Apps', 'Web Dev', 'AI Solutions', 'Automation', 'Chatbots']

const projects = [
  { name: 'LexiCode', category: 'Mobile Apps', desc: 'AI-powered IELTS preparation app with speech recognition and smart feedback.', tags: ['Flutter', 'Firebase', 'GPT-4'], gradient: 'linear-gradient(135deg, #FF947A, #C8A8E9)', accent: '#FF947A' },
  { name: 'ShopFlow AI', category: 'Chatbots', desc: 'E-commerce chatbot handling 10K+ queries daily with product recommendations.', tags: ['Node.js', 'WhatsApp API', 'GPT-4'], gradient: 'linear-gradient(135deg, #F7B638, #780115)', accent: '#F7B638' },
  { name: 'NexaBoard', category: 'Web Dev', desc: 'Real-time project management dashboard with AI task prioritization.', tags: ['Next.js', 'Supabase', 'Tailwind'], gradient: 'linear-gradient(135deg, #C8A8E9, #1A0030)', accent: '#C8A8E9' },
  { name: 'AutoPilot CRM', category: 'Automation', desc: 'Automated sales pipeline with AI lead scoring and email sequences.', tags: ['n8n', 'Python', 'PostgreSQL'], gradient: 'linear-gradient(135deg, #E1FF51, #00272C)', accent: '#E1FF51' },
  { name: 'MediScan', category: 'AI Solutions', desc: 'AI diagnostic assistant for healthcare providers with 99.2% accuracy.', tags: ['TensorFlow', 'FastAPI', 'React'], gradient: 'linear-gradient(135deg, #025259, #C8A8E9)', accent: '#C8A8E9' },
  { name: 'EduFlow', category: 'Mobile Apps', desc: 'EdTech platform with adaptive learning paths and gamified progress tracking.', tags: ['React Native', 'Firebase', 'Redux'], gradient: 'linear-gradient(135deg, #FF947A, #F7B638)', accent: '#FF947A' },
  { name: 'VoiceDesk', category: 'Chatbots', desc: 'Voice-enabled customer support bot with multi-language real-time translation.', tags: ['Twilio', 'GPT-4', 'Socket.io'], gradient: 'linear-gradient(135deg, #F7B638, #C8A8E9)', accent: '#F7B638' },
  { name: 'InsightEngine', category: 'AI Solutions', desc: 'Business intelligence platform with predictive analytics and automated reporting.', tags: ['Python', 'React', 'PostgreSQL'], gradient: 'linear-gradient(135deg, #C8A8E9, #E1FF51)', accent: '#E1FF51' },
  { name: 'MailForge', category: 'Automation', desc: 'Enterprise email automation platform handling 500K+ emails monthly.', tags: ['SendGrid', 'Node.js', 'Redis'], gradient: 'linear-gradient(135deg, #F7B638, #E1FF51)', accent: '#F7B638' },
]

export default function PortfolioContent() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <main>
      <PageHero
        badge="Our Work"
        badgeColor="#C8A8E9"
        title="Projects That Speak for Themselves"
        subtitle="Every project was built, tested, and delivered by our specialized AI agents. Real results, real impact."
      />

      {/* Filter + Grid */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #080810, #0D0D1A)' }}>
        <div className="mx-auto max-w-7xl">
          {/* Filter bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200"
                style={{
                  background: activeFilter === cat ? 'rgba(200,168,233,0.15)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${activeFilter === cat ? 'rgba(200,168,233,0.4)' : 'rgba(255,255,255,0.08)'}`,
                  color: activeFilter === cat ? '#C8A8E9' : '#A0A0B8',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard accentColor={project.accent} className="h-full">
                    {/* Gradient + UI Mockup */}
                    <div className="h-[220px] rounded-xl overflow-hidden mb-5 group relative" style={{ background: project.gradient }}>
                      {/* Dark overlay */}
                      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'rgba(8,8,16,0.4)' }} />
                      
                      {/* Mockup Container */}
                      <div className="absolute inset-0 z-10 pointer-events-none">
                        {project.name === 'LexiCode' && <LexiCodeMockup />}
                        {project.name === 'ShopFlow AI' && <ShopFlowMockup />}
                        {project.name === 'NexaBoard' && <NexaBoardMockup />}
                        {project.name === 'AutoPilot CRM' && <AutoPilotMockup />}
                        {project.name === 'MediScan' && <MediScanMockup />}
                        {project.name === 'EduFlow' && <EduFlowMockup />}
                        {project.name === 'VoiceDesk' && <VoiceDeskMockup />}
                        {project.name === 'InsightEngine' && <InsightEngineMockup />}
                        {project.name === 'MailForge' && <MailForgeMockup />}
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" style={{ background: 'rgba(8,8,16,0.7)' }}>
                        <span className="text-sm font-bold text-white">View Project</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${project.accent}14`, border: `1px solid ${project.accent}33`, color: project.accent }}>
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white">{project.name}</h3>
                    <p className="mt-2 text-sm text-[#A0A0B8] leading-relaxed line-clamp-2">{project.desc}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map(t => (
                        <span key={t} className="text-[10px] font-semibold px-2 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#A0A0B8' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #0D0D1A, #080810)' }}>
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <SectionBadge text="Featured Project" color="#F7B638" />
          </div>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }}>
              <span className="text-[10px] font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(247,182,56,0.15)', border: '1px solid rgba(247,182,56,0.3)', color: '#F7B638' }}>BEST PROJECT</span>
              <h3 className="mt-4 text-3xl font-extrabold text-white">ShopFlow AI</h3>
              <p className="mt-3 text-[#A0A0B8] leading-relaxed">A full-featured e-commerce chatbot that processes over 10,000 customer queries daily. Includes product recommendations, cart management, payment processing, and order tracking — all through WhatsApp.</p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[{ label: 'Queries/Day', value: '10K+' }, { label: 'Resolution Rate', value: '94%' }, { label: 'Response Time', value: '<2s' }].map(s => (
                  <div key={s.label} className="text-center">
                    <div className="text-xl font-bold text-[#F7B638]">{s.value}</div>
                    <div className="text-[10px] text-[#6B6B8A] uppercase tracking-[1px]">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} className="h-[300px] rounded-2xl" style={{ background: 'linear-gradient(135deg, #F7B638, #780115)', boxShadow: '0 20px 60px rgba(247,182,56,0.2)' }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center" style={{ background: 'linear-gradient(180deg, #080810, #0a0a14)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-1px]">Want to be our next success story?</h2>
          <p className="mt-4 text-[#A0A0B8]">Let&apos;s build something amazing together.</p>
          <div className="mt-8"><AnimatedButton href="/contact" color="#F7B638" gradientTo="#D4941F">Start Your Project</AnimatedButton></div>
        </motion.div>
      </section>
    </main>
  )
}
