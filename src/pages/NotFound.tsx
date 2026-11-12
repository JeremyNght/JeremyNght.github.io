import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useI18n } from '../i18n/I18n'
import MiniMe from '../components/MiniMe'

export default function NotFound() {
  const { t } = useI18n()
  return (
    <section className="nf container">
      <div>
        <div className="nf-search" aria-hidden>
          <span className="nf-minime">
            <MiniMe />
          </span>
          <svg className="nf-loupe" viewBox="0 0 40 40">
            <circle cx="16" cy="16" r="10" fill="rgba(160,190,255,.25)" stroke="currentColor" strokeWidth="3.5" />
            <path d="M24 24 L35 35" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>
        <h1>404</h1>
        <h2>{t('nf.title')}</h2>
        <p className="hand nf-hand">{t('nf.mascot')}</p>
        <p>{t('nf.text')}</p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={18} />
          {t('nf.home')}
        </Link>
      </div>
    </section>
  )
}
