'use client'

import { motion, useInView } from 'framer-motion'
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaCertificate,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa'
import { useState, useRef } from 'react'
import { SiCisco, SiUnity, SiLinkedin } from 'react-icons/si'

const Education = () => {
  const educationData = [
    {
      type: 'education',
      institution: 'Universidad de las Fuerzas Armadas - ESPE',
      details: [
        {
          title: 'Ingeniería en Desarrollo de Software',
          period: '2020 - Actual'
        },
        {
          title: 'Curso de Inglés B2',
          period: '2022'
        }
      ],
      icon: FaUniversity,
      color: 'from-blue-600 to-blue-400'
    },
    {
      type: 'education',
      institution: 'Unidad Educativa "Juan de Salinas"',
      details: [
        {
          title: 'Bachiller en Ciencias Generales Unificadas',
          period: '2012 - 2017'
        }
      ],
      icon: FaGraduationCap,
      color: 'from-gray-600 to-gray-400'
    }
  ]

  const certificationsData = [
    {
      type: 'certification',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      date: 'nov. 2024',
      credentialUrl: 'https://www.credly.com/badges/cc60ae67-dbfc-4f58-8bd0-e07472ca11b2/linked_in_profile',
      icon: SiCisco,
      iconClass: 'text-blue-500',
      skills: ['Cybersecurity']
    },
    {
      type: 'certification',
      title: 'Unity VR Development',
      issuer: 'Unity',
      date: 'mar. 2024',
      credentialUrl: 'https://www.credly.com/badges/26d8f7d7-2531-422b-97c9-e9f9eee9f62d/linked_in_profile',
      icon: SiUnity,
      iconClass: 'text-black dark:text-white',
      skills: ['VR Development', 'Game Development']
    },
    {
      type: 'certification',
      title: 'Aprende análisis de datos: Ampliación y aplicación de los conocimientos básicos',
      issuer: 'LinkedIn',
      date: 'sept. 2023',
      credentialUrl: 'https://www.linkedin.com/learning/certificates/5f912f6a58c83499064efa083aa5406bdf6a6ea21a73c9933e66a994064b4fd7',
      icon: SiLinkedin,
      iconClass: 'text-blue-600',
      skills: ['Data Analysis', 'Software Development']
    },
    {
      type: 'certification',
      title: 'Aprende análisis de datos: fundamentos',
      issuer: 'LinkedIn',
      date: 'sept. 2023',
      credentialUrl: 'https://www.linkedin.com/learning/certificates/2fb98215e57dbd41b3844acd5f3653da39da3c0c16146a35ccd403a41b38879c',
      icon: SiLinkedin,
      iconClass: 'text-blue-600',
      skills: ['Data Analysis', 'Software Development']
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : certificationsData.length - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev < certificationsData.length - 1 ? prev + 1 : 0))
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { borderColor: '#60a5fa', boxShadow: '0 0 15px rgba(96, 165, 250, 0.5)' }
  }

  const iconVariants = {
    hover: { rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }
  }

  return (
    <motion.section
      id="education"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-700 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, type: 'spring' }}
          className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
        >
          FORMACIÓN ACADÉMICA
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer border-2 border-gray-700"
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
          transition={{ duration: 0.5, type: 'spring', delay: 0.2 }}
          className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
        >
          CURSOS
        </motion.h2>

        <div className="relative overflow-hidden w-full">
          <div className="absolute inset-y-0 left-0 z-20 flex items-center">
            <button
              onClick={handlePrev}
              className="p-2 bg-gray-800/50 rounded-full text-white hover:bg-gray-700/50 transition-colors"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 z-20 flex items-center">
            <button
              onClick={handleNext}
              className="p-2 bg-gray-800/50 rounded-full text-white hover:bg-gray-700/50 transition-colors"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {certificationsData.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <motion.div
                  key={index}
                  className="min-w-full bg-gray-800 rounded-xl p-6 border-2 border-gray-700 relative overflow-hidden"
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover="hover"
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className={`p-3 rounded-lg ${cert.iconClass}`}
                      whileHover={{ scale: 1.1 }}
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
                        whileHover={{ scale: 1.05 }}
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
                  </motion.a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Education