import { useContext } from 'react'
import type { LocaleContextValue } from '../lib/locale-context.ts'
import { LocaleContext } from '../lib/locale-context.ts'

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale precisa estar dentro de LocaleProvider.')
  }

  return context
}
