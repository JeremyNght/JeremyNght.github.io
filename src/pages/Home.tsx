import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import About from '../components/About'
import Journey from '../components/Journey'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  const location = useLocation()

  // Arrivée depuis une page projet ou via un lien /#section
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo ?? location.hash.slice(1)
    if (!target) {
      window.scrollTo(0, 0)
      return
    }
    const id = window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ block: 'start' })
    }, 60)
    return () => window.clearTimeout(id)
  }, [location])

  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
