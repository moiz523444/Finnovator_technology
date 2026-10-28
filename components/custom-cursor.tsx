'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const INTERACTIVE = 'a, button, input, textarea, summary, [data-cursor="hover"]'

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    // Delegated hover detection so elements rendered after mount (route changes, menus) are covered
    const handleOver = (e: MouseEvent) => {
      const target = e.target as Element | null
      setIsHovered(!!target?.closest?.(INTERACTIVE))
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => setIsActive(false)

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleOver)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleOver)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className={`custom-cursor ${isHovered ? 'hovered' : ''} ${isActive ? 'active' : ''}`}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0
      }}
    />
  )
}
