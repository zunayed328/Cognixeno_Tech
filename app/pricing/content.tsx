'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheck, FiX, FiPlus, FiMinus } from 'react-icons/fi'
import PageHero from '../../components/ui/PageHero'
import AnimatedButton from '../../components/ui/AnimatedButton'
import SectionBadge from '../../components/ui/SectionBadge'

const tiers = [
  {
    name: 'Starter',
    badge: 'PERFECT TO START',
    price: 299,
    accent: '#FF947A',
    popular: false,
    features: ['1 Active Project', 'Mobile OR Web Development', 'Basic AI Integration', 'Email Support', '1 AI Agent Assigned', '2 Week Delivery', '3 Revisions'],
  },
  {
    name: 'Professional',
    badge: 'MOST POPULAR',
    price: 799,
    accent: '#C8A8E9',
    popular: true,
    features: ['3 Active Projects', 'Mobile + Web Development', 'Full AI-Powered Solutions', 'AI Automation Setup', 'Email Support System', '3 AI Agents Assigned', '1 Week Delivery', 'Unlimited Revisions', 'Priority Queue'],
  },
  {
    name: 'Enterprise',
    badge: 'FOR LARGE TEAMS',
    price: 0,
    accent: '#F7B638',
    popular: false,
    features: ['Unlimited Projects', 'All 6 Services Included', 'Custom AI Agent Team', 'Dedicated Account Manager', 'White-label Solutions', '24/7 Priority Support', 'Same Day Delivery Available', 'Custom Integrations'],
  },
]

const comparisonFeatures = [
  { name: '# of Projects', starter: '1', pro: '3', enterprise: 'Unlimited' },
  { name: 'AI Agents', starter: '1', pro: '3', enterprise: 'Custom' },
  { name: 'Delivery Time', starter: '2 Weeks', pro: '1 Week', enterprise: 'Same Day' },
  { name: 'Revisions', starter: '3', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'AI Automation', starter: false, pro: true, enterprise: true },
  { name: 'Chatbot Setup', starter: false, pro: true, enterprise: true },
  { name: 'White-label', starter: false, pro: false, enterprise: true },
  { name: 'Priority Support', starter: false, pro: true, enterprise: true },
]

const faqs = [
  { q: 'Can I upgrade my plan anytime?', a: 'Yes, you can upgrade or downgrade at any time. Changes take effect immediately and billing is prorated.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, wire transfer, and PayPal. Enterprise clients can arrange custom billing.' },
  { q: 'Is there a money-back guarantee?', a: 'Yes, we offer a 14-day money-back guarantee. If you\'re not satisfied, we\'ll refund your payment in full.' },
  { q: 'What does "AI Agent Assigned" mean?', a: 'Each AI agent handles a specialized area of your project. More agents = more parallel work = faster delivery.' },
  { q: 'Can I cancel my subscription?', a: 'You can cancel anytime. Your current projects will be completed, and you won\'t be charged for the next billing cycle.' },
  { q: 'Do you offer custom plans?', a: 'Yes! Enterprise plans are fully customizable. Contact us to discuss your specific needs and we\'ll create a tailored plan.' },
]

export default function PricingContent() {
  const [yearly, setYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main>
      <PageHero
        badge="Pricing"
        badgeColor="#C8A8E9"
        title="Simple, Transparent Pricing"
        subtitle="No hidden fees. AI agents deliver maximum value at every tier."
      >
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${!yearly ? 'text-white' : 'text-[#6B6B8A]'}`}>Monthly</span>
          <button onClick={() => setYearly(!yearly)} className="relative w-14 h-7 rounded-full p-1 transition-colors" style={{ background: yearly ? 'rgba(200,168,233,0.3)' : 'rgba(255,255,255,0.1)' }}>
            <motion.div animate={{ x: yearly ? 24 : 0 }} transition={{ type: 'spring', stiffness: 500, damping: 30 }} className="w-5 h-5 rounded-full bg-white" />
          </button>
          <span className={`text-sm font-medium ${yearly ? 'text-white' : 'text-[#6B6B8A]'}`}>Yearly</span>
          {yearly && <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[rgba(225,255,81,0.15)] text-[#E1FF51] border border-[rgba(225,255,81,0.3)]">Save 20%</span>}
        </div>
      </PageHero>

      {/* Pricing Cards */}
      <section className="relative py-24 px-6 -mt-10" style={{ background: 'linear-gradient(180deg, #080810, #0D0D1A)' }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-7 lg:grid-cols-3 items-start">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={`relative group overflow-hidden ${tier.popular ? 'lg:-mt-4 lg:mb-[-16px]' : ''}`}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(24px)',
                  border: `1px solid ${tier.popular ? `${tier.accent}40` : 'rgba(255,255,255,0.07)'}`,
                  borderRadius: '24px',
                  padding: '36px 32px',
                  boxShadow: tier.popular ? `0 0 60px ${tier.accent}1A, 0 20px 60px rgba(0,0,0,0.4)` : '0 20px 60px rgba(0,0,0,0.4)',
                }}
              >
                {/* Top accent border */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[24px]" style={{ background: `linear-gradient(90deg, ${tier.accent}, ${tier.accent}80)` }} />

                {/* Left accent */}
                <div className="absolute left-0 top-[15%] bottom-[15%] w-[3px]" style={{ background: `linear-gradient(180deg, transparent, ${tier.accent}, transparent)` }} />

                {/* Popular ribbon */}
                {tier.popular && (
                  <div className="absolute top-5 right-5">
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[rgba(225,255,81,0.15)] text-[#E1FF51] border border-[rgba(225,255,81,0.3)]">{tier.badge}</span>
                  </div>
                )}

                {!tier.popular && (
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full inline-block mb-4" style={{ background: `${tier.accent}14`, border: `1px solid ${tier.accent}33`, color: tier.accent }}>{tier.badge}</span>
                )}

                <h3 className="text-2xl font-extrabold text-white mt-1">{tier.name}</h3>

                <div className="mt-4 flex items-baseline gap-1">
                  {tier.price > 0 ? (
                    <>
                      <span className="text-5xl font-black" style={{ color: tier.accent }}>${yearly ? Math.round(tier.price * 0.8) : tier.price}</span>
                      <span className="text-sm text-[#6B6B8A] font-medium">/month</span>
                    </>
                  ) : (
                    <span className="text-5xl font-black" style={{ color: tier.accent }}>Custom</span>
                  )}
                </div>

                <div className="mt-6 w-full h-[1px]" style={{ background: 'rgba(255,255,255,0.06)' }} />

                <ul className="mt-6 space-y-3">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-center gap-3">
                      <FiCheck size={14} style={{ color: tier.accent }} />
                      <span className="text-sm text-[#A0A0B8]">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <AnimatedButton href="/contact" variant={tier.popular ? 'primary' : 'outline'} color={tier.accent} className="w-full justify-center">
                    {tier.price > 0 ? 'Get Started' : 'Contact Sales'}
                  </AnimatedButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #0D0D1A, #080810)' }}>
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <SectionBadge text="Compare Plans" color="#C8A8E9" />
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="mt-6 text-2xl sm:text-3xl font-extrabold text-white">
              Feature Comparison
            </motion.h2>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="overflow-x-auto rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <th className="text-left px-6 py-4 text-[#6B6B8A] font-medium">Feature</th>
                  <th className="text-center px-6 py-4 font-bold" style={{ color: '#FF947A' }}>Starter</th>
                  <th className="text-center px-6 py-4 font-bold" style={{ color: '#C8A8E9' }}>Professional</th>
                  <th className="text-center px-6 py-4 font-bold" style={{ color: '#F7B638' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((f, i) => (
                  <tr key={f.name} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                    <td className="px-6 py-3 text-[#A0A0B8]">{f.name}</td>
                    {['starter', 'pro', 'enterprise'].map((key) => {
                      const val = f[key as keyof typeof f]
                      return (
                        <td key={key} className="text-center px-6 py-3">
                          {typeof val === 'boolean' ? (
                            val ? <FiCheck size={16} className="mx-auto text-[#22c55e]" /> : <FiX size={16} className="mx-auto text-[#6B6B8A]" />
                          ) : (
                            <span className="text-white font-medium">{val}</span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 px-6" style={{ background: 'linear-gradient(180deg, #080810, #0D0D1A)' }}>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <SectionBadge text="FAQ" color="#F7B638" />
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="mt-6 text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: i * 0.05 }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-5 rounded-xl flex items-center justify-between gap-4 transition-all duration-200"
                  style={{
                    background: openFaq === i ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${openFaq === i ? 'rgba(247,182,56,0.2)' : 'rgba(255,255,255,0.06)'}`,
                    borderLeft: openFaq === i ? '3px solid #F7B638' : '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <span className={`text-sm font-semibold ${openFaq === i ? 'text-white' : 'text-[#A0A0B8]'}`}>{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    {openFaq === i ? <FiMinus size={16} className="text-[#F7B638]" /> : <FiPlus size={16} className="text-[#6B6B8A]" />}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 py-4 text-sm text-[#A0A0B8] leading-[1.8]">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center" style={{ background: 'linear-gradient(180deg, #0D0D1A, #0a0a14)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-1px]">Still have questions?</h2>
          <p className="mt-4 text-[#A0A0B8]">Our team is here to help you find the perfect plan.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <AnimatedButton href="/contact" variant="outline" color="#C8A8E9">Contact Sales</AnimatedButton>
            <AnimatedButton href="/contact" color="#F7B638" gradientTo="#D4941F">Start Free Consultation</AnimatedButton>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
