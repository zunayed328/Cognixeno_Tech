'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState, useCallback } from 'react'

const codeSnippets = ['import', 'useState', 'render()', 'const', '<App />', 'export']

export default function MobileAppAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const prefersReducedMotion = useReducedMotion()
  const [phase, setPhase] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!isInView) { setPhase(0); return }
    if (prefersReducedMotion) { setPhase(3); return }
    const t1 = setTimeout(() => setPhase(1), 200)
    const t2 = setTimeout(() => setPhase(2), 800)
    const t3 = setTimeout(() => setPhase(3), 1400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [isInView, prefersReducedMotion])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (prefersReducedMotion || !phoneRef.current) return
    const rect = phoneRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const x = ((e.clientX - cx) / (rect.width / 2)) * 8
    const y = ((e.clientY - cy) / (rect.height / 2)) * -4
    setTilt({ x: Math.max(-8, Math.min(8, x)), y: Math.max(-4, Math.min(4, y)) })
  }, [prefersReducedMotion])

  const handleMouseLeave = useCallback(() => setTilt({ x: 0, y: 0 }), [])

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center"
      style={{ width: 240, height: 420, willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating code particles */}
      {isInView && phase >= 3 && !prefersReducedMotion && codeSnippets.map((s, i) => (
        <motion.span
          key={s}
          className="absolute text-[10px] font-mono pointer-events-none select-none"
          style={{
            color: 'rgba(255,148,122,0.4)',
            left: `${8 + (i % 3) * 32}%`,
            top: `${15 + (i % 4) * 18}%`,
            willChange: 'transform, opacity',
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.7, 0], y: -50 }}
          transition={{ duration: 3.5, delay: i * 0.7, repeat: Infinity, ease: 'easeOut' }}
        >
          {s}
        </motion.span>
      ))}

      {/* Phone frame with 3D perspective */}
      <motion.div
        ref={phoneRef}
        className="relative"
        style={{
          width: 200,
          height: 380,
          willChange: 'transform',
          perspective: 1000,
          transformStyle: 'preserve-3d',
        }}
        initial={{ y: 100, opacity: 0, scale: 0.8 }}
        animate={isInView
          ? { y: 0, opacity: 1, scale: 1, rotateY: tilt.x, rotateX: tilt.y }
          : { y: 100, opacity: 0, scale: 0.8 }
        }
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        {/* Idle float animation wrapper */}
        <motion.div
          className="w-full h-full"
          animate={phase >= 3 && !prefersReducedMotion ? { y: [0, -8, 0] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Phone body */}
          <div
            className="relative w-full h-full overflow-hidden"
            style={{
              borderRadius: 32,
              border: '3px solid rgba(255,148,122,0.5)',
              background: '#0A0A14',
              boxShadow: `
                0 25px 80px rgba(0,0,0,0.7),
                0 0 40px rgba(255,148,122,0.06),
                inset 0 0 30px rgba(255,148,122,0.03),
                inset 0 1px 0 rgba(255,255,255,0.05)
              `,
            }}
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20" style={{ width: 80, height: 22 }}>
              <div className="w-full h-full rounded-b-2xl" style={{
                background: '#0A0A14',
                border: '1px solid rgba(255,148,122,0.15)',
                borderTop: 'none',
              }}>
                {/* Camera dot */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{
                  background: 'rgba(255,148,122,0.2)',
                  boxShadow: '0 0 4px rgba(255,148,122,0.3)',
                }} />
              </div>
            </div>

            {/* Side buttons */}
            <div className="absolute -right-[5px] top-20 w-[3px] h-8 rounded-r-sm" style={{ background: 'rgba(255,148,122,0.3)' }} />
            <div className="absolute -right-[5px] top-32 w-[3px] h-5 rounded-r-sm" style={{ background: 'rgba(255,148,122,0.3)' }} />
            <div className="absolute -left-[5px] top-24 w-[3px] h-10 rounded-l-sm" style={{ background: 'rgba(255,148,122,0.2)' }} />

            {/* Screen turns on effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{ borderRadius: 29 }}
              initial={{ background: '#0A0A14' }}
              animate={phase >= 1
                ? { background: 'rgba(10,10,20,0.9)' }
                : { background: '#0A0A14' }
              }
              transition={{ duration: 0.4 }}
            />

            {/* Status bar */}
            <motion.div
              className="flex items-center justify-between px-6 pt-7 relative"
              style={{ zIndex: 10 }}
              initial={{ opacity: 0 }}
              animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-[10px] font-bold text-white">9:41</span>
              <div className="flex gap-1.5 items-center">
                {/* WiFi icon */}
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1 3C3.5 0.5 8.5 0.5 11 3" stroke="rgba(255,148,122,0.6)" strokeWidth="1" strokeLinecap="round" />
                  <path d="M3 5.5C4.5 4 7.5 4 9 5.5" stroke="rgba(255,148,122,0.6)" strokeWidth="1" strokeLinecap="round" />
                  <circle cx="6" cy="8" r="1" fill="#FF947A" />
                </svg>
                {/* Battery */}
                <div className="flex items-center gap-[1px]">
                  <div className="w-5 h-2.5 rounded-[2px] border border-white/30 p-[1px]">
                    <motion.div
                      className="h-full rounded-[1px]"
                      style={{ background: '#FF947A' }}
                      initial={{ width: '0%' }}
                      animate={phase >= 1 ? { width: '80%' } : { width: '0%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <div className="w-[2px] h-1.5 rounded-r-[1px]" style={{ background: 'rgba(255,255,255,0.3)' }} />
                </div>
              </div>
            </motion.div>

            {/* Screen Content */}
            <div className="px-3 pt-2" style={{ zIndex: 5, position: 'relative' }}>
              {/* App header bar */}
              <motion.div
                className="h-8 rounded-lg flex items-center justify-between px-3 mb-2"
                style={{ background: 'rgba(255,148,122,0.12)' }}
                initial={{ y: -20, opacity: 0 }}
                animate={phase >= 2 ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-[10px] font-bold" style={{ color: '#FF947A' }}>MyApp</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,148,122,0.2)' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,148,122,0.15)' }} />
                </div>
              </motion.div>

              {/* Hero image placeholder */}
              <motion.div
                className="h-24 rounded-xl mb-2 overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,148,122,0.25), rgba(2,82,89,0.25))',
                  border: '1px solid rgba(255,148,122,0.1)',
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={phase >= 2 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.15 }}
              >
                {/* Shimmer effect inside hero */}
                {phase >= 3 && !prefersReducedMotion && (
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,148,122,0.08), transparent)',
                    }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                  />
                )}
                {/* Fake image content */}
                <div className="p-3 flex flex-col justify-end h-full">
                  <div className="h-1.5 rounded-full w-3/4 mb-1" style={{ background: 'rgba(255,255,255,0.15)' }} />
                  <div className="h-1 rounded-full w-1/2" style={{ background: 'rgba(255,255,255,0.08)' }} />
                </div>
              </motion.div>

              {/* Content cards (3 staggered) */}
              {[0, 1, 2].map(idx => (
                <motion.div
                  key={idx}
                  className="h-12 rounded-lg mb-1.5 flex items-center gap-2 px-2.5"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(4px)',
                  }}
                  initial={{ x: 60, opacity: 0 }}
                  animate={phase >= 2 ? { x: 0, opacity: 1 } : { x: 60, opacity: 0 }}
                  transition={{ duration: 0.35, delay: 0.35 + idx * 0.2 }}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{
                    background: `rgba(255,148,122,${0.12 + idx * 0.06})`,
                    border: '1px solid rgba(255,148,122,0.15)',
                  }}>
                    <div className="w-3 h-3 rounded-sm" style={{ background: `rgba(255,148,122,${0.3 + idx * 0.1})` }} />
                  </div>
                  <div className="flex-1">
                    <div className="h-1.5 rounded-full mb-1" style={{ background: 'rgba(255,255,255,0.15)', width: `${75 - idx * 12}%` }} />
                    <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', width: `${55 + idx * 8}%` }} />
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(255,148,122,0.3)' }} />
                </motion.div>
              ))}

              {/* Action button */}
              <motion.div
                className="h-9 rounded-xl flex items-center justify-center mt-2 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #FF947A, #FF7A5C)',
                  boxShadow: '0 4px 15px rgba(255,148,122,0.3)',
                }}
                initial={{ scale: 0 }}
                animate={phase >= 3 ? { scale: [0, 1.1, 1] } : { scale: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.2 }}
              >
                <span className="text-[9px] font-bold text-[#080810] tracking-wider uppercase">Get Started</span>
                {/* Button shine */}
                {phase >= 3 && !prefersReducedMotion && (
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    }}
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                )}
              </motion.div>
            </div>

            {/* Bottom navigation bar */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 flex justify-around items-center px-6 py-3"
              style={{ borderTop: '1px solid rgba(255,148,122,0.08)', background: 'rgba(10,10,20,0.8)', zIndex: 10 }}
              initial={{ opacity: 0 }}
              animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {[
                { active: true, label: 'Home' },
                { active: false, label: 'Search' },
                { active: false, label: 'Profile' },
              ].map((tab, idx) => (
                <div key={idx} className="relative flex flex-col items-center gap-0.5">
                  <div className="w-4 h-4 rounded-md" style={{
                    background: `rgba(255,148,122,${tab.active ? 0.6 : 0.15})`,
                  }} />
                  <span className="text-[5px]" style={{ color: tab.active ? '#FF947A' : 'rgba(255,255,255,0.3)' }}>
                    {tab.label}
                  </span>
                  {/* Active indicator */}
                  {tab.active && (
                    <div className="absolute -bottom-1 w-4 h-[2px] rounded-full" style={{ background: '#FF947A' }} />
                  )}
                  {/* Notification badge on last tab */}
                  {idx === 2 && phase >= 3 && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full flex items-center justify-center"
                      style={{ background: '#FF947A', boxShadow: '0 0 6px rgba(255,148,122,0.6)' }}
                      animate={!prefersReducedMotion ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-[5px] font-bold text-[#080810]">3</span>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Home indicator line */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-[3px] rounded-full"
              style={{ background: 'rgba(255,255,255,0.15)', zIndex: 15 }} />

            {/* Scanline sweep */}
            {phase >= 3 && !prefersReducedMotion && (
              <motion.div
                className="absolute left-0 right-0 h-[1px] pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,148,122,0.2), transparent)',
                  boxShadow: '0 0 8px rgba(255,148,122,0.1)',
                  zIndex: 30,
                }}
                initial={{ top: 0 }}
                animate={{ top: '100%' }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 0 }}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
