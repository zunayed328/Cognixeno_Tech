'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState, useMemo } from 'react'

/* Neural network node positions — 4 layers */
const layers = [
  [{ x: 30, y: 25 }, { x: 30, y: 65 }, { x: 30, y: 105 }, { x: 30, y: 145 }],
  [{ x: 110, y: 10 }, { x: 110, y: 45 }, { x: 110, y: 80 }, { x: 110, y: 115 }, { x: 110, y: 150 }],
  [{ x: 190, y: 10 }, { x: 190, y: 45 }, { x: 190, y: 80 }, { x: 190, y: 115 }, { x: 190, y: 150 }],
  [{ x: 270, y: 35 }, { x: 270, y: 80 }, { x: 270, y: 125 }],
]

const outputLabels = ['Prediction ✓', 'Generated ✓', 'Analyzed ✓']

/* Build connections between adjacent layers */
function getConnections() {
  const conns: { x1: number; y1: number; x2: number; y2: number; id: string }[] = []
  for (let l = 0; l < layers.length - 1; l++) {
    for (let i = 0; i < layers[l].length; i++) {
      for (let j = 0; j < layers[l + 1].length; j++) {
        conns.push({
          x1: layers[l][i].x, y1: layers[l][i].y,
          x2: layers[l + 1][j].x, y2: layers[l + 1][j].y,
          id: `c${l}-${i}-${j}`,
        })
      }
    }
  }
  return conns
}

const connections = getConnections()
const allNodes = layers.flat()

/* Generate deterministic pulse paths */
function generatePulsePaths() {
  const paths: { nodes: { x: number; y: number }[]; id: number; speed: number }[] = []
  for (let p = 0; p < 10; p++) {
    const path: { x: number; y: number }[] = []
    for (let l = 0; l < layers.length; l++) {
      const nodeIdx = (p * 3 + l * 7) % layers[l].length
      path.push(layers[l][nodeIdx])
    }
    paths.push({ nodes: path, id: p, speed: 0.8 + (p % 4) * 0.2 })
  }
  return paths
}

export default function AISolutionsAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const prefersReducedMotion = useReducedMotion()
  const [assembled, setAssembled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const pulses = useMemo(generatePulsePaths, [])

  useEffect(() => {
    if (!isInView) { setAssembled(false); return }
    if (prefersReducedMotion) { setAssembled(true); return }
    const t = setTimeout(() => setAssembled(true), 1200)
    return () => clearTimeout(t)
  }, [isInView, prefersReducedMotion])

  const speedMultiplier = hovering ? 0.5 : 1

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center"
      style={{ width: 320, height: 220, willChange: 'transform' }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <svg viewBox="0 0 300 170" width={300} height={170} fill="none">
        <defs>
          <filter id="aiNodeGlow">
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="1 0 0 0 0  0 0.5 1 0 0  0 0 1 0 0.4  0 0 0 2 0" />
          </filter>
          <filter id="aiPulseGlow">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <radialGradient id="nodeGrad">
            <stop offset="0%" stopColor="rgba(200,168,233,0.2)" />
            <stop offset="100%" stopColor="rgba(200,168,233,0.02)" />
          </radialGradient>
        </defs>

        {/* Connections - draw themselves */}
        {connections.map((c, i) => (
          <motion.line
            key={c.id}
            x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
            stroke={hovering ? 'rgba(200,168,233,0.2)' : 'rgba(200,168,233,0.1)'}
            strokeWidth={0.7}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.008 }}
          />
        ))}

        {/* Nodes with glow */}
        {allNodes.map((node, i) => (
          <motion.g key={`n-${i}`}>
            {/* Outer glow */}
            <motion.circle
              cx={node.x} cy={node.y} r={12}
              fill="url(#nodeGrad)"
              filter="url(#aiNodeGlow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView
                ? { scale: hovering ? 1.2 : 1, opacity: hovering ? 0.8 : 0.5 }
                : { scale: 0, opacity: 0 }
              }
              transition={{ duration: 0.3, delay: i * 0.04 }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
            {/* Core node */}
            <motion.circle
              cx={node.x} cy={node.y} r={7}
              fill="rgba(200,168,233,0.1)"
              stroke="rgba(200,168,233,0.5)"
              strokeWidth={1.5}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.04 }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
            {/* Inner dot */}
            <motion.circle
              cx={node.x} cy={node.y} r={2.5}
              fill="rgba(200,168,233,0.3)"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: i * 0.04 + 0.2 }}
            />
          </motion.g>
        ))}

        {/* Data pulses traveling through network */}
        {assembled && !prefersReducedMotion && pulses.map((pulse) => (
          <motion.circle
            key={`pulse-${pulse.id}`}
            r={4.5}
            fill="#C8A8E9"
            filter="url(#aiPulseGlow)"
            initial={{ cx: pulse.nodes[0].x, cy: pulse.nodes[0].y, opacity: 0 }}
            animate={{
              cx: pulse.nodes.map(n => n.x),
              cy: pulse.nodes.map(n => n.y),
              opacity: [0, 1, 1, 1, 0],
              scale: [0.5, 1, 1, 1, 0.5],
            }}
            transition={{
              duration: pulse.speed * speedMultiplier,
              delay: pulse.id * 0.35 * speedMultiplier,
              repeat: Infinity,
              repeatDelay: 0.3 * speedMultiplier,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Node activation ripples at output layer */}
        {assembled && !prefersReducedMotion && layers[3].map((node, i) => (
          <g key={`ripple-g-${i}`}>
            <motion.circle
              cx={node.x} cy={node.y}
              fill="none"
              stroke="rgba(200,168,233,0.35)"
              strokeWidth={1}
              initial={{ r: 7, opacity: 0.6 }}
              animate={{ r: 24, opacity: 0 }}
              transition={{ duration: 1.5, delay: 1.2 + i * 0.7, repeat: Infinity, repeatDelay: 2.5 }}
            />
            {/* Second ripple ring */}
            <motion.circle
              cx={node.x} cy={node.y}
              fill="none"
              stroke="rgba(200,168,233,0.2)"
              strokeWidth={0.5}
              initial={{ r: 7, opacity: 0.4 }}
              animate={{ r: 30, opacity: 0 }}
              transition={{ duration: 2, delay: 1.5 + i * 0.7, repeat: Infinity, repeatDelay: 2.5 }}
            />
          </g>
        ))}
      </svg>

      {/* Output labels */}
      {assembled && layers[3].map((node, i) => (
        <motion.span
          key={`label-${i}`}
          className="absolute text-[8px] font-bold pointer-events-none whitespace-nowrap"
          style={{
            left: node.x + 26,
            top: node.y + 8,
            color: '#C8A8E9',
            textShadow: '0 0 8px rgba(200,168,233,0.5)',
          }}
          initial={{ opacity: 0, x: -8 }}
          animate={prefersReducedMotion
            ? { opacity: 1, x: 0 }
            : { opacity: [0, 1, 1, 0], x: 0 }
          }
          transition={prefersReducedMotion
            ? { duration: 0.3 }
            : { duration: 3, delay: 2 + i * 1, repeat: Infinity, repeatDelay: 1.5 }
          }
        >
          {outputLabels[i]}
        </motion.span>
      ))}

      {/* Hover processing text */}
      {hovering && assembled && (
        <motion.div
          className="absolute bottom-1 text-[8px] font-mono font-semibold"
          style={{ color: 'rgba(200,168,233,0.6)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Processing...
        </motion.div>
      )}
    </div>
  )
}
