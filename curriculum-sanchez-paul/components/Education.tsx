'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity } from 'react-icons/fa'

const Education = () => {
  const educationData = [
    {
      institution: 'Universidad de las Fuerzas Armadas - ESPE',
      degree: 'Ingeniería en Desarrollo de Software',
      period: '2020 - Actual',
      icon: FaUniversity,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      institution: 'Unidad Educativa "Juan de Salinas"',
      degree: 'Bachiller Ciencias Generales Unificadas', 
      period: '2012 - 2017',
      icon: FaGraduationCap,
      color: 'from-purple-500 to-pink-400'
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        >
          DATOS ACADÉMICOS
        </motion.h2>
        
        <div className="space-y-12">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.3 * index,
                  duration: 0.7,
                  type: 'spring',
                  stiffness: 100
                }}
              >
                <div className="relative bg-gray-800 rounded-lg p-8 shadow-md 
                  hover:transform hover:scale-[1.02] transition-all duration-300
                  border border-gray-700 hover:border-gray-600"
                >
                  <div className="flex items-center gap-8">
                    <div className={`
                      p-4 rounded-full bg-gradient-to-r ${edu.color}
                      shadow-md
                    `}>
                      <IconComponent className="text-4xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        {edu.institution}
                      </h3>
                      <p className="text-lg text-blue-300 mb-2 font-medium">{edu.degree}</p>
                      <p className="text-gray-400 font-medium">{edu.period}</p>
                    </div>
                  </div>
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

