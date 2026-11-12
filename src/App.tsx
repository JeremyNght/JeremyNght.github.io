import { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, LazyMotion, MotionConfig, m, useScroll, useSpring } from 'motion/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { TechSprite } from './components/TechIcon'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { useI18n } from './i18n/I18n'
import { useMascotEnabled } from './hooks/useMascot'

import ProjectPage from './pages/ProjectPage'
// Le compagnon est chargé à part, après l'affichage de la page
const Mascot = lazy(() => import('./components/Mascot'))
const loadMotion = () => import('./motion-features').then((r) => r.default)

export default function App() {
  const location = useLocation()
  const { lang, t } = useI18n()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })
  const [mascotOn] = useMascotEnabled()
  const [ready, setReady] = useState(false)

  // Code Konami : Mini-Jérémy fait la fête (même s'il était masqué)
  const [party, setParty] = useState(0)
  useEffect(() => {
    const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    let pos = 0
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      pos = key === code[pos] ? pos + 1 : key === code[0] ? 1 : 0
      if (pos === code.length) {
        pos = 0
        setParty(Date.now())
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  useEffect(() => {
    if (!party) return
    const id = window.setTimeout(() => setParty(0), 6000)
    return () => window.clearTimeout(id)
  }, [party])

  // Laisse la page se charger avant d'inviter le compagnon
  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 1800)
    return () => window.clearTimeout(id)
  }, [])

  useEffect(() => {
    if (location.pathname === '/') {
      document.title =
        lang === 'fr'
          ? 'Jérémy Nouhaillaguet · Développeur Full Stack'
          : 'Jérémy Nouhaillaguet · Full Stack Developer'
    }
  }, [lang, location.pathname])

  return (
    <LazyMotion features={loadMotion} strict>
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#contenu">
        {t('nav.skip')}
      </a>
      <m.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden />
      <TechSprite />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <m.main
          id="contenu"
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projets/:slug" element={<ProjectPage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </m.main>
      </AnimatePresence>
      <Footer />
      <Suspense fallback={null}>
        <AnimatePresence>{((ready && mascotOn) || party > 0) && <Mascot key="mascot" party={party} />}</AnimatePresence>
      </Suspense>
    </MotionConfig>
    </LazyMotion>
  )
}
