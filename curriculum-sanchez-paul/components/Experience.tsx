"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt } from "react-icons/fa"

interface Experience {
  id: string
  company: string
  position: string
  period: string
  location: string
  color: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "Logiztik Alliance Group",
    position: "Desarrollador Full Stack",
    period: "Enero 2025 - Actualidad",
    location: "Quito, Ecuador",
    color: "from-green-500 to-green-600",
    responsibilities: [
      "Análisis, desarrollo y documentación de sistemas informáticos.",
      "Implementación y validación de soluciones de software usando .NET, SQL Server, Azure DevOps, Angular.",
      "Generación de pruebas, aseguramiento de calidad (QA) y control de errores.",
      "Creación de nuevos componentes y mejora de sistemas existentes.",
      "Elaboración de manuales técnicos y cronogramas de trabajo.",
    ],
  },
  {
    id: "2",
    company: "PrexTechnologies",
    position: "Desarrollador Mobile Flutter Full-Stack",
    period: "Abril 2025 - Julio 2025",
    location: "Quito, Ecuador",
    color: "from-purple-500 to-purple-600",
    responsibilities: [
      "Arquitectura de aplicaciones: Implementación de patrones MVC, separación de responsabilidades y gestión de estados",
      "Integración de APIs: Desarrollo de servicios HTTP, manejo de autenticación JWT, y sincronización de datos en tiempo real",
      "UI/UX Avanzado: Creación de interfaces modernas con animaciones fluidas, navegación intuitiva y componentes reutilizables",
      "Autenticación y seguridad: Sistemas completos de login, registro, verificación por email y manejo seguro de tokens",
    ],
  },
  {
    id: "3",
    company: "SMART HELP DESK S.A",
    position: "Desarrollador Full Stack",
    period: "Junio 2024 - Julio 2025",
    location: "Quito, Ecuador",
    color: "from-blue-500 to-blue-600",
    responsibilities: [
      "Desarrollo APIs Rest y SOAP en .NET (ASP.NET Core)",
      "Manejo de base de datos en SQL Server Management",
      "Creación de aplicaciones móviles en Flutter, Expo y React",
      "Desarrollo de aplicaciones web a medida con Next.js, React y Angular",
      "Administración de servidores Windows Server y IIS Express",
    ],
  },
  {
    id: "4",
    company: "EFICACIAEC",
    position: "Analista de Datos SGI - BI",
    period: "Febrero 2024 - Junio 2024",
    location: "Quito, Ecuador",
    color: "from-cyan-500 to-cyan-600",
    responsibilities: [
      "Creación de reportes detallados y presentaciones ejecutivas en Power BI",
      "Extracción, Transformación y Carga (ETL) en Herramientas de Business Intelligence, específicamente en QlikSense",
      "Automatización de tareas repetitivas mediante scripts",
    ],
  },
  {
    id: "5",
    company: "SIRGA Geo Consultoría",
    position: "Analista de sistemas informáticos",
    period: "Mayo 2023 - Agosto 2023",
    location: "Quito, Ecuador",
    color: "from-indigo-500 to-indigo-600",
    responsibilities: [
      "Desarrollo y maquetación Web Frontend- REACT",
      "Desarrollo Web Backend - API RESTFUL",
      "Administración de Servidor Linux",
      "Seguridad Web, Control de versiones y Diseño",
      "Desarrollo de API RESTful",
      "Administración y Gestión de Base de Datos",
    ],
  },
  {
    id: "6",
    company: "Prowess EC",
    position: "Desarrollador Junior",
    period: "Octubre 2022 - Abril 2023",
    location: "Quito, Ecuador",
    color: "from-teal-500 to-teal-600",
    responsibilities: [
      "Desarrollador de Aplicaciones Móviles IOS y Android, Flutter - Kotlin",
      "Mantenimiento Base de Datos en Firebase",
      "Gestión de Google Cloud Services",
      "Jefe de Proyecto - Metodologías ágiles (SCRUM)",
      "Coordinación y liderazgo de equipos multifuncionales",
    ],
  },
]

const Experience: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section id="experience" className="section bg-white dark:bg-black transition-all duration-500">
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
            Experiencia Profesional
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
          <div className="relative">
            {/* Línea de tiempo */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-400 dark:from-primary-400 dark:to-primary-500" />

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                {/* Indicador de tiempo */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full border-4 border-white dark:border-black shadow-lg" />

                {/* Tarjeta de experiencia */}
                <div className="ml-16">
                  <motion.div
                    className="glass-card p-8 cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    onClick={() => toggleCard(experience.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-light text-gray-900 dark:text-white">
                            {experience.company}
                          </h3>
                          <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${experience.color} text-white text-xs font-medium`}>
                            {experience.period}
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-medium text-primary-600 dark:text-primary-400 mb-2">
                          {experience.position}
                        </h4>
                        
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <FaMapMarkerAlt className="w-4 h-4" />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                      
                      <motion.button
                        className="p-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <AnimatePresence mode="wait">
                          {expandedCard === experience.id ? (
                            <motion.div
                              key="up"
                              initial={{ rotate: -90 }}
                              animate={{ rotate: 0 }}
                              exit={{ rotate: 90 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FaChevronUp className="w-4 h-4" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="down"
                              initial={{ rotate: 90 }}
                              animate={{ rotate: 0 }}
                              exit={{ rotate: -90 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FaChevronDown className="w-4 h-4" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </div>

                    {/* Detalles de responsabilidades */}
                    <AnimatePresence>
                      {expandedCard === experience.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                            <h5 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                              Responsabilidades principales:
                            </h5>
                            <ul className="space-y-3">
                              {experience.responsibilities.map((responsibility, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                                  className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                                >
                                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-sm leading-relaxed">{responsibility}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience