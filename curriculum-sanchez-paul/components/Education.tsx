// Education.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { FaGraduationCap, FaUniversity } from 'react-icons/fa'
import { useState, useRef } from 'react';

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
  ];

  const [activeCard, setActiveCard] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

    const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <motion.section
       ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ y: -50 }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          >
              DATOS ACADÉMICOS
          </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {educationData.map((edu, index) => {
          const IconComponent = edu.icon
          return (
             <motion.div
               key={index}
                className={`relative bg-gray-800 rounded-lg p-6 shadow-md cursor-pointer
                  hover:transform hover:scale-[1.02] transition-all duration-300
                  border border-gray-700 hover:border-gray-600
                  ${activeCard === index ? 'z-20' : 'z-10'}`}
                 initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                 whileHover={{ y: -5 }}
                 onClick={() => handleCardClick(index)}
              >
                <div className="flex items-start gap-6">
                   <div className={`
                      p-3 rounded-full bg-gradient-to-r ${edu.color}
                      shadow-md
                    `}>
                      <IconComponent className="text-4xl text-white" />
                    </div>
                    <div className="flex-grow">
                       <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            {edu.institution}
                        </h3>
                        <motion.div
                            className={`overflow-hidden transition-all duration-300 ${activeCard === index ? 'max-h-40' : 'max-h-0' }`}
                            >
                            <p className="text-lg text-blue-300 mb-2 font-medium">{edu.degree}</p>
                            <p className="text-gray-400 font-medium">{edu.period}</p>
                        </motion.div>
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