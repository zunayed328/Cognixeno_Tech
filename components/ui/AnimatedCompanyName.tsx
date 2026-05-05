'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'

interface AnimatedCompanyNameProps {
  size?: 'navbar' | 'hero'
  animate?: boolean
  className?: string
}

const WORD_1 = 'COGNIXENO'
const WORD_2 = 'TECH'
const ALL_CHARS = [...WORD_1, ' ', ...WORD_2]
const X_INDEX = WORD_1.indexOf('X')

/* Glitch layer for the X letter */
function GlitchX({ fontSize, isGlitching }: { fontSize: string; isGlitching: boolean }) {
  if (!isGlitching) return null
  return (
    <>
      {/* Red channel */}
      <motion.span
        className="absolute inset-0 select-none pointer-events-none"
        style={{
          color: '#FF947A',
          opacity: 0.8,
          clipPath: 'inset(30% 0 30% 0)',
          fontSize,
          fontWeight: 900,
        }}
        animate={{ x: [0, 4, -3, 2, 0] }}
        transition={{ duration: 0.3, ease: 'linear' }}
        aria-hidden
      >
        X
      </motion.span>
      {/* Blue channel */}
      <motion.span
        className="absolute inset-0 select-none pointer-events-none"
        style={{
          color: '#C8A8E9',
          opacity: 0.8,
          clipPath: 'inset(60% 0 10% 0)',
          fontSize,
          fontWeight: 900,
        }}
        animate={{ x: [0, -3, 4, -2, 0] }}
        transition={{ duration: 0.3, ease: 'linear' }}
        aria-hidden
      >
        X
      </motion.span>
    </>
  )
}

export default function AnimatedCompanyName({
  size = 'navbar',
  animate = true,
  className = '',
}: AnimatedCompanyNameProps) {
  const [mounted, setMounted] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    if (animate) setMounted(true)
  }, [animate])

  // Random glitch trigger for X letter
  const triggerGlitch = useCallback(() => {
    if (!animate) return
    setIsGlitching(true)
    setTimeout(() => setIsGlitching(false), 300)
  }, [animate])

  useEffect(() => {
    if (!animate) return
    const scheduleGlitch = () => {
      const delay = 4000 + Math.random() * 4000 // 4-8 seconds
      const timer = setTimeout(() => {
        triggerGlitch()
        scheduleGlitch()
      }, delay)
      return timer
    }
    const initialDelay = setTimeout(() => {
      const timer = scheduleGlitch()
      return () => clearTimeout(timer)
    }, 2000)
    return () => clearTimeout(initialDelay)
  }, [animate, triggerGlitch])

  const isNavbar = size === 'navbar'

  // Navbar version
  if (isNavbar) {
    return (
      <motion.div
        className={`hidden sm:flex items-center cursor-pointer select-none ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ willChange: 'transform' }}
      >
        {ALL_CHARS.map((char, i) => {
          const isX = char === 'X' && i === X_INDEX
          const isSpace = char === ' '

          if (isSpace) {
            return <span key={`space-${i}`} style={{ width: 4 }} />
          }

          return (
            <motion.span
              key={`${char}-${i}`}
              className="inline-block relative"
              initial={animate ? { opacity: 0, y: -20, filter: 'blur(4px)' } : false}
              animate={
                mounted
                  ? {
                      opacity: 1,
                      y: isHovered ? -3 : 0,
                      filter: 'blur(0px)',
                    }
                  : undefined
              }
              transition={{
                opacity: { duration: 0.4, delay: i * 0.04, ease: [0, 0, 0.2, 1] },
                y: {
                  duration: 0.3,
                  delay: isHovered ? i * 0.025 : 0,
                  type: 'spring',
                  stiffness: 500,
                  damping: 15,
                },
                filter: { duration: 0.4, delay: i * 0.04 },
              }}
              style={{
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: '0.25em',
                willChange: 'transform, opacity',
                ...(isX
                  ? {
                      background: 'linear-gradient(135deg, #C8A8E9, #FF947A)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: 'none',
                      filter: isGlitching ? 'none' : undefined,
                    }
                  : { color: '#fff' }),
              }}
            >
              {/* Shimmer wave for non-X letters */}
              {!isX && mounted && (
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  animate={{ backgroundPosition: ['-200% 0', '200% 0'] }}
                  transition={{
                    duration: 3,
                    delay: 2 + i * 0.15,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'linear',
                  }}
                  aria-hidden
                >
                  {char}
                </motion.span>
              )}

              {/* X glitch layers */}
              {isX && <GlitchX fontSize="14px" isGlitching={isGlitching} />}

              {char}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  // Hero version
  const heroChars1 = [...WORD_1]
  const heroChars2 = [...WORD_2]
  const totalLetters = heroChars1.length + heroChars2.length

  return (
    <motion.div
      className={`flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-4 select-none ${className}`}
      style={{ perspective: 1000, willChange: 'transform' }}
    >
      {/* COGNIXENO */}
      <div className="flex items-center">
        {heroChars1.map((char, i) => {
          const isX = char === 'X'

          return (
            <motion.span
              key={`h1-${i}`}
              className="inline-block relative"
              initial={
                animate
                  ? { opacity: 0, y: 20, rotateX: -90, filter: 'blur(8px)' }
                  : false
              }
              animate={
                mounted
                  ? { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }
                  : undefined
              }
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0, 0, 0.2, 1],
                type: 'spring',
                stiffness: 100,
                damping: 12,
              }}
              style={{
                fontSize: isX ? 'clamp(50px, 8.4vw, 100px)' : 'clamp(42px, 7vw, 84px)',
                fontWeight: 900,
                letterSpacing: '0.05em',
                transformStyle: 'preserve-3d' as const,
                willChange: 'transform, opacity',
                ...(isX
                  ? {
                      background:
                        'linear-gradient(135deg, #C8A8E9 0%, #FF00FF 50%, #FF947A 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: 'none',
                    }
                  : { color: '#fff' }),
              }}
            >
              {char}

              {/* X glow shadow (layered behind using pseudo-like approach) */}
              {isX && mounted && (
                <motion.span
                  className="absolute inset-0 pointer-events-none select-none"
                  style={{
                    background:
                      'linear-gradient(135deg, #C8A8E9, #FF00FF, #FF947A)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'blur(12px)',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    letterSpacing: 'inherit',
                  }}
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.5,
                  }}
                  aria-hidden
                >
                  X
                </motion.span>
              )}

              {/* Glitch effect on X */}
              {isX && (
                <GlitchX
                  fontSize="clamp(50px, 8.4vw, 100px)"
                  isGlitching={isGlitching}
                />
              )}
            </motion.span>
          )
        })}
      </div>

      {/* TECH */}
      <div className="flex items-center">
        {heroChars2.map((char, i) => {
          const globalIndex = heroChars1.length + i
          return (
            <motion.span
              key={`h2-${i}`}
              className="inline-block"
              initial={
                animate
                  ? { opacity: 0, y: 20, rotateX: -90, filter: 'blur(8px)' }
                  : false
              }
              animate={
                mounted
                  ? { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }
                  : undefined
              }
              transition={{
                duration: 0.6,
                delay: globalIndex * 0.06,
                ease: [0, 0, 0.2, 1],
                type: 'spring',
                stiffness: 100,
                damping: 12,
              }}
              style={{
                fontSize: 'clamp(30px, 5vw, 60px)',
                fontWeight: 900,
                letterSpacing: '0.12em',
                background: 'linear-gradient(90deg, #6B6B8A, #A0A0B8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity',
              }}
            >
              {char}
            </motion.span>
          )
        })}
      </div>

      {/* Scanline effect across entire hero text */}
      {mounted && animate && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, transparent 48%, rgba(200,168,233,0.3) 49%, rgba(200,168,233,0.3) 51%, transparent 52%, transparent 100%)',
            backgroundSize: '100% 100%',
          }}
          initial={{ y: '-100%' }}
          animate={{ y: '200%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'linear',
            delay: 2,
          }}
          aria-hidden
        />
      )}
    </motion.div>
  )
}
