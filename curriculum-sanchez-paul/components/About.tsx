"use client"

import { motion, AnimatePresence } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useState, useEffect, useMemo } from "react"
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight, FaCode, FaDatabase, FaChartLine, FaUsers } from "react-icons/fa"

const About = () => {
  const descriptions = useMemo(
    () => [
      {
        title: "Desarrollo Full Stack",
        content:
          "Soy un desarrollador de software con experiencia en tecnologías Full Stack, especializado en el desarrollo de aplicaciones web y móviles modernas y escalables.",
        icon: FaCode,
      },
      {
        title: "Tecnologías Modernas",
        content: "Domino lenguajes como Java, Python, JavaScript, y frameworks como React, Angular y .NET Core para crear experiencias digitales excepcionales.",
        icon: FaCode,
      },
      {
        title: "Backend & Infraestructura",
        content:
          "Tengo habilidades avanzadas en la creación de APIs REST y SOAP, manejo de bases de datos SQL y NoSQL, y administración de servidores Windows y Linux.",
        icon: FaDatabase,
      },
      {
        title: "Análisis de Datos",
        content:
          "Cuento con experiencia en análisis de datos, ETL y visualización con herramientas como Power BI y QlikSense para transformar datos en insights valiosos.",
        icon: FaChartLine,
      },
      {
        title: "Metodología Ágil",
        content:
          "Mi enfoque colaborativo, orientación a resultados y capacidad de liderazgo me permiten entregar soluciones eficientes y de alta calidad en entornos ágiles.",
        icon: FaUsers,
      },
    ],
    [],
  )

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [descriptions.length])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + descriptions.length) % descriptions.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length)
  }

  return (
    <section id="about" className="section bg-white dark:bg-black transition-all duration-500">
      {/* Fondo con gradiente sutil solo en modo claro */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-primary-100/10 dark:bg-transparent" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gradient mb-6"
          >
            <TypeAnimation
              sequence={["Sobre mí", 2000, "About me", 2000]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="font-extralight"
            />
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-400 mx-auto rounded-full"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-12"
          >
            <div className="min-h-[300px] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center w-full"
                >
                  <motion.div
                    className="relative p-8 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icono */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6"
                    >
                      {(() => {
                        const IconComponent = descriptions[currentIndex].icon;
                        return <IconComponent className="w-8 h-8 text-primary-600 dark:text-primary-400" />;
                      })()}
                    </motion.div>

                    {/* Comillas decorativas */}
                    <FaQuoteLeft className="absolute top-6 left-6 text-primary-200 dark:text-primary-800 text-xl" />
                    <FaQuoteRight className="absolute bottom-6 right-6 text-primary-200 dark:text-primary-800 text-xl" />

                    <motion.h3
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="text-2xl font-light mb-6 text-gray-900 dark:text-white"
                    >
                      {descriptions[currentIndex].title}
                    </motion.h3>

                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
                    >
                      {descriptions[currentIndex].content}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Controles de navegación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center justify-center gap-4 mt-8"
              >
                <motion.button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Anterior"
                >
                  <FaChevronLeft className="w-4 h-4" />
                </motion.button>

                <div className="flex gap-2">
                  {descriptions.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? "bg-primary-500 w-8" 
                          : "bg-gray-300 dark:bg-gray-600 w-2 hover:bg-primary-300 dark:hover:bg-primary-700"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Ir a la descripción ${index + 1}`}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Siguiente"
                >
                  <FaChevronRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

