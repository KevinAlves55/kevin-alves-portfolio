import { Container } from '../components/Container.tsx'
import { SectionHeading } from '../components/SectionHeading.tsx'
import { useLocale } from '../hooks/useLocale.ts'
import { useSectionReveal } from '../hooks/useSectionReveal.ts'

export function Experience() {
  const { copy } = useLocale()
  const experienceSection = copy.experienceSection
  const entries = copy.experience
  const root = useSectionReveal()

  return (
    <section
      id="experiencia"
      ref={root}
      aria-labelledby="experiencia-titulo"
      className="overflow-x-clip border-t border-line pt-10 pb-20 sm:pt-14 sm:pb-28"
    >
      <Container>
        <div data-reveal>
          <SectionHeading id="experiencia-titulo" title={experienceSection.title} description={experienceSection.description} />
        </div>
        <div className="mt-12 flex flex-col gap-5">
          {entries.map((entry) => (
            <article key={entry.id} data-reveal className="panel about-card rounded-2xl px-5 py-5 sm:px-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-tight text-balance sm:text-2xl">{entry.role}</h3>
                    {entry.levelNote ? <p className="mt-1 text-sm text-accent">{entry.levelNote}</p> : null}
                    <p className="mt-2 text-sm text-muted">
                      <span className="text-accent-soft">{entry.company}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{entry.engagement}</span>
                    </p>
                  </div>
                  <p className="w-fit shrink-0 rounded-full border border-line bg-raised px-3 py-1 font-mono text-[0.68rem] tracking-wide text-muted">
                    {entry.periodLabel}
                  </p>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-pretty text-muted">{entry.summary}</p>
                <ul className="mt-4 space-y-2.5">
                  {entry.activities.map((activity) => (
                    <li key={activity} className="flex gap-3 text-sm leading-relaxed text-ink">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
                {entry.technologies.length > 0 ? (
                  <div className="mt-5">
                    <p className="font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">{experienceSection.technologies}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {entry.technologies.map((technology) => (
                        <li key={technology} className="rounded-md border border-line bg-canvas px-2.5 py-1 font-mono text-xs text-muted">
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {entry.domains.length > 0 ? (
                  <p className="mt-4 text-sm text-muted">
                    <span className="text-ink">{experienceSection.domains}: </span>
                    {entry.domains.join(', ')}
                  </p>
                ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
