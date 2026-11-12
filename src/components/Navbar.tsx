import { useEffect, useState, type MouseEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, m } from 'motion/react'
import { Menu, Moon, Sun, X, Mail } from 'lucide-react'
import { useI18n } from '../i18n/I18n'
import { useTheme } from '../hooks/useTheme'
import { SECTIONS, useActiveSection, useGoToSection, type SectionId } from '../hooks/useSectionNav'
import Signature from './Signature'

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  const { toggle } = useTheme()
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const active = useActiveSection(isHome)
  const goTo = useGoToSection()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  const onLink = (e: MouseEvent, id: SectionId) => {
    e.preventDefault()
    setOpen(false)
    goTo(id)
  }

  const links = SECTIONS.filter((s) => s.id !== 'accueil')

  return (
    <>
      <header className={`nav ${scrolled || open || !isHome ? 'is-scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="/" className="nav-logo" aria-label="Jérémy Nouhaillaguet" onClick={(e) => onLink(e, 'accueil')}>
            <Signature width={104} animate={false} />
          </a>

          <nav className="nav-links" aria-label="Navigation principale">
            {links.map((s) => {
              const isActive = isHome && active === s.id
              return (
                <a
                  key={s.id}
                  href={`/#${s.id}`}
                  className={`nav-link ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={(e) => onLink(e, s.id)}
                >
                  {isActive && (
                    <m.span
                      layoutId="nav-pill"
                      className="nav-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span>{t(s.key)}</span>
                </a>
              )
            })}
          </nav>

          <div className="nav-actions">
            <button
              className="icon-btn lang-btn"
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              aria-label={t('nav.lang')}
              title={t('nav.lang')}
            >
              <span className={lang === 'fr' ? '' : 'off'}>FR</span>
              <span className="off">/</span>
              <span className={lang === 'en' ? '' : 'off'}>EN</span>
            </button>
            <button className="icon-btn" onClick={toggle} aria-label={t('nav.theme')} title={t('nav.theme')}>
              <span className="theme-icons" aria-hidden>
                <Sun size={18} className="i-sun" />
                <Moon size={18} className="i-moon" />
              </span>
            </button>
            <button
              className="icon-btn menu-btn"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? t('nav.close') : t('nav.menu')}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <m.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((s, i) => (
              <m.a
                key={s.id}
                href={`/#${s.id}`}
                onClick={(e) => onLink(e, s.id)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
              >
                <small>0{i + 1}</small>
                {t(s.key)}
              </m.a>
            ))}
            <a className="btn btn-primary mobile-cta" href="/#contact" onClick={(e) => onLink(e, 'contact')}>
              <Mail size={18} />
              {t('hero.ctaContact')}
            </a>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}
