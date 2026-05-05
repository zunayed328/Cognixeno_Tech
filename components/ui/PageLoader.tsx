'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PageLoader() {
  const pathname = usePathname()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
    const timer = setTimeout(() => setShow(false), 600)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key={pathname}
          initial={{ scaleX: 1, transformOrigin: 'left' }}
          animate={{ scaleX: 0, transformOrigin: 'right' }}
          exit={{ scaleX: 0 }}
          transition={{ 
            duration: 0.3, 
            ease: [0.76, 0, 0.24, 1] 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9000,
            background: 'linear-gradient(135deg, #1A0030 0%, #080810 50%, #00272C 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <svg 
              width="60" 
              height="60" 
              viewBox="0 0 100 100"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(139,0,255,0.8))'
              }}
            >
              <defs>
                <linearGradient 
                  id="xGrad" 
                  x1="0%" y1="0%" 
                  x2="100%" y2="100%"
                >
                  <stop offset="0%" stopColor="#E8E8E8"/>
                  <stop offset="50%" stopColor="#C0C0C0"/>
                  <stop offset="100%" stopColor="#6A6A6A"/>
                </linearGradient>
              </defs>
              <motion.line
                x1="15" y1="15" x2="85" y2="85"
                stroke="url(#xGrad)"
                strokeWidth="14"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
              <motion.line
                x1="85" y1="15" x2="15" y2="85"
                stroke="url(#xGrad)"
                strokeWidth="14"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 0.4, 
                  ease: 'easeOut',
                  delay: 0.15
                }}
              />
            </svg>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center'
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    delay: i * 0.08
                  }}
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#C8A8E9'
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
