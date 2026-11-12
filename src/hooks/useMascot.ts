import { useCallback, useEffect, useState } from 'react'

const KEY = 'mascot'
const EVENT = 'mascot-change'

function read(): boolean {
  if (typeof window === 'undefined') return true
  try {
    return localStorage.getItem(KEY) !== 'off'
  } catch {
    return true
  }
}

/** Préférence d'affichage du compagnon, synchronisée entre composants */
export function useMascotEnabled() {
  const [enabled, setEnabled] = useState(read)

  useEffect(() => {
    const sync = () => setEnabled(read())
    window.addEventListener(EVENT, sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener(EVENT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const set = useCallback((value: boolean) => {
    try {
      if (value) localStorage.removeItem(KEY)
      else localStorage.setItem(KEY, 'off')
    } catch {
      /* stockage indisponible : le choix vaut pour la session */
    }
    setEnabled(value)
    window.dispatchEvent(new Event(EVENT))
  }, [])

  return [enabled, set] as const
}
