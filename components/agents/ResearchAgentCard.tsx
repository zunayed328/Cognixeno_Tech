'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const searchText = 'Market analysis: AI industry 2025'

const results = [
  { label: 'Market Size', value: '$2.4T', type: 'bar', pct: 78 },
  { label: 'Growth Rate', value: '37% YoY', type: 'line' },
  { label: 'Competitors', value: '12 found', type: 'pie' },
]

const insights = [
  'AI automation growing fastest in enterprise sector...',
  'Key opportunity: SMB market penetration at 12%...',
  'Recommendation: Focus on vertical SaaS solutions...',
]

export default function ResearchAgentCard() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-30px' })
  const prefersReducedMotion = useReducedMotion()
  const [phase, setPhase] = useState(0)
  const [typedSearch, setTypedSearch] = useState('')
  const [insightIdx, setInsightIdx] = useState(0)
  const [typedInsight, setTypedInsight] = useState('')

  useEffect(() => {
    if (!isInView) { setPhase(0); setTypedSearch(''); setTypedInsight(''); return }
    if (prefersReducedMotion) { setPhase(4); setTypedSearch(searchText); return }
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 2000)
    const t3 = setTimeout(() => setPhase(3), 2800)
    const t4 = setTimeout(() => setPhase(4), 4000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [isInView, prefersReducedMotion])

  // Search typing
  useEffect(() => {
    if (phase < 1 || prefersReducedMotion) return
    let i = 0
    setTypedSearch('')
    const iv = setInterval(() => {
      if (i <= searchText.length) { setTypedSearch(searchText.slice(0, i)); i++ }
      else clearInterval(iv)
    }, 45)
    return () => clearInterval(iv)
  }, [phase, prefersReducedMotion])

  // Insight cycling
  useEffect(() => {
    if (phase < 4 || prefersReducedMotion) return
    let i = 0
    let charI = 0
    setInsightIdx(0)
    setTypedInsight('')

    const iv = setInterval(() => {
      const text = insights[i % insights.length]
      if (charI <= text.length) {
        setTypedInsight(text.slice(0, charI))
        charI++
      } else {
        setTimeout(() => {
          i++
          charI = 0
          setInsightIdx(i % insights.length)
        }, 2000)
      }
    }, 30)
    return () => clearInterval(iv)
  }, [phase, prefersReducedMotion])

  return (
    <div ref={ref} style={{ width: '100%', maxWidth: 280, willChange: 'transform' }}>
      <div
        className="overflow-hidden"
        style={{
          borderRadius: 12,
          border: '1px solid rgba(2,82,89,0.2)',
          background: 'rgba(8,8,16,0.9)',
          boxShadow: '0 15px 50px rgba(0,0,0,0.5)',
        }}
      >
        {/* Search bar */}
        <div className="px-3 py-2" style={{ borderBottom: '1px solid rgba(2,82,89,0.1)' }}>
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg" style={{
            background: 'rgba(2,82,89,0.06)',
            border: `1px solid ${phase >= 1 ? 'rgba(2,82,89,0.3)' : 'rgba(2,82,89,0.1)'}`,
          }}>
            <span className="text-[8px]">🔍</span>
            <span className="text-[8px] font-mono text-[#A0A0B8] flex-1">
              {typedSearch}
              {phase >= 1 && phase < 2 && !prefersReducedMotion && (
                <motion.span
                  className="inline-block w-[1px] h-2 ml-[1px]"
                  style={{ background: '#43A8A0' }}
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                />
              )}
            </span>
            {phase >= 2 && !prefersReducedMotion && (
              <motion.div
                className="w-3 h-3 rounded-full border border-[#43A8A0]/50"
                style={{ borderTopColor: '#43A8A0' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: phase < 3 ? Infinity : 0, ease: 'linear' }}
              />
            )}
          </div>
        </div>

        {/* Scanning visualization */}
        {phase >= 2 && phase < 3 && !prefersReducedMotion && (
          <motion.div className="px-3 py-1.5">
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4].map(i => (
                <motion.div
                  key={i}
                  className="flex-1 h-1 rounded-full"
                  style={{ background: 'rgba(67,168,160,0.1)' }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: '#43A8A0' }}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3, delay: i * 0.15 }}
                  />
                </motion.div>
              ))}
            </div>
            <span className="text-[6px] text-[#43A8A0]/50 mt-1 block">Scanning 847 data sources...</span>
          </motion.div>
        )}

        {/* Results grid */}
        {phase >= 3 && (
          <div className="px-3 py-1.5 space-y-1.5">
            {results.map((r, i) => (
              <motion.div
                key={r.label}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
                style={{
                  background: 'rgba(2,82,89,0.04)',
                  border: '1px solid rgba(2,82,89,0.1)',
                }}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.15 }}
              >
                <div className="flex-1">
                  <span className="text-[6px] text-[#A0A0B8] block">{r.label}</span>
                  <span className="text-[9px] font-bold text-white">{r.value}</span>
                </div>

                {/* Mini chart */}
                <div style={{ width: 50, height: 24 }}>
                  {r.type === 'bar' && (
                    <svg viewBox="0 0 50 24" width={50} height={24}>
                      {[0, 1, 2, 3, 4].map(bi => (
                        <motion.rect
                          key={bi}
                          x={bi * 10 + 1}
                          width={7}
                          rx={1}
                          fill={bi === 3 ? '#43A8A0' : 'rgba(67,168,160,0.3)'}
                          initial={{ y: 24, height: 0 }}
                          animate={{ y: 24 - [12, 16, 10, 20, 14][bi], height: [12, 16, 10, 20, 14][bi] }}
                          transition={{ duration: 0.4, delay: 0.3 + bi * 0.1 }}
                        />
                      ))}
                    </svg>
                  )}
                  {r.type === 'line' && (
                    <svg viewBox="0 0 50 24" width={50} height={24}>
                      <motion.path
                        d="M2 20 L12 14 L22 16 L32 8 L42 4 L48 6"
                        stroke="#43A8A0"
                        strokeWidth={1.5}
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      />
                    </svg>
                  )}
                  {r.type === 'pie' && (
                    <svg viewBox="0 0 24 24" width={24} height={24}>
                      <circle cx={12} cy={12} r={10} fill="none" stroke="rgba(67,168,160,0.2)" strokeWidth={3} />
                      <motion.circle
                        cx={12} cy={12} r={10}
                        fill="none"
                        stroke="#43A8A0"
                        strokeWidth={3}
                        strokeDasharray="44 63"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 63 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        style={{ transformOrigin: '12px 12px', transform: 'rotate(-90deg)' }}
                      />
                    </svg>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Insight generation */}
        {phase >= 4 && (
          <motion.div
            className="px-3 py-1.5"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-2 py-1.5 rounded-lg" style={{
              background: 'rgba(67,168,160,0.04)',
              border: '1px solid rgba(67,168,160,0.12)',
            }}>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[7px]">🧠</span>
                <span className="text-[6px] font-bold" style={{ color: '#43A8A0' }}>Key Insight:</span>
              </div>
              <p className="text-[6.5px] text-[#A0A0B8] leading-relaxed">
                {typedInsight}
                {!prefersReducedMotion && (
                  <motion.span
                    className="inline-block w-[1px] h-2 ml-[1px]"
                    style={{ background: '#43A8A0' }}
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.4, repeat: Infinity }}
                  />
                )}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
