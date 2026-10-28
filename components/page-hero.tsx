'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// Shared hero for inner pages. `lines` render as stacked headline rows;
// the middle row is outlined, matching the home page treatment.
export function PageHero({
  eyebrow,
  lines,
  description,
}: {
  eyebrow: string
  lines: [string, string, string]
  description: string
}) {
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRefs.current,
        { y: '100%', opacity: 0, rotateZ: 2 },
        { y: '0%', opacity: 1, rotateZ: 0, duration: 1.6, stagger: 0.12, ease: 'power4.out', delay: 0.1 }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative px-6 md:px-12 pt-44 pb-24 md:pt-52 md:pb-32 flex flex-col items-start justify-center min-h-[75vh] overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="aurora w-[50vw] h-[50vw] -top-[20vw] -right-[10vw] bg-[#01a0e2]/20" />
      <div className="aurora w-[35vw] h-[35vw] top-[20%] -left-[15vw] bg-[#6d7cff]/15" style={{ animationDelay: '-6s' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <span className="eyebrow mb-10">{eyebrow}</span>
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden pb-3">
            <h1
              ref={el => { textRefs.current[i] = el }}
              className={`text-[12vw] md:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase ${i === 1 ? 'text-outline' : 'text-white'}`}
            >
              {line}
            </h1>
          </div>
        ))}

        <div className="mt-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="font-mono text-sm md:text-base text-zinc-400 max-w-xl leading-relaxed">{description}</p>
          <div className="hidden md:flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            <span className="w-12 h-px bg-zinc-700" /> Finnovator Tech
          </div>
        </div>
      </div>
    </section>
  )
}
