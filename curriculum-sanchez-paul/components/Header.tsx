"use client"

import Image from "next/image"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
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
  FaArrowDown,
} from "react-icons/fa"
import { useState, useEffect, useCallback } from "react"

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
    label: "Explora mis Proyectos",
  },
  {
    href: "https://linkedin.com/in/paul-sanchez-955204271",
    icon: FaLinkedin,
    label: "Conéctemos en LinkedIn",
  },
  {
    href: "/files/Hoja de Vida Paul Sanchez.pdf",
    icon: FaFileDownload,
    label: "Descarga mi Hoja de Vida",
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
  { text: "Full Stack Software Developer", icon: FaCode },
  { text: "Geek", icon: FaLaptopCode },
  { text: "Gamer", icon: FaGamepad },
  { text: "Friki", icon: FaRobot },
]

const Header: React.FC = () => {
  const [subtitle, setSubtitle] = useState<Subtitle>(subtitlesList[0])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [scrollingDown, setScrollingDown] = useState(false)
  const [showHeaderNav, setShowHeaderNav] = useState(true)

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
    const interval = setInterval(cycleSubtitle, 3000)
    return () => clearInterval(interval)
  }, [cycleSubtitle])

  const { scrollY } = useScroll()
  const [scrollYValue, setScrollYValue] = useState(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prevScrollY = scrollY.getPrevious() ?? 0
    setScrollingDown(latest > prevScrollY)
    setShowHeaderNav(latest <= 50 || !scrollingDown) // Show nav if at top or scrolling up
    setScrollYValue(latest)
  })

  const subtitleVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  const scrollIndicatorVariants = {
    initial: { opacity: 1, y: 0 },
    animate: {
      opacity: showHeaderNav ? 1 : 0,
      y: [0, 20, 0],
      transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
    },
    exit: { opacity: 0 },
  }

  const orbitVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: i * 240,
      transition: { delay: i * 0.2, duration: 0.7, type: "spring" },
    }),
  }

  const menuVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 200, damping: 25 },
    },
    exit: { opacity: 0, x: 100 },
  }

  const navLinkVariants = {
    hover: {
      scale: 1.1,
      color: "#7dd3fc",
      textShadow: "0 0 10px rgba(129, 230, 253, 0.6)",
      transition: { duration: 0.2 },
    },
  }

  const generateRandomPositions = () => {
    return Array.from({ length: 55 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }))
  }

  const [starPositions] = useState(generateRandomPositions)

  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1, delayChildren: 0.5, staggerChildren: 0.2 } },
  }

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const desktopNavVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: showHeaderNav ? 1 : 0, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20 },
  }

  const fadeOnScrollVariants = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1 - Math.min(scrollYValue * 0.0025, 0.9),
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800"
    >
      {/* Fondo estelar animado */}
      <div className="absolute inset-0">
        {starPositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-blue-400 rounded-full"
            style={{
              top: position.top,
              left: position.left,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut", // Hacer la animación más fluida
            }}
          />
        ))}
      </div>

      {/* Botón del menú móvil */}
      <motion.div
        variants={contentVariants}
        className="absolute top-6 right-6 z-50 md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={toggleMenu}
          className="text-gray-300 hover:text-white"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <FaTimes className="w-7 h-7" /> : <FaBars className="w-7 h-7" />}
        </button>
      </motion.div>

      {/* Menú móvil - Improved Styling */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-14 right-4 w-64 bg-gray-800/95 backdrop-blur-sm rounded-xl z-40 p-5 shadow-lg border border-gray-700"
          >
            <nav className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={contentVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className="flex items-center gap-2 text-gray-300 py-2 px-3 rounded-md hover:bg-gray-700/40 transition-colors duration-200"
                  >
                    <item.icon className="w-4 h-4 text-blue-400 opacity-80" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido principal */}
      <motion.div
        variants={contentVariants}
        animate={fadeOnScrollVariants.animate}
        className="relative z-10 text-white px-4 flex flex-col md:flex-row items-center md:items-start justify-between max-w-6xl w-full"
      >
        {/* Sección de texto */}
        <motion.div variants={contentVariants} className="order-2 md:order-1 text-center md:text-left md:w-1/2 md:pr-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 1.0,
              x: { type: "spring", stiffness: 50 },
            }}
            className="text-5xl md:text-7xl font-bold mb-2 tracking-wider text-gradient wave-animation"
          >
            PAUL SANCHEZ
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={subtitle.text}
              variants={subtitleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 60,
              }}
              className="text-xl md:text-2xl mb-6 tracking-wide glass-effect px-4 py-2 rounded-lg flex items-center justify-center gap-3 glow-effect"
            >
              <subtitle.icon className="w-6 h-6 text-blue-400" />
              <span>{subtitle.text}</span>
            </motion.div>
          </AnimatePresence>

          {/* Enlaces sociales con efecto neon */}
          <motion.div
            variants={contentVariants}
            className="flex flex-col items-center gap-4"
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="flex justify-center gap-6">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={contentVariants}
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full transition-all duration-300 hover:bg-white/10"
                    aria-label={link.label}
                  >
                    <link.icon
                      className="w-12 h-12 text-white"
                      style={{
                        filter: "drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))",
                      }}
                    />
                  </Link>
                  <span className="mt-2 text-xs opacity-80">{link.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Sección de imagen */}
        <motion.div variants={contentVariants} className="order-1 md:order-2 mb-8 md:mb-0 md:w-1/2 flex justify-center">
          <div
            className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence>
              {isHovered &&
                [0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-[6px] border-blue-400 border-opacity-80 shadow-blue-500/50 shadow-lg"
                    variants={orbitVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    custom={i}
                  />
                ))}
            </AnimatePresence>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                // Se elimina la línea de rotate: scrollYValue * 0.02
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                // Se elimina la configuración de rotate
              }}
              className="relative w-full h-full"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/paul-profile.png"
                  alt="Paul Sanchez"
                  width={350}
                  height={350}
                  priority
                  quality={90}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        variants={scrollIndicatorVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <FaArrowDown
          className="w-8 h-8 text-blue-400"
          style={{
            filter: "drop-shadow(0 0 8px rgba(96, 165, 250, 0.5))",
            animation: "bounce 1.5s infinite",
          }}
        />
        <span
          className="text-blue-400 mt-2 font-medium text-sm"
          style={{ filter: "drop-shadow(0 0 5px rgba(96, 165, 250, 0.5))" }}
        >
          Ver más
        </span>
      </motion.div>

      {/* Navegación desktop - Improved Styling */}
      <AnimatePresence>
        {showHeaderNav && (
          <motion.nav
            variants={desktopNavVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="hidden md:flex absolute top-6 right-6 z-50 space-x-7"
          >
            {menuItems.map((item) => (
              <motion.div key={item.id} variants={navLinkVariants} whileHover="hover" className="relative">
                <Link href={`#${item.id}`} className="text-gray-300 px-3 py-1.5 transition-colors font-medium text-sm">
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[1.5px] bg-cyan-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

