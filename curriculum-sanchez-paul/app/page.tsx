import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
}

