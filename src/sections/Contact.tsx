import { Mail } from 'lucide-react'
import type { ComponentType } from 'react'
import { GithubMark, LinkedinMark } from '../components/BrandMarks.tsx'
import { Container } from '../components/Container.tsx'
import { SectionHeading } from '../components/SectionHeading.tsx'
import { contactSection, links, ui } from '../data/site.ts'
import { resolveHref } from '../lib/links.ts'
import type { SocialKind } from '../types/content.ts'

const icons: Record<SocialKind, ComponentType<{ className?: string }>> = {
  github: GithubMark,
  linkedin: LinkedinMark,
  email: Mail,
}

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="contato-titulo"
          index={contactSection.index}
          title={contactSection.title}
          description={contactSection.description}
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {contactSection.channels.map((channel) => {
            const href = resolveHref(channel.kind, links[channel.kind])
            const Icon = icons[channel.kind]
            const external = channel.kind !== 'email'

            return (
              <li key={channel.kind} className="panel rounded-2xl p-5">
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
                    {channel.kind === 'email' ? href.replace(/^mailto:/, '') : href.replace(/^https:\/\//, '')}
                    {external ? <span className="sr-only"> ({ui.external})</span> : null}
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
