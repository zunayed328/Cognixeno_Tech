'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const emails = [
  { from: 'Client A', subject: 'Urgent: Project Update Needed', time: '2m ago', unread: true },
  { from: 'Enterprise Corp', subject: 'Partnership Inquiry', time: '5m ago', unread: false },
  { from: 'Support Request', subject: 'Technical Issue - Priority', time: '8m ago', unread: false },
]

const responseText = 'Dear Client A, Thank you for reaching out. Our team has reviewed your project requirements and I\'m pleased to confirm that all milestones are on track...'

export default function EmailSupportAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const prefersReducedMotion = useReducedMotion()
  const [phase, setPhase] = useState(0)
  const [typedResponse, setTypedResponse] = useState('')
  const [selectedEmail, setSelectedEmail] = useState(-1)
  const [sent, setSent] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!isInView) { setPhase(0); setTypedResponse(''); setSelectedEmail(-1); setSent(false); return }
    if (prefersReducedMotion) { setPhase(5); setTypedResponse(responseText); setSelectedEmail(0); return }
    const t1 = setTimeout(() => setPhase(1), 400)
    const t2 = setTimeout(() => setPhase(2), 1200)
    const t3 = setTimeout(() => { setPhase(3); setSelectedEmail(0) }, 2200)
    const t4 = setTimeout(() => setPhase(4), 3000)
    const t5 = setTimeout(() => setPhase(5), 5500)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5) }
  }, [isInView, prefersReducedMotion])

  // Response typing effect
  useEffect(() => {
    if (phase < 4 || prefersReducedMotion) { setTypedResponse(''); return }
    let i = 0
    const speed = hovering ? 12 : 25
    const iv = setInterval(() => {
      if (i <= responseText.length) { setTypedResponse(responseText.slice(0, i)); i++ }
      else clearInterval(iv)
    }, speed)
    return () => clearInterval(iv)
  }, [phase, hovering, prefersReducedMotion])

  // Send animation trigger
  useEffect(() => {
    if (phase < 5) { setSent(false); return }
    const t = setTimeout(() => setSent(true), 500)
    return () => clearTimeout(t)
  }, [phase])

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center"
      style={{ width: 320, height: 270, willChange: 'transform' }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.div
        className="w-full overflow-hidden"
        style={{
          borderRadius: 14,
          border: '1px solid rgba(247,182,56,0.25)',
          background: '#0C0C18',
          boxShadow: '0 25px 80px rgba(0,0,0,0.6), 0 0 30px rgba(247,182,56,0.03)',
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Window header */}
        <div className="flex items-center gap-2 px-3 py-2" style={{
          background: 'rgba(247,182,56,0.04)',
          borderBottom: '1px solid rgba(247,182,56,0.08)',
        }}>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
            <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <div className="w-2 h-2 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-[9px] text-[#6B6B8A] font-semibold ml-2">AI Email Manager</span>
          <div className="ml-auto flex items-center gap-1">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"
              animate={!prefersReducedMotion ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[7px] text-[#22c55e] font-bold">LIVE</span>
          </div>
        </div>

        <div className="flex" style={{ height: 215 }}>
          {/* Sidebar */}
          <div className="w-16 p-1.5 space-y-0.5" style={{ borderRight: '1px solid rgba(255,255,255,0.04)' }}>
            {['📥 Inbox', '📤 Sent', '📝 Drafts', '🤖 AI'].map((folder, i) => (
              <div
                key={folder}
                className="px-1.5 py-1 rounded text-[6px] font-semibold"
                style={{
                  color: i === 0 ? '#F7B638' : '#6B6B8A',
                  background: i === 0 ? 'rgba(247,182,56,0.08)' : 'transparent',
                }}
              >
                {folder}
                {i === 0 && <span className="ml-0.5 text-[5px] px-1 py-[1px] rounded-full" style={{ background: 'rgba(247,182,56,0.2)', color: '#F7B638' }}>3</span>}
              </div>
            ))}

            {/* Email counter */}
            {hovering && (
              <motion.div
                className="mt-2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="text-[6px] font-mono" style={{ color: 'rgba(247,182,56,0.5)' }}>247 today</span>
              </motion.div>
            )}
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Email list */}
            <div className="flex-1 p-1.5 space-y-1 overflow-hidden">
              {emails.map((email, i) => (
                <motion.div
                  key={email.from}
                  className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg"
                  style={{
                    background: selectedEmail === i ? 'rgba(247,182,56,0.06)' : 'transparent',
                    border: selectedEmail === i ? '1px solid rgba(247,182,56,0.15)' : '1px solid transparent',
                  }}
                  initial={{ x: 60, opacity: 0 }}
                  animate={phase >= 1 ? { x: 0, opacity: 1 } : { x: 60, opacity: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.25 }}
                >
                  {/* Unread dot */}
                  {email.unread && (
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#F7B638', boxShadow: '0 0 4px rgba(247,182,56,0.5)' }}
                      animate={!prefersReducedMotion ? { scale: [1, 1.4, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-bold text-white truncate">{email.from}</span>
                      <span className="text-[6px] text-[#6B6B8A] flex-shrink-0 ml-1">{email.time}</span>
                    </div>
                    <p className="text-[6.5px] text-[#A0A0B8] truncate leading-relaxed">{email.subject}</p>
                  </div>

                  {/* Priority indicator */}
                  {i === 0 && (
                    <div className="w-1 h-4 rounded-full flex-shrink-0" style={{
                      background: 'linear-gradient(180deg, #F7B638, rgba(247,182,56,0.2))',
                    }} />
                  )}
                </motion.div>
              ))}

              {/* AI analysis bar */}
              {phase >= 3 && (
                <motion.div
                  className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg mt-1"
                  style={{
                    background: 'rgba(247,182,56,0.04)',
                    border: '1px solid rgba(247,182,56,0.12)',
                  }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[8px]">🤖</span>
                  <span className="text-[7px] font-semibold" style={{ color: '#F7B638' }}>
                    {phase >= 5 ? 'Response sent ✓' : phase >= 4 ? 'Generating response...' : 'AI analyzing...'}
                  </span>
                  {phase >= 3 && phase < 5 && !prefersReducedMotion && (
                    <motion.span className="flex gap-[2px] ml-auto">
                      {[0, 1, 2].map(d => (
                        <motion.div
                          key={d}
                          className="w-1 h-1 rounded-full"
                          style={{ background: '#F7B638' }}
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 0.5, delay: d * 0.15, repeat: Infinity, repeatDelay: 0.2 }}
                        />
                      ))}
                    </motion.span>
                  )}
                </motion.div>
              )}
            </div>

            {/* Response preview / reading pane */}
            {phase >= 4 && (
              <motion.div
                className="px-2 py-1.5 mx-1.5 mb-1 rounded-lg"
                style={{
                  background: 'rgba(255,255,255,0.015)',
                  border: '1px solid rgba(255,255,255,0.04)',
                  maxHeight: 55,
                  overflow: 'hidden',
                }}
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[6px] font-bold" style={{ color: 'rgba(247,182,56,0.6)' }}>TO: client-a@email.com</span>
                </div>
                <p className="text-[6.5px] text-[#A0A0B8] leading-relaxed">
                  {typedResponse}
                  {phase < 5 && !prefersReducedMotion && (
                    <motion.span
                      className="inline-block w-[1px] h-2 ml-[1px]"
                      style={{ background: '#F7B638' }}
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.4, repeat: Infinity }}
                    />
                  )}
                </p>
              </motion.div>
            )}

            {/* Send button + paper plane */}
            {phase >= 5 && (
              <div className="relative mx-1.5 mb-1.5">
                <motion.div
                  className="py-1 rounded-lg text-center relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #F7B638, #D4941F)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span className="text-[7px] font-bold text-[#080810]">
                    {sent ? 'Sent Successfully ✓' : 'Sending...'}
                  </span>
                </motion.div>

                {/* Paper plane flying animation */}
                {sent && !prefersReducedMotion && (
                  <motion.div
                    className="absolute pointer-events-none"
                    style={{ fontSize: 12, zIndex: 20 }}
                    initial={{ left: '50%', bottom: 10, opacity: 1, rotate: -20 }}
                    animate={{
                      left: ['50%', '120%'],
                      bottom: [10, 60],
                      opacity: [1, 1, 0],
                      rotate: [-20, 15],
                      scale: [1, 0.6],
                    }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    ✉️
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
