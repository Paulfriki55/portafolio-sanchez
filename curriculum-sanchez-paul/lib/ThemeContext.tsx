"use client"

import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'

type Theme = 'light' | 'dark'

type ThemeOrigin = { x: number; y: number }

interface ThemeContextType {
  theme: Theme
  toggleTheme: (origin?: ThemeOrigin) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

type ViewTransitionLike = {
  ready: Promise<void>
  finished: Promise<void>
}

const THEME_MS = 650
const THEME_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'
const THEME_BG: Record<Theme, string> = {
  light: '#fafafa',
  dark: '#09090b',
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')
  const busyRef = useRef(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const applyTheme = (next: Theme) => {
    flushSync(() => {
      setTheme(next)
    })
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(next)
    root.style.colorScheme = next
  }

  /** Fallback: solid radial (no blur) when View Transitions aren't available */
  const runOverlayRadial = (next: Theme, x: number, y: number) => {
    const root = document.documentElement
    root.classList.add('theme-switching')

    const overlay = document.createElement('div')
    overlay.className = 'theme-radial-overlay'
    overlay.style.setProperty('--theme-radial-bg', THEME_BG[next])
    overlay.style.setProperty('--theme-x', `${x}px`)
    overlay.style.setProperty('--theme-y', `${y}px`)
    overlay.setAttribute('aria-hidden', 'true')
    document.body.appendChild(overlay)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.classList.add('theme-radial-overlay--expand')
      })
    })

    let finished = false
    const finish = () => {
      if (finished) return
      finished = true
      applyTheme(next)
      overlay.remove()
      root.classList.remove('theme-switching')
      busyRef.current = false
    }

    overlay.addEventListener(
      'transitionend',
      (event) => {
        if (event.target === overlay && event.propertyName === 'clip-path') {
          finish()
        }
      },
      { once: true }
    )

    window.setTimeout(finish, THEME_MS + 100)
  }

  const toggleTheme = (origin?: ThemeOrigin) => {
    if (busyRef.current) return

    const next: Theme = theme === 'light' ? 'dark' : 'light'
    // Always run the theme wipe — portfolio should feel animated
    busyRef.current = true

    const x = origin?.x ?? window.innerWidth / 2
    const y = origin?.y ?? window.innerHeight / 2
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => ViewTransitionLike
    }
    const root = document.documentElement
    const toDark = next === 'dark'

    if (typeof doc.startViewTransition === 'function') {
      root.dataset.themeTransition = toDark ? 'to-dark' : 'to-light'
      root.style.setProperty('--theme-x', `${x}px`)
      root.style.setProperty('--theme-y', `${y}px`)
      root.style.setProperty('--theme-r', `${radius}px`)
      root.classList.add('theme-switching')

      try {
        const transition = doc.startViewTransition(() => {
          applyTheme(next)
        })

        transition.ready
          .then(() => {
            const clipPath = toDark
              ? [
                  `circle(0px at ${x}px ${y}px)`,
                  `circle(${radius}px at ${x}px ${y}px)`,
                ]
              : [
                  `circle(${radius}px at ${x}px ${y}px)`,
                  `circle(0px at ${x}px ${y}px)`,
                ]

            document.documentElement.animate(
              { clipPath },
              {
                duration: THEME_MS,
                easing: THEME_EASING,
                fill: 'both',
                pseudoElement: toDark
                  ? '::view-transition-new(root)'
                  : '::view-transition-old(root)',
              }
            )
          })
          .catch(() => {
            // ready may reject if transition is skipped
          })

        transition.finished
          .catch(() => applyTheme(next))
          .finally(() => {
            root.classList.remove('theme-switching')
            delete root.dataset.themeTransition
            root.style.removeProperty('--theme-x')
            root.style.removeProperty('--theme-y')
            root.style.removeProperty('--theme-r')
            busyRef.current = false
          })
        return
      } catch {
        root.classList.remove('theme-switching')
        delete root.dataset.themeTransition
      }
    }

    runOverlayRadial(next, x, y)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
