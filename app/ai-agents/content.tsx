'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useCallback, useState } from 'react'
import dynamic from 'next/dynamic'
import PageHero from '../../components/ui/PageHero'
import GlassCard from '../../components/ui/GlassCard'
import SectionBadge from '../../components/ui/SectionBadge'
import AnimatedButton from '../../components/ui/AnimatedButton'

const AgentCollaboration = dynamic(() => import('../../components/animations/AgentCollaboration'), { ssr: false })
const DevAgentCard = dynamic(() => import('../../components/agents/DevAgentCard'), { ssr: false })
const DesignAgentCard = dynamic(() => import('../../components/agents/DesignAgentCard'), { ssr: false })
const AutomationAgentCard = dynamic(() => import('../../components/agents/AutomationAgentCard'), { ssr: false })
const CommunicationAgentCard = dynamic(() => import('../../components/agents/CommunicationAgentCard'), { ssr: false })
const ResearchAgentCard = dynamic(() => import('../../components/agents/ResearchAgentCard'), { ssr: false })
const QualityAgentCard = dynamic(() => import('../../components/agents/QualityAgentCard'), { ssr: false })

/* ─── Agent Avatar Components ─── */

function DevAvatar() {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg width={48} height={48} viewBox="0 0 48 48" fill="none">
        <rect x={8} y={12} width={32} height={28} rx={6} stroke="#FF947A" strokeWidth={1.5} fill="rgba(255,148,122,0.08)" />
        {/* Eyes */}
        <motion.rect x={15} y={22} width={6} height={4} rx={1} fill="#FF947A" animate={{ scaleY: [1, 0.1, 1] }} transition={{ duration: 0.2, delay: 3, repeat: Infinity, repeatDelay: 3 }} style={{ transformOrigin: '18px 24px' }} />
        <motion.rect x={27} y={22} width={6} height={4} rx={1} fill="#FF947A" animate={{ scaleY: [1, 0.1, 1] }} transition={{ duration: 0.2, delay: 3, repeat: Infinity, repeatDelay: 3 }} style={{ transformOrigin: '30px 24px' }} />
        {/* Mouth */}
        <rect x={18} y={30} width={12} height={2} rx={1} fill="rgba(255,148,122,0.4)" />
        {/* Antenna */}
        <line x1={24} y1={12} x2={24} y2={4} stroke="#FF947A" strokeWidth={1.5} />
        <motion.circle cx={24} cy={3} r={2.5} fill="#FF947A" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} />
      </svg>
    </div>
  )
}

function DesignAvatar() {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg width={48} height={48} viewBox="0 0 48 48" fill="none">
        <motion.polygon points="24,4 42,14 42,34 24,44 6,34 6,14" stroke="#C8A8E9" strokeWidth={1.5} fill="rgba(200,168,233,0.06)" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '24px 24px' }} />
        <motion.polygon points="16,20 20,18 24,20 20,22" fill="#C8A8E9" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '20px 20px' }} />
        <motion.polygon points="28,20 32,18 36,20 32,22" fill="#C8A8E9" animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '32px 20px' }} />
        <motion.path d="M18 30 Q24 26 30 30" stroke="rgba(200,168,233,0.5)" strokeWidth={1.5} fill="none" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function AutomationAvatar() {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg width={48} height={48} viewBox="0 0 48 48" fill="none">
        <motion.circle cx={24} cy={24} r={18} stroke="#E1FF51" strokeWidth={1} strokeDasharray="6 4" fill="none" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '24px 24px' }} />
        <motion.circle cx={24} cy={24} r={12} stroke="rgba(225,255,81,0.4)" strokeWidth={1} strokeDasharray="4 3" fill="rgba(225,255,81,0.05)" animate={{ rotate: -360 }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '24px 24px' }} />
        <motion.circle cx={18} cy={22} r={3} stroke="#E1FF51" strokeWidth={1.5} fill="rgba(225,255,81,0.15)" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '18px 22px' }} />
        <motion.circle cx={30} cy={22} r={3} stroke="#E1FF51" strokeWidth={1.5} fill="rgba(225,255,81,0.15)" animate={{ rotate: -360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '30px 22px' }} />
        <circle cx={24} cy={24} r={2} fill="#E1FF51" />
        <path d="M18 30 L22 28 L26 30 L30 28" stroke="rgba(225,255,81,0.5)" strokeWidth={1} fill="none" />
      </svg>
    </div>
  )
}

function CommAvatar() {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg width={48} height={48} viewBox="0 0 48 48" fill="none">
        <rect x={8} y={8} width={32} height={24} rx={8} stroke="#F7B638" strokeWidth={1.5} fill="rgba(247,182,56,0.06)" />
        <polygon points="18,32 24,38 30,32" fill="rgba(247,182,56,0.06)" stroke="#F7B638" strokeWidth={1.5} />
        <circle cx={18} cy={20} r={2} fill="#F7B638" />
        <circle cx={30} cy={20} r={2} fill="#F7B638" />
        {[14, 18, 22].map((r, i) => (
          <motion.circle key={i} cx={42} cy={12} r={r} stroke="rgba(247,182,56,0.2)" strokeWidth={0.8} fill="none" animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }} style={{ transformOrigin: '42px 12px' }} />
        ))}
      </svg>
    </div>
  )
}

function ResearchAvatar() {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg width={48} height={48} viewBox="0 0 48 48" fill="none">
        <circle cx={20} cy={20} r={12} stroke="#43A8A0" strokeWidth={1.5} fill="rgba(2,82,89,0.1)" />
        <line x1={29} y1={29} x2={40} y2={40} stroke="#43A8A0" strokeWidth={2.5} strokeLinecap="round" />
        <motion.line x1={12} y1={20} x2={28} y2={20} stroke="rgba(67,168,160,0.5)" strokeWidth={1} animate={{ y1: [14, 26, 14], y2: [14, 26, 14] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
        {[{cx:16,cy:16},{cx:22,cy:18},{cx:18,cy:24},{cx:24,cy:22}].map((d, i) => (
          <motion.circle key={i} cx={d.cx} cy={d.cy} r={1.5} fill="#43A8A0" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, delay: i * 0.4, repeat: Infinity }} />
        ))}
      </svg>
    </div>
  )
}

function QualityAvatar() {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg width={48} height={48} viewBox="0 0 48 48" fill="none">
        <path d="M24 4 L40 12 L40 28 Q40 40 24 44 Q8 40 8 28 L8 12 Z" stroke="#C74B16" strokeWidth={1.5} fill="rgba(120,1,21,0.08)" />
        <motion.path d="M16 24 L22 30 L34 18" stroke="#F7B638" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.5, repeat: Infinity, repeatDelay: 4 }} />
        <motion.circle cx={24} cy={24} r={16} stroke="rgba(247,182,56,0.2)" strokeWidth={0.8} strokeDasharray="3 6" fill="none" animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '24px 24px' }} />
      </svg>
    </div>
  )
}

const avatarComponents = [DevAvatar, DesignAvatar, AutomationAvatar, CommAvatar, ResearchAvatar, QualityAvatar]
const agentAnimationComponents = [DevAgentCard, DesignAgentCard, AutomationAgentCard, CommunicationAgentCard, ResearchAgentCard, QualityAgentCard]

/* ─── Agent Data ─── */
const agents = [
  { name: 'Dev Agent', role: 'Writes and tests all code', accent: '#FF947A', skills: ['Coding', 'Testing', 'Debugging', 'Deployment'], task: 'Building e-commerce API', progress: 78 },
  { name: 'Design Agent', role: 'Creates UI/UX and visual designs', accent: '#C8A8E9', skills: ['UI Design', 'UX Flow', 'Prototyping'], task: 'Dashboard wireframes', progress: 45 },
  { name: 'Automation Agent', role: 'Builds automation workflows', accent: '#E1FF51', skills: ['Workflow', 'Integration', 'Scheduling'], task: 'Email pipeline setup', progress: 92 },
  { name: 'Communication Agent', role: 'Manages emails and chatbots', accent: '#F7B638', skills: ['Email', 'Chat', 'Response', 'Follow-up'], task: 'Customer response queue', progress: 63 },
  { name: 'Research Agent', role: 'Market research and planning', accent: '#43A8A0', skills: ['Research', 'Analysis', 'Strategy'], task: 'Competitor analysis report', progress: 34 },
  { name: 'Quality Agent', role: 'Reviews and ensures quality', accent: '#C74B16', skills: ['QA Testing', 'Review', 'Optimization'], task: 'Performance audit v3.2', progress: 87 },
]

const terminalLines = [
  { agent: 'Dev Agent', text: 'Analyzing project requirements...', color: '#FF947A' },
  { agent: 'Dev Agent', text: 'Writing component architecture...', color: '#FF947A' },
  { agent: 'Design Agent', text: 'Creating UI mockups...', color: '#C8A8E9' },
  { agent: 'Automation Agent', text: 'Setting up CI/CD pipeline...', color: '#E1FF51' },
  { agent: 'Quality Agent', text: 'Running quality checks...', color: '#F7B638' },
  { agent: 'All Agents', text: 'Delivery ready ✓', color: '#22c55e' },
]

const stats = [
  { label: 'Tasks Today', value: '847', accent: '#E1FF51' },
  { label: 'Avg. Completion', value: '4.2m', accent: '#C8A8E9' },
  { label: 'Quality Score', value: '99.6%', accent: '#FF947A' },
  { label: 'In Queue', value: '23', accent: '#F7B638' },
]

/* ─── Agent Card with 3D Tilt ─── */
function AgentCardWrapper({ agent, index }: { agent: typeof agents[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const Avatar = avatarComponents[index]
  const AnimCard = agentAnimationComponents[index]

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (prefersReducedMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const x = ((e.clientX - cx) / (rect.width / 2)) * 10
    const y = ((e.clientY - cy) / (rect.height / 2)) * -5
    setTilt({
      x: Math.max(-10, Math.min(10, x)),
      y: Math.max(-5, Math.min(5, y)),
    })
  }, [prefersReducedMotion])

  const handleMouseLeave = useCallback(() => setTilt({ x: 0, y: 0 }), [])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        willChange: 'transform',
      }}
    >
      <motion.div
        animate={{
          rotateY: tilt.x,
          rotateX: tilt.y,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        whileHover={!prefersReducedMotion ? { y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } } : {}}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <GlassCard accentColor={agent.accent} className="h-full">
          {/* Animated Avatar */}
          <div className="flex justify-center mb-2">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{
              background: `${agent.accent}0D`,
              border: `1px solid ${agent.accent}25`,
              boxShadow: `0 0 30px ${agent.accent}15`,
            }}>
              <Avatar />
            </div>
          </div>

          <h3 className="text-xl font-bold text-white text-center">{agent.name}</h3>
          <p className="mt-1 text-sm text-center" style={{ color: agent.accent }}>{agent.role}</p>

          {/* Skills */}
          <div className="mt-4 flex flex-wrap justify-center gap-1.5">
            {agent.skills.map(s => (
              <span key={s} className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{
                background: `${agent.accent}14`,
                border: `1px solid ${agent.accent}33`,
                color: agent.accent,
              }}>{s}</span>
            ))}
          </div>

          {/* Agent Animation Preview */}
          <div className="mt-5 flex justify-center">
            <AnimCard />
          </div>

          {/* Task */}
          <div className="mt-5 p-3 rounded-xl" style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-[#6B6B8A]">Currently Working On:</span>
              <div className="flex items-center gap-1">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-[10px] text-[#22c55e] font-bold">Active</span>
              </div>
            </div>
            <p className="mt-1 text-xs font-semibold text-white">{agent.task}</p>
            <div className="mt-2 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${agent.progress}%` }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${agent.accent}, ${agent.accent}80)`,
                  boxShadow: `0 0 6px ${agent.accent}66`,
                }}
              />
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}

/* ─── Main Page ─── */
export default function AIAgentsContent() {
  return (
    <main>
      <PageHero
        badge="The Engine Behind Everything"
        badgeColor="#E1FF51"
        title="Meet Our AI Agents"
        subtitle="A team of specialized AI agents that work 24/7 to deliver your projects with speed, accuracy, and unlimited scale."
        gradient="linear-gradient(180deg, #00272C 0%, #080810 100%)"
      />

      {/* Agent Cards */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #080810, #0D0D1A)' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <SectionBadge text="Our Team" color="#E1FF51" />
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="mt-6 text-3xl sm:text-4xl font-extrabold text-white tracking-[-1px]">
              Six Specialized Agents
            </motion.h2>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent, i) => (
              <AgentCardWrapper key={agent.name} agent={agent} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="relative py-16 px-6" style={{
        background: 'rgba(255,255,255,0.015)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div className="mx-auto max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-4xl font-black" style={{ color: s.accent, textShadow: `0 0 20px ${s.accent}66` }}>{s.value}</div>
              <div className="mt-2 w-8 h-[2px] mx-auto rounded-full" style={{ background: s.accent }} />
              <p className="mt-2 text-xs text-[rgba(255,255,255,0.4)] uppercase tracking-[1px] font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Live Collaboration */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #0D0D1A, #080810)' }}>
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <SectionBadge text="Teamwork" color="#C8A8E9" />
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="mt-6 text-2xl sm:text-3xl font-extrabold text-white">
              Live Agent Collaboration
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.2 }} className="mt-3 text-[#A0A0B8] max-w-lg mx-auto">
              All six agents work together in real-time, sharing context and coordinating tasks through our central AI core.
            </motion.p>
          </div>

          <div className="flex justify-center">
            <AgentCollaboration />
          </div>
        </div>
      </section>

      {/* Terminal */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #080810, #0D0D1A)' }}>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <SectionBadge text="Live Activity" color="#E1FF51" />
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="mt-6 text-2xl sm:text-3xl font-extrabold text-white">
              Agent Workflow in Action
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(225,255,81,0.15)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="flex items-center gap-2 px-5 py-3" style={{
              background: 'rgba(225,255,81,0.05)',
              borderBottom: '1px solid rgba(225,255,81,0.1)',
            }}>
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-xs text-[#6B6B8A] font-mono">cognixeno-agents</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-2">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.3, duration: 0.3 }}
                >
                  <span style={{ color: line.color }}>[{line.agent}]</span>
                  <span className="text-[#A0A0B8] ml-2">{line.text}</span>
                </motion.div>
              ))}
              <motion.span
                className="inline-block w-2 h-4 mt-2"
                style={{ background: '#E1FF51' }}
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center" style={{ background: 'linear-gradient(180deg, #080810, #0a0a14)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-1px]">Put Our Agents to Work</h2>
          <p className="mt-4 text-[#A0A0B8]">Submit your project and watch our agents deliver it — faster than any human team.</p>
          <div className="mt-8">
            <AnimatedButton href="/contact" color="#E1FF51">Start Your Project</AnimatedButton>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
