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
          className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
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
          {/* Timeline line - Más sutil y elegante */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gray-700 before:absolute before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-2 before:h-2 before:rounded-full before:bg-cyan-400 after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-2 after:h-2 after:rounded-full after:bg-cyan-400"></div>

          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={experienceItemVariants}
                className={`mb-16 md:mb-24 flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-6 md:gap-12 items-center md:items-start`}
              >
                {/* Year and Icon Container - Simplificado y centrado */}
                <div className="relative flex md:w-1/3 justify-center md:justify-end items-center flex-col">
                  <div className={`absolute w-px h-full bg-gray-700 left-1/2 transform -translate-x-px md:hidden`} />
                  <motion.div
                    className={`w-14 h-14 rounded-full ${exp.color} border-4 border-gray-900 shadow-md flex items-center justify-center z-10 relative`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <exp.icon className="text-white w-7 h-7" />
                  </motion.div>
                  <div className={`mt-3 md:mt-2 text-xl font-semibold ${exp.textColor} text-center`}>
                    {exp.year}
                  </div>
                  <div className="text-gray-500 text-sm text-center">{exp.month}</div> {/* Agregado el mes */}
                </div>

                {/* Content -  Diseño más limpio y espaciado */}
                <div className="relative md:w-2/3">
                  <motion.div
                    className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-md border-l-2 ${exp.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{exp.company}</h3>
                    <h4 className={`text-lg ${exp.textColor} mb-2`}>{exp.position}</h4>
                    <p className="text-gray-400 mb-3">{exp.period}</p>

                    {/* Botón "Ver más/Ver menos" -  Estilo más discreto */}
                    <motion.button
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className={`text-sm px-3 py-1 rounded-md ${exp.color} text-white hover:bg-opacity-80 transition-colors duration-200`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {activeIndex === index ? "Ver menos" : "Ver más"}
                    </motion.button>

                    {activeIndex === index && (
                      <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                          visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, staggerChildren: 0.1 } },
                          hidden: { opacity: 0, height: 0, transition: { duration: 0.2 } },
                        }}
                        className="mt-4 space-y-2 overflow-hidden" // overflow-hidden para la animación de altura
                      >
                        {exp.responsibilities.map((resp, i) => (
                          <motion.li
                            key={i}
                            variants={experienceItemVariants}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle2 className={`mt-1 flex-shrink-0 text-gray-500`} /> {/* Icono más discreto */}
                            <span className="text-gray-300 text-sm">{resp}</span> {/* Texto más pequeño y sutil */}
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