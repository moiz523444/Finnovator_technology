'use client'

import Link from 'next/link'
import { Code, AppWindow, Smartphone, PenTool, Check, ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SpotlightCard } from '@/components/spotlight-card'

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

export default function ServicesPage() {
  return (
    <main className="bg-[#050507] text-[#f5f5f5] min-h-screen">
      <PageHero
        eyebrow="Capabilities"
        lines={['ENGINEERING', 'AT THE', 'EDGE.']}
        description="From complex backend architectures to award-winning frontend experiences, we provide end-to-end digital engineering services tailored for maximum impact."
      />

      {/* Detailed Services */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-28 md:space-y-40">
          {services.map((svc, idx) => {
            const Icon = svc.icon
            const isEven = idx % 2 === 0
            return (
              <div key={svc.id} className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                <Reveal className="flex-1 w-full">
                  <SpotlightCard className="group relative aspect-square md:aspect-auto md:h-[520px] rounded-[32px] overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-grid opacity-70" />
                    <div className="aurora w-[70%] h-[70%] bg-[#01a0e2]/20" />
                    <div className="absolute inset-[18%] rounded-full border border-white/5" />
                    <div className="absolute inset-[30%] rounded-full border border-[#01a0e2]/15" />
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-[36px] glass flex items-center justify-center shadow-[0_30px_80px_-20px_rgba(1,160,226,0.6)] group-hover:scale-105 transition-transform duration-700">
                      <Icon size={64} strokeWidth={1.25} className="text-[#5ccdfb]" />
                    </div>
                    <span className="absolute top-8 left-8 font-mono text-xs text-zinc-600">0{idx + 1} / 0{services.length}</span>
                  </SpotlightCard>
                </Reveal>

                <Reveal delay={0.1} className="flex-1 space-y-8">
                  <span className="eyebrow">Service 0{idx + 1}</span>
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.95]">{svc.title}</h2>
                  <p className="font-sans text-xl text-zinc-400 leading-relaxed max-w-lg">{svc.desc}</p>

                  <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {svc.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#01a0e2]/15 border border-[#01a0e2]/30 flex items-center justify-center shrink-0">
                          <Check size={12} className="text-[#5ccdfb]" />
                        </span>
                        <span className="font-mono text-sm text-zinc-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 pb-32">
        <Reveal className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[36px] glass px-8 py-24 md:py-32 text-center">
            <div className="absolute inset-0 bg-grid" />
            <div className="aurora w-[60%] h-[120%] left-1/2 -translate-x-1/2 -top-1/2 bg-[#01a0e2]/25" />
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">Ready to <span className="serif-accent text-gradient">scale?</span></h2>
              <p className="font-mono text-zinc-400 mb-12 max-w-lg mx-auto">
                Let's discuss how our engineering capabilities can accelerate your business objectives.
              </p>
              <Link href="/contact" className="btn-primary group">
                Start a Project <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
