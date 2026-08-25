'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)
    
    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => setIsActive(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    // Handle hover states on links and buttons
    const handleElementMouseEnter = () => setIsHovered(true)
    const handleElementMouseLeave = () => setIsHovered(false)

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [data-cursor="hover"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleElementMouseEnter)
      el.addEventListener('mouseleave', handleElementMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementMouseEnter)
        el.removeEventListener('mouseleave', handleElementMouseLeave)
      })
    }
  }, [cursorX, cursorY, isVisible])

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
