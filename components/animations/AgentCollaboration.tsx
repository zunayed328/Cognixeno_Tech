'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const hubAgents = [
  { name: 'Dev', color: '#FF947A', icon: '⚡', angle: 0 },
  { name: 'Design', color: '#C8A8E9', icon: '🎨', angle: 60 },
  { name: 'Auto', color: '#E1FF51', icon: '⚙️', angle: 120 },
  { name: 'Comm', color: '#F7B638', icon: '💬', angle: 180 },
  { name: 'Research', color: '#43A8A0', icon: '🔍', angle: 240 },
  { name: 'Quality', color: '#C74B16', icon: '✓', angle: 300 },
]

export default function AgentCollaboration() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const prefersReducedMotion = useReducedMotion()
  const cx = 200, cy = 200, radius = 140

  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ width: 400, height: 400, willChange: 'transform' }}>
      <svg width={400} height={400} viewBox="0 0 400 400" fill="none">
        <defs>
          <radialGradient id="coreGrad">
            <stop offset="0%" stopColor="rgba(200,168,233,0.15)" />
            <stop offset="50%" stopColor="rgba(225,255,81,0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="coreGlow">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="nodeGlowCollab">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Background rings */}
        {[80, 110, 140].map((r, i) => (
          <motion.circle
            key={`ring-${i}`}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke="rgba(200,168,233,0.04)"
            strokeWidth={0.5}
            strokeDasharray="4 8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
          />
        ))}

        {/* Center hub glow */}
        <motion.circle
          cx={cx} cy={cy} r={45}
          fill="url(#coreGrad)"
          filter="url(#coreGlow)"
          animate={isInView && !prefersReducedMotion ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* Center hub circle */}
        <motion.circle
          cx={cx} cy={cy} r={34}
          fill="rgba(200,168,233,0.05)"
          stroke="rgba(200,168,233,0.25)"
          strokeWidth={1.5}
          animate={isInView && !prefersReducedMotion
            ? { scale: [1, 1.05, 1] }
            : {}
          }
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* Rotating outer ring */}
        <motion.circle
          cx={cx} cy={cy} r={44}
          fill="none"
          stroke="rgba(200,168,233,0.12)"
          strokeWidth={0.8}
          strokeDasharray="6 8"
          animate={isInView && !prefersReducedMotion ? { rotate: 360 } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* Center label */}
        <text x={cx} y={cy - 5} textAnchor="middle" fill="#C8A8E9" fontSize={7} fontWeight={800} letterSpacing="1">COGNIXENO</text>
        <text x={cx} y={cy + 7} textAnchor="middle" fill="rgba(200,168,233,0.5)" fontSize={6} fontWeight={600}>AI CORE</text>

        {/* Agent nodes + connections */}
        {hubAgents.map((agent, i) => {
          const rad = (agent.angle * Math.PI) / 180
          const ax = cx + radius * Math.cos(rad)
          const ay = cy + radius * Math.sin(rad)

          return (
            <g key={agent.name}>
              {/* Connection line */}
              <motion.line
                x1={cx} y1={cy} x2={ax} y2={ay}
                stroke={`${agent.color}20`}
                strokeWidth={1.5}
                strokeDasharray="4 6"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              />

              {/* Active glow line overlay */}
              {isInView && !prefersReducedMotion && (
                <motion.line
                  x1={cx} y1={cy} x2={ax} y2={ay}
                  stroke={`${agent.color}30`}
                  strokeWidth={2}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 3, delay: 2 + i * 0.5, repeat: Infinity, repeatDelay: 2 }}
                />
              )}

              {/* Traveling pulse — outward */}
              {isInView && !prefersReducedMotion && (
                <motion.circle
                  r={3.5}
                  fill={agent.color}
                  filter="url(#nodeGlowCollab)"
                  initial={{ cx: cx, cy: cy, opacity: 0 }}
                  animate={{
                    cx: [cx, ax],
                    cy: [cy, ay],
                    opacity: [0, 1, 0.8, 0],
                  }}
                  transition={{ duration: 1.8, delay: 1.5 + i * 0.6, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                />
              )}

              {/* Traveling pulse — return */}
              {isInView && !prefersReducedMotion && (
                <motion.circle
                  r={3}
                  fill={agent.color}
                  filter="url(#nodeGlowCollab)"
                  initial={{ cx: ax, cy: ay, opacity: 0 }}
                  animate={{
                    cx: [ax, cx],
                    cy: [ay, cy],
                    opacity: [0, 0.8, 1, 0],
                  }}
                  transition={{ duration: 1.5, delay: 3 + i * 0.6, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut' }}
                />
              )}

              {/* Agent node - outer glow */}
              <motion.circle
                cx={ax} cy={ay} r={26}
                fill={`${agent.color}08`}
                filter="url(#nodeGlowCollab)"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                style={{ transformOrigin: `${ax}px ${ay}px` }}
              />

              {/* Agent node - core */}
              <motion.circle
                cx={ax} cy={ay} r={22}
                fill={`${agent.color}0A`}
                stroke={`${agent.color}40`}
                strokeWidth={1.5}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.4 + i * 0.1 }}
                style={{ transformOrigin: `${ax}px ${ay}px` }}
              />

              {/* Agent label */}
              <text x={ax} y={ay + 3} textAnchor="middle" fill={agent.color} fontSize={8} fontWeight={700}>
                {agent.name}
              </text>

              {/* Status dot */}
              <motion.circle
                cx={ax + 16} cy={ay - 16} r={3}
                fill="#22c55e"
                animate={isInView && !prefersReducedMotion ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                style={{ transformOrigin: `${ax + 16}px ${ay - 16}px` }}
              />
            </g>
          )
        })}

        {/* Central completion pulse - radiates outward periodically */}
        {isInView && !prefersReducedMotion && (
          <motion.circle
            cx={cx} cy={cy}
            fill="none"
            stroke="rgba(200,168,233,0.15)"
            strokeWidth={1}
            initial={{ r: 34, opacity: 0.5 }}
            animate={{ r: 160, opacity: 0 }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
          />
        )}
      </svg>

      {/* "Project Complete" text pulse */}
      {isInView && !prefersReducedMotion && (
        <motion.div
          className="absolute text-[9px] font-bold tracking-wider"
          style={{ color: 'rgba(200,168,233,0.6)', bottom: 15 }}
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 3 }}
        >
          ✨ Project Delivered Successfully
        </motion.div>
      )}
    </div>
  )
}
