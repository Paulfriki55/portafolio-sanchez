'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    { icon: FaWhatsapp, text: 'Trabajemos juntos! Escribeme', link: 'https://wa.me/593963208402' },
    { icon: FaEnvelope, text: 'Email: paul.sanchez1999@hotmail.es', link: 'mailto:paul.sanchez1999@hotmail.es' },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">CONTACTO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <a href={info.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <info.icon className="text-4xl mb-4 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                <span className="text-lg group-hover:text-blue-200 transition-colors duration-300">{info.text}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Contact

