"use client"

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type HTMLMotionProps,
  type Variants,
} from 'framer-motion'
import {
  fadeUp,
  fadeUpSoft,
  fadeLeft,
  fadeRight,
  scaleRise,
  cardSlide,
  staggerContainer,
  staggerFast,
  staggerSlow,
  viewportEarly,
  scrollRevealOffset,
  scrollHeadingOffset,
  scrollSectionOffset,
} from '@/lib/motion'

const variantMap = {
  up: fadeUp,
  soft: fadeUpSoft,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleRise,
  card: cardSlide,
  mask: fadeUp,
  clip: fadeUp,
} as const

type VariantName = keyof typeof variantMap

type Axis = 'up' | 'left' | 'right' | 'scale'

/**
 * Scroll-linked reveal — opacity/transform track scroll progress.
 * No IO delay, no timed tween waiting to finish.
 */
function useScrollLinked(axis: Axis = 'up', offset: readonly [string, string] = scrollRevealOffset) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: offset as any,
  })

  // Raw progress = locked to scroll (no laggy spring catch-up)
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    axis === 'up' || axis === 'scale' ? [32, 0] : [0, 0],
  )
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    axis === 'left' ? [-36, 0] : axis === 'right' ? [36, 0] : [0, 0],
  )
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    axis === 'scale' ? [0.97, 1] : [1, 1],
  )

  return { ref, style: { opacity, y, x, scale } }
}

type RevealProps = Omit<
  HTMLMotionProps<'div'>,
  'variants' | 'initial' | 'whileInView' | 'viewport' | 'animate' | 'style'
> & {
  variant?: VariantName
  /** Ignored — kept for API compatibility; scroll drives timing */
  delay?: number
}

export function Reveal({
  children,
  variant = 'up',
  className,
  ...rest
}: RevealProps) {
  const axis: Axis =
    variant === 'left'
      ? 'left'
      : variant === 'right'
        ? 'right'
        : variant === 'scale' || variant === 'clip'
          ? 'scale'
          : 'up'

  const { ref, style } = useScrollLinked(axis)

  return (
    <motion.div ref={ref} style={style} className={className} {...rest}>
      {children}
    </motion.div>
  )
}

type GroupProps = Omit<
  HTMLMotionProps<'div'>,
  'variants' | 'initial' | 'whileInView' | 'viewport' | 'animate'
> & {
  pace?: 'fast' | 'normal' | 'slow'
}

/** Group still uses early whileInView — children stagger is short & snappy */
export function RevealGroup({
  children,
  pace = 'normal',
  className,
  ...rest
}: GroupProps) {
  const variants: Variants =
    pace === 'fast' ? staggerFast : pace === 'slow' ? staggerSlow : staggerContainer

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportEarly}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Section title — scroll-synced rise (whole block, no word delays) */
export function SectionHeading({
  children,
  className = '',
  index,
}: {
  children: React.ReactNode
  className?: string
  index?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: scrollHeadingOffset as any,
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [28, 0])
  const lineScale = useTransform(scrollYProgress, [0.2, 1], [0, 1])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={`mb-12 sm:mb-16 text-center ${className}`}
    >
      {index && (
        <span className="mb-3 block font-mono text-[11px] tracking-[0.35em] uppercase text-primary-600/70 dark:text-primary-400/70">
          {index}
        </span>
      )}

      <h2 className="text-gradient inline-block">{children}</h2>

      <motion.div
        style={{ scaleX: lineScale }}
        className="mt-4 w-16 h-px bg-primary-500 mx-auto origin-center shadow-[0_0_12px_rgb(6_182_212/0.45)]"
      />
    </motion.div>
  )
}

/**
 * Section shell — light scroll drift only.
 * Does NOT hide content (avoids late empty sections).
 */
export function SectionShell({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: scrollSectionOffset as any,
  })

  const driftY = useTransform(scrollYProgress, [0, 0.5, 1], [16, 0, -12])

  return (
    <section ref={ref} id={id} className={`relative ${className}`}>
      <motion.div style={{ y: driftY }} className="will-change-transform">
        {children}
      </motion.div>
    </section>
  )
}

/** Thin scroll progress — top of viewport */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 32,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary-400 via-primary-500 to-cyan-300 pointer-events-none"
      style={{ scaleX }}
    />
  )
}

/**
 * Lightweight scroll-linked item for lists / cards.
 * Direction: up | left | right
 */
export function ScrollItem({
  children,
  className,
  from = 'up',
  distance = 28,
}: {
  children: React.ReactNode
  className?: string
  from?: 'up' | 'left' | 'right'
  distance?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.92', 'start 0.62'],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], from === 'up' ? [distance, 0] : [0, 0])
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    from === 'left' ? [-distance, 0] : from === 'right' ? [distance, 0] : [0, 0],
  )

  return (
    <motion.div ref={ref} style={{ opacity, y, x }} className={className}>
      {children}
    </motion.div>
  )
}
