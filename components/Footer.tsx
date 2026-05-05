'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiLinkedin, FiGithub, FiTwitter, FiMail } from 'react-icons/fi'
import AnimatedLogo from './ui/AnimatedLogo'

const servicesLinks = [
  { name: 'Mobile App Development', href: '/services/mobile-app' },
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'AI-Powered Solutions', href: '/services/ai-solutions' },
  { name: 'AI Automation', href: '/services/ai-automation' },
  { name: 'Email Support', href: '/services/email-support' },
  { name: 'AI Chatbots', href: '/services/chatbots' },
]

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our AI Agents', href: '/ai-agents' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="pt-20 pb-10"
      style={{ background: '#0A0A14', borderTop: '1px solid rgba(200,168,233,0.1)' }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <AnimatedLogo size={40} showGlow={false} animate={false} />
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-white">Cognixeno Tech</p>
          </Link>
          <p className="max-w-[220px] text-sm leading-6 text-[#A0A0B8]">
            Powered by AI. Built for the Future.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: FiLinkedin, href: '#' },
              { icon: FiGithub, href: '#' },
              { icon: FiTwitter, href: '#' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <a
                  key={index}
                  href={item.href}
                  className="group inline-flex h-10 w-10 items-center justify-center text-white"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    transition: 'all 300ms',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.background = 'rgba(200,168,233,0.1)'
                    el.style.borderColor = 'rgba(200,168,233,0.4)'
                    el.style.transform = 'scale(1.1) translateY(-2px)'
                    el.style.boxShadow = '0 8px 20px rgba(200,168,233,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.background = 'rgba(255,255,255,0.04)'
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                    el.style.transform = 'scale(1) translateY(0)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <p className="text-[13px] font-bold uppercase tracking-[2px] text-white">Services</p>
          <div className="space-y-3 text-sm text-[#A0A0B8]">
            {servicesLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block"
                style={{ transition: 'all 200ms' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#A0A0B8'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <p className="text-[13px] font-bold uppercase tracking-[2px] text-white">Company</p>
          <div className="space-y-3 text-sm text-[#A0A0B8]">
            {companyLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block"
                style={{ transition: 'all 200ms' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#A0A0B8'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-5">
          <p className="text-[13px] font-bold uppercase tracking-[2px] text-white">Contact</p>
          <a
            href="mailto:hello@cognixenotech.com"
            className="flex items-center gap-2 text-sm font-semibold text-[#F7B638] hover:brightness-125 hover:underline"
            style={{ transition: 'all 200ms' }}
          >
            <FiMail size={14} className="text-[#F7B638]" />
            hello@cognixenotech.com
          </a>
          <div className="flex items-center gap-2 text-sm text-[#A0A0B8]">
            <div className="relative w-2.5 h-2.5">
              <span className="absolute inset-0 rounded-full bg-[#25D366]" />
              <span className="absolute inset-0 rounded-full bg-[#25D366]" style={{ animation: 'pulse 1.5s infinite' }} />
            </div>
            <span>Available 24/7 via AI Agent</span>
          </div>
          <p className="text-sm text-[#A0A0B8]">Global — Remote First 🌍</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-[12px] text-[#6B6B8A] lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2025 Cognixeno Tech. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, i) => (
              <span key={link} className="contents">
                {i > 0 && <span className="text-[rgba(255,255,255,0.1)]">|</span>}
                <a href="#" className="hover:text-white" style={{ transition: 'color 200ms' }}>{link}</a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
