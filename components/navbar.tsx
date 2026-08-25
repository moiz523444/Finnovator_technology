'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 flex justify-between items-center bg-black/20 backdrop-blur-md border-b border-white/5">
        <Link href="/" onClick={(e) => { handleLogoClick(e); setIsMobileMenuOpen(false); }} className="block" data-cursor="hover">
          <div className="flex items-center">
            <img src="/logo.png" alt="Finnovator Tech Logo" className="h-8 md:h-10 w-auto object-contain" />
          </div>
        </Link>
      <div className="flex items-center gap-8">
        <Link href="/" onClick={handleLogoClick} className="hidden md:flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative group" data-cursor="hover">
          Home
          <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
        </Link>
        <Link href="/about" className="hidden md:flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative group" data-cursor="hover">
          About
          <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
        </Link>
        <Link href="/services" className="hidden md:flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative group" data-cursor="hover">
          Services
          <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
        </Link>
        <Link href="/portfolio" className="hidden md:flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative group" data-cursor="hover">
          Portfolio
          <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
        </Link>
        <Link href="/contact" className="hidden md:flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative group" data-cursor="hover">
          Let's Talk <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
        </Link>
        <button onClick={() => setIsMobileMenuOpen(true)} className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-2 md:hidden relative group" data-cursor="hover">
          <Menu size={16} /> Menu
        </button>
      </div>
    </nav>

    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col px-6 py-8 md:hidden"
        >
          <div className="flex justify-between items-center mb-16">
            <img src="/logo.png" alt="Finnovator Tech Logo" className="h-8 w-auto object-contain" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
              Close <X size={16} />
            </button>
          </div>
          
          <div className="flex flex-col gap-8 text-3xl font-bold tracking-tighter uppercase">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white text-zinc-400 transition-colors">Home</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white text-zinc-400 transition-colors">About</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white text-zinc-400 transition-colors">Services</Link>
            <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white text-zinc-400 transition-colors">Work</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 hover:text-[#01a0e2] text-white transition-colors mt-4">
              Let's Talk <ArrowUpRight size={24} />
            </Link>
          </div>
          
          <div className="mt-auto border-t border-white/10 pt-8 font-mono text-xs uppercase tracking-widest text-zinc-500">
            <a href="mailto:info@finnovatortech.com" className="block mb-4 hover:text-white transition-colors">info@finnovatortech.com</a>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">IG</a>
              <a href="#" className="hover:text-white transition-colors">TW</a>
              <a href="#" className="hover:text-white transition-colors">LI</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  )
}
