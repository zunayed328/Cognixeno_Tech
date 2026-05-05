'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const PAGE_NAMES: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/services/mobile-app': 'Mobile Apps',
  '/services/web-development': 'Web Development',
  '/services/ai-solutions': 'AI Solutions',
  '/services/ai-automation': 'AI Automation',
  '/services/email-support': 'Email Support',
  '/services/chatbots': 'AI Chatbots',
  '/ai-agents': 'AI Agents',
  '/portfolio': 'Portfolio',
  '/pricing': 'Pricing',
  '/contact': 'Contact',
}

const ACCENT_COLORS: Record<string, string> = {
  '/': '#C8A8E9',
  '/about': '#C8A8E9',
  '/services': '#E1FF51',
  '/services/mobile-app': '#FF947A',
  '/services/web-development': '#025259',
  '/services/ai-solutions': '#C8A8E9',
  '/services/ai-automation': '#E1FF51',
  '/services/email-support': '#F7B638',
  '/services/chatbots': '#F7B638',
  '/ai-agents': '#E1FF51',
  '/portfolio': '#FF947A',
  '/pricing': '#C8A8E9',
  '/contact': '#F7B638',
}

function CurtainOverlay({ 
  isVisible, 
  pathname 
}: { 
  isVisible: boolean
  pathname: string 
}) {
  const pageName = PAGE_NAMES[pathname] || 'Loading'
  const accentColor = ACCENT_COLORS[pathname] || '#C8A8E9'

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="curtain"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          {/* Main curtain panel */}
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            exit={{ clipPath: 'inset(0 0 0 100%)' }}
            transition={{
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                linear-gradient(
                  135deg,
                  #1A0030 0%,
                  #080810 40%,
                  #00272C 100%
                )
              `,
            }}
          />

          {/* Grid lines on curtain */}
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            exit={{ clipPath: 'inset(0 0 0 100%)' }}
            transition={{
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(
                  rgba(200,168,233,0.03) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(200,168,233,0.03) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Center content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            {/* Outer glow rings */}
            <div style={{ position: 'relative' }}>

              {/* Rotating ring 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  position: 'absolute',
                  inset: '-20px',
                  borderRadius: '50%',
                  border: `1px dashed ${accentColor}30`,
                }}
              />

              {/* Rotating ring 2 counter */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  position: 'absolute',
                  inset: '-30px',
                  borderRadius: '50%',
                  border: `1px dashed rgba(255,148,122,0.2)`,
                }}
              />

              {/* Pulse glow behind logo */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  background: `radial-gradient(
                    circle,
                    ${accentColor}20 0%,
                    transparent 70%
                  )`,
                }}
              />

              {/* Logo X SVG */}
              <svg
                width="64"
                height="64"
                viewBox="0 0 100 100"
                style={{
                  filter: `
                    drop-shadow(0 0 15px ${accentColor}80)
                    drop-shadow(0 0 30px rgba(139,0,255,0.4))
                  `,
                  display: 'block',
                }}
              >
                <defs>
                  <linearGradient
                    id="curtainXGrad"
                    x1="0%" y1="0%"
                    x2="100%" y2="100%"
                  >
                    <stop offset="0%" stopColor="#E8E8E8" />
                    <stop offset="50%" stopColor="#C0C0C0" />
                    <stop offset="100%" stopColor="#6A6A6A" />
                  </linearGradient>
                  <linearGradient
                    id="curtainGlowGrad"
                    x1="0%" y1="0%"
                    x2="100%" y2="100%"
                  >
                    <stop offset="0%" stopColor="#BF00FF" />
                    <stop offset="100%" stopColor="#FF00FF" />
                  </linearGradient>
                </defs>

                {/* Glow layer */}
                <motion.line
                  x1="15" y1="15" x2="85" y2="85"
                  stroke="url(#curtainGlowGrad)"
                  strokeWidth="18"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                />
                <motion.line
                  x1="85" y1="15" x2="15" y2="85"
                  stroke="url(#curtainGlowGrad)"
                  strokeWidth="18"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                />

                {/* Main metallic X */}
                <motion.line
                  x1="15" y1="15" x2="85" y2="85"
                  stroke="url(#curtainXGrad)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.25,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
                <motion.line
                  x1="85" y1="15" x2="15" y2="85"
                  stroke="url(#curtainXGrad)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.35,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />

                {/* Circuit dots traveling */}
                <motion.circle
                  r="3"
                  fill={accentColor}
                  filter={`drop-shadow(0 0 4px ${accentColor})`}
                  animate={{
                    offsetDistance: ['0%', '100%'],
                  }}
                  style={{
                    offsetPath: "path('M 15 15 L 85 85')",
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <motion.circle
                  r="3"
                  fill="#FF947A"
                  filter="drop-shadow(0 0 4px #FF947A)"
                  animate={{
                    offsetDistance: ['100%', '0%'],
                  }}
                  style={{
                    offsetPath: "path('M 85 15 L 15 85')",
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </svg>
            </div>

            {/* Page name */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ delay: 0.35, duration: 0.25 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{
                color: '#6B6B8A',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
              }}>
                Navigating to
              </span>
              <span style={{
                color: 'white',
                fontSize: '18px',
                fontWeight: 800,
                letterSpacing: '1px',
              }}>
                {pageName}
              </span>
              <div style={{
                width: '40px',
                height: '2px',
                borderRadius: '1px',
                background: accentColor,
                boxShadow: `0 0 8px ${accentColor}`,
              }} />
            </motion.div>

            {/* Three pulsing dots */}
            <div style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}>
              {['#C8A8E9', '#FF947A', '#E1FF51'].map(
                (color, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.6, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: 'easeInOut',
                    }}
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: color,
                      boxShadow: `0 0 8px ${color}`,
                    }}
                  />
                )
              )}
            </div>
          </motion.div>

          {/* Horizontal scan line */}
          <motion.div
            initial={{ top: '-2px', opacity: 0 }}
            animate={{
              top: ['0%', '100%'],
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              height: '2px',
              background: `linear-gradient(
                90deg,
                transparent,
                ${accentColor},
                transparent
              )`,
              boxShadow: `0 0 20px ${accentColor}80`,
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          {/* Corner accents */}
          {[
            { top: '20px', left: '20px', 
              border: 'top left' },
            { top: '20px', right: '20px', 
              border: 'top right' },
            { bottom: '20px', left: '20px', 
              border: 'bottom left' },
            { bottom: '20px', right: '20px', 
              border: 'bottom right' },
          ].map((corner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                borderColor: `${accentColor}60`,
                borderStyle: 'solid',
                borderWidth: 0,
                borderTopWidth: corner.border.includes('top') 
                  ? '2px' : 0,
                borderBottomWidth: corner.border
                  .includes('bottom') ? '2px' : 0,
                borderLeftWidth: corner.border.includes('left') 
                  ? '2px' : 0,
                borderRightWidth: corner.border.includes('right') 
                  ? '2px' : 0,
                borderRadius: corner.border.includes('top left')
                  ? '4px 0 0 0'
                  : corner.border.includes('top right')
                  ? '0 4px 0 0'
                  : corner.border.includes('bottom left')
                  ? '0 0 0 4px'
                  : '0 0 4px 0',
                ...corner,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [showCurtain, setShowCurtain] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)
  const [pendingChildren, setPendingChildren] = useState(children)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false)
      return
    }

    setPendingChildren(children)
    setShowCurtain(true)

    const revealTimer = setTimeout(() => {
      setDisplayChildren(children)
    }, 400)

    const hideTimer = setTimeout(() => {
      setShowCurtain(false)
    }, 800)

    return () => {
      clearTimeout(revealTimer)
      clearTimeout(hideTimer)
    }
  }, [pathname])

  useEffect(() => {
    if (!showCurtain) {
      setDisplayChildren(children)
    }
  }, [children, showCurtain])

  return (
    <>
      <CurtainOverlay
        isVisible={showCurtain}
        pathname={pathname}
      />

      <motion.div
        key={pathname}
        initial={
          isFirstLoad
            ? { opacity: 1 }
            : { opacity: 0, y: 16, filter: 'blur(4px)' }
        }
        animate={{ 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)' 
        }}
        transition={{
          duration: 0.4,
          delay: isFirstLoad ? 0 : 0.45,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {displayChildren}
      </motion.div>
    </>
  )
}
