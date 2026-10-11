import { createContext } from 'react'
import type { Messages } from '../i18n/types.ts'
import type { Locale } from '../types/content.ts'

export type LocaleContextValue = {
  locale: Locale
  copy: Messages
  toggleLocale: () => void
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
