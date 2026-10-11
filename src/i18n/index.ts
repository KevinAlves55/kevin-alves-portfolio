import type { Locale } from '../types/content.ts'
import { en } from './en.ts'
import { pt } from './pt.ts'
import type { Messages } from './types.ts'

export const messages: Record<Locale, Messages> = {
  pt,
  en,
}

export const localeStorageKey = 'locale'

const htmlLang: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en',
}

export function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(localeStorageKey)
    if (stored === 'pt' || stored === 'en') return stored
  } catch {
    return 'pt'
  }

  return 'pt'
}

function setMeta(selector: string, content: string): void {
  const element = document.querySelector(selector)
  if (element) element.setAttribute('content', content)
}

export function applyLocale(locale: Locale): void {
  const copy = messages[locale]
  document.documentElement.lang = htmlLang[locale]
  document.title = copy.site.title

  setMeta('meta[name="description"]', copy.site.description)
  setMeta('meta[property="og:title"]', copy.site.title)
  setMeta('meta[property="og:description"]', copy.site.description)
  setMeta('meta[property="og:locale"]', locale === 'en' ? 'en_US' : 'pt_BR')
  setMeta('meta[name="twitter:title"]', copy.site.title)
  setMeta('meta[name="twitter:description"]', copy.site.description)
}

export function persistLocale(locale: Locale): void {
  try {
    localStorage.setItem(localeStorageKey, locale)
  } catch {
    // Preferência segue só na sessão atual.
  }
}
