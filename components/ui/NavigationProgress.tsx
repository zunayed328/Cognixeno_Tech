'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function NavigationProgress() {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    setProgress(0)

    const t1 = setTimeout(() => setProgress(40), 0)
    const t2 = setTimeout(() => setProgress(70), 200)
    const t3 = setTimeout(() => setProgress(90), 400)
    const t4 = setTimeout(() => setProgress(100), 700)
    const t5 = setTimeout(() => setVisible(false), 1000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [pathname])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 999999,
            height: '3px',
            width: `${progress}%`,
            background:
              'linear-gradient(90deg, #C8A8E9, #FF947A, #E1FF51)',
            boxShadow:
              '0 0 12px rgba(200,168,233,0.9), 0 0 24px rgba(200,168,233,0.4)',
            borderRadius: '0 2px 2px 0',
            transition: 'width 200ms ease',
            pointerEvents: 'none',
          }}
        />
      )}
    </AnimatePresence>
  )
}
