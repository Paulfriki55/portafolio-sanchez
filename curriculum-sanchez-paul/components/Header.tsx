'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaCode, FaGamepad, FaLaptopCode, FaRobot, FaArrowDown, FaFileDownload, FaBars, FaTimes } from 'react-icons/fa'
import { useState, useEffect, useCallback, useMemo } from 'react'

const Header = () => {
    const subtitles = useMemo(() => [
        { text: 'Full Stack Software Developer', icon: FaCode },
        { text: 'Geek', icon: FaLaptopCode },
        { text: 'Gamer', icon: FaGamepad },
        { text: 'Friki', icon: FaRobot }
    ], []);

    const [subtitle, setSubtitle] = useState(subtitles[0].text)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Removed const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const cycleSubtitle = useCallback(() => {
        setSubtitle(currentSubtitle => {
            const currentIndex = subtitles.findIndex(item => item.text === currentSubtitle)
            const nextIndex = (currentIndex + 1) % subtitles.length
            return subtitles[nextIndex].text
        })
    }, [subtitles]);

    useEffect(() => {
        const interval = setInterval(cycleSubtitle, 3000)
        return () => clearInterval(interval)
    }, [cycleSubtitle]);

    /* removed
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['sobre-mi', 'habilidades', 'experiencia', 'educacion', 'contacto'];
            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 100) {
                    current = section;
                }
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    */

    const CurrentIcon = subtitles.find(item => item.text === subtitle)?.icon || FaCode

    const subtitleVariants = {
        initial: {
            opacity: 0,
            x: -30,
            scale: 0.8
        },
        animate: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            x: 30,
            scale: 0.8,
            transition: {
                duration: 0.3
            }
        }
    }

    const scrollIndicatorVariants = {
        initial: { opacity: 0, y: -10 },
        animate: {
            opacity: 1,
            y: [0, 10, 0],
            transition: {
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }
/* removed
    const menuItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        },
        hover: { 
            scale: 1.1,
            color: '#60a5fa',
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    }

    const menuContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    }
    */

    const generateRandomPositions = () => {
        return Array.from({ length: 25 }, () => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
        }));
    };

    const [starPositions] = useState(generateRandomPositions);

    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800"
        >
            {/* Animated background stars */}
            <div className="absolute inset-0">
                {starPositions.map((position, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-1 w-1 bg-blue-400 rounded-full"
                        style={{
                            top: position.top,
                            left: position.left,
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.8, 1.2, 0.8],
                            rotate: [0, 360, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Menu Hamburguesa */}
            <motion.div 
                className="absolute top-6 right-6 z-50 md:hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
                    {isMenuOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
                </button>
            </motion.div>

            {/* Menu de navegacion */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-64 bg-gray-900/90 backdrop-blur-sm z-40 p-6 md:hidden shadow-2xl"
                    >
                        <nav className="flex flex-col space-y-4">
                            <motion.div whileHover={{ scale: 1.05, color: '#60a5fa' }} transition={{ duration: 0.2 }}>
                                <Link href="#about" onClick={closeMenu} className="text-gray-300 hover:text-blue-300">Sobre mí</Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05, color: '#60a5fa' }} transition={{ duration: 0.2 }}>
                                <Link href="#skills" onClick={closeMenu} className="text-gray-300 hover:text-blue-300">Habilidades</Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05, color: '#60a5fa' }} transition={{ duration: 0.2 }}>
                                <Link href="#experience" onClick={closeMenu} className="text-gray-300 hover:text-blue-300">Experiencia</Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05, color: '#60a5fa' }} transition={{ duration: 0.2 }}>
                                <Link href="#education" onClick={closeMenu} className="text-gray-300 hover:text-blue-300">Educación</Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05, color: '#60a5fa' }} transition={{ duration: 0.2 }}>
                                <Link href="#contact" onClick={closeMenu} className="text-gray-300 hover:text-blue-300">Contacto</Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Contenido del Header */}
            <div className="relative z-10 text-white text-center px-4 flex flex-col items-center justify-center space-y-6 -translate-y-8">
                {/* Foto de perfil con nuevo efecto */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative mb-2 w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
                >
                    {/* Efecto de brillo giratorio */}
                    <motion.div
                        className="absolute inset-0 rounded-full animate-spin-slow opacity-75"
                        style={{
                            background: `conic-gradient(from -45deg, rgba(66, 153, 225, 0.8) , rgba(0, 170, 225, 0.8))`,
                            animationDuration: '10s',
                            filter: 'blur(10px)'
                        }}
                    />
                    {/* Contenedor de la imagen */}
                    <motion.div
                        whileHover={{
                            scale: 1.02,
                            borderColor: 'rgba(66, 153, 225, 0.6)',
                            boxShadow: '0 0 15px rgba(66, 153, 225, 0.4)',
                            background: 'transparent'
                        }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-blue-400 to-cyan-400"
                    >
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/30">
                            <Image
                                src="/images/paul-profile.png"
                                alt="Paul Sanchez"
                                width={250}
                                height={250}
                                priority
                                quality={90}
                                className="object-cover w-full h-full rounded-full"
                            />
                        </div>
                    </motion.div>
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
                                <FaGithub className="w-12 h-12 text-white" />
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
                                <FaLinkedin className="w-12 h-12 text-white" />
                            </Link>
                            <span className="mt-2 text-xs opacity-80">Conéctemos en LinkedIn</span>
                        </motion.div>

                        {/* Nuevo botón para descargar la Hoja de Vida */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex flex-col items-center"
                        >
                            <Link
                                href="/files/Hoja de Vida Paul Sanchez.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
                            >
                                <FaFileDownload className="w-12 h-12 text-white" />
                            </Link>
                            <span className="mt-2 text-xs opacity-80">Descarga mi Hoja de Vida</span>
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
                <FaArrowDown className="w-8 h-8 text-white opacity-70" />
            </motion.div>

            {/* Navegacion para pantallas grandes */}
            <nav className="hidden md:flex absolute top-6 right-6 z-50 space-x-6">
                <motion.div whileHover={{ scale: 1.05, color: '#60a5fa' }} transition={{ duration: 0.2 }}>
                    <Link href="#about" className="text-gray-300 hover:text-blue-300">Sobre mí</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, color: '#60a5fa' }} transition={{ duration: 0.2 }}>
                    <Link href="#skills" className="text-gray-300 hover:text-blue-300">Habilidades</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, color: '#60a5fa' }} transition={{ duration: 0.2 }}>
                    <Link href="#experience" className="text-gray-300 hover:text-blue-300">Experiencia</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, color: '#60a5fa' }} transition={{ duration: 0.2 }}>
                    <Link href="#education" className="text-gray-300 hover:text-blue-300">Educación</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, color: '#60a5fa' }} transition={{ duration: 0.2 }}>
                    <Link href="#contact" className="text-gray-300 hover:text-blue-300">Contacto</Link>
                </motion.div>
            </nav>
        </motion.header>
    )
}

export default Header