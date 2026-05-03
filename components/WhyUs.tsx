'use client'

import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

const features = [
  {
    title: 'End-to-End AI Management',
    description: 'From idea to deployment, AI agents handle everything.'
  },
  {
    title: 'Multi-Industry Expertise',
    description: 'Solutions built for startups, enterprises, schools and e-commerce.'
  },
  {
    title: 'Custom-Built for You',
    description: 'No templates. Every solution is architected specifically for your needs.'
  },
  {
    title: 'Scalable Architecture',
    description: 'Built to grow with your business from day one.'
  },
  {
    title: 'Transparent Delivery',
    description: 'Real-time updates as agents work on your project.'
  }
]

const DashboardCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="glass-panel rounded-2xl p-6 h-[500px] flex flex-col border border-[rgba(200,168,233,0.3)]"
      style={{
        boxShadow: '0 0 30px rgba(200, 168, 233, 0.15), inset 0 0 20px rgba(200, 168, 233, 0.05)'
      }}
    >
      <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.08)]">
        <span className="text-sm font-semibold text-white">Cognixeno AI Dashboard</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-xs text-[#25D366]">Active</span>
        </div>
      </div>

      <div className="space-y-3 py-4 flex-1">
        <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-white font-medium">Mobile App Build</span>
            <span className="text-xs text-[#C8A8E9]">70%</span>
          </div>
          <div className="w-full h-1.5 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#C8A8E9] to-[#8B4FBF]"
              style={{ width: '70%' }}
            />
          </div>
          <p className="text-xs text-[#A0A0B8] mt-2">In Progress</p>
        </div>

        <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-white font-medium">Email Automation</span>
            <div className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center">
              <FiCheck size={12} className="text-black" />
            </div>
          </div>
          <p className="text-xs text-[#25D366] mt-2">Complete</p>
        </div>

        <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-white font-medium">Chatbot Deployment</span>
            <div className="w-2 h-2 rounded-full bg-[#F7B638]" />
          </div>
          <p className="text-xs text-[#F7B638]">Queued</p>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-[rgba(255,255,255,0.08)]">
        <div className="text-xs text-[#A0A0B8] mb-2">Performance</div>
        <div className="flex gap-1">
          {[65, 78, 54, 82, 71, 88].map((height, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${height / 20}px`,
                background: `linear-gradient(to top, #C8A8E9, #8B4FBF)`,
                opacity: 0.7
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function WhyUs() {
  return (
    <section id="whyus" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1A0030] to-[#0a0a0f] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <DashboardCard />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              Why Businesses Choose Cognixeno Tech
            </h2>

            <div className="mt-12 space-y-0">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group py-5 px-6 border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(200,168,233,0.04)] transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C8A8E9"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          filter: 'drop-shadow(0 0 8px rgba(200, 168, 233, 0.5))'
                        }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                      <p className="mt-2 text-sm text-[#A0A0B8]">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
