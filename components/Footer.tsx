'use client'

import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiTwitter, FiChevronRight } from 'react-icons/fi'

const servicesLinks = [
  'Mobile App Development',
  'Web Development',
  'AI-Powered Solutions',
  'AI Automation',
  'Email Support',
  'AI Chatbots'
]

const companyLinks = ['About Us', 'Our AI Agents', 'Portfolio', 'Pricing', 'Blog']

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0A0A14] border-t border-[rgba(200,168,233,0.15)] pt-20 pb-10"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-white">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-lg font-black shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              X
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white">COGNIXENO TECH</p>
            </div>
          </div>
          <p className="max-w-[220px] text-[14px] leading-6 text-slate-400">
            Powered by AI. Built for the Future.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: FiLinkedin, href: '#' },
              { icon: FiGithub, href: '#' },
              { icon: FiTwitter, href: '#' }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <a
                  key={index}
                  href={item.href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] bg-white/5 text-white transition-transform duration-200 hover:border-[#C8A8E9] hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[14px] font-bold uppercase tracking-[2px] text-white">Services</p>
          <div className="space-y-3 text-[14px] text-[#A0A0B8]">
            {servicesLinks.map((link) => (
              <a key={link} href="#" className="block transition hover:text-white">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[14px] font-bold uppercase tracking-[2px] text-white">Company</p>
          <div className="space-y-3 text-[14px] text-[#A0A0B8]">
            {companyLinks.map((link) => (
              <a key={link} href="#" className="block transition hover:text-white">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-[14px] font-bold uppercase tracking-[2px] text-white">Contact</p>
            <a href="mailto:hello@cognixenotech.com" className="mt-3 block text-[14px] font-semibold text-[#F7B638] transition hover:underline">
              hello@cognixenotech.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#A0A0B8]">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#25D366]" />
            <span>Available 24/7 via AI Agent</span>
          </div>
          <p className="text-[14px] text-[#A0A0B8]">Global — Remote First 🌍</p>
        </div>
      </div>

      <div className="mt-12 border-t border-[rgba(255,255,255,0.06)] pt-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-[12px] text-[#6B6B8A] lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2025 Cognixeno Tech. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="transition hover:text-white">Terms of Service</a>
            <span>|</span>
            <a href="#" className="transition hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
