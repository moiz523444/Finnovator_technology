'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4 md:pt-5 pointer-events-none">
        <nav
          className={`pointer-events-auto mx-auto flex justify-between items-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? 'max-w-5xl glass bg-black/40 pl-5 pr-2 py-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]'
              : 'max-w-7xl border border-transparent pl-2 pr-0 py-3'
          }`}
        >
          <Link href="/" onClick={handleLogoClick} className="block shrink-0" data-cursor="hover">
            <img src="/logo.png" alt="Finnovator Tech Logo" className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-7 md:h-8' : 'h-8 md:h-10'}`} />
          </Link>

          <div className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/5 bg-white/[0.02]">
            {links.map(link => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.href === '/' ? handleLogoClick : undefined}
                  className={`relative px-5 py-2 rounded-full font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${active ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
                  data-cursor="hover"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              )
            })}
          </div>

          <Link href="/contact" className="hidden md:inline-flex btn-primary !py-3 !px-6 group">
            Let's Talk <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden flex items-center gap-2 px-4 py-2.5 rounded-full glass font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-200"
            aria-label="Open menu"
          >
            <Menu size={14} /> Menu
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#050507]/95 backdrop-blur-2xl flex flex-col px-6 py-6 md:hidden overflow-hidden"
          >
            <div className="aurora w-[90vw] h-[90vw] -top-[30vw] -right-[40vw] bg-[#01a0e2]/25" />

            <div className="relative flex justify-between items-center mb-16">
              <img src="/logo.png" alt="Finnovator Tech Logo" className="h-8 w-auto object-contain" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full glass font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-200"
                aria-label="Close menu"
              >
                Close <X size={14} />
              </button>
            </div>

            <div className="relative flex flex-col gap-2">
              {[...links, { href: '/contact', label: "Let's Talk" }].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-4 border-b border-white/5 text-4xl font-bold tracking-tighter uppercase transition-colors ${pathname === link.href ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
                  >
                    {link.label}
                    <span className="font-mono text-xs text-zinc-600">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="relative mt-auto pt-8 font-mono text-xs uppercase tracking-widest text-zinc-500">
              <a href="mailto:info@finnovatortech.com" className="block mb-4 text-zinc-300 hover:text-white transition-colors normal-case tracking-normal text-base">info@finnovatortech.com</a>
              <a href="tel:+923282333777" className="block mb-4 text-zinc-300 hover:text-white transition-colors normal-case tracking-normal text-base">+92 328 2333777</a>
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
