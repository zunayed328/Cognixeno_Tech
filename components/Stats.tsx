'use client'

import { motion, useInView, useMotionValue } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', accent: '#FF947A' },
  { value: 12, suffix: '+', label: 'AI Agents Active', accent: '#C8A8E9' },
  { value: 99.8, suffix: '%', label: 'Client Satisfaction', accent: '#E1FF51' },
  { value: 8, suffix: '', label: 'Service Categories', accent: '#F7B638' },
]

const StatCounter = ({ stat, index }: { stat: typeof stats[number]; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = stat.value
    const duration = 2000
    const startTime = performance.now()

    const animate = (time: number) => {
      const elapsed = time - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      const current = start + (end - start) * eased
      setDisplayValue(Math.round(current * 10) / 10)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isInView, stat.value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col items-center justify-center py-16 px-10"
    >
      {/* Divider */}
      {index < stats.length - 1 && (
        <div className="absolute right-0 top-1/4 bottom-1/4 w-px" style={{ background: 'rgba(255,255,255,0.04)' }} />
      )}

      {/* Number */}
      <div
        className="text-[60px] font-black leading-none tracking-[-2px]"
        style={{
          color: stat.accent,
          textShadow: `0 0 30px ${stat.accent}80, 0 0 60px ${stat.accent}33`,
        }}
      >
        {Number.isInteger(stat.value) ? Math.round(displayValue) : displayValue.toFixed(1)}
        {stat.suffix}
      </div>

      {/* Accent underline */}
      <div
        className="mt-3 w-10 h-[3px] rounded-[2px]"
        style={{
          background: stat.accent,
          boxShadow: `0 0 12px ${stat.accent}B3`,
        }}
      />

      {/* Label */}
      <p className="mt-3 text-[13px] font-medium text-[rgba(255,255,255,0.4)] tracking-[1px] uppercase">
        {stat.label}
      </p>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section
      className="relative py-16 px-6 overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.015)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* Subtle center line */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 opacity-10" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,168,233,0.5), transparent)' }} />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCounter key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
