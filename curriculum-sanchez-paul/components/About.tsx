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
          />
        </h2>
        <motion.p 
          className="text-lg leading-relaxed text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Me caracterizo por ser una persona entusiasta y orientada a resultados, disfruto
          enfrentar nuevos desafíos y mantenerme actualizado con las últimas tendencias
          tecnológicas para asegurar entregas de alta calidad. Mi enfoque colaborativo y mis
          excelentes habilidades de comunicación me permiten trabajar eficazmente en
          equipo y contribuir al éxito de los proyectos en los que participo.
        </motion.p>
      </div>
    </motion.section>
  )
}

export default About
