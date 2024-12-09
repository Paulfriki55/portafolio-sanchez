'use client'

import { motion } from 'framer-motion'

const Education = () => {
  const educationData = [
    {
      institution: 'Universidad de las Fuerzas Armadas - ESPE',
      degree: 'Ingeniería en Desarrollo de Software',
      period: '2020 - Actual',
    },
    {
      institution: 'Unidad Educativa "Juan de Salinas"',
      degree: 'Bachiller Ciencias Generales Unificadas',
      period: '2012 - 2017',
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">DATOS ACADÉMICOS</h2>
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="mb-8 bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{edu.institution}</h3>
            <p className="text-blue-300 mb-2">{edu.degree}</p>
            <p className="text-gray-400">{edu.period}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Education

