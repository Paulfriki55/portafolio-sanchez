'use client'

import { useState } from 'react'
import { Code2, Database, LineChart, Smartphone, CheckCircle2 } from 'lucide-react'
import { FaCog } from "react-icons/fa"

const Experience = () => {
  const experiences = [
    {
      company: "Logiztik Alliance Group",
      position: "Desarrollador Full Stack",
      period: "Enero 2025 - Actualidad",
      year: "2025",
      month: "Ene",
      icon: FaCog,
      color: "bg-green-500",
      borderColor: "border-green-500",
      textColor: "text-green-400",
      responsibilities: [
        "Análisis, desarrollo y documentación de sistemas informáticos.",
        "Implementación y validación de soluciones de software usando .NET, SQL Server, Azure DevOps, Angular.",
        "Generación de pruebas, aseguramiento de calidad (QA) y control de errores.",
        "Creación de nuevos componentes y mejora de sistemas existentes.",
        "Elaboración de manuales técnicos y cronogramas de trabajo.",
      ],
    },
    {
      company: "PrexTechnologies",
      position: "Desarrollador Mobile Flutter Full-Stack",
      period: "Abril 2025 - Julio 2025",
      year: "2025",
      month: "Abr",
      icon: Smartphone,
      color: "bg-purple-500",
      borderColor: "border-purple-500",
      textColor: "text-purple-400",
      responsibilities: [
        "Arquitectura de aplicaciones: Implementación de patrones MVC, separación de responsabilidades y gestión de estados",
        "Integración de APIs: Desarrollo de servicios HTTP, manejo de autenticación JWT, y sincronización de datos en tiempo real",
        "UI/UX Avanzado: Creación de interfaces modernas con animaciones fluidas, navegación intuitiva y componentes reutilizables",
        "Autenticación y seguridad: Sistemas completos de login, registro, verificación por email y manejo seguro de tokens",
      ],
    },
    {
      company: 'SMART HELP DESK S.A',
      position: 'Desarrollador Full Stack',
      period: 'Junio 2024 - Julio 2025',
      year: '2024',
      icon: Code2,
      color: 'bg-blue-500',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-400',
      responsibilities: [
        'Desarrollo APIs Rest y SOAP en .NET (ASP.NET Core)',
        'Manejo de base de datos en SQL Server Management',
        'Creación de aplicaciones móviles en Flutter, Expo y React',
        'Desarrollo de aplicaciones web a medida con Next.js, React y Angular',
        'Administración de servidores Windows Server y IIS Express',
      ],
    },
    {
      company: 'EFICACIAEC',
      position: 'Analista de Datos SGI - BI',
      period: 'Febrero 2024 - Junio 2024',
      year: '2024',
      icon: LineChart,
      color: 'bg-cyan-500',
      borderColor: 'border-cyan-500',
      textColor: 'text-cyan-400',
      responsibilities: [
        'Creación de reportes detallados y presentaciones ejecutivas en Power BI',
        'Extracción, Transformación y Carga (ETL) en Herramientas de Business Intelligence, específicamente en QlikSense',
        'Automatización de tareas repetitivas mediante scripts',
      ],
    },
    {
      company: 'SIRGA Geo Consultoría',
      position: 'Analista de sistemas informáticos',
      period: 'Mayo 2023 - Agosto 2023',
      year: '2023',
      icon: Database,
      color: 'bg-blue-600',
      borderColor: 'border-blue-600',
      textColor: 'text-blue-400',
      responsibilities: [
        'Desarrollo y maquetación Web Frontend- REACT',
        'Desarrollo Web Backend - API RESTFUL',
        'Administración de Servidor Linux',
        'Seguridad Web, Control de versiones y Diseño',
        'Desarrollo de API RESTful',
        'Administración y Gestión de Base de Datos',
      ],
    },
    {
      company: 'Prowess EC',
      position: 'Desarrollador Junior',
      period: 'Octubre 2022 - Abril 2023',
      year: '2022',
      icon: Smartphone,
      color: 'bg-cyan-600',
      borderColor: 'border-cyan-600',
      textColor: 'text-cyan-400',
      responsibilities: [
        'Desarrollador de Aplicaciones Móviles IOS y Android, Flutter - Kotlin',
        'Mantenimiento Base de Datos en Firebase',
        'Gestión de Google Cloud Services',
        'Jefe de Proyecto - Metodologías ágiles (SCRUM)',
        'Coordinación y liderazgo de equipos multifuncionales',
      ],
    },
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="relative py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Fondo animado mejorado */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-slide"
            style={{ 
              top: `${i * 5}%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
          EXPERIENCIA PROFESIONAL
        </h2>

        <div className="relative">
          {/* Línea de tiempo central */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400"></div>

          <div className="relative">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`mb-16 md:mb-20 flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-12 items-center md:items-start group`}
              >
                {/* Contenedor de año e icono */}
                <div className="relative flex md:w-1/3 justify-center md:justify-end items-center flex-col">
                  <div
                    className={`w-16 h-16 rounded-full ${exp.color} border-4 border-gray-900 shadow-lg flex items-center justify-center z-10 relative transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                  >
                    <exp.icon className="text-white w-8 h-8" />
                  </div>
                  <div className={`mt-4 text-2xl font-bold ${exp.textColor} transition-all duration-300 group-hover:scale-110`}>
                    {exp.year}
                  </div>
                </div>

                {/* Tarjeta de contenido */}
                <div className="relative md:w-2/3">
                  <div
                    className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50 hover:bg-gray-800/80"
                  >
                    <h3 className="text-2xl font-bold text-white mb-3">{exp.company}</h3>
                    <h4 className={`text-xl ${exp.textColor} font-semibold mb-3`}>{exp.position}</h4>
                    <p className="text-gray-400 mb-4 font-medium">{exp.period}</p>

                    <button
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className={`text-sm px-6 py-2 rounded-full ${exp.color} text-white hover:opacity-90 transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95`}
                    >
                      {activeIndex === index ? "Ocultar detalles" : "Ver responsabilidades"}
                    </button>

                    {activeIndex === index && (
                      <div className="mt-6 animate-fadeIn">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {exp.responsibilities.map((resp, i) => (
                            <div
                              key={i}
                              className={`flex items-start gap-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors duration-200 border-2 ${exp.borderColor}`}
                            >
                              <CheckCircle2 className={`mt-1 flex-shrink-0 ${exp.textColor} w-4 h-4`} />
                              <span className="text-gray-300 text-sm leading-relaxed">{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(100%);
            opacity: 0.5;
          }
        }
        .animate-slide {
          animation: slide 8s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Experience