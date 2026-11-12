import type { CSSProperties } from 'react'
import { m } from 'motion/react'
import { ArrowRight, MapPin, Mail } from 'lucide-react'
import { useI18n } from '../i18n/I18n'
import { useGoToSection } from '../hooks/useSectionNav'
import { PROFILE } from '../data/profile'
import Signature from './Signature'

export default function Hero() {
  const { t } = useI18n()
  const goTo = useGoToSection()

  // Animations d'entrée en CSS : visibles dès le HTML pré-rendu, sans attendre le JavaScript
  const rise = (delay: number) => ({ style: { '--d': `${delay}s` } as CSSProperties })

  return (
    <section id="accueil" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="hand hero-hello rise" {...rise(0)}>
            {t('hero.hello')}
          </p>

          <h1 className="hero-title">
            <span className="first rise" {...rise(0.05)}>
              {PROFILE.firstName}
            </span>
            <span className="last rise" {...rise(0.1)}>
              {PROFILE.lastName}
              {/* Trait souligné tracé à la main */}
              <svg className="scribble" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden>
                <m.path
                  d="M3 13 C 60 6, 120 5, 180 8 S 270 12, 297 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.9, ease: 'easeInOut' }}
                />
              </svg>
            </span>
          </h1>

          <p className="hero-role rise" {...rise(0.15)}>
            {t('hero.role')}
          </p>
          <p className="hero-lede rise" {...rise(0.2)}>
            {t('hero.lede')}
          </p>

          <div className="hero-ctas rise" {...rise(0.25)}>
            <a
              href="/#projets"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                goTo('projets')
              }}
            >
              {t('hero.ctaProjects')}
              <ArrowRight size={18} className="arrow-r" />
            </a>
            <a
              href="/#contact"
              className="btn btn-ghost"
              onClick={(e) => {
                e.preventDefault()
                goTo('contact')
              }}
            >
              <Mail size={18} />
              {t('hero.ctaContact')}
            </a>
          </div>

          <div className="hero-meta rise" {...rise(0.3)}>
            <span className="status-badge">
              <span className="pulse" aria-hidden />
              {t('hero.available')}
            </span>
            <span>
              <MapPin size={16} aria-hidden />
              {t('hero.location')}
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <figure className="polaroid">
            <span className="tape" aria-hidden />
            <img src="/brand/photo-square.webp" alt={t('hero.photo')} width={560} height={560} fetchPriority="high" />
            <figcaption className="hand">{t('hero.polaroid')}</figcaption>
          </figure>

          <m.div
            className="hero-note hand"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            aria-hidden
          >
            {t('hero.note')}
            <svg viewBox="0 0 80 60" className="note-arrow">
              <m.path
                d="M6 8 C 30 6, 52 18, 60 44"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              />
              <m.path
                d="M50 38 L 60 46 L 66 34"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.95, duration: 0.25 }}
              />
            </svg>
          </m.div>

          <div className="photo-sign">
            <Signature width="100%" delay={1.1} />
          </div>
        </div>
      </div>
    </section>
  )
}
