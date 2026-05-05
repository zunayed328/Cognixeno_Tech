'use client'

import { motion } from 'framer-motion'

export default function AutoPilotMockup() {
  const stages = [
    { label: 'Lead', num: '12' },
    { label: 'Qual', num: '8' },
    { label: 'Demo', num: '5' },
    { label: 'Prop', num: '3' },
    { label: 'Won', num: '2' },
  ]

  return (
    <div className="relative w-full h-full p-3">
      <div className="w-full h-full bg-[#00272C]/50 rounded-[10px] p-2.5 flex flex-col gap-2">
        
        {/* Top Metric Bar */}
        <div className="h-[24px] bg-[#E1FF51]/10 border border-[#E1FF51]/20 rounded-[6px] px-2 flex items-center justify-between">
          <span className="text-[#E1FF51] text-[7px] font-bold uppercase tracking-wider">Sales Pipeline</span>
          <div className="flex items-center gap-1.5">
            <span className="text-white text-[9px] font-bold">$2.4M</span>
            <span className="text-green-400 text-[6px]">+24% ↑</span>
          </div>
        </div>

        {/* Pipeline Flow */}
        <div className="flex-1 relative flex items-center justify-between mt-2 mb-1">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-transparent border-t border-dashed border-[#E1FF51]/50 -translate-y-1/2 z-0" />
          
          {/* Animated dot */}
          <motion.div
            animate={{ left: ['5%', '95%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-[#E1FF51] rounded-full shadow-[0_0_6px_#E1FF51] z-10"
          />

          {stages.map((stage, i) => (
            <div key={stage.label} className="w-[18%] h-[28px] bg-[#00272C]/70 border border-[#E1FF51]/30 rounded-[6px] flex flex-col items-center justify-center relative z-20 gap-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E1FF51]/80 mb-[1px]" />
              <span className="text-white text-[8px] font-bold leading-none">{stage.num}</span>
              <span className="text-gray-400 text-[5px] leading-none uppercase">{stage.label}</span>
            </div>
          ))}
        </div>

        {/* AI Agent Activity Log */}
        <div className="bg-[#E1FF51]/5 rounded-[6px] p-1.5 flex flex-col gap-1 overflow-hidden h-[34px]">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#E1FF51] text-[6px] flex items-center gap-1"
          >
            <span>✓</span> Lead scored: 92/100
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-[#E1FF51] text-[6px] flex items-center gap-1"
          >
            <span>✓</span> Email sent to John
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="text-[#E1FF51] text-[6px] flex items-center gap-1"
          >
            <span>✓</span> Demo scheduled
          </motion.div>
        </div>

      </div>
    </div>
  )
}
