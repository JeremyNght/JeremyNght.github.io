import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { m } from 'motion/react'
import { Download, ExternalLink, X } from 'lucide-react'
import { useI18n, type Lang } from '../i18n/I18n'
import { PROFILE } from '../data/profile'

/**
 * Aperçu du CV dans une fenêtre, comme une feuille imprimée : l'image de la page
 * (générée depuis le PDF) s'affiche partout, y compris sur téléphone où les PDF
 * intégrés ne s'affichent pas. Le PDF reste téléchargeable ou ouvrable à côté.
 */
export default function CvViewer({ onClose }: { onClose: () => void }) {
  const { t, lang } = useI18n()
  const [cvLang, setCvLang] = useState<Lang>(lang)
  const closeRef = useRef<HTMLButtonElement>(null)
  const pdf = PROFILE.cv[cvLang]
  const image = pdf.replace(/\.pdf$/, '.webp')

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
      previous?.focus()
    }
  }, [onClose])

  return createPortal(
    <m.div
      className="cv-viewer"
      role="dialog"
      aria-modal="true"
      aria-label={t('cv.title')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="cv-bar">
        <div className="cv-langs" role="group" aria-label={t('cv.language')}>
          {(['fr', 'en'] as const).map((l) => (
            <button key={l} type="button" className={l === cvLang ? 'active' : undefined} aria-pressed={l === cvLang} onClick={() => setCvLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="cv-actions">
          <a className="btn btn-primary cv-btn" href={pdf} download>
            <Download size={17} aria-hidden />
            <span>{t('cv.download')}</span>
          </a>
          <a className="btn btn-outline cv-btn cv-open" href={pdf} target="_blank" rel="noopener">
            <ExternalLink size={17} aria-hidden />
            <span>{t('cv.open')}</span>
          </a>
          <button ref={closeRef} type="button" className="icon-btn cv-close" onClick={onClose} aria-label={t('cv.close')}>
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="cv-scroll" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <m.img
          key={image}
          className="cv-paper"
          src={image}
          alt={t('cv.alt')}
          width={1500}
          height={2121}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </m.div>,
    document.body,
  )
}
