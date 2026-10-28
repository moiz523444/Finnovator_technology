'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'

const cases = [
  {
    title: "Core 1 Consulting",
    category: "Full Stack Web",
    type: "Web",
    image: "/project/core1.jpg",
    link: "https://core1.co/",
    problem: "A high-end consulting firm needed a digital presence that matched their premium offline reputation and streamlined lead generation.",
    solution: "Developed a performance-focused React.js platform with modern animations and a highly optimized SEO structure.",
    techStack: ["React.js", "Framer Motion", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Edge Finance",
    category: "Corporate Platform",
    type: "Web",
    image: "/project/edge-finance.jpg",
    link: "https://edge.fin.finnovator.com.sa/",
    problem: "A financial institution needed a modern, secure, and professional web presence to attract corporate clients.",
    solution: "Developed a custom WordPress platform with a clean design, optimized for speed, reliability, and lead generation.",
    techStack: ["WordPress", "PHP", "Custom CSS", "SEO"],
  },
  {
    title: "Finnovator ME",
    category: "Fintech Platform",
    type: "Web",
    image: "/project/finnovator.jpg",
    link: "https://www.finnovator.me/",
    problem: "The client required a complex dashboard to display real-time financial metrics for Middle Eastern markets.",
    solution: "Built a high-performance dashboard using Next.js for SSR, ensuring fast data fetching and a responsive user interface.",
    techStack: ["Next.js", "Chart.js", "REST APIs", "TypeScript"],
  },
  {
    title: "Merchant Automobiles",
    category: "E-Commerce",
    type: "E-Commerce",
    image: "/project/merchant.png",
    link: "https://demo.perfumesaaz.com/",
    problem: "A luxury fragrance brand needed a premium online store to reflect their high-end products and streamline sales.",
    solution: "Developed a custom WordPress e-commerce solution with a sleek design and optimized user experience.",
    techStack: ["WordPress", "WooCommerce", "PHP", "Custom CSS"],
  },
  {
    title: "Finnovator SA",
    category: "Enterprise Web",
    type: "Web",
    image: "/project/finnovator_sa.jpg",
    link: "https://www.finnovator.com.sa/",
    problem: "An enterprise-level financial service needed a robust, secure, and multilingual platform for the Saudi market.",
    solution: "Architected a scalable React application with internationalization and high-security protocols for sensitive data.",
    techStack: ["React.js", "i18next", "Auth0", "Material UI"],
  },
  {
    title: "FurFusion Studio",
    category: "Creative WordPress",
    type: "Web",
    image: "/project/furfusion.jpg",
    link: "https://furfusionstudio.com/",
    problem: "A creative agency needed a unique, fast-loading portfolio site that allowed easy content management.",
    solution: "Customized a headless WordPress solution with a refined UI, focusing on high-quality image rendering and smooth transitions.",
    techStack: ["WordPress", "Elementor", "Custom CSS", "PHP"],
  },
  {
    title: "VinsDaddy",
    category: "E-Commerce",
    type: "E-Commerce",
    image: "/project/vinsdaddy.jpg",
    link: "https://vinsdaddy.com/",
    problem: "An online store needed a high-conversion checkout flow and a premium brand aesthetic to stand out.",
    solution: "Developed a custom E-commerce experience with optimized product pages and a streamlined payment gateway integration.",
    techStack: ["WordPress", "WooCommerce", "JS", "MySQL"],
  },
  {
    title: "Duffa Website",
    category: "Custom Web App",
    type: "Web",
    image: "/project/duffa.jpg",
    link: "",
    problem: "The client needed a lightweight, high-performance landing page with interactive elements to showcase their services.",
    solution: "Built a lightning-fast static site using vanilla JS and modern CSS techniques for maximum performance scores.",
    techStack: ["HTML5", "CSS3", "JavaScript", "GSAP"],
  },
  {
    title: "Tayaseer Finance App",
    category: "Financial Mobile App",
    type: "Mobile",
    image: "/project/tayaseer.png",
    link: "",
    problem: "A financial institution needed a secure, intuitive mobile application to streamline user onboarding, real-time banking, and seamless transactions.",
    solution: "Developed a robust cross-platform mobile application using React Native, ensuring seamless performance, high-grade security, and a beautiful UI.",
    techStack: ["React Native", "TypeScript", "Redux", "Firebase"],
  },
  {
    title: "Edge Loan Application",
    category: "Loan Management Mobile App",
    type: "Mobile",
    image: "/project/edge.png",
    link: "",
    problem: "A lending service required a fast, user-friendly mobile platform for clients to apply for loans, track approvals, and manage their payments on the go.",
    solution: "Built an intuitive native mobile application using Flutter, featuring fluid animations, quick application flows, and a seamless user experience.",
    techStack: ["Flutter", "Dart", "SQLite", "GraphQL"],
  }
]

const filters = ['All', 'Web', 'E-Commerce', 'Mobile']

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All')
  const visible = useMemo(() => filter === 'All' ? cases : cases.filter(c => c.type === filter), [filter])

  return (
    <main className="bg-[#050507] text-[#f5f5f5] min-h-screen">
      <PageHero
        eyebrow="Selected Work"
        lines={['OUR', 'DIGITAL', 'MASTERPIECES.']}
        description="Explore a curated selection of platforms, applications, and systems we've engineered for industry leaders worldwide."
      />

      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16">
            <div className="inline-flex flex-wrap gap-1 p-1 rounded-full glass">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`relative px-5 py-2.5 rounded-full font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${filter === f ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
                >
                  {filter === f && (
                    <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-[#01a0e2] to-[#0172b1]" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                  )}
                  <span className="relative">{f}</span>
                </button>
              ))}
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">{visible.length} Projects</span>
          </div>

          {/* Case Studies Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-20">
            <AnimatePresence mode="popLayout">
              {visible.map((project, idx) => (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col gap-7"
                >
                  <div className="relative rounded-[28px] p-2 glass" data-cursor="hover">
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[22px] bg-zinc-900">
                      <div
                        className="absolute inset-0 bg-cover bg-top transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-200">
                        {project.category}
                      </span>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Visit ${project.title}`}
                          className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#01a0e2] flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_10px_30px_-5px_rgba(1,160,226,0.7)]"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="px-2 space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase leading-none">{project.title}</h3>
                      <span className="font-mono text-xs text-zinc-600 pt-2">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <h4 className="field-label !mb-2">The Challenge</h4>
                        <p className="font-mono text-sm text-zinc-400 leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="field-label !mb-2">The Solution</h4>
                        <p className="font-mono text-sm text-zinc-400 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                          {tech}
                        </span>
                      ))}
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#5ccdfb] hover:text-white transition-colors">
                          Live Site <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-600">Coming Soon</span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <Reveal className="max-w-7xl mx-auto text-center">
          <div className="hairline mb-24" />
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-10">Your project <span className="serif-accent text-gradient">next?</span></h2>
          <a href="/contact" className="btn-primary group">
            Start a Project <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-500" />
          </a>
        </Reveal>
      </section>
    </main>
  )
}
