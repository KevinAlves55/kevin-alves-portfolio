import { pt } from './pt.ts'

export const copy = pt

function setMeta(selector: string, content: string): void {
  const element = document.querySelector(selector)
  if (element) element.setAttribute('content', content)
}

export function applyDocumentCopy(): void {
  document.documentElement.lang = 'pt-BR'
  document.title = copy.site.title

  setMeta('meta[name="description"]', copy.site.description)
  setMeta('meta[property="og:title"]', copy.site.title)
  setMeta('meta[property="og:description"]', copy.site.description)
  setMeta('meta[property="og:locale"]', 'pt_BR')
  setMeta('meta[name="twitter:title"]', copy.site.title)
  setMeta('meta[name="twitter:description"]', copy.site.description)
}
