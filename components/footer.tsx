'use client'

import { ArrowUpRight } from 'lucide-react'
import { Magnetic } from '@/components/magnetic'
import { GlobeCanvas } from '@/components/agency-canvas'
import Link from 'next/link'

export function Footer() {
  return (
    <footer id="contact" className="min-h-screen bg-black flex flex-col justify-between px-6 md:px-12 pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-30 pointer-events-none translate-x-1/3 translate-y-1/3">
        <GlobeCanvas />
      </div>
      
      <div className="relative z-10">
        <span className="eyebrow mb-12">Make a move</span>
        <h2 className="text-[15vw] md:text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase text-white mb-16 hover:text-outline transition-colors cursor-pointer" data-cursor="hover">
          LET'S<br/>TALK.
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-32">
            <a href="mailto:info@finnovatortech.com" className="relative group inline-flex items-center gap-6 text-3xl md:text-5xl font-medium pb-4 text-zinc-300 hover:text-white transition-colors" data-cursor="hover">
              info@finnovatortech.com <ArrowUpRight size={40} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20"></span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
          <div className="space-y-6">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Global HQ</span>
            <p className="font-sans text-xl text-zinc-300 max-w-xs leading-relaxed">
              1200 Innovation Drive<br/>
              Suite 400<br/>
              New York, NY 10011
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 font-mono text-xs text-zinc-600 uppercase tracking-widest mt-32 pt-10 border-t border-white/10">
        <div className="flex flex-wrap gap-8">
            <Link href="#" className="relative group hover:text-white transition-colors" data-cursor="hover">
              Instagram
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            <Link href="#" className="relative group hover:text-white transition-colors" data-cursor="hover">
              Twitter
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            <Link href="#" className="relative group hover:text-white transition-colors" data-cursor="hover">
              LinkedIn
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            <Link href="#" className="relative group hover:text-white transition-colors" data-cursor="hover">
              Dribbble
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
        </div>
        <div className="text-left md:text-right">
          <p className="mb-2">© 2026 Finnovator Tech.</p>
          <p>All systems operational.</p>
        </div>
      </div>
    </footer>
  )
}
