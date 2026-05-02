'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    title: 'Data-driven defense intelligence',
    description: 'Correlate signals across the entire attack surface with contextual AI to reduce false positive noise.'
  },
  {
    title: 'Built for security teams',
    description: 'Intuitive workflows, decisive visualizations, and autonomous playbooks designed for analysts and executives alike.'
  },
  {
    title: 'Flexible enterprise delivery',
    description: 'Deploy as SaaS, private cloud, or on-premise with consistent governance and lifecycle controls.'
  }
]

export default function WhyUs() {
  return (
    <section id="whyus" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-panel backdrop-blur-xl">
        <span className="section-title text-sm text-cyan-300/70">Why choose Cognixeno?</span>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Unmatched speed, accuracy, and adaption in cyber defense.</h2>
        <p className="mt-5 text-slate-300">We combine rapid AI model evolution with hardened operational frameworks so security programs stay ahead of the threat lifecycle.</p>
        <div className="mt-8 space-y-4">
          <p className="rounded-3xl border border-cyan-500/10 bg-cyan-500/5 p-5 text-sm text-cyan-100">Trusted by global teams that demand uncompromised uptime for critical infrastructure.</p>
          <p className="rounded-3xl border border-slate-700/10 bg-slate-900/70 p-5 text-sm text-slate-300">From financial services to national defense, Cognixeno is engineered to accelerate secure digital transformation.</p>
        </div>
      </div>
      <div className="grid gap-5">
        {reasons.map((reason) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-7 shadow-panel backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
            <p className="mt-3 text-slate-300">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
