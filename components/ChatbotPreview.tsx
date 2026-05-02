'use client'

import { motion } from 'framer-motion'
import { FiMessageCircle, FiCode, FiLayers } from 'react-icons/fi'

export default function ChatbotPreview() {
  return (
    <section id="insights" className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-panel backdrop-blur-xl">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <span className="section-title text-sm text-cyan-300/70">Platform insights</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Ambient collaboration across analysts and AI.</h2>
          <p className="mt-5 text-slate-300">A modern interface for orchestrating intelligence, deploying secure rules, and reviewing automated response plans in real time.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-900/70 p-5">
              <FiMessageCircle className="text-cyan-300" size={22} />
              <p className="mt-4 text-sm text-slate-400">Contextual analyst collaboration</p>
            </div>
            <div className="rounded-3xl bg-slate-900/70 p-5">
              <FiCode className="text-violet-300" size={22} />
              <p className="mt-4 text-sm text-slate-400">Secure integration toolkits</p>
            </div>
            <div className="rounded-3xl bg-slate-900/70 p-5">
              <FiLayers className="text-slate-100" size={22} />
              <p className="mt-4 text-sm text-slate-400">Layered defense observability</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1221] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-500/15 to-transparent" />
          <div className="relative rounded-[1.75rem] border border-white/5 bg-slate-950/95 p-6">
            <div className="flex items-center justify-between text-slate-400">
              <span className="rounded-2xl bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.32em]">Live feed</span>
              <span className="text-xs">Cognixeno Console</span>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-5">
                <p className="text-sm text-cyan-300">Alert</p>
                <p className="mt-2 text-sm text-slate-300">Detected anomalous credential usage across worker lane 7. Initiating adaptive microsegmentation.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-5">
                <p className="text-sm text-violet-300">Recommendation</p>
                <p className="mt-2 text-sm text-slate-300">Auto-deploy containment rule and notify the security operations team via secure channel.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-5">
                <p className="text-sm text-slate-300">Status</p>
                <p className="mt-2 text-sm text-white">Analyzing telemetry through 7 AI agents across 18 infrastructure vectors.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
