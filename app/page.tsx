'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, ArrowDownRight, Menu, Code, AppWindow, Smartphone, PenTool, Star, Plus } from 'lucide-react'
import { Magnetic } from '@/components/magnetic'
import { HeroCanvas, GlobeCanvas } from '@/components/agency-canvas'

gsap.registerPlugin(ScrollTrigger)

const bentoFeatures = [
  { title: 'Web Development', desc: 'Building robust, scalable, and secure web solutions designed to handle high traffic seamlessly.', span: 'col-span-1 md:col-span-2', bg: 'bg-zinc-900', icon: Code },
  { title: 'Web Application', desc: 'Crafting powerful, responsive web applications that captivate users and drive engagement.', span: 'col-span-1', bg: 'bg-zinc-800', icon: AppWindow },
  { title: 'Mobile Application', desc: 'Developing seamless mobile experiences for iOS and Android that put your business in their pockets.', span: 'col-span-1', bg: 'bg-zinc-900', icon: Smartphone },
  { title: 'UI/UX Design', desc: 'Designing intuitive, aesthetic interfaces that merge beautiful visuals with exceptional user journeys.', span: 'col-span-1 md:col-span-2', bg: 'bg-zinc-800', icon: PenTool }
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
  {
    title: "Merchant Automobiles",
    category: "E-Commerce",
    image: "/project/merchant.png",
    link: "https://demo.perfumesaaz.com/",
    problem: "A premium online store to reflect high-end products and streamline sales.",
  },
  {
    title: "Finnovator SA",
    category: "Enterprise Web",
    image: "/project/finnovator_sa.jpg",
    link: "https://www.finnovator.com.sa/",
    problem: "Robust, secure, and multilingual platform for the Saudi market.",
  },
  {
    title: "FurFusion Studio",
    category: "Creative WordPress",
    image: "/project/furfusion.jpg",
    link: "https://furfusionstudio.com/",
    problem: "Unique, fast-loading portfolio site that allowed easy content management.",
  },
  {
    title: "VinsDaddy",
    category: "E-Commerce",
    image: "/project/vinsdaddy.jpg",
    link: "https://vinsdaddy.com/",
    problem: "High-conversion checkout flow and a premium brand aesthetic.",
  },
  {
    title: "Duffa Website",
    category: "Custom Web App",
    image: "/project/duffa.jpg",
    link: "",
    problem: "Lightweight, high-performance landing page with interactive elements.",
  },
  {
    title: "Tayaseer Finance App",
    category: "Financial Mobile App",
    image: "/project/tayaseer.png",
    link: "",
    problem: "Secure, intuitive mobile application to streamline user onboarding.",
  },
  {
    title: "Edge Loan Application",
    category: "Loan Management Mobile App",
    image: "/project/edge.png",
    link: "",
    problem: "Fast, user-friendly mobile platform for clients to apply for loans.",
  }
]

const testimonials = [
  { text: "Finnovator Tech completely transformed our legacy architecture. Their engineering speed and attention to scalable design is unparalleled.", author: "James T., CTO at NOVA" },
  { text: "The web application they delivered not only looks stunning but handles our massive traffic spikes without a single hiccup.", author: "Sarah W., VP Product at MIRA" },
  { text: "Their ability to understand our complex business logic and translate it into a seamless user experience is truly remarkable.", author: "Michael R., CEO at NEXUS" },
  { text: "Working with Finnovator Tech felt like an extension of our own team. They are proactive, transparent, and brilliant.", author: "Emily K., Director at VORTEX" },
  { text: "From the initial discovery to the final deployment, the entire process was flawless. The best development partner we've ever had.", author: "David L., Founder at SYNAPSE" }
]

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [percent, setPercent] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  
  const heroRef = useRef<HTMLElement>(null)
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([])
  
  const aboutRef = useRef<HTMLElement>(null)
  
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
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (loading) return

    // Allow DOM to render
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // 1. Hero Animation
        gsap.fromTo(textRefs.current, 
          { y: '100%', opacity: 0, rotateZ: 2 },
          { y: '0%', opacity: 1, rotateZ: 0, duration: 1.8, stagger: 0.15, ease: 'power4.out', delay: 0.1 }
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
        const statNumbers = gsap.utils.toArray('.stat-number') as HTMLElement[];
        statNumbers.forEach((el) => {
          const target = parseInt(el.getAttribute('data-target') || '0', 10);
          gsap.to(el, {
            innerHTML: target,
            duration: 2.5,
            snap: { innerHTML: 1 },
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%"
            }
          });
        });
      })
      return () => ctx.revert()
    }, 100)
    
    return () => clearTimeout(timer)
  }, [loading])

  return (
    <main className="bg-[#050505] text-[#f5f5f5] selection:bg-white selection:text-black">
      {/* 1. Advanced Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            className="fixed inset-0 z-[100] flex flex-col justify-end p-6 md:p-12 bg-[#050505]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-0">
              <div className="font-sans font-bold text-[14vw] sm:text-[10vw] md:text-[8vw] tracking-tighter uppercase leading-[0.85] md:leading-none">
                FINNOVATOR<br className="md:hidden" /><span className="text-[#01a0e2] drop-shadow-[0_0_15px_rgba(1,160,226,0.3)]">TECH</span>
              </div>
              <div className="font-mono text-4xl md:text-5xl text-white font-bold self-end md:self-auto">{percent}%</div>
            </div>
            <div className="w-full h-[2px] bg-zinc-800 mt-6 relative overflow-hidden rounded-full">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#01a0e2] shadow-[0_0_15px_rgba(1,160,226,0.6)]"
                style={{ width: `${percent}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* 2. Hero Section (Re-spaced & Centered 3D) */}
      <section ref={heroRef} className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-[#050505]">
        {/* Centered 3D Canvas Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] opacity-40 pointer-events-none mix-blend-screen">
          <HeroCanvas />
        </div>
        
        {/* Adjusted Typography Line Height and Spacing */}
        <div className="relative z-10 w-full flex flex-col items-center text-center space-y-[-1vw] pt-20">
          <div className="overflow-hidden pb-4">
            <h1 ref={el => { textRefs.current[0] = el }} className="text-[18vw] md:text-[14vw] leading-[0.8] font-bold tracking-tighter uppercase text-white">WE BUILD</h1>
          </div>
          <div className="overflow-hidden pb-4">
            <h1 ref={el => { textRefs.current[1] = el }} className="text-[18vw] md:text-[14vw] leading-[0.8] font-bold tracking-tighter uppercase text-outline">DIGITAL</h1>
          </div>
          <div className="overflow-hidden pb-4">
            <h1 ref={el => { textRefs.current[2] = el }} className="text-[18vw] md:text-[14vw] leading-[0.8] font-bold tracking-tighter uppercase text-white">FUTURES.</h1>
          </div>
        </div>

        {/* Bottom Info Bar Aligned Properly */}
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 z-20 border-t border-white/5 bg-gradient-to-t from-black to-transparent">
          <p className="max-w-md font-mono text-xs uppercase leading-loose tracking-widest text-zinc-400">
            A premium innovation studio engineering platforms that refuse to ship ordinary.
          </p>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white">
            <span>Scroll to explore</span>
            <ArrowDownRight size={16} className="animate-bounce" />
          </div>
        </div>
      </section>

      {/* 3. Comprehensive About Us Section */}
      <section ref={aboutRef} className="py-32 md:py-48 px-6 md:px-12 bg-[#050505] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <span className="eyebrow mb-12">01 / Who We Are</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[1.1] mb-8">
                We engineer the <span className="text-[#01a0e2] drop-shadow-[0_0_15px_rgba(1,160,226,0.5)]">impossible</span> for modern businesses.
              </h2>
              <p className="font-mono text-sm md:text-base text-zinc-400 leading-relaxed mb-10 max-w-lg">
                Founded in 2016, Finnovator Tech is a collective of visionary engineers, designers, and strategists. We believe that technology should not just function; it should feel inevitable, powerful, and profoundly human. We build the digital backbone for companies that lead their industries.
              </p>
              <button className="px-8 py-4 border border-white/20 hover:border-white transition-colors rounded-full font-mono text-xs uppercase tracking-widest" data-cursor="hover">
                Discover Our Culture
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 border border-white/10 bg-white/[0.02] rounded-2xl flex flex-col justify-center">
                <h4 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter"><span className="stat-number" data-target="10">0</span><span className="text-zinc-600">+</span></h4>
                <span className="font-mono text-xs uppercase text-zinc-500 tracking-widest">Years of Excellence</span>
              </div>
              <div className="p-8 border border-white/10 bg-white/[0.02] rounded-2xl flex flex-col justify-center mt-12">
                <h4 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter"><span className="stat-number" data-target="150">0</span><span className="text-zinc-600">+</span></h4>
                <span className="font-mono text-xs uppercase text-zinc-500 tracking-widest">Products Shipped</span>
              </div>
              <div className="p-8 border border-white/10 bg-white/[0.02] rounded-2xl flex flex-col justify-center">
                <h4 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter"><span className="stat-number" data-target="99">0</span><span className="text-zinc-600">%</span></h4>
                <span className="font-mono text-xs uppercase text-zinc-500 tracking-widest">Client Retention</span>
              </div>
              <div className="p-8 border border-white/10 bg-white/[0.02] rounded-2xl flex flex-col justify-center mt-12">
                <h4 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter"><span className="stat-number" data-target="35">0</span><span className="text-zinc-600">+</span></h4>
                <span className="font-mono text-xs uppercase text-zinc-500 tracking-widest">Industry Awards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Capabilities Bento Box */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <span className="eyebrow mb-8">02 / Capabilities</span>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-20">
            The <span className="text-zinc-600">Engine</span> Room.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
            {bentoFeatures.map((feat, i) => {
              const Icon = feat.icon
              return (
                <div key={i} className={`${feat.span} ${feat.bg} rounded-3xl p-10 md:p-12 flex flex-col justify-between relative overflow-hidden group border border-white/5`} data-cursor="hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon size={48} className="text-zinc-600 group-hover:text-white transition-colors" />
                  <div className="relative z-10 max-w-md">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{feat.title}</h3>
                    <p className="font-mono text-sm leading-relaxed text-zinc-400">{feat.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Selected Work (Horizontal Scroll) */}
      <section ref={horizontalWrapperRef} className="h-screen w-full bg-[#050505] overflow-hidden flex items-center border-y border-white/5">
        <div ref={horizontalRef} className="flex h-[75vh]" style={{ width: `400vw` }}>
          {projects.slice(0, 3).map((project, idx) => (
            <div key={idx} className="horizontal-item w-screen h-full flex items-center justify-center px-6 md:px-12">
              <div className="w-full h-full max-w-7xl flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 shrink-0 space-y-8 z-10 pr-0 md:pr-12">
                  <span className="eyebrow">{project.category}</span>
                  <h3 className="text-5xl md:text-6xl lg:text-[4vw] leading-[0.9] font-bold tracking-tighter uppercase break-words hyphens-auto">{project.title}</h3>
                  <p className="font-mono text-sm md:text-base text-zinc-400 uppercase tracking-widest border-l-2 border-zinc-700 pl-4 max-w-sm">
                    {project.problem}
                  </p>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-block px-8 py-4 bg-[#01a0e2] text-white font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#0172b1] hover:shadow-[0_0_20px_rgba(1,160,226,0.4)] transition-all rounded-full mt-4" data-cursor="hover">
                      View Live Site
                    </a>
                  ) : (
                    <button className="px-8 py-4 bg-[#01a0e2] text-white font-mono text-xs uppercase tracking-widest font-bold opacity-50 cursor-not-allowed rounded-full mt-4">
                      Coming Soon
                    </button>
                  )}
                </div>
                <div className="w-full md:w-1/2 shrink-0 flex items-center justify-center p-4">
                  <div className="w-full aspect-video bg-zinc-900 border border-white/10 relative overflow-hidden rounded-3xl shadow-2xl group">
                     <div className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url('${project.image}')` }} />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* View More Slide */}
          <div className="horizontal-item w-screen h-full flex flex-col items-center justify-center px-6 md:px-12 text-center space-y-8">
            <h3 className="text-5xl md:text-[6vw] font-bold tracking-tighter uppercase leading-none">View All <span className="text-[#01a0e2] drop-shadow-[0_0_15px_rgba(1,160,226,0.3)]">Work</span></h3>
            <p className="font-mono text-sm md:text-base text-zinc-400 max-w-md">Explore our full portfolio of high-performance digital products and enterprise solutions.</p>
            <a href="/portfolio" className="inline-flex items-center px-10 py-5 bg-[#01a0e2] text-white font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#0172b1] hover:shadow-[0_0_20px_rgba(1,160,226,0.4)] transition-all rounded-full mt-8" data-cursor="hover">
              View More Projects <ArrowUpRight className="ml-2 -mt-0.5" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 6. Infinite Clients Marquee */}
      <section className="py-24 bg-[#0a0a0a] overflow-hidden whitespace-nowrap flex flex-col gap-6">
        <span className="eyebrow px-6 md:px-12 mb-4">Trusted By Visionaries</span>
        
        <motion.div 
          className="flex gap-12 items-center font-sans font-bold text-5xl md:text-7xl uppercase tracking-tighter text-zinc-800 hover:text-white transition-colors"
          animate={{ x: [0, -1500] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {Array(8).fill('VERDE • ALTO • KINETIC • NORTHSTAR • MONUMENT • ').map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex gap-12 items-center font-sans font-bold text-5xl md:text-7xl uppercase tracking-tighter text-outline opacity-50"
          animate={{ x: [-1500, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        >
          {Array(8).fill('VERDE • ALTO • KINETIC • NORTHSTAR • MONUMENT • ').map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </section>

      {/* 7. Our Process */}
      <section className="py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <span className="eyebrow mb-12">05 / Our Process</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-20">How we work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep diving into your business logic, user needs, and market opportunities.' },
              { step: '02', title: 'Architecture', desc: 'Designing the technical foundation and scalable cloud infrastructure.' },
              { step: '03', title: 'Execution', desc: 'Agile sprints of high-velocity coding, testing, and continuous deployment.' },
              { step: '04', title: 'Scale', desc: 'Monitoring, optimizing, and scaling the system as your user base grows.' }
            ].map((p, i) => (
              <div key={i} className="pt-8 border-t border-white/20">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 block">Phase {p.step}</span>
                <h4 className="text-2xl font-bold tracking-tighter mb-4">{p.title}</h4>
                <p className="font-mono text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Tech Stack */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden flex flex-col gap-12">
        <div className="px-6 md:px-12">
          <span className="eyebrow">06 / Technologies</span>
        </div>
        
        <div className="flex gap-8 items-center font-sans font-bold text-3xl md:text-5xl uppercase tracking-tighter text-zinc-800">
          <motion.div 
            className="flex gap-16 items-center whitespace-nowrap"
            animate={{ x: [0, -2000] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          >
            {Array(5).fill('WORDPRESS • REACT • NEXT JS • NODE.JS • AWS • POSTGRESQL • GRAPHQL • DOCKER • KUBERNETES • TYPESCRIPT • ').map((text, i) => (
              <span key={i} className="hover:text-white transition-colors cursor-default">{text}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <span className="eyebrow mb-12">07 / Testimonials</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-20">Client Voices</h2>
          
          <div className="relative min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {[
                  testimonials[activeTestimonial],
                  testimonials[(activeTestimonial + 1) % testimonials.length]
                ].map((t, i) => (
                  <div key={i} className="p-10 md:p-16 border border-white/10 rounded-3xl bg-zinc-900/30 flex flex-col justify-between min-h-[300px]">
                    <div className="flex gap-1 mb-8">
                      {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-[#01a0e2] fill-[#01a0e2]" />)}
                    </div>
                    <p className="text-2xl md:text-3xl font-medium leading-tight mb-8">"{t.text}"</p>
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">{t.author}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <span className="eyebrow mb-12 text-center block">08 / FAQs</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-20 text-center">Questions?</h2>
          
          <div className="space-y-4">
            {[
              { q: 'What is your typical project timeline?', a: 'Depending on complexity, most enterprise projects range from 3 to 6 months from discovery to launch.' },
              { q: 'Do you provide ongoing maintenance?', a: 'Yes, we offer comprehensive SLA agreements for continuous monitoring, updates, and scaling.' },
              { q: 'Can you integrate with our existing legacy systems?', a: 'Absolutely. A large part of our engineering work involves modernizing and integrating with legacy architectures securely.' },
              { q: 'What is your minimum engagement size?', a: 'Our minimum project engagement starts at $50k to ensure we can dedicate the right senior resources to your success.' }
            ].map((faq, i) => (
              <details key={i} className="group border border-white/10 bg-zinc-900/50 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-xl tracking-tighter">
                  {faq.q}
                  <Plus className="transition-transform group-open:rotate-45" />
                </summary>
                <div className="p-6 pt-0 font-mono text-sm text-zinc-400 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Quick Contact */}
      <section className="py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 items-center">
          <div className="flex-1">
            <span className="eyebrow mb-8">Ready to Start?</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">Drop us a line.</h2>
            <p className="font-mono text-sm md:text-base text-zinc-400 max-w-md leading-relaxed">
              Have a project in mind? Fill out the quick form and our team will get back to you within 24 hours to schedule a discovery call.
            </p>
          </div>
          
          <div className="flex-1 w-full bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-zinc-500 tracking-widest">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-white transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-zinc-500 tracking-widest">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-white transition-colors" placeholder="Your Email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase text-zinc-500 tracking-widest">Message</label>
                <textarea className="w-full bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-white transition-colors resize-none min-h-[100px]" placeholder="How can we help?"></textarea>
              </div>
              <button className="px-10 py-4 bg-[#01a0e2] text-white font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#0172b1] hover:shadow-[0_0_20px_rgba(1,160,226,0.4)] transition-all rounded-full w-full md:w-auto">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  )
}
