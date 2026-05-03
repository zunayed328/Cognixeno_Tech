'use client'

import { motion } from 'framer-motion'
import { FiCheck, FiShoppingCart } from 'react-icons/fi'

const personalBotMessages = [
  {
    type: 'user',
    text: 'Can you schedule my meeting for tomorrow?'
  },
  {
    type: 'bot',
    text: "Sure! I've scheduled your meeting for tomorrow at 10AM and sent calendar invites. Anything else? ✅"
  }
]

const ecommerceBotMessages = [
  {
    type: 'user',
    text: 'Do you have wireless earbuds under $50?'
  },
  {
    type: 'bot',
    text: 'Yes! Here are 3 options for you:',
    products: [
      { name: 'Pro Buds X', price: '$45' },
      { name: 'Elite Sound', price: '$48' },
      { name: 'Swift Pods', price: '$42' }
    ]
  }
]

const features = [
  {
    category: 'Personal Bot',
    items: ['Schedule meetings', 'Manage reminders', 'Answer questions', 'Multi-language']
  },
  {
    category: 'E-Commerce Bot',
    items: ['Product search', 'Shopping cart', 'Payments', 'Order tracking']
  }
]

const ChatWindow = ({ title, emoji, messages, isEcommerce, isRight }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="glass-panel rounded-2xl overflow-hidden flex flex-col h-[500px] border border-[#F7B638]/30"
      style={{
        boxShadow: '0 0 30px rgba(247, 182, 56, 0.15), inset 0 0 20px rgba(247, 182, 56, 0.05)'
      }}
    >
      <div className="bg-gradient-to-r from-[#780115]/40 to-[#F7B638]/10 border-b border-[#F7B638]/20 px-6 py-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-white">{emoji} {title}</span>
        <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((message, idx) => (
          <div key={idx} className="space-y-2">
            {message.type === 'user' ? (
              <div className="flex justify-end">
                <div
                  className="max-w-xs px-4 py-3 rounded-2xl text-sm text-white"
                  style={{
                    background: 'rgba(247, 182, 56, 0.15)',
                    border: '1px solid rgba(247, 182, 56, 0.3)'
                  }}
                >
                  {message.text}
                </div>
              </div>
            ) : (
              <div>
                <div
                  className="max-w-xs px-4 py-3 rounded-2xl text-sm"
                  style={{
                    background: 'rgba(120, 1, 21, 0.4)',
                    border: '1px solid rgba(247, 182, 56, 0.2)',
                    color: '#ffffff'
                  }}
                >
                  {message.text}
                </div>
                {message.products && (
                  <div className="mt-3 space-y-2">
                    {message.products.map((product, pidx) => (
                      <div
                        key={pidx}
                        className="flex items-center justify-between p-2 rounded-lg"
                        style={{ background: 'rgba(120, 1, 21, 0.2)' }}
                      >
                        <div>
                          <p className="text-xs font-medium text-white">{product.name}</p>
                          <p className="text-xs text-[#F7B638]">{product.price}</p>
                        </div>
                        <button className="flex items-center gap-1 px-2 py-1 rounded bg-[#F7B638]/20 hover:bg-[#F7B638]/30 text-[#F7B638] text-xs font-medium transition-colors">
                          <FiShoppingCart size={12} />
                          Add
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

      <div className="border-t border-[#F7B638]/20 px-6 py-3">
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-[rgba(0,0,0,0.4)] text-white text-sm px-3 py-2 rounded-lg border border-[#F7B638]/20 focus:outline-none focus:border-[#F7B638]/50 placeholder-[#A0A0B8]"
          />
          <button className="px-3 py-2 bg-[#F7B638]/20 hover:bg-[#F7B638]/30 border border-[#F7B638]/50 rounded-lg text-[#F7B638] transition-colors">
            Send
          </button>
        </div>
        <p className="text-xs text-[#A0A0B8] text-center">Powered by Cognixeno AI</p>
      </div>
    </motion.div>
  )
}

export default function ChatbotPreview() {
  return (
    <section id="insights" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#780115] via-[#0a0a0f] to-[#080810] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white sm:text-5xl"
          >
            AI Chatbots That Work For You 24/7
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 mx-auto h-1 w-40 origin-center bg-gradient-to-r from-transparent via-[#F7B638] to-transparent"
            style={{
              boxShadow: '0 0 20px rgba(247, 182, 56, 0.6)'
            }}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <ChatWindow
            title="Personal Bot"
            emoji="🤖"
            messages={personalBotMessages}
          />
          <ChatWindow
            title="Shop Bot"
            emoji="🛍️"
            messages={ecommerceBotMessages}
            isEcommerce={true}
            isRight={true}
          />
        </div>

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
              <div className="space-y-3">
                {featureGroup.items.map((item, itemIdx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + itemIdx * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[rgba(247,182,56,0.05)] transition-colors"
                  >
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center"
                      style={{ background: 'rgba(247, 182, 56, 0.2)' }}
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
