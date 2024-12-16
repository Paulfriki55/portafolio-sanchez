'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';

const About = () => {
  const descriptions = [
    {
      title: "Desarrollo Full Stack",
      content: "Soy un desarrollador de software con experiencia en tecnologías Full Stack, especializado en el desarrollo de aplicaciones web y móviles."
    },
    {
      title: "Tecnologías",
      content: "Domino lenguajes como Java, Python, JavaScript, y frameworks como React, Angular y .NET Core."
    },
    {
      title: "Backend & Infraestructura",
      content: "Tengo habilidades avanzadas en la creación de APIs REST y SOAP, manejo de bases de datos SQL y NoSQL, y administración de servidores Windows y Linux."
    },
    {
      title: "Análisis de Datos",
      content: "Cuento con experiencia en análisis de datos, ETL y visualización con herramientas como Power BI y QlikSense."
    },
    {
      title: "Metodología",
      content: "Mi enfoque colaborativo, orientación a resultados y capacidad de liderazgo me permiten entregar soluciones eficientes y de alta calidad, adaptándome a los desafíos de proyectos complejos en entornos ágiles."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py- px-4 min-h-screen overflow-hidden w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900">
        <svg className="absolute w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }}>
                <animate
                  attributeName="stop-opacity"
                  values="0.8;0.5;0.8"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 0.8 }}>
                <animate
                  attributeName="stop-opacity"
                  values="0.8;0.5;0.8"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
          
          {/* Patrón de onda principal */}
          <path
            d="M0 200 C 300 300, 600 100, 900 200 S 1500 300, 1920 200"
            fill="none"
            stroke="url(#aboutGrad)"
            strokeWidth="3"
            opacity="0.8"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0 200 C 300 300, 600 100, 900 200 S 1500 300, 1920 200;
                M0 200 C 300 100, 600 300, 900 200 S 1500 100, 1920 200;
                M0 200 C 300 300, 600 100, 900 200 S 1500 300, 1920 200
              "
            />
          </path>

          {/* Línea serpenteante */}
          <path
            d="M0 400 Q 200 350, 400 400 T 800 400 T 1200 400 T 1600 400 T 1920 400"
            fill="none"
            stroke="url(#aboutGrad)"
            strokeWidth="2.5"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0 400 Q 200 350, 400 400 T 800 400 T 1200 400 T 1600 400 T 1920 400;
                M0 400 Q 200 450, 400 400 T 800 400 T 1200 400 T 1600 400 T 1920 400;
                M0 400 Q 200 350, 400 400 T 800 400 T 1200 400 T 1600 400 T 1920 400
              "
            />
          </path>

          {/* Doble línea entrelazada */}
          <path
            d="M0 600 C 400 550, 600 650, 1000 600 C 1400 550, 1600 650, 1920 600"
            fill="none"
            stroke="url(#aboutGrad)"
            strokeWidth="2"
            opacity="0.7"
          >
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="
                M0 600 C 400 550, 600 650, 1000 600 C 1400 550, 1600 650, 1920 600;
                M0 600 C 400 650, 600 550, 1000 600 C 1400 650, 1600 550, 1920 600;
                M0 600 C 400 550, 600 650, 1000 600 C 1400 550, 1600 650, 1920 600
              "
            />
          </path>

         
        </svg>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto backdrop-blur-sm bg-white/10 p-8 rounded-xl shadow-2xl">
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

        <div className="min-h-[200px] flex flex-col items-center justify-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-300">
              {descriptions[currentIndex].title}
            </h3>
            <p className="text-lg text-white leading-relaxed">
              {descriptions[currentIndex].content}
            </p>
          </motion.div>

          {/* Indicadores del carrusel */}
          <div className="flex gap-2 mt-6">
            {descriptions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-400 w-4' : 'bg-white/50'
                }`}
                aria-label={`Ir a la descripción ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About

