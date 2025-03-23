"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { FaWhatsapp, FaEnvelope, FaPaperPlane, FaCopy, FaCheckCircle } from "react-icons/fa"
import { useRef, useState } from "react"

const Contact = () => {
  const contactInfo = [
    {
      icon: FaWhatsapp,
      text: "WhatsApp",
      link: "https://wa.me/593963208402",
      detail: "+593 963 208 402",
      description: "Respuesta rápida 24/7",
      gradient: "from-green-500 to-green-400",
      shadowColor: "rgba(34, 197, 94, 0.4)",
      bgColor: "bg-green-500",
      lightColor: "text-green-400",
    },
    {
      icon: FaEnvelope,
      text: "Email",
      link: "mailto:paul.sanchez1999@hotmail.es",
      detail: "paul.sanchez1999@hotmail.es",
      description: "Respuesta en 24 horas",
      gradient: "from-blue-500 to-blue-400",
      shadowColor: "rgba(59, 130, 246, 0.4)",
      bgColor: "bg-blue-500",
      lightColor: "text-blue-400",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [copied, setCopied] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  }

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative py-24 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* Keeping the original background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q25,45 50,50 T100,50"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.path
              d="M0,30 Q25,35 50,30 T100,30"
              stroke="rgba(0, 170, 225, 0.3)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.path
              d="M0,70 Q25,65 50,70 T100,70"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, repeat: Number.POSITIVE_INFINITY }}
            />
          </svg>
        </div>
      </div>

      {/* New content with completely redesigned look */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div className="inline-block relative mb-4" variants={titleVariants}>
            <motion.h2
              className="text-6xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"
              variants={titleVariants}
            >
              CONTACTO
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            ¿Listo para colaborar? Elige tu método preferido
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className="relative overflow-hidden rounded-2xl"
            >
              {/* Card background with animated gradient border */}
              <div className="absolute inset-0 p-[2px] rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                  style={{
                    transform: activeCard === index ? "translateX(0%)" : "translateX(-100%)",
                    transition: "transform 0.8s ease",
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-30`} />
              </div>

              {/* Card content */}
              <div className="relative bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl h-full flex flex-col">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full" />

                {/* Header with icon */}
                <div className="flex items-center mb-8">
                  <motion.div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${info.gradient} shadow-lg`}
                    style={{
                      boxShadow: activeCard === index ? `0 0 30px ${info.shadowColor}` : "none",
                    }}
                  >
                    <info.icon className="text-5xl" />
                  </motion.div>
                  <div className="ml-6">
                    <h3 className="text-3xl font-bold">{info.text}</h3>
                    <p className={`${info.lightColor} text-sm mt-1`}>{info.description}</p>
                  </div>
                </div>

                {/* Contact details with copy button */}
                <div className="bg-gray-900/50 rounded-xl p-4 mb-8 flex items-center justify-between group">
                  <span className="font-medium text-lg text-gray-200 truncate">{info.detail}</span>
                  <motion.button
                    onClick={() => copyToClipboard(info.detail, index)}
                    className={`ml-2 p-2 rounded-lg ${copied === index ? "bg-green-500/20" : "bg-gray-700/50 hover:bg-gray-700"}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {copied === index ? (
                      <FaCheckCircle className="text-green-400" />
                    ) : (
                      <FaCopy className="text-gray-400 group-hover:text-white" />
                    )}
                  </motion.button>
                </div>

                {/* Contact button */}
                <div className="mt-auto">
                  <motion.a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center ${info.bgColor} text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    style={{
                      boxShadow: activeCard === index ? `0 10px 25px -5px ${info.shadowColor}` : "none",
                    }}
                    whileHover={{ y: -5 }}
                    whileTap={{ y: 0 }}
                  >
                    <span className="mr-2">Contáctame ahora</span>
                    <motion.span
                      animate={
                        activeCard === index
                          ? {
                              x: [0, 5, 0],
                              transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
                            }
                          : {}
                      }
                    >
                      <FaPaperPlane />
                    </motion.span>
                  </motion.a>
                </div>

                {/* Animated highlight on hover */}
                <AnimatePresence>
                  {activeCard === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute rounded-full ${info.bgColor} opacity-20`}
                          style={{
                            width: `${Math.random() * 100 + 50}px`,
                            height: `${Math.random() * 100 + 50}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            filter: "blur(40px)",
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 0.2, 0],
                            x: [0, Math.random() * 50 - 25],
                            y: [0, Math.random() * 50 - 25],
                          }}
                          transition={{
                            duration: Math.random() * 2 + 2,
                            delay: Math.random(),
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 2.5 }}
        />
      </div>
    </motion.section>
  )
}

export default Contact

