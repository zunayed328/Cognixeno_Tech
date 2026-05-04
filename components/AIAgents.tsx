'use client'

import { motion } from 'framer-motion'
import { FiSend, FiAward, FiCheckCircle, FiCpu, FiActivity, FiBox } from 'react-icons/fi'

const pipelineNodes = [
  { label: 'Client Request', icon: FiSend, step: 1 },
  { label: 'Agent Assignment', icon: FiAward, step: 2 },
  { label: 'Task Planning', icon: FiCheckCircle, step: 3 },
  { label: 'AI Execution', icon: FiCpu, step: 4 },
  { label: 'Quality Check', icon: FiActivity, step: 5 },
  { label: 'Delivery', icon: FiBox, step: 6 },
]

const features = [
  {
    title: 'Fully Autonomous Operations',
    description: 'AI agents handle the entire workflow without manual intervention — from task pickup to final delivery.',
    icon: FiCpu,
  },
  {
    title: 'Real-Time Task Management',
    description: 'Track progress live as agents complete each phase of your project with instant status updates.',
    icon: FiActivity,
  },
  {
    title: 'Zero Human Bottleneck',
    description: 'Instant task pickup and 24/7 execution — agents never sleep, never miss a deadline.',
    icon: FiBox,
  },
]

const Connector = ({ delay }: { delay: number }) => (
  <div className="hidden sm:flex flex-1 items-center relative h-[2px] mx-1">
    <div
      className="w-full h-full rounded-[1px]"
      style={{
        background: 'linear-gradient(90deg, rgba(225,255,81,0.1) 0%, rgba(225,255,81,0.4) 50%, rgba(225,255,81,0.1) 100%)',
      }}
    />
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
      style={{
        background: '#E1FF51',
        boxShadow: '0 0 12px #E1FF51, 0 0 24px rgba(225,255,81,0.5)',
      }}
      animate={{ left: ['0%', '100%'] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay }}
    />
  </div>
)

export default function AIAgents() {
  return (
    <section id="agents" className="relative overflow-hidden py-24 sm:py-32" style={{ background: 'linear-gradient(180deg, #00272C 0%, #080810 100%)' }}>
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none bg-[radial-gradient(circle,#E1FF51,transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              background: 'rgba(225,255,81,0.08)',
              border: '1px solid rgba(225,255,81,0.2)',
              boxShadow: '0 0 20px rgba(225,255,81,0.1)',
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#E1FF51]" />
            <span className="text-[11px] font-bold tracking-[2px] text-[#E1FF51] uppercase">The Engine Behind Everything</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold text-white sm:text-5xl tracking-[-1px] leading-[1.15]"
          >
            How Our AI Agents Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-2xl mx-auto text-base text-[#A0A0B8]"
          >
            Every task you request is automatically picked up, planned, executed, and delivered by specialized AI agents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 mx-auto w-[60px] h-[3px] rounded-[2px] origin-center"
            style={{ background: 'linear-gradient(90deg, #E1FF51, #25D366)', boxShadow: '0 0 12px rgba(225,255,81,0.5)' }}
          />
        </div>

        {/* Pipeline */}
        <div className="mb-20 overflow-x-auto">
          <div className="flex items-center justify-between min-w-max md:min-w-0 px-4 md:px-0">
            {pipelineNodes.map((node, i) => (
              <div key={node.label} className="contents">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15, type: 'spring', stiffness: 200 }}
                  className="group flex flex-col items-center gap-4 relative"
                >
                  {/* Node circle */}
                  <div
                    className="relative w-[88px] h-[88px] rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(0,39,44,0.9)',
                      border: '1.5px solid rgba(225,255,81,0.3)',
                      boxShadow: '0 0 0 8px rgba(225,255,81,0.04), 0 0 30px rgba(225,255,81,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
                      transition: 'all 300ms',
                    }}
                  >
                    <node.icon
                      size={28}
                      className="text-[#E1FF51]"
                      style={{ filter: 'drop-shadow(0 0 6px rgba(225,255,81,0.6))' }}
                    />
                    {/* Step badge */}
                    <div
                      className="absolute -top-1.5 -right-1.5 w-[22px] h-[22px] rounded-full flex items-center justify-center text-[9px] font-extrabold"
                      style={{
                        background: '#E1FF51',
                        color: '#080810',
                        boxShadow: '0 0 10px rgba(225,255,81,0.5)',
                      }}
                    >
                      {node.step}
                    </div>
                  </div>
                  {/* Label */}
                  <span className="text-xs font-semibold text-white tracking-[0.5px] text-center max-w-[80px]">
                    {node.label}
                  </span>
                </motion.div>
                {i < pipelineNodes.length - 1 && <Connector delay={i * 0.3} />}
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid gap-7 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="group relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.2), 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
                  transition: 'all 350ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* Left accent */}
                <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-r-sm opacity-70 group-hover:opacity-100" style={{ background: 'linear-gradient(180deg, transparent, #E1FF51, transparent)', boxShadow: '2px 0 12px rgba(225,255,81,0.4)', transition: 'opacity 300ms' }} />
                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-[120px] h-[120px] pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(225,255,81,0.08), transparent 70%)' }} />
                {/* Bottom shine */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-100 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(225,255,81,0.3), transparent)', transition: 'opacity 300ms' }} />

                <div className="relative z-10">
                  <div
                    className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center"
                    style={{
                      background: 'rgba(225,255,81,0.12)',
                      border: '1px solid rgba(225,255,81,0.25)',
                      boxShadow: '0 0 20px rgba(225,255,81,0.2)',
                      animation: 'pulseGlow 2s infinite alternate',
                    }}
                  >
                    <Icon size={24} className="text-[#E1FF51]" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-white">{feature.title}</h3>
                  <div className="mt-3 w-8 h-[2px] rounded-[1px] bg-[#E1FF51]" style={{ boxShadow: '0 0 8px rgba(225,255,81,0.6)' }} />
                  <p className="mt-4 text-sm text-[#A0A0B8] leading-[1.8]">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
