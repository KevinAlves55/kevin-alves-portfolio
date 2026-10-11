import type { Theme } from '../types/content.ts'

export const themeStorageKey = 'theme'

const themeColors: Record<Theme, string> = {
  dark: '#0B0714',
  light: '#FAF9FF',
}

export function readStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(themeStorageKey)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    return 'dark'
  }

  return 'dark'
}

export function applyTheme(theme: Theme): void {
  const root = document.documentElement
  root.dataset.theme = theme
  root.style.colorScheme = theme

  const themeColor = document.querySelector('meta[name="theme-color"]')
  if (themeColor) themeColor.setAttribute('content', themeColors[theme])
}

export function persistTheme(theme: Theme): void {
  try {
    localStorage.setItem(themeStorageKey, theme)
  } catch {
    // Preferência segue só na sessão atual.
  }
}
