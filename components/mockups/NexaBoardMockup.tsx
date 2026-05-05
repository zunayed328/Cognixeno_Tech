'use client'

import { motion } from 'framer-motion'

export default function NexaBoardMockup() {
  return (
    <div className="relative w-full h-full p-2">
      <div className="w-full h-full bg-[#080810]/80 rounded-[10px] border border-[#C8A8E9]/20 overflow-hidden flex flex-col">
        
        {/* Browser Top Bar */}
        <div className="h-[16px] bg-[#C8A8E9]/10 flex items-center px-2 relative">
          <div className="flex gap-[3px]">
            <div className="w-1 h-1 rounded-full bg-red-400" />
            <div className="w-1 h-1 rounded-full bg-yellow-400" />
            <div className="w-1 h-1 rounded-full bg-green-400" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[80px] h-[8px] bg-white/5 rounded-[3px] flex items-center justify-center">
            <span className="text-[#C8A8E9] text-[5px]">nexaboard.app</span>
          </div>
        </div>

        {/* Dashboard Area */}
        <div className="flex-1 flex">
          {/* Sidebar */}
          <div className="w-[30px] bg-[#C8A8E9]/5 border-r border-[#C8A8E9]/10 flex flex-col items-center py-2 gap-2">
            <div className="w-2 h-2 rounded-full bg-[#C8A8E9]" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>

          {/* Main Content */}
          <div className="flex-1 p-2 flex flex-col gap-2">
            
            {/* Stats Row */}
            <div className="flex gap-2">
              {[
                { num: '247', lbl: 'Tasks' },
                { num: '98%', lbl: 'Done' },
                { num: '12', lbl: 'Active' },
              ].map((stat, i) => (
                <div key={i} className="flex-1 bg-[#C8A8E9]/5 border border-[#C8A8E9]/15 rounded-[6px] p-1 text-center">
                  <div className="text-[#C8A8E9] text-[9px] font-bold leading-tight">{stat.num}</div>
                  <div className="text-gray-400 text-[5px]">{stat.lbl}</div>
                </div>
              ))}
            </div>

            {/* Kanban Board */}
            <div className="flex-1 flex gap-1.5">
              
              {/* To Do */}
              <div className="flex-1 bg-[#C8A8E9]/5 rounded-[6px] p-1 flex flex-col gap-1 relative">
                <span className="text-gray-400 text-[5px] font-bold px-0.5">To Do</span>
                <div className="bg-white/5 border-l-2 border-[#C8A8E9] rounded-[3px] p-1 h-[14px] flex items-center justify-between">
                  <div className="w-[12px] h-[2px] bg-white/20 rounded-full" />
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>
                {/* Animating Card */}
                <motion.div 
                  animate={{ x: [0, 40, 0], y: [0, 0, 0] }}
                  transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                  className="bg-white/5 border-l-2 border-[#C8A8E9] rounded-[3px] p-1 h-[14px] flex items-center justify-between absolute top-[16px] left-[4px] right-[4px] z-10"
                >
                  <div className="w-[16px] h-[2px] bg-[#C8A8E9]/50 rounded-full" />
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                </motion.div>
                <div className="bg-white/5 border-l-2 border-[#C8A8E9] rounded-[3px] p-1 h-[14px] flex items-center justify-between mt-[14px]">
                  <div className="w-[14px] h-[2px] bg-white/20 rounded-full" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                </div>
              </div>

              {/* In Progress */}
              <div className="flex-1 bg-[#C8A8E9]/5 rounded-[6px] p-1 flex flex-col gap-1">
                <span className="text-gray-400 text-[5px] font-bold px-0.5">In Progress</span>
                <div className="bg-white/5 border-l-2 border-[#C8A8E9] rounded-[3px] p-1 h-[14px] flex items-center justify-between">
                  <div className="w-[18px] h-[2px] bg-white/20 rounded-full" />
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                </div>
                {/* Empty slot for the animating card */}
                <div className="h-[14px]" />
              </div>

              {/* Done */}
              <div className="flex-1 bg-[#C8A8E9]/5 rounded-[6px] p-1 flex flex-col gap-1">
                <span className="text-gray-400 text-[5px] font-bold px-0.5">Done</span>
                <div className="bg-white/5 border-l-2 border-[#C8A8E9] rounded-[3px] p-1 h-[14px] flex items-center justify-between opacity-50">
                  <div className="w-[10px] h-[2px] bg-white/20 rounded-full" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                </div>
                <div className="bg-white/5 border-l-2 border-[#C8A8E9] rounded-[3px] p-1 h-[14px] flex items-center justify-between opacity-50">
                  <div className="w-[14px] h-[2px] bg-white/20 rounded-full" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Live Indicator */}
      <div className="absolute top-3 right-3 flex items-center gap-1">
        <motion.div 
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_4px_#22c55e]"
        />
        <span className="text-[#C8A8E9] text-[5px] font-bold">LIVE</span>
      </div>
    </div>
  )
}
