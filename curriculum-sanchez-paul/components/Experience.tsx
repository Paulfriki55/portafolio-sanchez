// Experience.tsx
'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import { FaCalendar, FaCheckCircle, FaChevronDown } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      company: 'SMART HELP S.A',
      position: 'Desarrollador Full Stack',
      period: 'Junio 2024 - Actualidad',
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
  const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    <motion.section
        ref={ref}
      initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-full bg-gradient-to-r from-blue-400 to-purple-500"
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

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
            initial={{opacity: 0}}
            animate={isInView ? { opacity: 1} : {}}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          EXPERIENCIA
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
               className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className={`p-4 rounded-lg cursor-pointer ${
                  activeIndex === index ? 'bg-blue-700/50' : 'bg-gray-800/30'
                }`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-blue-300">{exp.company}</h3>
                    <h4 className="text-lg text-purple-300">{exp.position}</h4>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-blue-200 text-sm">
                      <FaCalendar className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    >
                      <FaChevronDown className="text-blue-300" />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <motion.ul className="mt-4 space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start"
                          >
                            <FaCheckCircle className="mr-3 mt-1 text-green-400 flex-shrink-0" />
                            <span className="text-sm">{resp}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience