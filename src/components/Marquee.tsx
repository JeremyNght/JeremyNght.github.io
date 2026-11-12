import { MARQUEE } from '../data/profile'
import TechIcon from './TechIcon'

export default function Marquee() {
  // La liste est doublée pour boucler sans saut
  return (
    <div className="marquee" role="marquee" aria-label={MARQUEE.join(', ')}>
      <div className="marquee-track" aria-hidden>
        {[...MARQUEE, ...MARQUEE].map((item, i) => (
          <span key={i} className="marquee-item">
            <TechIcon name={item} size={26} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
