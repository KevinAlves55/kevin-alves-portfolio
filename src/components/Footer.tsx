import { Mail } from 'lucide-react'
import type { ComponentType } from 'react'
import { GithubMark, LinkedinMark } from './BrandMarks.tsx'
import { links, site } from '../data/site.ts'
import { useLocale } from '../hooks/useLocale.ts'
import { resolveHref } from '../lib/links.ts'
import type { SocialKind } from '../types/content.ts'

const icons: Record<SocialKind, ComponentType<{ className?: string }>> = {
  github: GithubMark,
  linkedin: LinkedinMark,
  email: Mail,
}

function asSocialKind(value: string): SocialKind | null {
  if (value === 'github' || value === 'linkedin' || value === 'email') return value
  return null
}

export function Footer() {
  const { copy } = useLocale()
  const year = new Date().getFullYear()
  const available = copy.contact.channels.flatMap((channel) => {
    const kind = asSocialKind(channel.kind)
    if (!kind) return []
    const href = resolveHref(kind, links[kind])
    return href ? [{ ...channel, kind, href }] : []
  })

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-muted">
          <span className="text-ink">{site.name}</span>
          <span aria-hidden="true"> · </span>
          <time dateTime={String(year)}>{year}</time>
        </p>
        {available.length > 0 ? (
          <ul className="flex items-center gap-2">
            {available.map((channel) => {
              const Icon = icons[channel.kind]
              return (
                <li key={channel.kind}>
                  <a
                    href={channel.href}
                    {...(channel.kind === 'email' ? {} : { target: '_blank', rel: 'noreferrer noopener' })}
                    aria-label={channel.kind === 'email' ? channel.label : `${channel.label} (${copy.ui.external})`}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>
    </footer>
  )
}
