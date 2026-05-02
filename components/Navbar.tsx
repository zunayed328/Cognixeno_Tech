'use client'

import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = ['Solutions', 'Agents', 'Why Us', 'Insights', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 flex items-center justify-between py-6">
      <Link href="#" className="flex items-center gap-3 text-white">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 shadow-glow backdrop-blur-xl">
          <span className="text-lg font-extrabold text-cyan-200">C</span>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Cognixeno</p>
          <p className="text-base font-semibold text-white">Tech</p>
        </div>
      </Link>

      <nav className="hidden items-center gap-10 lg:flex">
        {navLinks.map((link) => (
          <a key={link} href={`#${link.replace(/\s+/g, '').toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-white">
            {link}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-3 lg:flex">
        <a href="#contact" className="rounded-full border border-slate-700 px-5 py-2 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-white">
          Contact sales
        </a>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/70 text-slate-300 transition hover:border-slate-600 lg:hidden"
        aria-label="Toggle navigation"
      >
        {open ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-6 top-full mt-4 rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-panel backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.replace(/\s+/g, '').toLowerCase()}`}
                  className="text-base text-slate-200 transition hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a href="#contact" className="mt-4 inline-flex rounded-full bg-cyan-500 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Contact sales
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
