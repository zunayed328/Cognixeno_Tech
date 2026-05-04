'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import PageHero from '../../components/ui/PageHero'
import GlassCard from '../../components/ui/GlassCard'
import SectionBadge from '../../components/ui/SectionBadge'
import AnimatedButton from '../../components/ui/AnimatedButton'

/* ─── Agent Avatar Components ─── */

function DevAvatar() {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      {/* Robot face */}
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
        {/* Hexagonal face */}
        <motion.polygon points="24,4 42,14 42,34 24,44 6,34 6,14" stroke="#C8A8E9" strokeWidth={1.5} fill="rgba(200,168,233,0.06)" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '24px 24px' }} />
        {/* Hex eyes */}
        <motion.polygon points="16,20 20,18 24,20 20,22" fill="#C8A8E9" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '20px 20px' }} />
        <motion.polygon points="28,20 32,18 36,20 32,22" fill="#C8A8E9" animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '32px 20px' }} />
        {/* Creative swirl */}
        <motion.path d="M18 30 Q24 26 30 30" stroke="rgba(200,168,233,0.5)" strokeWidth={1.5} fill="none" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function AutomationAvatar() {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg width={48} height={48} viewBox="0 0 48 48" fill="none">
        {/* Outer gear */}
        <motion.circle cx={24} cy={24} r={18} stroke="#E1FF51" strokeWidth={1} strokeDasharray="6 4" fill="none" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '24px 24px' }} />
        {/* Inner gear */}
        <motion.circle cx={24} cy={24} r={12} stroke="rgba(225,255,81,0.4)" strokeWidth={1} strokeDasharray="4 3" fill="rgba(225,255,81,0.05)" animate={{ rotate: -360 }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '24px 24px' }} />
        {/* Gear eye left */}
        <motion.circle cx={18} cy={22} r={3} stroke="#E1FF51" strokeWidth={1.5} fill="rgba(225,255,81,0.15)" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '18px 22px' }} />
        {/* Gear eye right */}
        <motion.circle cx={30} cy={22} r={3} stroke="#E1FF51" strokeWidth={1.5} fill="rgba(225,255,81,0.15)" animate={{ rotate: -360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '30px 22px' }} />
        {/* Center bolt */}
        <circle cx={24} cy={24} r={2} fill="#E1FF51" />
        {/* Mouth circuit */}
        <path d="M18 30 L22 28 L26 30 L30 28" stroke="rgba(225,255,81,0.5)" strokeWidth={1} fill="none" />
      </svg>
    </div>
  )
}

function CommAvatar() {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg width={48} height={48} viewBox="0 0 48 48" fill="none">
        {/* Speech bubble head */}
        <rect x={8} y={8} width={32} height={24} rx={8} stroke="#F7B638" strokeWidth={1.5} fill="rgba(247,182,56,0.06)" />
        <polygon points="18,32 24,38 30,32" fill="rgba(247,182,56,0.06)" stroke="#F7B638" strokeWidth={1.5} />
        {/* Eyes */}
        <circle cx={18} cy={20} r={2} fill="#F7B638" />
        <circle cx={30} cy={20} r={2} fill="#F7B638" />
        {/* Signal waves */}
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
        {/* Magnifying glass */}
        <circle cx={20} cy={20} r={12} stroke="#43A8A0" strokeWidth={1.5} fill="rgba(2,82,89,0.1)" />
        <line x1={29} y1={29} x2={40} y2={40} stroke="#43A8A0" strokeWidth={2.5} strokeLinecap="round" />
        {/* Scanning beam */}
        <motion.line x1={12} y1={20} x2={28} y2={20} stroke="rgba(67,168,160,0.5)" strokeWidth={1} animate={{ y1: [14, 26, 14], y2: [14, 26, 14] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
        {/* Data dots inside lens */}
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
        {/* Shield */}
        <path d="M24 4 L40 12 L40 28 Q40 40 24 44 Q8 40 8 28 L8 12 Z" stroke="#C74B16" strokeWidth={1.5} fill="rgba(120,1,21,0.08)" />
        {/* Checkmark */}
        <motion.path d="M16 24 L22 30 L34 18" stroke="#F7B638" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.5, repeat: Infinity, repeatDelay: 4 }} />
        {/* Rotating badge */}
        <motion.circle cx={24} cy={24} r={16} stroke="rgba(247,182,56,0.2)" strokeWidth={0.8} strokeDasharray="3 6" fill="none" animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '24px 24px' }} />
      </svg>
    </div>
  )
}

const avatarComponents = [DevAvatar, DesignAvatar, AutomationAvatar, CommAvatar, ResearchAvatar, QualityAvatar]

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

/* ─── Collaboration Hub ─── */
const hubAgents = [
  { name: 'Dev', color: '#FF947A', angle: 0 },
  { name: 'Design', color: '#C8A8E9', angle: 60 },
  { name: 'Auto', color: '#E1FF51', angle: 120 },
  { name: 'Comm', color: '#F7B638', angle: 180 },
  { name: 'Research', color: '#43A8A0', angle: 240 },
  { name: 'Quality', color: '#C74B16', angle: 300 },
]

function CollaborationHub() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const cx = 160, cy = 160, radius = 120

  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ width: 320, height: 320 }}>
      <svg width={320} height={320} viewBox="0 0 320 320" fill="none">
        {/* Center hub */}
        <motion.circle cx={cx} cy={cy} r={30} fill="rgba(200,168,233,0.08)" stroke="rgba(200,168,233,0.3)" strokeWidth={1.5} animate={isInView ? { scale: [1, 1.05, 1] } : {}} transition={{ duration: 2, repeat: Infinity }} style={{ transformOrigin: `${cx}px ${cy}px` }} />
        <motion.circle cx={cx} cy={cy} r={40} fill="none" stroke="rgba(200,168,233,0.15)" strokeWidth={0.8} strokeDasharray="4 6" animate={isInView ? { rotate: 360 } : {}} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: `${cx}px ${cy}px` }} />
        <text x={cx} y={cy + 3} textAnchor="middle" fill="#C8A8E9" fontSize={7} fontWeight={700}>AI CORE</text>

        {/* Agent nodes + connections */}
        {hubAgents.map((agent, i) => {
          const rad = (agent.angle * Math.PI) / 180
          const ax = cx + radius * Math.cos(rad)
          const ay = cy + radius * Math.sin(rad)

          return (
            <g key={agent.name}>
              {/* Connection line */}
              <motion.line
                x1={cx} y1={cy} x2={ax} y2={ay}
                stroke={`${agent.color}30`}
                strokeWidth={1}
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />

              {/* Traveling pulse on connection */}
              {isInView && (
                <motion.circle
                  r={3}
                  fill={agent.color}
                  initial={{ cx: cx, cy: cy, opacity: 0 }}
                  animate={{ cx: [cx, ax, cx], cy: [cy, ay, cy], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.5, delay: 1 + i * 0.5, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
                />
              )}

              {/* Agent node */}
              <motion.circle
                cx={ax} cy={ay} r={18}
                fill={`${agent.color}10`}
                stroke={`${agent.color}50`}
                strokeWidth={1.5}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.3 + i * 0.1 }}
                style={{ transformOrigin: `${ax}px ${ay}px` }}
              />
              <text x={ax} y={ay + 3} textAnchor="middle" fill={agent.color} fontSize={7} fontWeight={700}>
                {agent.name}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
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
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 text-3xl sm:text-4xl font-extrabold text-white tracking-[-1px]">
              Six Specialized Agents
            </motion.h2>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent, i) => {
              const Avatar = avatarComponents[i]
              return (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  style={{ perspective: '1000px' }}
                >
                  <GlassCard accentColor={agent.accent} className="h-full">
                    {/* Animated Avatar */}
                    <div className="flex justify-center mb-2">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: `${agent.accent}0D`, border: `1px solid ${agent.accent}25`, boxShadow: `0 0 30px ${agent.accent}15` }}>
                        <Avatar />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white text-center">{agent.name}</h3>
                    <p className="mt-1 text-sm text-center" style={{ color: agent.accent }}>{agent.role}</p>

                    {/* Skills */}
                    <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                      {agent.skills.map(s => (
                        <span key={s} className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ background: `${agent.accent}14`, border: `1px solid ${agent.accent}33`, color: agent.accent }}>{s}</span>
                      ))}
                    </div>

                    {/* Task */}
                    <div className="mt-5 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-[#6B6B8A]">Currently Working On:</span>
                        <div className="flex items-center gap-1">
                          <motion.div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                          <span className="text-[10px] text-[#22c55e] font-bold">Active</span>
                        </div>
                      </div>
                      <p className="mt-1 text-xs font-semibold text-white">{agent.task}</p>
                      <div className="mt-2 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${agent.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${agent.accent}, ${agent.accent}80)`, boxShadow: `0 0 6px ${agent.accent}66` }}
                        />
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="relative py-16 px-6" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="mx-auto max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
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
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 text-2xl sm:text-3xl font-extrabold text-white">
              Live Agent Collaboration
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-3 text-[#A0A0B8] max-w-lg mx-auto">
              All six agents work together in real-time, sharing context and coordinating tasks through our central AI core.
            </motion.p>
          </div>

          <div className="flex justify-center">
            <CollaborationHub />
          </div>
        </div>
      </section>

      {/* Terminal */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #080810, #0D0D1A)' }}>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <SectionBadge text="Live Activity" color="#E1FF51" />
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 text-2xl sm:text-3xl font-extrabold text-white">
              Agent Workflow in Action
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
            style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(225,255,81,0.15)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
          >
            <div className="flex items-center gap-2 px-5 py-3" style={{ background: 'rgba(225,255,81,0.05)', borderBottom: '1px solid rgba(225,255,81,0.1)' }}>
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
                  viewport={{ once: true }}
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
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center" style={{ background: 'linear-gradient(180deg, #080810, #0a0a14)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mx-auto">
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
