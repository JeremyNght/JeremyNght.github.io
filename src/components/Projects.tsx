import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, m, type Variants } from 'motion/react'
import { ArrowRight, ArrowUpRight, MousePointerClick, Truck, FileLock2, ArrowLeftRight } from 'lucide-react'
import { useI18n } from '../i18n/I18n'
import { MORE_PROJECTS, SPOTLIGHT, projectNumber, shotSrc, type Project } from '../data/projects'
import Reveal, { SectionHead } from './Reveal'
import { TechTag } from './TechIcon'

// Icônes des projets présentés sans captures
const OTHER_ICONS: Record<string, typeof Truck> = {
  'planning-transport': Truck,
  'portail-comptes': FileLock2,
  'connecteur-erp': ArrowLeftRight,
}

// Trois captures empilées qui s'écartent au survol
const POS = [
  { rest: { x: '0%', y: '30%', rotate: 0 }, hover: { x: '-4%', y: '36%', rotate: -3 } },
  { rest: { x: '14%', y: '15%', rotate: 0 }, hover: { x: '14%', y: '14%', rotate: 0 } },
  { rest: { x: '28%', y: '0%', rotate: 0 }, hover: { x: '33%', y: '-6%', rotate: 3 } },
]
const shotVariants = (i: number): Variants => ({
  rest: { ...POS[i].rest, transition: { type: 'spring', stiffness: 200, damping: 24 } },
  hover: { ...POS[i].hover, transition: { type: 'spring', stiffness: 200, damping: 20 } },
})

/** Grande carte : projets mis en avant */
function ProjectCard({ p }: { p: Project }) {
  const { t, tr } = useI18n()
  const num = projectNumber(p)
  const covers = p.cover.slice(0, 3)

  return (
    <Reveal>
      <m.article className="card project-card" initial="rest" animate="rest" whileHover="hover">
        <div className="project-info">
          <div className="project-top">
            <span className="project-num">{num}</span>
            <span className="sep" />
            <span>{tr(p.company)}</span>
          </div>
          <h3 className="project-title">
            <Link to={`/projets/${p.slug}`} className="stretched">
              {tr(p.title)}
            </Link>
          </h3>
          <p className="project-tagline">{tr(p.tagline)}</p>
          <p className="project-summary">{tr(p.summary)}</p>
          <p className="project-impact">
            <strong>{tr(p.impact[0].value)}</strong> {tr(p.impact[0].label)}
          </p>
          <div className="tags">
            {p.tags.map((tag) => (
              <TechTag key={tag} name={tag} />
            ))}
          </div>
          <div className="project-cta">
            <span className="open-link">
              <span className="circle">
                <ArrowUpRight size={18} />
              </span>
              {t('projects.open')}
            </span>
            <span className="screens-count">
              <MousePointerClick size={15} /> {p.shots.length} {t('projects.screens')}
            </span>
          </div>
        </div>

        <div className="stack-visual" aria-hidden>
          {covers
            .map((shotIndex, i) => (
              <m.div
                key={shotIndex}
                className="stack-shot"
                variants={shotVariants(i)}
                style={{ zIndex: 3 - i }}
              >
                <div className="bar">
                  <i />
                  <i />
                  <i />
                </div>
                <img src={shotSrc(p.slug, shotIndex, true)} alt="" loading="lazy" width={640} height={400} />
              </m.div>
            ))
            .reverse()}
        </div>
      </m.article>
    </Reveal>
  )
}

/** Carte compacte : miniature (ou icône pour les projets sans captures), titre, accroche, 3 technos */
function MiniCard({ p }: { p: Project }) {
  const { t, tr } = useI18n()
  const Icon = OTHER_ICONS[p.slug] ?? ArrowRight
  const cover = p.cover[0] ?? 0

  return (
    <Link to={`/projets/${p.slug}`} className="card mini-card">
      <div className="mini-visual" aria-hidden>
        {p.shots.length > 0 ? (
          <img src={shotSrc(p.slug, cover, true)} alt="" loading="lazy" width={640} height={400} />
        ) : (
          <span className="mini-ico">
            <Icon size={22} />
          </span>
        )}
      </div>
      <div className="mini-body">
        <div className="mini-top">
          <span className={p.personal ? 'mini-badge perso' : 'mini-badge'}>
            {p.personal ? t('projects.badgePersonal') : t('projects.badgePro')}
          </span>
          <span className="mini-kind">{tr(p.kind)}</span>
        </div>
        <h4>{tr(p.title)}</h4>
        <p>{tr(p.tagline)}</p>
        <div className="tags">
          {p.tags.slice(0, 3).map((tag) => (
            <TechTag key={tag} name={tag} />
          ))}
        </div>
      </div>
      <ArrowUpRight size={18} className="mini-arrow" aria-hidden />
    </Link>
  )
}

type Filter = 'all' | 'pro' | 'personal'
const FILTERS: Filter[] = ['all', 'pro', 'personal']
const matches = (p: Project, f: Filter) => f === 'all' || (f === 'personal') === !!p.personal

export default function Projects() {
  const { t } = useI18n()
  const [filter, setFilter] = useState<Filter>('all')
  const shown = MORE_PROJECTS.filter((p) => matches(p, filter))

  return (
    <section id="projets" className="section">
      <div className="container">
        <SectionHead kicker={t('projects.kicker')} title={t('projects.title')} sub={t('projects.subtitle')} />

        <div className="project-list">
          {SPOTLIGHT.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>

        <div className="more-projects">
          <Reveal className="others-head">
            <h3>{t('projects.moreTitle')}</h3>
            <div className="filter-tabs" role="tablist" aria-label={t('projects.filterLabel')}>
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={filter === f}
                  className={filter === f ? 'active' : undefined}
                  onClick={() => setFilter(f)}
                >
                  {t(`projects.filter.${f}`)}
                  <span className="count">{MORE_PROJECTS.filter((p) => matches(p, f)).length}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <m.div className="mini-grid" layout>
            <AnimatePresence mode="popLayout" initial={false}>
              {shown.map((p) => (
                <m.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <MiniCard p={p} />
                </m.div>
              ))}
            </AnimatePresence>
          </m.div>
        </div>
      </div>
    </section>
  )
}
