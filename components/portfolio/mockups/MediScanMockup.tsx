'use client'

import { motion } from 'framer-motion'

export default function MediScanMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      
      {/* Floating Elements OUTSIDE browser */}
      {/* Top Left */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring' }}
        className="absolute top-[20px] left-[0%] lg:-left-[5%] bg-white/5 backdrop-blur-md border border-[#E1FF51]/40 rounded-xl px-4 py-3 shadow-[0_10px_30px_rgba(225,255,81,0.15)] z-20 flex items-center gap-3"
      >
        <div className="w-[24px] h-[24px] bg-[#E1FF51]/20 rounded-full flex items-center justify-center text-[12px]">🎯</div>
        <div className="flex flex-col">
          <span className="text-[#E1FF51] text-[14px] font-bold leading-tight">99.2% Accuracy</span>
          <span className="text-gray-400 text-[10px]">Validated by AI</span>
        </div>
      </motion.div>

      {/* Bottom Right */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
        className="absolute bottom-[40px] -right-[2%] lg:-right-[5%] bg-[#025259]/80 backdrop-blur-md border border-[#E1FF51]/30 rounded-xl p-3 shadow-[0_10px_20px_rgba(2,82,89,0.4)] z-20"
      >
        <div className="text-[#E1FF51] text-[24px] font-[900] leading-none mb-1 flex items-center gap-2">
          127 <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-2 h-2 rounded-full bg-[#E1FF51] shadow-[0_0_8px_#E1FF51]" />
        </div>
        <div className="text-white text-[11px] font-medium tracking-wide">ACTIVE SCANS</div>
      </motion.div>

      {/* Main App Window */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-[#001A1C] to-[#00272C] border border-[#025259]/40 rounded-2xl flex flex-col overflow-hidden w-full max-w-[600px] h-[480px] z-10"
        style={{ 
          boxShadow: '0 30px 80px rgba(0,39,44,0.6), 0 0 60px rgba(225,255,81,0.1)',
          transform: 'perspective(1000px) rotateY(-6deg) rotateX(2deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Header Bar */}
        <div className="bg-[#025259]/30 px-[20px] py-[16px] border-b border-[#025259]/50 flex justify-between items-center relative z-20">
          <div className="flex items-center gap-3">
            <div className="w-[28px] h-[28px] bg-gradient-to-br from-[#E1FF51] to-[#025259] rounded-lg flex justify-center items-center font-bold text-[#001A1C] text-[14px]">M</div>
            <span className="text-white text-[16px] font-bold">MediScan AI</span>
            <span className="bg-white/10 text-gray-400 px-2 py-0.5 rounded text-[10px] ml-2">v2.4 Pro</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#E1FF51]/10 border border-[#E1FF51]/30 rounded-full px-3 py-1 flex items-center gap-2">
              <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 rounded-full bg-[#E1FF51] shadow-[0_0_5px_#E1FF51]" />
              <span className="text-[#E1FF51] text-[10px] font-bold tracking-[1px]">LIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[32px] h-[32px] rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-[14px]">👨‍⚕️</div>
              <span className="text-white text-[13px] font-medium hidden sm:block">Dr. Smith</span>
            </div>
          </div>
        </div>

        {/* Main Area */}
        <div className="flex flex-1 overflow-hidden p-4 gap-4">
          
          {/* LEFT PANEL (60%) */}
          <div className="flex-[3] flex flex-col gap-3 h-full">
            
            {/* Patient Info */}
            <div className="bg-white/5 border border-[#025259]/30 rounded-xl p-3 px-4 flex justify-between items-center">
              <div>
                <div className="text-gray-400 text-[10px] mb-1">Patient #2847</div>
                <div className="text-white text-[15px] font-bold">John Anderson, 45M</div>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-[12px] font-bold">Active Scan</span>
                </div>
                <div className="text-gray-400 text-[10px]">Chest X-Ray / CT</div>
              </div>
            </div>

            {/* Scan Visualization */}
            <div className="relative flex-1 bg-gradient-to-b from-[#025259]/20 to-transparent border border-[#025259]/50 rounded-xl overflow-hidden flex items-center justify-center">
              
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#E1FF51]/50" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#E1FF51]/50" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#E1FF51]/50" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#E1FF51]/50" />

              {/* DNA Helix CSS Animation */}
              <div className="flex flex-col gap-[4px]">
                {Array.from({ length: 30 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotateX: [0, 360] }}
                    transition={{ duration: 4, delay: i * 0.1, repeat: Infinity, ease: "linear" }}
                    className="w-[100px] h-[2px] bg-[#E1FF51] mx-auto shadow-[0_0_8px_#E1FF51]"
                    style={{ opacity: 0.6 + Math.sin(i * 0.2) * 0.4 }}
                  />
                ))}
              </div>

              {/* Detection Markers */}
              <motion.div className="absolute top-[30%] left-[30%] flex flex-col items-center gap-1">
                <div className="w-3 h-3 rounded-full border-2 border-[#E1FF51] flex items-center justify-center">
                  <motion.div animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 rounded-full bg-[#E1FF51]" />
                </div>
                <span className="text-[#E1FF51] text-[9px] bg-[#001A1C]/80 px-1.5 py-0.5 rounded">Signal strong</span>
              </motion.div>
              <motion.div className="absolute top-[60%] right-[25%] flex flex-col items-center gap-1">
                <div className="w-3 h-3 rounded-full border-2 border-green-400 flex items-center justify-center">
                  <motion.div animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-1.5 h-1.5 rounded-full bg-green-400" />
                </div>
                <span className="text-green-400 text-[9px] bg-[#001A1C]/80 px-1.5 py-0.5 rounded">Pattern matched</span>
              </motion.div>

              {/* Scanning Beam */}
              <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-[#E1FF51] shadow-[0_0_20px_10px_rgba(225,255,81,0.2)] z-10"
              />
            </div>

            {/* Result Panel */}
            <div className="bg-[#E1FF51]/10 border border-[#E1FF51]/30 rounded-xl p-3 flex items-center justify-between">
              <div>
                <div className="text-gray-400 text-[11px] mb-1">Diagnosis</div>
                <div className="text-[#E1FF51] text-[18px] font-bold">Healthy ✓</div>
              </div>
              <div className="w-[1px] h-10 bg-[#E1FF51]/20 mx-4" />
              <div className="flex-1">
                <div className="flex justify-between items-end mb-1.5">
                  <span className="text-white text-[11px]">Confidence Level</span>
                  <span className="text-[#E1FF51] text-[12px] font-bold">99.2%</span>
                </div>
                <div className="w-full h-[4px] bg-black/40 rounded-full overflow-hidden mb-1.5">
                  <motion.div initial={{ width: 0 }} animate={{ width: '99.2%' }} transition={{ delay: 1, duration: 1 }} className="h-full bg-[#E1FF51] rounded-full" />
                </div>
                <div className="text-gray-400 text-[10px] text-right">Analyzed in 1.4s</div>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL (40%) */}
          <div className="flex-[2] flex flex-col gap-3 h-full">
            
            {/* Vital Signs Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* HR */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-gray-400 text-[10px] mb-2 flex items-center gap-1">
                  <span className="text-[#FF5F57]">♥</span> Heart Rate
                </div>
                <div className="text-white text-[18px] font-bold mb-2">72 <span className="text-[10px] text-gray-500 font-normal">BPM</span></div>
                <svg className="w-full h-[20px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <motion.path 
                    d="M0,10 L20,10 L25,0 L35,20 L40,10 L100,10" 
                    fill="none" stroke="#FF5F57" strokeWidth="2"
                    animate={{ pathLength: [0, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </div>
              
              {/* BP */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-gray-400 text-[10px] mb-2">Blood Pressure</div>
                <div className="text-white text-[16px] font-bold mb-2">120/80</div>
                <div className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-[9px] inline-block font-bold">Normal</div>
              </div>

              {/* O2 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-gray-400 text-[10px] mb-2">Oxygen Level</div>
                <div className="text-[#E1FF51] text-[20px] font-bold mb-1">98%</div>
                <div className="text-[#E1FF51]/70 text-[10px]">Optimal</div>
              </div>

              {/* Temp */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-gray-400 text-[10px] mb-2">Body Temp</div>
                <div className="text-white text-[16px] font-bold mb-2">98.6°F</div>
                <div className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-[9px] inline-block font-bold">Normal</div>
              </div>
            </div>

            {/* AI Insights Panel */}
            <div className="flex-1 bg-[#E1FF51]/5 border border-[#E1FF51]/20 rounded-xl p-4 flex flex-col">
              <div className="text-[#E1FF51] text-[12px] font-bold mb-4 flex items-center gap-2">
                <span>🧠</span> AI Insights
              </div>
              
              <div className="flex flex-col gap-3">
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex items-start gap-2 bg-black/20 p-2 rounded-lg">
                  <span className="text-green-400 text-[12px]">✓</span>
                  <span className="text-white text-[11px] leading-tight mt-0.5">All vitals are within normal range parameters.</span>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="flex items-start gap-2 bg-black/20 p-2 rounded-lg">
                  <span className="text-yellow-400 text-[12px]">⚠</span>
                  <span className="text-gray-300 text-[11px] leading-tight mt-0.5">Recommend standard follow-up scan in 6 months.</span>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} className="flex items-start gap-2 bg-black/20 p-2 rounded-lg">
                  <span className="text-blue-400 text-[12px]">💡</span>
                  <span className="text-gray-300 text-[11px] leading-tight mt-0.5">Preventative diet suggestions available for review.</span>
                </motion.div>
              </div>
            </div>

          </div>

        </div>

      </motion.div>
    </div>
  )
}
