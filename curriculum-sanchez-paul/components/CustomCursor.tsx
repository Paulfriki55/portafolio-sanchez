"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [mounted, setMounted] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const dotX = useSpring(mouseX, { stiffness: 600, damping: 28, mass: 0.5 })
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 28, mass: 0.5 })
  const ringX = useSpring(mouseX, { stiffness: 250, damping: 20, mass: 0.8 })
  const ringY = useSpring(mouseY, { stiffness: 250, damping: 20, mass: 0.8 })

  useEffect(() => {
    setMounted(true)
    if (window.matchMedia("(hover: none)").matches) return

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(Boolean(target.closest("a") || target.closest("button")))
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY])

  if (!mounted || window.matchMedia("(hover: none)").matches) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 -ml-1.5 -mt-1.5 bg-primary-500 rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        style={{ x: dotX, y: dotY }}
        animate={{ scale: isHovering ? 2.5 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-primary-500 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: isHovering ? 1.5 : 1, opacity: isHovering ? 0 : 0.5 }}
        transition={{ duration: 0.25 }}
      />
    </>
  )
}
