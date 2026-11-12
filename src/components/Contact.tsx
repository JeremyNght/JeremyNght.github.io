import { useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { Mail, Copy, Check, Download } from 'lucide-react'
import { useI18n } from '../i18n/I18n'
import { PROFILE } from '../data/profile'
import Reveal from './Reveal'
import Signature from './Signature'

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export default function Contact() {
  const { t, tr } = useI18n()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${PROFILE.email}`
    }
  }

  const mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent(t('contact.subject'))}`

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal y={40}>
          <div className="contact-card">
            <span className="kicker">{t('contact.kicker')}</span>
            <h2 className="contact-title">{t('contact.title')}</h2>
            <p className="contact-text">{t('contact.text')}</p>
            <p className="contact-note">{t('contact.note')}</p>

            <div className="contact-actions">
              <a className="btn btn-white" href={mailto}>
                <Mail size={18} />
                {t('contact.email')}
              </a>
              <button className="btn btn-outline-white" onClick={copy}>
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? t('contact.copied') : t('contact.copy')}
              </button>
              <a className="btn btn-outline-white" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon />
                LinkedIn
              </a>
              <a className="btn btn-outline-white" href={tr(PROFILE.cv)} download>
                <Download size={18} className="arrow-d" />
                {t('contact.cv')}
              </a>
            </div>

            <a className="contact-mail" href={mailto}>
              {PROFILE.email}
            </a>

            <div className="contact-sign">
              <span className="hand">{t('contact.bye')}</span>
              <Signature width="100%" delay={0.3} />
            </div>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {copied && (
          <m.div
            className="toast"
            role="status"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
          >
            <Check size={16} /> {t('contact.copied')}
          </m.div>
        )}
      </AnimatePresence>
    </section>
  )
}
