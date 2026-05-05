'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function NavigationProgress() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setLoading(true)
    setProgress(0)

    const timer1 = setTimeout(() => setProgress(30), 50)
    const timer2 = setTimeout(() => setProgress(60), 150)
    const timer3 = setTimeout(() => setProgress(85), 300)
    const timer4 = setTimeout(() => {
      setProgress(100)
      setTimeout(() => setLoading(false), 300)
    }, 500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [pathname])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999,
            height: '3px',
            background: 'linear-gradient(90deg, #C8A8E9, #FF947A, #E1FF51)',
            width: `${progress}%`,
            transition: 'width 300ms ease',
            boxShadow: '0 0 10px rgba(200,168,233,0.8), 0 0 20px rgba(200,168,233,0.4)',
            borderRadius: '0 2px 2px 0'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </AnimatePresence>
  )
}
