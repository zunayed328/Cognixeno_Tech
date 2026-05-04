'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiSmartphone, FiGlobe, FiCpu, FiZap, FiMail, FiMessageCircle, FiMenu, FiX } from 'react-icons/fi'
import AnimatedLogo from './ui/AnimatedLogo'
import AnimatedCompanyName from './ui/AnimatedCompanyName'

const serviceLinks = [
  { name: 'Mobile App Development', desc: 'iOS & Android apps', href: '/services/mobile-app', icon: FiSmartphone, color: '#FF947A' },
  { name: 'Web Development', desc: 'High-performance websites', href: '/services/web-development', icon: FiGlobe, color: '#FF947A' },
  { name: 'AI-Powered Solutions', desc: 'GPT & AI integration', href: '/services/ai-solutions', icon: FiCpu, color: '#C8A8E9' },
  { name: 'AI Automation', desc: 'Workflow automation', href: '/services/ai-automation', icon: FiZap, color: '#E1FF51' },
  { name: 'Email Support', desc: 'Enterprise email systems', href: '/services/email-support', icon: FiMail, color: '#F7B638' },
  { name: 'AI Chatbots', desc: 'Custom chatbot solutions', href: '/services/chatbots', icon: FiMessageCircle, color: '#F7B638' },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'AI Agents', href: '/ai-agents' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [showDropdown, setShowDropdown] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current)
    setShowDropdown(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShowDropdown(false), 200)
  }

  useEffect(() => {
    setMobileOpen(false)
    setShowDropdown(false)
  }, [pathname])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        style={{
          background: 'rgba(8,8,16,0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="flex h-16 items-center justify-between">
          {/* Animated Logo + Name */}
          <Link href="/" className="flex items-center gap-3">
            <AnimatedLogo size={36} showGlow={true} animate={true} />
            <AnimatedCompanyName size="navbar" animate={true} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
                onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
                ref={link.hasDropdown ? dropdownRef : undefined}
              >
                <Link
                  href={link.href}
                  className={`relative px-3 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-white bg-[rgba(200,168,233,0.08)]'
                      : 'text-[#A0A0B8] hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <span className="ml-1 text-[10px]">▾</span>}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                      style={{ background: '#C8A8E9', boxShadow: '0 0 8px rgba(200,168,233,0.5)' }}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {showDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[340px] p-3 rounded-2xl"
                        style={{
                          background: 'rgba(15,15,25,0.95)',
                          backdropFilter: 'blur(24px)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                        }}
                      >
                        {serviceLinks.map((s) => {
                          const Icon = s.icon
                          return (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors duration-150"
                            >
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{
                                  background: `${s.color}1A`,
                                  border: `1px solid ${s.color}33`,
                                }}
                              >
                                <Icon size={14} style={{ color: s.color }} />
                              </div>
                              <div>
                                <p className="text-[13px] font-semibold text-white">{s.name}</p>
                                <p className="text-[11px] text-[#6B6B8A]">{s.desc}</p>
                              </div>
                            </Link>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold text-[#080810]"
            style={{
              background: 'linear-gradient(135deg, #F7B638, #D4941F)',
              boxShadow: '0 4px 15px rgba(247,182,56,0.3)',
            }}
          >
            Get Started
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: 'rgba(8,8,16,0.95)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive(link.href) ? 'text-white bg-[rgba(200,168,233,0.08)]' : 'text-[#A0A0B8]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mt-3 text-center rounded-xl px-4 py-3 text-sm font-bold text-[#080810]"
                style={{ background: 'linear-gradient(135deg, #F7B638, #D4941F)' }}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
