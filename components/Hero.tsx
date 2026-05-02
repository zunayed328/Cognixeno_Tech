'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiShield, FiServer } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative pt-12 pb-24 lg:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="mx-auto max-w-4xl"
      >
        <span className="section-title text-sm tracking-[0.3em] text-cyan-300/70">AI Defense for the modern enterprise</span>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Transforming digital resilience with autonomous threat intelligence.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Cognixeno Tech unifies predictive security, incident orchestration, and AI agents into one ambient platform designed for high-stakes infrastructure.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Schedule a demo
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-3 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-white"
          >
            Explore platform
            <FiArrowRight className="ml-2" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-panel backdrop-blur-xl sm:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 shadow-glow">
              <FiShield size={20} />
            </div>
            <p className="text-sm text-slate-300">Zero trust automation across every edge and cloud environment.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300 shadow-glow">
              <FiServer size={20} />
            </div>
            <p className="text-sm text-slate-300">Real-time observability with adaptive AI signal fusion.</p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-600/20 text-slate-100 shadow-glow">
              <span className="text-xs uppercase tracking-[0.28em]">API</span>
            </div>
            <p className="text-sm text-slate-300">Enterprise-grade APIs to accelerate deployment and integrate workflows.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
