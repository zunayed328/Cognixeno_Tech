'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const emails = [
  { from: 'Client A', subject: 'Urgent: Project Update', time: '2m ago', unread: true },
  { from: 'Enterprise Corp', subject: 'Partnership Inquiry', time: '5m ago', unread: false },
  { from: 'Support Req.', subject: 'Technical Issue - Priority', time: '8m ago', unread: false },
]

const responseText = 'Dear Client, Thank you for reaching out. Our team has reviewed your request and...'

export default function EmailSupportAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const [phase, setPhase] = useState(0)
  const [typedResponse, setTypedResponse] = useState('')
  const [selectedEmail, setSelectedEmail] = useState(-1)

  useEffect(() => {
    if (!isInView) { setPhase(0); setTypedResponse(''); setSelectedEmail(-1); return }
    const t1 = setTimeout(() => setPhase(1), 400)
    const t2 = setTimeout(() => setPhase(2), 1200)
    const t3 = setTimeout(() => { setPhase(3); setSelectedEmail(0) }, 2400)
    const t4 = setTimeout(() => setPhase(4), 3200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [isInView])

  // Response typing effect
  useEffect(() => {
    if (phase < 4) { setTypedResponse(''); return }
    let i = 0
    const iv = setInterval(() => {
      if (i <= responseText.length) { setTypedResponse(responseText.slice(0, i)); i++ }
      else clearInterval(iv)
    }, 25)
    return () => clearInterval(iv)
  }, [phase])

  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ width: 310, height: 260, willChange: 'transform' }}>
      <motion.div
        className="w-full overflow-hidden"
        style={{ borderRadius: 12, border: '1px solid rgba(247,182,56,0.3)', background: '#0C0C18', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-3 py-2" style={{ background: 'rgba(247,182,56,0.06)', borderBottom: '1px solid rgba(247,182,56,0.1)' }}>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
            <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <div className="w-2 h-2 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-[9px] text-[#6B6B8A] font-semibold ml-2">AI Email Manager</span>
          <div className="ml-auto flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
            <span className="text-[7px] text-[#22c55e] font-bold">LIVE</span>
          </div>
        </div>

        <div className="flex" style={{ height: 200 }}>
          {/* Sidebar */}
          <div className="w-16 p-1.5 space-y-1" style={{ borderRight: '1px solid rgba(255,255,255,0.04)' }}>
            {['Inbox', 'Sent', 'Drafts', 'AI'].map((folder, i) => (
              <div
                key={folder}
                className="px-1.5 py-1 rounded text-[7px] font-semibold"
                style={{
                  color: i === 0 ? '#F7B638' : '#6B6B8A',
                  background: i === 0 ? 'rgba(247,182,56,0.1)' : 'transparent',
                }}
              >
                {folder}
                {i === 0 && <span className="ml-1 text-[6px]" style={{ color: '#F7B638' }}>3</span>}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col">
            {/* Email list */}
            <div className="flex-1 p-1.5 space-y-1 overflow-hidden">
              {emails.map((email, i) => (
                <motion.div
                  key={email.from}
                  className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg cursor-pointer"
                  style={{
                    background: selectedEmail === i ? 'rgba(247,182,56,0.08)' : 'transparent',
                    border: selectedEmail === i ? '1px solid rgba(247,182,56,0.2)' : '1px solid transparent',
                  }}
                  initial={{ x: 50, opacity: 0 }}
                  animate={phase >= 1 ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.25 }}
                >
                  {/* Unread dot */}
                  {email.unread && (
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#F7B638' }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-bold text-white truncate">{email.from}</span>
                      <span className="text-[6px] text-[#6B6B8A] flex-shrink-0">{email.time}</span>
                    </div>
                    <p className="text-[7px] text-[#A0A0B8] truncate">{email.subject}</p>
                  </div>
                </motion.div>
              ))}

              {/* AI analysis bar */}
              {phase >= 3 && (
                <motion.div
                  className="flex items-center gap-1 px-2 py-1 rounded-lg mt-1"
                  style={{ background: 'rgba(247,182,56,0.06)', border: '1px solid rgba(247,182,56,0.15)' }}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[7px]">🤖</span>
                  <span className="text-[7px] font-semibold" style={{ color: '#F7B638' }}>
                    {phase >= 4 ? 'Response generated ✓' : 'AI analyzing...'}
                  </span>
                  {phase < 4 && (
                    <motion.span
                      className="flex gap-[2px] ml-1"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      {[0, 1, 2].map(d => (
                        <div key={d} className="w-1 h-1 rounded-full" style={{ background: '#F7B638' }} />
                      ))}
                    </motion.span>
                  )}
                </motion.div>
              )}
            </div>

            {/* Response preview */}
            {phase >= 4 && (
              <motion.div
                className="px-2 py-1.5 mx-1.5 mb-1.5 rounded-lg"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', maxHeight: 50 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-[7px] text-[#A0A0B8] leading-relaxed">
                  {typedResponse}
                  <motion.span
                    className="inline-block w-[1px] h-2 ml-[1px]"
                    style={{ background: '#F7B638' }}
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                </p>
              </motion.div>
            )}

            {/* Send button */}
            {phase >= 4 && typedResponse.length > 30 && (
              <motion.div
                className="mx-1.5 mb-1.5 py-1 rounded-lg text-center"
                style={{ background: 'linear-gradient(135deg, #F7B638, #D4941F)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="text-[7px] font-bold text-[#080810]">Send AI Response ✉️</span>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
