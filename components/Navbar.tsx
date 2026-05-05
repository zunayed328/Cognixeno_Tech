'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiSmartphone,
  FiCode,
  FiCpu,
  FiSettings,
  FiMail,
  FiMessageCircle,
  FiChevronDown,
  FiArrowRight,
  FiGrid,
} from 'react-icons/fi'
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

const servicesDropdown = [
  {
    icon: FiSmartphone,
    title: 'Mobile App Development',
    subtitle: 'iOS & Android apps',
    href: '/services/mobile-app',
    iconBg: 'rgba(255,148,122,0.1)',
    iconColor: '#FF947A',
    iconBorder: 'rgba(255,148,122,0.2)',
    hoverBg: 'rgba(255,148,122,0.05)',
  },
  {
    icon: FiCode,
    title: 'Web Development',
    subtitle: 'High-performance websites',
    href: '/services/web-development',
    iconBg: 'rgba(2,82,89,0.15)',
    iconColor: '#025259',
    iconBorder: 'rgba(2,82,89,0.3)',
    hoverBg: 'rgba(2,82,89,0.05)',
  },
  {
    icon: FiCpu,
    title: 'AI-Powered Solutions',
    subtitle: 'GPT & AI integration',
    href: '/services/ai-solutions',
    iconBg: 'rgba(200,168,233,0.1)',
    iconColor: '#C8A8E9',
    iconBorder: 'rgba(200,168,233,0.2)',
    hoverBg: 'rgba(200,168,233,0.05)',
  },
  {
    icon: FiSettings,
    title: 'AI Automation',
    subtitle: 'Workflow automation',
    href: '/services/ai-automation',
    iconBg: 'rgba(225,255,81,0.1)',
    iconColor: '#E1FF51',
    iconBorder: 'rgba(225,255,81,0.2)',
    hoverBg: 'rgba(225,255,81,0.05)',
  },
  {
    icon: FiMail,
    title: 'Email Support',
    subtitle: 'Enterprise email systems',
    href: '/services/email-support',
    iconBg: 'rgba(247,182,56,0.1)',
    iconColor: '#F7B638',
    iconBorder: 'rgba(247,182,56,0.2)',
    hoverBg: 'rgba(247,182,56,0.05)',
  },
  {
    icon: FiMessageCircle,
    title: 'AI Chatbots',
    subtitle: 'Custom chatbot solutions',
    href: '/services/chatbots',
    iconBg: 'rgba(247,182,56,0.1)',
    iconColor: '#F7B638',
    iconBorder: 'rgba(247,182,56,0.2)',
    hoverBg: 'rgba(247,182,56,0.05)',
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
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
        {navLinks.map((link) => {
          if (link.label === 'Services') {
            return (
              <div
                key={link.href}
                ref={servicesRef}
                style={{ position: 'relative' }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {/* Services trigger button */}
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    color: pathname.startsWith('/services') 
                      ? 'white' 
                      : '#A0A0B8',
                    fontSize: '14px',
                    fontWeight: pathname.startsWith('/services') 
                      ? 600 
                      : 400,
                    backgroundColor: pathname.startsWith('/services')
                      ? 'rgba(200,168,233,0.1)'
                      : 'transparent',
                    transition: 'all 200ms ease',
                  }}
                >
                  Services
                  <motion.div
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiChevronDown size={14} />
                  </motion.div>
                </button>

                {/* Dropdown Panel */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ 
                        opacity: 0, 
                        y: -8, 
                        scale: 0.96 
                      }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1 
                      }}
                      exit={{ 
                        opacity: 0, 
                        y: -8, 
                        scale: 0.96 
                      }}
                      transition={{ 
                        duration: 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 8px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '340px',
                        background: 'rgba(8,8,16,0.97)',
                        backdropFilter: 'blur(24px)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '20px',
                        padding: '12px',
                        boxShadow: `
                          0 20px 60px rgba(0,0,0,0.6),
                          0 0 0 1px rgba(255,255,255,0.03),
                          inset 0 1px 0 rgba(255,255,255,0.05)
                        `,
                        zIndex: 1000,
                      }}
                    >
                      {/* Dropdown header */}
                      <div style={{
                        padding: '8px 12px 12px',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}>
                          <div style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: '#E1FF51',
                            boxShadow: '0 0 8px #E1FF51',
                          }} />
                          <span style={{
                            color: '#6B6B8A',
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                          }}>
                            All Services
                          </span>
                        </div>
                        <Link
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            color: '#C8A8E9',
                            fontSize: '12px',
                            fontWeight: 600,
                            textDecoration: 'none',
                          }}
                        >
                          View All
                          <FiArrowRight size={12} />
                        </Link>
                      </div>

                      {/* 6 Service Items */}
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px',
                      }}>
                        {servicesDropdown.map((service, index) => {
                          const ServiceIcon = service.icon
                          return (
                            <motion.div
                              key={service.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: index * 0.04,
                                duration: 0.2
                              }}
                            >
                              <Link
                                href={service.href}
                                onClick={() => setServicesOpen(false)}
                                style={{ textDecoration: 'none' }}
                              >
                                <motion.div
                                  whileHover={{ 
                                    backgroundColor: service.hoverBg,
                                    x: 4,
                                  }}
                                  transition={{ duration: 0.15 }}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '10px 12px',
                                    borderRadius: '12px',
                                    cursor: 'pointer',
                                  }}
                                >
                                  {/* Icon */}
                                  <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '10px',
                                    background: service.iconBg,
                                    border: `1px solid ${service.iconBorder}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    boxShadow: `0 0 12px ${service.iconBg}`,
                                  }}>
                                    <ServiceIcon 
                                      size={16} 
                                      color={service.iconColor}
                                    />
                                  </div>

                                  {/* Text */}
                                  <div style={{ flex: 1 }}>
                                    <div style={{
                                      color: 'white',
                                      fontSize: '13px',
                                      fontWeight: 600,
                                      lineHeight: 1.3,
                                      marginBottom: '2px',
                                    }}>
                                      {service.title}
                                    </div>
                                    <div style={{
                                      color: service.iconColor,
                                      fontSize: '11px',
                                      fontWeight: 500,
                                      opacity: 0.8,
                                    }}>
                                      {service.subtitle}
                                    </div>
                                  </div>

                                  {/* Arrow */}
                                  <FiArrowRight 
                                    size={12} 
                                    color='rgba(255,255,255,0.2)'
                                    style={{ flexShrink: 0 }}
                                  />
                                </motion.div>
                              </Link>
                            </motion.div>
                          )
                        })}
                      </div>

                      {/* Dropdown footer */}
                      <div style={{
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        marginTop: '8px',
                        paddingTop: '10px',
                        paddingLeft: '12px',
                        paddingRight: '12px',
                      }}>
                        <Link
                          href="/contact"
                          onClick={() => setServicesOpen(false)}
                          style={{ textDecoration: 'none' }}
                        >
                          <motion.div
                            whileHover={{ 
                              backgroundColor: 'rgba(200,168,233,0.08)',
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '10px 12px',
                              borderRadius: '12px',
                              border: '1px solid rgba(200,168,233,0.15)',
                              cursor: 'pointer',
                            }}
                          >
                            <div>
                              <div style={{
                                color: 'white',
                                fontSize: '13px',
                                fontWeight: 600,
                                marginBottom: '2px',
                              }}>
                                Not sure which service?
                              </div>
                              <div style={{
                                color: '#6B6B8A',
                                fontSize: '11px',
                              }}>
                                Talk to our AI agent
                              </div>
                            </div>
                            <div style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '8px',
                              background: 'rgba(200,168,233,0.1)',
                              border: '1px solid rgba(200,168,233,0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                              <FiArrowRight 
                                size={12} 
                                color='#C8A8E9'
                              />
                            </div>
                          </motion.div>
                        </Link>
                      </div>

                      {/* Small triangle pointer at top */}
                      <div style={{
                        position: 'absolute',
                        top: '-6px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '12px',
                        height: '12px',
                        background: 'rgba(8,8,16,0.97)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderBottom: 'none',
                        borderRight: 'none',
                        rotate: '45deg',
                      }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          }

          return (
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
          )
        })}
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
