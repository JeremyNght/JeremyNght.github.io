import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'motion/react'
import { MapPin, GraduationCap, Languages, BriefcaseBusiness } from 'lucide-react'
import { useI18n } from '../i18n/I18n'
import { PROCESS, STATS } from '../data/profile'
import Reveal, { SectionHead } from './Reveal'

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])
  return <span ref={ref}>{n}</span>
}

export default function About() {
  const { t, tr } = useI18n()

  const infos = [
    { icon: MapPin, label: t('about.info.location'), value: t('hero.location') },
    { icon: GraduationCap, label: t('about.info.education'), value: t('about.info.educationValue') },
    { icon: Languages, label: t('about.info.languages'), value: t('about.info.languagesValue') },
    { icon: BriefcaseBusiness, label: t('about.info.search'), value: t('about.info.searchValue') },
  ]

  return (
    <section id="a-propos" className="section">
      <div className="container">
        <SectionHead kicker={t('about.kicker')} title={t('about.title')} />

        <div className="about-grid">
          <div className="about-text">
            <Reveal>
              <p>{t('about.p1')}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <p>{t('about.p2')}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>{t('about.p3')}</p>
            </Reveal>
            <ul className="info-list">
              {infos.map((info, i) => (
                <Reveal key={info.label} as="li" delay={0.1 + i * 0.05} className="info-item">
                  <info.icon size={18} className="ico" />
                  <div>
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="stats-col">
            <Reveal>
              <p className="hand stats-label">{t('about.stats')}</p>
            </Reveal>
            <ul className="stats">
              {STATS.map((s, i) => (
                <Reveal key={s.label} as="li" delay={i * 0.08} className="stat">
                  <span className="stat-value">
                    <Counter value={s.value} />
                    {s.suffix}
                  </span>
                  <span className="stat-label">{t(s.label)}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <div className="process">
          <Reveal>
            <h3 className="process-title">{t('about.process')}</h3>
          </Reveal>
          <ol className="process-steps">
            {PROCESS.map((step, i) => (
              <Reveal key={step.title.fr} as="li" delay={i * 0.08} className="process-step">
                <span className="dot" aria-hidden>
                  {i + 1}
                </span>
                <h4>{tr(step.title)}</h4>
                <p>{tr(step.text)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
