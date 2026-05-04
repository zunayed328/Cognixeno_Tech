'use client'

import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

const features = [
  {
    title: 'End-to-End AI Management',
    description: 'From idea to deployment, AI agents handle everything.',
  },
  {
    title: 'Multi-Industry Expertise',
    description: 'Solutions built for startups, enterprises, schools and e-commerce.',
  },
  {
    title: 'Custom-Built for You',
    description: 'No templates. Every solution is architected specifically for your needs.',
  },
  {
    title: 'Scalable Architecture',
    description: 'Built to grow with your business from day one.',
  },
  {
    title: 'Transparent Delivery',
    description: 'Real-time updates as agents work on your project.',
  },
]

const tasks = [
  { name: 'Mobile App Build', status: 'In Progress', color: '#C8A8E9', progress: 70 },
  { name: 'Email Automation', status: 'Complete', color: '#22c55e', progress: 100 },
  { name: 'Chatbot Deployment', status: 'Queued', color: '#F7B638', progress: 0 },
]

const statusStyles: Record<string, { bg: string; border: string; text: string }> = {
  'In Progress': { bg: 'rgba(200,168,233,0.15)', border: 'rgba(200,168,233,0.3)', text: '#C8A8E9' },
  Complete: { bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.2)', text: '#22c55e' },
  Queued: { bg: 'rgba(247,182,56,0.1)', border: 'rgba(247,182,56,0.2)', text: '#F7B638' },
}

const progressGradients: Record<string, string> = {
  '#C8A8E9': 'linear-gradient(90deg, #C8A8E9, rgba(200,168,233,0.5))',
  '#22c55e': 'linear-gradient(90deg, #22c55e, rgba(34,197,94,0.5))',
  '#F7B638': 'linear-gradient(90deg, #F7B638, rgba(247,182,56,0.5))',
}

const DashboardCard = () => (
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    className="relative overflow-hidden flex flex-col"
    style={{
      background: 'rgba(200,168,233,0.04)',
      border: '1px solid rgba(200,168,233,0.15)',
      borderRadius: '24px',
      padding: '28px',
      boxShadow: '0 0 0 1px rgba(200,168,233,0.05), 0 20px 60px rgba(26,0,48,0.5), 0 0 80px rgba(200,168,233,0.08)',
    }}
  >
    {/* Corner glow */}
    <div className="absolute top-0 right-0 w-[120px] h-[120px] pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(200,168,233,0.08), transparent 70%)' }} />

    {/* Header */}
    <div className="flex items-center justify-between pb-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <span className="text-sm font-bold text-white tracking-[0.5px]">Cognixeno AI Dashboard</span>
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}>
        <div className="relative flex items-center justify-center w-2 h-2">
          <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
          <div className="absolute w-2 h-2 rounded-full bg-[#22c55e]" style={{ animation: 'pulse 1.5s infinite' }} />
        </div>
        <span className="text-[10px] font-bold text-[#22c55e]">LIVE</span>
      </div>
    </div>

    {/* Task rows */}
    <div className="space-y-2.5 py-5 flex-1">
      {tasks.map((task, i) => {
        const s = statusStyles[task.status]
        return (
          <div
            key={i}
            className="rounded-xl flex flex-col gap-2"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              padding: '14px 16px',
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-semibold text-white">{task.name}</span>
              <span
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.text }}
              >
                {task.status}
              </span>
            </div>
            {task.progress > 0 && (
              <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${task.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: i * 0.2 }}
                  className="h-full rounded-full"
                  style={{
                    background: progressGradients[task.color],
                    boxShadow: `0 0 8px ${task.color}99`,
                  }}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>

    {/* Bar chart */}
    <div className="pt-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <span className="text-xs text-[#A0A0B8] font-medium">Performance</span>
      <div className="flex items-end gap-1.5 mt-3 h-[80px]">
        {[55, 75, 40, 88, 65].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
            className="flex-1 rounded-t"
            style={{
              background: 'linear-gradient(180deg, rgba(200,168,233,0.8), rgba(200,168,233,0.2))',
              boxShadow: '0 -4px 12px rgba(200,168,233,0.3)',
            }}
          />
        ))}
      </div>
    </div>
  </motion.div>
)

export default function WhyUs() {
  return (
    <section id="whyus" className="relative min-h-screen overflow-hidden py-24 sm:py-32 px-6" style={{ background: 'linear-gradient(180deg, #1A0030, #0a0a0f)' }}>
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: 'rgba(200,168,233,0.08)', border: '1px solid rgba(200,168,233,0.2)', boxShadow: '0 0 20px rgba(200,168,233,0.1)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8A8E9]" />
            <span className="text-[11px] font-bold tracking-[2px] text-[#C8A8E9] uppercase">Why Choose Us</span>
          </motion.div>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <DashboardCard />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-[-1px] leading-[1.15]">
              Why Businesses Choose{' '}
              <span className="text-[#C8A8E9]">Cognixeno Tech</span>
            </h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-5 w-[60px] h-[3px] rounded-[2px] origin-left"
              style={{ background: 'linear-gradient(90deg, #C8A8E9, #F7B638)', boxShadow: '0 0 12px rgba(200,168,233,0.5)' }}
            />

            <div className="mt-10 space-y-0">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex items-start gap-4 py-[22px] border-b hover:bg-[rgba(200,168,233,0.04)]"
                  style={{ borderColor: 'rgba(255,255,255,0.04)', transition: 'background 200ms' }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-[10px] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(200,168,233,0.3)]"
                    style={{
                      background: 'rgba(200,168,233,0.1)',
                      border: '1px solid rgba(200,168,233,0.2)',
                      boxShadow: '0 0 15px rgba(200,168,233,0.15)',
                      transition: 'box-shadow 300ms',
                    }}
                  >
                    <FiCheck size={14} className="text-[#C8A8E9]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-white">{feature.title}</h3>
                    <p className="mt-1.5 text-sm text-[#A0A0B8] leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
