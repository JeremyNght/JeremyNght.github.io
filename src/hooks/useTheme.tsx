import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'
type Ctx = { theme: Theme; toggle: () => void; isAuto: boolean }

const ThemeContext = createContext<Ctx | null>(null)
const media = () =>
  typeof window === 'undefined' ? null : window.matchMedia('(prefers-color-scheme: dark)')

function readSaved(): Theme | null {
  try {
    const v = localStorage.getItem('theme')
    return v === 'light' || v === 'dark' ? v : null
  } catch {
    return null
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // null = suit la préférence du système
  const [saved, setSaved] = useState<Theme | null>(readSaved)
  const [system, setSystem] = useState<Theme>(() => (media()?.matches ? 'dark' : 'light'))
  const theme = saved ?? system

  useEffect(() => {
    const mq = media()
    if (!mq) return
    const onChange = () => setSystem(mq.matches ? 'dark' : 'light')
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    // Revenir à la préférence système efface le choix mémorisé
    const value = next === system ? null : next
    setSaved(value)
    try {
      if (value) localStorage.setItem('theme', value)
      else localStorage.removeItem('theme')
    } catch {
      /* stockage indisponible */
    }
  }, [theme, system])

  const value = useMemo(() => ({ theme, toggle, isAuto: saved === null }), [theme, toggle, saved])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme doit être utilisé dans ThemeProvider')
  return ctx
}
