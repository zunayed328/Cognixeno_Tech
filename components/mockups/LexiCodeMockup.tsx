'use client'

import { motion } from 'framer-motion'

export default function LexiCodeMockup() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Phone Frame */}
      <div 
        className="relative bg-[#050510] border-2 border-white/30 rounded-[18px] flex flex-col"
        style={{ width: 110, height: 180, boxShadow: '0 0 30px rgba(255,148,122,0.2)' }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30px] h-[5px] bg-black/60 rounded-b-[4px] z-10" />

        <div className="flex-1 p-1.5 flex flex-col mt-1">
          {/* App header */}
          <div className="h-[24px] flex items-center justify-center gap-1">
            <div className="w-[8px] h-[8px] rounded-full border border-[#FF947A] flex items-center justify-center">
              <div className="w-[2px] h-[2px] bg-[#FF947A] rounded-full" />
            </div>
            <span className="text-[#FF947A] text-[9px] font-bold">LexiCode</span>
          </div>

          {/* Speech recognition card */}
          <div className="w-[90%] mx-auto bg-[#FF947A]/15 border border-[#FF947A]/30 rounded-[8px] p-1.5 mt-[6px] flex flex-col items-center">
            
            {/* Big mic circle */}
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[24px] h-[24px] rounded-full flex items-center justify-center mb-1"
              style={{ background: 'linear-gradient(rgba(255,148,122,0.6), rgba(200,168,233,0.4))' }}
            />

            <span className="text-[#FF947A] text-[6px] mb-1">Listening...</span>

            {/* Audio wave bars */}
            <div className="flex items-center gap-[2px] h-[14px]">
              {[8, 14, 6].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [h, h*0.5, h*1.2, h] }}
                  transition={{ duration: 0.8, delay: i * 0.1, repeat: Infinity }}
                  className="w-[2px] bg-[#FF947A] rounded-full"
                  style={{ height: h }}
                />
              ))}
            </div>
          </div>

          {/* Score card */}
          <div className="bg-[#C8A8E9]/10 rounded-[6px] px-1.5 py-1 mt-[6px] w-[90%] mx-auto">
            <div className="text-gray-400 text-[5px]">IELTS Score</div>
            <div className="text-[#C8A8E9] font-bold text-[8px] mb-1">8.5 / 9</div>
            {/* Progress bar */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '92%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-[#C8A8E9] rounded-full" 
              />
            </div>
          </div>

          <div className="flex-1" />

          {/* Bottom navigation */}
          <div className="flex justify-center gap-2 mb-1">
            <div className="w-1 h-1 rounded-full bg-[#FF947A]" />
            <div className="w-1 h-1 rounded-full bg-gray-600" />
            <div className="w-1 h-1 rounded-full bg-gray-600" />
          </div>
        </div>

        {/* Floating badge OUTSIDE phone */}
        <motion.div 
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute -right-6 top-6 bg-[#FF947A]/15 border border-[#FF947A]/30 text-[#FF947A] px-1.5 py-[3px] rounded-full text-[7px] font-bold whitespace-nowrap"
        >
          98% Accuracy
        </motion.div>
      </div>
    </div>
  )
}
