'use client'

import { motion } from 'framer-motion'

export default function ContactCTA() {
  return (
    <section id="contact" className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/80 p-10 shadow-panel backdrop-blur-xl">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="text-3xl font-semibold text-white sm:text-4xl"
        >
          Build the next generation of adaptive cyber defense.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="mt-5 text-base leading-8 text-slate-300"
        >
          Partner with Cognixeno Tech to deploy resilient AI workflows, secure hybrid infrastructure, and accelerate your trusted operations.
        </motion.p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="mailto:sales@cognixeno.com" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Talk to sales
          </a>
          <a href="#" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-8 py-3 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-white">
            Request a paper
          </a>
        </div>
      </div>
    </section>
  )
}
