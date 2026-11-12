import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const SECTIONS = [
  { id: 'accueil', key: 'nav.home' },
  { id: 'a-propos', key: 'nav.about' },
  { id: 'parcours', key: 'nav.journey' },
  { id: 'competences', key: 'nav.skills' },
  { id: 'projets', key: 'nav.projects' },
  { id: 'contact', key: 'nav.contact' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']

/** Défile vers une section, en revenant d'abord à l'accueil si besoin */
export function useGoToSection() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return useCallback(
    (id: SectionId) => {
      if (pathname !== '/') {
        navigate('/', { state: { scrollTo: id } })
        return
      }
      const el = document.getElementById(id)
      if (!el) return
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (id === 'accueil') window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
      else el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
      history.replaceState(null, '', id === 'accueil' ? '/' : `/#${id}`)
    },
    [navigate, pathname],
  )
}

/** Section actuellement visible à l'écran */
export function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<SectionId>('accueil')
  useEffect(() => {
    if (!enabled) return
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id as SectionId)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [enabled])
  return active
}
