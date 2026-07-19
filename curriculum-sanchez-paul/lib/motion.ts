import type { Variants, Transition } from 'framer-motion'

/** Shared motion language — scroll-synced, early & coherent */
export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]
export const easeOutQuart: [number, number, number, number] = [0.22, 1, 0.36, 1]

/** Fire as soon as element nears viewport — no late IO waits */
export const viewportOnce = {
  once: true,
  margin: '0px 0px -4% 0px',
  amount: 0.05,
} as const

export const viewportEarly = {
  once: true,
  margin: '80px 0px 0px 0px',
  amount: 0.01,
} as const

/**
 * Scroll offsets for useScroll reveals.
 * Starts fading in just before entering; fully visible shortly after.
 */
export const scrollRevealOffset = ['start 0.95', 'start 0.6'] as const
export const scrollHeadingOffset = ['start 0.98', 'start 0.72'] as const
export const scrollSectionOffset = ['start end', 'end start'] as const

export const tween = (duration = 0.45, delay = 0): Transition => ({
  duration,
  delay,
  ease: easeOutExpo,
})

export const springSnappy: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 24,
  mass: 0.7,
}

export const springPop: Transition = {
  type: 'spring',
  stiffness: 320,
  damping: 22,
}

/** Kept for nested children inside RevealGroup (quick IO, short motion) */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: tween(0.4),
  },
}

export const fadeUpSoft: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: tween(0.35),
  },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: tween(0.4),
  },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: tween(0.4),
  },
}

export const scaleRise: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: tween(0.4),
  },
}

export const cardSlide: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springSnappy,
  },
}

export const tilePop: Variants = {
  hidden: { opacity: 0, scale: 0.75, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springPop,
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0,
    },
  },
}

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0,
    },
  },
}

export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
}
