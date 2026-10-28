'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, ArrowDownRight, Code, AppWindow, Smartphone, PenTool, Star, Plus, Quote } from 'lucide-react'
import { HeroCanvas } from '@/components/agency-canvas'
import { Reveal } from '@/components/reveal'
import { SpotlightCard } from '@/components/spotlight-card'

gsap.registerPlugin(ScrollTrigger)

const bentoFeatures = [
  { title: 'Web Development', desc: 'Building robust, scalable, and secure web solutions designed to handle high traffic seamlessly.', span: 'md:col-span-2', icon: Code, tags: ['Next.js', 'Node', 'Cloud'] },
  { title: 'Web Application', desc: 'Crafting powerful, responsive web applications that captivate users and drive engagement.', span: 'md:col-span-1', icon: AppWindow, tags: ['SaaS', 'Dashboards'] },
  { title: 'Mobile Application', desc: 'Developing seamless mobile experiences for iOS and Android that put your business in their pockets.', span: 'md:col-span-1', icon: Smartphone, tags: ['iOS', 'Android'] },
  { title: 'UI/UX Design', desc: 'Designing intuitive, aesthetic interfaces that merge beautiful visuals with exceptional user journeys.', span: 'md:col-span-2', icon: PenTool, tags: ['Research', 'Systems', 'Prototyping'] }
]

const projects = [
  {
    title: "Core 1 Consulting",
    category: "Full Stack Web",
    image: "/project/core1.jpg",
    link: "https://core1.co/",
    problem: "A high-end consulting firm digital presence optimized for lead generation.",
  },
  {
    title: "Edge Finance",
    category: "Corporate Platform",
    image: "/project/edge-finance.jpg",
    link: "https://edge.fin.finnovator.com.sa/",
    problem: "Modern, secure web presence to attract corporate clients.",
  },
  {
    title: "Finnovator ME",
    category: "Fintech Platform",
    image: "/project/finnovator.jpg",
    link: "https://www.finnovator.me/",
    problem: "Complex dashboard for real-time financial metrics in Middle Eastern markets.",
  },
]

const stats = [
  { target: 10, suffix: '+', label: 'Years of Excellence' },
  { target: 150, suffix: '+', label: 'Products Shipped' },
  { target: 99, suffix: '%', label: 'Client Retention' },
  { target: 35, suffix: '+', label: 'Industry Awards' },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'Deep diving into your business logic, user needs, and market opportunities.' },
  { step: '02', title: 'Architecture', desc: 'Designing the technical foundation and scalable cloud infrastructure.' },
  { step: '03', title: 'Execution', desc: 'Agile sprints of high-velocity coding, testing, and continuous deployment.' },
  { step: '04', title: 'Scale', desc: 'Monitoring, optimizing, and scaling the system as your user base grows.' }
]

const clients = ['VERDE', 'ALTO', 'KINETIC', 'NORTHSTAR', 'MONUMENT', 'NOVA', 'MIRA', 'NEXUS']
const stack = ['WordPress', 'React', 'Next.js', 'Node.js', 'AWS', 'PostgreSQL', 'GraphQL', 'Docker', 'Kubernetes', 'TypeScript', 'React Native', 'Flutter']

const testimonials = [
  { text: "Finnovator Tech completely transformed our legacy architecture. Their engineering speed and attention to scalable design is unparalleled.", author: "James T.", role: "CTO at NOVA" },
  { text: "The web application they delivered not only looks stunning but handles our massive traffic spikes without a single hiccup.", author: "Sarah W.", role: "VP Product at MIRA" },
  { text: "Their ability to understand our complex business logic and translate it into a seamless user experience is truly remarkable.", author: "Michael R.", role: "CEO at NEXUS" },
  { text: "Working with Finnovator Tech felt like an extension of our own team. They are proactive, transparent, and brilliant.", author: "Emily K.", role: "Director at VORTEX" },
  { text: "From the initial discovery to the final deployment, the entire process was flawless. The best development partner we've ever had.", author: "David L.", role: "Founder at SYNAPSE" }
]

const faqs = [
  { q: 'What is your typical project timeline?', a: 'Depending on complexity, most enterprise projects range from 3 to 6 months from discovery to launch.' },
  { q: 'Do you provide ongoing maintenance?', a: 'Yes, we offer comprehensive SLA agreements for continuous monitoring, updates, and scaling.' },
  { q: 'Can you integrate with our existing legacy systems?', a: 'Absolutely. A large part of our engineering work involves modernizing and integrating with legacy architectures securely.' },
  { q: 'What is your minimum engagement size?', a: 'Our minimum project engagement starts at $50k to ensure we can dedicate the right senior resources to your success.' }
]

function SectionHeading({ eyebrow, children, center = false }: { eyebrow: string, children: React.ReactNode, center?: boolean }) {
  return (
    <Reveal className={center ? 'text-center flex flex-col items-center' : ''}>
      <span className="eyebrow mb-8">{eyebrow}</span>
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.95]">{children}</h2>
    </Reveal>
  )
}

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [percent, setPercent] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const textRefs = useRef<(HTMLHeadingElement | null)[]>([])
  const horizontalRef = useRef<HTMLDivElement>(null)
  const horizontalWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Preloader Logic
    let count = 0
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 15) + 5
      if (count >= 100) {
        count = 100
        clearInterval(interval)
        setTimeout(() => setLoading(false), 500)
      }
      setPercent(count)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (loading) return

    let ctx: gsap.Context | undefined
    // Allow DOM to render
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        // 1. Hero Animation
        gsap.fromTo(textRefs.current,
          { y: '100%', opacity: 0, rotateZ: 2 },
          { y: '0%', opacity: 1, rotateZ: 0, duration: 1.6, stagger: 0.12, ease: 'power4.out', delay: 0.1 }
        )

        // 2. Horizontal Scroll
        if (horizontalRef.current && horizontalWrapperRef.current) {
          const sections = gsap.utils.toArray('.horizontal-item')

          gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: horizontalWrapperRef.current,
              pin: true,
              scrub: 1,
              snap: 1 / (sections.length - 1),
              end: () => "+=" + horizontalWrapperRef.current!.offsetWidth * sections.length
            }
          })
        }

        // 3. Number Counter Animation
        const statNumbers = gsap.utils.toArray('.stat-number') as HTMLElement[]
        statNumbers.forEach((el) => {
          const target = parseInt(el.getAttribute('data-target') || '0', 10)
          gsap.to(el, {
            innerHTML: target,
            duration: 2.5,
            snap: { innerHTML: 1 },
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%"
            }
          })
        })
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      ctx?.revert()
    }
  }, [loading])

  const visibleTestimonials = [
    testimonials[activeTestimonial],
    testimonials[(activeTestimonial + 1) % testimonials.length]
  ]

  return (
    <main className="bg-[#050507] text-[#f5f5f5]">
      {/* 1. Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col justify-end p-6 md:p-12 bg-[#050507] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="aurora w-[60vw] h-[60vw] -top-[20vw] -right-[20vw] bg-[#01a0e2]/20" />
            <div className="relative flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-0">
              <div className="font-sans font-bold text-[14vw] sm:text-[10vw] md:text-[8vw] tracking-tighter uppercase leading-[0.85] md:leading-none">
                FINNOVATOR<br className="md:hidden" /><span className="text-gradient">TECH</span>
              </div>
              <div className="font-mono text-4xl md:text-6xl text-white font-light tabular-nums self-end md:self-auto">{percent}<span className="text-zinc-600">%</span></div>
            </div>
            <div className="relative w-full h-px bg-zinc-800 mt-8 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#01a0e2] to-[#6d7cff] shadow-[0_0_15px_rgba(1,160,226,0.8)]"
                style={{ width: `${percent}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="aurora w-[55vw] h-[55vw] -top-[15vw] left-1/2 -translate-x-1/2 bg-[#01a0e2]/25" />
        <div className="aurora w-[30vw] h-[30vw] bottom-0 -left-[10vw] bg-[#6d7cff]/20" style={{ animationDelay: '-8s' }} />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] opacity-50 pointer-events-none mix-blend-screen">
          <HeroCanvas />
        </div>

        <div className="relative z-10 w-full flex flex-col items-center text-center pt-28 pb-40">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={loading ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 inline-flex items-center gap-3 rounded-full glass pl-2 pr-4 py-1.5"
          >
            <span className="rounded-full bg-[#01a0e2]/15 border border-[#01a0e2]/30 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#5ccdfb]">Est. 2016</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-300">Digital Innovation Studio</span>
          </motion.div>

          <div className="overflow-hidden pb-2">
            <h1 ref={el => { textRefs.current[0] = el }} className="text-[17vw] md:text-[12.5vw] leading-[0.82] font-bold tracking-tighter uppercase text-white">WE BUILD</h1>
          </div>
          <div className="overflow-hidden pb-2">
            <h1 ref={el => { textRefs.current[1] = el }} className="text-[17vw] md:text-[12.5vw] leading-[0.82] font-bold tracking-tighter uppercase text-outline">DIGITAL</h1>
          </div>
          <div className="overflow-hidden pb-2">
            <h1 ref={el => { textRefs.current[2] = el }} className="text-[17vw] md:text-[12.5vw] leading-[0.82] font-bold tracking-tighter text-white">
              <span className="serif-accent text-gradient pr-[0.08em]">futures.</span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={loading ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="/contact" className="btn-primary group">
              Start a Project <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-500" />
            </Link>
            <Link href="/portfolio" className="btn-ghost">View Our Work</Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 z-20 border-t border-white/5 bg-gradient-to-t from-black/80 to-transparent">
          <p className="max-w-md font-mono text-xs uppercase leading-loose tracking-widest text-zinc-400">
            A premium innovation studio engineering platforms that refuse to ship ordinary.
          </p>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white">
            <span>Scroll to explore</span>
            <span className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center">
              <ArrowDownRight size={14} className="animate-bounce" />
            </span>
          </div>
        </div>
      </section>

      {/* 3. About */}
      <section className="py-32 md:py-44 px-6 md:px-12 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal>
            <span className="eyebrow mb-10">01 / Who We Are</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[1.02] mb-8">
              We engineer the <span className="serif-accent text-gradient">impossible</span> for modern businesses.
            </h2>
            <p className="font-mono text-sm md:text-base text-zinc-400 leading-relaxed mb-10 max-w-lg">
              Founded in 2016, Finnovator Tech is a collective of visionary engineers, designers, and strategists. We believe that technology should not just function; it should feel inevitable, powerful, and profoundly human. We build the digital backbone for companies that lead their industries.
            </p>
            <Link href="/about" className="btn-ghost group">
              Discover Our Culture <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-500" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className={i % 2 === 1 ? 'mt-12' : ''}>
                <SpotlightCard className="rounded-3xl p-7 md:p-9 h-full">
                  <div className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tighter font-sans">
                    <span className="stat-number tabular-nums" data-target={s.target}>0</span>
                    <span className="text-[#01a0e2]">{s.suffix}</span>
                  </div>
                  <div className="hairline mb-4" />
                  <span className="font-mono text-[11px] uppercase text-zinc-500 tracking-[0.18em]">{s.label}</span>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Capabilities Bento */}
      <section className="py-32 px-6 md:px-12 bg-[#08090d] border-t border-white/5 relative overflow-hidden">
        <div className="aurora w-[40vw] h-[40vw] top-1/3 -right-[15vw] bg-[#01a0e2]/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <SectionHeading eyebrow="02 / Capabilities">
              The <span className="serif-accent text-zinc-500">Engine</span> Room.
            </SectionHeading>
            <Reveal delay={0.1}>
              <Link href="/services" className="btn-ghost group">
                All Services <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-500" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:auto-rows-[340px]">
            {bentoFeatures.map((feat, i) => {
              const Icon = feat.icon
              return (
                <Reveal key={feat.title} delay={i * 0.08} className={`${feat.span} h-full`}>
                  <SpotlightCard className="group rounded-[28px] p-9 md:p-11 h-full min-h-[300px] flex flex-col justify-between overflow-hidden">
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-2xl border border-white/10 bg-gradient-to-br from-[#01a0e2]/20 to-transparent flex items-center justify-center">
                        <Icon size={24} className="text-[#5ccdfb]" />
                      </div>
                      <span className="font-mono text-xs text-zinc-600">0{i + 1}</span>
                    </div>
                    <div className="relative z-10 max-w-md">
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{feat.title}</h3>
                      <p className="font-mono text-sm leading-relaxed text-zinc-400 mb-6">{feat.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {feat.tags.map(t => (
                          <span key={t} className="px-3 py-1 rounded-full border border-white/10 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">{t}</span>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Selected Work (Horizontal Scroll) */}
      <section ref={horizontalWrapperRef} className="h-screen w-full bg-[#050507] overflow-hidden flex items-center border-y border-white/5 relative">
        <div className="absolute top-24 md:top-28 left-6 md:left-12 z-20">
          <span className="eyebrow">03 / Selected Work</span>
        </div>
        <div ref={horizontalRef} className="flex h-[72vh]" style={{ width: `${(projects.length + 1) * 100}vw` }}>
          {projects.map((project, idx) => (
            <div key={project.title} className="horizontal-item w-screen h-full flex items-center justify-center px-6 md:px-12">
              <div className="w-full h-full max-w-7xl flex flex-col md:flex-row items-center gap-10 md:gap-12">
                <div className="w-full md:w-5/12 shrink-0 space-y-7 z-10">
                  <div className="flex items-center gap-4 font-mono text-xs text-zinc-500">
                    <span className="text-white">0{idx + 1}</span>
                    <span className="w-10 h-px bg-zinc-700" />
                    <span>0{projects.length}</span>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full border border-[#01a0e2]/30 bg-[#01a0e2]/10 font-mono text-[10px] uppercase tracking-[0.16em] text-[#5ccdfb]">{project.category}</span>
                  <h3 className="text-5xl md:text-6xl lg:text-[4.5vw] leading-[0.9] font-bold tracking-tighter uppercase break-words">{project.title}</h3>
                  <p className="font-mono text-sm md:text-base text-zinc-400 leading-relaxed border-l border-[#01a0e2]/50 pl-5 max-w-sm">
                    {project.problem}
                  </p>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary group">
                      View Live Site <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-500" />
                    </a>
                  ) : (
                    <button className="btn-primary" disabled>Coming Soon</button>
                  )}
                </div>
                <div className="w-full md:w-7/12 shrink-0 flex items-center justify-center">
                  <div className="w-full rounded-[24px] p-2 glass shadow-[0_40px_120px_-40px_rgba(1,160,226,0.45)] group" data-cursor="hover">
                    <div className="flex items-center gap-1.5 px-3 py-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                      <span className="ml-3 flex-1 max-w-[240px] h-5 rounded-full bg-white/[0.04] border border-white/5 font-mono text-[10px] text-zinc-500 flex items-center px-3 truncate">
                        {project.link ? project.link.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'coming soon'}
                      </span>
                    </div>
                    <div className="w-full aspect-video relative overflow-hidden rounded-[18px] bg-zinc-900">
                      <div className="absolute inset-0 bg-cover bg-top transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" style={{ backgroundImage: `url('${project.image}')` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* View More Slide */}
          <div className="horizontal-item w-screen h-full flex flex-col items-center justify-center px-6 md:px-12 text-center space-y-8 relative">
            <div className="aurora w-[40vw] h-[40vw] bg-[#01a0e2]/15" />
            <h3 className="relative text-6xl md:text-[7vw] font-bold tracking-tighter uppercase leading-none">View All <span className="serif-accent text-gradient">work</span></h3>
            <p className="relative font-mono text-sm md:text-base text-zinc-400 max-w-md">Explore our full portfolio of high-performance digital products and enterprise solutions.</p>
            <Link href="/portfolio" className="relative btn-primary group !mt-12">
              View More Projects <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Clients Marquee */}
      <section className="py-24 bg-[#08090d] overflow-hidden flex flex-col gap-8">
        <span className="eyebrow justify-center">Trusted By Visionaries</span>
        <div className="mask-fade-x overflow-hidden">
          <motion.div
            className="flex w-max gap-16 items-center font-sans font-bold text-5xl md:text-7xl uppercase tracking-tighter text-zinc-800 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
          >
            {[...clients, ...clients].map((c, i) => (
              <span key={i} className="flex items-center gap-16 hover:text-white transition-colors duration-500">
                {c} <span className="text-[#01a0e2]/40 text-3xl">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Process */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionHeading eyebrow="04 / Our Process">
              How we <span className="serif-accent text-gradient">work</span>
            </SectionHeading>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="hidden md:block absolute top-[38px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01a0e2]/40 to-transparent" />
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="relative">
                  <div className="relative z-10 w-[76px] h-[76px] rounded-full glass flex items-center justify-center mb-8 bg-[#050507]">
                    <span className="font-sans text-xl font-bold text-gradient">{p.step}</span>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 mb-3 block">Phase {p.step}</span>
                  <h4 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">{p.title}</h4>
                  <p className="font-mono text-sm text-zinc-400 leading-relaxed max-w-xs">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Tech Stack */}
      <section className="py-24 bg-[#08090d] border-t border-white/5 overflow-hidden flex flex-col gap-10">
        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
          <span className="eyebrow">05 / Technologies</span>
        </div>
        <div className="mask-fade-x overflow-hidden">
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
          >
            {[...stack, ...stack].map((t, i) => (
              <span key={i} className="glass rounded-full px-7 py-4 font-sans text-xl md:text-2xl font-medium tracking-tight text-zinc-400 hover:text-white hover:border-[#01a0e2]/50 transition-colors whitespace-nowrap">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden relative">
        <div className="aurora w-[40vw] h-[40vw] top-0 -left-[15vw] bg-[#6d7cff]/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <SectionHeading eyebrow="06 / Testimonials">
              Client <span className="serif-accent text-gradient">voices</span>
            </SectionHeading>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === activeTestimonial ? 'w-10 bg-[#01a0e2]' : 'w-4 bg-white/15 hover:bg-white/30'}`}
                />
              ))}
            </div>
          </div>

          <div className="relative min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                {visibleTestimonials.map((t) => (
                  <SpotlightCard key={t.author} className="rounded-[28px] p-10 md:p-14 flex flex-col justify-between min-h-[340px]">
                    <div className="flex items-center justify-between mb-10">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-[#01a0e2] fill-[#01a0e2]" />)}
                      </div>
                      <Quote size={32} className="text-white/10" />
                    </div>
                    <p className="text-2xl md:text-[1.75rem] font-medium leading-snug tracking-tight mb-10 text-zinc-100">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#01a0e2] to-[#6d7cff] flex items-center justify-center font-sans font-bold text-sm">
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-sans font-semibold text-white">{t.author}</div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">{t.role}</div>
                      </div>
                    </div>
                  </SpotlightCard>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="py-32 px-6 md:px-12 bg-[#08090d] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <SectionHeading eyebrow="07 / FAQs" center>
              Questions<span className="serif-accent text-gradient">?</span>
            </SectionHeading>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const open = openFaq === i
              return (
                <Reveal key={faq.q} delay={i * 0.05}>
                  <div className={`rounded-2xl border transition-colors duration-500 ${open ? 'border-[#01a0e2]/30 bg-[#01a0e2]/[0.04]' : 'border-white/8 bg-white/[0.02] hover:border-white/15'}`}>
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full flex items-center justify-between gap-6 p-6 md:p-7 text-left font-sans font-semibold text-lg md:text-xl tracking-tight"
                      aria-expanded={open}
                    >
                      {faq.q}
                      <span className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500 ${open ? 'rotate-45 bg-[#01a0e2] border-[#01a0e2]' : 'border-white/15'}`}>
                        <Plus size={16} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 md:px-7 pb-7 font-mono text-sm text-zinc-400 leading-relaxed max-w-2xl">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 11. Quick Contact */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
        <div className="aurora w-[45vw] h-[45vw] -bottom-[15vw] -right-[10vw] bg-[#01a0e2]/15" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal>
            <span className="eyebrow mb-8">Ready to Start?</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.95] mb-8">Drop us a <span className="serif-accent text-gradient">line.</span></h2>
            <p className="font-mono text-sm md:text-base text-zinc-400 max-w-md leading-relaxed mb-10">
              Have a project in mind? Fill out the quick form and our team will get back to you within 24 hours to schedule a discovery call.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {['bg-[#01a0e2]', 'bg-[#6d7cff]', 'bg-[#0172b1]'].map((c, i) => (
                  <span key={i} className={`w-10 h-10 rounded-full ${c} border-2 border-[#050507]`} />
                ))}
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">Avg. response · under 24h</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-[28px] p-8 md:p-10 shadow-[0_40px_120px_-50px_rgba(1,160,226,0.5)]">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="qc-name" className="field-label">Name</label>
                    <input id="qc-name" type="text" className="field" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="qc-email" className="field-label">Email</label>
                    <input id="qc-email" type="email" className="field" placeholder="you@company.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="qc-msg" className="field-label">Message</label>
                  <textarea id="qc-msg" className="field resize-none min-h-[140px]" placeholder="How can we help?"></textarea>
                </div>
                <button className="btn-primary w-full group">
                  Send Inquiry <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
