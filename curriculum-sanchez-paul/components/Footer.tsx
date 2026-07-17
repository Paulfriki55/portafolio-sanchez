"use client"

import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import { LogoMark } from "./LogoMark"

interface SocialLink {
  href: string
  icon: React.ElementType
  label: string
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/Paulfriki55",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/paul-sanchez-955204271/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/paulfriki55/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/paul55geek/",
    icon: FaFacebook,
    label: "Facebook",
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="container-custom py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <LogoMark className="w-9 h-7 text-gray-900 dark:text-white" />
            <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Paúl Sánchez
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-transparent text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 hover:border-gray-200 dark:hover:border-gray-800 transition-colors duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.92 }}
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
