import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import { ScrollProgress } from '@/components/motion/Reveal'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

