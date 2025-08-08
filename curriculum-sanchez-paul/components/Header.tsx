"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type React from "react"
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaBars,
  FaTimes,
  FaUser,
  FaGraduationCap,
  FaEnvelope,
  FaCode,
  FaLaptopCode,
  FaGamepad,
  FaRobot,
  FaChevronDown,
} from "react-icons/fa"
import { useState, useEffect, useCallback, useRef } from "react"
import ThemeToggle from "./ThemeToggle"

interface SocialLink {
  href: string
  icon: React.ElementType
  label: string
}

interface MenuItem {
  id: string
  label: string
  icon: React.ElementType
}

interface Subtitle {
  text: string
  icon: React.ElementType
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/Paulfriki55",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/paul-sanchez-955204271",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "/files/Hoja de Vida Paul Sanchez.pdf",
    icon: FaFileDownload,
    label: "CV",
  },
]

const menuItems: MenuItem[] = [
  { id: "about", label: "Sobre mí", icon: FaUser },
  { id: "skills", label: "Habilidades", icon: FaCode },
  { id: "experience", label: "Experiencia", icon: FaLaptopCode },
  { id: "education", label: "Educación", icon: FaGraduationCap },
  { id: "contact", label: "Contacto", icon: FaEnvelope },
]

const subtitlesList: Subtitle[] = [
  { text: "Full Stack Developer", icon: FaCode },
  { text: "Software Engineer", icon: FaLaptopCode },
  { text: "Problem Solver", icon: FaRobot },
  { text: "Tech Enthusiast", icon: FaGamepad },
]

const Header: React.FC = () => {
  const [subtitle, setSubtitle] = useState<Subtitle>(subtitlesList[0])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const cycleSubtitle = useCallback(() => {
    setSubtitle((current) => {
      const currentIndex = subtitlesList.findIndex((item) => item.text === current.text)
      const nextIndex = (currentIndex + 1) % subtitlesList.length
      return subtitlesList[nextIndex]
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(cycleSubtitle, 4000)
    return () => clearInterval(interval)
  }, [cycleSubtitle])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMenu()
  }

  // Función para cerrar el menú cuando se hace clic fuera
  const handleClickOutside = useCallback((event: MouseEvent) => {
    // Verificar si el clic fue en el botón del menú (abrir o cerrar)
    const menuButton = (event.target as Element)?.closest('button[aria-label*="menú"]')
    if (menuButton) {
      return // No cerrar si se hizo clic en el botón del menú
    }
    
    // Verificar si el clic fue en el botón de cerrar específicamente
    const closeButton = (event.target as Element)?.closest('button[aria-label="Cerrar menú"]')
    if (closeButton) {
      return // No cerrar si se hizo clic en el botón de cerrar
    }
    
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu()
    }
  }, [])

  // Agregar y remover el event listener
  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen, handleClickOutside])

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-all duration-500">
      {/* Fondo con gradiente sutil solo en modo claro */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-primary-100/20 dark:bg-transparent" />
      
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary-200/20 dark:bg-primary-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-4 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-primary-300/20 dark:bg-primary-700/10 rounded-full blur-3xl" />
      </div>

      {/* Navegación desktop */}
      <nav className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 z-50 hidden lg:flex items-center gap-4">
        <div className="glass-card px-6 sm:px-8 md:px-10 py-4 sm:py-5 flex items-center gap-6 sm:gap-8 md:gap-10">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-link flex items-center gap-2 text-sm sm:text-base font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">{item.label}</span>
            </motion.button>
          ))}
        </div>
        <ThemeToggle />
      </nav>

      {/* Botón del menú móvil */}
      <motion.button
        onClick={toggleMenu}
        className="absolute top-6 sm:top-8 right-4 sm:right-8 z-50 lg:hidden p-3 sm:p-4 rounded-full border-2 border-primary-500 dark:border-primary-400 text-primary-600 dark:text-primary-400 bg-transparent hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaBars className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 sm:top-28 right-4 sm:right-8 z-40 lg:hidden"
            ref={menuRef}
          >
            <div className="bg-white/95 dark:bg-black/95 border border-white/20 dark:border-gray-800/20 rounded-2xl p-5 sm:p-6 min-w-[220px] sm:min-w-[240px] shadow-xl">
              <nav className="flex flex-col gap-3 sm:gap-4">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="nav-link flex items-center gap-3 p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-primary-600/10 hover:to-primary-500/10 dark:hover:bg-primary-800/20 transition-all duration-300 text-sm sm:text-base font-medium"
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/50">
                      <item.icon className="w-4 h-4 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                    </div>
                    {item.label}
                  </motion.button>
                ))}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-4">
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido principal */}
      <div className="container-custom relative z-10 px-4 sm:px-6 pt-20 sm:pt-24 pb-28 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Sección de texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Nombre */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gradient mb-6 sm:mb-8 font-extralight tracking-tight"
            >
              Paúl Sánchez
            </motion.h1>

            {/* Subtítulo animado */}
            <AnimatePresence mode="wait">
              <motion.div
                key={subtitle.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-8 sm:mb-10 text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-light"
              >
                <subtitle.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 flex-shrink-0" />
                <span className="text-base sm:text-lg md:text-xl">{subtitle.text}</span>
              </motion.div>
            </AnimatePresence>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10 sm:mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Desarrollador apasionado por crear soluciones innovadoras y experiencias digitales excepcionales. 
              Especializado en tecnologías modernas y arquitecturas escalables.
            </motion.p>

            {/* Enlaces sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-5"
            >
                             {socialLinks.map((link, index) => (
                 <motion.a
                   key={index}
                   href={link.href}
                   target="_blank"
                   rel="noopener noreferrer"
                                       className="btn-secondary flex items-center justify-center gap-2 text-xs sm:text-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border-2 border-primary-500 dark:border-primary-400 text-primary-600 dark:text-primary-400 bg-transparent hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white hover:border-primary-600 dark:hover:border-primary-500 transition-all duration-300 transform hover:-translate-y-1"
                   whileHover={{ scale: 1.05, y: -2 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <link.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                   {link.label}
                 </motion.a>
               ))}
            </motion.div>
          </motion.div>

          {/* Sección de imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Círculos decorativos */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary-200/50 dark:border-primary-800/30"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 360 : 0,
                }}
                transition={{ duration: 2, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 sm:inset-4 rounded-full border border-primary-300/30 dark:border-primary-700/20"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  rotate: isHovered ? -360 : 0,
                }}
                transition={{ duration: 3, ease: "linear" }}
              />

              {/* Imagen principal */}
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/paul-profile.png"
                  alt="Paul Sánchez"
                  width={320}
                  height={320}
                  priority
                  quality={95}
                  className="object-cover w-full h-full rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          whileHover={{ y: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xs sm:text-sm font-medium tracking-wide">Explorar más</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.div>
        </motion.button>
      </motion.div>
    </header>
  )
}

export default Header

