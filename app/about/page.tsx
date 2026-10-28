'use client'

import Link from 'next/link'
import { ArrowUpRight, Target, Eye, Gem, ShieldCheck, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SpotlightCard } from '@/components/spotlight-card'

const values = [
  { icon: Gem, title: 'Relentless Excellence', desc: 'Good is the enemy of great. We iterate until it hurts, ensuring every line of code and pixel is flawless.' },
  { icon: ShieldCheck, title: 'Radical Transparency', desc: 'No black boxes. We build in the open with our clients, fostering trust through absolute honesty.' },
  { icon: Sparkles, title: 'Fearless Innovation', desc: 'We do not follow trends; we set them. We embrace emerging tech to give you an unfair advantage.' }
]

const milestones = [
  { year: '2016', text: 'Finnovator Tech is founded.' },
  { year: '150+', text: 'Products shipped across web and mobile.' },
  { year: '35+', text: 'Industry awards earned.' },
  { year: '99%', text: 'Client retention.' },
]

export default function AboutPage() {
  return (
    <main className="bg-[#050507] text-[#f5f5f5] min-h-screen">
      <PageHero
        eyebrow="Who We Are"
        lines={['THE MINDS', 'BEHIND THE', 'MAGIC.']}
        description="We are a collective of rogue engineers, visionary designers, and relentless problem-solvers. We don't just build software; we architect the digital future for businesses that refuse to settle for ordinary."
      />

      {/* Mission & Vision */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { icon: Target, title: 'Our Mission', text: 'To empower visionary brands by engineering digital ecosystems that are scalable, secure, and spectacularly beautiful. We bridge the gap between complex logic and human-centric design.' },
            { icon: Eye, title: 'Our Vision', text: 'To become the global standard for high-end digital innovation. We envision a world where every enterprise operates on software that feels less like a tool, and more like an extension of human intent.' },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <SpotlightCard className="rounded-[32px] p-10 md:p-14 h-full">
                  <div className="w-14 h-14 rounded-2xl border border-white/10 bg-gradient-to-br from-[#01a0e2]/20 to-transparent flex items-center justify-center mb-10">
                    <Icon size={24} className="text-[#5ccdfb]" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">{item.title}</h3>
                  <p className="font-sans text-lg md:text-xl text-zinc-400 leading-relaxed">{item.text}</p>
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-32 px-6 md:px-12 bg-[#08090d] border-y border-white/5 relative overflow-hidden">
        <div className="aurora w-[40vw] h-[40vw] -top-[10vw] -right-[10vw] bg-[#01a0e2]/10" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <span className="eyebrow mb-8">Core Values</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-20">What <span className="serif-accent text-gradient">drives</span> us</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <Reveal key={value.title} delay={i * 0.1}>
                  <SpotlightCard className="rounded-[28px] p-10 h-full">
                    <div className="flex items-center justify-between mb-12">
                      <Icon size={28} className="text-[#5ccdfb]" strokeWidth={1.5} />
                      <span className="font-mono text-xs text-zinc-600">0{i + 1}</span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 tracking-tighter">{value.title}</h4>
                    <p className="font-mono text-sm text-zinc-400 leading-relaxed">{value.desc}</p>
                  </SpotlightCard>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow mb-8">By The Numbers</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.95] mb-8">A decade of <span className="serif-accent text-gradient">building.</span></h2>
            <Link href="/portfolio" className="btn-ghost group">
              See the work <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-500" />
            </Link>
          </Reveal>

          <div className="lg:col-span-7 relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#01a0e2]/60 via-white/10 to-transparent" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.08}>
                  <div className="relative pl-12">
                    <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-[#01a0e2] bg-[#050507] shadow-[0_0_12px_rgba(1,160,226,0.6)]" />
                    <div className="text-4xl md:text-5xl font-bold tracking-tighter text-gradient mb-2 font-sans">{m.year}</div>
                    <p className="font-mono text-sm md:text-base text-zinc-400">{m.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
