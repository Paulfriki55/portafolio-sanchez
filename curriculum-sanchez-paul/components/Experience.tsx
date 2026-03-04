"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaMapMarkerAlt } from "react-icons/fa"

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
    id: "0",
    company: "Produbanco",
    position: "Desarrollador Full Stack",
    period: "Febrero 2026 - Actualidad",
    location: "Quito, Ecuador",
    color: "from-amber-600 to-amber-700",
    responsibilities: [
      "Desarrollo de aplicaciones corporativas con .NET (ASP.NET Core)",
      "Diseño y desarrollo de APIs RESTful y servicios backend en C#",
      "Gestión y optimización de bases de datos con SQL Server Management Studio",
      "Desarrollo de interfaces de usuario e implementación de nuevas funcionalidades con Angular",
      "Integración de servicios backend .NET con aplicaciones frontend Angular",
      "Optimización de consultas SQL, procedimientos almacenados y vistas",
      "Mantenimiento y evolución de sistemas del sector financiero",
      "Trabajo en entornos regulados con estándares de seguridad bancaria",
    ],
  },
  {
    id: "1",
    company: "Grupo KFC",
    position: "Desarrollador de Software",
    period: "Octubre 2025 - Febrero 2026",
    location: "Ecuador (Remoto)",
    color: "from-orange-500 to-orange-600",
    responsibilities: [
      "Desarrollo de aplicaciones web Front-End y Back-End",
      "Manejo de HTML, CSS, JavaScript y VueJS",
      "Programación en PHP (Laravel)",
      "Diseño y consumo de APIs RESTful",
      "Gestión de bases de datos SQL Server",
      "Implementación de diseño responsive y adaptable",
      "Pruebas, depuración y optimización de rendimiento",
      "Trabajo en entornos ágiles (Agile / CI/CD)",
    ],
  },
  {
    id: "2",
    company: "Logiztik Alliance Group",
    position: "Desarrollador Full Stack",
    period: "Enero 2025 - Octubre 2025",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
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
    id: "7",
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
  const [selectedExperience, setSelectedExperience] = useState<Experience>(experiences[0])

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
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gradient mb-4 sm:mb-6"
          >
            Experiencia Profesional
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-primary-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Master-Detail Layout */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Lista maestra (izquierda) */}
          <div className="lg:w-[320px] flex-shrink-0">
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible">
              {experiences.map((experience, index) => {
                const isSelected = selectedExperience.id === experience.id
                return (
                  <motion.button
                    key={experience.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedExperience(experience)}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 flex-shrink-0 lg:flex-shrink min-w-[200px] lg:min-w-0 overflow-hidden group ${
                      isSelected
                        ? "bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg shadow-primary-500/10 dark:shadow-primary-400/5 border border-primary-400/30 dark:border-primary-500/20"
                        : "bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 border border-gray-200/80 dark:border-gray-700/80 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                  >
                    {/* Brillo sutil en seleccionado */}
                    {isSelected && (
                      <div className={`absolute inset-0 opacity-[0.08] bg-gradient-to-r ${experience.color} pointer-events-none`} />
                    )}
                    <div className={`relative w-1.5 h-10 rounded-full bg-gradient-to-b ${experience.color} flex-shrink-0 transition-opacity duration-300 ${
                      isSelected ? "opacity-100 shadow-sm" : "opacity-50 group-hover:opacity-75"
                    }`} />
                    <div className="relative flex-1 min-w-0">
                      <p className={`font-medium truncate transition-colors duration-300 ${
                        isSelected
                          ? "text-primary-600 dark:text-primary-400"
                          : "text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                      }`}>
                        {experience.company}
                      </p>
                      <p className={`text-xs truncate transition-colors duration-300 ${
                        isSelected
                          ? "text-primary-500/80 dark:text-primary-400/80"
                          : "text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400"
                      }`}>
                        {experience.period}
                      </p>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Panel de detalle (derecha) */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExperience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 sm:p-8 h-full relative"
              >
                {/* Barra de color */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-xl sm:rounded-t-2xl bg-gradient-to-r ${selectedExperience.color}`} />
                
                <div className="pt-2">
                  <div className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${selectedExperience.color} text-white text-sm font-medium mb-4`}>
                    {selectedExperience.period}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-2">
                    {selectedExperience.company}
                  </h3>
                  
                  <h4 className="text-lg sm:text-xl font-medium text-primary-600 dark:text-primary-400 mb-4">
                    {selectedExperience.position}
                  </h4>
                  
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200 mb-6">
                    <FaMapMarkerAlt className="w-4 h-4 flex-shrink-0 text-primary-500" />
                    <span>{selectedExperience.location}</span>
                  </div>

                  <h5 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
                    Responsabilidades principales:
                  </h5>
                  <ul className="space-y-2">
                    {selectedExperience.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: idx * 0.04 }}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-200"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base leading-relaxed">{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
