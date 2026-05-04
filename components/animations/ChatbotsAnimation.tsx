'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface ChatMsg {
  from: 'user' | 'bot'
  text: string
  delay: number
}

const leftChat: ChatMsg[] = [
  { from: 'user', text: 'Remind me about my meeting', delay: 0.5 },
  { from: 'bot', text: '✅ Reminder set for 3PM', delay: 1.8 },
  { from: 'user', text: "What's the weather?", delay: 3.2 },
  { from: 'bot', text: '🌤 24°C, partly cloudy', delay: 4.0 },
]

const rightChat: ChatMsg[] = [
  { from: 'user', text: 'Show me laptops', delay: 0.8 },
  { from: 'bot', text: 'Found 12 results! 💻', delay: 2.0 },
  { from: 'user', text: 'Add first one to cart', delay: 3.5 },
  { from: 'bot', text: 'Added! 🛒 Total: $899', delay: 4.3 },
]

function ChatWindow({
  title,
  messages,
  accentColor,
  phase,
  slideFrom,
}: {
  title: string
  messages: ChatMsg[]
  accentColor: string
  phase: number
  slideFrom: 'left' | 'right'
}) {
  return (
    <motion.div
      className="flex flex-col overflow-hidden"
      style={{
        width: 145,
        height: 250,
        borderRadius: 16,
        background: 'rgba(12,12,24,0.95)',
        border: `1px solid ${accentColor}30`,
        boxShadow: `0 10px 40px rgba(0,0,0,0.4)`,
      }}
      initial={{ x: slideFrom === 'left' ? -60 : 60, opacity: 0 }}
      animate={phase >= 1 ? { x: 0, opacity: 1 } : { x: slideFrom === 'left' ? -60 : 60, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {/* Header */}
      <div className="flex items-center gap-1.5 px-2.5 py-2" style={{ borderBottom: `1px solid ${accentColor}20` }}>
        <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: `${accentColor}20` }}>
          <span className="text-[7px]">🤖</span>
        </div>
        <div className="flex-1">
          <p className="text-[8px] font-bold text-white leading-none">{title}</p>
          <div className="flex items-center gap-1 mt-0.5">
            <div className="w-1 h-1 rounded-full bg-[#22c55e]" />
            <span className="text-[6px] text-[#22c55e]">Online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-2 py-1.5 space-y-1.5 overflow-hidden">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={phase >= 1 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.3, delay: msg.delay }}
          >
            <div
              className="px-2 py-1 max-w-[110px]"
              style={{
                borderRadius: msg.from === 'user' ? '8px 8px 2px 8px' : '8px 8px 8px 2px',
                background: msg.from === 'user' ? `${accentColor}15` : 'rgba(255,255,255,0.04)',
                border: `1px solid ${msg.from === 'user' ? `${accentColor}30` : 'rgba(255,255,255,0.06)'}`,
              }}
            >
              <p className="text-[7px] text-[#d0d0e0] leading-relaxed">{msg.text}</p>
            </div>
          </motion.div>
        ))}

        {/* Bot typing indicator between messages */}
        {phase >= 1 && (
          <motion.div
            className="flex justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
          >
            <div className="flex gap-[3px] px-2 py-1.5 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)' }}>
              {[0, 1, 2].map(d => (
                <motion.div
                  key={d}
                  className="w-1 h-1 rounded-full"
                  style={{ background: accentColor }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.5, delay: d * 0.12, repeat: Infinity, repeatDelay: 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Input bar */}
      <div className="px-2 py-1.5" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="flex items-center gap-1 px-2 py-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <div className="h-1 rounded-full flex-1" style={{ background: 'rgba(255,255,255,0.08)' }} />
          <div className="w-3 h-3 rounded-full flex items-center justify-center" style={{ background: `${accentColor}30` }}>
            <span className="text-[5px]" style={{ color: accentColor }}>▶</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ChatbotsAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (!isInView) { setPhase(0); return }
    const t = setTimeout(() => setPhase(1), 300)
    return () => clearTimeout(t)
  }, [isInView])

  return (
    <div ref={ref} className="relative flex items-center justify-center gap-3" style={{ width: 340, height: 280, willChange: 'transform' }}>
      {/* Left chat — Personal Bot */}
      <ChatWindow
        title="Personal Bot"
        messages={leftChat}
        accentColor="#F7B638"
        phase={phase}
        slideFrom="left"
      />

      {/* Central AI brain */}
      <div className="relative flex items-center justify-center" style={{ width: 36, height: 36 }}>
        <motion.div
          className="absolute w-full h-full rounded-full"
          style={{ background: 'rgba(247,182,56,0.1)', border: '1px solid rgba(247,182,56,0.3)' }}
          animate={phase >= 1 ? { scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-sm relative z-10">🧠</span>

        {/* Connecting lines */}
        <motion.div
          className="absolute w-6 h-[1px] -left-6 top-1/2"
          style={{ background: 'rgba(247,182,56,0.3)' }}
          initial={{ scaleX: 0 }}
          animate={phase >= 1 ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        />
        <motion.div
          className="absolute w-6 h-[1px] -right-6 top-1/2"
          style={{ background: 'rgba(120,1,21,0.3)' }}
          initial={{ scaleX: 0 }}
          animate={phase >= 1 ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        />

        {/* Response time badge */}
        {phase >= 1 && (
          <motion.span
            className="absolute -bottom-5 text-[7px] font-bold whitespace-nowrap"
            style={{ color: '#E1FF51' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            ⚡ 0.3s
          </motion.span>
        )}
      </div>

      {/* Right chat — E-Commerce Bot */}
      <ChatWindow
        title="E-Commerce Bot"
        messages={rightChat}
        accentColor="#780115"
        phase={phase}
        slideFrom="right"
      />
    </div>
  )
}
