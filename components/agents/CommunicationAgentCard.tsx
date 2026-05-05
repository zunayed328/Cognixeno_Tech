'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const channels = [
  { name: 'Email', icon: '📧', count: 247, color: '#F7B638', pos: { x: 30, y: 30 } },
  { name: 'Chat', icon: '💬', count: 1204, color: '#F7B638', pos: { x: 240, y: 30 } },
  { name: 'SMS', icon: '📱', count: 89, color: '#F7B638', pos: { x: 30, y: 140 } },
  { name: 'Calendar', icon: '📅', count: 34, color: '#F7B638', pos: { x: 240, y: 140 } },
]

export default function CommunicationAgentCard() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-30px' })
  const prefersReducedMotion = useReducedMotion()
  const [built, setBuilt] = useState(false)
  const [counts, setCounts] = useState(channels.map(c => c.count))

  useEffect(() => {
    if (!isInView) { setBuilt(false); setCounts(channels.map(c => c.count)); return }
    if (prefersReducedMotion) { setBuilt(true); return }
    const t = setTimeout(() => setBuilt(true), 600)
    return () => clearTimeout(t)
  }, [isInView, prefersReducedMotion])

  // Increment counters
  useEffect(() => {
    if (!built || prefersReducedMotion) return
    const iv = setInterval(() => {
      setCounts(prev => prev.map((c, i) => c + [3, 8, 1, 1][i]))
    }, 2000)
    return () => clearInterval(iv)
  }, [built, prefersReducedMotion])

  const cx = 140, cy = 95

  return (
    <div ref={ref} style={{ width: '100%', maxWidth: 280, willChange: 'transform' }}>
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 12,
          border: '1px solid rgba(247,182,56,0.15)',
          background: 'rgba(8,8,16,0.9)',
          boxShadow: '0 15px 50px rgba(0,0,0,0.5)',
          height: 200,
        }}
      >
        <svg viewBox="0 0 280 190" width="100%" height="100%" className="absolute inset-0">
          <defs>
            <filter id="commGlow">
              <feGaussianBlur stdDeviation="4" />
            </filter>
            <radialGradient id="hubGrad">
              <stop offset="0%" stopColor="rgba(247,182,56,0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* Center hub */}
          <motion.circle
            cx={cx} cy={cy} r={28}
            fill="url(#hubGrad)"
            stroke="rgba(247,182,56,0.3)"
            strokeWidth={1.5}
            animate={built && !prefersReducedMotion
              ? { scale: [1, 1.08, 1] }
              : {}
            }
            transition={{ duration: 2, repeat: Infinity }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />

          {/* Spinning ring */}
          <motion.circle
            cx={cx} cy={cy} r={35}
            fill="none"
            stroke="rgba(247,182,56,0.12)"
            strokeWidth={0.8}
            strokeDasharray="5 7"
            animate={built && !prefersReducedMotion ? { rotate: 360 } : {}}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />

          <text x={cx} y={cy - 2} textAnchor="middle" fill="#F7B638" fontSize={7} fontWeight={800}>AI</text>
          <text x={cx} y={cy + 8} textAnchor="middle" fill="rgba(247,182,56,0.5)" fontSize={5.5} fontWeight={600}>HUB</text>

          {/* Channel nodes + connections */}
          {channels.map((ch, i) => {
            const ax = ch.pos.x + 20
            const ay = ch.pos.y + 20
            return (
              <g key={ch.name}>
                {/* Connection line */}
                <motion.line
                  x1={cx} y1={cy} x2={ax} y2={ay}
                  stroke="rgba(247,182,56,0.12)"
                  strokeWidth={1}
                  strokeDasharray="3 5"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                />

                {/* Message traveling to hub */}
                {built && !prefersReducedMotion && (
                  <motion.circle
                    r={3}
                    fill={ch.color}
                    filter="url(#commGlow)"
                    initial={{ cx: ax, cy: ay, opacity: 0 }}
                    animate={{
                      cx: [ax, cx],
                      cy: [ay, cy],
                      opacity: [0, 1, 0.8, 0],
                    }}
                    transition={{ duration: 1.5, delay: i * 0.8, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                  />
                )}

                {/* Response traveling from hub */}
                {built && !prefersReducedMotion && (
                  <motion.circle
                    r={2.5}
                    fill={ch.color}
                    filter="url(#commGlow)"
                    initial={{ cx: cx, cy: cy, opacity: 0 }}
                    animate={{
                      cx: [cx, ax],
                      cy: [cy, ay],
                      opacity: [0, 0.8, 1, 0],
                    }}
                    transition={{ duration: 1.2, delay: 2 + i * 0.8, repeat: Infinity, repeatDelay: 3.5 }}
                  />
                )}

                {/* Channel node */}
                <motion.circle
                  cx={ax} cy={ay} r={18}
                  fill="rgba(247,182,56,0.05)"
                  stroke="rgba(247,182,56,0.25)"
                  strokeWidth={1}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ type: 'spring', delay: 0.3 + i * 0.1 }}
                  style={{ transformOrigin: `${ax}px ${ay}px` }}
                />

                {/* Channel icon */}
                <text x={ax} y={ay + 4} textAnchor="middle" fontSize={12}>{ch.icon}</text>
              </g>
            )
          })}
        </svg>

        {/* Channel counter labels */}
        {channels.map((ch, i) => (
          <motion.div
            key={`label-${ch.name}`}
            className="absolute text-center pointer-events-none"
            style={{
              left: ch.pos.x - 2,
              top: ch.pos.y + 42,
              width: 44,
            }}
            initial={{ opacity: 0, y: 5 }}
            animate={built ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <span className="text-[6px] font-mono font-bold block" style={{ color: 'rgba(247,182,56,0.7)' }}>
              {counts[i].toLocaleString()}
            </span>
            <span className="text-[5px] font-semibold block" style={{ color: 'rgba(247,182,56,0.4)' }}>
              {ch.name}
            </span>
          </motion.div>
        ))}

        {/* Hub processing pulse */}
        {built && !prefersReducedMotion && (
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              left: cx - 20,
              top: cy - 20,
              width: 40,
              height: 40,
              border: '1px solid rgba(247,182,56,0.1)',
            }}
            animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        )}
      </div>
    </div>
  )
}
