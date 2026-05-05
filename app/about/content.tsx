'use client'

import { motion } from 'framer-motion'
import { FiTarget, FiStar, FiAward, FiCpu, FiHeart, FiEye, FiTrendingUp, FiZap, FiCheckCircle, FiClock } from 'react-icons/fi'
import PageHero from '../../components/ui/PageHero'
import GlassCard from '../../components/ui/GlassCard'
import GradientText from '../../components/ui/GradientText'
import AnimatedButton from '../../components/ui/AnimatedButton'
import SectionBadge from '../../components/ui/SectionBadge'

const values = [
  { number: '01', title: 'AI-First Thinking', desc: 'We approach every problem with AI as the primary solution architect, ensuring maximum efficiency.', icon: FiCpu, accent: '#E1FF51' },
  { number: '02', title: 'Client Obsession', desc: 'Every decision we make is centered around delivering maximum value to our clients.', icon: FiHeart, accent: '#FF947A' },
  { number: '03', title: 'Radical Transparency', desc: 'Real-time updates, clear communication, no surprises — ever.', icon: FiEye, accent: '#C8A8E9' },
  { number: '04', title: 'Relentless Innovation', desc: 'We never stop improving, learning, and pushing boundaries.', icon: FiTrendingUp, accent: '#F7B638' },
]

const missions = [
  { title: 'Accessibility', desc: 'Making world-class AI technology available to every business.', icon: FiTarget, accent: '#C8A8E9' },
  { title: 'Innovation', desc: 'Pushing the boundaries of what AI can do for your business.', icon: FiStar, accent: '#E1FF51' },
  { title: 'Excellence', desc: 'Delivering nothing short of exceptional quality in everything.', icon: FiAward, accent: '#F7B638' },
]

const reasons = [
  { title: 'Speed', desc: 'Tasks completed 10x faster than traditional teams.', icon: FiZap, accent: '#E1FF51' },
  { title: 'Accuracy', desc: 'AI never misses a detail, never makes careless mistakes.', icon: FiCheckCircle, accent: '#C8A8E9' },
  { title: 'Scale', desc: 'Handle unlimited projects simultaneously, 24/7.', icon: FiClock, accent: '#FF947A' },
]

export default function AboutContent() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        badge="Our Story"
        badgeColor="#C8A8E9"
        title="We Are Cognixeno Tech"
        subtitle="A next-generation AI technology company that builds digital solutions managed entirely by intelligent AI agents. We don't just build software — we architect digital futures."
        gradient="linear-gradient(180deg, #1A0030 0%, #080810 100%)"
      />

      {/* Mission */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #080810, #0D0D1A)' }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7 }}
            >
              <SectionBadge text="Our Mission" color="#C8A8E9" />
              <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold leading-[1.2] tracking-[-1px]">
                <GradientText from="#C8A8E9" to="#FF947A">
                  Our mission is to make world-class AI technology accessible to every business
                </GradientText>
                <span className="text-white"> — regardless of size, industry or technical background.</span>
              </h2>
            </motion.div>

            <div className="space-y-5">
              {missions.map((m, i) => {
                const Icon = m.icon
                return (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <GlassCard accentColor={m.accent}>
                      <div className="flex items-start gap-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${m.accent}1A`, border: `1px solid ${m.accent}33` }}
                        >
                          <Icon size={20} style={{ color: m.accent }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{m.title}</h3>
                          <p className="mt-1 text-sm text-[#A0A0B8]">{m.desc}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #0D0D1A, #080810)' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <SectionBadge text="Our Values" color="#E1FF51" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-3xl sm:text-5xl font-extrabold text-white tracking-[-1px]"
            >
              What Drives Us
            </motion.h2>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <GlassCard accentColor={v.accent} className="relative min-h-[200px]">
                    {/* Watermark number */}
                    <div
                      className="absolute top-4 right-6 text-[100px] font-black leading-none select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.08]"
                      style={{ color: v.accent, transition: 'opacity 300ms' }}
                    >
                      {v.number}
                    </div>
                    <div
                      className="w-12 h-12 rounded-[14px] flex items-center justify-center"
                      style={{ background: `${v.accent}1A`, border: `1px solid ${v.accent}33` }}
                    >
                      <Icon size={22} style={{ color: v.accent }} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">{v.title}</h3>
                    <p className="mt-3 text-sm text-[#A0A0B8] leading-relaxed">{v.desc}</p>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why AI Agents */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #00272C, #080810)' }}>
        <div className="mx-auto max-w-5xl text-center">
          <SectionBadge text="Our Technology" color="#E1FF51" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="mt-8"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(225,255,81,0.1)', border: '1px solid rgba(225,255,81,0.25)' }}>
              <FiCpu size={36} className="text-[#E1FF51]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-1px]">
              Why We Use AI Agents For Everything
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-[#A0A0B8] text-lg leading-relaxed">
              AI agents handle every task in your project — from code to design to deployment. This means faster delivery, higher accuracy, and unlimited scalability.
            </p>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-3 mt-16">
            {reasons.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.3, delay: i * 0.15 }}
                >
                  <GlassCard accentColor={r.accent}>
                    <div className="w-12 h-12 rounded-[14px] flex items-center justify-center mx-auto" style={{ background: `${r.accent}1A`, border: `1px solid ${r.accent}33` }}>
                      <Icon size={22} style={{ color: r.accent }} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white text-center">{r.title}</h3>
                    <p className="mt-2 text-sm text-[#A0A0B8] text-center">{r.desc}</p>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center" style={{ background: 'linear-gradient(180deg, #080810, #0a0a14)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-1px]">Ready to work with us?</h2>
          <p className="mt-4 text-[#A0A0B8]">Let our AI agents start building your future today.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <AnimatedButton href="/services" variant="outline" color="#C8A8E9">
              View Services
            </AnimatedButton>
            <AnimatedButton href="/contact" color="#F7B638" gradientTo="#D4941F">
              Contact Us
            </AnimatedButton>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
