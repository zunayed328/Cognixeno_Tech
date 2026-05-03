'use client'

import { motion } from 'framer-motion'
import { FiUser, FiCpu, FiList, FiSettings, FiCheckCircle, FiSend, FiZap, FiActivity, FiAward, FiBox } from 'react-icons/fi'

const pipelineNodes = [
  { label: 'Client Request', icon: FiSend },
  { label: 'Agent Assignment', icon: FiAward },
  { label: 'Task Planning', icon: FiCheckCircle },
  { label: 'AI Execution', icon: FiCpu },
  { label: 'Quality Check', icon: FiActivity },
  { label: 'Delivery', icon: FiBox }
]

const features = [
  {
    title: 'Fully Autonomous Operations',
    description: 'AI agents handle the entire workflow without manual intervention.',
    icon: FiCpu
  },
  {
    title: 'Real-Time Task Management',
    description: 'Track progress live as agents complete each phase of your project.',
    icon: FiActivity
  },
  {
    title: 'Zero Human Bottleneck',
    description: 'Instant task pickup and 24/7 execution — agents never sleep.',
    icon: FiZap
  }
]

const PipelineNode = ({ node, index, total }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-center"
    >
      <div className="pipeline-node glass-panel rounded-3xl px-5 py-4 flex items-center justify-center border border-[rgba(225,255,81,0.4)]">
        <node.icon size={24} className="text-[#E1FF51]" />
      </div>
      <p className="mt-3 text-center text-xs font-bold text-white whitespace-nowrap">{node.label}</p>

      {index < total - 1 && (
        <div className="absolute left-full top-6 w-12 h-0.5 md:w-16 hidden sm:block">
          <svg width="100%" height="100%" className="overflow-visible">
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="#E1FF51"
              strokeWidth="2"
              strokeDasharray="6,4"
              opacity="0.4"
            />
          </svg>
          <motion.div
            className="pipeline-dot absolute top-1/2 w-2 h-2 rounded-full bg-[#E1FF51]"
            animate={{ x: ['0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        </div>
      )}
    </motion.div>
  )
}

export default function AIAgents() {
  return (
    <section id="agents" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#00272C] to-[#080810] py-24">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-circuit-pattern" />
      
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none bg-[radial-gradient(circle,#E1FF51,transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-semibold uppercase tracking-[3px] text-[#E1FF51]"
          >
            THE ENGINE BEHIND EVERYTHING
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-bold text-white sm:text-5xl"
          >
            How Our AI Agents Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-base text-[#A0A0B8]"
          >
            Every task you request is automatically picked up, planned, executed, and delivered by specialized AI agents — no human bottleneck, no delays.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 mx-auto h-px w-32 origin-center bg-gradient-to-r from-transparent via-[#E1FF51] to-transparent"
          />
        </div>

        <div className="mb-20 overflow-x-auto">
          <div className="flex justify-between gap-4 md:gap-2 min-w-max md:min-w-0 px-4 md:px-0">
            {pipelineNodes.map((node, index) => (
              <PipelineNode
                key={node.label}
                node={node}
                index={index}
                total={pipelineNodes.length}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass-panel group relative rounded-2xl p-6 transition-all duration-300 border border-[rgba(225,255,81,0.2)]"
                style={{ borderLeft: '3px solid #E1FF51' }}
              >
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 rounded-2xl blur-lg opacity-20 bg-[radial-gradient(circle,#E1FF51)]" />
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E1FF5120]">
                    <Icon size={24} className="text-[#E1FF51]" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm text-[#A0A0B8]">{feature.description}</p>

                <div
                  className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
                  style={{
                    boxShadow: `0 0 24px rgba(225,255,81,0.35), inset 0 0 1px rgba(225,255,81,0.2)`,
                    borderLeft: '3px solid #E1FF51',
                    borderRadius: '16px'
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block absolute right-8 top-1/3"
        >
          <div className="w-64 h-80 relative">
            <svg
              viewBox="0 0 200 300"
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 0 40px rgba(225, 255, 81, 0.2))' }}
            >
              <g>
                <circle cx="100" cy="50" r="15" stroke="#E1FF51" strokeWidth="2" fill="none" opacity="0.8" />
                <line x1="100" y1="65" x2="100" y2="110" stroke="#E1FF51" strokeWidth="2" opacity="0.6" />
                <line x1="100" y1="110" x2="70" y2="150" stroke="#E1FF51" strokeWidth="2" opacity="0.6" />
                <line x1="100" y1="110" x2="130" y2="150" stroke="#E1FF51" strokeWidth="2" opacity="0.6" />
                <line x1="100" y1="110" x2="100" y2="180" stroke="#E1FF51" strokeWidth="2" opacity="0.6" />
                <circle cx="70" cy="150" r="8" stroke="#E1FF51" strokeWidth="2" fill="none" opacity="0.8" />
                <circle cx="130" cy="150" r="8" stroke="#E1FF51" strokeWidth="2" fill="none" opacity="0.8" />
                <circle cx="100" cy="180" r="8" stroke="#E1FF51" strokeWidth="2" fill="none" opacity="0.8" />
                <line x1="70" y1="150" x2="55" y2="190" stroke="#E1FF51" strokeWidth="1.5" opacity="0.4" />
                <line x1="70" y1="150" x2="85" y2="190" stroke="#E1FF51" strokeWidth="1.5" opacity="0.4" />
                <line x1="130" y1="150" x2="115" y2="190" stroke="#E1FF51" strokeWidth="1.5" opacity="0.4" />
                <line x1="130" y1="150" x2="145" y2="190" stroke="#E1FF51" strokeWidth="1.5" opacity="0.4" />
              </g>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
