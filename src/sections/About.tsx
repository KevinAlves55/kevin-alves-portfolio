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
          <div data-reveal className="panel order-2 mx-auto w-full max-w-sm space-y-3 rounded-2xl px-5 py-4 lg:col-start-1 lg:row-start-2 lg:mx-0">
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
            <p data-reveal className="font-serif text-[1.75rem] leading-snug font-medium text-balance">
              {about.phrase}
            </p>
            <div data-reveal className="mt-6 space-y-4">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-pretty text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <ul data-reveal className="order-4 grid grid-cols-3 gap-3 lg:col-start-2 lg:row-start-2 lg:h-full lg:grid-rows-1 lg:self-stretch">
            {about.facts.map((fact) => (
              <li key={fact.value} className="panel flex flex-col items-center justify-center rounded-2xl px-3 py-3 text-center sm:px-4 lg:h-full">
                <p className="font-serif text-3xl leading-none font-medium tracking-tight text-accent">{fact.value}</p>
                <p className="mt-1.5 text-sm leading-tight text-muted">{fact.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
