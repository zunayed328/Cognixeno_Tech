'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface ChatMsg {
  from: 'user' | 'bot'
  text: string
  delay: number
  isCards?: boolean
}

const leftChat: ChatMsg[] = [
  { from: 'user', text: 'Remind me about my meeting', delay: 0.5 },
  { from: 'bot', text: '✅ Reminder set for 3PM — Board Meeting, Conference Room B', delay: 1.8 },
  { from: 'user', text: "What's the weather?", delay: 3.5 },
  { from: 'bot', text: '🌤 24°C, partly cloudy in Dhaka. UV index: moderate. Carry sunglasses!', delay: 4.5 },
]

const rightChat: ChatMsg[] = [
  { from: 'user', text: 'Show me laptops under $1000', delay: 0.8 },
  { from: 'bot', text: 'Found 12 results! Here are the top 3:', delay: 2.2 },
  { from: 'bot', text: '', delay: 2.8, isCards: true },
  { from: 'user', text: 'Add first one to cart', delay: 4.8 },
  { from: 'bot', text: '🛒 Added MacBook Air! Total: $899', delay: 5.5 },
]

const productCards = [
  { name: 'MacBook Air', price: '$899' },
  { name: 'Dell XPS 13', price: '$949' },
  { name: 'ThinkPad X1', price: '$879' },
]

function ChatWindow({
  title,
  messages,
  accentColor,
  phase,
  slideFrom,
  hovering,
}: {
  title: string
  messages: ChatMsg[]
  accentColor: string
  phase: number
  slideFrom: 'left' | 'right'
  hovering: boolean
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className="flex flex-col overflow-hidden"
      style={{
        width: 150,
        height: 270,
        borderRadius: 18,
        background: 'rgba(12,12,24,0.95)',
        border: `1px solid ${accentColor}25`,
        boxShadow: `0 15px 50px rgba(0,0,0,0.5), 0 0 20px ${accentColor}08`,
        willChange: 'transform',
      }}
      initial={{ x: slideFrom === 'left' ? -80 : 80, opacity: 0, scale: 0.9 }}
      animate={phase >= 1
        ? { x: 0, opacity: 1, scale: 1 }
        : { x: slideFrom === 'left' ? -80 : 80, opacity: 0, scale: 0.9 }
      }
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {/* Header */}
      <div className="flex items-center gap-1.5 px-2.5 py-2" style={{
        borderBottom: `1px solid ${accentColor}15`,
        background: `${accentColor}06`,
      }}>
        <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{
          background: `${accentColor}15`,
          border: `1px solid ${accentColor}25`,
        }}>
          <span className="text-[7px]">🤖</span>
        </div>
        <div className="flex-1">
          <p className="text-[8px] font-bold text-white leading-none">{title}</p>
          <div className="flex items-center gap-1 mt-0.5">
            <motion.div
              className="w-1 h-1 rounded-full bg-[#22c55e]"
              animate={!prefersReducedMotion ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[6px] text-[#22c55e]">Online</span>
          </div>
        </div>
        {/* Response time badge */}
        {hovering && (
          <motion.span
            className="text-[5px] font-bold px-1 py-[1px] rounded-full"
            style={{ background: 'rgba(225,255,81,0.15)', color: '#E1FF51' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            ⚡ 0.1s
          </motion.span>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 px-2 py-1.5 space-y-1.5 overflow-hidden">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 12, scale: 0.8 }}
            animate={phase >= 1 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.8 }}
            transition={{ duration: 0.3, delay: msg.delay }}
          >
            {msg.isCards ? (
              /* Product mini cards */
              <div className="space-y-1 w-full">
                {productCards.map((p, pi) => (
                  <motion.div
                    key={p.name}
                    className="flex items-center gap-1.5 px-1.5 py-1 rounded-lg"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    initial={{ y: 8, opacity: 0 }}
                    animate={phase >= 1 ? { y: 0, opacity: 1 } : { y: 8, opacity: 0 }}
                    transition={{ delay: msg.delay + pi * 0.2 }}
                  >
                    <div className="w-5 h-5 rounded" style={{
                      background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}08)`,
                    }} />
                    <div className="flex-1">
                      <p className="text-[6px] text-white font-semibold">{p.name}</p>
                      <p className="text-[6px] font-bold" style={{ color: accentColor }}>{p.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div
                className="px-2 py-1.5 max-w-[120px]"
                style={{
                  borderRadius: msg.from === 'user' ? '10px 10px 3px 10px' : '10px 10px 10px 3px',
                  background: msg.from === 'user'
                    ? `${accentColor}12`
                    : 'rgba(255,255,255,0.035)',
                  border: `1px solid ${msg.from === 'user' ? `${accentColor}25` : 'rgba(255,255,255,0.06)'}`,
                }}
              >
                <p className="text-[7px] text-[#d0d0e0] leading-relaxed">{msg.text}</p>
              </div>
            )}
          </motion.div>
        ))}

        {/* Bot typing indicator */}
        {phase >= 1 && !prefersReducedMotion && (
          <motion.div
            className="flex justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, delay: 1.2, repeat: Infinity, repeatDelay: 4 }}
          >
            <div className="flex gap-[3px] px-2.5 py-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
              {[0, 1, 2].map(d => (
                <motion.div
                  key={d}
                  className="w-1 h-1 rounded-full"
                  style={{ background: accentColor }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.4, delay: d * 0.1, repeat: Infinity, repeatDelay: 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Input bar */}
      <div className="px-2 py-1.5" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl" style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.04)',
        }}>
          <div className="h-1 rounded-full flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{
            background: `${accentColor}20`,
            border: `1px solid ${accentColor}30`,
          }}>
            <span className="text-[6px]" style={{ color: accentColor }}>▶</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ChatbotsAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const prefersReducedMotion = useReducedMotion()
  const [phase, setPhase] = useState(0)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!isInView) { setPhase(0); return }
    if (prefersReducedMotion) { setPhase(1); return }
    const t = setTimeout(() => setPhase(1), 300)
    return () => clearTimeout(t)
  }, [isInView, prefersReducedMotion])

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center gap-3"
      style={{ width: 360, height: 300, willChange: 'transform' }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Left chat — Personal Bot */}
      <ChatWindow
        title="Personal Bot"
        messages={leftChat}
        accentColor="#F7B638"
        phase={phase}
        slideFrom="left"
        hovering={hovering}
      />

      {/* Central AI brain hub */}
      <div className="relative flex items-center justify-center" style={{ width: 40, height: 40 }}>
        {/* Outer pulse ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 48,
            height: 48,
            border: '1px solid rgba(247,182,56,0.15)',
          }}
          animate={phase >= 1 && !prefersReducedMotion
            ? { scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }
            : {}
          }
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        {/* Inner glow */}
        <motion.div
          className="absolute w-full h-full rounded-full"
          style={{
            background: 'rgba(247,182,56,0.08)',
            border: '1.5px solid rgba(247,182,56,0.3)',
            boxShadow: '0 0 20px rgba(247,182,56,0.15)',
          }}
          animate={phase >= 1 && !prefersReducedMotion
            ? { scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }
            : {}
          }
          transition={{ duration: 2, repeat: Infinity }}
        />

        <span className="text-base relative z-10">🧠</span>

        {/* Connecting lines to chat windows */}
        <motion.div
          className="absolute w-5 h-[1px] -left-5 top-1/2"
          style={{ background: 'linear-gradient(90deg, rgba(247,182,56,0.4), rgba(247,182,56,0.1))' }}
          initial={{ scaleX: 0 }}
          animate={phase >= 1 ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        />
        <motion.div
          className="absolute w-5 h-[1px] -right-5 top-1/2"
          style={{ background: 'linear-gradient(90deg, rgba(120,1,21,0.1), rgba(120,1,21,0.4))' }}
          initial={{ scaleX: 0 }}
          animate={phase >= 1 ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        />

        {/* Data pulse traveling on lines */}
        {phase >= 1 && !prefersReducedMotion && (
          <>
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full -left-5 top-1/2 -translate-y-1/2"
              style={{ background: '#F7B638', boxShadow: '0 0 6px rgba(247,182,56,0.6)' }}
              animate={{ x: [-20, 20, -20] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full -right-5 top-1/2 -translate-y-1/2"
              style={{ background: '#780115', boxShadow: '0 0 6px rgba(120,1,21,0.6)' }}
              animate={{ x: [20, -20, 20] }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </>
        )}

        {/* Response time badge */}
        {phase >= 1 && (
          <motion.span
            className="absolute -bottom-7 text-[7px] font-bold whitespace-nowrap"
            style={{ color: '#E1FF51' }}
            initial={{ opacity: 0 }}
            animate={prefersReducedMotion
              ? { opacity: 0.7 }
              : { opacity: [0, 0.9, 0.9, 0] }
            }
            transition={prefersReducedMotion
              ? { duration: 0.3 }
              : { duration: 3.5, repeat: Infinity, repeatDelay: 2 }
            }
          >
            ⚡ {hovering ? '0.1s' : '0.3s'} response
          </motion.span>
        )}

        {/* Active conversations counter on hover */}
        {hovering && (
          <motion.span
            className="absolute -top-7 text-[6px] font-mono font-bold whitespace-nowrap"
            style={{ color: 'rgba(247,182,56,0.6)' }}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
          >
            1,247 active
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
        hovering={hovering}
      />
    </div>
  )
}
