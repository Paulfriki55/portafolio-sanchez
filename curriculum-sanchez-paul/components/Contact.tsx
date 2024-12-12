'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const Contact = () => {
  const contactInfo = [
    { 
      icon: FaWhatsapp, 
      text: 'Trabajemos juntos! Escribeme', 
      link: 'https://wa.me/593963208402',
      description: 'Envíame un mensaje directo'
    },
    { 
      icon: FaEnvelope, 
      text: 'paul.sanchez1999@hotmail.es', 
      link: 'mailto:paul.sanchez1999@hotmail.es',
      description: 'Contáctame por correo'
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        CONTACTO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="bg-blue-950/50 rounded-xl p-6 shadow-lg hover:bg-blue-950/70 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <a 
                href={info.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center mb-4 w-20 h-20 bg-blue-800 rounded-full">
                  <info.icon className="text-4xl text-white group-hover:text-blue-200 transition-colors duration-300" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold group-hover:text-blue-200 transition-colors duration-300">
                    {info.text}
                  </span>
                  <FiExternalLink className="text-blue-300 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-sm text-blue-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

