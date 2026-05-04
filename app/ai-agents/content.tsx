'use client'

import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiZap, FiMail, FiSearch, FiCheckCircle } from 'react-icons/fi'
import PageHero from '../../components/ui/PageHero'
import GlassCard from '../../components/ui/GlassCard'
import SectionBadge from '../../components/ui/SectionBadge'
import AnimatedButton from '../../components/ui/AnimatedButton'

const agents = [
  { name: 'Dev Agent', role: 'Writes and tests all code', accent: '#FF947A', icon: FiCode, skills: ['Coding', 'Testing', 'Debugging', 'Deployment'], task: 'Building e-commerce API', progress: 78 },
  { name: 'Design Agent', role: 'Creates UI/UX and visual designs', accent: '#C8A8E9', icon: FiLayout, skills: ['UI Design', 'UX Flow', 'Prototyping'], task: 'Dashboard wireframes', progress: 45 },
  { name: 'Automation Agent', role: 'Builds automation workflows', accent: '#E1FF51', icon: FiZap, skills: ['Workflow', 'Integration', 'Scheduling'], task: 'Email pipeline setup', progress: 92 },
  { name: 'Communication Agent', role: 'Manages emails and chatbots', accent: '#F7B638', icon: FiMail, skills: ['Email', 'Chat', 'Response', 'Follow-up'], task: 'Customer response queue', progress: 63 },
  { name: 'Research Agent', role: 'Market research and planning', accent: '#025259', icon: FiSearch, skills: ['Research', 'Analysis', 'Strategy'], task: 'Competitor analysis report', progress: 34 },
  { name: 'Quality Agent', role: 'Reviews and ensures quality', accent: '#780115', icon: FiCheckCircle, skills: ['QA Testing', 'Review', 'Optimization'], task: 'Performance audit v3.2', progress: 87 },
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
              const Icon = agent.icon
              return (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{ perspective: '1000px' }}
                >
                  <GlassCard accentColor={agent.accent} className="h-full">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto" style={{ background: `${agent.accent}1A`, border: `1px solid ${agent.accent}33`, boxShadow: `0 0 30px ${agent.accent}26` }}>
                      <Icon size={28} style={{ color: agent.accent }} />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-white text-center">{agent.name}</h3>
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
                          <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" style={{ animation: 'pulse 1.5s infinite' }} />
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

      {/* Terminal */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #0D0D1A, #080810)' }}>
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
