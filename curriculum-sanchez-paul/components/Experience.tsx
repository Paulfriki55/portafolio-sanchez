'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBriefcase, FaCalendar, FaCheckCircle } from 'react-icons/fa'

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

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        EXPERIENCIA</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 space-y-4">
            {experiences.map((exp, index) => (
              <motion.button
                key={index}
                className={`w-full p-4 rounded-lg transition-all duration-300 flex items-center justify-between 
                  ${activeIndex === index 
                    ? 'bg-blue-700 shadow-lg' 
                    : 'bg-gray-800 hover:bg-gray-700'}`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="flex items-center">
                  <FaBriefcase className="mr-3 text-blue-300" />
                  <span className="font-semibold">{exp.company}</span>
                </div>
                {activeIndex === index && (
                  <FaCheckCircle className="text-green-400" />
                )}
              </motion.button>
            ))}
          </div>
          <motion.div
            className="md:w-2/3 bg-gray-800/50 p-6 rounded-lg"
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-blue-300">
                {experiences[activeIndex].position}
              </h3>
              <div className="flex items-center text-blue-200">
                <FaCalendar className="mr-2" />
                <span>{experiences[activeIndex].period}</span>
              </div>
            </div>
            
            <ul className="space-y-3">
              {experiences[activeIndex].responsibilities.map((resp, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <FaCheckCircle className="mr-3 mt-1 text-green-400 flex-shrink-0" />
                  <span>{resp}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Experience

