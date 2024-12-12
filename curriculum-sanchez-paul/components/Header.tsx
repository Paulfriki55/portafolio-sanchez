'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaCode, FaGamepad, FaLaptopCode, FaRobot, FaArrowDown } from 'react-icons/fa'
import { useState, useEffect, useCallback } from 'react'

const Header = () => {
  const subtitles = [
    { text: 'Full Stack Software Developer', icon: FaCode },
    { text: 'Geek', icon: FaLaptopCode },
    { text: 'Gamer', icon: FaGamepad },
    { text: 'Friki', icon: FaRobot }
  ]

  const [subtitle, setSubtitle] = useState(subtitles[0].text)

  const cycleSubtitle = useCallback(() => {
    setSubtitle(currentSubtitle => {
      const currentIndex = subtitles.findIndex(item => item.text === currentSubtitle)
      const nextIndex = (currentIndex + 1) % subtitles.length
      return subtitles[nextIndex].text
    })
  }, [subtitles])

  useEffect(() => {
    const interval = setInterval(cycleSubtitle, 3000)
    return () => clearInterval(interval)
  }, [cycleSubtitle])

  const CurrentIcon = subtitles.find(item => item.text === subtitle)?.icon || FaCode

  const subtitleVariants = {
    initial: { 
      opacity: 0, 
      x: -50,
      scale: 0.7 
    },
    animate: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 250, 
        damping: 12,
        duration: 0.6 
      }
    },
    exit: { 
      opacity: 0, 
      x: 50,
      scale: 0.7,
      transition: { 
        duration: 0.4 
      }
    }
  }

  const scrollIndicatorVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      y: [0, 20, 0],
      transition: {
        duration: 2.0,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900"
    >
      <div className="relative z-10 text-white text-center px-4 flex flex-col items-center justify-center space-y-6 -translate-y-8">
        {/* Foto de perfil */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-2 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl w-[200px] h-[200px] md:w-[250px] md:h-[250px] flex items-center justify-center"
        >
          <Image 
            src="/images/paul-profile.png"
            alt="Paul Sanchez"
            width={250}
            height={250}
            priority
            quality={80}
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.0 }}
          className="text-5xl md:text-7xl font-bold mb-2 tracking-wider text-gradient wave-animation"
        >
          PAUL SANCHEZ
        </motion.h1>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={subtitle}
            variants={subtitleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-xl md:text-2xl mb-6 tracking-wide glass-effect px-4 py-2 rounded-lg flex items-center justify-center gap-3"
          >
            <CurrentIcon className="w-6 h-6" />
            <span>{subtitle}</span>
          </motion.div>
        </AnimatePresence>

        {/* Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Link
                href="https://github.com/Paulfriki55"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
              >
                <FaGithub className="w-10 h-10 text-white" />
              </Link>
              <span className="mt-2 text-xs opacity-80">Explora mis Proyectos</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Link
                href="https://linkedin.com/in/paul-sanchez-955204271"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
              >
                <FaLinkedin className="w-10 h-10 text-white" />
              </Link>
              <span className="mt-2 text-xs opacity-80">Conéctemos en LinkedIn</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={scrollIndicatorVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
      >
        <FaArrowDown className="w-8 h-8 text-white opacity-70 animate-bounce" />
      </motion.div>
    </motion.header>
  )
}

export default Header

