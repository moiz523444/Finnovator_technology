'use client'

import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SpotlightCard } from '@/components/spotlight-card'

const offices = [
  { city: 'Karachi (HQ)', lines: ['Burj Ul Minal, Office # 506', 'Gulistan-e-Johar', 'Karachi, Pakistan'] },
]

export default function ContactPage() {
  return (
    <main className="bg-[#050507] text-[#f5f5f5] min-h-screen">
      <PageHero
        eyebrow="Let's Connect"
        lines={['BUILD', 'THE', 'FUTURE.']}
        description="Whether you have a fully formed RFP or just a napkin sketch, we want to hear about it. Drop us a line and let's engineer something impossible together."
      />

      <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="aurora w-[45vw] h-[45vw] top-1/4 -left-[15vw] bg-[#01a0e2]/10" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Form */}
          <Reveal className="lg:col-span-7 order-2 lg:order-1">
            <div className="glass rounded-[32px] p-8 md:p-12 shadow-[0_40px_120px_-50px_rgba(1,160,226,0.5)]">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-3">Send a <span className="serif-accent text-gradient">message</span></h2>
              <p className="font-mono text-sm text-zinc-500 mb-10">Our team will get back to you within 24 hours.</p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-first" className="field-label">First Name</label>
                    <input id="c-first" type="text" className="field" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="c-last" className="field-label">Last Name</label>
                    <input id="c-last" type="text" className="field" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-email" className="field-label">Email Address</label>
                    <input id="c-email" type="email" className="field" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label htmlFor="c-company" className="field-label">Company / Organization</label>
                    <input id="c-company" type="text" className="field" placeholder="Acme Corp" />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-details" className="field-label">Project Details</label>
                  <textarea id="c-details" className="field resize-none min-h-[170px]" placeholder="Tell us about your goals..."></textarea>
                </div>

                <button className="btn-primary w-full md:w-auto group !px-10">
                  Submit Inquiry <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </Reveal>

          {/* Contact Info */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
            <Reveal>
              <span className="eyebrow mb-6">Our Office</span>
            </Reveal>
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.08}>
                <SpotlightCard className="rounded-[24px] p-7 flex items-start gap-5">
                  <span className="w-11 h-11 rounded-xl border border-white/10 bg-gradient-to-br from-[#01a0e2]/20 to-transparent flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#5ccdfb]" />
                  </span>
                  <div>
                    <h4 className="font-bold text-xl mb-2 tracking-tight">{o.city}</h4>
                    <p className="font-mono text-sm text-zinc-400 leading-relaxed">
                      {o.lines.map((l, j) => <span key={j} className="block">{l}</span>)}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}

            <Reveal delay={0.16}>
              <span className="eyebrow mt-12 mb-6">Direct Lines</span>
            </Reveal>
            {[
              { icon: Mail, label: 'info@finnovatortech.com', href: 'mailto:info@finnovatortech.com' },
              { icon: Phone, label: '+92 328 2333777', href: 'tel:+923282333777' },
            ].map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.href} delay={0.2 + i * 0.08}>
                  <a href={c.href} className="group glass rounded-[24px] p-6 flex items-center gap-5 hover:border-[#01a0e2]/40 transition-colors">
                    <span className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#5ccdfb]" />
                    </span>
                    <span className="font-mono text-base md:text-lg text-zinc-200 group-hover:text-white transition-colors">{c.label}</span>
                    <ArrowUpRight size={18} className="ml-auto text-zinc-500 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
                  </a>
                </Reveal>
              )
            })}
          </div>

        </div>
      </section>
    </main>
  )
}
