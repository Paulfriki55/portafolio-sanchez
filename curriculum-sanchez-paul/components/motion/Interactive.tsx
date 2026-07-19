"use client"

import { useRef } from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion"

/** Pulls toward cursor — portfolio micro-interaction */
export function Magnetic({
  children,
  className,
  strength = 0.28,
}: {
  children: React.ReactNode
  className?: string
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 18 })
  const springY = useSpring(y, { stiffness: 260, damping: 18 })

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Card with cursor spotlight glow */
export function SpotlightCard({
  children,
  className = "",
  ...rest
}: {
  children: React.ReactNode
  className?: string
} & Omit<HTMLMotionProps<"div">, "children">) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(50)
  const my = useMotionValue(50)

  const background = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, rgb(6 182 212 / 0.14), transparent 55%)`

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mx.set(((e.clientX - rect.left) / rect.width) * 100)
    my.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      className={`group/spotlight relative overflow-hidden ${className}`}
      {...rest}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{ background }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}

/** Infinite tech name strip — ambient motion without blocking scroll */
export function TechMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden py-3 border-y border-gray-200/80 dark:border-gray-800/80">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-white dark:from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-white dark:from-black to-transparent" />
      <div className="flex w-max animate-marquee gap-8 will-change-transform">
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 whitespace-nowrap"
          >
            <span className="text-accent mr-2">◆</span>
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

/** Floating orb that drifts with pointer — section atmosphere */
export function SectionAtmosphere({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 45, damping: 22 })
  const sy = useSpring(y, { stiffness: 45, damping: 22 })

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35)
  }

  return (
    <div ref={ref} onMouseMove={onMove} className={`relative ${className}`}>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none absolute left-1/2 top-[28%] w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/[0.07] dark:bg-primary-400/[0.06] blur-3xl"
      />
      {children}
    </div>
  )
}
