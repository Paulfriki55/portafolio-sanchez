"use client"

import { motion, AnimatePresence, animate, useInView } from "framer-motion"
import { useState, useEffect, useMemo, useRef } from "react"
import { FaChevronLeft, FaChevronRight, FaCode, FaDatabase, FaChartLine, FaUsers, FaLayerGroup, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa"
import { Reveal, RevealGroup, SectionHeading, SectionShell } from "@/components/motion/Reveal"
import { Magnetic, SpotlightCard, SectionAtmosphere } from "@/components/motion/Interactive"
import { cardSlide, easeOutExpo } from "@/lib/motion"

const stats = [
  { value: 3, suffix: "+", label: "Años de experiencia" },
  { value: 8, suffix: "", label: "Empresas" },
  { value: 20, suffix: "+", label: "Tecnologías" },
]

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="font-mono text-3xl sm:text-4xl font-bold text-accent">
      {display}
      {suffix}
    </span>
  )
}

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
        content:
          "Domino lenguajes como Java, Python, JavaScript, y frameworks como React, Angular y .NET Core para crear experiencias digitales excepcionales.",
        icon: FaLayerGroup,
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
    <SectionShell id="about" className="section bg-white dark:bg-black transition-colors duration-300">
      <SectionAtmosphere className="container-custom relative z-10">
        <SectionHeading index="01 / About">Sobre mí</SectionHeading>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-[2fr_3fr] gap-6 items-stretch">
          <Reveal variant="left" className="flex flex-col gap-6">
            <SpotlightCard className="surface-card p-6 sm:p-8 flex-1">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Ingeniero de Software radicado en Quito. Construyo aplicaciones web y móviles de
                extremo a extremo: desde la API y la base de datos hasta interfaces con animaciones
                cuidadas.
              </p>
              <div className="space-y-3 font-mono text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="w-3 h-3 text-accent" />
                  Quito, Ecuador
                </div>
                <div className="flex items-center gap-2">
                  <FaGraduationCap className="w-3 h-3 text-accent" />
                  Ing. de Software, ESPE
                </div>
              </div>
            </SpotlightCard>

            <RevealGroup pace="fast" className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={cardSlide}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="surface-card p-4 text-center hover:border-primary-500/40 transition-colors duration-300"
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-1 text-[11px] leading-tight text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </RevealGroup>
          </Reveal>

          <Reveal variant="right">
            <SpotlightCard className="surface-card p-6 sm:p-10 h-full">
              <div className="h-full min-h-[280px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: easeOutExpo }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.7, rotate: -12 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 16 }}
                      className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-primary-500/30 bg-primary-500/10 mb-6"
                    >
                      {(() => {
                        const IconComponent = descriptions[currentIndex].icon
                        return <IconComponent className="w-6 h-6 text-accent" />
                      })()}
                    </motion.div>

                    <h3 className="text-xl sm:text-2xl mb-4 text-gray-900 dark:text-white">
                      {descriptions[currentIndex].title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto">
                      {descriptions[currentIndex].content}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center justify-center gap-4 mt-8">
                  <Magnetic strength={0.4}>
                    <motion.button
                      onClick={handlePrev}
                      className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300"
                      whileTap={{ scale: 0.92 }}
                      aria-label="Anterior"
                    >
                      <FaChevronLeft className="w-3 h-3" />
                    </motion.button>
                  </Magnetic>

                  <div className="flex gap-2">
                    {descriptions.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-primary-500 w-8"
                            : "bg-gray-300 dark:bg-gray-700 w-2 hover:bg-primary-300 dark:hover:bg-primary-700"
                        }`}
                        aria-label={`Ir a la descripción ${index + 1}`}
                      />
                    ))}
                  </div>

                  <Magnetic strength={0.4}>
                    <motion.button
                      onClick={handleNext}
                      className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300"
                      whileTap={{ scale: 0.92 }}
                      aria-label="Siguiente"
                    >
                      <FaChevronRight className="w-3 h-3" />
                    </motion.button>
                  </Magnetic>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </SectionAtmosphere>
    </SectionShell>
  )
}

export default About
