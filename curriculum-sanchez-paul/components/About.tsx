'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <TypeAnimation
            sequence={[
              'SOBRE MÍ',
              1000,
              'ABOUT ME',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          />
        </h2>
        <motion.p 
          className="text-lg leading-relaxed text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Desarrollador de software apasionado con experiencia en crear soluciones tecnológicas innovadoras. 
          Especializado en desarrollo web full-stack, con un fuerte dominio de tecnologías modernas. Me destaco por mi capacidad para transformar ideas complejas en aplicaciones 
          funcionales y elegantes, siempre buscando la excelencia técnica y la mejora continua.
        </motion.p>
      </div>
    </motion.section>
  )
}

export default About

