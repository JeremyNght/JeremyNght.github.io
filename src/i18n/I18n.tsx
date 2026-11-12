import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { UI, type UIKey } from './ui'

export type Lang = 'fr' | 'en'
export type L = { fr: string; en: string }

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: UIKey) => string
  tr: (value: L) => string
}

const I18nContext = createContext<Ctx | null>(null)

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'fr' || saved === 'en') return saved
  } catch {
    /* stockage indisponible */
  }
  return (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export function I18nProvider({ children, initial }: { children: ReactNode; initial?: Lang }) {
  const [lang, setLangState] = useState<Lang>(() => initial ?? detectLang())

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('lang', l)
    } catch {
      /* stockage indisponible */
    }
  }, [])

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: (key) => UI[key][lang],
      tr: (v) => v[lang],
    }),
    [lang, setLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n doit être utilisé dans I18nProvider')
  return ctx
}
