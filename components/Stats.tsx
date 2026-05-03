'use client'

import { motion, useInView, useMotionValue } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  {
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
    glow: '#FF947A',
    glowColor: 'salmon'
  },
  {
    value: 12,
    suffix: '+',
    label: 'AI Agents Active',
    glow: '#C8A8E9',
    glowColor: 'lavender'
  },
  {
    value: 99.8,
    suffix: '%',
    label: 'Client Satisfaction',
    glow: '#E1FF51',
    glowColor: 'chartreuse'
  },
  {
    value: 8,
    suffix: '',
    label: 'Service Categories',
    glow: '#F7B638',
    glowColor: 'xanthous'
  }
]

const StatCounter = ({ stat, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const motionValue = useMotionValue(0)

  useEffect(() => {
    if (isInView) {
      const controls = motionValue
      let animationFrameId

      const animate = () => {
        const current = motionValue.get()
        if (current < stat.value) {
          const increment = stat.value / 60
          motionValue.set(current + increment)
          animationFrameId = requestAnimationFrame(animate)
        } else {
          motionValue.set(stat.value)
        }
      }

      animationFrameId = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(animationFrameId)
    }
  }, [isInView, stat.value, motionValue])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col items-center justify-center py-12 px-6"
    >
      {index < stats.length - 1 && (
        <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.08)] to-transparent" />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
        className="text-center"
      >
        <div
          className="inline-block text-[56px] font-bold text-white"
          style={{
            textShadow: `0 0 20px ${stat.glow}66, 0 0 40px ${stat.glow}33`
          }}
        >
          <motion.span>
            {isInView ? Math.round(motionValue.get() * 10) / 10 : 0}
          </motion.span>
          {stat.suffix}
        </div>

        <p className="mt-4 text-sm text-[#A0A0B8]">{stat.label}</p>
      </motion.div>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.12)] to-transparent"
          />

          <div className="glass-panel rounded-2xl p-0 overflow-hidden border-b border-[rgba(255,255,255,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <StatCounter key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.12)] to-transparent"
          />
        </div>
      </div>
    </section>
  )
}
