'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null)
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRefs.current, 
        { y: '100%', opacity: 0, rotateZ: 2 },
        { y: '0%', opacity: 1, rotateZ: 0, duration: 1.8, stagger: 0.15, ease: 'power4.out', delay: 0.1 }
      )
    })
    return () => ctx.revert()
  }, [])

  const team = [
    { name: 'Elena Rostova', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' },
    { name: 'Marcus Chen', role: 'Head of Engineering', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800' },
    { name: 'Sarah Jenkins', role: 'Lead Product Designer', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800' },
    { name: 'David Okafor', role: 'VP of Strategy', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800' }
  ]

  return (
    <main className="bg-[#050505] text-[#f5f5f5] min-h-screen selection:bg-white selection:text-black pt-32">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative px-6 md:px-12 py-20 flex flex-col items-start justify-center min-h-[60vh] border-b border-white/5">
        <span className="eyebrow mb-8">Who We Are</span>
        <div className="overflow-hidden pb-4">
          <h1 ref={el => { textRefs.current[0] = el }} className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase text-white">THE MINDS</h1>
        </div>
        <div className="overflow-hidden pb-4">
          <h1 ref={el => { textRefs.current[1] = el }} className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase text-outline">BEHIND THE</h1>
        </div>
        <div className="overflow-hidden pb-4">
          <h1 ref={el => { textRefs.current[2] = el }} className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase text-white">MAGIC.</h1>
        </div>
        
        <p className="mt-12 font-mono text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed">
          We are a collective of rogue engineers, visionary designers, and relentless problem-solvers. We don't just build software; we architect the digital future for businesses that refuse to settle for ordinary.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-8">Our Mission</h3>
            <p className="font-sans text-xl text-zinc-400 leading-relaxed">
              To empower visionary brands by engineering digital ecosystems that are scalable, secure, and spectacularly beautiful. We bridge the gap between complex logic and human-centric design.
            </p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-8">Our Vision</h3>
            <p className="font-sans text-xl text-zinc-400 leading-relaxed">
              To become the global standard for high-end digital innovation. We envision a world where every enterprise operates on software that feels less like a tool, and more like an extension of human intent.
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <span className="eyebrow mb-12">Core Values</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-20">What Drives Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Relentless Excellence', desc: 'Good is the enemy of great. We iterate until it hurts, ensuring every line of code and pixel is flawless.' },
              { title: 'Radical Transparency', desc: 'No black boxes. We build in the open with our clients, fostering trust through absolute honesty.' },
              { title: 'Fearless Innovation', desc: 'We do not follow trends; we set them. We embrace emerging tech to give you an unfair advantage.' }
            ].map((value, i) => (
              <div key={i} className="p-10 border border-white/10 rounded-3xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                <h4 className="text-2xl font-bold mb-4 tracking-tighter">{value.title}</h4>
                <p className="font-mono text-sm text-zinc-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="eyebrow mb-12">Leadership</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-20">Meet The Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
                whileHover={{ y: -10 }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${member.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h4 className="text-2xl font-bold tracking-tighter mb-1">{member.name}</h4>
                  <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

    </main>
  )
}
