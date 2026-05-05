'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const checklistItems = [
  '✓ Code quality check',
  '✓ Performance test',
  '✓ Security scan',
  '✓ UI/UX review',
  '✓ Cross-platform test',
  '✓ Client requirements',
]

export default function QualityAgentCard() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-30px' })
  const prefersReducedMotion = useReducedMotion()
  const [phase, setPhase] = useState(0)
  const [score, setScore] = useState(0)
  const [bugs, setBugs] = useState({ minor: 2 })
  const [approved, setApproved] = useState(false)

  useEffect(() => {
    if (!isInView) { setPhase(0); setScore(0); setBugs({ minor: 2 }); setApproved(false); return }
    if (prefersReducedMotion) { setPhase(4); setScore(98); setBugs({ minor: 0 }); setApproved(true); return }
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 2500)
    const t3 = setTimeout(() => setPhase(3), 4000)
    const t4 = setTimeout(() => { setPhase(4); setApproved(true) }, 5500)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [isInView, prefersReducedMotion])

  // Score counter animation
  useEffect(() => {
    if (phase < 2 || prefersReducedMotion) { if (!prefersReducedMotion) setScore(0); return }
    let s = 0
    const iv = setInterval(() => {
      s += 2
      if (s > 98) { s = 98; clearInterval(iv) }
      setScore(s)
    }, 30)
    return () => clearInterval(iv)
  }, [phase, prefersReducedMotion])

  // Bug fix animation
  useEffect(() => {
    if (phase < 3) return
    const t = setTimeout(() => setBugs({ minor: 0 }), 1000)
    return () => clearTimeout(t)
  }, [phase])

  const circumference = 2 * Math.PI * 36
  const dashOffset = circumference - (score / 100) * circumference

  return (
    <div ref={ref} style={{ width: '100%', maxWidth: 280, willChange: 'transform' }}>
      <div
        className="overflow-hidden"
        style={{
          borderRadius: 12,
          border: '1px solid rgba(120,1,21,0.2)',
          background: 'rgba(8,8,16,0.9)',
          boxShadow: '0 15px 50px rgba(0,0,0,0.5)',
        }}
      >
        <div className="flex">
          {/* Left: Checklist */}
          <div className="flex-1 p-2.5 space-y-1" style={{ borderRight: '1px solid rgba(255,255,255,0.03)' }}>
            <span className="text-[7px] font-bold text-[#F7B638]/60 uppercase tracking-wider block mb-1.5">Quality Checks</span>
            {checklistItems.map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-1.5"
                initial={{ x: -20, opacity: 0 }}
                animate={phase >= 1 ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.2 }}
              >
                {/* Checkmark SVG animation */}
                <svg width={12} height={12} viewBox="0 0 12 12">
                  <circle cx={6} cy={6} r={5} fill="none" stroke="rgba(247,182,56,0.2)" strokeWidth={1} />
                  <motion.path
                    d="M3.5 6 L5.5 8 L8.5 4.5"
                    stroke="#F7B638"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={phase >= 1 ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.2 }}
                  />
                </svg>
                <span className="text-[7px] text-[#A0A0B8]">{item.slice(2)}</span>
              </motion.div>
            ))}
          </div>

          {/* Right: Score gauge + bug tracker */}
          <div className="flex flex-col items-center justify-center p-3" style={{ width: 120 }}>
            {/* Circular gauge */}
            <div className="relative" style={{ width: 80, height: 80 }}>
              <svg viewBox="0 0 80 80" width={80} height={80}>
                {/* Background ring */}
                <circle
                  cx={40} cy={40} r={36}
                  fill="none"
                  stroke="rgba(120,1,21,0.15)"
                  strokeWidth={5}
                />
                {/* Progress ring */}
                <motion.circle
                  cx={40} cy={40} r={36}
                  fill="none"
                  stroke={score >= 90 ? '#F7B638' : 'rgba(247,182,56,0.5)'}
                  strokeWidth={5}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  style={{
                    transformOrigin: '40px 40px',
                    transform: 'rotate(-90deg)',
                    filter: score >= 90 ? 'drop-shadow(0 0 4px rgba(247,182,56,0.5))' : 'none',
                  }}
                  transition={{ duration: 0.1 }}
                />
              </svg>
              {/* Score text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg font-black" style={{
                  color: score >= 90 ? '#F7B638' : 'rgba(247,182,56,0.6)',
                  textShadow: score >= 90 ? '0 0 10px rgba(247,182,56,0.3)' : 'none',
                }}>
                  {score}
                </span>
                <span className="text-[5px] text-[#A0A0B8] uppercase tracking-wider">Quality</span>
              </div>
            </div>

            {/* Bug tracker */}
            {phase >= 3 && (
              <motion.div
                className="mt-2 text-center space-y-0.5"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-[6px] text-[#A0A0B8] block">Bug Scan:</span>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-[6px] font-bold text-[#22c55e]">0 Critical</span>
                  <span className="text-[6px] text-[#6B6B8A]">•</span>
                  <span className="text-[6px] font-bold text-[#22c55e]">0 Major</span>
                  <span className="text-[6px] text-[#6B6B8A]">•</span>
                  <motion.span
                    className="text-[6px] font-bold"
                    style={{ color: bugs.minor > 0 ? '#F7B638' : '#22c55e' }}
                    animate={bugs.minor > 0 ? {} : { scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    {bugs.minor} Minor
                  </motion.span>
                </div>
                {bugs.minor === 0 && (
                  <motion.span
                    className="text-[5px] font-bold"
                    style={{ color: '#22c55e' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ✓ Auto-fixed
                  </motion.span>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* APPROVED stamp */}
        {approved && (
          <motion.div
            className="flex items-center justify-center py-2 relative"
            style={{ borderTop: '1px solid rgba(247,182,56,0.08)' }}
          >
            <motion.div
              className="px-4 py-1.5 rounded-lg text-center"
              style={{
                background: 'rgba(247,182,56,0.08)',
                border: '2px solid rgba(247,182,56,0.3)',
              }}
              initial={prefersReducedMotion ? { scale: 1, rotate: 0 } : { scale: 2, rotate: 15, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <span className="text-[10px] font-black tracking-[3px]" style={{
                color: '#F7B638',
                textShadow: '0 0 10px rgba(247,182,56,0.3)',
              }}>
                APPROVED ✓
              </span>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
