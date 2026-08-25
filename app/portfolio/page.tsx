'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'

export default function PortfolioPage() {
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

  const cases = [
    {
      title: "Core 1 Consulting",
      category: "Full Stack Web",
      image: "/project/core1.jpg",
      link: "https://core1.co/",
      problem: "A high-end consulting firm needed a digital presence that matched their premium offline reputation and streamlined lead generation.",
      solution: "Developed a performance-focused React.js platform with modern animations and a highly optimized SEO structure.",
      techStack: ["React.js", "Framer Motion", "Tailwind CSS", "Node.js"],
      color: "from-purple-500/20 to-transparent",
    },
    {
      title: "Edge Finance",
      category: "Corporate Platform",
      image: "/project/edge-finance.jpg",
      link: "https://edge.fin.finnovator.com.sa/",
      problem: "A financial institution needed a modern, secure, and professional web presence to attract corporate clients.",
      solution: "Developed a custom WordPress platform with a clean design, optimized for speed, reliability, and lead generation.",
      techStack: ["WordPress", "PHP", "Custom CSS", "SEO"],
      color: "from-blue-500/20 to-transparent",
    },
    {
      title: "Finnovator ME",
      category: "Fintech Platform",
      image: "/project/finnovator.jpg",
      link: "https://www.finnovator.me/",
      problem: "The client required a complex dashboard to display real-time financial metrics for Middle Eastern markets.",
      solution: "Built a high-performance dashboard using Next.js for SSR, ensuring fast data fetching and a responsive user interface.",
      techStack: ["Next.js", "Chart.js", "REST APIs", "TypeScript"],
      color: "from-cyan-500/20 to-transparent",
    },
    {
      title: "Merchant Automobiles",
      category: "E-Commerce",
      image: "/project/merchant.png",
      link: "https://demo.perfumesaaz.com/",
      problem: "A luxury fragrance brand needed a premium online store to reflect their high-end products and streamline sales.",
      solution: "Developed a custom WordPress e-commerce solution with a sleek design and optimized user experience.",
      techStack: ["WordPress", "WooCommerce", "PHP", "Custom CSS"],
      color: "from-blue-500/20 to-transparent",
    },
    {
      title: "Finnovator SA",
      category: "Enterprise Web",
      image: "/project/finnovator_sa.jpg",
      link: "https://www.finnovator.com.sa/",
      problem: "An enterprise-level financial service needed a robust, secure, and multilingual platform for the Saudi market.",
      solution: "Architected a scalable React application with internationalization and high-security protocols for sensitive data.",
      techStack: ["React.js", "i18next", "Auth0", "Material UI"],
      color: "from-emerald-500/20 to-transparent",
    },
    {
      title: "FurFusion Studio",
      category: "Creative WordPress",
      image: "/project/furfusion.jpg",
      link: "https://furfusionstudio.com/",
      problem: "A creative agency needed a unique, fast-loading portfolio site that allowed easy content management.",
      solution: "Customized a headless WordPress solution with a refined UI, focusing on high-quality image rendering and smooth transitions.",
      techStack: ["WordPress", "Elementor", "Custom CSS", "PHP"],
      color: "from-orange-500/20 to-transparent",
    },
    {
      title: "VinsDaddy",
      category: "E-Commerce",
      image: "/project/vinsdaddy.jpg",
      link: "https://vinsdaddy.com/",
      problem: "An online store needed a high-conversion checkout flow and a premium brand aesthetic to stand out.",
      solution: "Developed a custom E-commerce experience with optimized product pages and a streamlined payment gateway integration.",
      techStack: ["WordPress", "WooCommerce", "JS", "MySQL"],
      color: "from-rose-500/20 to-transparent",
    },
    {
      title: "Duffa Website",
      category: "Custom Web App",
      image: "/project/duffa.jpg",
      link: "",
      problem: "The client needed a lightweight, high-performance landing page with interactive elements to showcase their services.",
      solution: "Built a lightning-fast static site using vanilla JS and modern CSS techniques for maximum performance scores.",
      techStack: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      color: "from-indigo-500/20 to-transparent",
    },
    {
      title: "Tayaseer Finance App",
      category: "Financial Mobile App",
      image: "/project/tayaseer.png",
      link: "",
      problem: "A financial institution needed a secure, intuitive mobile application to streamline user onboarding, real-time banking, and seamless transactions.",
      solution: "Developed a robust cross-platform mobile application using React Native, ensuring seamless performance, high-grade security, and a beautiful UI.",
      techStack: ["React Native", "TypeScript", "Redux", "Firebase"],
      color: "from-blue-500/20 to-transparent",
    },
    {
      title: "Edge Loan Application",
      category: "Loan Management Mobile App",
      image: "/project/edge.png",
      link: "",
      problem: "A lending service required a fast, user-friendly mobile platform for clients to apply for loans, track approvals, and manage their payments on the go.",
      solution: "Built an intuitive native mobile application using Flutter, featuring fluid animations, quick application flows, and a seamless user experience.",
      techStack: ["Flutter", "Dart", "SQLite", "GraphQL"],
      color: "from-emerald-500/20 to-transparent",
    }
  ]

  return (
    <main className="bg-[#050505] text-[#f5f5f5] min-h-screen selection:bg-white selection:text-black pt-32">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative px-6 md:px-12 py-20 flex flex-col items-start justify-center min-h-[60vh] border-b border-white/5">
        <span className="eyebrow mb-8">Selected Work</span>
        <div className="overflow-hidden pb-4">
          <h1 ref={el => { textRefs.current[0] = el }} className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase text-white">OUR</h1>
        </div>
        <div className="overflow-hidden pb-4">
          <h1 ref={el => { textRefs.current[1] = el }} className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase text-outline">DIGITAL</h1>
        </div>
        <div className="overflow-hidden pb-4">
          <h1 ref={el => { textRefs.current[2] = el }} className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase text-white">MASTERPIECES.</h1>
        </div>
        
        <p className="mt-12 font-mono text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Explore a curated selection of platforms, applications, and systems we've engineered for industry leaders worldwide.
        </p>
      </section>

      {/* Case Studies Grid */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-32">
          {cases.map((project, idx) => (
            <div key={idx} className="group flex flex-col gap-8">
              <div className="relative w-full aspect-video md:aspect-[21/9] bg-zinc-900 overflow-hidden rounded-3xl">
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color}`} />
              </div>
              
              <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                <div className="flex-1 space-y-6">
                  <div>
                    <span className="eyebrow mb-4">{project.category}</span>
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">{project.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-4 py-2 rounded-full border border-white/10 font-mono text-xs uppercase text-zinc-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">The Challenge</h4>
                    <p className="font-mono text-sm text-zinc-400 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">The Solution</h4>
                    <p className="font-mono text-sm text-zinc-400 leading-relaxed">{project.solution}</p>
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-white text-zinc-400 transition-colors mt-4">
                      Visit Live Site <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
