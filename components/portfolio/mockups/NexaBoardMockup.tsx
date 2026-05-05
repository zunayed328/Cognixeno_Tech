'use client'

import { motion } from 'framer-motion'

export default function NexaBoardMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      
      {/* Floating Elements OUTSIDE browser */}
      {/* Top Right */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring' }}
        className="absolute top-[20px] right-[0%] lg:-right-[5%] bg-white/5 backdrop-blur-md border border-[#C8A8E9]/30 rounded-xl p-3 w-[160px] shadow-[0_10px_30px_rgba(200,168,233,0.15)] z-20"
      >
        <div className="text-gray-400 text-[10px] mb-1">Weekly Velocity</div>
        <div className="text-[#C8A8E9] text-[18px] font-bold leading-none mb-2">+34 pts</div>
        <svg className="w-full h-[30px]" viewBox="0 0 100 30" preserveAspectRatio="none">
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            d="M0,25 Q25,5 50,20 T100,5" 
            fill="none" stroke="#C8A8E9" strokeWidth="2" 
          />
        </svg>
      </motion.div>

      {/* Bottom Right */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
        className="absolute bottom-[40px] -right-[5%] bg-white/5 backdrop-blur-md border border-green-500/30 rounded-full px-4 py-2 flex items-center gap-2 shadow-[0_10px_20px_rgba(34,197,94,0.1)] z-20"
      >
        <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
        <span className="text-white text-[12px] font-bold tracking-wide">Real-time Sync</span>
      </motion.div>

      {/* Main Browser Window */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-[#0a0a14] border border-[#C8A8E9]/20 rounded-2xl flex flex-col overflow-hidden w-full max-w-[600px] h-[480px] z-10"
        style={{ 
          boxShadow: '0 30px 80px rgba(26,0,48,0.5), 0 0 60px rgba(200,168,233,0.15)',
          transform: 'perspective(1000px) rotateY(-5deg) rotateX(3deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Browser Top Bar */}
        <div className="h-[36px] bg-[#C8A8E9]/5 flex items-center px-3 gap-2 border-b border-white/5 relative z-20">
          <div className="flex gap-1.5">
            <div className="w-[12px] h-[12px] rounded-full bg-[#FF5F57]" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#FFBD2E]" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#28C840]" />
          </div>
          <div className="mx-auto bg-white/5 rounded-md px-3 py-1 w-[200px] text-center flex items-center justify-center gap-1.5">
            <span className="text-gray-400 text-[10px]">🔒</span>
            <span className="text-[#C8A8E9] text-[11px]">nexaboard.app/dashboard</span>
          </div>
          <div className="w-[20px] h-[20px] rounded-full bg-[#C8A8E9]/20 border border-[#C8A8E9]/50" />
        </div>

        {/* Dashboard Content */}
        <div className="flex flex-1 overflow-hidden relative">
          
          {/* Sidebar */}
          <div className="w-[60px] bg-[#C8A8E9]/5 border-r border-[#C8A8E9]/10 flex flex-col items-center py-4 gap-4 z-10">
            {/* Logo */}
            <div className="w-[24px] h-[24px] bg-gradient-to-br from-[#C8A8E9] to-[#1A0030] rounded flex items-center justify-center text-white font-bold text-[12px] mb-2 shadow-[0_0_10px_#C8A8E9]">
              X
            </div>
            {/* Icons */}
            {[1, 0, 0, 0, 0].map((active, i) => (
              <div key={i} className={`w-[32px] h-[32px] rounded-full flex items-center justify-center transition-all ${active ? 'bg-[#C8A8E9]/20 border border-[#C8A8E9]/50 shadow-inner' : 'border border-white/10 opacity-50'}`}>
                <div className={`w-[14px] h-[14px] rounded-[3px] ${active ? 'bg-[#C8A8E9]' : 'bg-gray-400'}`} />
              </div>
            ))}
          </div>

          {/* Main Area */}
          <div className="flex-1 flex flex-col p-4 overflow-hidden relative">
            
            {/* Header */}
            <div className="flex justify-between items-end mb-4">
              <div>
                <h1 className="text-white text-[18px] font-bold leading-tight">Project Dashboard</h1>
                <p className="text-gray-400 text-[11px] mt-0.5">Welcome back, Sarah • Tuesday, Oct 24</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-[11px] text-gray-400 flex items-center w-[120px]">Search...</div>
                <div className="w-[24px] h-[24px] bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-[12px]">🔔</div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              {[
                { title: 'Active Projects', num: '24', trend: '+12% ↑', type: 'chart' },
                { title: 'Tasks Completed', num: '1,247', trend: '98 today', type: 'progress' },
                { title: 'Team Members', num: '18', trend: '+3 new', type: 'avatars' },
                { title: 'Revenue', num: '$84.2K', trend: '+24% ↑', type: 'chart2' }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-[#C8A8E9]/20 rounded-xl p-3 flex flex-col justify-between h-[80px]">
                  <div className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">{stat.title}</div>
                  <div className="flex items-end justify-between">
                    <div className="text-[#C8A8E9] text-[20px] font-bold leading-none">{stat.num}</div>
                    <div className="text-green-400 text-[9px] font-bold">{stat.trend}</div>
                  </div>
                  {/* Visuals */}
                  {stat.type === 'progress' && <div className="w-full h-[3px] bg-white/10 rounded-full mt-2"><div className="w-[70%] h-full bg-[#C8A8E9] rounded-full" /></div>}
                  {stat.type === 'avatars' && <div className="flex -space-x-1 mt-1">{[1,2,3].map(j=><div key={j} className="w-[12px] h-[12px] rounded-full bg-[#C8A8E9]/50 border border-black"/>)}</div>}
                  {stat.type === 'chart' && <div className="w-full h-[8px] bg-gradient-to-r from-transparent to-[#C8A8E9]/20 mt-1" />}
                  {stat.type === 'chart2' && <div className="w-full h-[8px] bg-gradient-to-r from-transparent to-green-500/20 mt-1" />}
                </div>
              ))}
            </div>

            {/* Kanban Board */}
            <div className="flex-1 flex gap-3 h-full pb-4">
              
              {/* To Do Column */}
              <div className="flex-1 bg-white/5 rounded-xl p-3 flex flex-col gap-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white text-[12px] font-bold">To Do</span>
                  <span className="bg-white/10 text-gray-300 px-1.5 py-0.5 rounded text-[9px]">4</span>
                </div>
                {[1, 2].map(i => (
                  <div key={i} className="bg-white/5 border-l-[3px] border-[#FF5F57] rounded-lg p-2.5 flex flex-col gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                    <div className="text-white text-[12px] leading-tight">Update landing page copy</div>
                    <div className="w-[70%] h-[4px] bg-white/10 rounded-full mt-1" />
                    <div className="flex justify-between mt-1 items-center">
                      <div className="flex -space-x-1"><div className="w-3 h-3 bg-blue-400 rounded-full"/><div className="w-3 h-3 bg-purple-400 rounded-full"/></div>
                      <span className="text-gray-500 text-[9px]">Oct 25</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* In Progress Column */}
              <div className="flex-1 bg-white/5 rounded-xl p-3 flex flex-col gap-2 relative">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[#C8A8E9] text-[12px] font-bold">In Progress</span>
                  <span className="bg-[#C8A8E9]/20 text-[#C8A8E9] px-1.5 py-0.5 rounded text-[9px]">3</span>
                </div>
                
                <div className="bg-white/5 border-l-[3px] border-[#FFBD2E] rounded-lg p-2.5 flex flex-col gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <div className="text-white text-[12px] leading-tight">API Integration auth</div>
                  <div className="w-[80%] h-[4px] bg-white/10 rounded-full mt-1" />
                </div>

                {/* Animated Card moving to Done */}
                <motion.div 
                  animate={{ x: [0, 200, 0], y: [0, 40, 0], opacity: [1, 0.8, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-[#C8A8E9]/10 border border-[#C8A8E9]/30 border-l-[3px] border-l-[#C8A8E9] rounded-lg p-2.5 flex flex-col gap-1.5 relative z-20 shadow-lg shadow-[#C8A8E9]/10 backdrop-blur-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-[#C8A8E9] shadow-[0_0_5px_#C8A8E9]" />
                  <div className="text-white text-[12px] font-bold leading-tight">Implement AI models</div>
                  <div className="w-[90%] h-[4px] bg-[#C8A8E9]/30 rounded-full mt-1" />
                  <div className="flex justify-between mt-1 items-center">
                    <div className="flex -space-x-1"><div className="w-3 h-3 bg-green-400 rounded-full"/></div>
                    <span className="text-[#C8A8E9] text-[9px]">Today</span>
                  </div>
                </motion.div>
                
              </div>

              {/* Done Column */}
              <div className="flex-1 bg-white/5 rounded-xl p-3 flex flex-col gap-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-400 text-[12px] font-bold">Done</span>
                  <span className="bg-white/10 text-gray-400 px-1.5 py-0.5 rounded text-[9px]">8</span>
                </div>
                
                {[1, 2].map(i => (
                  <div key={i} className="bg-white/5 border-l-[3px] border-[#28C840] rounded-lg p-2.5 flex flex-col gap-1.5 opacity-60">
                    <div className="w-2 h-2 rounded-full bg-[#28C840]" />
                    <div className="text-gray-300 text-[12px] line-through leading-tight">Setup database</div>
                    <div className="w-[50%] h-[4px] bg-white/10 rounded-full mt-1" />
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Sidebar - Activity Feed */}
          <div className="w-[180px] bg-black/20 border-l border-white/5 p-4 flex flex-col hidden sm:flex">
            <h3 className="text-white text-[12px] font-bold mb-4">Activity Feed</h3>
            
            <div className="flex flex-col gap-4">
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex gap-2">
                <div className="w-[20px] h-[20px] rounded-full bg-blue-400 flex-shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-white text-[10px] leading-tight"><span className="font-bold">John</span> completed task X</span>
                  <span className="text-gray-500 text-[8px]">2 mins ago</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.5 }} className="flex gap-2">
                <div className="w-[20px] h-[20px] rounded-full bg-purple-400 flex-shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-white text-[10px] leading-tight"><span className="font-bold">Sarah</span> added new project</span>
                  <span className="text-gray-500 text-[8px]">15 mins ago</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 4.5 }} className="flex gap-2">
                <div className="w-[20px] h-[20px] rounded-full bg-[#C8A8E9] flex-shrink-0 flex items-center justify-center text-[10px]">🤖</div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[#C8A8E9] text-[10px] leading-tight"><span className="font-bold">AI Agent</span> scheduled meeting</span>
                  <span className="text-gray-500 text-[8px]">1 hour ago</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  )
}
