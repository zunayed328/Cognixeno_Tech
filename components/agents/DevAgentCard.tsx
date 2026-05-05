'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const codeLines = [
  { text: '// Building Mobile App Component', color: 'rgba(255,148,122,0.45)', indent: 0 },
  { text: 'const App = () => {', color: '#e0e0f0', indent: 0 },
  { text: 'const [data, setData] =', color: '#e0e0f0', indent: 1 },
  { text: 'useState(null)', color: '#FF947A', indent: 2 },
  { text: '', color: '', indent: 0 },
  { text: 'return (', color: '#e0e0f0', indent: 1 },
  { text: '<MobileScreen', color: '#FF947A', indent: 2 },
  { text: 'data={data}', color: '#e0e0f0', indent: 3 },
  { text: '/>', color: '#FF947A', indent: 2 },
  { text: ')', color: '#e0e0f0', indent: 1 },
  { text: '}', color: '#e0e0f0', indent: 0 },
]

export default function DevAgentCard() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-30px' })
  const prefersReducedMotion = useReducedMotion()
  const [visibleLines, setVisibleLines] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [complete, setComplete] = useState(false)

  // Code typing animation
  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      if (prefersReducedMotion) { setVisibleLines(codeLines.length); setProgress(100); setComplete(true) }
      else { setVisibleLines(0); setCharIndex(0); setProgress(0); setComplete(false) }
      return
    }

    let lineIdx = 0
    let cIdx = 0
    setComplete(false)

    const iv = setInterval(() => {
      if (lineIdx >= codeLines.length) {
        clearInterval(iv)
        setComplete(true)
        return
      }

      const line = codeLines[lineIdx]
      if (line.text === '') {
        lineIdx++
        setVisibleLines(lineIdx)
        setProgress(Math.round((lineIdx / codeLines.length) * 100))
        return
      }

      cIdx++
      setCharIndex(cIdx)

      if (cIdx >= line.text.length) {
        lineIdx++
        cIdx = 0
        setVisibleLines(lineIdx)
        setProgress(Math.round((lineIdx / codeLines.length) * 100))
      }
    }, 35)

    return () => clearInterval(iv)
  }, [isInView, prefersReducedMotion])

  // Loop: reset after complete
  useEffect(() => {
    if (!complete || prefersReducedMotion) return
    const t = setTimeout(() => {
      setVisibleLines(0)
      setCharIndex(0)
      setProgress(0)
      setComplete(false)
    }, 3000)
    return () => clearTimeout(t)
  }, [complete, prefersReducedMotion])

  return (
    <div ref={ref} style={{ width: '100%', maxWidth: 280, willChange: 'transform' }}>
      {/* Terminal window */}
      <div
        className="overflow-hidden"
        style={{
          borderRadius: 12,
          border: '1px solid rgba(255,148,122,0.2)',
          background: 'rgba(8,8,16,0.9)',
          boxShadow: '0 15px 50px rgba(0,0,0,0.5)',
        }}
      >
        {/* Terminal chrome */}
        <div className="flex items-center gap-2 px-3 py-2" style={{
          background: 'rgba(255,148,122,0.04)',
          borderBottom: '1px solid rgba(255,148,122,0.1)',
        }}>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
            <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <div className="w-2 h-2 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-[8px] font-mono text-[#6B6B8A] ml-1">Dev Agent Terminal</span>
          <div className="ml-auto flex items-center gap-1">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"
              animate={!prefersReducedMotion ? { opacity: [1, 0.4, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-[6px] text-[#22c55e] font-bold">ACTIVE</span>
          </div>
        </div>

        {/* Code area */}
        <div className="p-3 font-mono" style={{ minHeight: 160 }}>
          {codeLines.map((line, i) => {
            if (i > visibleLines) return null
            const isCurrentLine = i === visibleLines
            const displayText = isCurrentLine
              ? line.text.slice(0, charIndex)
              : line.text

            return (
              <div key={i} className="flex items-start gap-2" style={{ minHeight: 16 }}>
                {/* Line number */}
                <span className="text-[8px] w-4 text-right flex-shrink-0 select-none" style={{
                  color: isCurrentLine ? 'rgba(255,148,122,0.5)' : 'rgba(255,255,255,0.15)',
                }}>
                  {i + 1}
                </span>
                {/* Code content */}
                <span className="text-[9px] leading-relaxed" style={{
                  color: line.color || '#e0e0f0',
                  paddingLeft: `${line.indent * 10}px`,
                }}>
                  {displayText}
                  {isCurrentLine && !prefersReducedMotion && (
                    <motion.span
                      className="inline-block w-[1px] h-[10px] ml-[1px]"
                      style={{ background: '#FF947A' }}
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  )}
                </span>
              </div>
            )
          })}
        </div>

        {/* Build progress bar */}
        <div className="px-3 pb-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[7px] font-mono" style={{ color: 'rgba(255,148,122,0.5)' }}>
              {complete ? '✓ Build Complete' : `Building... ${progress}%`}
            </span>
            <span className="text-[7px] font-mono" style={{ color: 'rgba(255,148,122,0.3)' }}>
              {complete ? 'PASSED' : 'COMPILING'}
            </span>
          </div>
          <div className="h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(255,148,122,0.08)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{
                background: complete
                  ? 'linear-gradient(90deg, #22c55e, #4ade80)'
                  : 'linear-gradient(90deg, #FF947A, #FF7A5C)',
                boxShadow: complete
                  ? '0 0 8px rgba(34,197,94,0.5)'
                  : '0 0 8px rgba(255,148,122,0.5)',
              }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>

        {/* Success message */}
        {complete && (
          <motion.div
            className="px-3 pb-2"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-md" style={{
              background: 'rgba(34,197,94,0.08)',
              border: '1px solid rgba(34,197,94,0.15)',
            }}>
              <span className="text-[7px]">✅</span>
              <span className="text-[7px] font-semibold text-[#22c55e]">
                Component Built Successfully — Testing... 100%
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
