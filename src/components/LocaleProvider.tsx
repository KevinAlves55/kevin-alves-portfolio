import { useLayoutEffect } from 'react'
import type { ReactNode } from 'react'
import { applyDocumentCopy, copy } from '../i18n/index.ts'
import { LocaleContext } from '../lib/locale-context.ts'

type LocaleProviderProps = {
  children: ReactNode
}

const value = { copy }

export function LocaleProvider({ children }: LocaleProviderProps) {
  useLayoutEffect(() => {
    applyDocumentCopy()
  }, [])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
