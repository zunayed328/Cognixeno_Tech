'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const urlText = 'cognixenotech.com'
const codeRain = ['<div>', '</div>', 'className=', '{styles}', 'export', '<App/>',  'const', 'return']

export default function WebDevAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const prefersReducedMotion = useReducedMotion()
  const [phase, setPhase] = useState(0)
  const [typedUrl, setTypedUrl] = useState('')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (!isInView) { setPhase(0); setTypedUrl(''); return }
    if (prefersReducedMotion) { setPhase(4); setTypedUrl(urlText); return }
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 600)
    const t3 = setTimeout(() => setPhase(3), 1400)
    const t4 = setTimeout(() => setPhase(4), 1700)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [isInView, prefersReducedMotion])

  // URL typing effect
  useEffect(() => {
    if (phase < 1 || prefersReducedMotion) { return }
    let i = 0
    setTypedUrl('')
    const iv = setInterval(() => {
      if (i <= urlText.length) {
        setTypedUrl(urlText.slice(0, i))
        i++
      } else clearInterval(iv)
    }, 60)
    return () => clearInterval(iv)
  }, [phase, prefersReducedMotion])

  // Page scroll idle animation
  useEffect(() => {
    if (phase < 4 || prefersReducedMotion) return
    let frame: number
    let dir = 1
    let y = 0
    const animate = () => {
      y += dir * 0.15
      if (y > 15) dir = -1
      if (y < 0) dir = 1
      setScrollY(y)
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [phase, prefersReducedMotion])

  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ width: 360, height: 280, willChange: 'transform' }}>
      {/* Code rain outside browser */}
      {phase >= 4 && !prefersReducedMotion && codeRain.map((s, i) => (
        <motion.span
          key={`rain-${i}`}
          className="absolute text-[8px] font-mono pointer-events-none select-none"
          style={{
            color: 'rgba(2,82,89,0.3)',
            left: `${3 + i * 12}%`,
            top: -10,
            willChange: 'transform, opacity',
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: [0, 0.5, 0.3, 0], y: 290 }}
          transition={{ duration: 5, delay: i * 0.6, repeat: Infinity, ease: 'linear' }}
        >
          {s}
        </motion.span>
      ))}

      {/* Browser window */}
      <motion.div
        className="relative w-full"
        style={{ willChange: 'transform', perspective: 800 }}
        initial={{ scale: 0.3, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        whileHover={!prefersReducedMotion ? { rotateX: 5, transition: { duration: 0.3 } } : {}}
      >
        <div
          className="overflow-hidden"
          style={{
            borderRadius: 12,
            border: '1px solid rgba(2,82,89,0.4)',
            background: '#0C0C18',
            boxShadow: '0 25px 80px rgba(0,0,0,0.6), 0 0 30px rgba(2,82,89,0.05)',
          }}
        >
          {/* Browser Chrome bar */}
          <div className="flex items-center gap-2 px-3 py-2" style={{
            background: 'rgba(2,82,89,0.06)',
            borderBottom: '1px solid rgba(2,82,89,0.15)',
          }}>
            {/* Traffic lights */}
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            </div>
            {/* Tab */}
            <div className="ml-2 px-3 py-0.5 rounded-md text-[8px] font-medium text-white flex items-center gap-1.5" style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div className="w-2 h-2 rounded-sm" style={{ background: 'rgba(2,82,89,0.5)' }} />
              Cognixeno Tech
            </div>
            {/* New tab button */}
            <div className="w-4 h-4 rounded flex items-center justify-center text-[10px] text-white/20">+</div>
          </div>

          {/* URL bar */}
          <div className="px-3 py-1.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg" style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.03)',
            }}>
              {/* Lock icon */}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <rect x="2" y="5" width="6" height="4" rx="1" stroke="rgba(2,82,89,0.5)" strokeWidth="1" />
                <path d="M3.5 5V3.5a1.5 1.5 0 013 0V5" stroke="rgba(2,82,89,0.5)" strokeWidth="1" />
              </svg>
              <span className="text-[9px] font-mono text-[#A0A0B8] flex-1">
                <span style={{ color: 'rgba(2,82,89,0.6)' }}>https://</span>
                {typedUrl}
                {phase >= 1 && phase < 3 && !prefersReducedMotion && (
                  <motion.span
                    className="inline-block w-[1px] h-2.5 ml-[1px]"
                    style={{ background: '#025259' }}
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.3, repeat: Infinity }}
                  />
                )}
              </span>
            </div>
          </div>

          {/* Loading bar */}
          {phase >= 2 && phase < 4 && !prefersReducedMotion && (
            <motion.div
              className="h-[2px]"
              style={{ background: 'linear-gradient(90deg, #025259, #43A8A0, #025259)', boxShadow: '0 0 8px rgba(2,82,89,0.4)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.4 }}
            />
          )}

          {/* Page content area */}
          <div className="overflow-hidden" style={{ height: 170 }}>
            <motion.div
              className="p-3 space-y-2"
              style={{ transform: `translateY(-${scrollY}px)` }}
            >
              {/* Nav bar inside page */}
              <motion.div
                className="flex items-center justify-between px-2.5 py-1.5 rounded-lg"
                style={{ background: 'rgba(2,82,89,0.06)', border: '1px solid rgba(2,82,89,0.08)' }}
                initial={{ y: -12, opacity: 0 }}
                animate={phase >= 3 ? { y: 0, opacity: 1 } : { y: -12, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm" style={{ background: 'rgba(2,82,89,0.5)' }} />
                  <div className="w-10 h-2 rounded-full" style={{ background: 'rgba(2,82,89,0.4)' }} />
                </div>
                <div className="flex gap-3">
                  {['Home', 'About', 'Services', 'Contact'].map(n => (
                    <span key={n} className="text-[6px] font-semibold" style={{ color: 'rgba(255,255,255,0.4)' }}>{n}</span>
                  ))}
                </div>
              </motion.div>

              {/* Hero section */}
              <div className="flex gap-3">
                <motion.div
                  className="flex-1 space-y-1.5 py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  <motion.div
                    className="text-[9px] font-extrabold text-white tracking-tight"
                    initial={{ opacity: 0 }}
                    animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    Build Your Future
                  </motion.div>
                  <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)', width: '85%' }} />
                  <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.05)', width: '70%' }} />
                  <motion.div
                    className="w-16 h-4 rounded-md mt-2 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #025259, #037370)' }}
                    initial={{ scale: 0 }}
                    animate={phase >= 3 ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: 'spring', delay: 0.4 }}
                  >
                    <span className="text-[5px] text-white font-bold">Learn More</span>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="w-24 h-24 rounded-lg overflow-hidden relative"
                  style={{
                    background: 'linear-gradient(135deg, rgba(2,82,89,0.3), rgba(3,115,112,0.2))',
                    border: '1px solid rgba(2,82,89,0.15)',
                  }}
                  initial={{ scale: 0 }}
                  animate={phase >= 3 ? { scale: 1 } : { scale: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.25 }}
                >
                  {/* Grid pattern inside */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `
                      linear-gradient(rgba(2,82,89,0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(2,82,89,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '8px 8px',
                  }} />
                </motion.div>
              </div>

              {/* Card grid */}
              <div className="flex gap-1.5">
                {[0, 1, 2].map(idx => (
                  <motion.div
                    key={idx}
                    className="flex-1 h-14 rounded-lg overflow-hidden"
                    style={{
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}
                    initial={{ y: 25, opacity: 0 }}
                    animate={phase >= 4 ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.12 }}
                  >
                    <div className="p-1.5">
                      <div className="w-5 h-5 rounded-md mb-1" style={{
                        background: `rgba(2,82,89,${0.12 + idx * 0.08})`,
                        border: '1px solid rgba(2,82,89,0.15)',
                      }} />
                      <div className="h-1 rounded-full mb-0.5" style={{ background: 'rgba(255,255,255,0.1)', width: '85%' }} />
                      <div className="h-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)', width: '65%' }} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <motion.div
                className="h-6 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(2,82,89,0.05)', border: '1px solid rgba(2,82,89,0.08)' }}
                initial={{ y: 10, opacity: 0 }}
                animate={phase >= 4 ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
              >
                <span className="text-[5px] text-white/20">© 2025 Cognixeno Tech</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Browser cursor */}
        {phase >= 4 && !prefersReducedMotion && (
          <motion.div
            className="absolute pointer-events-none z-20"
            style={{ width: 8, height: 12 }}
            initial={{ left: '60%', top: '50%', opacity: 0 }}
            animate={{
              left: ['60%', '40%', '50%', '55%', '45%', '60%'],
              top: ['50%', '60%', '55%', '65%', '50%', '50%'],
              opacity: [0, 1, 1, 1, 1, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg viewBox="0 0 8 12" fill="none">
              <path d="M0 0L0 10L3 7.5L5.5 12L7 11L4.5 6.5L8 6L0 0Z" fill="white" fillOpacity="0.6" />
            </svg>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
