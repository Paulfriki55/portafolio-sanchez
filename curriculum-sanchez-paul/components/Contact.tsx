'use client'

import { motion, useInView } from 'framer-motion'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { useRef } from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaWhatsapp,
      text: 'WhatsApp',
      link: 'https://wa.me/593963208402',
      detail: '+593 963 208 402',
      description: 'Chatea conmigo en WhatsApp',
      gradient: 'from-green-500 to-green-600',
      hoverGradient: 'from-green-400 to-green-500',
    },
    {
      icon: FaEnvelope,
      text: 'Email',
      link: 'mailto:paul.sanchez1999@hotmail.es',
      detail: 'paul.sanchez1999@hotmail.es',
      description: 'Envíame un correo electrónico',
      gradient: 'from-blue-500 to-blue-600',
      hoverGradient: 'from-blue-400 to-blue-500',
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <motion.section
      id="contact"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* Líneas SVG animadas -  RESTAURADO A LA ANIMACIÓN ORIGINAL */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q25,45 50,50 T100,50"
              stroke="rgba(59, 130, 246, 0.3)" // Azul más tenue -  OPACIDAD ORIGINAL
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M0,30 Q25,35 50,30 T100,30"
              stroke="rgba(0, 170, 225, 0.3)" // Cian para más variedad -  OPACIDAD ORIGINAL
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
            />
            <motion.path
              d="M0,70 Q25,65 50,70 T100,70"
              stroke="rgba(59, 130, 246, 0.3)" // Azul más tenue -  OPACIDAD ORIGINAL
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, repeat: Infinity }}
            />
          </svg>
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          variants={itemVariants}
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
        >
          PONERSE EN CONTACTO
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-lg p-6 md:p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-6 mb-6">
                <motion.div
                  className={`w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br ${info.gradient} text-white shadow-md`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <info.icon className="text-4xl" />
                </motion.div>
                <h3 className="text-xl font-semibold">{info.text}</h3>
              </div>

              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">{info.description}</p>
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="font-medium">{info.detail}</span>
                  <FiExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="mt-4">
                <motion.a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block bg-gradient-to-r ${info.gradient} hover:bg-gradient-to-r ${info.hoverGradient} text-white font-bold py-2 px-4 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contáctame por {info.text}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;