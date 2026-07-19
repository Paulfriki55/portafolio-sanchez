"use client"

import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion"
import { FaMapMarkerAlt, FaBriefcase, FaExpandAlt, FaTimes } from "react-icons/fa"
import { useState, useRef, useEffect } from "react"
import { SectionHeading, SectionShell } from "@/components/motion/Reveal"

interface Experience {
  id: string
  company: string
  position: string
  period: string
  year: string
  location: string
  domain?: string
  current?: boolean
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    id: "0",
    company: "Produbanco",
    position: "Ingeniero de Software",
    period: "Feb 2026 - Actualidad",
    year: "2026",
    location: "Quito, Ecuador",
    domain: "produbanco.com.ec",
    current: true,
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
    year: "2025",
    location: "Remoto",
    domain: "kfc.com",
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
    year: "2025",
    location: "Quito, Ecuador",
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
    year: "2025",
    location: "Quito, Ecuador",
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
    year: "2024",
    location: "Quito, Ecuador",
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
    year: "2024",
    location: "Quito, Ecuador",
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
    year: "2023",
    location: "Quito, Ecuador",
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
    year: "2022",
    location: "Quito, Ecuador",
    responsibilities: [
      "Desarrollador de Aplicaciones Móviles IOS y Android, Flutter - Kotlin",
      "Mantenimiento Base de Datos en Firebase y Gestión de Google Cloud",
      "Jefe de Proyecto bajo metodologías ágiles (SCRUM)",
    ],
  },
]

const CompanyLogo = ({ domain, company }: { domain?: string; company: string }) => {
  const [failed, setFailed] = useState(false)

  if (!domain || failed) {
    return (
      <div className="w-12 h-12 rounded-xl border border-primary-500/30 bg-primary-500/10 flex items-center justify-center shrink-0">
        <FaBriefcase className="w-5 h-5 text-accent" />
      </div>
    )
  }

  return (
    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 overflow-hidden border border-gray-200 dark:border-gray-700 p-1.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=256`}
        alt={`Logo de ${company}`}
        className="w-full h-full object-contain rounded-md"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  )
}

const TimelineItem = ({
  experience,
  index,
  onSelect,
}: {
  experience: Experience
  index: number
  onSelect: (exp: Experience) => void
}) => {
  const isLeft = index % 2 === 0
  const preview = experience.responsibilities.slice(0, 2)
  const remaining = experience.responsibilities.length - preview.length
  const itemRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 0.9", "start 0.58"],
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const cardX = useTransform(scrollYProgress, [0, 1], [isLeft ? -36 : 36, 0])
  const yearY = useTransform(scrollYProgress, [0, 1], [20, 0])
  const dotScale = useTransform(scrollYProgress, [0, 1], [0.4, 1])

  return (
    <div ref={itemRef} className="relative lg:grid lg:grid-cols-2 lg:gap-16">
      <div className="absolute left-4 lg:left-1/2 top-7 -translate-x-1/2 z-10">
        {experience.current && (
          <span className="absolute inset-0 rounded-full bg-primary-500/60 animate-ping" />
        )}
        <motion.div
          style={{ scale: dotScale }}
          className="relative w-4 h-4 rounded-full border-2 border-primary-500 bg-white dark:bg-black shadow-[0_0_12px_rgb(6_182_212/0.6)]"
        >
          <span className="absolute inset-[3px] rounded-full bg-primary-500" />
        </motion.div>
      </div>

      <div
        className={`hidden lg:flex items-start pt-2 ${
          isLeft ? "lg:col-start-2 lg:row-start-1 justify-start pl-10" : "lg:col-start-1 lg:row-start-1 justify-end pr-10"
        }`}
      >
        <motion.span
          style={{ opacity, y: yearY }}
          className="font-mono text-6xl xl:text-7xl font-bold text-gray-200 dark:text-gray-800 select-none leading-none"
        >
          {experience.year}
        </motion.span>
      </div>

      <motion.div
        style={{ opacity, x: cardX }}
        className={`ml-12 lg:ml-0 ${isLeft ? "lg:col-start-1 lg:row-start-1 lg:pr-10" : "lg:col-start-2 lg:row-start-1 lg:pl-10"}`}
      >
        <div
          role="button"
          tabIndex={0}
          onClick={() => onSelect(experience)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              onSelect(experience)
            }
          }}
          className="group surface-card relative p-5 sm:p-6 cursor-pointer hover:border-primary-500/50 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgb(6_182_212/0.35)] transition-all duration-300"
        >
          <div className="absolute top-4 right-4 p-2 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-all duration-300">
            <FaExpandAlt className="w-3 h-3" />
          </div>

          <div className="flex items-center gap-4 mb-4 pr-10">
            <CompanyLogo domain={experience.domain} company={experience.company} />
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white leading-tight">
                {experience.company}
              </h3>
              <p className="text-sm font-medium text-accent">{experience.position}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 font-mono text-[11px] text-gray-500 dark:text-gray-400">
            <span className={`px-2 py-0.5 rounded border ${experience.current ? "border-primary-500/40 bg-primary-500/10 text-primary-700 dark:text-primary-400" : "border-gray-200 dark:border-gray-800"}`}>
              {experience.period}
            </span>
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="w-3 h-3" />
              {experience.location}
            </span>
          </div>

          <ul className="space-y-2">
            {preview.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="mt-[7px] w-1 h-1 rounded-full bg-primary-500/70 shrink-0" />
                <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-snug">
                  {resp}
                </span>
              </li>
            ))}
          </ul>

          {remaining > 0 && (
            <p className="mt-3 font-mono text-[11px] text-primary-700 dark:text-primary-400">
              +{remaining} responsabilidades · click para ampliar
            </p>
          )}
        </div>
      </motion.div>
    </div>
  )
}

const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<Experience | null>(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.4"],
  })
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 25, restDelta: 0.001 })

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [selected])

  return (
    <>
    <SectionShell id="experience" className="section bg-white dark:bg-black transition-colors duration-300 overflow-hidden">
      <div className="container-custom relative z-10 max-w-5xl mx-auto">
        <SectionHeading index="02 / Career">Trayectoria Profesional</SectionHeading>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gray-200 dark:bg-gray-800" />
          <motion.div
            style={{ scaleY: lineProgress }}
            className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 origin-top bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600 shadow-[0_0_16px_rgb(6_182_212/0.7)]"
          />

          <div className="space-y-12 lg:space-y-16 pb-8">
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id} experience={experience} index={index} onSelect={setSelected} />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/55 dark:bg-black/75"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.position} en ${selected.company}`}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 sm:p-10 shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300"
                aria-label="Cerrar detalle"
              >
                <FaTimes className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-5 mb-6 pr-12">
                <CompanyLogo domain={selected.domain} company={selected.company} />
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white leading-tight">
                    {selected.company}
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-accent">{selected.position}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 font-mono text-xs text-gray-500 dark:text-gray-400">
                <span className={`px-2.5 py-1 rounded border ${selected.current ? "border-primary-500/40 bg-primary-500/10 text-primary-700 dark:text-primary-400" : "border-gray-200 dark:border-gray-800"}`}>
                  {selected.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="w-3 h-3" />
                  {selected.location}
                </span>
              </div>

              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                Responsabilidades y logros
              </h4>
              <ul className="space-y-4">
                {selected.responsibilities.map((resp, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + idx * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed">
                      {resp}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Experience
