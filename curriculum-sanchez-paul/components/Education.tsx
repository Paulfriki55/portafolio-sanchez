"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaGraduationCap, FaCertificate, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa"

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
    degree: "Ingeniería en Desarrollo de Software",
    period: "2020 - Actual",
    location: "Sangolquí, Ecuador",
    status: "En curso",
  },
  {
    institution: 'Unidad Educativa "Juan de Salinas"',
    degree: "Bachiller en Ciencias Generales Unificadas",
    period: "2012 - 2017",
    location: "Latacunga, Ecuador",
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
    credentialUrl: "https://www.linkedin.com/learning/certificates/5f912f6a58c83499064efa083aa5406bdf6a6ea21a73c9933e66a994064b4fd7",
    skills: ["Data Analysis", "Business Intelligence"],
  },
  {
    issuer: "LinkedIn",
    title: "Aprende análisis de datos: fundamentos",
    date: "Septiembre 2023",
    credentialUrl: "https://www.linkedin.com/learning/certificates/2fb98215e57dbd41b3844acd5f3653da39da3c0c16146a35ccd403a41b38879c",
    skills: ["Data Analysis", "Statistics"],
  },
]

const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"education" | "certifications">("education")

  return (
    <section id="education" className="section bg-white dark:bg-black transition-all duration-500">
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
            Formación Académica
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
          {/* Navegación de pestañas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="glass-card p-2 flex gap-2">
              <motion.button
                onClick={() => setActiveTab("education")}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "education"
                    ? "bg-primary-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <FaGraduationCap className="w-4 h-4" />
                  Educación
                </div>
              </motion.button>
              
              <motion.button
                onClick={() => setActiveTab("certifications")}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "certifications"
                    ? "bg-primary-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <FaCertificate className="w-4 h-4" />
                  Certificaciones
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* Contenido de las pestañas */}
          <AnimatePresence mode="wait">
            {activeTab === "education" ? (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="glass-card p-8">
                      <div className="flex items-start gap-6">
                        <div className="p-4 bg-primary-100 dark:bg-primary-900/50 rounded-xl">
                          <FaGraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-2">
                            {item.institution}
                          </h3>
                          <h4 className="text-xl font-medium text-primary-600 dark:text-primary-400 mb-4">
                            {item.degree}
                          </h4>
                          
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                              <FaCalendarAlt className="w-4 h-4" />
                              <span>{item.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                              <FaMapMarkerAlt className="w-4 h-4" />
                              <span>{item.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                item.status === "Completado"
                                  ? "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400"
                                  : "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-400"
                              }`}>
                                {item.status}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {certificationsData.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="glass-card p-6 h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-xl">
                          <FaCertificate className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                            {cert.issuer}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            {cert.date}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        Ver credencial
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Education

