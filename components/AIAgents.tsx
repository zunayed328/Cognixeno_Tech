'use client'

import { motion } from 'framer-motion'
import { FiCpu, FiZap, FiShield } from 'react-icons/fi'

const agents = [
  {
    title: 'Sentinel AI',
    description: 'A proactive security agent that hunts adversary behavior and recommends mitigations before escalation.',
    icon: FiShield,
    tone: 'Autonomous defense'
  },
  {
    title: 'Nexus Ops',
    description: 'Synthesizes telemetry from cloud, edge, and on-prem systems into a unified operational command layer.',
    icon: FiCpu,
    tone: 'Hybrid observability'
  },
  {
    title: 'Pulse Engine',
    description: 'Orchestrates real-time responses and adaptive hardening across live environments.',
    icon: FiZap,
    tone: 'Rapid incident response'
  }
]

export default function AIAgents() {
  return (
    <section id="agents" className="space-y-10">
      <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-panel backdrop-blur-xl">
        <p className="section-title text-sm text-cyan-300/70">AI agents</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Engineered intelligence for mission-critical defense.</h2>
        <p className="mt-5 text-slate-300">Each agent acts as a specialist within the Cognixeno platform, delivering context-aware automation and executive-grade recommendations.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {agents.map((agent) => {
          const Icon = agent.icon
          return (
            <motion.article
              key={agent.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-7 shadow-panel backdrop-blur-xl"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                <Icon size={24} />
              </div>
              <p className="mt-5 text-sm uppercase tracking-[0.3em] text-slate-400">{agent.tone}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{agent.title}</h3>
              <p className="mt-3 text-slate-300">{agent.description}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
