'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMail, FiClock, FiGlobe, FiSend, FiCheck, FiMessageCircle } from 'react-icons/fi'
import PageHero from '../../components/ui/PageHero'
import GlassCard from '../../components/ui/GlassCard'

const contactMethods = [
  { icon: FiMail, label: 'Email Us', value: 'hello@cognixenotech.com', note: 'Responded by AI within 2 minutes', accent: '#F7B638', noteColor: '#22c55e' },
  { icon: FiClock, label: 'Response Time', value: 'Under 2 Minutes', note: 'AI agents available 24/7', accent: '#E1FF51', noteColor: '#22c55e' },
  { icon: FiGlobe, label: 'Location', value: 'Global — Remote First', note: 'We work with clients worldwide', accent: '#C8A8E9', noteColor: '#A0A0B8' },
]

const nextSteps = [
  { num: '1', text: 'Submit your request', accent: '#C8A8E9' },
  { num: '2', text: 'AI agent reviews in 2 minutes', accent: '#E1FF51' },
  { num: '3', text: 'Detailed proposal sent to you', accent: '#F7B638' },
]

const inputStyle = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  transition: 'all 200ms ease',
}

const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  e.target.style.borderColor = 'rgba(200,168,233,0.5)'
  e.target.style.background = 'rgba(200,168,233,0.05)'
  e.target.style.boxShadow = '0 0 0 4px rgba(200,168,233,0.08), 0 4px 12px rgba(0,0,0,0.2)'
}

const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  e.target.style.borderColor = 'rgba(255,255,255,0.08)'
  e.target.style.background = 'rgba(255,255,255,0.04)'
  e.target.style.boxShadow = 'none'
}

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const ticketId = `CNX-${Math.floor(1000 + Math.random() * 9000)}`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <PageHero
        badge="Contact Us"
        badgeColor="#F7B638"
        title="Let's Build Something Amazing"
        subtitle="Tell us your vision. Our AI agents will make it reality within minutes."
        gradient="linear-gradient(180deg, #1A0030 0%, #080810 100%)"
      />

      {/* Main content */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #080810, #0D0D1A)' }}>
        {/* Corner glows */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#FF947A] opacity-[0.06] blur-3xl pointer-events-none" />
        <div className="absolute -top-16 right-0 h-80 w-80 rounded-full bg-[#C8A8E9] opacity-[0.06] blur-3xl pointer-events-none" />
        <div className="absolute left-0 -bottom-16 h-80 w-80 rounded-full bg-[#E1FF51] opacity-[0.06] blur-3xl pointer-events-none" />
        <div className="absolute right-0 -bottom-20 h-72 w-72 rounded-full bg-[#F7B638] opacity-[0.06] blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }}>
                <GlassCard accentColor="#C8A8E9" className="space-y-6">
                  <h3 className="text-xl font-bold text-white">Get in Touch</h3>

                  {contactMethods.map((m) => {
                    const Icon = m.icon
                    return (
                      <div key={m.label} className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${m.accent}1A`, border: `1px solid ${m.accent}33` }}>
                          <Icon size={18} style={{ color: m.accent }} />
                        </div>
                        <div>
                          <p className="text-xs text-[#6B6B8A]">{m.label}</p>
                          <p className="text-sm font-bold text-white">{m.value}</p>
                          <p className="text-[11px] mt-0.5" style={{ color: m.noteColor }}>{m.note}</p>
                        </div>
                      </div>
                    )
                  })}

                  <div className="w-full h-[1px]" style={{ background: 'rgba(255,255,255,0.06)' }} />

                  <div>
                    <h4 className="text-sm font-bold text-white mb-4">What happens next?</h4>
                    <div className="space-y-3">
                      {nextSteps.map((s) => (
                        <div key={s.num} className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: `${s.accent}1A`, border: `1px solid ${s.accent}33`, color: s.accent }}>
                            {s.num}
                          </div>
                          <span className="text-sm text-[#A0A0B8]">{s.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }}>
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div key="form" exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}>
                      <GlassCard accentColor="#F7B638" hover={false}>
                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div className="grid gap-5 sm:grid-cols-2">
                            <label className="block">
                              <span className="text-[13px] font-semibold text-[rgba(255,255,255,0.7)] tracking-[0.5px]">Full Name *</span>
                              <input type="text" required placeholder="John Doe" className="mt-2 w-full text-[15px] text-white rounded-xl px-[18px] py-[14px] outline-none placeholder:text-[#6B6B8A]" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                            </label>
                            <label className="block">
                              <span className="text-[13px] font-semibold text-[rgba(255,255,255,0.7)] tracking-[0.5px]">Email Address *</span>
                              <input type="email" required placeholder="john@company.com" className="mt-2 w-full text-[15px] text-white rounded-xl px-[18px] py-[14px] outline-none placeholder:text-[#6B6B8A]" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                            </label>
                          </div>

                          <label className="block">
                            <span className="text-[13px] font-semibold text-[rgba(255,255,255,0.7)] tracking-[0.5px]">Company Name</span>
                            <input type="text" placeholder="Your company (optional)" className="mt-2 w-full text-[15px] text-white rounded-xl px-[18px] py-[14px] outline-none placeholder:text-[#6B6B8A]" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                          </label>

                          <div className="grid gap-5 sm:grid-cols-2">
                            <label className="block">
                              <span className="text-[13px] font-semibold text-[rgba(255,255,255,0.7)] tracking-[0.5px]">Service Needed *</span>
                              <select required className="mt-2 w-full text-[15px] text-white rounded-xl px-[18px] py-[14px] outline-none" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}>
                                <option value="">Select a service</option>
                                <option value="mobile">Mobile App Development</option>
                                <option value="web">Web Development</option>
                                <option value="ai">AI-Powered Solutions</option>
                                <option value="automation">AI Automation</option>
                                <option value="email">Professional Email Support</option>
                                <option value="chatbots">AI Chatbots</option>
                              </select>
                            </label>
                            <label className="block">
                              <span className="text-[13px] font-semibold text-[rgba(255,255,255,0.7)] tracking-[0.5px]">Budget Range</span>
                              <select className="mt-2 w-full text-[15px] text-white rounded-xl px-[18px] py-[14px] outline-none" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}>
                                <option value="">Select budget</option>
                                <option value="500">Under $500</option>
                                <option value="1000">$500 - $1,000</option>
                                <option value="5000">$1,000 - $5,000</option>
                                <option value="10000">$5,000 - $10,000</option>
                                <option value="10000+">$10,000+</option>
                              </select>
                            </label>
                          </div>

                          <div className="grid gap-5 sm:grid-cols-2">
                            <label className="block">
                              <span className="text-[13px] font-semibold text-[rgba(255,255,255,0.7)] tracking-[0.5px]">Project Timeline</span>
                              <select className="mt-2 w-full text-[15px] text-white rounded-xl px-[18px] py-[14px] outline-none" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}>
                                <option value="">Select timeline</option>
                                <option value="asap">ASAP</option>
                                <option value="1-2w">1-2 Weeks</option>
                                <option value="1m">1 Month</option>
                                <option value="3m+">3+ Months</option>
                              </select>
                            </label>
                            <label className="block">
                              <span className="text-[13px] font-semibold text-[rgba(255,255,255,0.7)] tracking-[0.5px]">How did you find us?</span>
                              <select className="mt-2 w-full text-[15px] text-white rounded-xl px-[18px] py-[14px] outline-none" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}>
                                <option value="">Select option</option>
                                <option value="search">Google Search</option>
                                <option value="social">Social Media</option>
                                <option value="referral">Referral</option>
                                <option value="other">Other</option>
                              </select>
                            </label>
                          </div>

                          <label className="block">
                            <span className="text-[13px] font-semibold text-[rgba(255,255,255,0.7)] tracking-[0.5px]">Project Description *</span>
                            <textarea required rows={5} placeholder="Tell us about your project, goals, and any specific requirements..." className="mt-2 w-full text-[15px] text-white rounded-xl px-[18px] py-[14px] outline-none resize-none placeholder:text-[#6B6B8A]" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                          </label>

                          <button type="submit" className="relative w-full overflow-hidden text-white font-extrabold text-base tracking-[0.5px] cursor-pointer" style={{ padding: '18px 32px', borderRadius: '14px', background: 'linear-gradient(135deg, #F7B638 0%, #E0961A 40%, #780115 100%)', border: 'none', boxShadow: '0 4px 15px rgba(247,182,56,0.3)', transition: 'all 300ms ease' }}>
                            <div className="absolute inset-0 rounded-[14px] pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)' }} />
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              <FiSend size={16} /> Submit to AI Agent Queue
                            </span>
                          </button>
                        </form>
                      </GlassCard>
                    </motion.div>
                  ) : (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, type: 'spring' }}>
                      <GlassCard accentColor="#22c55e" hover={false}>
                        <div className="text-center py-10 space-y-5">
                          {/* Animated check */}
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }} className="w-20 h-20 rounded-full mx-auto flex items-center justify-center" style={{ background: 'rgba(34,197,94,0.15)', border: '2px solid rgba(34,197,94,0.3)' }}>
                            <FiCheck size={36} className="text-[#22c55e]" />
                          </motion.div>

                          <h3 className="text-2xl font-extrabold text-white">Request Received!</h3>
                          <p className="text-[#A0A0B8]">Our AI agent is reviewing your request</p>
                          <p className="text-sm" style={{ color: '#E1FF51' }}>Expected response: Under 2 minutes</p>

                          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex items-center justify-center gap-2 text-sm text-[#A0A0B8]">
                            <FiMessageCircle size={14} className="text-[#C8A8E9]" />
                            Agent is thinking...
                          </motion.div>

                          <div className="pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                            <p className="text-xs text-[#6B6B8A]">Track your request:</p>
                            <p className="text-lg font-mono font-bold text-[#F7B638]">{ticketId}</p>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="relative py-20 px-6" style={{ background: 'linear-gradient(180deg, #0D0D1A, #0a0a14)' }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { q: 'How fast will I get a response?', a: 'Our AI agent reviews submissions in under 2 minutes and sends a detailed proposal within 24 hours.', accent: '#C8A8E9' },
              { q: 'What if I need multiple services?', a: 'No problem! Select your primary need and describe all requirements in the description. We\'ll plan everything.', accent: '#E1FF51' },
              { q: 'Is there a free consultation?', a: 'Yes! Every initial consultation is free. We\'ll analyze your needs and provide a detailed quote with no obligation.', accent: '#F7B638' },
            ].map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: i * 0.1 }}>
                <GlassCard accentColor={faq.accent}>
                  <h4 className="text-sm font-bold text-white">{faq.q}</h4>
                  <p className="mt-3 text-xs text-[#A0A0B8] leading-[1.8]">{faq.a}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
