import { Container } from '../components/Container.tsx'
import { SectionHeading } from '../components/SectionHeading.tsx'
import { useLocale } from '../hooks/useLocale.ts'

export function Experience() {
  const { copy } = useLocale()
  const experienceSection = copy.experienceSection

  return (
    <section id="experiencia" aria-labelledby="experiencia-titulo" className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="experiencia-titulo"
          index={experienceSection.index}
          title={experienceSection.title}
          description={experienceSection.description}
        />
        <ol className="mt-12 space-y-6">
          {copy.experience.map((entry) => (
            <li key={entry.id} className="panel rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                {entry.current ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-line bg-raised px-3 py-1 font-mono text-[0.68rem] tracking-[0.14em] text-accent-soft uppercase">
                    <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {entry.periodLabel}
                  </span>
                ) : (
                  <span className="font-mono text-xs text-muted">{entry.periodLabel}</span>
                )}
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{entry.role}</h3>
              <p className="mt-1 text-accent-soft">{entry.company}</p>
              <p className="mt-4 max-w-3xl leading-relaxed text-pretty text-muted">{entry.summary}</p>
              <ul className="mt-6 space-y-2.5">
                {entry.activities.map((activity) => (
                  <li key={activity} className="flex gap-3 text-sm leading-relaxed text-ink">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">{experienceSection.technologies}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {entry.technologies.map((technology) => (
                    <li key={technology} className="rounded-md border border-line bg-canvas px-2.5 py-1 font-mono text-xs text-muted">
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-5 text-sm text-muted">
                <span className="text-ink">{experienceSection.domains}: </span>
                {entry.domains.join(', ')}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
