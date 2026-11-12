import { m } from 'motion/react'

type Props = { width?: number | string; animate?: boolean; delay?: number; className?: string }

/**
 * Signature utilisée comme logo : l'image sert de masque, la couleur suit le thème.
 * L'animation dévoile le tracé de gauche à droite, comme une écriture.
 */
export default function Signature({ width = 120, animate = true, delay = 0, className = '' }: Props) {
  return (
    <m.span
      className={`signature ${className}`}
      style={{ width }}
      aria-hidden
      initial={animate ? { clipPath: 'inset(0 100% 0 0)' } : false}
      whileInView={animate ? { clipPath: 'inset(0 0% 0 0)' } : undefined}
      viewport={{ once: true }}
      transition={{ duration: 1.6, delay, ease: [0.65, 0, 0.35, 1] }}
    />
  )
}
