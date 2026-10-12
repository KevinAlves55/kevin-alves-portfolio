import { Mail } from 'lucide-react'
import type { ComponentType } from 'react'
import { GithubMark, LinkedinMark } from '../components/BrandMarks.tsx'
import { Container } from '../components/Container.tsx'
import { SectionHeading } from '../components/SectionHeading.tsx'
import { links } from '../data/site.ts'
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

export function Contact() {
  const { copy } = useLocale()
  const contactSection = copy.contact

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="border-t border-line pt-10 pb-20 sm:pt-14 sm:pb-28">
      <Container>
        <SectionHeading
          id="contato-titulo"
          title={contactSection.title}
          description={contactSection.description}
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {contactSection.channels.map((channel) => {
            const kind = asSocialKind(channel.kind)
            if (!kind) return null
            const href = resolveHref(kind, links[kind])
            const Icon = icons[kind]
            const external = kind !== 'email'

            return (
              <li key={kind} className="panel rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl border border-line bg-raised text-accent-soft">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold tracking-tight">{channel.label}</h3>
                </div>
                {href ? (
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                    className="mt-4 inline-flex min-h-11 items-center text-sm font-medium break-all text-accent-soft hover:text-accent"
                  >
                    {kind === 'email' ? href.replace(/^mailto:/, '') : href.replace(/^https:\/\//, '')}
                    {external ? <span className="sr-only"> ({copy.ui.external})</span> : null}
                  </a>
                ) : (
                  <p className="mt-4 text-sm text-muted">{contactSection.missing}</p>
                )}
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
