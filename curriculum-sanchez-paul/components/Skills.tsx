"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { IconType } from "react-icons"
import {
  FaJava,
  FaPython,
  FaReact,
  FaAngular,
  FaPhp,
  FaDatabase,
  FaCode,
  FaMobile,
  FaServer,
  FaChartBar,
  FaAndroid,
  FaApple,
  FaDocker,
} from "react-icons/fa"
import {
  SiJavascript,
  SiDotnet,
  SiFlutter,
  SiDart,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiExpo,
  SiCplusplus,
  SiR,
} from "react-icons/si"

interface Skill {
  name: string
  icon: IconType
}

interface Category {
  name: string
  icon: IconType
  skills: Skill[]
}

const skillCategories: Category[] = [
  {
    name: "Desarrollo Web",
    icon: FaCode,
    skills: [
      { name: "React", icon: FaReact },
      { name: "Angular", icon: FaAngular },
      { name: "JavaScript", icon: SiJavascript },
      { name: ".NET", icon: SiDotnet },
      { name: "PHP", icon: FaPhp },
    ],
  },
  {
    name: "Desarrollo Móvil",
    icon: FaMobile,
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Expo", icon: SiExpo },
      { name: "Android", icon: FaAndroid },
      { name: "iOS", icon: FaApple },
    ],
  },
  {
    name: "Lenguajes de Programación",
    icon: FaCode,
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "C++", icon: SiCplusplus },
    ],
  },
  {
    name: "Bases de Datos",
    icon: FaDatabase,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    name: "Backend & Infraestructura",
    icon: FaServer,
    skills: [
      { name: ".NET", icon: SiDotnet },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "Docker", icon: FaDocker },
    ],
  },
  {
    name: "Análisis de Datos",
    icon: FaChartBar,
    skills: [
      { name: "Python", icon: FaPython },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "R", icon: SiR },
    ],
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          HABILIDADES
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <motion.div
                className="relative rounded-lg p-6 bg-gray-800 border-2 border-blue-400 transition-all duration-300 group hover:bg-blue-600 overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(66, 153, 225, 0.8)",
                }}
              >
                <div className="relative z-10">
                  <category.icon className="text-7xl mb-4 text-white group-hover:text-white transition-colors duration-300" />
                  <h3 className="text-xl font-semibold text-blue-400 group-hover:text-white">{category.name}</h3>
                </div>
                <AnimatePresence>
                  {hoveredCategory === category.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gray-800/90 backdrop-blur-sm flex items-center justify-center z-20"
                    >
                      <div className="grid grid-cols-3 gap-4 p-4">
                        {category.skills.map((skill) => (
                          <motion.div
                            key={skill.name}
                            className="flex flex-col items-center"
                            whileHover={{ scale: 1.1 }}
                          >
                            <skill.icon className="text-3xl text-white mb-2" />
                            <span className="text-sm text-center text-white">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills

