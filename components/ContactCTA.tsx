'use client'

import { motion } from 'framer-motion'

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#FF947A] opacity-15 blur-3xl" />
      <div className="absolute -top-16 right-0 h-80 w-80 rounded-full bg-[#C8A8E9] opacity-15 blur-3xl" />
      <div className="absolute left-0 -bottom-16 h-80 w-80 rounded-full bg-[#E1FF51] opacity-15 blur-3xl" />
      <div className="absolute right-0 -bottom-20 h-72 w-72 rounded-full bg-[#F7B638] opacity-15 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-8 inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white shadow-[0_0_30px_rgba(255,255,255,0.08)] backdrop-blur-xl"
        >
          GET STARTED TODAY
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-[900px] text-[56px] font-bold leading-[1.02] text-white sm:text-6xl"
        >
          Ready to Build Your Digital Future?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-[600px] text-[18px] leading-8 text-slate-400"
        >
          Tell us what you need. Our AI agents will handle everything from planning to delivery — professionally, efficiently, intelligently.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="mt-16 w-full max-w-[500px] rounded-[32px] border border-white/10 bg-[rgba(255,255,255,0.05)] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
        >
          <form className="space-y-6">
            <label className="block text-left text-sm font-semibold text-white/90">
              Full Name
              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-[#C8A8E9] focus:ring-2 focus:ring-[#C8A8E9]/30"
              />
            </label>

            <label className="block text-left text-sm font-semibold text-white/90">
              Email Address
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-[#C8A8E9] focus:ring-2 focus:ring-[#C8A8E9]/30"
              />
            </label>

            <label className="block text-left text-sm font-semibold text-white/90">
              Service Needed
              <select
                className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-[#C8A8E9] focus:ring-2 focus:ring-[#C8A8E9]/30"
              >
                <option value="mobile">Mobile App Development</option>
                <option value="web">Web Development</option>
                <option value="ai">AI-Powered Solutions</option>
                <option value="automation">AI Automation</option>
                <option value="email">Professional Email Support</option>
                <option value="chatbots">AI Auto Chatbots</option>
              </select>
            </label>

            <label className="block text-left text-sm font-semibold text-white/90">
              Project Description
              <textarea
                rows={4}
                placeholder="Tell us about your project"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-[#C8A8E9] focus:ring-2 focus:ring-[#C8A8E9]/30"
              />
            </label>

            <button
              type="submit"
              className="mt-1 inline-flex h-[54px] w-full items-center justify-center rounded-[10px] bg-gradient-to-r from-[#F7B638] to-[#780115] text-sm font-semibold uppercase text-white shadow-[0_0_40px_rgba(247,182,56,0.3)] transition duration-300 hover:brightness-110 hover:scale-[1.02]"
            >
              Submit to AI Agent Queue
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#F7B638]">
            ⚡ Average AI agent response time: Under 2 minutes
          </p>
        </motion.div>
      </div>
    </section>
  )
}
