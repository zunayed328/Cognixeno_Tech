'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const codeSnippets = ['import', 'useState', 'render()', 'const', '<App />', 'export']

export default function MobileAppAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (!isInView) { setPhase(0); return }
    const t1 = setTimeout(() => setPhase(1), 200)
    const t2 = setTimeout(() => setPhase(2), 800)
    const t3 = setTimeout(() => setPhase(3), 1400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [isInView])

  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ width: 220, height: 400, willChange: 'transform' }}>
      {/* Floating code particles */}
      {isInView && phase >= 3 && codeSnippets.map((s, i) => (
        <motion.span
          key={s}
          className="absolute text-[10px] font-mono pointer-events-none select-none"
          style={{ color: 'rgba(255,148,122,0.4)', left: `${10 + (i % 3) * 35}%`, top: `${20 + (i % 4) * 18}%` }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.6, 0], y: -40 }}
          transition={{ duration: 3, delay: i * 0.8, repeat: Infinity, ease: 'easeOut' }}
        >
          {s}
        </motion.span>
      ))}

      {/* Phone Frame */}
      <motion.div
        className="relative"
        style={{ width: 180, height: 360, willChange: 'transform' }}
        initial={{ y: 80, opacity: 0, scale: 0.8 }}
        animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 80, opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        whileHover={{ rotateY: 8, rotateX: -4 }}
      >
        {/* Phone body */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            borderRadius: 32,
            border: '3px solid rgba(255,148,122,0.4)',
            background: '#0A0A14',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6), inset 0 0 30px rgba(255,148,122,0.03)',
            perspective: 1000,
          }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 rounded-b-2xl" style={{ background: '#0A0A14', border: '1px solid rgba(255,148,122,0.15)', borderTop: 'none', zIndex: 20 }} />

          {/* Side buttons */}
          <div className="absolute -right-[5px] top-20 w-[3px] h-8 rounded-r-sm" style={{ background: 'rgba(255,148,122,0.3)' }} />
          <div className="absolute -right-[5px] top-32 w-[3px] h-5 rounded-r-sm" style={{ background: 'rgba(255,148,122,0.3)' }} />

          {/* Status bar */}
          <motion.div
            className="flex items-center justify-between px-6 pt-2 relative"
            style={{ zIndex: 10 }}
            initial={{ opacity: 0 }}
            animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[9px] font-bold text-white">9:41</span>
            <div className="flex gap-1">
              <div className="w-3 h-2 rounded-[1px]" style={{ background: 'rgba(255,148,122,0.6)' }} />
              <div className="w-2.5 h-2 rounded-[1px]" style={{ background: 'rgba(255,255,255,0.4)' }} />
            </div>
          </motion.div>

          {/* Screen Content */}
          <div className="px-3 pt-3" style={{ zIndex: 5 }}>
            {/* App header */}
            <motion.div
              className="h-7 rounded-lg flex items-center px-3 mb-2"
              style={{ background: 'rgba(255,148,122,0.12)' }}
              initial={{ y: -20, opacity: 0 }}
              animate={phase >= 2 ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[9px] font-bold" style={{ color: '#FF947A' }}>MyApp</span>
            </motion.div>

            {/* Hero image */}
            <motion.div
              className="h-20 rounded-xl mb-2"
              style={{ background: 'linear-gradient(135deg, rgba(255,148,122,0.3), rgba(2,82,89,0.3))' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={phase >= 2 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
            />

            {/* Content cards */}
            {[0, 1, 2].map(idx => (
              <motion.div
                key={idx}
                className="h-10 rounded-lg mb-1.5 flex items-center gap-2 px-2"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                initial={{ x: 40, opacity: 0 }}
                animate={phase >= 2 ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + idx * 0.15 }}
              >
                <div className="w-6 h-6 rounded-md" style={{ background: `rgba(255,148,122,${0.15 + idx * 0.05})` }} />
                <div className="flex-1">
                  <div className="h-1.5 rounded-full mb-1" style={{ background: 'rgba(255,255,255,0.15)', width: `${70 - idx * 10}%` }} />
                  <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', width: `${50 + idx * 5}%` }} />
                </div>
              </motion.div>
            ))}

            {/* Action button */}
            <motion.div
              className="h-8 rounded-xl flex items-center justify-center mt-2"
              style={{ background: 'linear-gradient(135deg, #FF947A, #FF7A5C)' }}
              initial={{ scale: 0 }}
              animate={phase >= 3 ? { scale: [0, 1.1, 1] } : { scale: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.2 }}
            >
              <span className="text-[8px] font-bold text-[#080810]">Get Started</span>
            </motion.div>
          </div>

          {/* Bottom nav */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 flex justify-around items-center px-6 py-3"
            style={{ borderTop: '1px solid rgba(255,148,122,0.1)' }}
            initial={{ opacity: 0 }}
            animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {[0, 1, 2].map(idx => (
              <div key={idx} className="relative">
                <div className="w-4 h-4 rounded-md" style={{ background: `rgba(255,148,122,${idx === 0 ? 0.6 : 0.2})` }} />
                {idx === 2 && phase >= 3 && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                    style={{ background: '#FF947A' }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* Home indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />

          {/* Scanline */}
          {phase >= 3 && (
            <motion.div
              className="absolute left-0 right-0 h-[1px] pointer-events-none"
              style={{ background: 'rgba(255,148,122,0.15)', zIndex: 30 }}
              initial={{ top: 0 }}
              animate={{ top: '100%' }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
            />
          )}
        </div>

        {/* Floating animation */}
        {phase >= 3 && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </motion.div>
    </div>
  )
}
