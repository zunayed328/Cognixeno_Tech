'use client'

import { motion } from 'framer-motion'

export default function EduFlowMockup() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Phone Frame */}
      <div 
        className="relative bg-[#050510] border-2 border-white/30 rounded-[18px] flex flex-col"
        style={{ width: 110, height: 180, boxShadow: '0 0 30px rgba(255,148,122,0.2)' }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30px] h-[5px] bg-black/60 rounded-b-[4px] z-10" />

        <div className="flex-1 p-2 flex flex-col mt-2">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#FF947A] text-[9px] font-bold">EduFlow</span>
            <span className="text-orange-400 text-[6px]">🔥 12 day streak</span>
          </div>

          {/* Daily progress card */}
          <div className="bg-[#FF947A]/10 rounded-[8px] p-1.5 flex items-center gap-2 mb-2">
            <div className="relative w-[24px] h-[24px]">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,148,122,0.2)" strokeWidth="3" fill="none" />
                <motion.circle 
                  cx="12" cy="12" r="10" 
                  stroke="#FF947A" strokeWidth="3" fill="none" 
                  strokeDasharray="62.8" strokeDashoffset="22" 
                  strokeLinecap="round"
                  initial={{ strokeDashoffset: 62.8 }}
                  animate={{ strokeDashoffset: 22 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[#FF947A] text-[7px] font-bold">
                65%
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-gray-400 text-[6px]">Today&apos;s Lessons</span>
            </div>
          </div>

          {/* Course list */}
          <div className="flex flex-col gap-1 mb-2">
            {[
              { name: 'Math', color: '#FF947A', p: '80%' },
              { name: 'Science', color: '#C8A8E9', p: '65%' },
              { name: 'English', color: '#E1FF51', p: '92%' }
            ].map((course) => (
              <div key={course.name} className="bg-white/5 border-l-2 rounded-[6px] p-1 h-[18px] flex items-center gap-1.5" style={{ borderColor: course.color }}>
                <div className="w-[10px] h-[10px] rounded-full flex-shrink-0" style={{ backgroundColor: course.color }} />
                <div className="flex-1 h-[2px] bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: course.p }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full" style={{ backgroundColor: course.color }} 
                  />
                </div>
                <span className="text-white text-[5px] w-[12px]">{course.p}</span>
              </div>
            ))}
          </div>

          {/* Achievement badges */}
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <div className="w-[14px] h-[14px] rounded-full bg-yellow-400/20 border border-yellow-400 flex items-center justify-center text-[7px] shadow-[0_0_8px_rgba(250,204,21,0.5)]">🏆</div>
            <div className="w-[14px] h-[14px] rounded-full bg-gray-300/20 border border-gray-300 flex items-center justify-center text-[7px]">⭐</div>
            <div className="w-[14px] h-[14px] rounded-full bg-orange-400/20 border border-orange-400 flex items-center justify-center text-[7px]">🔥</div>
            <div className="w-[14px] h-[14px] rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[7px] opacity-50">🔒</div>
          </div>

          {/* Bottom calendar */}
          <div className="mt-auto flex justify-between px-1">
            {['M','T','W','T','F','S','S'].map((day, i) => (
              <div key={i} className={`w-[8px] h-[8px] rounded-full flex items-center justify-center text-[4px] ${i < 4 ? 'bg-[#FF947A] text-black' : i === 4 ? 'bg-[#FF947A] text-black shadow-[0_0_6px_#FF947A]' : 'bg-white/10 text-gray-500'}`}>
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* Floating badge OUTSIDE phone */}
        <motion.div 
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute -right-4 -top-2 bg-[#FF947A] text-black px-1.5 py-[3px] rounded-full text-[6px] font-bold whitespace-nowrap shadow-[0_0_10px_rgba(255,148,122,0.5)]"
        >
          +250 XP
        </motion.div>
      </div>
    </div>
  )
}
