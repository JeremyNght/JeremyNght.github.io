/** Mini-Jérémy en SVG : les animations (marche, clignement) sont en CSS */
export default function MiniMe() {
  return (
    <svg className="minime-svg" viewBox="0 0 80 104" aria-hidden>
      <ellipse className="mm-shadow" cx="40" cy="100" rx="17" ry="3.5" />

      {/* Jambes */}
      <g className="mm-leg mm-leg-l">
        <rect x="29" y="76" width="9" height="17" rx="4" fill="#2c3147" />
        <ellipse cx="33" cy="94" rx="6" ry="3.4" fill="#1b1e2c" />
      </g>
      <g className="mm-leg mm-leg-r">
        <rect x="42" y="76" width="9" height="17" rx="4" fill="#2c3147" />
        <ellipse cx="47" cy="94" rx="6" ry="3.4" fill="#1b1e2c" />
      </g>

      {/* Bras */}
      <g className="mm-arm mm-arm-l">
        <rect x="17" y="58" width="8" height="18" rx="4" fill="#eef2ec" stroke="#d3d8cf" strokeWidth="1.1" />
        <circle cx="21" cy="77" r="3.6" fill="#ecc0a0" />
      </g>
      <g className="mm-arm mm-arm-r">
        <rect x="55" y="58" width="8" height="18" rx="4" fill="#eef2ec" stroke="#d3d8cf" strokeWidth="1.1" />
        <circle cx="59" cy="77" r="3.6" fill="#ecc0a0" />
      </g>

      {/* T-shirt blanc avec petit logo et chaîne */}
      <path d="M23 64 Q23 55 32 54 L48 54 Q57 55 57 64 L57 80 Q57 83 54 83 L26 83 Q23 83 23 80 Z" fill="#f3f6f1" stroke="#d3d8cf" strokeWidth="1.2" />
      <path d="M33 54 Q40 60 47 54" fill="none" stroke="#d3d8cf" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M34.5 54.5 Q40 62 45.5 54.5" fill="none" stroke="#c9a54a" strokeWidth="0.9" strokeLinecap="round" />
      <circle cx="50" cy="65" r="1.6" fill="#24305e" />

      <g className="mm-head">
        {/* Cou, oreilles et visage */}
        <rect x="35" y="48" width="10" height="8" rx="3" fill="#e3b291" />
        <ellipse cx="19.5" cy="36" rx="3.6" ry="4.4" fill="#e3b291" />
        <ellipse cx="60.5" cy="36" rx="3.6" ry="4.4" fill="#e3b291" />
        <ellipse cx="40" cy="35" rx="20.5" ry="21.5" fill="#f2c9a8" />

        {/* Barbe de quelques jours sur la mâchoire */}
        <path d="M20.5 38 Q21 54 40 56.5 Q59 54 59.5 38 Q57 49 48 51 L32 51 Q23 49 20.5 38 Z" fill="#4a3628" opacity=".28" />
        {/* Bouc et moustache */}
        <path d="M33 50 Q40 58 47 50 Q44 52.5 40 52.5 Q36 52.5 33 50 Z" fill="#3a2a20" />
        <path d="M32.5 45.5 Q36 43 40 44.6 Q44 43 47.5 45.5 Q44 45.4 40 46.6 Q36 45.4 32.5 45.5 Z" fill="#3a2a20" />
        {/* Sourire en coin */}
        <path d="M35.5 48 Q40 50.5 45 47.6" fill="none" stroke="#b8735a" strokeWidth="1.5" strokeLinecap="round" />

        {/* Cheveux courts, coiffés vers le haut */}
        <path
          d="M19.5 33 Q18 18 28 12.5 Q35 8 43 9 Q52 9.5 57 15 Q61.5 20 60.5 33 Q58.5 24 52 21.5 Q47 23.5 41 22 Q34 20.5 28.5 23.5 Q22.5 26 19.5 33 Z"
          fill="#2b201b"
        />
        <path d="M30 13 Q38 6.5 48 9.5 Q42 9.5 37 13 Z" fill="#3a2c25" />
        <path d="M19.5 33 Q19.5 26 22 23 L22.5 34 Z M60.5 33 Q60.5 26 58 23 L57.5 34 Z" fill="#2b201b" opacity=".85" />

        {/* Sourcils épais, yeux, joues */}
        <path d="M27 29.5 Q31.5 26.6 36.5 28.6 M43.5 28.6 Q48.5 26.6 53 29.5" stroke="#2b201b" strokeWidth="2.6" fill="none" strokeLinecap="round" />
        <g className="mm-eyes" fill="#1d1a22">
          <ellipse cx="32" cy="35" rx="2.5" ry="3" />
          <ellipse cx="48" cy="35" rx="2.5" ry="3" />
        </g>
        <circle cx="33" cy="34" r="0.9" fill="#fff" />
        <circle cx="49" cy="34" r="0.9" fill="#fff" />
        <ellipse cx="26" cy="41" rx="3.2" ry="2" fill="#f09a8a" opacity=".4" />
        <ellipse cx="54" cy="41" rx="3.2" ry="2" fill="#f09a8a" opacity=".4" />
      </g>
    </svg>
  )
}
