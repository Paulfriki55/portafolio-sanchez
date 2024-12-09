'use client'

import { motion } from 'framer-motion'
import { FaJava, FaPython, FaReact, FaAngular, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiDotnet } from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'Java', icon: FaJava },
    { name: 'Python', icon: FaPython },
    { name: 'React', icon: FaReact },
    { name: 'Angular', icon: FaAngular },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Node.js', icon: FaNodeJs },
    { name: '.NET', icon: SiDotnet },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">HABILIDADES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <skill.icon className="text-6xl mb-4 text-blue-400" />
              <span className="text-lg font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills

