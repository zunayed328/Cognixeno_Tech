'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedLogoProps {
  size?: number
  showGlow?: boolean
  animate?: boolean
  className?: string
  showRings?: boolean
}

/* Circuit dot that travels along a path */
function CircuitDot({
  path,
  color,
  duration,
  delay,
  dotSize,
}: {
  path: string
  color: string
  duration: number
  delay: number
  dotSize: number
}) {
  return (
    <motion.circle
      r={dotSize}
      fill={color}
      filter="url(#dotGlow)"
      initial={{ offsetDistance: '0%', opacity: 0 }}
      animate={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
      transition={{
        offsetDistance: { duration, delay, repeat: Infinity, ease: 'linear' },
        opacity: { duration, delay, repeat: Infinity, times: [0, 0.1, 0.85, 1] },
      }}
      style={{
        offsetPath: `path('${path}')`,
        offsetRotate: '0deg',
        willChange: 'transform, opacity',
      }}
    />
  )
}

export default function AnimatedLogo({
  size = 40,
  showGlow = true,
  animate = true,
  className = '',
  showRings = false,
}: AnimatedLogoProps) {
  const controls = useAnimation()
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!animate) return
    setMounted(true)
    controls.start('visible')
  }, [animate, controls])

  const drawTransition = (delay: number) => ({
    pathLength: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
    opacity: { duration: 0.2, delay },
  })

  const path1 = 'M 20 20 L 80 80'
  const path2 = 'M 80 20 L 20 80'
  const dotSize = size > 80 ? 3 : 2

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size, willChange: 'transform' }}
      whileHover={{ scale: 1.15 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic gradient */}
          <linearGradient id="metallicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8E8E8" />
            <stop offset="25%" stopColor="#C0C0C0" />
            <stop offset="50%" stopColor="#A8A8A8" />
            <stop offset="75%" stopColor="#8A8A8A" />
            <stop offset="100%" stopColor="#E8E8E8" />
          </linearGradient>

          {/* Neon glow gradient */}
          <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BF00FF" />
            <stop offset="50%" stopColor="#8B00FF" />
            <stop offset="100%" stopColor="#FF00FF" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0.2  0 0 1 0 0  0 0 1 0 0.5  0 0 0 1.2 0"
              result="coloredBlur"
            />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Dot glow */}
          <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Layer 2: Neon glow X (behind base) */}
        {showGlow && animate && (
          <>
            <motion.path
              d={path1}
              stroke="url(#neonGrad)"
              strokeWidth={20}
              strokeLinecap="round"
              filter="url(#glowFilter)"
              initial={{ opacity: 0, pathLength: 1 }}
              animate={mounted ? {
                opacity: isHovered
                  ? [0.6, 1, 0.8, 1, 0.6]
                  : [0, 0.5, 0.25, 0.6, 0],
              } : { opacity: 0 }}
              transition={{
                opacity: {
                  duration: isHovered ? 1.5 : 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: animate ? 1.0 : 0,
                },
              }}
              style={{ willChange: 'opacity' }}
            />
            <motion.path
              d={path2}
              stroke="url(#neonGrad)"
              strokeWidth={20}
              strokeLinecap="round"
              filter="url(#glowFilter)"
              initial={{ opacity: 0, pathLength: 1 }}
              animate={mounted ? {
                opacity: isHovered
                  ? [0.8, 0.6, 1, 0.6, 0.8]
                  : [0, 0.4, 0.6, 0.3, 0],
              } : { opacity: 0 }}
              transition={{
                opacity: {
                  duration: isHovered ? 1.5 : 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: animate ? 1.2 : 0,
                },
              }}
              style={{ willChange: 'opacity' }}
            />
          </>
        )}

        {/* Layer 1: Base metallic X — draw animation */}
        <motion.path
          d={path1}
          stroke="url(#metallicGrad)"
          strokeWidth={14}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 1 } : { pathLength: 1, opacity: 1 }}
          transition={drawTransition(0)}
          style={{ willChange: 'stroke-dashoffset, opacity' }}
        />
        <motion.path
          d={path2}
          stroke="url(#metallicGrad)"
          strokeWidth={14}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 1 } : { pathLength: 1, opacity: 1 }}
          transition={drawTransition(0.3)}
          style={{ willChange: 'stroke-dashoffset, opacity' }}
        />

        {/* Layer 3: Circuit dot particles */}
        {animate && mounted && (
          <>
            <CircuitDot path={path1} color="#C8A8E9" duration={2} delay={1.5} dotSize={dotSize} />
            <CircuitDot path={path1} color="#FF947A" duration={2.5} delay={2.0} dotSize={dotSize} />
            <CircuitDot path={path2} color="#E1FF51" duration={1.8} delay={1.8} dotSize={dotSize} />
            <CircuitDot path={path2} color="#F7B638" duration={2.2} delay={2.3} dotSize={dotSize} />
          </>
        )}

        {/* Layer 4: Rotating outer rings (Hero only) */}
        {showRings && (
          <>
            <motion.circle
              cx={50} cy={50} r={45}
              stroke="rgba(200,168,233,0.2)"
              strokeWidth={0.5}
              strokeDasharray="4 8"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '50px 50px', willChange: 'transform' }}
            />
            <motion.circle
              cx={50} cy={50} r={42}
              stroke="rgba(255,148,122,0.15)"
              strokeWidth={0.5}
              strokeDasharray="2 12"
              fill="none"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '50px 50px', willChange: 'transform' }}
            />
          </>
        )}
      </svg>
    </motion.div>
  )
}
