'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { IconType } from 'react-icons'
import PageHero from '../../components/ui/PageHero'
import GlassCard from '../../components/ui/GlassCard'
import SectionBadge from '../../components/ui/SectionBadge'
import AnimatedButton from '../../components/ui/AnimatedButton'

interface Feature {
  title: string
  desc: string
  icon: IconType
}

interface Step {
  title: string
  desc: string
}

interface RelatedService {
  name: string
  href: string
  accent: string
  icon: IconType
}

interface ServiceDetailProps {
  badge: string
  title: string
  subtitle: string
  accent: string
  gradient?: string
  features: Feature[]
  process: Step[]
  techStack: string[]
  relatedServices: RelatedService[]
}

export default function ServiceDetail({
  badge,
  title,
  subtitle,
  accent,
  gradient,
  features,
  process,
  techStack,
  relatedServices,
}: ServiceDetailProps) {
  return (
    <main>
      {/* Hero */}
      <PageHero
        badge={badge}
        badgeColor={accent}
        title={title}
        subtitle={subtitle}
        gradient={gradient || 'linear-gradient(180deg, #1A0030 0%, #080810 100%)'}
      >
        <div className="flex flex-wrap justify-center gap-4">
          <AnimatedButton href="/contact" color={accent} gradientTo={accent}>
            Get Started
          </AnimatedButton>
          <AnimatedButton href="/pricing" variant="outline" color={accent}>
            View Pricing
          </AnimatedButton>
        </div>
      </PageHero>

      {/* Features */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #080810, #0D0D1A)' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <SectionBadge text="What We Deliver" color={accent} />
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-6 text-3xl sm:text-4xl font-extrabold text-white tracking-[-1px]">
              Key Features & Deliverables
            </motion.h2>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div key={f.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <GlassCard accentColor={accent} className="h-full">
                    <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: `${accent}1A`, border: `1px solid ${accent}33` }}>
                      <Icon size={22} style={{ color: accent }} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">{f.title}</h3>
                    <div className="mt-3 w-8 h-[2px] rounded-[1px]" style={{ background: accent }} />
                    <p className="mt-3 text-sm text-[#A0A0B8] leading-[1.8]">{f.desc}</p>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #0D0D1A, #080810)' }}>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <SectionBadge text="Our Process" color={accent} />
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 text-3xl sm:text-4xl font-extrabold text-white tracking-[-1px]">
              How We Build It
            </motion.h2>
          </div>
          <div className="relative">
            <div className="absolute left-[27px] top-8 bottom-8 w-[2px]" style={{ background: `linear-gradient(180deg, ${accent}4D, ${accent}1A)` }} />
            {process.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="flex gap-6 py-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-lg font-extrabold relative z-10" style={{ background: `${accent}1A`, border: `2px solid ${accent}40`, color: accent }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-[#A0A0B8] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-20 px-6" style={{ background: 'linear-gradient(180deg, #080810, #0D0D1A)' }}>
        <div className="mx-auto max-w-4xl text-center">
          <SectionBadge text="Technology Stack" color={accent} />
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 text-2xl sm:text-3xl font-extrabold text-white tracking-[-1px]">
            Built With Best-in-Class Tools
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-10 flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span key={tech} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: `${accent}14`, border: `1px solid ${accent}33`, color: accent }}>
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #0D0D1A, #080810)' }}>
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <SectionBadge text="Related Services" color="#C8A8E9" />
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 text-2xl sm:text-3xl font-extrabold text-white">
              You Might Also Need
            </motion.h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map((rs, i) => {
              const Icon = rs.icon
              return (
                <motion.div key={rs.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link href={rs.href}>
                    <GlassCard accentColor={rs.accent}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${rs.accent}1A`, border: `1px solid ${rs.accent}33` }}>
                        <Icon size={18} style={{ color: rs.accent }} />
                      </div>
                      <h3 className="mt-4 text-base font-bold text-white">{rs.name}</h3>
                      <div className="mt-3 flex items-center gap-1 text-xs font-semibold" style={{ color: rs.accent }}>
                        Learn More <FiArrowRight size={12} />
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center" style={{ background: 'linear-gradient(180deg, #080810, #0a0a14)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-1px]">
            Ready to get started?
          </h2>
          <p className="mt-4 text-[#A0A0B8]">Our AI agents are standing by to start your project right now.</p>
          <div className="mt-8">
            <AnimatedButton href="/contact" color={accent} gradientTo={accent}>
              Start Your Project
            </AnimatedButton>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
