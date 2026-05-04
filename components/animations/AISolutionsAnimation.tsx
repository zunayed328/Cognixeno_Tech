'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

/* Neural network node positions */
const layers = [
  [{ x: 30, y: 30 }, { x: 30, y: 70 }, { x: 30, y: 110 }, { x: 30, y: 150 }],
  [{ x: 110, y: 15 }, { x: 110, y: 50 }, { x: 110, y: 85 }, { x: 110, y: 120 }, { x: 110, y: 155 }],
  [{ x: 190, y: 15 }, { x: 190, y: 50 }, { x: 190, y: 85 }, { x: 190, y: 120 }, { x: 190, y: 155 }],
  [{ x: 270, y: 40 }, { x: 270, y: 85 }, { x: 270, y: 130 }],
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

/* Pulse paths through the network */
function getPulsePaths() {
  const paths: { nodes: { x: number; y: number }[]; id: number }[] = []
  for (let p = 0; p < 8; p++) {
    const path: { x: number; y: number }[] = []
    for (let l = 0; l < layers.length; l++) {
      const nodeIdx = Math.floor(Math.random() * layers[l].length)
      path.push(layers[l][nodeIdx])
    }
    paths.push({ nodes: path, id: p })
  }
  return paths
}

export default function AISolutionsAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const [assembled, setAssembled] = useState(false)
  const [pulses] = useState(getPulsePaths)

  useEffect(() => {
    if (!isInView) { setAssembled(false); return }
    const t = setTimeout(() => setAssembled(true), 1200)
    return () => clearTimeout(t)
  }, [isInView])

  const allNodes = layers.flat()

  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ width: 310, height: 200, willChange: 'transform' }}>
      <svg viewBox="0 0 300 180" width={300} height={180} fill="none">
        <defs>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix values="1 0 0 0 0  0 0.5 1 0 0  0 0 1 0 0.4  0 0 0 1.5 0" />
          </filter>
          <filter id="pulseGlowSvg">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Connections */}
        {connections.map((c, i) => (
          <motion.line
            key={c.id}
            x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
            stroke="rgba(200,168,233,0.12)"
            strokeWidth={0.8}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.01 }}
          />
        ))}

        {/* Nodes */}
        {allNodes.map((node, i) => (
          <motion.g key={`n-${i}`}>
            {/* Glow */}
            <motion.circle
              cx={node.x} cy={node.y} r={10}
              fill="rgba(200,168,233,0.15)"
              filter="url(#nodeGlow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 0.6 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
            {/* Core */}
            <motion.circle
              cx={node.x} cy={node.y} r={6}
              fill="rgba(200,168,233,0.12)"
              stroke="rgba(200,168,233,0.5)"
              strokeWidth={1.5}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.05 }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
          </motion.g>
        ))}

        {/* Data pulses traveling through network */}
        {assembled && pulses.map((pulse) => (
          <motion.circle
            key={`pulse-${pulse.id}`}
            r={4}
            fill="#C8A8E9"
            filter="url(#pulseGlowSvg)"
            initial={{ cx: pulse.nodes[0].x, cy: pulse.nodes[0].y, opacity: 0 }}
            animate={{
              cx: pulse.nodes.map(n => n.x),
              cy: pulse.nodes.map(n => n.y),
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 1.2 + pulse.id * 0.15,
              delay: pulse.id * 0.4,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Output activation ripples */}
        {assembled && layers[3].map((node, i) => (
          <motion.circle
            key={`ripple-${i}`}
            cx={node.x} cy={node.y}
            fill="none"
            stroke="rgba(200,168,233,0.4)"
            strokeWidth={1}
            initial={{ r: 6, opacity: 0.6 }}
            animate={{ r: 20, opacity: 0 }}
            transition={{ duration: 1.5, delay: 1 + i * 0.8, repeat: Infinity, repeatDelay: 2 }}
          />
        ))}
      </svg>

      {/* Output labels */}
      {assembled && layers[3].map((node, i) => (
        <motion.span
          key={`label-${i}`}
          className="absolute text-[8px] font-bold pointer-events-none"
          style={{ left: node.x + 22, top: node.y - 2, color: '#C8A8E9' }}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: [0, 1, 1, 0], x: 0 }}
          transition={{ duration: 3, delay: 2 + i * 1.2, repeat: Infinity, repeatDelay: 1 }}
        >
          {outputLabels[i]}
        </motion.span>
      ))}
    </div>
  )
}
