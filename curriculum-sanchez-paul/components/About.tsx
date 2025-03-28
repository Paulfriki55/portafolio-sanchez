"use client"

import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useState, useEffect, useRef, useMemo } from "react"
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

// Definir la interfaz para las partículas
interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

const About = () => {
  const descriptions = useMemo(
    () => [
      {
        title: "Desarrollo Full Stack",
        content:
          "Soy un desarrollador de software con experiencia en tecnologías Full Stack, especializado en el desarrollo de aplicaciones web y móviles.",
      },
      {
        title: "Tecnologías",
        content: "Domino lenguajes como Java, Python, JavaScript, y frameworks como React, Angular y .NET Core.",
      },
      {
        title: "Backend & Infraestructura",
        content:
          "Tengo habilidades avanzadas en la creación de APIs REST y SOAP, manejo de bases de datos SQL y NoSQL, y administración de servidores Windows y Linux.",
      },
      {
        title: "Análisis de Datos",
        content:
          "Cuento con experiencia en análisis de datos, ETL y visualización con herramientas como Power BI y QlikSense.",
      },
      {
        title: "Metodología",
        content:
          "Mi enfoque colaborativo, orientación a resultados y capacidad de liderazgo me permiten entregar soluciones eficientes y de alta calidad, adaptándome a los desafíos de proyectos complejos en entornos ágiles.",
      },
    ],
    [],
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const contentInView = useInView(contentRef, { once: false, amount: 0.6 })

  // Scroll animation values
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects for SVG paths
  const path1Y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const path2Y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95])

  // Floating particles - corregido con el tipo adecuado
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate random particles
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))

    setParticles(newParticles)

    // Auto-rotate descriptions
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length)
    }, 10000)

    return () => clearInterval(timer)
  }, [descriptions.length])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + descriptions.length) % descriptions.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length)
  }

  // Card flip animation variants
  const cardVariants = {
    hidden: {
      rotateY: 90,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 70,
      },
    },
    exit: {
      rotateY: -90,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  }

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative py-16 px-4 min-h-[80vh] overflow-hidden w-full"
      style={{ perspective: "1000px" }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"
        style={{ opacity: backgroundOpacity }}
      >
        <svg className="absolute w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#60a5fa", stopOpacity: 0.8 }}>
                <animate attributeName="stop-opacity" values="0.8;0.5;0.8" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" style={{ stopColor: "#2dd4bf", stopOpacity: 0.8 }}>
                <animate attributeName="stop-opacity" values="0.8;0.5;0.8" dur="8s" repeatCount="indefinite" />
              </stop>
            </linearGradient>

            {/* Glow filter */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Animated paths with parallax effect */}
          <motion.path
            d="M0 350 C 300 450, 600 250, 900 350 S 1500 450, 1920 350"
            fill="none"
            stroke="url(#aboutGrad)"
            strokeWidth="3"
            opacity="0.8"
            filter="url(#glow)"
            style={{ y: path1Y }}
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                                M0 350 C 300 450, 600 250, 900 350 S 1500 450, 1920 350;
                                M0 350 C 300 250, 600 450, 900 350 S 1500 250, 1920 350;
                                M0 350 C 300 450, 600 250, 900 350 S 1500 450, 1920 350
                            "
            />
          </motion.path>

          <motion.path
            d="M0 550 Q 200 500, 400 550 T 800 550 T 1200 550 T 1600 550 T 1920 550"
            fill="none"
            stroke="url(#aboutGrad)"
            strokeWidth="2.5"
            opacity="0.6"
            filter="url(#glow)"
            style={{ y: path2Y }}
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                                M0 550 Q 200 500, 400 550 T 800 550 T 1200 550 T 1600 550 T 1920 550;
                                M0 550 Q 200 600, 400 550 T 800 550 T 1200 550 T 1600 550 T 1920 550;
                                M0 550 Q 200 500, 400 550 T 800 550 T 1200 550 T 1600 550 T 1920 550
                            "
            />
          </motion.path>
        </svg>

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              filter: "blur(1px)",
              boxShadow: "0 0 8px rgba(96, 165, 250, 0.8)",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, particle.id % 2 === 0 ? 20 : -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Main content */}
      <motion.div className="relative z-10 max-w-4xl mx-auto" style={{ scale }} ref={contentRef}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="backdrop-blur-sm bg-white/10 p-8 rounded-xl shadow-2xl border border-white/10"
        >
          <motion.h2
            className="text-5xl font-bold mb-12 text-center"
            initial={{ letterSpacing: "0px" }}
            animate={contentInView ? { letterSpacing: "2px" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <TypeAnimation
              sequence={["SOBRE MÍ", 1000, "ABOUT ME", 1000]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
            />
          </motion.h2>

          <div className="min-h-[220px] flex flex-col items-center justify-center perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-center px-6 w-full"
              >
                <motion.div
                  className="relative p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaQuoteLeft className="absolute top-4 left-4 text-blue-400/30 text-xl" />
                  <FaQuoteRight className="absolute bottom-4 right-4 text-blue-400/30 text-xl" />

                  <motion.h3
                    className="text-2xl font-semibold mb-4 text-blue-300"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {descriptions[currentIndex].title}
                  </motion.h3>

                  <motion.p
                    className="text-lg text-gray-300 leading-relaxed"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    {descriptions[currentIndex].content}
                  </motion.p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation controls */}
            <motion.div
              className="flex gap-2 mt-8 items-center justify-center"
              initial={{ opacity: 0 }}
              animate={contentInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.button
                onClick={handlePrev}
                className="text-gray-400 hover:text-blue-300 focus:outline-none p-2 rounded-full hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous"
              >
                <FaChevronLeft className="w-5 h-5" />
              </motion.button>

              <div className="flex gap-2 mx-2">
                {descriptions.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-blue-400 w-6" : "bg-white/50 w-2"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Ir a la descripción ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={handleNext}
                className="text-gray-400 hover:text-blue-300 focus:outline-none p-2 rounded-full hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next"
              >
                <FaChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default About

