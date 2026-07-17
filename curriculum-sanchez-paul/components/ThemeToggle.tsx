"use client"

import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '@/lib/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <FaMoon className="w-4 h-4 sm:w-5 sm:h-5" />
        ) : (
          <FaSun className="w-4 h-4 sm:w-5 sm:h-5" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
