import { useEffect, useState } from 'react'
import { ArrowUp, Smile } from 'lucide-react'
import { useMascotEnabled } from '../hooks/useMascot'
import { useI18n } from '../i18n/I18n'
import Signature from './Signature'

export default function Footer() {
  const { t } = useI18n()
  const [mascotOn, setMascot] = useMascotEnabled()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const toTop = () =>
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <Signature width={96} animate={false} />
          <span>© {new Date().getFullYear()} Jérémy Nouhaillaguet · {t('footer.made')}</span>
        </div>
        <div className="footer-links">
          {mounted && !mascotOn && (
            <button className="to-top" onClick={() => setMascot(true)}>
              <Smile size={15} />
              {t('m.show')}
            </button>
          )}
          <button className="to-top" onClick={toTop}>
            <ArrowUp size={15} />
            {t('footer.top')}
          </button>
        </div>
      </div>
    </footer>
  )
}
