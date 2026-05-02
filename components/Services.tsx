'use client'

import { motion } from 'framer-motion'
import { FiLayers, FiZap, FiEye } from 'react-icons/fi'

const features = [
  {
    title: 'Autonomous threat orchestration',
    description: 'Merge detection, response, and recovery into a single AI-driven flow for faster, safer decisions.',
    icon: FiZap
  },
  {
    title: 'Continuous attack surface intelligence',
    description: 'Monitor distributed workloads, hybrid cloud, and edge nodes with adaptive risk profiling.',
    icon: FiEye
  },
  {
    title: 'Secure AI operations',
    description: 'Deploy resilient models with governance controls, audit trails, and compliance-ready tooling.',
    icon: FiLayers
  }
]

export default function Services() {
  return (
    <section id="solutions" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-panel backdrop-blur-xl">
        <span className="section-title text-sm text-cyan-300/70">Platform capabilities</span>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A complete defense network built for intelligent operations.</h2>
        <p className="mt-5 text-slate-300">Cognixeno Tech brings together automated playbooks, active threat pruning, and analyst augmentation in a single unified control plane.</p>
        <div className="mt-8 space-y-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55 }}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-6"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-slate-300">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
      <div className="space-y-6 text-slate-300">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-panel backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/75">Strategic advantages</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Operate ahead of every threat wave.</h3>
          <ul className="mt-6 space-y-4 text-slate-300">
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />Predict adversary movement with Bayesian AI.</li>
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />Cut mean time to detection and response in half.</li>
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />Scale secure operations without added analyst overhead.</li>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-panel backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Enterprise-ready</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/70 p-5">
              <p className="text-sm text-slate-400">Compliance-first deployment</p>
              <p className="mt-3 text-xl font-semibold text-white">FedRAMP, SOC 2, ISO</p>
            </div>
            <div className="rounded-3xl bg-slate-900/70 p-5">
              <p className="text-sm text-slate-400">Global data sovereignty</p>
              <p className="mt-3 text-xl font-semibold text-white">Multi-region controls</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
