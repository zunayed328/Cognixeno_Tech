'use client'

import { motion } from 'framer-motion'

export default function VoiceDeskMockup() {
  return (
    <div className="relative w-full h-full p-2.5">
      <div className="w-full h-full bg-[#780115]/20 border border-[#F7B638]/30 rounded-[12px] p-2 flex flex-col">
        
        {/* Top: agent info */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#F7B638] to-[#D4941F]" />
          <div className="flex flex-col">
            <span className="text-white text-[8px] font-bold">VoiceDesk Bot</span>
            <div className="flex items-center gap-1">
              <div className="w-[4px] h-[4px] bg-green-500 rounded-full" />
              <span className="text-gray-400 text-[6px]">Active call</span>
            </div>
          </div>
          
          {/* Translation indicator */}
          <div className="ml-auto bg-[#F7B638]/15 text-[#F7B638] px-1.5 py-0.5 rounded-[4px] text-[6px] flex items-center gap-1">
            <span>A文</span>
            <span>EN → ES</span>
          </div>
        </div>

        {/* Center: Voice visualization */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          
          {/* Rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 2], opacity: [0.8, 0] }}
              transition={{ duration: 2, delay: i * 0.6, repeat: Infinity, ease: "easeOut" }}
              className="absolute w-[50px] h-[50px] rounded-full border border-[#F7B638]/40"
            />
          ))}

          {/* Big Circle */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="w-[50px] h-[50px] rounded-full flex flex-col items-center justify-center z-10"
            style={{ background: 'radial-gradient(circle, #F7B638 0%, #780115 100%)' }}
          >
            {/* Audio Waveform inside */}
            <div className="flex items-center gap-[1px] h-[16px]">
              {[4, 10, 6, 14, 8, 16, 8, 12, 6, 10, 4].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [h, h*0.4, h*1.2, h] }}
                  transition={{ duration: 0.5, delay: i * 0.05, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[1.5px] bg-white rounded-full"
                  style={{ height: h }}
                />
              ))}
            </div>
          </motion.div>
          
          <span className="text-[#F7B638] text-[7px] mt-2">Listening...</span>
        </div>

        {/* Bottom stats */}
        <div className="flex items-end justify-between mt-2">
          <div className="flex flex-col gap-0.5">
            <span className="text-[#F7B638] text-[6px]"><span className="text-gray-400">Languages:</span> 47</span>
            <span className="text-[#F7B638] text-[6px]"><span className="text-gray-400">Avg. response:</span> 0.8s</span>
          </div>
          
          <div className="flex items-center gap-1">
            <motion.div 
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#F7B638]"
            />
            <span className="text-[#F7B638] font-mono text-[7px]">00:02:34</span>
          </div>
        </div>

      </div>
    </div>
  )
}
