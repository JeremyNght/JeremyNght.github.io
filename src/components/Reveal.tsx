import { m } from 'motion/react'
import type { MouseEventHandler, ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

type Props = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'article'
  onMouseMove?: MouseEventHandler<HTMLElement>
}

/** Apparition douce au défilement, une seule fois */
export default function Reveal({ children, delay = 0, y = 24, className, as = 'div', onMouseMove }: Props) {
  const Comp = m[as]
  return (
    <Comp
      className={className}
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </Comp>
  )
}

export function SectionHead({ kicker, title, sub }: { kicker: string; title: ReactNode; sub?: string }) {
  return (
    <div className="section-head">
      <Reveal>
        <span className="kicker">{kicker}</span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.12}>
          <p className="section-sub">{sub}</p>
        </Reveal>
      )}
    </div>
  )
}
