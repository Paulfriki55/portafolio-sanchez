'use client'

import { motion, useAnimation } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Code2, Database, LineChart, Smartphone, CheckCircle2 } from 'lucide-react'
import { FaCog } from "react-icons/fa"

const Experience = () => {
  const experiences = [
    {
      company: "Logiztik Alliance Group",
      position: "Desarrollador Full Stack",
      period: "Enero 2025 - Actualidad",
      year: "2025",
      month: "Ene",
      icon: FaCog,
      color: "bg-green-500",
      borderColor: "border-green-500",
      textColor: "text-green-400",
      responsibilities: [
        "Análisis, desarrollo y documentación de sistemas informáticos.",
        "Implementación y validación de soluciones de software usando .NET, SQL Server, Azure DevOps, Angular.",
        "Generación de pruebas, aseguramiento de calidad (QA) y control de errores.",
        "Creación de nuevos componentes y mejora de sistemas existentes.",
        "Elaboración de manuales técnicos y cronogramas de trabajo.",
      ],
    },
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

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const timelineElement = timelineRef.current;
    if (timelineElement) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            controls.start("visible");
            observer.unobserve(timelineElement); // Stop observing after animation starts
          }
        },
        { threshold: 0.2 } // Trigger when 20% of the timeline is visible
      );
      observer.observe(timelineElement);
    }
  }, [controls]);


  const timelineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
  };

  const experienceItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


  return (
    <section className="relative py-20 px-4 bg-gray-900 text-white overflow-hidden">
      {/* Existing animated background */}
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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
        >
          EXPERIENCIA PROFESIONAL
        </motion.h2>

        <motion.div
          ref={timelineRef}
          className="relative"
          variants={timelineVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Enhanced timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400"></div>

          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={experienceItemVariants}
                className={`mb-20 md:mb-32 flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-16 items-center md:items-start`}
              >
                {/* Enhanced year and icon container */}
                <div className="relative flex md:w-1/3 justify-center md:justify-end items-center flex-col">
                  <motion.div
                    className={`w-16 h-16 rounded-full ${exp.color} border-4 border-gray-900 shadow-xl flex items-center justify-center z-10 relative`}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <exp.icon className="text-white w-8 h-8" />
                  </motion.div>
                  <div className={`mt-4 text-2xl font-bold ${exp.textColor}`}>
                    {exp.year}
                  </div>
                </div>

                {/* Enhanced content card */}
                <div className="relative md:w-2/3">
                  <motion.div
                    className={`bg-gray-800/70 p-8 rounded-xl border-l-4 ${exp.borderColor} shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300`}
                    whileHover={{ scale: 1.02, translateY: -5 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-3">{exp.company}</h3>
                    <h4 className={`text-xl ${exp.textColor} font-semibold mb-3`}>{exp.position}</h4>
                    <p className="text-gray-400 mb-4 font-medium">{exp.period}</p>

                    <motion.button
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className={`text-sm px-4 py-2 rounded-full ${exp.color} text-white hover:opacity-90 transition-colors duration-200 font-semibold`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {activeIndex === index ? "Ver menos" : "Ver más"}
                    </motion.button>

                    {activeIndex === index && (
                      <motion.ul
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 space-y-3"
                      >
                        {exp.responsibilities.map((resp, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 group"
                          >
                            <CheckCircle2 className={`mt-1 flex-shrink-0 ${exp.textColor} group-hover:scale-110 transition-transform duration-200`} />
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{resp}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience