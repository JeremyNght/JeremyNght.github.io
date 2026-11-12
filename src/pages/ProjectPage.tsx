import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { m } from 'motion/react'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, FileText, Info, ShieldCheck } from 'lucide-react'
import { useI18n } from '../i18n/I18n'
import { PROJECTS, projectNumber } from '../data/projects'
import BrowserDemo from '../components/BrowserDemo'
import Reveal from '../components/Reveal'
import { TechTag } from '../components/TechIcon'
import NotFound from './NotFound'

const EASE = [0.22, 1, 0.36, 1] as const

export default function ProjectPage() {
  const { slug } = useParams()
  const { t, tr } = useI18n()
  const index = PROJECTS.findIndex((p) => p.slug === slug)
  const p = PROJECTS[index]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (!p) return
    document.title = `${tr(p.title)} · Jérémy Nouhaillaguet`
    document.querySelector('meta[name="description"]')?.setAttribute('content', tr(p.summary))
  }, [p, tr])

  if (!p) return <NotFound />

  const next = PROJECTS[(index + 1) % PROJECTS.length]
  const num = projectNumber(p)
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  })

  return (
    <article className="p-page">
      <header className="container p-hero">
        <m.div {...fade(0)}>
          <Link to="/" state={{ scrollTo: 'projets' }} className="back-link">
            <ArrowLeft size={16} /> {t('p.back')}
          </Link>
        </m.div>
        <m.p className="p-eyebrow" {...fade(0.05)}>
          <span className="project-num">
            {p.personal ? t('p.personal') : t('p.project')} {num}
          </span>
          <span className="sep" style={{ width: 18, height: 1, background: 'var(--border-strong)' }} />
          <span>{tr(p.kind)}</span>
        </m.p>
        <m.h1 className="p-title" {...fade(0.1)}>
          {tr(p.title)}
        </m.h1>
        <m.p className="p-tagline" {...fade(0.18)}>
          {tr(p.tagline)}
        </m.p>

        <m.dl className="p-facts" {...fade(0.26)}>
          <div>
            <dt>{t('p.company')}</dt>
            <dd>{tr(p.company)}</dd>
          </div>
          <div>
            <dt>{t('p.type')}</dt>
            <dd>{tr(p.kind)}</dd>
          </div>
          <div>
            <dt>{t('p.status')}</dt>
            <dd>
              <span className="pulse" aria-hidden /> {tr(p.status)}
            </dd>
          </div>
        </m.dl>
        <m.div className="tags p-tags" {...fade(0.3)}>
          {p.tags.map((tag) => (
            <TechTag key={tag} name={tag} />
          ))}
        </m.div>

        {p.personal && (
          <m.div className="p-live" {...fade(0.3)}>
            <div className="p-live-actions">
              {p.repo && (
                <a className="btn btn-primary btn-lg" href={p.repo} target="_blank" rel="noopener noreferrer" aria-label={t('p.codeLabel')}>
                  {t('p.code')} <Code2 size={16} aria-hidden />
                </a>
              )}
              <a className="btn btn-outline btn-lg" href={`/dossiers/${p.slug}.pdf`} target="_blank" rel="noopener" aria-label={t('p.dossierLabel')}>
                {t('p.dossier')} <FileText size={16} aria-hidden />
              </a>
            </div>
          </m.div>
        )}

        <m.ul className="p-impact" {...fade(0.32)} aria-label="Impact">
          {p.impact.map((m) => (
            <li key={m.label.fr}>
              <span className="p-impact-value">{tr(m.value)}</span>
              <span className="p-impact-label">{tr(m.label)}</span>
            </li>
          ))}
        </m.ul>
      </header>

      <div className="container">
        {p.shots.length > 0 ? (
          <m.section {...fade(0.34)} aria-labelledby="demo-title">
            <div className="p-demo-head">
              <h2 id="demo-title">{t('p.demo')}</h2>
              <p>{t('p.demoHint')}</p>
            </div>
            <BrowserDemo project={p} />
          </m.section>
        ) : (
          p.flow && (
            <m.section {...fade(0.34)} aria-labelledby="flow-title">
              <div className="p-demo-head">
                <h2 id="flow-title">{t('p.flow')}</h2>
              </div>
              <p className="flow-note">
                <Info size={18} /> {t('p.noShots')}
              </p>
              <ol className="flow">
                {p.flow.map((s, i) => (
                  <Reveal key={s.fr} as="li" delay={i * 0.12} className="card flow-step">
                    <span className="n">{i + 1}</span>
                    <p>{tr(s)}</p>
                  </Reveal>
                ))}
              </ol>
            </m.section>
          )
        )}

        <div className="p-body">
          <div>
            <Reveal className="p-block">
              <h3>{t('p.need')}</h3>
              <p className="p-purpose">{tr(p.purpose)}</p>
            </Reveal>
            <div className="p-block">
              <Reveal>
                <h3>{t('p.features')}</h3>
              </Reveal>
              <div className="features">
                {p.features.map((f, i) => (
                  <Reveal key={f.title.fr} delay={(i % 2) * 0.07} className="card feature">
                    <span className="feature-n">{String(i + 1).padStart(2, '0')}</span>
                    <h4>{tr(f.title)}</h4>
                    <p>{tr(f.text)}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <aside className="p-aside">
            <Reveal className="card aside-card">
              <h3>{t('p.stack')}</h3>
              <dl className="stack-list">
                {p.stack.map((s) => (
                  <div key={s.label.fr}>
                    <dt>{tr(s.label)}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            {p.security.length > 0 && (
              <Reveal delay={0.06} className="card aside-card">
                <h3>{t('p.security')}</h3>
                <ul className="check-list">
                  {p.security.map((s) => (
                    <li key={s.fr}>
                      <ShieldCheck size={16} /> {tr(s)}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            <Reveal delay={0.12} className="card aside-card">
              <h3>{t('p.role')}</h3>
              <p className="role-text">
                <CheckCircle2 size={16} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 6, color: 'var(--ok)' }} />
                {p.personal ? t('p.roleTextPersonal') : t('p.roleText')}
              </p>
            </Reveal>
          </aside>
        </div>

        <Reveal>
          <Link to={`/projets/${next.slug}`} className="card next-project">
            <small>{t('p.next')}</small>
            <div className="row">
              <h3>{tr(next.title)}</h3>
              <span className="circle">
                <ArrowUpRight size={26} />
              </span>
            </div>
            <p>{tr(next.tagline)}</p>
          </Link>
        </Reveal>
      </div>
    </article>
  )
}
