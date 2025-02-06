"use client"

import { motion, useInView } from "framer-motion"
import { FaGraduationCap, FaUniversity, FaCertificate, FaExternalLinkAlt } from "react-icons/fa"
import { useRef, useState } from "react"
import { SiCisco, SiUnity, SiLinkedin } from "react-icons/si"

const Education = () => {
  const educationData = [
    {
      type: "education",
      institution: "Universidad de las Fuerzas Armadas - ESPE",
      details: [
        {
          title: "Ingeniería en Desarrollo de Software",
          period: "2020 - Actual",
        },
        {
          title: "Curso de Inglés B2",
          period: "2022",
        },
      ],
      icon: FaUniversity,
      color: "from-blue-600 to-blue-400",
    },
    {
      type: "education",
      institution: 'Unidad Educativa "Juan de Salinas"',
      details: [
        {
          title: "Bachiller en Ciencias Generales Unificadas",
          period: "2012 - 2017",
        },
      ],
      icon: FaGraduationCap,
      color: "from-gray-600 to-gray-400",
    },
  ]

  const certificationsData = [
    {
      type: "certification",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "nov. 2024",
      credentialUrl: "https://www.credly.com/badges/cc60ae67-dbfc-4f58-8bd0-e07472ca11b2/linked_in_profile",
      icon: SiCisco,
      iconClass: "text-blue-500",
      skills: ["Cybersecurity"],
    },
    {
      type: "certification",
      title: "Unity VR Development",
      issuer: "Unity",
      date: "mar. 2024",
      credentialUrl: "https://www.credly.com/badges/26d8f7d7-2531-422b-97c9-e9f9eee9f62d/linked_in_profile",
      icon: SiUnity,
      iconClass: "text-black dark:text-white",
      skills: ["VR Development", "Game Development"],
    },
    {
      type: "certification",
      title: "Aprende análisis de datos: Ampliación y aplicación de los conocimientos básicos",
      issuer: "LinkedIn",
      date: "sept. 2023",
      credentialUrl:
        "https://www.linkedin.com/learning/certificates/5f912f6a58c83499064efa083aa5406bdf6a6ea21a73c9933e66a994064b4fd7",
      icon: SiLinkedin,
      iconClass: "text-blue-600",
      skills: ["Data Analysis", "Software Development"],
    },
    {
      type: "certification",
      title: "Aprende análisis de datos: fundamentos",
      issuer: "LinkedIn",
      date: "sept. 2023",
      credentialUrl:
        "https://www.linkedin.com/learning/certificates/2fb98215e57dbd41b3844acd5f3653da39da3c0c16146a35ccd403a41b38879c",
      icon: SiLinkedin,
      iconClass: "text-blue-600",
      skills: ["Data Analysis", "Software Development"],
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(96, 165, 250, 0.5)",
      transition: { duration: 0.3 },
    },
  }

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.5, repeat: Number.POSITIVE_INFINITY },
    },
  }

  return (
    <motion.section
      id="education"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden" // Fondo de Contact.tsx
    >
      {/* Partículas sutiles animadas */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, index) => ( // Más partículas para una distribución mejor
          <motion.div
            key={index}
            className="absolute bg-white rounded-full"
            style={{
              width: '1px', // Partículas muy pequeñas
              height: '1px',
              opacity: 0.3, // Baja opacidad para sutileza
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ["-10%", "110%"], // Movimiento vertical sutil
              x: ["-5%", "105%"], // Ligeramente horizontal para dispersión
              scale: [0.5, 1, 0.5] // Pequeña variación de tamaño
            }}
            transition={{
              duration: Math.random() * 20 + 20, // Duración variable y más larga
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5, // Retraso aleatorio para asincronía
            }}
          />
        ))}
      </div>


      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" // Mismo estilo de título
        >
          FORMACIÓN ACADÉMICA
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer border-2 border-transparent hover:border-blue-400 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className={`p-4 rounded-xl bg-gradient-to-r ${edu.color}`}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <edu.icon className="text-4xl text-white" />
                </motion.div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    {edu.institution}
                  </h3>
                  {edu.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      className="mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <p className="text-lg text-blue-300 font-medium">{detail.title}</p>
                      <p className="text-gray-400">{detail.period}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
          className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" // Mismo estilo de título
        >
          CURSOS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <motion.div
                key={index}
                className="group bg-gray-800 rounded-xl p-6 border-2 border-transparent hover:border-purple-400 relative overflow-hidden transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover="hover"
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className={`p-3 rounded-lg ${cert.iconClass}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="text-4xl" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold">{cert.issuer}</h3>
                      <p className="text-gray-400 text-sm">{cert.date}</p>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="bg-gray-700 px-2 py-1 rounded text-sm"
                        whileHover={{ scale: 1.05, backgroundColor: "#4B5563" }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaCertificate className="mr-2" />
                    Ver credencial
                    <FaExternalLinkAlt className="ml-2 text-xs" />
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default Education