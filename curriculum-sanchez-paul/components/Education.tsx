"use client"

import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useState, useRef } from "react"
import { FaGraduationCap, FaCertificate, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa"

interface EducationDetail {
  institution: string
  degree: string
  period: string
  location: string
  status: string
}

interface Certification {
  issuer: string
  title: string
  date: string
  credentialUrl: string
  skills: string[]
}

const educationData: EducationDetail[] = [
  {
    institution: "Universidad de las Fuerzas Armadas - ESPE",
    degree: "Ingeniero de Software",
    period: "2020 - 2026",
    location: "Sangolquí, Ecuador",
    status: "Completado",
  },
  {
    institution: 'Unidad Educativa "Juan de Salinas"',
    degree: "Bachiller en Ciencias Generales Unificadas",
    period: "2012 - 2017",
    location: "Sangolquí, Ecuador",
    status: "Completado",
  },
]

const certificationsData: Certification[] = [
  {
    issuer: "Cisco",
    title: "Introduction to Cybersecurity",
    date: "Noviembre 2024",
    credentialUrl: "https://www.credly.com/badges/cc60ae67-dbfc-4f58-8bd0-e07472ca11b2/linked_in_profile",
    skills: ["Cybersecurity", "Network Security"],
  },
  {
    issuer: "Unity",
    title: "Unity VR Development",
    date: "Marzo 2024",
    credentialUrl: "https://www.credly.com/badges/26d8f7d7-2531-422b-97c9-e9f9eee9f62d/linked_in_profile",
    skills: ["VR Development", "Game Development", "Unity"],
  },
  {
    issuer: "LinkedIn",
    title: "Aprende análisis de datos: Ampliación y aplicación de los conocimientos básicos",
    date: "Septiembre 2023",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/5f912f6a58c83499064efa083aa5406bdf6a6ea21a73c9933e66a994064b4fd7",
    skills: ["Data Analysis", "Business Intelligence"],
  },
  {
    issuer: "LinkedIn",
    title: "Aprende análisis de datos: fundamentos",
    date: "Septiembre 2023",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/2fb98215e57dbd41b3844acd5f3653da39da3c0c16146a35ccd403a41b38879c",
    skills: ["Data Analysis", "Statistics"],
  },
]

const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"education" | "certifications">("education")
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [56, -56])

  return (
    <section ref={sectionRef} id="education" className="section bg-white dark:bg-black transition-colors duration-500">
      <motion.div
        style={reduceMotion ? undefined : { y: parallaxY }}
        className="container-custom relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-gradient mb-4">Formación Académica</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-16 h-px bg-primary-500 mx-auto origin-left"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex p-1 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60">
              {(
                [
                  { key: "education", label: "Educación", icon: FaGraduationCap },
                  { key: "certifications", label: "Certificaciones", icon: FaCertificate },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative px-5 sm:px-7 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    activeTab === tab.key
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {activeTab === tab.key && (
                    <motion.span
                      layoutId="edu-tab"
                      className="absolute inset-0 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-700 shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <tab.icon className="w-3.5 h-3.5 text-accent" />
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeTab === "education" ? (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 sm:space-y-6"
              >
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="surface-card p-6 sm:p-8 hover:border-primary-500/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                      <div className="p-3 rounded-xl border border-primary-500/30 bg-primary-500/10 self-start shrink-0">
                        <FaGraduationCap className="w-6 h-6 text-accent" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl text-gray-900 dark:text-white mb-1">
                          {item.institution}
                        </h3>
                        <h4 className="text-base sm:text-lg text-accent mb-4">
                          {item.degree}
                        </h4>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-gray-500 dark:text-gray-400">
                          <span>{item.period}</span>
                          <span className="flex items-center gap-1.5">
                            <FaMapMarkerAlt className="w-3 h-3" />
                            {item.location}
                          </span>
                          <span className="px-2 py-0.5 rounded border border-primary-500/30 bg-primary-500/10 text-primary-700 dark:text-primary-400">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
              >
                {certificationsData.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="surface-card p-6 h-full flex flex-col hover:border-primary-500/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white mb-1 leading-snug">
                          {cert.title}
                        </h3>
                        <p className="font-mono text-xs text-gray-500 dark:text-gray-400">
                          {cert.issuer} · {cert.date}
                        </p>
                      </div>
                      <div className="p-2 rounded-lg border border-primary-500/30 bg-primary-500/10 shrink-0">
                        <FaCertificate className="w-4 h-4 text-accent" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-xs sm:text-sm text-accent hover:gap-3 transition-all duration-300"
                    >
                      Ver credencial
                      <FaArrowRight className="w-3 h-3" />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}

export default Education
