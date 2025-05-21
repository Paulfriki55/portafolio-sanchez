import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <SmoothScroll />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
}

