'use client'

import { motion } from 'framer-motion'

const metrics = [
  { value: '99.98%', label: 'Platform uptime' },
  { value: '3.2x', label: 'Faster incident remediation' },
  { value: '24/7', label: 'Autonomous coverage' }
]

export default function Stats() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-panel backdrop-blur-xl">
      <div className="grid gap-8 lg:grid-cols-3">
        {metrics.map((metric) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl bg-slate-950/80 p-8"
          >
            <p className="text-4xl font-semibold text-white">{metric.value}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-400">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
