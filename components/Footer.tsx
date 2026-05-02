'use client'

import { FiChevronRight, FiShield } from 'react-icons/fi'

const links = ['Solutions', 'Agents', 'Why Us', 'Insights', 'Contact']

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 py-12 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3 text-white">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
              <FiShield size={20} />
            </span>
            <div>
              <p className="text-base font-semibold text-white">Cognixeno Tech</p>
              <p className="text-sm text-slate-400">AI-native security for agile enterprises.</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-6">Accelerating threat defense through AI orchestration, predictive intelligence, and secure operations across hybrid environments.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Links</p>
            <div className="space-y-2">
              {links.map((link) => (
                <a key={link} href={`#${link.replace(/\s+/g, '').toLowerCase()}`} className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-white">
                  <FiChevronRight />
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Contact</p>
            <p className="text-sm text-slate-300">sales@cognixeno.com</p>
            <p className="text-sm text-slate-300">+1 (800) 555-0199</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
