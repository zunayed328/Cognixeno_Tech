'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const nodes = [
  { id: 0, label: 'Trigger', x: 10 },
  { id: 1, label: 'Filter', x: 72 },
  { id: 2, label: 'Process', x: 134 },
  { id: 3, label: 'Action', x: 196 },
  { id: 4, label: 'Done ✓', x: 258 },
]

const stats = ['1,247 tasks/hr', '99.9% uptime', '0 errors']

export default function AIAutomationAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const [built, setBuilt] = useState(false)
  const [activeNode, setActiveNode] = useState(-1)

  useEffect(() => {
    if (!isInView) { setBuilt(false); setActiveNode(-1); return }
    const t = setTimeout(() => setBuilt(true), 1000)
    return () => clearTimeout(t)
  }, [isInView])

  // Packet traveling animation
  useEffect(() => {
    if (!built) return
    let idx = 0
    const iv = setInterval(() => {
      setActiveNode(idx % (nodes.length + 2))
      idx++
    }, 600)
    return () => clearInterval(iv)
  }, [built])

  return (
    <div ref={ref} className="relative flex flex-col items-center justify-center" style={{ width: 320, height: 200, willChange: 'transform' }}>
      {/* Floating stats */}
      {built && stats.map((s, i) => (
        <motion.span
          key={s}
          className="absolute text-[9px] font-mono font-bold pointer-events-none"
          style={{ color: 'rgba(225,255,81,0.5)', right: 10 + i * 5, top: 10 + i * 20 }}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: [0, 0.7, 0], y: -15 }}
          transition={{ duration: 3, delay: i * 1.2, repeat: Infinity }}
        >
          {s}
        </motion.span>
      ))}

      {/* Pipeline */}
      <div className="relative flex items-center" style={{ height: 80 }}>
        {nodes.map((node, i) => (
          <div key={node.id} className="relative" style={{ marginRight: i < nodes.length - 1 ? 0 : 0 }}>
            {/* Node box */}
            <motion.div
              className="relative flex flex-col items-center justify-center"
              style={{
                width: 54,
                height: 42,
                borderRadius: 10,
                background: activeNode === i ? 'rgba(225,255,81,0.12)' : 'rgba(0,39,44,0.7)',
                border: `1px solid ${activeNode === i ? 'rgba(225,255,81,0.6)' : 'rgba(225,255,81,0.2)'}`,
                boxShadow: activeNode === i ? '0 0 20px rgba(225,255,81,0.3)' : 'none',
                transition: 'all 0.3s ease',
                willChange: 'transform',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25, delay: i * 0.15 }}
            >
              <span className="text-[8px] font-bold" style={{ color: activeNode === i ? '#E1FF51' : 'rgba(225,255,81,0.7)' }}>
                {node.label}
              </span>

              {/* Checkmark above active node */}
              {built && activeNode > i && (
                <motion.span
                  className="absolute -top-4 text-[10px]"
                  style={{ color: '#E1FF51' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  ✓
                </motion.span>
              )}
            </motion.div>

            {/* Connection arrow */}
            {i < nodes.length - 1 && (
              <motion.div
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: 54, width: 8, height: 2, willChange: 'transform' }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.15 }}
              >
                <div style={{ width: '100%', height: 2, background: 'rgba(225,255,81,0.3)' }} />
                {/* Traveling dot on connection */}
                {built && activeNode === i && (
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                    style={{ background: '#E1FF51', boxShadow: '0 0 8px rgba(225,255,81,0.8)' }}
                    initial={{ left: 0 }}
                    animate={{ left: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Completion burst */}
      {built && activeNode >= nodes.length && (
        <motion.div
          className="absolute text-[10px] font-bold text-center"
          style={{ color: '#E1FF51', bottom: 15 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.8] }}
          transition={{ duration: 2 }}
        >
          Workflow Complete! ✓
        </motion.div>
      )}

      {/* Progress indicator */}
      {built && (
        <motion.div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 h-[2px] rounded-full"
          style={{ background: '#E1FF51', width: 200 }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: activeNode >= 0 ? Math.min((activeNode + 1) / nodes.length, 1) : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  )
}
