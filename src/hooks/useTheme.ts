import { useContext } from 'react'
import type { ThemeContextValue } from '../lib/theme-context.ts'
import { ThemeContext } from '../lib/theme-context.ts'

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme precisa estar dentro de ThemeProvider.')
  }

  return context
}
