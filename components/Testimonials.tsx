'use client'

import { motion } from 'framer-motion'

const reviews = [
  {
    quote: 'Cognixeno made enterprise AI security feel immediate, precise, and reliably automated — it changed how we respond to alerts.',
    name: 'Maya Chen',
    role: 'CISO, Orion Systems'
  },
  {
    quote: 'Deployment was seamless and the response intelligence was live within days. The visibility is unmatched.',
    name: 'Andre Patel',
    role: 'Head of Risk, NovaGrid'
  },
  {
    quote: 'The AI agents reduced analyst fatigue and improved confidence across our entire security operations floor.',
    name: 'Sara Kim',
    role: 'VP of Security, Helix Dynamics'
  }
]

export default function Testimonials() {
  return (
    <section className="section section--lavender space-y-10">
      <div className="max-w-3xl">
        <span className="section-title text-sm text-cyan-300/70">Trusted by leaders</span>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Organizations choose Cognixeno when resilience matters most.</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <motion.article
            key={review.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.1, duration: 0.35 }}
            className="glass-panel rounded-[2rem] p-8"
          >
            <p className="text-slate-300">“{review.quote}”</p>
            <div className="mt-6 text-sm text-slate-400">
              <p className="font-semibold text-white">{review.name}</p>
              <p>{review.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
