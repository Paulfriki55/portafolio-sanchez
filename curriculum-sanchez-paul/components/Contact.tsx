// Contact.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { useRef } from 'react';


const Contact = () => {
  const contactInfo = [
    { 
      icon: FaWhatsapp, 
      text: 'Trabajemos juntos! Escríbeme', 
      link: 'https://wa.me/593963208402',
      description: 'Envíame un mensaje directo',
      gradient: 'from-green-400 to-green-600'
    },
    { 
      icon: FaEnvelope, 
      text: 'paul.sanchez1999@hotmail.es', 
      link: 'mailto:paul.sanchez1999@hotmail.es',
      description: 'Contáctame por correo',
      gradient: 'from-blue-400 to-purple-600'
    },
  ]

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="py-24 px-6 bg-gradient-to-br from-blue-950 via-purple-950 to-blue-900 text-white relative overflow-hidden"
    >
      {/* Líneas SVG animadas */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q25,45 50,50 T100,50"
              stroke="rgba(59, 130, 246, 0.5)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M0,30 Q25,35 50,30 T100,30"
              stroke="rgba(147, 51, 234, 0.5)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
            />
            <motion.path
              d="M0,70 Q25,65 50,70 T100,70"
              stroke="rgba(59, 130, 246, 0.5)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, repeat: Infinity }}
            />
          </svg>
        </div>
      </div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
         <motion.h2
          initial={{ y: -50 }}
          animate={isInView ? { y: 0 } : {}}
          className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
         >
            CONTACTO
         </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <a 
                href={info.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center text-center"
              >
                <motion.div 
                  className={`flex items-center justify-center mb-6 w-24 h-24 rounded-full bg-gradient-to-br ${info.gradient} shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="text-5xl text-white" />
                </motion.div>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {info.text}
                  </span>
                  <FiExternalLink className="text-blue-300 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-sm text-blue-300 mt-4 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {info.description}
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Contact