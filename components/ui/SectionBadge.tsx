'use client'

import { motion } from 'framer-motion'

interface SectionBadgeProps {
  text: string
  color?: string
}

export default function SectionBadge({ text, color = '#C8A8E9' }: SectionBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
      style={{
        background: `${color}14`,
        border: `1px solid ${color}33`,
        boxShadow: `0 0 20px ${color}1A`,
      }}
    >
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
      <span
        className="text-[11px] font-bold tracking-[2px] uppercase"
        style={{ color }}
      >
        {text}
      </span>
    </motion.div>
  )
}
