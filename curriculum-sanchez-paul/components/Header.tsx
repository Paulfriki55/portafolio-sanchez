"use client"

import Image from "next/image"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate, useScroll } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import type React from "react"
import { FaGithub, FaLinkedin, FaFileDownload, FaBars, FaTimes } from "react-icons/fa"
import { useState, useEffect, useCallback, useRef } from "react"
import ThemeToggle from "./ThemeToggle"
import { LogoMark, LOGO_PATH, LOGO_VIEWBOX } from "./LogoMark"
import GlitchText from "./GlitchText"

interface SocialLink {
  href: string
  icon: React.ElementType
  label: string
  download?: boolean
}

interface MenuItem {
  id: string
  label: string
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
    label: "Descargar CV",
    download: true,
  },
]

const menuItems: MenuItem[] = [
  { id: "about", label: "Sobre mí" },
  { id: "experience", label: "Experiencia" },
  { id: "skills", label: "Habilidades" },
  { id: "education", label: "Educación" },
  { id: "contact", label: "Contacto" },
]

const MagneticButton = ({
  children,
  className,
  href,
  download,
}: {
  children: React.ReactNode
  className?: string
  href: string
  download?: boolean
}) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 250, damping: 18 })
  const springY = useSpring(y, { stiffness: 250, damping: 18 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.15)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={download ? "_self" : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      download={download}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  )
}

const TiltPhoto = ({ reduceMotion }: { reduceMotion: boolean | null }) => {
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(py, [0, 1], [10, -10]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(px, [0, 1], [-10, 10]), { stiffness: 150, damping: 20 })

  const glareX = useTransform(px, (v) => `${v * 100}%`)
  const glareY = useTransform(py, (v) => `${v * 100}%`)
  const glare = useMotionTemplate`radial-gradient(340px circle at ${glareX} ${glareY}, rgb(255 255 255 / 0.22), transparent 55%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <div style={{ perspective: 1200 }} className="relative mt-8 lg:mt-0">
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="relative"
      >
        <div className="absolute -inset-8 rounded-full bg-primary-500/15 dark:bg-primary-500/10 blur-3xl" />

        <svg
          viewBox={LOGO_VIEWBOX}
          className="absolute -top-20 -right-10 sm:-top-24 sm:-right-16 w-52 sm:w-64 text-primary-600/40 dark:text-primary-500/30 pointer-events-none"
          aria-hidden="true"
        >
          <motion.path
            d={LOGO_PATH}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            initial={reduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, delay: 0.8, ease: "easeInOut" }}
          />
        </svg>

        <motion.div
          style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={reduceMotion ? undefined : { scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div
            className="absolute inset-0 rounded-[2rem] border border-primary-500/40"
            style={{ transform: "translate3d(14px, 14px, -50px)" }}
          />

          <div className="relative w-56 sm:w-64 lg:w-72 aspect-[4/5] rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
            <Image
              src="/images/paul-profile.png"
              alt="Paul Sánchez"
              width={432}
              height={540}
              priority
              quality={95}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ background: glare }}
            />
          </div>

          <div className="absolute -bottom-5 -left-5" style={{ transform: "translateZ(50px)" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-14 h-14 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-lg flex items-center justify-center"
            >
              <LogoMark className="w-9 text-gray-900 dark:text-white" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")
  const menuRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  // Portfolio is motion-led; don't disable hero motion via OS preference
  const reduceMotion = false

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const infoX = useTransform(heroProgress, [0, 0.7], [0, -110])
  const photoX = useTransform(heroProgress, [0, 0.7], [0, 110])
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0])
  const heroScale = useTransform(heroProgress, [0, 0.7], [1, 0.96])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    closeMenu()
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )

    menuItems.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const menuButton = (event.target as Element)?.closest('button[aria-label*="menú"]')
    if (menuButton) return
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu()
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen, handleClickOutside])

  return (
    <header ref={heroRef} className="relative min-h-[100dvh] flex items-center overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-400/10 dark:bg-primary-400/5 rounded-full blur-3xl" />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-black/70 backdrop-blur-xl"
      >
        <div className="container-custom h-full flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
            aria-label="Ir al inicio"
          >
            <LogoMark className="w-9 h-7 text-gray-900 dark:text-white transition-all duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-500 group-hover:-rotate-6" />
            <span className="font-mono text-sm text-gray-500 dark:text-gray-400 hidden sm:inline">
              paul<span className="text-accent">@</span>sanchez
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative rounded-lg transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-gray-100 dark:bg-gray-900"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <GlitchText text={item.label} className="relative z-10 font-mono text-[13px] block px-4 py-2" />
              </button>
            ))}
            <div className="w-px h-5 bg-gray-200 dark:bg-gray-800 mx-3" />
            <ThemeToggle />
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary-500 transition-colors duration-300"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <FaTimes className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <FaBars className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-4 z-40 lg:hidden"
            ref={menuRef}
          >
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur-xl p-3 min-w-[220px] shadow-xl">
              <nav className="flex flex-col gap-1">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm text-left transition-colors duration-300 ${
                      activeSection === item.id
                        ? "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900/60"
                    }`}
                  >
                    <GlitchText text={item.label} play={isMenuOpen} delay={150 + index * 90} className="font-mono text-[13px]" />
                  </motion.button>
                ))}
                <div className="border-t border-gray-200 dark:border-gray-800 mt-2 pt-2 flex justify-center">
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 sm:gap-16 items-center">
          <motion.div
            style={{ x: infoX, opacity: heroOpacity, scale: heroScale }}
            className="text-center lg:text-left order-2 lg:order-1 rounded-3xl border border-gray-200/60 dark:border-gray-800/40 bg-white/50 dark:bg-gray-900/20 backdrop-blur-md p-6 sm:p-10 shadow-sm shadow-gray-200/40 dark:shadow-none"
          >
            <motion.p
              initial={{ opacity: 0, y: 20, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="tech-label mb-6 flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="hidden lg:block w-8 h-px bg-primary-600 dark:bg-primary-400" />
              Software Engineer
            </motion.p>

            <div className="overflow-hidden mb-6">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.22 } },
                }}
                className="text-gradient font-semibold flex flex-wrap justify-center lg:justify-start gap-x-[0.28em]"
              >
                {["Paúl", "Sánchez"].map((word) => (
                  <span key={word} className="overflow-hidden inline-block pb-1">
                    <motion.span
                      variants={{
                        hidden: { y: "110%", rotate: 3, opacity: 0 },
                        visible: {
                          y: "0%",
                          rotate: 0,
                          opacity: 1,
                          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                        },
                      }}
                      className="inline-block origin-bottom"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-100 mb-10 h-8"
            >
              <span className="text-accent">{">"}</span>{" "}
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2500,
                  "Mobile Developer",
                  2500,
                  ".NET & Angular",
                  2500,
                  "Flutter & React",
                  2500,
                ]}
                wrapper="span"
                speed={45}
                repeat={Number.POSITIVE_INFINITY}
                cursor={false}
              />
              <span className="animate-blink text-accent">_</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((link) => (
                <MagneticButton
                  key={link.label}
                  href={link.href}
                  download={link.download}
                  className={
                    link.download
                      ? "btn-primary inline-flex items-center gap-2"
                      : "btn-secondary inline-flex items-center gap-2"
                  }
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </MagneticButton>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            style={{ x: photoX, opacity: heroOpacity, scale: heroScale }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center"
            >
              <TiltPhoto reduceMotion={reduceMotion} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

export default Header
