import { m } from 'motion/react'
import { Blocks, Braces, Database, ServerCog, BrainCircuit, Boxes, HeartHandshake } from 'lucide-react'
import { useI18n } from '../i18n/I18n'
import { SKILLS, SOFT_EN } from '../data/profile'
import Reveal, { SectionHead } from './Reveal'
import TechIcon from './TechIcon'

// Une icône par groupe de SKILLS, dans le même ordre
const ICONS = [Blocks, Braces, Database, ServerCog, BrainCircuit, Boxes, HeartHandshake]

export default function Skills() {
  const { t, tr, lang } = useI18n()

  return (
    <section id="competences" className="section">
      <div className="container">
        <SectionHead kicker={t('skills.kicker')} title={t('skills.title')} sub={t('skills.subtitle')} />
        <div className="skills-grid">
          {SKILLS.map((group, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal key={group.title.fr} delay={(i % 3) * 0.07} className={`card skill-card ${group.wide ? 'wide' : ''}`}>
                <div className="skill-head">
                  <span className="ico">
                    <Icon size={18} />
                  </span>
                  <h3>{tr(group.title)}</h3>
                </div>
                <div className="skill-items">
                  {group.items.map((item, j) => (
                    <m.span
                      key={item}
                      className="skill-chip"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + j * 0.03, duration: 0.35 }}
                    >
                      <TechIcon name={item} size={17} />
                      {lang === 'en' ? (SOFT_EN[item] ?? item) : item}
                    </m.span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
