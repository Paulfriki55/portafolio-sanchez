"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '@/lib/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const goingDark = theme === 'light'

  return (
    <motion.button
      type="button"
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        toggleTheme({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        })
      }}
      className="relative inline-flex items-center justify-center min-h-11 min-w-11 rounded-xl text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100/80 dark:hover:bg-gray-900/80 transition-colors overflow-hidden"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Cambiar a modo ${goingDark ? 'oscuro' : 'claro'}`}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl bg-primary-500/10"
        initial={false}
        animate={{ opacity: [0, 0.55, 0], scale: [0.7, 1.15, 1.25] }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        key={theme}
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{
            rotate: goingDark ? -100 : 100,
            scale: 0.35,
            opacity: 0,
            y: goingDark ? 6 : -6,
          }}
          animate={{ rotate: 0, scale: 1, opacity: 1, y: 0 }}
          exit={{
            rotate: goingDark ? 100 : -100,
            scale: 0.35,
            opacity: 0,
            y: goingDark ? -6 : 6,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-flex"
        >
          {theme === 'light' ? (
            <FaMoon className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-[0_0_8px_rgba(6,182,212,0.35)]" aria-hidden />
          ) : (
            <FaSun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.45)]" aria-hidden />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}

export default ThemeToggle
