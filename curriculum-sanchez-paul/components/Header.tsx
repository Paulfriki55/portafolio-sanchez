'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    FaGithub,
    FaLinkedin,
    FaCode,
    FaGamepad,
    FaLaptopCode,
    FaRobot,
    FaArrowDown,
    FaFileDownload,
    FaBars,
    FaTimes,
    FaUser,
    FaGraduationCap,
    FaEnvelope,
} from 'react-icons/fa';
import { useState, useEffect, useCallback } from 'react';

const socialLinks = [
    { 
        href: "https://github.com/Paulfriki55", 
        icon: FaGithub, 
        label: "Explora mis Proyectos" 
    },
    { 
        href: "https://linkedin.com/in/paul-sanchez-955204271", 
        icon: FaLinkedin, 
        label: "Conéctemos en LinkedIn" 
    },
    { 
        href: "/files/Hoja de Vida Paul Sanchez.pdf", 
        icon: FaFileDownload, 
        label: "Descarga mi Hoja de Vida" 
    },
];

const menuItems = [
    { id: 'about', label: 'Sobre mí', icon: FaUser },
    { id: 'skills', label: 'Habilidades', icon: FaCode },
    { id: 'experience', label: 'Experiencia', icon: FaLaptopCode },
    { id: 'education', label: 'Educación', icon: FaGraduationCap },
    { id: 'contact', label: 'Contacto', icon: FaEnvelope },
];

const subtitlesList = [
    { text: 'Full Stack Software Developer', icon: FaCode },
    { text: 'Geek', icon: FaLaptopCode },
    { text: 'Gamer', icon: FaGamepad },
    { text: 'Friki', icon: FaRobot },
];

const Header = () => {
    const [subtitle, setSubtitle] = useState(subtitlesList[0].text);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const cycleSubtitle = useCallback(() => {
        setSubtitle(current => {
            const currentIndex = subtitlesList.findIndex(item => item.text === current);
            const nextIndex = (currentIndex + 1) % subtitlesList.length;
            return subtitlesList[nextIndex].text;
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(cycleSubtitle, 3000);
        return () => clearInterval(interval);
    }, [cycleSubtitle]);

    const CurrentIcon = subtitlesList.find(item => item.text === subtitle)?.icon || FaCode;

    const subtitleVariants = {
        initial: { opacity: 0 },
        animate: { 
            opacity: 1,
            transition: { duration: 0.5 }
        },
        exit: { 
            opacity: 0,
            transition: { duration: 0.3 }
        }
    };

    const scrollIndicatorVariants = {
        initial: { opacity: 0, y: -10 },
        animate: {
            opacity: 1,
            y: [0, 20, 0],
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }
    };

    const orbitVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            rotate: i * 240,
            transition: { delay: i * 0.2, duration: 0.7, type: 'spring' }
        })
    };

    const menuVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 200, damping: 25 }
        },
        exit: { opacity: 0, x: 100 }
    };

    const navLinkVariants = {
        hover: {
            scale: 1.05,
            color: '#60a5fa',
            textShadow: '0 0 10px rgba(96, 165, 250, 0.5)',
            transition: { duration: 0.2 }
        }
    };

    const generateRandomPositions = () => {
        return Array.from({ length: 55 }, () => ({
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
            {/* Fondo estelar animado */}
            <div className="absolute inset-0">
                {starPositions.map((position, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-1 w-1 bg-blue-400 rounded-full"
                        style={{ top: position.top, left: position.left }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Botón del menú móvil */}
            <motion.div
                className="absolute top-6 right-6 z-50 md:hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
                    {isMenuOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
                </button>
            </motion.div>

            {/* Menú móvil */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed top-16 right-4 w-64 bg-gray-900/95 backdrop-blur-sm rounded-xl z-40 p-4 shadow-xl border border-gray-700"
                    >
                        <nav className="flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        href={`#${item.id}`}
                                        onClick={closeMenu}
                                        className="flex items-center gap-3 text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-all"
                                    >
                                        <item.icon className="w-5 h-5 text-blue-400" />
                                        <span className="font-medium">{item.label}</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Contenido principal */}
            <div className="relative z-10 text-white px-4 flex flex-col md:flex-row items-center md:items-start justify-between max-w-6xl w-full">
                {/* Sección de texto */}
                <div className="order-2 md:order-1 text-center md:text-left md:w-1/2 md:pr-8">
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
                            className="text-xl md:text-2xl mb-6 tracking-wide glass-effect px-4 py-2 rounded-lg flex items-center justify-center gap-3 glow-effect"
                        >
                            <CurrentIcon className="w-6 h-6 text-blue-400" />
                            <span>{subtitle}</span>
                        </motion.div>
                    </AnimatePresence>

                    {/* Enlaces sociales con efecto neon */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="flex justify-center gap-6">
                            {socialLinks.map((link, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full transition-all duration-300 hover:bg-white/10"
                                    >
                                        <link.icon 
                                            className="w-12 h-12 text-white" 
                                            style={{
                                                filter: 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))'
                                            }}
                                        />
                                    </Link>
                                    <span className="mt-2 text-xs opacity-80">{link.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Sección de imagen */}
                <div className="order-1 md:order-2 mb-8 md:mb-0 md:w-1/2 flex justify-center">
                    <div 
                        className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <AnimatePresence>
                            {isHovered && [0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
                                    variants={orbitVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    custom={i}
                                />
                            ))}
                        </AnimatePresence>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative w-full h-full"
                        >
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                                <Image
                                    src="/images/paul-profile.png"
                                    alt="Paul Sanchez"
                                    width={350}
                                    height={350}
                                    priority
                                    quality={90}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Indicador de scroll */}
            <motion.div
                variants={scrollIndicatorVariants}
                initial="initial"
                animate="animate"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
            >
                <FaArrowDown className="w-8 h-8 text-blue-400" style={{ 
                    filter: 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.5))',
                    animation: 'bounce 1.5s infinite' 
                }} />
            </motion.div>

            {/* Navegación desktop */}
            <nav className="hidden md:flex absolute top-6 right-6 z-50 space-x-6">
                {menuItems.map((item) => (
                    <motion.div
                        key={item.id}
                        variants={navLinkVariants}
                        whileHover="hover"
                        className="relative"
                    >
                        <Link
                            href={`#${item.id}`}
                            className="text-gray-300 px-2 py-1 transition-colors"
                        >
                            {item.label}
                            <motion.div
                                className="absolute bottom-0 left-0 h-[2px] bg-blue-400"
                                initial={{ width: 0 }}
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    </motion.div>
                ))}
            </nav>
        </motion.header>
    );
};

export default Header;