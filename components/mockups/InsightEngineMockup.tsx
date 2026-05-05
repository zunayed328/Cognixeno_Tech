'use client'

import { motion } from 'framer-motion'

export default function InsightEngineMockup() {
  return (
    <div className="relative w-full h-full p-2.5">
      <div className="w-full h-full bg-[#080810]/70 border border-[#C8A8E9]/20 rounded-[10px] p-2 flex flex-col gap-2">
        
        {/* Top Metrics Row */}
        <div className="flex gap-1.5">
          {[
            { lbl: 'Revenue', num: '$847K', pct: '+12%' },
            { lbl: 'Users', num: '12.4K', pct: '+8%' },
            { lbl: 'Conversion', num: '94%', pct: '+2%' },
          ].map((stat, i) => (
            <div key={i} className="flex-1 bg-white/5 rounded-[6px] p-1.5">
              <div className="text-gray-400 text-[5px] mb-0.5">{stat.lbl}</div>
              <div className="text-[#C8A8E9] text-[9px] font-bold leading-tight">{stat.num}</div>
              <div className="text-green-400 text-[4px] mt-0.5">↑ {stat.pct}</div>
            </div>
          ))}
        </div>

        {/* Main Chart Area */}
        <div className="h-[70px] bg-[#C8A8E9]/5 rounded-[6px] p-1 relative flex items-end">
          
          <div className="absolute top-1 right-1 bg-white/10 px-1 py-0.5 rounded-[3px] text-white text-[4px]">
            Real-time
          </div>

          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between py-2 px-1">
            <div className="h-[1px] w-full bg-white/5" />
            <div className="h-[1px] w-full bg-white/5" />
            <div className="h-[1px] w-full bg-white/5" />
            <div className="h-[1px] w-full bg-white/5" />
          </div>

          {/* Line Chart */}
          <svg className="w-full h-full absolute inset-0 preserve-3d" viewBox="0 0 100 40" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C8A8E9" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C8A8E9" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              d="M0,35 L15,25 L30,30 L45,15 L60,20 L75,5 L100,10"
              fill="none"
              stroke="#C8A8E9"
              strokeWidth="1.5"
            />
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              d="M0,35 L15,25 L30,30 L45,15 L60,20 L75,5 L100,10 L100,40 L0,40 Z"
              fill="url(#chartGradient)"
            />
            {/* Glowing dot at the end */}
            <motion.circle 
              cx="100" cy="10" r="2" 
              fill="#C8A8E9" 
              animate={{ r: [2, 3, 2], opacity: [1, 0.5, 1] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ filter: 'drop-shadow(0 0 4px #C8A8E9)' }}
            />
          </svg>
        </div>

        {/* Prediction Card */}
        <div className="mt-auto bg-[#E1FF51]/5 border-l-2 border-[#E1FF51] rounded-[4px] p-1.5 flex flex-col justify-center">
          <div className="text-[#E1FF51] text-[5px] mb-0.5">🔮 AI Prediction</div>
          <div className="text-white text-[7px] font-bold">Revenue +18% next month</div>
        </div>

      </div>
    </div>
  )
}
