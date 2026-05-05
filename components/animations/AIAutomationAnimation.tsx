'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const nodes = [
  { id: 0, label: '⚡ Trigger', x: 10 },
  { id: 1, label: '🔍 Filter', x: 72 },
  { id: 2, label: '⚙️ Process', x: 134 },
  { id: 3, label: '📤 Action', x: 196 },
  { id: 4, label: '✅ Done', x: 258 },
]

const stats = ['1,247 tasks/hr', '99.9% uptime', '0 errors']
const NODE_WIDTH = 58
const NODE_HEIGHT = 44
const GAP_WIDTH = 14

export default function AIAutomationAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const prefersReducedMotion = useReducedMotion()
  const [built, setBuilt] = useState(false)
  const [activeNode, setActiveNode] = useState(-1)
  const [packetCount, setPacketCount] = useState(0)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!isInView) { setBuilt(false); setActiveNode(-1); setPacketCount(0); return }
    if (prefersReducedMotion) { setBuilt(true); return }
    const t = setTimeout(() => setBuilt(true), 1000)
    return () => clearTimeout(t)
  }, [isInView, prefersReducedMotion])

  // Packet traveling animation with looping
  useEffect(() => {
    if (!built || prefersReducedMotion) return
    let idx = 0
    const speed = hovering ? 300 : 550
    const iv = setInterval(() => {
      const nodePos = idx % (nodes.length + 2)
      setActiveNode(nodePos)
      if (nodePos === nodes.length) setPacketCount(c => c + 1)
      idx++
    }, speed)
    return () => clearInterval(iv)
  }, [built, hovering, prefersReducedMotion])

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center"
      style={{ width: 340, height: 220, willChange: 'transform' }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(225,255,81,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(225,255,81,0.08) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
      }} />

      {/* Floating stats */}
      {built && stats.map((s, i) => (
        <motion.span
          key={s}
          className="absolute text-[9px] font-mono font-bold pointer-events-none"
          style={{
            color: 'rgba(225,255,81,0.5)',
            right: 8 + i * 4,
            top: 8 + i * 18,
            willChange: 'transform, opacity',
          }}
          initial={{ opacity: 0, y: 5 }}
          animate={prefersReducedMotion
            ? { opacity: 0.7, y: 0 }
            : { opacity: [0, 0.7, 0], y: -20 }
          }
          transition={prefersReducedMotion
            ? { duration: 0.3 }
            : { duration: 3.5, delay: i * 1.2, repeat: Infinity }
          }
        >
          {s}
        </motion.span>
      ))}

      {/* Pipeline container */}
      <div className="relative flex items-center" style={{ height: 90 }}>
        {nodes.map((node, i) => (
          <div key={node.id} className="relative flex items-center">
            {/* Node box */}
            <motion.div
              className="relative flex flex-col items-center justify-center"
              style={{
                width: NODE_WIDTH,
                height: NODE_HEIGHT,
                borderRadius: 10,
                background: activeNode === i
                  ? 'rgba(225,255,81,0.1)'
                  : 'rgba(0,39,44,0.7)',
                border: `1.5px solid ${activeNode === i
                  ? 'rgba(225,255,81,0.6)'
                  : 'rgba(225,255,81,0.2)'}`,
                boxShadow: activeNode === i
                  ? '0 0 25px rgba(225,255,81,0.25), inset 0 0 15px rgba(225,255,81,0.05)'
                  : '0 4px 15px rgba(0,0,0,0.3)',
                willChange: 'transform',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView
                ? {
                  scale: activeNode === i ? 1.05 : 1,
                  opacity: 1,
                }
                : { scale: 0, opacity: 0 }
              }
              transition={{ type: 'spring', stiffness: 300, damping: 25, delay: i * 0.15 }}
            >
              <span className="text-[8px] font-bold leading-none" style={{
                color: activeNode === i ? '#E1FF51' : 'rgba(225,255,81,0.6)',
              }}>
                {node.label}
              </span>

              {/* Processing indicator inside active node */}
              {built && activeNode === i && !prefersReducedMotion && (
                <motion.div
                  className="absolute bottom-1 w-8 h-[2px] rounded-full overflow-hidden"
                  style={{ background: 'rgba(225,255,81,0.1)' }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: '#E1FF51' }}
                    animate={{ width: ['0%', '100%'] }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              )}

              {/* Checkmark above completed node */}
              {built && activeNode > i && (
                <motion.span
                  className="absolute -top-5 text-[10px] font-bold"
                  style={{ color: '#E1FF51', textShadow: '0 0 8px rgba(225,255,81,0.5)' }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  ✓
                </motion.span>
              )}
            </motion.div>

            {/* Connection arrow between nodes */}
            {i < nodes.length - 1 && (
              <div className="relative" style={{ width: GAP_WIDTH, height: 2 }}>
                <motion.div
                  className="absolute top-0 left-0 w-full"
                  style={{ height: 2, willChange: 'transform' }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.15 }}
                >
                  {/* Dashed connection */}
                  <div style={{
                    width: '100%',
                    height: 2,
                    backgroundImage: 'repeating-linear-gradient(90deg, rgba(225,255,81,0.3) 0px, rgba(225,255,81,0.3) 4px, transparent 4px, transparent 8px)',
                  }} />
                  {/* Arrow head */}
                  <div className="absolute -right-[2px] -top-[3px]"
                    style={{
                      width: 0, height: 0,
                      borderTop: '4px solid transparent',
                      borderBottom: '4px solid transparent',
                      borderLeft: '5px solid rgba(225,255,81,0.3)',
                    }}
                  />

                  {/* Traveling packet dot */}
                  {built && activeNode === i && !prefersReducedMotion && (
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2"
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 2,
                        background: '#E1FF51',
                        boxShadow: '0 0 12px rgba(225,255,81,0.8), 0 0 24px rgba(225,255,81,0.4)',
                      }}
                      initial={{ left: -4, y: -8 }}
                      animate={{ left: GAP_WIDTH - 6, y: [0, -8, 0] }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                  )}
                </motion.div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Completion burst */}
      {built && activeNode >= nodes.length && !prefersReducedMotion && (
        <motion.div
          className="absolute text-[10px] font-bold text-center"
          style={{ color: '#E1FF51', bottom: 20, textShadow: '0 0 10px rgba(225,255,81,0.5)' }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.8] }}
          transition={{ duration: 1.8 }}
        >
          🎯 Workflow Complete!
        </motion.div>
      )}

      {/* Bottom progress + counter */}
      {built && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <motion.div
            className="h-[2px] rounded-full overflow-hidden"
            style={{ background: 'rgba(225,255,81,0.1)', width: 220 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: '#E1FF51', boxShadow: '0 0 6px rgba(225,255,81,0.5)' }}
              animate={{ width: `${Math.min(((activeNode + 1) / nodes.length) * 100, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {packetCount > 0 && (
            <motion.span
              className="text-[7px] font-mono font-bold"
              style={{ color: 'rgba(225,255,81,0.5)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {packetCount} workflows completed
            </motion.span>
          )}
        </div>
      )}

      {/* Hover overlay */}
      {hovering && built && (
        <motion.span
          className="absolute top-2 text-[7px] font-mono font-bold tracking-wider"
          style={{ color: 'rgba(225,255,81,0.7)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.4, repeat: Infinity }}
        >
          PROCESSING AT MAXIMUM CAPACITY
        </motion.span>
      )}
    </div>
  )
}
