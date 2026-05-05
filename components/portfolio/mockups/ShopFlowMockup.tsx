'use client'

import { motion } from 'framer-motion'

export default function ShopFlowMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      
      {/* Floating Elements OUTSIDE phone */}
      {/* Top Left */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="absolute top-[80px] left-[5%] lg:left-[10%] bg-white/5 backdrop-blur-md border border-[#F7B638]/40 rounded-xl px-4 py-3 shadow-[0_0_20px_rgba(247,182,56,0.15)] z-20 flex items-center gap-3"
      >
        <div className="flex -space-x-1">
          {[1,2,3,4,5].map(i => (
            <span key={i} className="text-[#F7B638] text-[14px]">⭐</span>
          ))}
        </div>
        <span className="text-white text-[12px] font-bold">98% Satisfaction</span>
      </motion.div>

      {/* Top Right */}
      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="absolute top-[40px] right-[2%] lg:-right-[5%] bg-[#22c55e]/10 backdrop-blur-md border border-[#22c55e]/50 rounded-xl px-4 py-3 shadow-[0_10px_30px_rgba(34,197,94,0.2)] z-20"
      >
        <span className="text-white text-[13px] font-bold">New order received! 🎉</span>
      </motion.div>

      {/* Bottom Left */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring' }}
        className="absolute bottom-[60px] left-[0%] lg:left-[5%] bg-[#F7B638]/10 backdrop-blur-md border border-[#F7B638]/30 rounded-2xl p-4 w-[180px] shadow-[0_10px_40px_rgba(247,182,56,0.15)] z-20"
      >
        <div className="text-[#F7B638] text-[11px] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
          <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-2 h-2 rounded-full bg-[#F7B638]" />
          Live Activity
        </div>
        <div className="text-[#F7B638] text-[28px] font-[900] leading-none mb-1">12,847</div>
        <div className="text-gray-400 text-[12px] mb-3">queries today</div>
        <div className="flex items-end gap-1.5 h-[30px]">
          {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 1 + (i*0.1), duration: 0.5 }}
              className="flex-1 bg-gradient-to-t from-[#780115] to-[#F7B638] rounded-t-[2px]"
            />
          ))}
        </div>
      </motion.div>

      {/* Main Phone Frame */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-[#0a0a14] border-[8px] border-[#1a1a1a] rounded-[40px] flex flex-col overflow-hidden z-10"
        style={{ 
          width: 280, 
          height: 500,
          boxShadow: '0 0 0 1px rgba(247,182,56,0.3), 0 30px 80px rgba(120,1,21,0.4), 0 0 60px rgba(247,182,56,0.2)',
          transform: 'perspective(1000px) rotateY(-8deg) rotateX(2deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[8px] bg-black rounded-b-[8px] z-20" />

        {/* Status Bar */}
        <div className="h-[24px] bg-transparent flex justify-between items-center px-4 pt-1 z-20 relative">
          <span className="text-white text-[11px] font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-[14px] h-[8px] border border-white rounded-[2px] p-[1px]">
              <div className="w-[80%] h-full bg-white rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* WhatsApp Header */}
        <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] px-3 py-2 flex items-center gap-3 shadow-md z-10 -mt-6 pt-8">
          <div className="w-[36px] h-[36px] rounded-full bg-gradient-to-br from-[#F7B638] to-[#D4941F] flex justify-center items-center relative flex-shrink-0">
            <span className="text-white font-bold text-[18px]">S</span>
            <div className="absolute bottom-0 right-0 w-[10px] h-[10px] bg-green-500 border-2 border-[#128C7E] rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[14px] font-bold leading-tight">ShopFlow AI</span>
            <span className="text-green-300 text-[11px]">online • typing...</span>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto overflow-x-hidden relative"
             style={{ background: 'linear-gradient(to bottom, #0a0a14, #1a0008)' }}>
          
          {/* User Message */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="bg-[#F7B638]/20 border border-[#F7B638]/30 px-[14px] py-[10px] rounded-[16px_16px_4px_16px] self-end max-w-[75%]"
          >
            <div className="text-white text-[13px] leading-[1.4]">Hi! I want to buy running shoes 👟</div>
            <div className="text-gray-400 text-[9px] text-right mt-1">9:41</div>
          </motion.div>

          {/* Bot Message */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 }}
            className="bg-white/5 rounded-[16px_16px_16px_4px] p-3 self-start max-w-[90%]"
          >
            <div className="text-white text-[13px] leading-[1.4] mb-2">Sure! Let me find the best options for you 🛍️</div>
            
            {/* Horizontal Scroll Cards */}
            <div className="flex gap-2 overflow-visible pb-1 -mr-4 pr-4">
              {[
                { name: 'Nike Air', price: '$129', color: 'from-orange-400 to-orange-600' },
                { name: 'UltraBoost', price: '$159', color: 'from-red-400 to-red-600' },
                { name: 'Puma RS-X', price: '$110', color: 'from-yellow-400 to-yellow-600' }
              ].map((prod, i) => (
                <div key={i} className="min-w-[80px] bg-white/5 border border-[#F7B638]/20 rounded-xl p-2 flex-shrink-0">
                  <div className={`w-full h-[50px] rounded-lg bg-gradient-to-br ${prod.color} mb-2 shadow-inner`} />
                  <div className="text-white text-[9px] font-bold truncate">{prod.name}</div>
                  <div className="text-[#F7B638] text-[11px] font-bold my-1">{prod.price}</div>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-yellow-400 text-[8px]">⭐ 4.8</span>
                    <button className="bg-[#F7B638] text-black text-[8px] font-bold px-1.5 py-0.5 rounded shadow">Add</button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-[#F7B638] text-[9px] flex items-center justify-end gap-1 mt-1">
              9:41 <span>✓✓</span>
            </div>
          </motion.div>

          {/* User Message 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3 }}
            className="bg-[#F7B638]/20 border border-[#F7B638]/30 px-[14px] py-[10px] rounded-[16px_16px_4px_16px] self-end max-w-[70%]"
          >
            <div className="text-white text-[13px]">Add the first one</div>
            <div className="text-gray-400 text-[9px] text-right mt-1">9:42</div>
          </motion.div>

          {/* Bot Message 2 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.8 }}
            className="bg-white/5 rounded-[16px_16px_16px_4px] p-3 self-start max-w-[85%]"
          >
            <div className="text-white text-[13px] leading-[1.4] mb-2 flex items-center gap-1.5">
              ✅ Added to cart! Total: $129
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2 flex justify-between items-center">
              <div>
                <div className="text-white text-[11px] font-bold">1 item</div>
                <div className="text-green-400 text-[10px]">$129.00</div>
              </div>
              <button className="bg-green-500 text-white text-[9px] font-bold px-3 py-1.5 rounded-full shadow">
                Checkout
              </button>
            </div>
          </motion.div>

          {/* Typing Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5 }}
            className="bg-white/5 rounded-[16px_16px_16px_4px] px-4 py-3 self-start w-[50px] flex justify-center gap-1 mt-2"
          >
            {[0,1,2].map(i => (
              <motion.div key={i} animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }} className="w-[4px] h-[4px] bg-[#F7B638] rounded-full" />
            ))}
          </motion.div>
          
        </div>

        {/* Input Bar */}
        <div className="bg-[#1a1a1a] p-2 px-3 flex items-center gap-2 relative z-20">
          <div className="w-[20px] h-[20px] border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-400 text-[10px]">☻</div>
          <div className="flex-1 bg-white/10 rounded-full h-[32px] px-3 flex items-center">
            <div className="w-[2px] h-[14px] bg-[#F7B638] animate-pulse" />
          </div>
          <div className="w-[20px] h-[20px] flex items-center justify-center text-gray-400 text-[14px]">🎤</div>
          <div className="w-[32px] h-[32px] bg-[#F7B638] rounded-full flex items-center justify-center text-black shadow-lg">
            ➤
          </div>
        </div>

      </motion.div>
    </div>
  )
}
