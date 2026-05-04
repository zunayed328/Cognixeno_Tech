'use client'

import { motion } from 'framer-motion'
import { FiSmartphone, FiGlobe, FiCpu, FiZap, FiMail, FiMessageCircle } from 'react-icons/fi'

const services = [
  {
    id: 'mobile-app',
    number: '01',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications with fluid animations, offline support, and seamless user experiences.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    accent: '#FF947A',
    icon: FiSmartphone,
    cta: 'Explore Service',
  },
  {
    id: 'web-dev',
    number: '02',
    title: 'Web Development',
    description: 'High-performance web platforms built with modern frameworks, optimized for speed, SEO, and conversion.',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    accent: '#FF947A',
    icon: FiGlobe,
    cta: 'Explore Service',
  },
  {
    id: 'ai-solutions',
    number: '03',
    title: 'AI-Powered Solutions',
    description: 'GPT-integrated platforms with predictive AI, smart recommendations, and autonomous user experiences.',
    tags: ['GPT-4', 'LangChain', 'Vector DB', 'RAG'],
    accent: '#C8A8E9',
    icon: FiCpu,
    cta: 'Explore Service',
  },
  {
    id: 'automation',
    number: '04',
    title: 'AI Automation',
    description: 'Automate repetitive workflows for businesses and institutions using intelligent AI agent pipelines.',
    tags: ['Workflow AI', 'n8n', 'Zapier', 'Custom'],
    accent: '#E1FF51',
    icon: FiZap,
    cta: 'Explore Service',
  },
  {
    id: 'email-support',
    number: '05',
    title: 'Professional Email Support',
    description: 'Enterprise-grade email automation with smart routing, AI-powered responses, and analytics dashboards.',
    tags: ['SMTP', 'Templates', 'Analytics', 'API'],
    accent: '#F7B638',
    icon: FiMail,
    cta: 'Explore Service',
  },
  {
    id: 'chatbots',
    number: '06',
    title: 'AI Chatbot Solutions',
    description: 'Custom chatbots for e-commerce and personal use — handling queries, sales, support and lead capture 24/7.',
    tags: ['WhatsApp', 'Web Widget', 'E-Commerce'],
    accent: '#F7B638',
    icon: FiMessageCircle,
    cta: 'Explore Service',
  },
]

const ServiceCard = ({ service, index }: { service: typeof services[number]; index: number }) => {
  const a = service.accent
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="group relative flex flex-col overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '20px',
        padding: '32px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.2), 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        transition: 'all 350ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.35 },
      }}
    >
      {/* Left border accent */}
      <div
        className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-r-sm opacity-70 group-hover:opacity-100"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${a} 50%, transparent 100%)`,
          boxShadow: `2px 0 12px ${a}66`,
          transition: 'opacity 300ms',
        }}
      />

      {/* Corner glow decoration */}
      <div
        className="absolute top-0 right-0 w-[120px] h-[120px] pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${a}14 0%, transparent 70%)`,
        }}
      />

      {/* Bottom shine line */}
      <div
        className="absolute bottom-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${a}4D 50%, transparent 100%)`,
          transition: 'opacity 300ms',
        }}
      />

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          border: `1px solid ${a}66`,
          boxShadow: `0 8px 12px rgba(0,0,0,0.3), 0 30px 80px rgba(0,0,0,0.5), 0 0 40px ${a}26, inset 0 1px 0 rgba(255,255,255,0.08)`,
          transition: 'opacity 350ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* Top row: Icon + Number */}
      <div className="relative z-10 flex items-start justify-between">
        <div
          className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center group-hover:shadow-lg"
          style={{
            background: `${a}1F`,
            border: `1px solid ${a}40`,
            boxShadow: `0 0 20px ${a}33`,
            transition: 'box-shadow 300ms',
          }}
        >
          <service.icon size={24} style={{ color: a }} />
        </div>
        <span
          className="text-[11px] font-bold tracking-[2px]"
          style={{ color: `${a}80` }}
        >
          {service.number}
        </span>
      </div>

      {/* Title */}
      <h3 className="relative z-10 mt-6 text-xl font-bold text-white tracking-[-0.3px] leading-[1.3]">
        {service.title}
      </h3>

      {/* Accent line */}
      <div
        className="relative z-10 mt-3 w-8 h-[2px] rounded-[1px]"
        style={{
          background: a,
          boxShadow: `0 0 8px ${a}99`,
        }}
      />

      {/* Description */}
      <p className="relative z-10 mt-4 text-sm text-[#A0A0B8] leading-[1.8] flex-1">
        {service.description}
      </p>

      {/* Tags */}
      <div className="relative z-10 mt-5 flex flex-wrap gap-2">
        {service.tags.map(tag => (
          <span
            key={tag}
            className="text-[11px] font-semibold tracking-[0.5px] px-3 py-[5px] rounded-full"
            style={{
              background: `${a}14`,
              border: `1px solid ${a}33`,
              color: a,
              transition: 'background 200ms',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom row: CTA + Arrow */}
      <div className="relative z-10 mt-7 flex items-center justify-between">
        <span
          className="flex items-center gap-1.5 text-[13px] font-semibold group-hover:gap-2.5"
          style={{ color: a, transition: 'gap 200ms' }}
        >
          {service.cta}
          <span className="text-sm">→</span>
        </span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-opacity-100"
          style={{
            border: `1px solid ${a}4D`,
            color: a,
            transition: 'all 300ms',
          }}
        >
          <span className="text-xs">→</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="solutions" className="section section--salmon px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header with badge */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              background: 'rgba(200,168,233,0.08)',
              border: '1px solid rgba(200,168,233,0.2)',
              boxShadow: '0 0 20px rgba(200,168,233,0.1)',
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8A8E9]" />
            <span className="text-[11px] font-bold tracking-[2px] text-[#C8A8E9] uppercase">
              What We Build
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold text-white sm:text-5xl tracking-[-1px] leading-[1.15]"
          >
            Our Core Services
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 mx-auto w-[60px] h-[3px] rounded-[2px] origin-center"
            style={{
              background: 'linear-gradient(90deg, #C8A8E9, #F7B638)',
              boxShadow: '0 0 12px rgba(200,168,233,0.5)',
            }}
          />
        </div>

        {/* 3-column grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
