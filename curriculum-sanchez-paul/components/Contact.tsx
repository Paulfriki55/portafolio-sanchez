"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaEnvelope, FaMapMarkerAlt, FaCopy, FaCheck, FaWhatsapp, FaArrowRight } from "react-icons/fa"

interface ContactInfo {
  icon: React.ElementType
  text: string
  detail: string
  description: string
  link: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: FaWhatsapp,
    text: "WhatsApp",
    detail: "+593 963 208 402",
    description: "Respuesta rápida 24/7",
    link: "https://wa.me/593963208402",
  },
  {
    icon: FaEnvelope,
    text: "Email",
    detail: "paul.sanchez1999@hotmail.es",
    description: "Respuesta en 24 horas",
    link: "mailto:paul.sanchez1999@hotmail.es",
  },
]

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error("Error al copiar al portapapeles:", err)
    }
  }

  return (
    <section id="contact" className="section bg-white dark:bg-black transition-colors duration-500">
      <div className="absolute inset-0 bg-dots fade-edges opacity-60" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 32 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-80px" }}
        className="container-custom relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-gradient mb-4">Contacto</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-16 h-px bg-primary-500 mx-auto origin-left"
          />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              ¿Tienes un proyecto en mente? Escríbeme y conversemos sobre cómo puedo ayudarte.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                viewport={{ once: true }}
                className="surface-card p-6 hover:border-primary-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl border border-primary-500/30 bg-primary-500/10 shrink-0">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900 dark:text-white">
                      {info.text}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                      {info.description}
                    </p>

                    <div className="flex items-center gap-2">
                      <a
                        href={info.link}
                        target={info.text === "Email" ? "_self" : "_blank"}
                        rel={info.text === "Email" ? undefined : "noopener noreferrer"}
                        className="font-mono text-xs sm:text-sm text-accent break-all link-underline"
                      >
                        {info.detail}
                      </a>
                      <motion.button
                        onClick={() => copyToClipboard(info.detail, info.text)}
                        className="p-1.5 rounded-md text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors shrink-0"
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Copiar ${info.text.toLowerCase()}`}
                      >
                        {copied === info.text ? (
                          <FaCheck className="w-3.5 h-3.5 text-accent" />
                        ) : (
                          <FaCopy className="w-3.5 h-3.5" />
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          >
            <motion.a
              href="mailto:paul.sanchez1999@hotmail.es"
              className="btn-primary inline-flex items-center gap-2 group"
              whileTap={{ scale: 0.97 }}
            >
              Enviar mensaje
              <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
            <span className="font-mono text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <FaMapMarkerAlt className="w-3 h-3" />
              Quito, Ecuador
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
