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
    <section id="sobre" ref={root} aria-labelledby="sobre-titulo" className="border-t border-line py-20 sm:py-28">
      <Container>
        <div data-reveal>
          <SectionHeading id="sobre-titulo" index={about.index} title={about.title} />
        </div>
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(16rem,0.78fr)_minmax(0,1.22fr)] lg:gap-14">
          <div data-reveal className="mx-auto flex w-full max-w-sm flex-col gap-4 lg:mx-0">
            <img
              src={photoSrc()}
              alt={about.photoAlt}
              width={722}
              height={1599}
              className="aspect-5/7 w-full rounded-2xl border border-line object-cover"
            />
            <div className="panel space-y-3 rounded-2xl px-5 py-4">
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
          </div>
          <div>
            <p data-reveal className="max-w-xl font-serif text-3xl leading-snug font-medium text-balance sm:text-4xl">
              {about.phrase}
            </p>
            <div data-reveal className="mt-6 max-w-2xl space-y-4">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-pretty text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul data-reveal className="mt-8 grid gap-3 sm:grid-cols-3">
              {about.facts.map((fact) => (
                <li key={fact.value} className="panel rounded-2xl px-4 py-5">
                  <p className="font-serif text-3xl font-medium tracking-tight text-accent">{fact.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{fact.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
