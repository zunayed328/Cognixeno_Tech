'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const urlText = 'cognixenotech.com'

export default function WebDevAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const [phase, setPhase] = useState(0)
  const [typedUrl, setTypedUrl] = useState('')

  useEffect(() => {
    if (!isInView) { setPhase(0); setTypedUrl(''); return }
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 600)
    const t3 = setTimeout(() => setPhase(3), 1400)
    const t4 = setTimeout(() => setPhase(4), 1700)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [isInView])

  // URL typing effect
  useEffect(() => {
    if (phase < 1) { setTypedUrl(''); return }
    let i = 0
    const iv = setInterval(() => {
      if (i <= urlText.length) {
        setTypedUrl(urlText.slice(0, i))
        i++
      } else clearInterval(iv)
    }, 50)
    return () => clearInterval(iv)
  }, [phase])

  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ width: 340, height: 260, willChange: 'transform' }}>
      {/* Code rain outside browser */}
      {phase >= 4 && ['<div>', '</div>', 'className=', '{styles}', 'export', '<App/>'].map((s, i) => (
        <motion.span
          key={s}
          className="absolute text-[9px] font-mono pointer-events-none select-none"
          style={{ color: 'rgba(2,82,89,0.35)', left: `${5 + i * 16}%`, top: 0 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: [0, 0.5, 0], y: 270 }}
          transition={{ duration: 4, delay: i * 0.7, repeat: Infinity, ease: 'linear' }}
        >
          {s}
        </motion.span>
      ))}

      {/* Browser window */}
      <motion.div
        className="relative w-full"
        style={{ willChange: 'transform' }}
        initial={{ scale: 0.3, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        whileHover={{ rotateX: 5 }}
      >
        <div
          className="overflow-hidden"
          style={{
            borderRadius: 12,
            border: '1px solid rgba(2,82,89,0.4)',
            background: '#0C0C18',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}
        >
          {/* Chrome bar */}
          <div className="flex items-center gap-2 px-3 py-2" style={{ background: 'rgba(2,82,89,0.08)', borderBottom: '1px solid rgba(2,82,89,0.15)' }}>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            </div>
            {/* Tab */}
            <div className="ml-2 px-3 py-0.5 rounded-md text-[8px] font-medium text-white" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
              Cognixeno Tech
            </div>
          </div>

          {/* URL bar */}
          <div className="px-3 py-1.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="flex items-center gap-2 px-2 py-1 rounded-md" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(2,82,89,0.5)' }} />
              <span className="text-[9px] font-mono text-[#A0A0B8]">
                {typedUrl}
                {phase >= 1 && phase < 3 && (
                  <motion.span
                    className="inline-block w-[1px] h-2.5 ml-[1px]"
                    style={{ background: '#025259' }}
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                )}
              </span>
            </div>
          </div>

          {/* Loading bar */}
          {phase >= 2 && phase < 4 && (
            <motion.div
              className="h-[2px]"
              style={{ background: '#025259' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.4 }}
            />
          )}

          {/* Page content area */}
          <div className="p-3 space-y-2" style={{ height: 160 }}>
            {/* Nav bar inside page */}
            <motion.div
              className="flex items-center justify-between px-2 py-1 rounded-md"
              style={{ background: 'rgba(2,82,89,0.08)' }}
              initial={{ y: -10, opacity: 0 }}
              animate={phase >= 3 ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-8 h-2 rounded-full" style={{ background: 'rgba(2,82,89,0.5)' }} />
              <div className="flex gap-2">
                {[1, 2, 3, 4].map(n => (
                  <div key={n} className="w-5 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
                ))}
              </div>
            </motion.div>

            {/* Hero section */}
            <div className="flex gap-2">
              <motion.div
                className="flex-1 space-y-1.5 py-2"
                initial={{ opacity: 0 }}
                animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.2)', width: '90%' }} />
                <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.12)', width: '70%' }} />
                <div className="h-1.5 rounded-full mt-2" style={{ background: 'rgba(255,255,255,0.06)', width: '80%' }} />
                <div className="w-14 h-4 rounded-md mt-2" style={{ background: 'linear-gradient(135deg, #025259, #037370)' }} />
              </motion.div>
              <motion.div
                className="w-20 h-20 rounded-lg"
                style={{ background: 'linear-gradient(135deg, rgba(2,82,89,0.3), rgba(3,115,112,0.2))' }}
                initial={{ scale: 0 }}
                animate={phase >= 3 ? { scale: 1 } : { scale: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.3 }}
              />
            </div>

            {/* Card grid */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map(idx => (
                <motion.div
                  key={idx}
                  className="flex-1 h-12 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={phase >= 4 ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <div className="p-1.5">
                    <div className="w-4 h-4 rounded-md mb-1" style={{ background: `rgba(2,82,89,${0.15 + idx * 0.08})` }} />
                    <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)', width: '80%' }} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <motion.div
              className="h-5 rounded-md"
              style={{ background: 'rgba(2,82,89,0.06)' }}
              initial={{ y: 10, opacity: 0 }}
              animate={phase >= 4 ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
