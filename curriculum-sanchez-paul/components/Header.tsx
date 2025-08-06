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
import { useState, useEffect, useCallback } from "react"
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

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-all duration-500">
      {/* Fondo con gradiente sutil solo en modo claro */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-primary-100/20 dark:bg-transparent" />
      
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-200/20 dark:bg-primary-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-300/20 dark:bg-primary-700/10 rounded-full blur-3xl" />
      </div>

      {/* Navegación desktop */}
      <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 hidden lg:flex items-center gap-4">
        <div className="glass-card px-8 py-4 flex items-center gap-8">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-link flex items-center gap-2 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </motion.button>
          ))}
        </div>
        <ThemeToggle />
      </nav>

      {/* Botón del menú móvil */}
      <motion.button
        onClick={toggleMenu}
        className="absolute top-8 right-8 z-50 lg:hidden glass-card p-3"
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
              <FaTimes className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaBars className="w-6 h-6" />
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
            className="fixed top-24 right-8 z-40 lg:hidden"
          >
            <div className="glass-card p-6 min-w-[200px]">
              <nav className="flex flex-col gap-3">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="nav-link flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 dark:hover:bg-gray-800/50 transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </motion.button>
                ))}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido principal */}
      <div className="container-custom relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sección de texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Nombre */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gradient mb-6 font-extralight tracking-tight"
            >
              Paul Sánchez
            </motion.h1>

            {/* Subtítulo animado */}
            <AnimatePresence mode="wait">
              <motion.div
                key={subtitle.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-3 mb-8 text-xl text-gray-600 dark:text-gray-300 font-light"
              >
                <subtitle.icon className="w-5 h-5 text-primary-500" />
                <span>{subtitle.text}</span>
              </motion.div>
            </AnimatePresence>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Desarrollador apasionado por crear soluciones innovadoras y experiencias digitales excepcionales. 
              Especializado en tecnologías modernas y arquitecturas escalables.
            </motion.p>

            {/* Enlaces sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-4 h-4" />
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
            className="flex justify-center"
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
                className="absolute inset-4 rounded-full border border-primary-300/30 dark:border-primary-700/20"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  rotate: isHovered ? -360 : 0,
                }}
                transition={{ duration: 3, ease: "linear" }}
              />

              {/* Imagen principal */}
              <motion.div
                className="relative w-80 h-80 rounded-full overflow-hidden glass-card p-2"
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          whileHover={{ y: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-sm font-medium tracking-wide">Explorar</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </motion.div>
    </header>
  )
}

export default Header

