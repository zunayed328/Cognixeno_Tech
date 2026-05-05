'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const wireframes = [
  { id: 'nav', label: 'Navigation', x: 10, y: 10, w: 260, h: 22 },
  { id: 'hero', label: 'Hero Section', x: 10, y: 38, w: 260, h: 55 },
  { id: 'card1', label: 'Card', x: 10, y: 100, w: 80, h: 50 },
  { id: 'card2', label: 'Card', x: 97, y: 100, w: 80, h: 50 },
  { id: 'card3', label: 'Card', x: 184, y: 100, w: 86, h: 50 },
  { id: 'footer', label: 'Footer', x: 10, y: 158, w: 260, h: 22 },
]

const designTools = [
  { icon: '✏️', angle: 0 },
  { icon: '🎨', angle: 90 },
  { icon: '📐', angle: 180 },
  { icon: '🖌️', angle: 270 },
]

export default function DesignAgentCard() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-30px' })
  const prefersReducedMotion = useReducedMotion()
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (!isInView) { setPhase(0); return }
    if (prefersReducedMotion) { setPhase(5); return }
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 800)
    const t3 = setTimeout(() => setPhase(3), 1800)
    const t4 = setTimeout(() => setPhase(4), 2800)
    const t5 = setTimeout(() => setPhase(5), 3500)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5) }
  }, [isInView, prefersReducedMotion])

  return (
    <div ref={ref} style={{ width: '100%', maxWidth: 280, willChange: 'transform' }}>
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 12,
          border: '1px solid rgba(200,168,233,0.2)',
          background: 'rgba(8,8,16,0.9)',
          boxShadow: '0 15px 50px rgba(0,0,0,0.5)',
          height: 200,
        }}
      >
        {/* Grid background */}
        {phase >= 1 && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(200,168,233,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(200,168,233,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '14px 14px',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Wireframe elements */}
        <svg viewBox="0 0 280 190" width="100%" height="100%" className="absolute inset-0">
          {wireframes.map((wf, i) => (
            <g key={wf.id}>
              {/* Wireframe outline */}
              <motion.rect
                x={wf.x} y={wf.y}
                width={wf.w} height={wf.h}
                rx={4}
                fill="none"
                stroke={phase >= 3 ? 'rgba(200,168,233,0.35)' : 'rgba(200,168,233,0.2)'}
                strokeWidth={phase >= 3 ? 1.5 : 1}
                strokeDasharray={phase < 3 ? '4 4' : 'none'}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={phase >= 2
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, delay: i * 0.12 }}
              />

              {/* Fill phase */}
              <motion.rect
                x={wf.x} y={wf.y}
                width={wf.w} height={wf.h}
                rx={4}
                fill={wf.id === 'hero'
                  ? 'url(#heroGrad)'
                  : 'rgba(200,168,233,0.04)'
                }
                initial={{ opacity: 0 }}
                animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              />

              {/* Labels inside */}
              {phase >= 4 && (
                <motion.text
                  x={wf.x + wf.w / 2}
                  y={wf.y + wf.h / 2 + 3}
                  textAnchor="middle"
                  fill="rgba(200,168,233,0.5)"
                  fontSize={7}
                  fontWeight={600}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {wf.label}
                </motion.text>
              )}

              {/* Content lines for cards */}
              {phase >= 4 && wf.id.startsWith('card') && (
                <>
                  <motion.rect
                    x={wf.x + 8} y={wf.y + 8}
                    width={16} height={16} rx={3}
                    fill="rgba(200,168,233,0.1)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.3 + i * 0.1 }}
                    style={{ transformOrigin: `${wf.x + 16}px ${wf.y + 16}px` }}
                  />
                  <motion.rect
                    x={wf.x + 8} y={wf.y + 30}
                    width={wf.w - 16} height={3} rx={1}
                    fill="rgba(200,168,233,0.08)"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  />
                  <motion.rect
                    x={wf.x + 8} y={wf.y + 37}
                    width={(wf.w - 16) * 0.7} height={2} rx={1}
                    fill="rgba(200,168,233,0.05)"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.45 + i * 0.1 }}
                  />
                </>
              )}
            </g>
          ))}

          {/* Hero gradient def */}
          <defs>
            <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(200,168,233,0.08)" />
              <stop offset="100%" stopColor="rgba(200,168,233,0.02)" />
            </linearGradient>
          </defs>

          {/* Glow effects in phase 5 */}
          {phase >= 5 && !prefersReducedMotion && (
            <>
              {/* Scanning highlight */}
              <motion.rect
                x={0} y={0} width={280} height={4}
                fill="rgba(200,168,233,0.06)"
                initial={{ y: 0 }}
                animate={{ y: 190 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </>
          )}
        </svg>

        {/* Design Complete badge */}
        {phase >= 5 && (
          <motion.div
            className="absolute top-2 right-2 px-2 py-1 rounded-md flex items-center gap-1"
            style={{
              background: 'rgba(200,168,233,0.1)',
              border: '1px solid rgba(200,168,233,0.25)',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <span className="text-[7px]">✨</span>
            <span className="text-[7px] font-bold" style={{ color: '#C8A8E9' }}>Design Complete</span>
          </motion.div>
        )}

        {/* Floating design tools */}
        {phase >= 3 && !prefersReducedMotion && designTools.map((tool, i) => {
          const r = 130
          const cx = 140
          const cy = 95
          const rad = ((tool.angle + Date.now() * 0.01) * Math.PI) / 180
          return (
            <motion.div
              key={tool.icon}
              className="absolute pointer-events-none text-[10px]"
              style={{ left: cx, top: cy }}
              animate={{
                x: [r * 0.4 * Math.cos(rad + i), -r * 0.4 * Math.cos(rad + i + Math.PI)],
                y: [r * 0.3 * Math.sin(rad + i), -r * 0.3 * Math.sin(rad + i + Math.PI)],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
            >
              {tool.icon}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
