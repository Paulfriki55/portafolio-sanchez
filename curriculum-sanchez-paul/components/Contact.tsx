"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaCopy, FaCheck, FaWhatsapp } from "react-icons/fa"

interface ContactInfo {
  icon: React.ElementType
  text: string
  detail: string
  description: string
  color: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: FaWhatsapp,
    text: "WhatsApp",
    detail: "+593 963 208 402",
    description: "Respuesta rápida 24/7",
    color: "from-green-500 to-green-600",
  },
  {
    icon: FaEnvelope,
    text: "Email",
    detail: "paul.sanchez1999@hotmail.es",
    description: "Respuesta en 24 horas",
    color: "from-blue-500 to-blue-600",
  },
]

const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === "email") {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      } else {
        setCopiedPhone(true)
        setTimeout(() => setCopiedPhone(false), 2000)
      }
    } catch (err) {
      console.error("Error al copiar al portapapeles:", err)
    }
  }

  return (
    <section id="contact" className="section bg-white dark:bg-black transition-all duration-500">
      {/* Fondo con gradiente sutil solo en modo claro */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-primary-100/10 dark:bg-transparent" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gradient mb-6"
          >
            Contacto
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-400 mx-auto rounded-full"
          />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="glass-card p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${info.color} shadow-lg`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                            {info.text}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">
                            {info.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                              {info.detail}
                            </span>
                            
                            {(info.text === "Email" || info.text === "WhatsApp") && (
                              <motion.button
                                onClick={() => copyToClipboard(info.detail, info.text === "Email" ? "email" : "phone")}
                                className="p-2 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`Copiar ${info.text.toLowerCase()}`}
                              >
                                {((info.text === "Email" && copiedEmail) || (info.text === "WhatsApp" && copiedPhone)) ? (
                                  <FaCheck className="w-4 h-4 text-green-500" />
                                ) : (
                                  <FaCopy className="w-4 h-4" />
                                )}
                              </motion.button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Información adicional */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-xl">
                    <FaClock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      Información de contacto
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Detalles adicionales
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <FaPhone className="w-4 h-4 text-primary-500" />
                    <span className="text-sm">+593 963 208 402</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <FaMapMarkerAlt className="w-4 h-4 text-primary-500" />
                    <span className="text-sm">Quito, Ecuador</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <FaClock className="w-4 h-4 text-primary-500" />
                    <span className="text-sm">Disponible para proyectos</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <motion.a
                    href="mailto:paul.sanchez1999@hotmail.es"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium tracking-wide uppercase text-sm rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEnvelope className="w-4 h-4" />
                    Enviar mensaje
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

