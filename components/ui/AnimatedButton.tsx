'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  color?: string
  href?: string
  onClick?: () => void
  className?: string
  gradientTo?: string
}

export default function AnimatedButton({
  children,
  variant = 'primary',
  color = '#C8A8E9',
  href,
  onClick,
  className = '',
  gradientTo,
}: AnimatedButtonProps) {
  const isPrimary = variant === 'primary'
  const to = gradientTo || color

  const style = isPrimary
    ? {
        background: `linear-gradient(135deg, ${color}, ${to})`,
        color: '#080810',
        border: 'none',
        boxShadow: `0 4px 15px ${color}4D`,
      }
    : {
        background: 'transparent',
        color,
        border: `1px solid ${color}66`,
        boxShadow: 'none',
      }

  const content = (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: `0 6px 25px ${color}66` }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden rounded-xl px-6 py-3 text-sm font-bold tracking-wide cursor-pointer ${className}`}
      style={{ ...style, transition: 'all 300ms ease' }}
      onClick={onClick}
    >
      {isPrimary && (
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)' }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}
