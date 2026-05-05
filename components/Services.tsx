'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import {
  FiSmartphone,
  FiCode,
  FiCpu,
  FiSettings,
  FiMail,
  FiMessageCircle,
  FiArrowRight
} from 'react-icons/fi'

const services = [
  {
    id: '01',
    icon: FiSmartphone,
    title: 'Mobile App Development',
    subtitle: 'iOS & Android apps',
    description:
      'Native and cross-platform mobile apps for iOS and Android — designed, built and deployed by our AI development agents with precision and speed.',
    tags: ['iOS', 'Android', 'Flutter', 'React Native'],
    accentColor: '#FF947A',
    bgTint: 'rgba(255,148,122,0.06)',
    glowColor: 'rgba(255,148,122,0.25)',
    borderColor: 'rgba(255,148,122,0.3)',
    href: '/services/mobile-app',
  },
  {
    id: '02',
    icon: FiCode,
    title: 'Web Development',
    subtitle: 'High-performance websites',
    description:
      'Custom websites, landing pages and full-stack web platforms built for performance, scalability and stunning modern design.',
    tags: ['Next.js', 'React', 'Node.js', 'Tailwind'],
    accentColor: '#025259',
    bgTint: 'rgba(2,82,89,0.08)',
    glowColor: 'rgba(2,82,89,0.4)',
    borderColor: 'rgba(2,82,89,0.5)',
    href: '/services/web-development',
  },
  {
    id: '03',
    icon: FiCpu,
    title: 'AI-Powered Solutions',
    subtitle: 'GPT & AI Integration',
    description:
      'GPT-integrated applications and platforms with predictive features, smart UI and AI-driven personalized user experiences.',
    tags: ['GPT-4', 'LangChain', 'Smart UI', 'AI APIs'],
    accentColor: '#C8A8E9',
    bgTint: 'rgba(200,168,233,0.06)',
    glowColor: 'rgba(200,168,233,0.25)',
    borderColor: 'rgba(200,168,233,0.3)',
    href: '/services/ai-solutions',
  },
  {
    id: '04',
    icon: FiSettings,
    title: 'AI Automation',
    subtitle: 'Workflow automation',
    description:
      'Automate complex workflows for businesses and educational institutions using intelligent AI agent pipelines that never sleep.',
    tags: ['Workflow AI', 'Business Ops', 'EdTech', 'n8n'],
    accentColor: '#E1FF51',
    bgTint: 'rgba(225,255,81,0.04)',
    glowColor: 'rgba(225,255,81,0.2)',
    borderColor: 'rgba(225,255,81,0.3)',
    href: '/services/ai-automation',
  },
  {
    id: '05',
    icon: FiMail,
    title: 'Email Support',
    subtitle: 'Enterprise email systems',
    description:
      'AI-managed email systems with intelligent drafting, inbox automation, smart filtering and instant professional response management.',
    tags: ['AI Drafting', 'Smart Filter', 'Auto-Response'],
    accentColor: '#F7B638',
    bgTint: 'rgba(247,182,56,0.06)',
    glowColor: 'rgba(247,182,56,0.25)',
    borderColor: 'rgba(247,182,56,0.3)',
    href: '/services/email-support',
  },
  {
    id: '06',
    icon: FiMessageCircle,
    title: 'AI Chatbots',
    subtitle: 'Custom chatbot solutions',
    description:
      'Custom intelligent chatbots for personal use and e-commerce — handling queries, sales support and lead capture automatically 24/7.',
    tags: ['E-Commerce Bot', 'Personal Bot', 'WhatsApp', 'Widget'],
    accentColor: '#F7B638',
    bgTint: 'rgba(120,1,21,0.1)',
    glowColor: 'rgba(120,1,21,0.3)',
    borderColor: 'rgba(120,1,21,0.5)',
    href: '/services/chatbots',
  },
]

interface ServiceCardProps {
  service: typeof services[0]
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1 
      } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <Link href={service.href} style={{ textDecoration: 'none' }}>
        <motion.div
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3, ease: 'easeOut' }
          }}
          style={{
            position: 'relative',
            background: service.bgTint,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${service.borderColor}`,
            borderLeft: `3px solid ${service.accentColor}`,
            borderRadius: '20px',
            padding: '32px',
            height: '100%',
            cursor: 'pointer',
            overflow: 'hidden',
            transition: 'box-shadow 300ms ease',
          }}
          onHoverStart={(e) => {
            const el = e.target as HTMLElement
            if (el) {
              el.style.boxShadow = 
                `0 20px 60px ${service.glowColor}, 
                 0 0 40px ${service.glowColor}`
            }
          }}
          onHoverEnd={(e) => {
            const el = e.target as HTMLElement
            if (el) {
              el.style.boxShadow = 'none'
            }
          }}
        >
          {/* Corner glow decoration */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '150px',
              height: '150px',
              background: `radial-gradient(
                circle at top right,
                ${service.accentColor}15 0%,
                transparent 70%
              )`,
              pointerEvents: 'none',
            }}
          />

          {/* Bottom shine line */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: `linear-gradient(
                90deg,
                transparent,
                ${service.accentColor}60,
                transparent
              )`,
              pointerEvents: 'none',
            }}
          />

          {/* Top row: Icon + Number */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            {/* Icon container */}
            <motion.div
              whileHover={{ 
                scale: 1.1,
                boxShadow: `0 0 30px ${service.accentColor}60`
              }}
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: `${service.accentColor}18`,
                border: `1px solid ${service.accentColor}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 0 20px ${service.accentColor}25`,
                transition: 'all 300ms ease',
              }}
            >
              <Icon 
                size={24} 
                color={service.accentColor}
              />
            </motion.div>

            {/* Service number */}
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2px',
              color: `${service.accentColor}70`,
            }}>
              {service.id}
            </span>
          </div>

          {/* Title */}
          <h3 style={{
            color: 'white',
            fontSize: '20px',
            fontWeight: 700,
            marginTop: '24px',
            marginBottom: '4px',
            letterSpacing: '-0.3px',
            lineHeight: 1.3,
          }}>
            {service.title}
          </h3>

          {/* Subtitle */}
          <p style={{
            color: service.accentColor,
            fontSize: '13px',
            fontWeight: 600,
            marginBottom: '0',
            letterSpacing: '0.5px',
          }}>
            {service.subtitle}
          </p>

          {/* Accent line */}
          <div style={{
            width: '32px',
            height: '2px',
            background: service.accentColor,
            borderRadius: '1px',
            boxShadow: `0 0 8px ${service.accentColor}80`,
            margin: '14px 0',
          }} />

          {/* Description */}
          <p style={{
            color: '#A0A0B8',
            fontSize: '14px',
            lineHeight: 1.8,
            margin: 0,
          }}>
            {service.description}
          </p>

          {/* Tags */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: '20px',
          }}>
            {service.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: `${service.accentColor}12`,
                  border: `1px solid ${service.accentColor}30`,
                  color: service.accentColor,
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  padding: '5px 12px',
                  borderRadius: '50px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom row */}
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginTop: '28px',
              color: service.accentColor,
              fontSize: '13px',
              fontWeight: 600,
            }}
            whileHover={{ gap: '12px' }}
            transition={{ duration: 0.2 }}
          >
            <span>Explore Service</span>
            <FiArrowRight size={14} />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function Services() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      id="services"
      style={{
        background: '#080810',
        padding: '100px 40px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: 'center',
            marginBottom: '60px',
          }}
        >
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(225,255,81,0.08)',
            border: '1px solid rgba(225,255,81,0.2)',
            borderRadius: '50px',
            padding: '6px 16px',
            marginBottom: '20px',
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#E1FF51',
              boxShadow: '0 0 8px #E1FF51',
            }} />
            <span style={{
              color: '#E1FF51',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              What We Build
            </span>
          </div>

          {/* Title */}
          <h2 style={{
            color: 'white',
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 800,
            margin: '0 0 16px',
            letterSpacing: '-1px',
            lineHeight: 1.15,
          }}>
            Our Core Services
          </h2>

          {/* Subtitle */}
          <p style={{
            color: '#A0A0B8',
            fontSize: '18px',
            maxWidth: '500px',
            margin: '0 auto 28px',
            lineHeight: 1.7,
          }}>
            Every service planned, executed and delivered 
            by our intelligent AI agents.
          </p>

          {/* Gradient divider */}
          <div style={{
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, #C8A8E9, #FF947A)',
            borderRadius: '2px',
            margin: '0 auto',
            boxShadow: '0 0 12px rgba(200,168,233,0.5)',
          }} />
        </motion.div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 
            'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            textAlign: 'center',
            marginTop: '60px',
          }}
        >
          <p style={{
            color: '#6B6B8A',
            fontSize: '15px',
            marginBottom: '20px',
          }}>
            Not sure which service you need?
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 0 30px rgba(200,168,233,0.3)'
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 
                  'linear-gradient(135deg, #C8A8E9, #8B4FBF)',
                color: 'white',
                border: 'none',
                padding: '14px 32px',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Talk to Our AI Agent
              <FiArrowRight size={16} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
