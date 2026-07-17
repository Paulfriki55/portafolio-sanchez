"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"

const GLITCH_CHARS = "!<>-_\\/[]{}=+*^?#01"

interface GlitchTextProps {
  text: string
  play?: boolean
  delay?: number
  className?: string
}

export default function GlitchText({ text, play = false, delay = 0, className = "" }: GlitchTextProps) {
  const [display, setDisplay] = useState(text)
  const [glitching, setGlitching] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const reduceMotion = useReducedMotion()

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const scramble = useCallback(() => {
    if (reduceMotion) return
    stop()
    setGlitching(true)
    let progress = 0
    intervalRef.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " "
            if (i < progress) return char
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
          })
          .join(""),
      )
      progress += 0.5
      if (progress >= text.length) {
        stop()
        setDisplay(text)
        setGlitching(false)
      }
    }, 30)
  }, [text, reduceMotion, stop])

  useEffect(() => {
    if (play) {
      timeoutRef.current = setTimeout(scramble, delay)
    }
    return () => {
      stop()
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [play, delay, scramble, stop])

  useEffect(() => {
    setDisplay(text)
  }, [text])

  return (
    <span className={`${className} ${glitching ? "glitch-active" : ""}`} onMouseEnter={scramble}>
      {display}
    </span>
  )
}
