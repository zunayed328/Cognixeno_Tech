'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  accentColor?: string
  className?: string
  hover?: boolean
}

export default function GlassCard({ children, accentColor = '#C8A8E9', className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, transition: { duration: 0.35 } } : undefined}
      className={`group relative overflow-hidden ${className}`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '20px',
        padding: '32px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.2), 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        transition: 'all 350ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Left border accent */}
      <div
        className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-r-sm opacity-70 group-hover:opacity-100"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${accentColor} 50%, transparent 100%)`,
          boxShadow: `2px 0 12px ${accentColor}66`,
          transition: 'opacity 300ms',
        }}
      />
      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-[120px] h-[120px] pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, ${accentColor}14, transparent 70%)` }}
      />
      {/* Bottom shine */}
      <div
        className="absolute bottom-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}4D, transparent)`,
          transition: 'opacity 300ms',
        }}
      />
      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          border: `1px solid ${accentColor}40`,
          boxShadow: `0 0 40px ${accentColor}15`,
          transition: 'opacity 350ms',
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
