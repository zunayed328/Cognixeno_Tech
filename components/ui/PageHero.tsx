'use client'

import { motion } from 'framer-motion'
import SectionBadge from './SectionBadge'

interface PageHeroProps {
  badge: string
  badgeColor?: string
  title: string
  subtitle?: string
  gradient?: string
  children?: React.ReactNode
}

export default function PageHero({
  badge,
  badgeColor = '#C8A8E9',
  title,
  subtitle,
  gradient = 'linear-gradient(180deg, #1A0030 0%, #080810 100%)',
  children,
}: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32"
      style={{ background: gradient }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${badgeColor}, transparent 70%)` }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <SectionBadge text={badge} color={badgeColor} />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-white tracking-[-1.5px] leading-[1.1]"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-[700px] mx-auto text-lg sm:text-xl text-[#A0A0B8] leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Gradient divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 mx-auto w-[60px] h-[3px] rounded-[2px] origin-center"
          style={{
            background: `linear-gradient(90deg, ${badgeColor}, #F7B638)`,
            boxShadow: `0 0 12px ${badgeColor}80`,
          }}
        />

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
