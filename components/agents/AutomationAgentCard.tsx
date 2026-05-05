'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const nodes = [
  { id: 0, label: 'Webhook', x: 20, y: 30 },
  { id: 1, label: 'Filter', x: 80, y: 15 },
  { id: 2, label: 'Transform', x: 140, y: 30 },
  { id: 3, label: 'API Call', x: 80, y: 65 },
  { id: 4, label: 'Database', x: 140, y: 80 },
  { id: 5, label: 'Notify', x: 200, y: 20 },
  { id: 6, label: 'Log', x: 200, y: 100 },
  { id: 7, label: 'Done ✓', x: 250, y: 65 },
]

// Connections: [fromId, toId]
const edges: [number, number][] = [
  [0, 1], [0, 3], [1, 2], [2, 5], [3, 4], [4, 6], [5, 7], [6, 7], [1, 3], [4, 5],
]

// Paths through the graph
const paths = [
  [0, 1, 2, 5, 7],
  [0, 3, 4, 6, 7],
  [0, 1, 3, 4, 5, 7],
]

export default function AutomationAgentCard() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-30px' })
  const prefersReducedMotion = useReducedMotion()
  const [built, setBuilt] = useState(false)
  const [errorNode, setErrorNode] = useState(-1)
  const [healed, setHealed] = useState(false)
  const [taskCount, setTaskCount] = useState(0)

  useEffect(() => {
    if (!isInView) { setBuilt(false); setErrorNode(-1); setHealed(false); setTaskCount(0); return }
    if (prefersReducedMotion) { setBuilt(true); return }
    const t = setTimeout(() => setBuilt(true), 1000)
    return () => clearTimeout(t)
  }, [isInView, prefersReducedMotion])

  // Task counter
  useEffect(() => {
    if (!built || prefersReducedMotion) return
    const iv = setInterval(() => setTaskCount(c => c + 1), 2000)
    return () => clearInterval(iv)
  }, [built, prefersReducedMotion])

  // Error simulation
  useEffect(() => {
    if (!built || prefersReducedMotion) return
    const t1 = setTimeout(() => setErrorNode(4), 5000)
    const t2 = setTimeout(() => setHealed(true), 6500)
    const t3 = setTimeout(() => { setErrorNode(-1); setHealed(false) }, 9000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [built, prefersReducedMotion])

  const s = 1.35 // scale factor for the SVG

  return (
    <div ref={ref} style={{ width: '100%', maxWidth: 280, willChange: 'transform' }}>
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 12,
          border: '1px solid rgba(225,255,81,0.15)',
          background: 'rgba(8,8,16,0.9)',
          boxShadow: '0 15px 50px rgba(0,0,0,0.5)',
          height: 200,
        }}
      >
        {/* Circuit background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(225,255,81,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(225,255,81,0.08) 0%, transparent 50%)
          `,
        }} />

        <svg viewBox={`0 0 ${280 / s} ${200 / s}`} width="100%" height="100%" className="relative">
          <defs>
            <filter id="autoGlow">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {/* Edges */}
          {edges.map(([from, to], i) => {
            const n1 = nodes[from]
            const n2 = nodes[to]
            const isError = errorNode === from || errorNode === to
            const isHealPath = healed && (from === 4 && to === 5)
            return (
              <motion.line
                key={`e-${i}`}
                x1={n1.x} y1={n1.y}
                x2={n2.x} y2={n2.y}
                stroke={isHealPath
                  ? 'rgba(34,197,94,0.5)'
                  : isError
                    ? 'rgba(255,80,80,0.3)'
                    : 'rgba(225,255,81,0.12)'
                }
                strokeWidth={isHealPath ? 1.5 : 0.8}
                strokeDasharray={isHealPath ? 'none' : '3 4'}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              />
            )
          })}

          {/* Nodes */}
          {nodes.map((node, i) => {
            const isError = errorNode === node.id && !healed
            const isErrorHealed = errorNode === node.id && healed
            return (
              <g key={node.id}>
                <motion.rect
                  x={node.x - 22} y={node.y - 10}
                  width={44} height={20} rx={5}
                  fill={isError
                    ? 'rgba(255,80,80,0.15)'
                    : isErrorHealed
                      ? 'rgba(34,197,94,0.12)'
                      : 'rgba(0,39,44,0.6)'
                  }
                  stroke={isError
                    ? 'rgba(255,80,80,0.5)'
                    : isErrorHealed
                      ? 'rgba(34,197,94,0.5)'
                      : 'rgba(225,255,81,0.2)'
                  }
                  strokeWidth={1}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25, delay: i * 0.1 }}
                  style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                />
                <text
                  x={node.x} y={node.y + 3}
                  textAnchor="middle"
                  fill={isError ? '#ff5050' : isErrorHealed ? '#22c55e' : 'rgba(225,255,81,0.7)'}
                  fontSize={5.5}
                  fontWeight={700}
                >
                  {node.label}
                </text>
              </g>
            )
          })}

          {/* Traveling packets on paths */}
          {built && !prefersReducedMotion && paths.map((path, pi) => (
            <motion.circle
              key={`pkt-${pi}`}
              r={3}
              fill="#E1FF51"
              filter="url(#autoGlow)"
              initial={{
                cx: nodes[path[0]].x,
                cy: nodes[path[0]].y,
                opacity: 0,
              }}
              animate={{
                cx: path.map(nid => nodes[nid].x),
                cy: path.map(nid => nodes[nid].y),
                opacity: [0, 1, 1, 1, 1, 0],
              }}
              transition={{
                duration: 2.5 + pi * 0.3,
                delay: pi * 1.2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>

        {/* Error / Auto-heal overlay */}
        {errorNode >= 0 && !healed && (
          <motion.div
            className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md"
            style={{ background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.3)' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0.8, 1], scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-[7px] font-bold text-[#ff5050]">⚠ Error Detected</span>
          </motion.div>
        )}

        {healed && (
          <motion.div
            className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md"
            style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring' }}
          >
            <span className="text-[7px] font-bold text-[#22c55e]">✓ Auto-healed</span>
          </motion.div>
        )}

        {/* Task counter */}
        {built && (
          <motion.div
            className="absolute bottom-2 left-2 text-[7px] font-mono font-bold"
            style={{ color: 'rgba(225,255,81,0.4)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {taskCount} tasks processed
          </motion.div>
        )}
      </div>
    </div>
  )
}
