import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className='min-h-screen' style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Navigation />
      <Hero />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
