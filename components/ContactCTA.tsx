'use client'

import { motion } from 'framer-motion'

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: 'linear-gradient(180deg, #080810, #0a0a14)' }}>
      {/* Ambient blurs */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#FF947A] opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute -top-16 right-0 h-80 w-80 rounded-full bg-[#C8A8E9] opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute left-0 -bottom-16 h-80 w-80 rounded-full bg-[#E1FF51] opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute right-0 -bottom-20 h-72 w-72 rounded-full bg-[#F7B638] opacity-10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
          style={{ background: 'rgba(247,182,56,0.08)', border: '1px solid rgba(247,182,56,0.2)', boxShadow: '0 0 20px rgba(247,182,56,0.1)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#F7B638]" />
          <span className="text-[11px] font-bold tracking-[2px] text-[#F7B638] uppercase">Get Started Today</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-[900px] mx-auto text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] text-white tracking-[-1px]"
        >
          Ready to Build Your Digital Future?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-[600px] mx-auto text-lg leading-8 text-[#A0A0B8]"
        >
          Tell us what you need. Our AI agents will handle everything from planning to delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-5 mx-auto w-[60px] h-[3px] rounded-[2px] origin-center"
          style={{ background: 'linear-gradient(90deg, #F7B638, #780115)', boxShadow: '0 0 12px rgba(247,182,56,0.5)' }}
        />

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mt-16 mx-auto max-w-[520px] relative overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '28px',
            padding: '52px 48px',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.03), 0 30px 80px rgba(0,0,0,0.5), 0 0 100px rgba(247,182,56,0.06), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* Corner glow */}
          <div className="absolute top-0 right-0 w-[120px] h-[120px] pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(247,182,56,0.08), transparent 70%)' }} />

          <form className="space-y-6">
            {[
              { label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
              { label: 'Email Address', type: 'email', placeholder: 'Enter your email' },
            ].map((field) => (
              <label key={field.label} className="block text-left">
                <span className="text-[13px] font-semibold text-[rgba(255,255,255,0.7)] tracking-[0.5px]">{field.label}</span>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="mt-2 w-full text-[15px] text-white rounded-xl px-[18px] py-[14px] outline-none"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 200ms ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(200,168,233,0.5)'
                    e.target.style.background = 'rgba(200,168,233,0.05)'
                    e.target.style.boxShadow = '0 0 0 4px rgba(200,168,233,0.08), 0 4px 12px rgba(0,0,0,0.2)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.target.style.background = 'rgba(255,255,255,0.04)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </label>
            ))}

            <label className="block text-left">
              <span className="text-[13px] font-semibold text-[rgba(255,255,255,0.7)] tracking-[0.5px]">Service Needed</span>
              <select
                className="mt-2 w-full text-[15px] text-white rounded-xl px-[18px] py-[14px] outline-none"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 200ms ease',
                }}
              >
                <option value="mobile">Mobile App Development</option>
                <option value="web">Web Development</option>
                <option value="ai">AI-Powered Solutions</option>
                <option value="automation">AI Automation</option>
                <option value="email">Professional Email Support</option>
                <option value="chatbots">AI Auto Chatbots</option>
              </select>
            </label>

            <label className="block text-left">
              <span className="text-[13px] font-semibold text-[rgba(255,255,255,0.7)] tracking-[0.5px]">Project Description</span>
              <textarea
                rows={4}
                placeholder="Tell us about your project"
                className="mt-2 w-full text-[15px] text-white rounded-xl px-[18px] py-[14px] outline-none resize-none"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 200ms ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(200,168,233,0.5)'
                  e.target.style.background = 'rgba(200,168,233,0.05)'
                  e.target.style.boxShadow = '0 0 0 4px rgba(200,168,233,0.08), 0 4px 12px rgba(0,0,0,0.2)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.target.style.background = 'rgba(255,255,255,0.04)'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </label>

            <button
              type="submit"
              className="relative w-full overflow-hidden text-white font-extrabold text-base tracking-[0.5px] cursor-pointer"
              style={{
                padding: '18px 32px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #F7B638 0%, #E0961A 40%, #780115 100%)',
                border: 'none',
                boxShadow: '0 4px 15px rgba(247,182,56,0.3), 0 8px 30px rgba(120,1,21,0.2)',
                transition: 'all 300ms ease',
              }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-[14px] pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)' }} />
              <span className="relative z-10">Submit to AI Agent Queue</span>
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
