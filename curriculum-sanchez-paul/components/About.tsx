"use client"

import { motion, AnimatePresence } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useState, useEffect, useMemo } from "react"
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

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

  useEffect(() => {
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

  // Card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  // Staggered animation for content elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative py-16 px-4 min-h-[80vh] overflow-hidden w-full bg-gradient-to-r from-gray-900 to-gray-800"
    >
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-sm bg-white/10 p-8 rounded-xl shadow-2xl border border-white/10 relative overflow-hidden"
          style={{
            boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(96, 165, 250, 0.3)",
          }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold mb-12 text-center relative"
            style={{
              textShadow: "0 0 15px rgba(96, 165, 250, 0.5)",
            }}
          >
            <TypeAnimation
              sequence={["SOBRE MÍ", 1000, "ABOUT ME", 1000]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
            />

            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full absolute bottom-0 left-1/2"
              initial={{ width: 0, x: "-50%" }}
              animate={{
                width: "60%",
                x: "-50%",
              }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: "easeOut",
              }}
            />
          </motion.h2>

          <div className="min-h-[220px] flex flex-col items-center justify-center">
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
                  className="relative p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/5 overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(96, 165, 250, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FaQuoteLeft className="absolute top-4 left-4 text-blue-400/30 text-xl" />
                  <FaQuoteRight className="absolute bottom-4 right-4 text-blue-400/30 text-xl" />

                  <motion.h3
                    className="text-2xl font-semibold mb-4 text-blue-300"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    style={{
                      textShadow: "0 0 10px rgba(96, 165, 250, 0.3)",
                    }}
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
            <motion.div variants={itemVariants} className="flex gap-2 mt-8 items-center justify-center">
              <motion.button
                onClick={handlePrev}
                className="text-gray-400 hover:text-blue-300 focus:outline-none p-2 rounded-full hover:bg-white/10 transition-all"
                whileHover={{
                  scale: 1.2,
                  boxShadow: "0 0 15px rgba(96, 165, 250, 0.5)",
                }}
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
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0 0 10px rgba(96, 165, 250, 0.7)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Ir a la descripción ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={handleNext}
                className="text-gray-400 hover:text-blue-300 focus:outline-none p-2 rounded-full hover:bg-white/10 transition-all"
                whileHover={{
                  scale: 1.2,
                  boxShadow: "0 0 15px rgba(96, 165, 250, 0.5)",
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next"
              >
                <FaChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About

