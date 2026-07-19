"use client"

import { MotionConfig } from 'framer-motion'

/**
 * Force portfolio motion on — a global CSS prefers-reduced-motion nuke
 * and Framer's default "user" mode were killing whileInView scroll reveals.
 * This site is motion-led; keep animations visible.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="never">
      {children}
    </MotionConfig>
  )
}
