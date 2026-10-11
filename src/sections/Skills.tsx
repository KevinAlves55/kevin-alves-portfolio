import { AppWindow, Bot, Cable, Database, GitPullRequest, Server, Smartphone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container } from '../components/Container.tsx'
import { SectionHeading } from '../components/SectionHeading.tsx'
import { useLocale } from '../hooks/useLocale.ts'

const icons: Record<string, LucideIcon> = {
  frontend: AppWindow,
  backend: Server,
  mobile: Smartphone,
  dados: Database,
  integracoes: Cable,
  engenharia: GitPullRequest,
  ia: Bot,
}

export function Skills() {
  const { copy } = useLocale()
  const skillsSection = copy.skillsSection

  return (
    <section id="habilidades" aria-labelledby="habilidades-titulo" className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="habilidades-titulo"
          index={skillsSection.index}
          title={skillsSection.title}
          description={skillsSection.description}
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {copy.skills.map((group) => {
            const Icon = icons[group.id]
            if (!Icon) return null
            return (
              <li key={group.id} className="panel rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-raised text-accent-soft">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{group.description}</p>
                  </div>
                </div>
                {group.professional.length > 0 ? (
                  <div className="mt-5">
                    <p className="font-mono text-[0.68rem] tracking-[0.14em] text-accent-soft uppercase">
                      {skillsSection.professionalLabel}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {group.professional.map((skill) => (
                        <li key={skill} className="rounded-md border border-line bg-canvas px-2.5 py-1 text-sm text-ink">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {group.learning.length > 0 ? (
                  <div className="mt-5">
                    <p className="font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
                      {skillsSection.learningLabel}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {group.learning.map((skill) => (
                        <li key={skill} className="rounded-md border border-dashed border-line px-2.5 py-1 text-sm text-muted">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
