import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-all duration-500">
      <SmoothScroll />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  )
}

