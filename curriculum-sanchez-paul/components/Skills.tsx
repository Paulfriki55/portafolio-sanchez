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

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="py-20 px-4 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">HABILIDADES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="rounded-full p-4 border-2 border-blue-400 transition-all duration-300">
                <skill.icon className="text-6xl mb-4 text-blue-400" />
              </div>
              <span className="text-lg font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
