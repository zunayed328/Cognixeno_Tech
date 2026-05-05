'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'
import ShopFlowMockup from './mockups/ShopFlowMockup'
import NexaBoardMockup from './mockups/NexaBoardMockup'
import MediScanMockup from './mockups/MediScanMockup'

const projects = [
  {
    id: 'shopflow',
    name: 'ShopFlow AI',
    category: 'BEST PROJECT',
    tagline: 'AI E-Commerce Chatbot',
    description: 'A full-featured WhatsApp chatbot processing over 10,000 customer queries daily with intelligent product recommendations, cart management, and order tracking.',
    tech: ['Node.js', 'WhatsApp API', 'GPT-4', 'Stripe', 'MongoDB'],
    metrics: [
      { value: '10K+', label: 'Queries/Day', color: '#F7B638' },
      { value: '94%', label: 'Resolution Rate', color: '#E1FF51' },
      { value: '<2s', label: 'Response Time', color: '#C8A8E9' }
    ],
    testimonial: {
      quote: 'ShopFlow AI transformed our customer support. Sales increased 240% in 3 months.',
      author: 'Sarah Chen',
      title: 'CEO, FashionHub',
      avatar: 'S'
    },
    accentColor: '#F7B638',
    accentSecondary: '#780115',
    component: ShopFlowMockup
  },
  {
    id: 'nexaboard',
    name: 'NexaBoard',
    category: 'TOP PICK',
    tagline: 'AI Project Management Platform',
    description: 'Real-time project management dashboard with AI task prioritization, team collaboration, and predictive analytics used by 500+ teams worldwide.',
    tech: ['Next.js', 'Supabase', 'Tailwind', 'TypeScript', 'AI Agents'],
    metrics: [
      { value: '500+', label: 'Active Teams', color: '#C8A8E9' },
      { value: '1.2M', label: 'Tasks Managed', color: '#FF947A' },
      { value: '99.9%', label: 'Uptime', color: '#E1FF51' }
    ],
    testimonial: {
      quote: 'Our team productivity doubled. The AI suggestions are incredibly accurate.',
      author: 'Mike Rodriguez',
      title: 'PM, TechCorp',
      avatar: 'M'
    },
    accentColor: '#C8A8E9',
    accentSecondary: '#1A0030',
    component: NexaBoardMockup
  },
  {
    id: 'mediscan',
    name: 'MediScan',
    category: 'INNOVATION AWARD',
    tagline: 'AI Medical Diagnostic Assistant',
    description: 'AI-powered diagnostic platform helping healthcare providers achieve 99.2% accuracy in early disease detection through advanced image analysis and pattern recognition.',
    tech: ['TensorFlow', 'FastAPI', 'React', 'PostgreSQL', 'AWS'],
    metrics: [
      { value: '99.2%', label: 'Accuracy Rate', color: '#E1FF51' },
      { value: '50K+', label: 'Patients Helped', color: '#025259' },
      { value: '1.4s', label: 'Analysis Time', color: '#C8A8E9' }
    ],
    testimonial: {
      quote: 'MediScan caught conditions our team almost missed. Saved lives.',
      author: 'Dr. Emily Park',
      title: 'Head of Radiology',
      avatar: 'E'
    },
    accentColor: '#E1FF51',
    accentSecondary: '#025259',
    component: MediScanMockup
  }
]

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [progress, setProgress] = useState(0)

  const ROTATION_INTERVAL = 6000 // 6s

  useEffect(() => {
    let interval: NodeJS.Timeout
    let frame: number
    let startTime = Date.now()

    if (!isHovered) {
      const updateProgress = () => {
        const elapsed = Date.now() - startTime
        const newProgress = (elapsed / ROTATION_INTERVAL) * 100
        
        if (newProgress >= 100) {
          setActiveIndex((prev) => (prev + 1) % projects.length)
          startTime = Date.now()
          setProgress(0)
        } else {
          setProgress(newProgress)
        }
        frame = requestAnimationFrame(updateProgress)
      }
      frame = requestAnimationFrame(updateProgress)
    }

    return () => {
      cancelAnimationFrame(frame)
      clearInterval(interval)
    }
  }, [activeIndex, isHovered])

  const handleTabClick = (index: number) => {
    setActiveIndex(index)
    setProgress(0)
  }

  const activeProject = projects[activeIndex]
  const MockupComponent = activeProject.component

  return (
    <section 
      className="relative w-full py-24 overflow-hidden" 
      style={{ background: 'linear-gradient(180deg, #05050A, #0A0A14)' }}
    >
      {/* Background ambient blob */}
      <motion.div
        animate={{ 
          background: `radial-gradient(circle at 50% 50%, ${activeProject.accentColor} 0%, transparent 70%)` 
        }}
        transition={{ duration: 1 }}
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-[#F7B638] shadow-[0_0_8px_#F7B638]" />
            <span className="text-[#F7B638] text-[12px] uppercase tracking-[3px] font-bold">
              ⭐ FEATURED WORK
            </span>
          </div>
          
          <h2 className="text-[clamp(40px,6vw,64px)] font-[900] text-white leading-tight mb-4">
            Our Best Work
          </h2>
          <p className="text-[#A0A0B8] text-[18px] max-w-[500px]">
            Real projects. Real results. Built by AI agents.
          </p>
        </div>

        {/* TAB NAVIGATION */}
        <div 
          className="flex flex-col items-center mb-16 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-4">
            {projects.map((project, index) => {
              const isActive = index === activeIndex
              return (
                <div key={project.id} className="relative">
                  <button
                    onClick={() => handleTabClick(index)}
                    className="relative z-10 px-[24px] py-[12px] rounded-full text-[14px] font-[600] transition-all duration-300"
                    style={{
                      background: isActive ? `linear-gradient(135deg, ${project.accentColor}20, transparent)` : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${isActive ? project.accentColor : 'rgba(255,255,255,0.08)'}`,
                      color: isActive ? '#fff' : '#A0A0B8',
                      boxShadow: isActive ? `0 0 20px ${project.accentColor}40` : 'none'
                    }}
                  >
                    {project.name}
                  </button>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-full"
                      style={{ backgroundColor: project.accentColor }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              )
            })}
          </div>
          
          {/* Progress bar container */}
          <div className="w-full max-w-[400px] h-[2px] bg-white/5 mt-8 rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full"
              style={{ backgroundColor: activeProject.accentColor, width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-8 items-center"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* LEFT COLUMN: Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col"
            >
              <div className="self-start px-[14px] py-[6px] rounded-full text-[11px] font-bold tracking-[2px] uppercase mb-4"
                   style={{ 
                     backgroundColor: `${activeProject.accentColor}1A`, 
                     border: `1px solid ${activeProject.accentColor}4D`,
                     color: activeProject.accentColor 
                   }}
              >
                {activeProject.category}
              </div>

              <h3 className="text-[48px] font-[800] text-white tracking-[-1px] leading-[1.1] mb-2">
                {activeProject.name}
              </h3>
              
              <div className="text-[16px] font-[600] mb-5" style={{ color: activeProject.accentColor }}>
                {activeProject.tagline}
              </div>

              <p className="text-[#A0A0B8] text-[16px] leading-[1.8] max-w-[500px] mb-8">
                {activeProject.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-10">
                {activeProject.tech.map((t) => (
                  <div key={t} className="bg-white/5 border border-white/10 px-[14px] py-[6px] rounded-full text-[12px] text-gray-300">
                    {t}
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {activeProject.metrics.map((m, i) => (
                  <div key={i} className="flex flex-col">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="text-[36px] font-[800] leading-none mb-2"
                      style={{ color: m.color }}
                    >
                      {m.value}
                    </motion.div>
                    <div className="h-[2px] w-12 bg-white/10 mb-2 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: 0.4 + (i * 0.1) }}
                        className="h-full"
                        style={{ backgroundColor: m.color }}
                      />
                    </div>
                    <div className="text-[11px] text-gray-400 uppercase tracking-[2px] font-semibold">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <button className="flex items-center gap-2 px-[28px] py-[14px] rounded-[10px] text-white font-bold transition-all hover:scale-105"
                        style={{ 
                          background: `linear-gradient(135deg, ${activeProject.accentColor}, ${activeProject.accentSecondary})`,
                          boxShadow: `0 10px 30px ${activeProject.accentColor}40`
                        }}
                >
                  View Live Project <FiExternalLink />
                </button>
                <button className="flex items-center gap-2 px-[28px] py-[14px] rounded-[10px] font-bold transition-all hover:bg-white/5"
                        style={{ 
                          border: `1.5px solid ${activeProject.accentColor}`,
                          color: activeProject.accentColor 
                        }}
                >
                  Read Case Study <FiArrowRight />
                </button>
              </div>

              {/* Testimonial */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border-l-[3px]"
                   style={{ borderLeftColor: activeProject.accentColor }}
              >
                <div className="text-[20px] mb-2 leading-none" style={{ color: activeProject.accentColor }}>&quot;</div>
                <p className="text-gray-300 italic text-[14px] mb-4">
                  {activeProject.testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center font-bold text-[14px] text-black"
                       style={{ backgroundColor: activeProject.accentColor }}
                  >
                    {activeProject.testimonial.avatar}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-[14px] font-bold leading-tight">{activeProject.testimonial.author}</span>
                    <span className="text-gray-400 text-[12px]">{activeProject.testimonial.title}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* RIGHT COLUMN: Mockup Showcase */}
          <div className="relative h-[540px] perspective-[1000px] flex items-center justify-center">
            {/* Ambient Glow */}
            <motion.div
              animate={{ 
                background: `radial-gradient(circle at 50% 50%, ${activeProject.accentColor} 0%, transparent 60%)`,
                scale: [1, 1.05, 1],
                opacity: [0.15, 0.2, 0.15]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 z-0 pointer-events-none"
            />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 w-full h-full flex justify-center items-center"
              >
                <MockupComponent />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
