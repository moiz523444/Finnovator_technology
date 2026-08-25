'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
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

  return (
    <main className="bg-[#050505] text-[#f5f5f5] min-h-screen selection:bg-white selection:text-black pt-32">

      {/* Hero Section */}
      <section ref={heroRef} className="relative px-6 md:px-12 py-20 flex flex-col items-start justify-center min-h-[60vh] border-b border-white/5">
        <span className="eyebrow mb-8">Let's Connect</span>
        <div className="overflow-hidden pb-4">
          <h1 ref={el => { textRefs.current[0] = el }} className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase text-white">BUILD</h1>
        </div>
        <div className="overflow-hidden pb-4">
          <h1 ref={el => { textRefs.current[1] = el }} className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase text-outline">THE</h1>
        </div>
        <div className="overflow-hidden pb-4">
          <h1 ref={el => { textRefs.current[2] = el }} className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase text-white">FUTURE.</h1>
        </div>

        <p className="mt-12 font-mono text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Whether you have a fully formed RFP or just a napkin sketch, we want to hear about it. Drop us a line and let's engineer something impossible together.
        </p>
      </section>

      {/* Contact Content */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32">

          {/* Form */}
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-12">Send a Message</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-zinc-500 tracking-widest">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-white transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-zinc-500 tracking-widest">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-white transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase text-zinc-500 tracking-widest">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-white transition-colors" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase text-zinc-500 tracking-widest">Company / Organization</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-white transition-colors" placeholder="Acme Corp" />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase text-zinc-500 tracking-widest">Project Details</label>
                <textarea className="w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-white transition-colors resize-none min-h-[150px]" placeholder="Tell us about your goals..."></textarea>
              </div>

              <button className="px-10 py-5 bg-transparent border border-white/20 hover:border-white text-white font-mono text-sm uppercase tracking-widest font-bold transition-colors rounded-full mt-8 w-full md:w-auto">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 order-1 lg:order-2 space-y-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-12">Global Offices</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-zinc-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl mb-2">New York (HQ)</h4>
                    <p className="font-mono text-zinc-400">1200 Innovation Drive<br />Suite 400<br />New York, NY 10011</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-zinc-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl mb-2">London</h4>
                    <p className="font-mono text-zinc-400">Level 39, One Canada Square<br />Canary Wharf<br />London E14 5AB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-16 border-t border-white/10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-12">Direct Lines</h2>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Mail className="text-zinc-500" />
                  <a href="mailto:info@finnovatortech.com" className="relative group font-mono text-lg hover:text-white transition-colors text-zinc-300">
                    info@finnovatortech.com
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-zinc-500" />
                  <a href="tel:+15551234567" className="relative group font-mono text-lg hover:text-white transition-colors text-zinc-300">
                    +1 (555) 123-4567
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
