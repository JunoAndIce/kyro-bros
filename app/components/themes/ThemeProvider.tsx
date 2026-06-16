'use client'

import { createContext, useContext, useCallback, useEffect, useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
}>({ theme: 'dark', toggleTheme: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}

/* The theme lives outside React — in <html data-theme> + localStorage — so we read it via
   useSyncExternalStore rather than seeding state in an effect (which triggers cascading
   renders). getServerSnapshot returns 'light' so the server and the first client render
   agree; React then re-reads the real theme on the client with no hydration warning. */
const listeners = new Set<() => void>()

function subscribe(callback: () => void) {
  listeners.add(callback)
  return () => {
    listeners.delete(callback)
  }
}

function resolveTheme(): Theme {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getSnapshot(): Theme {
  const current = document.documentElement.getAttribute('data-theme')
  return current === 'light' || current === 'dark' ? current : resolveTheme()
}

function getServerSnapshot(): Theme {
  return 'light'
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  // Keep <html data-theme> in sync with the resolved theme (an external system — the
  // right place for an effect, and no setState here so no cascading renders).
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    const next: Theme =
      document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', next)
    document.documentElement.setAttribute('data-theme', next)
    listeners.forEach((listener) => listener())
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
