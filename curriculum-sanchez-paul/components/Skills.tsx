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
  description: string
  skills: Skill[]
}

const skillCategories: Category[] = [
  {
    name: "Desarrollo Web",
    icon: FaCode,
    description: "Frameworks y tecnologías para crear experiencias web modernas",
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
    description: "Plataformas y herramientas para aplicaciones móviles",
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
    description: "Lenguajes fundamentales para el desarrollo de software",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "C++", icon: SiCplusplus },
    ],
  },
  {
    name: "Bases de Datos",
    icon: FaDatabase,
    description: "Sistemas de gestión y análisis de datos",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    name: "Backend & Infraestructura",
    icon: FaServer,
    description: "Arquitecturas y servicios del lado del servidor",
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
    description: "Herramientas para análisis y visualización de datos",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "R", icon: SiR },
    ],
  },
]

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  return (
    <section id="skills" className="section bg-white dark:bg-black transition-all duration-500">
      {/* Fondo con gradiente sutil solo en modo claro */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-primary-100/10 dark:bg-transparent" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gradient mb-4 sm:mb-6"
          >
            Habilidades
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-primary-400 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Categorías */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full p-4 sm:p-6 rounded-xl sm:rounded-2xl text-left transition-all duration-300 ${
                    selectedCategory?.name === category.name
                      ? "glass-card border-primary-500/50"
                      : "bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:border-primary-300/50"
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${
                      selectedCategory?.name === category.name
                        ? "bg-primary-100 dark:bg-primary-900/50"
                        : "bg-gray-100 dark:bg-gray-700/50"
                    }`}>
                      <category.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        selectedCategory?.name === category.name
                          ? "text-primary-600 dark:text-primary-400"
                          : "text-gray-600 dark:text-gray-300"
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-base sm:text-lg font-medium mb-1 ${
                        selectedCategory?.name === category.name
                          ? "text-primary-600 dark:text-primary-400"
                          : "text-gray-900 dark:text-white"
                      }`}>
                        {category.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Detalles de habilidades */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-8"
          >
            <AnimatePresence mode="wait">
              {selectedCategory ? (
                <motion.div
                  key={selectedCategory.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-4 sm:p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="p-3 sm:p-4 bg-primary-100 dark:bg-primary-900/50 rounded-lg sm:rounded-xl">
                      <selectedCategory.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-1 sm:mb-2">
                        {selectedCategory.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        {selectedCategory.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {selectedCategory.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:border-primary-300/50 transition-all duration-300"
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                        }}
                      >
                        <div className="p-2 sm:p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg sm:rounded-xl">
                          <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="glass-card p-4 sm:p-6 md:p-8 text-center"
                >
                  <div className="p-6 sm:p-8">
                    <FaCode className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4 sm:mb-6" />
                    <h3 className="text-lg sm:text-xl font-light text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                      Selecciona una categoría
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500">
                      Explora mis habilidades técnicas organizadas por especialización
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills

