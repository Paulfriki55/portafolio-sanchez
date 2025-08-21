"use client"

import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import Image from "next/image"

interface SocialLink {
  href: string
  icon: React.ElementType
  label: string
  color: string
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/paul55geek/",
    icon: FaFacebook,
    label: "Facebook",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    href: "https://www.instagram.com/paulfriki55/",
    icon: FaInstagram,
    label: "Instagram",
    color: "hover:text-pink-600 dark:hover:text-pink-400",
  },
  {
    href: "https://www.linkedin.com/in/paul-sanchez-955204271/",
    icon: FaLinkedin,
    label: "LinkedIn",
    color: "hover:text-blue-700 dark:hover:text-blue-400",
  },
  {
    href: "https://github.com/Paulfriki55",
    icon: FaGithub,
    label: "GitHub",
    color: "hover:text-gray-800 dark:hover:text-gray-200",
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-all duration-500">
      <div className="container-custom py-8 sm:py-12">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <Image
              src="/images/logo_ps.png"
              alt="Paul Sanchez Logo"
              width={60}
              height={60}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Enlaces de redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 sm:gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 sm:p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-300 ${link.color} hover:scale-110 hover:shadow-lg`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Línea divisoria */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Paúl Sánchez. Todos los derechos reservados.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
