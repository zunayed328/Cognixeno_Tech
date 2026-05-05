'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedLogo from './ui/AnimatedLogo'
import AnimatedCompanyName from './ui/AnimatedCompanyName'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'AI Agents', href: '/ai-agents' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled 
        ? 'rgba(8,8,16,0.95)' 
        : 'rgba(8,8,16,0.7)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(200,168,233,0.1)',
      transition: 'all 300ms ease',
      padding: '0 40px',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>

      {/* Left section: Logo + Company Name */}
      <Link href="/" className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
        <AnimatedLogo size={36} showGlow={true} animate={true} />
        <AnimatedCompanyName size="navbar" animate={true} />
      </Link>

      {/* Center section: Nav links */}
      <div className="hidden lg:flex items-center gap-2">
        {navLinks.map((link) => (
          <Link 
            key={link.href}
            href={link.href}
            style={{
              color: pathname === link.href 
                ? 'white' 
                : '#A0A0B8',
              fontSize: '14px',
              fontWeight: pathname === link.href ? 600 : 400,
              textDecoration: 'none',
              padding: '6px 12px',
              borderRadius: '8px',
              background: pathname === link.href
                ? 'rgba(200,168,233,0.1)'
                : 'transparent',
              transition: 'all 200ms ease',
              position: 'relative'
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right: Get Started button */}
      <div className="hidden lg:flex">
        <Link href="/contact" style={{ textDecoration: 'none' }}>
          <button style={{
            background: 'linear-gradient(135deg, #F7B638, #D4941F)',
            color: '#080810',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '12px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(247,182,56,0.3)'
          }}>
            Get Started
          </button>
        </Link>
      </div>

    </nav>
  )
}
