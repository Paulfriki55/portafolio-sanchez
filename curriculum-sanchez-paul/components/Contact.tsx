'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    { icon: FaPhone, text: '+593 963 208 402' },
    { icon: FaEnvelope, text: 'paul.sanchez1999@hotmail.es' },
    { icon: FaMapMarkerAlt, text: 'Edén del Valle, Quito, Ecuador' },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <info.icon className="text-4xl mb-4 text-blue-300" />
              <span className="text-lg">{info.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Contact

