'use client'

import { motion } from 'framer-motion'

export default function MediScanMockup() {
  return (
    <div className="relative w-full h-full p-2.5">
      <div className="w-full h-full bg-[#001A1C]/60 border border-[#025259]/40 rounded-[10px] p-2 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-1.5 border-b border-[#025259]/40 mb-2">
          <span className="text-[#025259] text-[8px] font-bold">MediScan AI</span>
          <span className="text-gray-500 text-[6px]">v2.4</span>
        </div>

        {/* Scan Visualization */}
        <div className="relative w-full h-[60px] rounded-[8px] border border-[#025259]/40 flex items-center justify-center overflow-hidden mb-2" style={{ background: 'radial-gradient(rgba(2,82,89,0.3), transparent)' }}>
          
          {/* DNA Helix pattern */}
          <div className="flex flex-col gap-[3px]">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotateX: [0, 180, 360] }}
                transition={{ duration: 3, delay: i * 0.15, repeat: Infinity, ease: "linear" }}
                className="w-[40px] h-[1px] bg-[#E1FF51]/50 mx-auto"
              />
            ))}
          </div>

          {/* Scanning line */}
          <motion.div
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 right-0 h-[1px] bg-[#E1FF51] shadow-[0_0_8px_#E1FF51] z-10"
          />
        </div>

        {/* Diagnosis Cards */}
        <div className="flex gap-2 mb-2">
          {/* Accuracy */}
          <div className="flex-1 bg-[#E1FF51]/10 border border-[#E1FF51]/20 rounded-[6px] p-1.5">
            <div className="text-gray-400 text-[5px] mb-0.5">Accuracy</div>
            <div className="text-[#E1FF51] text-[9px] font-bold mb-1">99.2%</div>
            <div className="w-full h-[2px] bg-black/20 rounded-full overflow-hidden">
              <div className="w-[99%] h-full bg-green-500 rounded-full" />
            </div>
          </div>

          {/* Confidence */}
          <div className="flex-1 bg-[#E1FF51]/10 border border-[#E1FF51]/20 rounded-[6px] p-1.5">
            <div className="text-gray-400 text-[5px] mb-0.5">Confidence</div>
            <div className="text-green-500 text-[7px] font-bold mb-1">HIGH</div>
            <div className="flex gap-1 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            </div>
          </div>
        </div>

        {/* Bottom status */}
        <div className="mt-auto flex flex-col gap-0.5">
          <div className="text-green-500 text-[6px] font-bold">✓ Analysis Complete</div>
          <div className="text-gray-400 text-[5px]">Reviewed by AI Agent</div>
        </div>
      </div>
    </div>
  )
}
