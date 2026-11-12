import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent, type TouchEvent } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, m, useInView } from 'motion/react'
import {
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Lock,
  Play,
  Pause,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
  MousePointer2,
} from 'lucide-react'
import { useI18n } from '../i18n/I18n'
import { DEMO_SIZES, shotSrc, shotSrcSet, type Project } from '../data/projects'

const TOUR_MS = 4500
const EASE = [0.22, 1, 0.36, 1] as const

/** "/admin/rendez-vous (vue Semaine)" -> "/admin/rendez-vous" */
const cleanPath = (p: string) => {
  const base = p.split(' (')[0].split(' — ')[0].trim()
  return base.startsWith('/') ? base : '/404'
}
const shortTitle = (caption: string) => caption.split(/\s?:\s/)[0]

export default function BrowserDemo({ project }: { project: Project }) {
  const { t, tr } = useI18n()
  const shots = project.shots
  const n = shots.length

  const [nav, setNav] = useState({ stack: [0], pos: 0 })
  const current = nav.stack[nav.pos]
  const [reloadKey, setReloadKey] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [lightbox, setLightbox] = useState(false)
  const [zoomed, setZoomed] = useState(false)
  const [typed, setTyped] = useState('')
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const rootRef = useRef<HTMLDivElement>(null)
  const inView = useInView(rootRef, { amount: 0.4 })
  const thumbsRef = useRef<HTMLDivElement>(null)
  const touch = useRef<{ x: number; y: number } | null>(null)

  const shot = shots[current]
  const path = cleanPath(shot.path)
  const host = project.host ?? `${project.slug}.intranet`

  const go = useCallback((i: number) => {
    setNav((s) => {
      if (s.stack[s.pos] === i) return s
      const stack = [...s.stack.slice(0, s.pos + 1), i]
      return { stack, pos: stack.length - 1 }
    })
  }, [])
  const step = useCallback((dir: 1 | -1) => go((current + dir + n) % n), [current, n, go])
  const manual = (fn: () => void) => {
    setPlaying(false)
    fn()
  }

  // Effet de saisie dans la barre d'adresse
  useEffect(() => {
    setTyped('')
    let i = 0
    const id = window.setInterval(() => {
      i += Math.max(1, Math.ceil(path.length / 12))
      setTyped(path.slice(0, i))
      if (i >= path.length) window.clearInterval(id)
    }, 22)
    return () => window.clearInterval(id)
  }, [path, reloadKey])

  // Précharge l'écran suivant
  useEffect(() => {
    const img = new Image()
    img.sizes = DEMO_SIZES
    img.srcset = shotSrcSet(project.slug, (current + 1) % n)
  }, [current, n, project.slug])

  // Visite guidée automatique, en pause hors écran
  useEffect(() => {
    if (!playing || (!inView && !lightbox)) return
    const id = window.setTimeout(() => step(1), TOUR_MS)
    return () => window.clearTimeout(id)
  }, [playing, inView, lightbox, step, current])

  // Garde la miniature active visible (mobile)
  useEffect(() => {
    const el = thumbsRef.current?.children[current] as HTMLElement | undefined
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [current])

  // Clavier dans la visionneuse
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowRight') manual(() => step(1))
      if (e.key === 'ArrowLeft') manual(() => step(-1))
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox, step])

  useEffect(() => setZoomed(false), [current, lightbox])

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      manual(() => step(1))
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      manual(() => step(-1))
    }
  }

  const onTouchStart = (e: TouchEvent) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  const onTouchEnd = (e: TouchEvent) => {
    if (!touch.current) return
    const dx = e.changedTouches[0].clientX - touch.current.x
    const dy = e.changedTouches[0].clientY - touch.current.y
    touch.current = null
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) manual(() => step(dx < 0 ? 1 : -1))
  }

  const tall = shot.h > 860
  const caption = tr(shot)
  const counter = useMemo(() => `${String(current + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`, [current, n])

  return (
    <div className="demo" ref={rootRef}>
      <aside className="card demo-sidebar" aria-label={t('d.pages')}>
        <h4>
          {t('d.pages')} · {n}
        </h4>
        {shots.map((s, i) => (
          <button
            key={i}
            className={`demo-page-btn ${i === current ? 'is-active' : ''}`}
            onClick={() => manual(() => go(i))}
            aria-current={i === current ? 'page' : undefined}
          >
            {i === current && (
              <m.span layoutId={`demo-active-${project.slug}`} className="active-bg" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />
            )}
            <span className="idx">{String(i + 1).padStart(2, '0')}</span>
            <span>
              {shortTitle(tr(s))}
              <span className="path">{cleanPath(s.path)}</span>
            </span>
          </button>
        ))}
      </aside>

      <div>
        <div
          className="browser"
          tabIndex={0}
          onKeyDown={onKeyDown}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${tr(project.title)} · ${t('p.demo')}`}
        >
          <div className="browser-bar">
            <div className="browser-dots" aria-hidden>
              <i />
              <i />
              <i />
            </div>
            <div className="browser-nav">
              <button
                onClick={() => manual(() => setNav((s) => ({ ...s, pos: s.pos - 1 })))}
                disabled={nav.pos === 0}
                aria-label={t('d.back')}
                title={t('d.back')}
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => manual(() => setNav((s) => ({ ...s, pos: s.pos + 1 })))}
                disabled={nav.pos >= nav.stack.length - 1}
                aria-label={t('d.forward')}
                title={t('d.forward')}
              >
                <ArrowRight size={16} />
              </button>
              <button onClick={() => setReloadKey((k) => k + 1)} aria-label={t('d.reload')} title={t('d.reload')}>
                <RotateCw size={15} />
              </button>
            </div>
            <div className="address" aria-live="polite">
              <Lock size={12} aria-hidden />
              <span className="host">{host}</span>
              <span className="pth">{typed}</span>
              {typed.length < path.length && <span className="caret" aria-hidden />}
            </div>
            <div className="browser-tools">
              <button
                className={playing ? 'is-on' : ''}
                onClick={() => setPlaying((p) => !p)}
                aria-pressed={playing}
                title={playing ? t('d.pause') : t('d.play')}
              >
                {playing ? <Pause size={15} /> : <Play size={15} />}
                <span className="label">{playing ? t('d.pause') : t('d.play')}</span>
              </button>
              <button onClick={() => setLightbox(true)} aria-label={t('d.fullscreen')} title={t('d.fullscreen')}>
                <Maximize2 size={15} />
              </button>
            </div>
          </div>

          <m.div
            key={`load-${current}-${reloadKey}`}
            className="load-bar"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 0 }}
            transition={{ scaleX: { duration: 0.5, ease: EASE }, opacity: { delay: 0.45, duration: 0.25 } }}
            aria-hidden
          />

          <div className="viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <AnimatePresence initial={false}>
              <m.div
                key={`${current}-${reloadKey}`}
                className="viewport-scroll"
                initial={{ opacity: 0, scale: 1.015 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                onClick={() => setLightbox(true)}
              >
                <img
                  src={shotSrc(project.slug, current)}
                  srcSet={shotSrcSet(project.slug, current)}
                  sizes={DEMO_SIZES}
                  alt={caption}
                  width={1280}
                  height={shot.h}
                  draggable={false}
                />
              </m.div>
            </AnimatePresence>
            {tall && (
              <span className="scroll-tip">
                <MousePointer2 size={13} /> {t('d.scroll')}
              </span>
            )}
          </div>

          <div className="tour-progress" aria-hidden>
            {playing && (
              <m.div
                key={`tour-${current}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: inView || lightbox ? 1 : 0 }}
                transition={{ duration: TOUR_MS / 1000, ease: 'linear' }}
              />
            )}
          </div>

          <div className="browser-foot">
            <p className="caption" aria-live="polite">
              <span className="count">{counter}</span>
              {caption}
            </p>
            <div className="foot-btns">
              <button className="icon-btn" onClick={() => manual(() => step(-1))} aria-label={t('d.prev')}>
                <ChevronLeft size={18} />
              </button>
              <button className="icon-btn" onClick={() => manual(() => step(1))} aria-label={t('d.next')}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="thumbs" ref={thumbsRef}>
          {shots.map((s, i) => (
            <button
              key={i}
              className={`thumb ${i === current ? 'is-active' : ''}`}
              onClick={() => manual(() => go(i))}
              aria-label={tr(s)}
            >
              <img src={shotSrc(project.slug, i, true)} alt="" loading="lazy" width={640} height={400} />
            </button>
          ))}
        </div>
      </div>

      {mounted &&
        createPortal(
        <AnimatePresence>
          {lightbox && (
            <m.div
              className="lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={caption}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="lightbox-top">
                <span>
                  <span className="mono" style={{ opacity: 0.6, marginRight: 10 }}>
                    {counter}
                  </span>
                  {caption}
                </span>
                <div className="lightbox-nav">
                  <button className="icon-btn" onClick={() => setZoomed((z) => !z)} aria-label="Zoom">
                    {zoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
                  </button>
                  <button className="icon-btn" onClick={() => manual(() => step(-1))} aria-label={t('d.prev')}>
                    <ChevronLeft size={18} />
                  </button>
                  <button className="icon-btn" onClick={() => manual(() => step(1))} aria-label={t('d.next')}>
                    <ChevronRight size={18} />
                  </button>
                  <button className="icon-btn" onClick={() => setLightbox(false)} aria-label={t('d.close')} autoFocus>
                    <X size={18} />
                  </button>
                </div>
              </div>
              <div
                className={`lightbox-stage ${zoomed ? 'zoomed' : ''}`}
                onClick={(e) => e.target === e.currentTarget && setLightbox(false)}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <m.img
                    key={current}
                    src={shotSrc(project.slug, current)}
                    alt={caption}
                    width={1280}
                    height={shot.h}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setZoomed((z) => !z)}
                  />
                </AnimatePresence>
              </div>
            </m.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  )
}
