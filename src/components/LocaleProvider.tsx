import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { applyLocale, messages, persistLocale, readStoredLocale } from '../i18n/index.ts'
import { LocaleContext } from '../lib/locale-context.ts'
import type { Locale } from '../types/content.ts'

type LocaleProviderProps = {
  children: ReactNode
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>(readStoredLocale)
  const copy = messages[locale]

  useLayoutEffect(() => {
    applyLocale(locale)
    persistLocale(locale)
  }, [locale])

  const toggleLocale = useCallback(() => {
    setLocale((current) => (current === 'pt' ? 'en' : 'pt'))
  }, [])

  const value = useMemo(() => ({ locale, copy, toggleLocale }), [locale, copy, toggleLocale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
