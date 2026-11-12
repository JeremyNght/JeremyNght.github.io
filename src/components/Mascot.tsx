import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, m } from 'motion/react'
import { X } from 'lucide-react'
import { useI18n, type L } from '../i18n/I18n'
import { useActiveSection, type SectionId } from '../hooks/useSectionNav'
import { useMascotEnabled } from '../hooks/useMascot'
import MiniMe from './MiniMe'

type Spot = SectionId | 'project'

const TIPS: Record<Spot, L[]> = {
  accueil: [
    { fr: 'Salut ! Moi c’est Mini‑Jérémy. Cliquez sur moi quand vous voulez une astuce.', en: 'Hi! I’m Mini‑Jérémy. Click me whenever you want a tip.' },
    { fr: 'Le thème clair/sombre et la langue se changent en haut à droite.', en: 'Switch theme and language at the top right.' },
  ],
  'a-propos': [
    { fr: 'Tout est vrai, même le premier site codé en terminale.', en: 'All true, even the first website built in high school.' },
    { fr: 'Sept applis en production… et je les ai toutes faites seul.', en: 'Seven apps in production… and I built every one of them.' },
  ],
  parcours: [
    { fr: 'La ligne bleue se remplit à mesure que vous descendez.', en: 'The blue line fills up as you scroll down.' },
    { fr: 'De Limoges à Toulouse : je suis du coin, et j’y suis bien !', en: 'From Limoges to Toulouse: a local, happy to stay!' },
  ],
  competences: [
    { fr: 'Pas de liste gonflée : ce sont les outils que j’utilise vraiment.', en: 'No padded list: these are the tools I actually use.' },
    { fr: 'Ma spécialité ? Relier tout ça à l’ERP Sage X3.', en: 'My speciality? Wiring all of this into the Sage X3 ERP.' },
  ],
  projets: [
    { fr: 'Ouvrez un projet : vous pourrez cliquer dedans comme dans la vraie appli.', en: 'Open a project: you can click around it like the real app.' },
    { fr: 'Survolez une carte, les écrans s’écartent.', en: 'Hover a card and the screens fan out.' },
  ],
  contact: [
    { fr: 'Un email suffit, je réponds vite. Promis !', en: 'An email is enough, I reply quickly. Promise!' },
    { fr: 'Mon CV se consulte juste ici, et se télécharge en un clic.', en: 'You can view my CV right here, and download it in one click.' },
  ],
  project: [
    { fr: 'Utilisez les flèches ← → du clavier pour changer d’écran.', en: 'Use the ← → arrow keys to switch screens.' },
    { fr: 'Les pages de l’appli sont listées à gauche : cliquez pour y aller.', en: 'The app’s pages are listed on the left: click to open one.' },
    { fr: 'Le bouton « Visite guidée » fait défiler les écrans tout seul.', en: 'The “Guided tour” button plays the screens for you.' },
    { fr: 'Cliquez sur un écran pour l’ouvrir en grand et zoomer.', en: 'Click a screen to open it full size and zoom in.' },
  ],
}

// Sur écran tactile, les conseils clavier / souris sont remplacés
const TOUCH_TIPS: Partial<Record<Spot, L[]>> = {
  accueil: [
    { fr: 'Salut ! Moi c’est Mini‑Jérémy. Touchez‑moi quand vous voulez une astuce.', en: 'Hi! I’m Mini‑Jérémy. Tap me whenever you want a tip.' },
    { fr: 'Le thème et la langue se changent en haut de l’écran.', en: 'Theme and language live at the top of the screen.' },
  ],
  projets: [
    { fr: 'Ouvrez un projet : vous pourrez naviguer dedans comme dans la vraie appli.', en: 'Open a project: you can browse it like the real app.' },
  ],
  project: [
    { fr: 'Balayez l’écran vers la gauche ou la droite pour changer de page.', en: 'Swipe left or right to switch pages.' },
    { fr: 'Les miniatures sous l’écran mènent directement à chaque page.', en: 'The thumbnails below jump straight to each page.' },
    { fr: 'Touchez un écran pour l’ouvrir en grand et zoomer.', en: 'Tap a screen to open it full size and zoom in.' },
  ],
}
const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
const tipsFor = (spot: Spot) => (isTouch && TOUCH_TIPS[spot]) || TIPS[spot]

export default function Mascot({ party = 0 }: { party?: number }) {
  const { t, tr } = useI18n()
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const section = useActiveSection(isHome)
  const spot: Spot = isHome ? section : 'project'
  const [, setEnabled] = useMascotEnabled()

  const [tip, setTip] = useState<{ spot: Spot; i: number } | null>(null)
  const [talking, setTalking] = useState(0)
  const hovering = useRef(false)

  // À chaque nouvelle bulle : un petit saut et un coucou de la main
  const say = (next: { spot: Spot; i: number }) => {
    setTip(next)
    // Remise à zéro puis relance : l'animation rejoue même sur des clics rapprochés
    setTalking(0)
    requestAnimationFrame(() => setTalking(Date.now()))
  }
  useEffect(() => {
    if (!talking) return
    const id = window.setTimeout(() => setTalking(0), 750)
    return () => window.clearTimeout(id)
  }, [talking])

  // Premier conseil peu après son arrivée
  useEffect(() => {
    const id = window.setTimeout(() => say({ spot, i: 0 }), 700)
    return () => window.clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Changement de section ou de page : nouveau conseil, sans bouger
  const lastSpot = useRef<Spot>(spot)
  useEffect(() => {
    if (lastSpot.current === spot) return
    lastSpot.current = spot
    say({ spot, i: 0 })
  }, [spot])

  // La bulle se ferme seule après quelques secondes
  useEffect(() => {
    if (!tip) return
    const id = window.setTimeout(() => !hovering.current && setTip(null), 8000)
    return () => window.clearTimeout(id)
  }, [tip])

  useEffect(() => {
    if (!tip) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setTip(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [tip])

  // Code Konami : il danse et lance des confettis
  const [partyMsg, setPartyMsg] = useState(false)
  useEffect(() => {
    if (!party) return
    setPartyMsg(true)
    setTip(null)
    const id = window.setTimeout(() => setPartyMsg(false), 5500)
    return () => window.clearTimeout(id)
  }, [party])

  const nextTip = () => {
    const list = tipsFor(spot)
    say(!tip || tip.spot !== spot ? { spot, i: 0 } : { spot, i: (tip.i + 1) % list.length })
  }

  const message = tip ? tr(tipsFor(tip.spot)[tip.i % tipsFor(tip.spot).length]) : ''

  return (
    <m.div
      className="mascot"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40, transition: { duration: 0.3 } }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      <AnimatePresence mode="wait">
        {partyMsg && (
          <m.div
            key="party"
            className="mascot-bubble"
            role="status"
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="mascot-name hand">Mini‑Jérémy</p>
            <p>{t('m.party')}</p>
          </m.div>
        )}
        {tip && !partyMsg && (
          <m.div
            key={`${tip.spot}-${tip.i}`}
            className="mascot-bubble"
            role="status"
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95, transition: { duration: 0.12 } }}
            transition={{ type: 'spring', stiffness: 380, damping: 26 }}
          >
            <button className="mascot-close" onClick={() => setTip(null)} aria-label={t('m.close')}>
              <X size={14} />
            </button>
            <p className="mascot-name hand">Mini‑Jérémy</p>
            <p>{message}</p>
            <div className="mascot-actions">
              <button onClick={nextTip}>{t('m.next')}</button>
              <button className="off" onClick={() => setEnabled(false)}>
                {t('m.hide')}
              </button>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      <button
        className={`minime ${talking ? 'is-talking' : ''} ${partyMsg ? 'is-party' : ''}`}
        onClick={nextTip}
        aria-label={t('m.ask')}
        title={t('m.ask')}
      >
        <MiniMe />
      </button>
      {partyMsg && (
        <span className="confetti" aria-hidden>
          {Array.from({ length: 14 }, (_, i) => (
            <i key={i} style={{ '--i': i } as CSSProperties} />
          ))}
        </span>
      )}
    </m.div>
  )
}
