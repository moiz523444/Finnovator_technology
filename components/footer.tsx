'use client'

import { ArrowUpRight } from 'lucide-react'
import { GlobeCanvas } from '@/components/agency-canvas'
import Link from 'next/link'

const sitemap = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

const socials = ['Instagram', 'Twitter', 'LinkedIn', 'Dribbble']

export function Footer() {
  return (
    <footer id="contact" className="relative bg-black px-6 md:px-12 pt-32 pb-10 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="aurora w-[60vw] h-[40vw] -bottom-[20vw] left-1/2 -translate-x-1/2 bg-[#01a0e2]/20" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-30 pointer-events-none translate-x-1/3 translate-y-1/3">
        <GlobeCanvas />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <span className="eyebrow mb-10">Make a move</span>
        <Link href="/contact" className="group block mb-20" data-cursor="hover">
          <h2 className="text-[16vw] md:text-[11vw] leading-[0.82] font-bold tracking-tighter uppercase text-white">
            Let's <span className="serif-accent text-gradient pr-4">talk.</span>
          </h2>
          <span className="mt-8 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors">
            Start a project
            <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-[#01a0e2] group-hover:border-[#01a0e2] transition-all">
              <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-500" />
            </span>
          </span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-16 border-t border-white/10">
          <div className="md:col-span-6 space-y-6">
            <img src="/logo.png" alt="Finnovator Tech Logo" className="h-10 w-auto object-contain" />
            <p className="font-mono text-sm text-zinc-500 max-w-sm leading-relaxed">
              A premium innovation studio engineering platforms that refuse to ship ordinary.
            </p>
            <a href="mailto:info@finnovatortech.com" className="relative group inline-flex items-center gap-3 text-2xl md:text-3xl font-medium text-zinc-200 hover:text-white transition-colors" data-cursor="hover">
              info@finnovatortech.com
              <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>

          <div className="md:col-span-2 space-y-5">
            <span className="field-label">Sitemap</span>
            <ul className="space-y-3">
              {sitemap.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-zinc-400 hover:text-white transition-colors" data-cursor="hover">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-5">
            <span className="field-label">Social</span>
            <ul className="space-y-3">
              {socials.map(s => (
                <li key={s}>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors" data-cursor="hover">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-5">
            <span className="field-label">Head Office</span>
            <p className="text-zinc-400 leading-relaxed">
              Burj Ul Minal, Office # 506<br />
              Gulistan-e-Johar<br />
              Karachi, Pakistan
            </p>
            <a href="tel:+923282333777" className="block text-zinc-400 hover:text-white transition-colors" data-cursor="hover">+92 328 2333777</a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-[11px] text-zinc-600 uppercase tracking-[0.18em]">
          <p>© 2026 Finnovator Tech. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  )
}
