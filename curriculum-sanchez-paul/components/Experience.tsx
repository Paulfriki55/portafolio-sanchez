'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code2, Database, LineChart, Smartphone, CheckCircle2 } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'SMART HELP S.A',
      position: 'Desarrollador Full Stack',
      period: 'Junio 2024 - Actualidad',
      year: '2024',
      icon: Code2,
      color: 'bg-blue-500',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-400',
      responsibilities: [
        'Desarrollo APIs Rest y SOAP en .NET (ASP.NET Core)',
        'Manejo de base de datos en SQL Server Management',
        'Creación de aplicaciones móviles en Flutter, Expo y React',
        'Desarrollo de aplicaciones web a medida con Next.js, React y Angular',
        'Administración de servidores Windows Server y IIS Express',
      ],
    },
    {
      company: 'EFICACIAEC',
      position: 'Analista de Datos SGI - BI',
      period: 'Febrero 2024 - Junio 2024',
      year: '2024',
      icon: LineChart,
      color: 'bg-cyan-500',
      borderColor: 'border-cyan-500',
      textColor: 'text-cyan-400',
      responsibilities: [
        'Creación de reportes detallados y presentaciones ejecutivas en Power BI',
        'Extracción, Transformación y Carga (ETL) en Herramientas de Business Intelligence, específicamente en QlikSense',
        'Automatización de tareas repetitivas mediante scripts',
      ],
    },
    {
      company: 'SIRGA Geo Consultoría',
      position: 'Analista de sistemas informáticos',
      period: 'Mayo 2023 - Agosto 2023',
      year: '2023',
      icon: Database,
      color: 'bg-blue-600',
      borderColor: 'border-blue-600',
      textColor: 'text-blue-400',
      responsibilities: [
        'Desarrollo y maquetación Web Frontend- REACT',
        'Desarrollo Web Backend - API RESTFUL',
        'Administración de Servidor Linux',
        'Seguridad Web, Control de versiones y Diseño',
        'Desarrollo de API RESTful',
        'Administración y Gestión de Base de Datos',
      ],
    },
    {
      company: 'Prowess EC',
      position: 'Desarrollador Junior',
      period: 'Octubre 2022 - Abril 2023',
      year: '2022',
      icon: Smartphone,
      color: 'bg-cyan-600',
      borderColor: 'border-cyan-600',
      textColor: 'text-cyan-400',
      responsibilities: [
        'Desarrollador de Aplicaciones Móviles IOS y Android, Flutter - Kotlin',
        'Mantenimiento Base de Datos en Firebase',
        'Gestión de Google Cloud Services',
        'Jefe de Proyecto - Metodologías ágiles (SCRUM)',
        'Coordinación y liderazgo de equipos multifuncionales',
      ],
    },
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="relative py-20 px-4 bg-gray-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-full bg-gradient-to-r from-blue-400 to-cyan-400"
            style={{ top: `${i * 5}%` }}
            animate={{
              x: [-1000, 1000],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
        >
          EXPERIENCIA PROFESIONAL
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-[2px] bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600" />

          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`mb-12 flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-16 items-center md:items-start`}
              >
                {/* Year and Icon Container */}
                <div className="relative flex md:w-1/2 justify-center md:justify-end items-center flex-col md:flex-row">
                  <div className={`absolute w-px h-full ${exp.color} left-1/2 transform -translate-x-px md:hidden`} />
                  <motion.div
                    className={`w-16 h-16 rounded-full ${exp.color} border-4 border-gray-900 shadow-lg flex items-center justify-center z-10 relative`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <exp.icon className="text-white w-8 h-8" />
                  </motion.div>
                  <div className={`absolute text-2xl font-bold ${exp.textColor} ${index % 2 === 0 ? 'md:right-24' : 'md:left-24'}`}>
                    {exp.year}
                  </div>
                </div>

                {/* Content */}
                <div className="relative md:w-1/2">
                  <motion.div
                    className={`bg-gray-800/40 backdrop-blur-sm p-6 rounded-lg border-l-4 ${exp.borderColor} shadow-xl`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{exp.company}</h3>
                    <h4 className={`text-lg ${exp.textColor} mb-2`}>{exp.position}</h4>
                    <p className="text-gray-400 mb-4">{exp.period}</p>
                    
                    <motion.button
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className={`text-sm px-4 py-2 rounded-full ${exp.color} text-white hover:opacity-90 transition-opacity`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {activeIndex === index ? "Ver menos" : "Ver más"}
                    </motion.button>

                    {activeIndex === index && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-2"
                      >
                        {exp.responsibilities.map((resp, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className={`mt-1 flex-shrink-0 ${exp.textColor}`} />
                            <span className="text-gray-300">{resp}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
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

