'use client'

import { motion } from 'framer-motion'

export default function MailForgeMockup() {
  return (
    <div className="relative w-full h-full p-2.5">
      <div className="w-full h-full bg-[#080810]/70 rounded-[10px] p-2 flex flex-col">
        
        {/* Top Stats Bar */}
        <div className="bg-[#F7B638]/10 border border-[#F7B638]/20 rounded-[6px] px-2 py-1 flex items-center justify-between mb-3">
          <div className="flex flex-col">
            <span className="text-[#F7B638] text-[8px] font-bold">Sent Today</span>
            <span className="text-[#F7B638] text-[10px] font-bold leading-tight">12,847</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-green-400 text-[8px] font-bold">Open Rate</span>
            <span className="text-green-400 text-[10px] font-bold leading-tight">68% ↑</span>
          </div>
        </div>

        <div className="flex-1 flex gap-2">
          
          {/* Email Automation Flow (Left) */}
          <div className="flex-1 relative flex flex-col justify-between">
            {/* Connecting line */}
            <div className="absolute top-[10px] bottom-[10px] left-3 w-[1px] border-l border-dashed border-[#F7B638]/40 z-0" />
            
            {/* Traveling dot */}
            <motion.div 
              animate={{ top: ['10%', '90%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute left-[10.5px] w-[3px] h-[3px] rounded-full bg-[#F7B638] shadow-[0_0_6px_#F7B638] z-10"
            />

            {/* Stage 1 */}
            <div className="bg-[#F7B638]/10 rounded-[6px] px-1.5 py-1 z-20 flex items-center gap-1.5 ml-1">
              <div className="w-4 h-4 rounded-full bg-[#F7B638]/20 flex items-center justify-center text-[7px]">📧</div>
              <span className="text-[#F7B638] text-[6px] font-bold">New Subscriber</span>
            </div>

            {/* Stage 2 */}
            <div className="bg-[#F7B638]/15 border-l-2 border-[#F7B638] rounded-r-[6px] px-1.5 py-1 z-20 flex flex-col ml-1">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-[#F7B638]/20 flex items-center justify-center text-[7px]">🤖</div>
                <span className="text-[#F7B638] text-[6px] font-bold">AI Personalization</span>
              </div>
              <span className="text-gray-400 text-[5px] ml-5">Processing...</span>
            </div>

            {/* Stage 3 */}
            <div className="bg-green-500/10 rounded-[6px] px-1.5 py-1 z-20 flex flex-col ml-1">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-[7px]">✓</div>
                <span className="text-green-500 text-[6px] font-bold">Email Delivered</span>
              </div>
              <span className="text-gray-400 text-[5px] ml-5">to 247 users</span>
            </div>
          </div>

          {/* Live Activity Feed (Right) */}
          <div className="w-[45%] flex flex-col justify-center gap-1.5">
            <motion.div 
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-300 text-[5px] truncate"
            >
              ✉ welcome@user1.com sent
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-gray-400 text-[5px] truncate"
            >
              ✉ followup@user2.com queued
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="text-gray-300 text-[5px] truncate"
            >
              ✉ promo@user3.com opened
            </motion.div>
          </div>

        </div>

        {/* Bottom Queue Counter */}
        <div className="mt-2 flex items-center gap-1 justify-center">
          <motion.div 
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-[#F7B638]"
          />
          <span className="text-gray-400 text-[6px]">12,453 emails in queue</span>
        </div>

      </div>
    </div>
  )
}
