import { Mail } from 'lucide-react'
import type { ComponentType } from 'react'
import { GithubMark, LinkedinMark } from './BrandMarks.tsx'
import { contactSection, links, site, ui } from '../data/site.ts'
import { resolveHref } from '../lib/links.ts'
import type { SocialKind } from '../types/content.ts'

const icons: Record<SocialKind, ComponentType<{ className?: string }>> = {
  github: GithubMark,
  linkedin: LinkedinMark,
  email: Mail,
}

export function Footer() {
  const year = new Date().getFullYear()
  const available = contactSection.channels.flatMap((channel) => {
    const href = resolveHref(channel.kind, links[channel.kind])
    return href ? [{ ...channel, href }] : []
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
                    aria-label={channel.kind === 'email' ? channel.label : `${channel.label} (${ui.external})`}
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
