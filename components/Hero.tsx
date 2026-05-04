'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import Link from 'next/link'
import AnimatedLogo from './ui/AnimatedLogo'
import AnimatedCompanyName from './ui/AnimatedCompanyName'

/* Background floating particles */
const bgParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  top: `${8 + (i % 5) * 14}%`,
  left: `${6 + (i % 4) * 22}%`,
  delay: (i % 5) * 0.8,
  duration: 10 + (i % 5) * 1.5,
}))

/* Orbit particle config */
interface OrbitParticle {
  id: number
  angle: number
  radius: number
  size: number
  color: string
  speed: number
  ring: number
}

const orbitParticles: OrbitParticle[] = [
  // Ring 1 — inner (radius 70px), 4 particles, fast
  { id: 0, angle: 0, radius: 70, size: 4, color: '#C8A8E9', speed: 6, ring: 1 },
  { id: 1, angle: 90, radius: 70, size: 4, color: '#FF947A', speed: 6, ring: 1 },
  { id: 2, angle: 180, radius: 70, size: 4, color: '#E1FF51', speed: 6, ring: 1 },
  { id: 3, angle: 270, radius: 70, size: 4, color: '#F7B638', speed: 6, ring: 1 },
  // Ring 2 — middle (radius 100px), 4 particles, medium
  { id: 4, angle: 45, radius: 100, size: 3, color: '#FF947A', speed: -10, ring: 2 },
  { id: 5, angle: 135, radius: 100, size: 3, color: '#C8A8E9', speed: -10, ring: 2 },
  { id: 6, angle: 225, radius: 100, size: 3, color: '#E1FF51', speed: -10, ring: 2 },
  { id: 7, angle: 315, radius: 100, size: 3, color: '#F7B638', speed: -10, ring: 2 },
  // Ring 3 — outer (radius 130px), 4 particles, slow
  { id: 8, angle: 30, radius: 130, size: 2, color: 'rgba(200,168,233,0.5)', speed: 15, ring: 3 },
  { id: 9, angle: 120, radius: 130, size: 2, color: 'rgba(255,255,255,0.3)', speed: 15, ring: 3 },
  { id: 10, angle: 210, radius: 130, size: 2, color: 'rgba(225,255,81,0.4)', speed: 15, ring: 3 },
  { id: 11, angle: 300, radius: 130, size: 2, color: 'rgba(255,148,122,0.4)', speed: 15, ring: 3 },
]

/* Particle orbit renderer using requestAnimationFrame */
function ParticleOrbit() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const size = 300
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    const cx = size / 2
    const cy = size / 2
    let startTime = performance.now()

    const draw = (now: number) => {
      const elapsed = (now - startTime) / 1000
      ctx.clearRect(0, 0, size, size)

      orbitParticles.forEach((p) => {
        const angleRad =
          ((p.angle + (elapsed * 360) / p.speed) * Math.PI) / 180
        const x = cx + p.radius * Math.cos(angleRad)
        const y = cy + p.radius * Math.sin(angleRad)

        // Glow
        ctx.beginPath()
        const grad = ctx.createRadialGradient(x, y, 0, x, y, p.size * 3)
        grad.addColorStop(0, p.color)
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.arc(x, y, p.size * 3, 0, Math.PI * 2)
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.fillStyle = p.color
        ctx.arc(x, y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Trail (3 trailing dots)
        for (let t = 1; t <= 3; t++) {
          const trailAngle =
            ((p.angle + (elapsed * 360) / p.speed - t * 5) * Math.PI) / 180
          const tx = cx + p.radius * Math.cos(trailAngle)
          const ty = cy + p.radius * Math.sin(trailAngle)
          ctx.beginPath()
          ctx.globalAlpha = 0.3 - t * 0.08
          ctx.fillStyle = p.color
          ctx.arc(tx, ty, p.size * (1 - t * 0.2), 0, Math.PI * 2)
          ctx.fill()
          ctx.globalAlpha = 1
        }
      })

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: 300, height: 300 }}
    />
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-base text-white">
      <div className="absolute inset-0 bg-hero-grid opacity-40" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 pointer-events-none">
        {bgParticles.map((particle) => (
          <span
            key={particle.id}
            className="hero-particle"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
          className="mb-8 inline-flex items-center rounded-full border border-[rgba(200,168,233,0.3)] bg-[rgba(200,168,233,0.1)] px-4 py-2 text-[13px] tracking-[2px] text-[#C8A8E9]"
        >
          ⚡ ALL TASKS MANAGED BY AI AGENTS
        </motion.div>

        {/* Logo Container with particle orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mb-6 flex items-center justify-center"
          style={{ width: 300, height: 300 }}
        >
          {/* Ambient glow layers */}
          <div
            className="absolute rounded-full"
            style={{
              width: 280,
              height: 280,
              background:
                'radial-gradient(circle, rgba(139,0,255,0.08) 0%, transparent 70%)',
              animation: 'pulseGlow 4s ease-in-out infinite',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 200,
              height: 200,
              background:
                'radial-gradient(circle, rgba(200,168,233,0.12) 0%, transparent 60%)',
              animation: 'pulseGlow 3s ease-in-out infinite 0.5s',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 140,
              height: 140,
              background:
                'radial-gradient(circle, rgba(139,0,255,0.15) 0%, transparent 50%)',
              animation: 'pulseGlow 2s ease-in-out infinite 1s',
            }}
          />

          {/* Dashed orbit rings */}
          <div
            className="absolute rounded-full"
            style={{
              width: 160,
              height: 160,
              border: '1px dashed rgba(200,168,233,0.2)',
              animation: 'spin 20s linear infinite',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 220,
              height: 220,
              border: '1px dashed rgba(255,148,122,0.12)',
              animation: 'spin 15s linear infinite reverse',
            }}
          />

          {/* Canvas particle orbits */}
          <ParticleOrbit />

          {/* The animated X logo */}
          <div className="relative z-10">
            <AnimatedLogo
              size={100}
              showGlow={true}
              animate={true}
              showRings={true}
            />
          </div>
        </motion.div>

        {/* Animated Company Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative mb-10"
        >
          <AnimatedCompanyName size="hero" animate={true} />
        </motion.div>

        {/* Headline */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-[72px] font-[800] leading-[0.95]"
          >
            Build Smarter.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.0, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-[72px] font-[800] leading-[0.95] bg-gradient-to-r from-[#C8A8E9] to-[#FF947A] bg-clip-text text-transparent"
          >
            Automate Everything.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.2, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-[72px] font-[800] leading-[0.95]"
          >
            Grow Faster.
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.4, ease: 'easeOut' }}
          className="mt-8 max-w-[600px] text-base sm:text-[18px] text-[#A0A0B8]"
        >
          Cognixeno Tech delivers AI-powered mobile apps, web platforms,
          automation systems and intelligent chatbots — all managed end-to-end by
          our autonomous AI agents.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.6, ease: 'easeOut' }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#C8A8E9] to-[#8B4FBF] px-[32px] py-[14px] text-[16px] font-semibold text-white shadow-[0_20px_60px_rgba(200,168,233,0.18)] hover:brightness-110"
            >
              Explore Our Services
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <Link
              href="/ai-agents"
              className="inline-flex items-center justify-center rounded-[10px] border border-[#C8A8E9] bg-transparent px-[32px] py-[14px] text-[16px] font-semibold text-[#C8A8E9] hover:bg-[rgba(200,168,233,0.1)]"
            >
              Meet Our AI Agents
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="mt-16">
          <div className="hero-scroll-indicator">
            <FiChevronDown size={24} />
          </div>
        </div>
      </div>
    </section>
  )
}
