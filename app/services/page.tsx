'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Code, AppWindow, Smartphone, PenTool, CheckCircle2 } from 'lucide-react'

export default function ServicesPage() {
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

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: Code,
      desc: 'Building robust, scalable, and secure web solutions designed to handle high traffic seamlessly.',
      features: ['Microservices Architecture', 'Cloud-Native Deployments', 'API Development & Integration', 'High-Performance Databases']
    },
    {
      id: 'web-application',
      title: 'Web Application',
      icon: AppWindow,
      desc: 'Crafting powerful, responsive web applications that captivate users and drive engagement.',
      features: ['Progressive Web Apps (PWAs)', 'Single Page Applications (SPAs)', 'Real-time Dashboards', 'Enterprise Portals']
    },
    {
      id: 'mobile-application',
      title: 'Mobile Application',
      icon: Smartphone,
      desc: 'Developing seamless mobile experiences for iOS and Android that put your business in their pockets.',
      features: ['Native iOS (Swift)', 'Native Android (Kotlin)', 'Cross-Platform (React Native)', 'Mobile Strategy']
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      icon: PenTool,
      desc: 'Designing intuitive, aesthetic interfaces that merge beautiful visuals with exceptional user journeys.',
      features: ['User Research & Testing', 'Wireframing & Prototyping', 'Design Systems', 'Interaction Design']
    }
  ]

  return (
    <main className="bg-[#050505] text-[#f5f5f5] min-h-screen selection:bg-white selection:text-black pt-32">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative px-6 md:px-12 py-20 flex flex-col items-start justify-center min-h-[60vh] border-b border-white/5">
        <span className="eyebrow mb-8">Capabilities</span>
        <div className="overflow-hidden pb-4">
          <h1 ref={el => { textRefs.current[0] = el }} className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase text-white">ENGINEERING</h1>
        </div>
        <div className="overflow-hidden pb-4">
          <h1 ref={el => { textRefs.current[1] = el }} className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase text-outline">AT THE</h1>
        </div>
        <div className="overflow-hidden pb-4">
          <h1 ref={el => { textRefs.current[2] = el }} className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase text-white">EDGE.</h1>
        </div>
        
        <p className="mt-12 font-mono text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed">
          From complex backend architectures to award-winning frontend experiences, we provide end-to-end digital engineering services tailored for maximum impact.
        </p>
      </section>

      {/* Detailed Services */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((svc, idx) => {
            const Icon = svc.icon
            const isEven = idx % 2 === 0
            return (
              <div key={svc.id} className={`flex flex-col md:flex-row gap-16 md:gap-24 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full relative aspect-square md:aspect-auto md:h-[500px] bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-duration-700" />
                  <Icon size={120} className="text-zinc-800 group-hover:text-zinc-600 transition-colors duration-700" />
                </div>
                
                <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/10">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">{svc.title}</h2>
                  <p className="font-sans text-xl text-zinc-400 leading-relaxed">
                    {svc.desc}
                  </p>
                  
                  <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {svc.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-zinc-500" />
                        <span className="font-mono text-sm text-zinc-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 bg-zinc-900 border-t border-white/5 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">Ready to scale?</h2>
        <p className="font-mono text-zinc-400 mb-12 max-w-lg mx-auto">
          Let's discuss how our engineering capabilities can accelerate your business objectives.
        </p>
        <button className="px-8 py-4 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-zinc-200 transition-colors rounded-full">
          Start a Project
        </button>
      </section>

    </main>
  )
}
