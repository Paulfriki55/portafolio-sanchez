"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { FaMapMarkerAlt, FaBriefcase, FaCalendarAlt, FaCheckCircle } from "react-icons/fa"
import { useState, useRef } from "react"

interface Experience {
  id: string
  company: string
  position: string
  period: string
  location: string
  color: string
  domain?: string
  customLogoUrl?: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    id: "0",
    company: "Produbanco",
    position: "Ingeniero de Software",
    period: "Feb 2026 - Actualidad",
    location: "Quito, Ecuador",
    color: "from-lime-400 to-emerald-500",
    domain: "produbanco.com.ec",
    responsibilities: [
      "Desarrollo de aplicaciones corporativas con .NET (ASP.NET Core)",
      "Diseño y desarrollo de APIs RESTful y servicios backend en C#",
      "Gestión y optimización de bases de datos con SQL Server",
      "Desarrollo de interfaces de usuario e implementación con Angular",
      "Mantenimiento y evolución de sistemas del sector financiero bajo estándares de seguridad",
    ],
  },
  {
    id: "1",
    company: "Grupo KFC",
    position: "Desarrollador de Software",
    period: "Oct 2025 - Feb 2026",
    location: "Remoto",
    color: "from-red-500 to-rose-600",
    domain: "grupokfc.com",
    customLogoUrl: "https://e7.pngegg.com/pngimages/879/540/png-clipart-kfc-logo-illustration-hamburger-kfc-take-out-fast-food-fried-chicken-round-kfc-logo-free-logo-design-template-food-thumbnail.png",
    responsibilities: [
      "Desarrollo de aplicaciones web Front-End y Back-End",
      "Programación en PHP (Laravel) y Front-End con VueJS",
      "Diseño y consumo de APIs RESTful",
      "Implementación de diseño responsive y optimización de rendimiento en entornos CI/CD",
    ],
  },
  {
    id: "2",
    company: "Logiztik Alliance Group",
    position: "Desarrollador Full Stack",
    period: "Ene 2025 - Oct 2025",
    location: "Quito, Ecuador",
    color: "from-emerald-400 to-emerald-600",
    domain: "logiztikalliance.com",
    responsibilities: [
      "Análisis, desarrollo y documentación de sistemas usando .NET, SQL Server, Angular",
      "Generación de pruebas, aseguramiento de calidad (QA) y control de errores",
      "Creación de nuevos componentes y mejora de sistemas existentes",
    ],
  },
  {
    id: "3",
    company: "PrexTechnologies",
    position: "Mobile Flutter Full-Stack",
    period: "Abr 2025 - Jul 2025",
    location: "Quito, Ecuador",
    color: "from-violet-500 to-purple-600",
    domain: "prextechnologies.com",
    responsibilities: [
      "Arquitectura de aplicaciones: Implementación de patrones MVC y gestión de estados",
      "UI/UX Avanzado: Interfaces modernas con animaciones fluidas y navegación intuitiva",
      "Sistemas de autenticación completos y sincronización de datos en tiempo real",
    ],
  },
  {
    id: "4",
    company: "SMART HELP DESK S.A",
    position: "Desarrollador Full Stack",
    period: "Jun 2024 - Jul 2025",
    location: "Quito, Ecuador",
    color: "from-blue-500 to-indigo-600",
    responsibilities: [
      "Desarrollo APIs Rest y SOAP en .NET (ASP.NET Core)",
      "Creación de aplicaciones móviles en Flutter, Expo y React",
      "Desarrollo de aplicaciones web a medida con Next.js, React y Angular",
      "Administración de servidores Windows Server y IIS Express",
    ],
  },
  {
    id: "5",
    company: "EFICACIAEC",
    position: "Analista de Datos SGI - BI",
    period: "Feb 2024 - Jun 2024",
    location: "Quito, Ecuador",
    color: "from-cyan-400 to-cyan-600",
    domain: "eficacia.ec",
    responsibilities: [
      "Creación de reportes y presentaciones ejecutivas en Power BI",
      "Procesos ETL en Herramientas de Business Intelligence (QlikSense)",
      "Automatización de tareas repetitivas mediante scripts",
    ],
  },
  {
    id: "6",
    company: "SIRGA Geo Consultoría",
    position: "Analista de sistemas informáticos",
    period: "May 2023 - Ago 2023",
    location: "Quito, Ecuador",
    color: "from-teal-400 to-teal-600",
    responsibilities: [
      "Desarrollo y maquetación Web Frontend (REACT) y Backend (API RESTful)",
      "Administración de Servidor Linux y Gestión de Base de Datos",
      "Seguridad Web y Control de versiones",
    ],
  },
  {
    id: "7",
    company: "Prowess EC",
    position: "Desarrollador Junior",
    period: "Oct 2022 - Abr 2023",
    location: "Quito, Ecuador",
    color: "from-sky-400 to-blue-500",
    responsibilities: [
      "Desarrollador de Aplicaciones Móviles IOS y Android, Flutter - Kotlin",
      "Mantenimiento Base de Datos en Firebase y Gestión de Google Cloud",
      "Jefe de Proyecto bajo metodologías ágiles (SCRUM)",
    ],
  },
]

const CompanyLogo = ({ domain, color, customLogoUrl }: { domain?: string; color: string; customLogoUrl?: string }) => {
  const [error, setError] = useState(false)

  if ((!domain && !customLogoUrl) || error) {
    return (
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg text-white shrink-0`}>
        <FaBriefcase className="w-6 h-6" />
      </div>
    )
  }

  return (
    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center shadow-lg shrink-0 overflow-hidden border border-gray-100 dark:border-gray-800 p-1.5`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={customLogoUrl || `https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
        alt="Company Logo"
        className="w-full h-full object-contain rounded-md"
        onError={() => setError(true)}
      />
    </div>
  )
}

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const ref = useRef<HTMLDivElement>(null)

  // Track the scroll progress of this specific card wrapper.
  // "start -50px" means the animation starts when the top of this wrapper is 50px ABOVE the top of the viewport.
  // Since it sticks at ~90px, this gives the user ~140px of scrolling before it begins to fade.
  // "start -350px" means the animation completes when it has scrolled 350px past the viewport top.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start -50px", "start -350px"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(6px)"])

  return (
    <div ref={ref} className="relative w-full">
      <div
        className="sticky"
        style={{
          top: `calc(90px + ${index * 12}px)`,
          zIndex: index,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ opacity, scale, filter }}
          className="glass-card w-full rounded-2xl overflow-hidden border border-white/40 dark:border-gray-700/60 bg-white dark:bg-black backdrop-blur-xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8)] transition-transform hover:scale-[1.01] duration-300"
        >
          {/* Top line indicator */}
          <div className={`h-1.5 w-full bg-gradient-to-r ${experience.color}`} />
          
          <div className="p-5 sm:p-7 flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Left: Meta info */}
            <div className="md:w-[35%] flex flex-col justify-start shrink-0">
              <div className="flex items-center gap-4 mb-4">
                <CompanyLogo domain={experience.domain} color={experience.color} customLogoUrl={experience.customLogoUrl} />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                    {experience.company}
                  </h3>
                </div>
              </div>
              
              <p className={`text-base sm:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${experience.color} mb-5`}>
                {experience.position}
              </p>

              <div className="space-y-2.5">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm font-medium">
                  <div className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0">
                    <FaCalendarAlt className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm font-medium">
                  <div className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Right: Responsibilities */}
            <div className="md:w-[65%] flex flex-col justify-start">
              <h4 className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4">
                Responsabilidades y Logros
              </h4>
              <ul className="space-y-3">
                {experience.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <div className={`mt-1 flex items-center justify-center shrink-0`}>
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${experience.color} flex items-center justify-center text-white opacity-80 group-hover:opacity-100 transition-opacity`}>
                        <FaCheckCircle className="w-2.5 h-2.5" />
                      </div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-snug font-normal">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const Experience: React.FC = () => {

  return (
    <section id="experience" className="section bg-white dark:bg-black transition-all duration-500 relative py-16 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-primary-100/10 dark:bg-transparent" />
      
      <div className="container-custom relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gradient mb-4"
          >
            Trayectoria Profesional
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-400 mx-auto rounded-full"
          />
        </motion.div>

        <div className="flex flex-col gap-4 sm:gap-6 relative pb-32">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
