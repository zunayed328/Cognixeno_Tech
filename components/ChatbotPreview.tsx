'use client'

import { motion } from 'framer-motion'
import { FiCheck, FiShoppingCart, FiSend } from 'react-icons/fi'

const personalBotMessages = [
  { type: 'bot', text: "Hi! How can I help you today? I can assist with scheduling, reminders, or any questions." },
  { type: 'user', text: 'Can you schedule my meeting for tomorrow at 10AM?' },
  { type: 'bot', text: "Done! I've scheduled your meeting for tomorrow at 10:00 AM and sent calendar invites to all participants. ✅" },
]

const ecommerceBotMessages = [
  { type: 'bot', text: 'Welcome! Looking for something specific today? I can search our catalog for you.' },
  { type: 'user', text: 'Do you have wireless earbuds under $50?' },
  {
    type: 'bot',
    text: 'Great choice! Here are our top 3 picks:',
    products: [
      { name: 'Pro Buds X', price: '$45' },
      { name: 'Elite Sound', price: '$48' },
      { name: 'Swift Pods', price: '$42' },
    ],
  },
]

const features = [
  { category: 'Personal Bot', items: ['Schedule meetings', 'Manage reminders', 'Answer questions', 'Multi-language'] },
  { category: 'E-Commerce Bot', items: ['Product search', 'Shopping cart', 'Payments', 'Order tracking'] },
]

const ChatWindow = ({ title, emoji, messages, isEcommerce, isRight }: any) => (
  <motion.div
    initial={{ opacity: 0, x: isRight ? 50 : -50, rotateY: isRight ? 5 : -5 }}
    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="group relative overflow-hidden flex flex-col h-[520px]"
    style={{
      background: 'rgba(10,5,20,0.8)',
      border: '1px solid rgba(247,182,56,0.2)',
      borderRadius: '24px',
      boxShadow: '0 0 0 1px rgba(247,182,56,0.05), 0 25px 50px rgba(0,0,0,0.5), 0 0 60px rgba(120,1,21,0.15)',
    }}
  >
    {/* Corner glow */}
    <div className="absolute top-0 right-0 w-[120px] h-[120px] pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(247,182,56,0.08), transparent 70%)' }} />

    {/* Chat header */}
    <div
      className="flex items-center justify-between px-5 py-4"
      style={{
        background: 'linear-gradient(135deg, rgba(120,1,21,0.6), rgba(80,0,10,0.8))',
        borderBottom: '1px solid rgba(247,182,56,0.15)',
      }}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">{emoji}</span>
        <div>
          <span className="text-sm font-semibold text-white">{title}</span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="w-2 h-2 rounded-full bg-[#22c55e]" style={{ animation: 'pulse 1.5s infinite' }} />
            <span className="text-[11px] font-bold text-[#22c55e]">Online</span>
          </div>
        </div>
      </div>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
        <div className="w-2 h-2 rounded-full bg-[#28C840]" />
      </div>
    </div>

    {/* Messages */}
    <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 flex flex-col" style={{ background: 'rgba(5,2,10,0.6)' }}>
      {messages.map((message: any, idx: number) => (
        <div key={idx} className="space-y-2">
          {message.type === 'user' ? (
            <div
              className="max-w-[80%] self-end px-4 py-3 text-sm text-white leading-relaxed"
              style={{
                background: 'rgba(247,182,56,0.12)',
                border: '1px solid rgba(247,182,56,0.25)',
                borderRadius: '18px 18px 4px 18px',
                boxShadow: '0 4px 12px rgba(247,182,56,0.1)',
              }}
            >
              {message.text}
            </div>
          ) : (
            <div className="space-y-2">
              <div
                className="max-w-[85%] self-start px-4 py-3 text-sm text-white leading-relaxed"
                style={{
                  background: 'rgba(120,1,21,0.35)',
                  border: '1px solid rgba(120,1,21,0.5)',
                  borderRadius: '18px 18px 18px 4px',
                  boxShadow: '0 4px 12px rgba(120,1,21,0.2)',
                }}
              >
                {message.text}
              </div>
              {message.products && (
                <div className="space-y-2 ml-1">
                  {message.products.map((product: any, pidx: number) => (
                    <div
                      key={pidx}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:border-[rgba(247,182,56,0.4)] hover:bg-[rgba(247,182,56,0.06)]"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(247,182,56,0.2)',
                        transition: 'all 200ms',
                      }}
                    >
                      <div>
                        <p className="text-xs font-semibold text-white">{product.name}</p>
                        <p className="text-xs text-[#F7B638] font-bold">{product.price}</p>
                      </div>
                      <button
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold"
                        style={{
                          background: 'rgba(247,182,56,0.15)',
                          border: '1px solid rgba(247,182,56,0.3)',
                          color: '#F7B638',
                          transition: 'all 200ms',
                        }}
                      >
                        <FiShoppingCart size={12} /> Add
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Input bar */}
    <div className="px-5 py-4 flex gap-3 items-center" style={{ background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 text-sm text-white px-4 py-3 rounded-xl focus:outline-none"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
          transition: 'all 200ms',
        }}
      />
      <button
        className="px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-2"
        style={{
          background: 'linear-gradient(135deg, #F7B638, #D4941F)',
          color: '#080810',
          boxShadow: '0 4px 15px rgba(247,182,56,0.3)',
        }}
      >
        <FiSend size={14} /> Send
      </button>
    </div>

    {/* Bottom shine */}
    <div className="absolute bottom-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-100 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(247,182,56,0.3), transparent)', transition: 'opacity 300ms' }} />
  </motion.div>
)

export default function ChatbotPreview() {
  return (
    <section id="insights" className="relative min-h-screen overflow-hidden py-24 sm:py-32" style={{ background: 'linear-gradient(180deg, #780115 0%, #0a0a0f 30%, #080810 100%)' }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: 'rgba(247,182,56,0.08)', border: '1px solid rgba(247,182,56,0.2)', boxShadow: '0 0 20px rgba(247,182,56,0.1)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#F7B638]" />
            <span className="text-[11px] font-bold tracking-[2px] text-[#F7B638] uppercase">AI Chatbots</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold text-white sm:text-5xl tracking-[-1px]"
          >
            AI Chatbots That Work 24/7
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 mx-auto w-[60px] h-[3px] rounded-[2px] origin-center"
            style={{ background: 'linear-gradient(90deg, #F7B638, #780115)', boxShadow: '0 0 12px rgba(247,182,56,0.5)' }}
          />
        </div>

        {/* Chat windows */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <ChatWindow title="Personal Bot" emoji="🤖" messages={personalBotMessages} />
          <ChatWindow title="Shop Bot" emoji="🛍️" messages={ecommerceBotMessages} isEcommerce isRight />
        </div>

        {/* Feature lists */}
        <div className="grid gap-8 lg:grid-cols-2">
          {features.map((featureGroup, idx) => (
            <motion.div
              key={featureGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-white">{featureGroup.category} Features</h3>
              <div className="space-y-2">
                {featureGroup.items.map((item, itemIdx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 + itemIdx * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ transition: 'background 200ms' }}
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-[10px] flex items-center justify-center"
                      style={{
                        background: 'rgba(247,182,56,0.1)',
                        border: '1px solid rgba(247,182,56,0.2)',
                        boxShadow: '0 0 15px rgba(247,182,56,0.15)',
                      }}
                    >
                      <FiCheck size={14} className="text-[#F7B638]" />
                    </div>
                    <span className="text-sm text-[#A0A0B8]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
