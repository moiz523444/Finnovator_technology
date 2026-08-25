'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function ScrollToTop() {
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
    window.scrollTo(0, 0)
  }, [pathname, lenis])

  return null
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <ScrollToTop />
      {children}
    </ReactLenis>
  )
}
