'use client'

import { motion } from 'framer-motion'
import { FiSmartphone, FiCode, FiZap, FiMail, FiMessageCircle } from 'react-icons/fi'
import { FaCogs } from 'react-icons/fa'

const services = [
  {
    id: 'mobile',
    icon: FiSmartphone,
    accent: '#FF947A',
    accentBg: '#025259',
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS and Android, designed and deployed by our AI development agents.',
    tags: ['iOS', 'Android', 'Flutter', 'React Native'],
    tagBg: 'bg-[#025259]',
    tagText: 'text-[#FF947A]',
    tagBorder: 'border-[rgba(255,148,122,0.3)]'
  },
  {
    id: 'web',
    icon: FiCode,
    accent: '#025259',
    accentBg: '#FF947A',
    title: 'Web Development',
    description: 'Custom websites, landing pages and full-stack platforms with seamless performance and modern design.',
    tags: ['Next.js', 'React', 'Node.js', 'Tailwind'],
    tagBg: 'bg-[rgba(2,82,89,0.3)]',
    tagText: 'text-[#FF947A]',
    tagBorder: 'border-[rgba(2,82,89,0.5)]'
  },
  {
    id: 'ai-solutions',
    icon: FiZap,
    accent: '#C8A8E9',
    accentBg: '#1A0030',
    title: 'AI-Powered Solutions',
    description: 'GPT-integrated apps and platforms with predictive features, smart UI, and AI-driven user experiences.',
    tags: ['GPT-4', 'LangChain', 'Smart UI', 'AI APIs'],
    tagBg: 'bg-[#1A0030]',
    tagText: 'text-[#C8A8E9]',
    tagBorder: 'border-[#C8A8E9]/30',
    hasParticles: true
  },
  {
    id: 'automation',
    icon: FiZap,
    accent: '#E1FF51',
    accentBg: '#00272C',
    title: 'AI Automation',
    description: 'Automate repetitive workflows for businesses and educational institutions using intelligent AI agent pipelines.',
    tags: ['Workflow AI', 'Business Ops', 'EdTech', 'n8n'],
    tagBg: 'bg-[rgba(0,39,44,0.6)]',
    tagText: 'text-[#E1FF51]',
    tagBorder: 'border-[#E1FF51]/40',
    hasFlowchart: true
  },
  {
    id: 'email',
    icon: FiMail,
    accent: '#F7B638',
    accentBg: '#780115',
    title: 'Professional Email Support',
    description: 'AI-managed email systems with smart drafting, inbox automation, filtering and response management.',
    tags: ['AI Drafting', 'Smart Filter', 'Auto-Response'],
    tagBg: 'bg-[rgba(120,1,21,0.4)]',
    tagText: 'text-[#F7B638]',
    tagBorder: 'border-[#F7B638]/30'
  },
  {
    id: 'chatbots',
    icon: FiMessageCircle,
    accent: '#780115',
    accentAlt: '#F7B638',
    title: 'AI Auto Chatbots',
    description: 'Custom chatbots for personal use and e-commerce — handling queries, sales, support and lead capture 24/7.',
    tags: ['E-Commerce Bot', 'Personal Bot', 'WhatsApp', 'Web Widget'],
    tagBg: 'bg-[rgba(120,1,21,0.4)]',
    tagText: 'text-[#F7B638]',
    tagBorder: 'border-[#F7B638]/30'
  }
]

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="service-card glass-panel group relative overflow-hidden rounded-2xl p-6 transition-all duration-300"
      style={{ borderLeft: `3px solid ${service.accent}` }}
    >
      {service.hasParticles && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="service-particle"
              style={{
                top: `${20 + i * 20}%`,
                left: `${15 + i * 18}%`,
                background: `${service.accent}`,
                animationDelay: `${i * 0.4}s`
              }}
            />
          ))}
        </div>
      )}

      {service.hasFlowchart && (
        <div className="absolute bottom-4 right-4 opacity-40 pointer-events-none">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: service.accent }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 space-y-4">
        <div className="relative inline-block">
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-20"
            style={{ background: `radial-gradient(circle, ${service.accent})`, width: 80, height: 80 }}
          />
          <div
            className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{ background: `${service.accent}20`, color: service.accent }}
          >
            <Icon size={24} />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
          <p className="mt-2 text-sm text-[#A0A0B8]">{service.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2.5 py-1 rounded-full border ${service.tagBg} ${service.tagText} ${service.tagBorder} border-opacity-100`}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
          style={{ color: service.accentAlt || service.accent }}
        >
          Explore →
        </a>
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
        style={{
          boxShadow: `0 0 24px ${service.accent}40, inset 0 0 1px ${service.accent}20`,
          borderLeft: `3px solid ${service.accent}`,
          borderRadius: '16px'
        }}
      />
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="solutions" className="section section--salmon px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm font-semibold uppercase tracking-[3px] text-[#E1FF51]"
          >
            WHAT WE BUILD
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-4xl font-bold text-white sm:text-5xl"
          >
            Our Core Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-[#A0A0B8]"
          >
            AI-powered development, automation, and support solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 mx-auto h-px w-24 origin-center bg-gradient-to-r from-transparent via-[#C8A8E9] to-transparent"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
