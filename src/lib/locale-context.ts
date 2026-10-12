import { createContext } from 'react'
import type { Messages } from '../i18n/types.ts'

export type LocaleContextValue = {
  copy: Messages
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
