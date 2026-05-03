'use client'

import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const particles = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  top: `${8 + (index % 5) * 14}%`,
  left: `${6 + (index % 4) * 22}%`,
  delay: (index % 5) * 0.8,
  duration: 10 + (index % 5) * 1.5
}))

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-base text-white">
      <div className="absolute inset-0 bg-hero-grid opacity-40" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="hero-particle"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 inline-flex items-center rounded-full border border-[rgba(200,168,233,0.3)] bg-[rgba(200,168,233,0.1)] px-4 py-2 text-[13px] tracking-[2px] text-[#C8A8E9]"
        >
          ⚡ ALL TASKS MANAGED BY AI AGENTS
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mb-10 flex h-[120px] w-[120px] items-center justify-center"
        >
          <div className="hero-logo" />
        </motion.div>

        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-[72px] font-[800] leading-[0.95]"
          >
            Build Smarter.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-[72px] font-[800] leading-[0.95] bg-gradient-to-r from-[#C8A8E9] to-[#FF947A] bg-clip-text text-transparent"
          >
            Automate Everything.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="text-[72px] font-[800] leading-[0.95]"
          >
            Grow Faster.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="mt-8 max-w-[600px] text-[18px] text-[#A0A0B8]"
        >
          Cognixeno Tech delivers AI-powered mobile apps, web platforms, automation systems and intelligent chatbots — all managed end-to-end by our autonomous AI agents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            href="#solutions"
            className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#C8A8E9] to-[#8B4FBF] px-[32px] py-[14px] text-[16px] font-semibold text-white shadow-[0_20px_60px_rgba(200,168,233,0.18)] hover:brightness-110"
          >
            Explore Our Services
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            href="#agents"
            className="inline-flex items-center justify-center rounded-[10px] border border-[#C8A8E9] bg-transparent px-[32px] py-[14px] text-[16px] font-semibold text-[#C8A8E9] hover:bg-[rgba(200,168,233,0.1)]"
          >
            Meet Our AI Agents
          </motion.a>
        </motion.div>

        <div className="mt-16">
          <div className="hero-scroll-indicator">
            <FiChevronDown size={24} />
          </div>
        </div>
      </div>
    </section>
  )
}
