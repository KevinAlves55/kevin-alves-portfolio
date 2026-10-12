import { Mail, MapPin } from 'lucide-react'
import { Container } from '../components/Container.tsx'
import { SectionHeading } from '../components/SectionHeading.tsx'
import { links } from '../data/site.ts'
import { useLocale } from '../hooks/useLocale.ts'
import { useSectionReveal } from '../hooks/useSectionReveal.ts'
import { resolveHref } from '../lib/links.ts'

function photoSrc(): string {
  return `${import.meta.env.BASE_URL}about/kevin-alves.jpg`
}

export function About() {
  const { copy } = useLocale()
  const about = copy.about
  const root = useSectionReveal()
  const email = resolveHref('email', links.email)
  const [phraseLead, phraseRest] = about.phrase.split('-')

  return (
    <section id="sobre" ref={root} aria-labelledby="sobre-titulo" className="border-t border-line pt-10 pb-20 sm:pt-14 sm:pb-28">
      <Container>
        <div data-reveal>
          <SectionHeading id="sobre-titulo" title={about.title} />
        </div>
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[24rem_minmax(0,1fr)] lg:gap-x-14 lg:gap-y-4">
          <img
            data-reveal
            src={photoSrc()}
            alt={about.photoAlt}
            width={722}
            height={1599}
            className="order-1 mx-auto aspect-5/7 w-full max-w-sm rounded-2xl border border-line object-cover lg:col-start-1 lg:row-start-1 lg:mx-0"
          />
          <div data-reveal className="panel about-card order-2 mx-auto flex w-full max-w-sm flex-col justify-center space-y-3 rounded-2xl px-5 py-4 lg:col-start-1 lg:row-start-2 lg:mx-0 lg:h-full lg:self-stretch">
            <p className="flex items-center gap-2.5 text-sm text-muted">
              <MapPin className="size-4 shrink-0 text-accent-soft" aria-hidden="true" />
              <span>{copy.site.location}</span>
            </p>
            {email ? (
              <a href={email} className="flex items-center gap-2.5 text-sm break-all text-ink hover:text-accent">
                <Mail className="size-4 shrink-0 text-accent-soft" aria-hidden="true" />
                <span>{links.email}</span>
              </a>
            ) : null}
          </div>
          <div className="order-3 min-w-0 lg:col-start-2 lg:row-start-1">
            <p data-reveal className="font-serif text-[2rem] leading-snug font-medium text-balance">
              {phraseLead} <span className="text-accent">{phraseRest}</span>
            </p>

            <div data-reveal className="mt-6 space-y-4">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-pretty text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <ul data-reveal className="order-4 grid grid-cols-3 grid-rows-[auto_auto_auto] gap-x-3 gap-y-1 lg:col-start-2 lg:row-start-2 lg:h-full lg:self-stretch">
            {about.facts.map((fact) => (
              <li
                key={fact.value}
                className="panel about-card row-span-3 grid grid-rows-subgrid items-center rounded-2xl px-2.5 text-center sm:px-3"
              >
                <p className="pt-[calc(0.625rem+1.5px)] font-serif text-2xl leading-none font-medium tracking-tight text-accent">{fact.value}</p>
                <p className="text-xs leading-tight font-medium text-balance text-ink">{fact.label}</p>
                <p className="pb-[calc(0.625rem+1.5px)] text-[0.6875rem] leading-snug text-balance text-muted">{fact.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
