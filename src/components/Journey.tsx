import { useRef } from 'react'
import { m, useScroll, useSpring } from 'motion/react'
import { ArrowRight, Briefcase, GraduationCap } from 'lucide-react'
import { useI18n } from '../i18n/I18n'
import { EDUCATION, EXPERIENCES } from '../data/profile'
import { useGoToSection } from '../hooks/useSectionNav'
import Reveal, { SectionHead } from './Reveal'
import { TechTag } from './TechIcon'

export default function Journey() {
  const { t, tr, lang } = useI18n()
  const goTo = useGoToSection()
  const listRef = useRef<HTMLDivElement>(null)
  // La ligne du temps se remplit au fil du défilement
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section id="parcours" className="section">
      <div className="container">
        <SectionHead kicker={t('journey.kicker')} title={t('journey.title')} />

        <div className="journey-grid">
          <div>
            <Reveal>
              <h3 className="col-title">
                <Briefcase size={18} /> {t('journey.experience')}
              </h3>
            </Reveal>
            <div className="timeline" ref={listRef}>
              <div className="timeline-line" aria-hidden>
                <m.div style={{ scaleY: fill }} />
              </div>
              <ol className="tl-list">
              {EXPERIENCES.map((exp, i) => (
                <Reveal key={exp.company} as="li" delay={i * 0.05} className={`tl-item ${exp.current ? 'current' : ''}`}>
                  <span className="tl-dot" aria-hidden />
                  <article className="card tl-card">
                    <p className="tl-period">{exp.period}</p>
                    <h4 className="tl-role">
                      {tr(exp.role)} · <span className="tl-company">{exp.company}</span>
                    </h4>
                    <ul className="tl-bullets">
                      {exp.bullets.map((b) => (
                        <li key={b.fr}>{tr(b)}</li>
                      ))}
                    </ul>
                    <div className="tags">
                      {exp.tags.map((tag) => (
                        <TechTag key={tag} name={tag} />
                      ))}
                    </div>
                    {exp.current && (
                      <a
                        href="/#projets"
                        className="tl-link"
                        onClick={(e) => {
                          e.preventDefault()
                          goTo('projets')
                        }}
                      >
                        {t('journey.seeProjects')} <ArrowRight size={15} />
                      </a>
                    )}
                  </article>
                </Reveal>
              ))}
              </ol>
            </div>
          </div>

          <div>
            <Reveal>
              <h3 className="col-title">
                <GraduationCap size={18} /> {t('journey.education')}
              </h3>
            </Reveal>
            <ul className="edu-list">
              {EDUCATION.map((ed, i) => (
                <Reveal key={ed.period} as="li" delay={i * 0.07} className="card edu-item">
                  <span className="ico">
                    <GraduationCap size={18} />
                  </span>
                  <div>
                    <p className="tl-period">{ed.period}</p>
                    <h4>{tr(ed.title)}</h4>
                    <p>{ed.school}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2}>
              <div className="lang-cards">
                <span className="lang-card">
                  {lang === 'fr' ? 'Français' : 'French'} <span>· {lang === 'fr' ? 'langue maternelle' : 'native'}</span>
                </span>
                <span className="lang-card">
                  {lang === 'fr' ? 'Anglais' : 'English'} <span>· B2</span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
