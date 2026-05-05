'use client'

import { motion } from 'framer-motion'

export default function ShopFlowMockup() {
  return (
    <div className="relative w-full h-full pb-2">
      <div className="w-full h-full bg-[#080810]/70 rounded-[12px] overflow-hidden flex flex-col border border-[#F7B638]/20">
        
        {/* Chat header */}
        <div className="h-[28px] bg-[#F7B638]/20 border-b border-[#F7B638]/30 px-2 flex items-center gap-1.5 flex-shrink-0">
          <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#F7B638] to-[#D4941F] flex items-center justify-center text-white text-[9px] font-bold">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[8px] font-bold leading-none mb-0.5">ShopFlow AI</span>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-green-500 rounded-full" />
              <span className="text-green-500 text-[6px] leading-none">Online</span>
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <div className="flex-1 p-2 flex flex-col gap-1.5 overflow-hidden">
          
          {/* User message */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#F7B638]/20 rounded-[10px_10px_2px_10px] px-2 py-1 max-w-[70%] self-end"
          >
            <span className="text-white text-[6px]">Show me trending shoes</span>
          </motion.div>

          {/* Bot message */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="bg-white/5 rounded-[10px_10px_10px_2px] p-1.5 max-w-[85%] self-start"
          >
            <div className="text-white text-[6px] mb-1.5 px-0.5">Found 247 results 🔥</div>
            
            {/* Product cards */}
            <div className="flex gap-1">
              <div className="w-[28px] h-[36px] rounded-[6px] bg-gradient-to-b from-orange-400 to-orange-600 border border-[#F7B638]/30 relative flex items-end justify-center pb-1">
                <span className="text-white text-[5px] font-bold">$99</span>
              </div>
              <div className="w-[28px] h-[36px] rounded-[6px] bg-gradient-to-b from-red-400 to-red-600 border border-[#F7B638]/30 relative flex items-end justify-center pb-1">
                <span className="text-white text-[5px] font-bold">$129</span>
              </div>
              <div className="w-[28px] h-[36px] rounded-[6px] bg-gradient-to-b from-yellow-400 to-yellow-600 border border-[#F7B638]/30 relative flex items-end justify-center pb-1">
                <span className="text-white text-[5px] font-bold">$89</span>
              </div>
            </div>
          </motion.div>

          {/* Typing indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="bg-white/5 rounded-full px-2 py-1 self-start flex gap-[2px] items-center mt-1"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                className="w-[3px] h-[3px] bg-[#F7B638]/70 rounded-full"
              />
            ))}
          </motion.div>
        </div>

      </div>

      {/* Floating badge */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 1 }}
        className="absolute -bottom-1 -right-2 bg-[#F7B638]/15 border border-[#F7B638]/30 text-[#F7B638] px-1.5 py-1 rounded-full text-[6px] whitespace-nowrap"
      >
        10K+ daily queries
      </motion.div>
    </div>
  )
}
