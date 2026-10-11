import type { SocialKind } from '../types/content.ts'

const httpsPattern = /^https:\/\/\S+$/

export function resolveHref(kind: SocialKind, value: string): string | null {
  const trimmed = value.trim()
  if (trimmed.length === 0) return null

  if (kind === 'email') {
    if (trimmed.startsWith('mailto:')) {
      const address = trimmed.slice('mailto:'.length)
      return address.includes('@') ? trimmed : null
    }
    return trimmed.includes('@') && !trimmed.includes(' ') ? `mailto:${trimmed}` : null
  }

  return httpsPattern.test(trimmed) ? trimmed : null
}

export function splitHeadline(text: string, accent: string): { before: string; accent: string; after: string } | null {
  const index = text.indexOf(accent)
  if (accent.length === 0 || index < 0) return null

  return {
    before: text.slice(0, index),
    accent,
    after: text.slice(index + accent.length),
  }
}
