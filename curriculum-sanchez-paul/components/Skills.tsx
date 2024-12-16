'use client'

import { motion } from 'framer-motion'
import { FaJava, FaPython, FaReact, FaAngular, FaPhp } from 'react-icons/fa'
import { SiJavascript, SiDotnet, SiFlutter, SiDart, SiMongodb, SiPostgresql, SiMysql } from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'Java', icon: FaJava },
    { name: 'Python', icon: FaPython },
    { name: 'React', icon: FaReact },
    { name: 'Angular', icon: FaAngular },
    { name: 'JavaScript', icon: SiJavascript },
    { name: '.NET', icon: SiDotnet },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Dart', icon: SiDart },
    { name: 'PHP', icon: FaPhp },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MySQL', icon: SiMysql },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="py-20 px-4 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">HABILIDADES</h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center"
            >
              <motion.div 
                className="rounded-full p-4 bg-gray-800 border-2 border-blue-400 transition-all duration-300 group hover:bg-blue-600"
                whileHover={{ 
                  boxShadow: '0 0 25px rgba(66, 153, 225, 0.8)',
                  borderColor: 'rgba(66, 153, 225, 1)'
                }}
              >
                <skill.icon className="text-6xl mb-4 text-blue-400 group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <span className="text-lg font-semibold mt-2 text-blue-400 group-hover:text-white">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills

