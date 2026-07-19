"use client"

import React, { useEffect, useState } from "react"
import { motion, type Variants } from "framer-motion"
import { GitHubCalendar } from "react-github-calendar"
import type { IconType } from "react-icons"
import { useTheme } from "@/lib/ThemeContext"
import {
  FaGithub,
  FaJava,
  FaPython,
  FaReact,
  FaAngular,
  FaPhp,
  FaAndroid,
  FaApple,
  FaDocker,
  FaCode,
  FaMobile,
  FaDatabase,
  FaServer,
  FaChartBar,
  FaTerminal,
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
  SiVuedotjs,
  SiNextdotjs,
  SiLaravel,
  SiKotlin,
  SiFirebase,
  SiGooglecloud,
} from "react-icons/si"

interface Tech {
  name: string
  icon: IconType
  color?: string
}

interface Category {
  name: string
  icon: IconType
  skills: Tech[]
}

const categories: Category[] = [
  {
    name: "Desarrollo Web",
    icon: FaCode,
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Angular", icon: FaAngular, color: "#DD0031" },
      { name: "Vue", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    ],
  },
  {
    name: "Desarrollo Móvil",
    icon: FaMobile,
    skills: [
      { name: "Flutter", icon: SiFlutter, color: "#54C5F8" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "Expo", icon: SiExpo },
      { name: "Android", icon: FaAndroid, color: "#3DDC84" },
      { name: "iOS", icon: FaApple, color: "#A2AAAD" },
    ],
  },
  {
    name: "Lenguajes",
    icon: FaTerminal,
    skills: [
      { name: "Java", icon: FaJava, color: "#F89820" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
    ],
  },
  {
    name: "Bases de Datos",
    icon: FaDatabase,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    name: "Backend & Cloud",
    icon: FaServer,
    skills: [
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "Java", icon: FaJava, color: "#F89820" },
    ],
  },
  {
    name: "Análisis de Datos",
    icon: FaChartBar,
    skills: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "R", icon: SiR, color: "#276DC3" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.045,
      delayChildren: 0.1,
    },
  },
}

const tileVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
}

const TechTile = ({ tech }: { tech: Tech }) => {
  const brand = tech.color ?? "#71717a"
  return (
    <motion.div
      variants={tileVariants}
      whileHover={{ y: -6, scale: 1.08 }}
      style={{ "--brand": `${brand}99`, "--brand-glow": `${brand}59` } as React.CSSProperties}
      className="group relative hover:z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/40 flex items-center justify-center cursor-default transition-[border-color,box-shadow] duration-300 hover:border-[color:var(--brand)] hover:shadow-[0_14px_36px_-12px_var(--brand-glow)]"
    >
      <tech.icon
        className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110 ${
          tech.color ? "" : "text-gray-900 dark:text-white"
        }`}
        style={tech.color ? { color: tech.color } : undefined}
      />
      <span className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full px-2 py-0.5 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 font-mono text-[10px] whitespace-nowrap text-gray-700 dark:text-gray-300 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 shadow-md">
        {tech.name}
      </span>
    </motion.div>
  )
}

const Skills: React.FC = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="skills" className="section bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-gradient mb-4">Habilidades</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-16 h-px bg-primary-500 mx-auto origin-left"
          />
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="surface-card p-5 sm:p-6 hover:border-primary-500/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg border border-primary-500/30 bg-primary-500/10">
                  <category.icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-gray-600 dark:text-gray-300">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((tech) => (
                  <TechTile key={tech.name} tech={tech} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 max-w-5xl mx-auto"
        >
          <div className="surface-card p-6 sm:p-8 hover:border-primary-500/40 transition-colors duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg border border-primary-500/30 bg-primary-500/10">
                  <FaGithub className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-gray-600 dark:text-gray-300">
                  Mis Contribuciones
                </h3>
              </div>
              <a
                href="https://github.com/Paulfriki55"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-gray-500 dark:text-gray-400 hover:text-accent transition-colors duration-300"
              >
                @Paulfriki55 →
              </a>
            </div>

            <div className="w-full flex justify-center items-center min-h-[160px] [&>article]:w-full [&>article]:max-w-full [&_svg]:w-full [&_svg]:h-auto [&_svg]:max-w-[800px] font-mono text-xs">
              {mounted && (
                <GitHubCalendar
                  username="Paulfriki55"
                  blockSize={14}
                  blockMargin={5}
                  fontSize={13}
                  colorScheme={theme === "dark" ? "dark" : "light"}
                  theme={{
                    light: ["#f4f4f5", "#a5f3fc", "#67e8f9", "#06b6d4", "#0e7490"],
                    dark: ["#18181b", "#164e63", "#0e7490", "#06b6d4", "#67e8f9"],
                  }}
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
