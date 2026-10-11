import { ArrowUpRight } from 'lucide-react'
import { useLocale } from '../hooks/useLocale.ts'
import { resolveHref } from '../lib/links.ts'
import { cn } from '../lib/cn.ts'
import type { Messages } from '../i18n/types.ts'

type CardProject = Omit<Messages['projects'][number], 'image'> & {
  image: { src: string; alt: string; width: number; height: number } | null
}

type ProjectCardProps = {
  project: CardProject
  index: number
}

function publicSrc(src: string): string {
  if (/^https?:\/\//.test(src)) return src
  const base = import.meta.env.BASE_URL
  return `${base}${src.replace(/^\//, '')}`
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { copy } = useLocale()
  const projectsSection = copy.projectsSection
  const planned = project.status === 'planejado'
  const repository = project.repository ? resolveHref('github', project.repository) : null
  const demo = project.demo ? resolveHref('github', project.demo) : null
  const number = String(index + 1).padStart(2, '0')

  return (
    <article
      className={cn(
        'card-hover panel flex h-full flex-col rounded-2xl p-5 sm:p-6',
        planned ? 'border-dashed' : undefined,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-xs text-accent-soft">{number}</p>
        <p className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
          {planned ? projectsSection.plannedLabel : projectsSection.publishedLabel}
        </p>
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-pretty text-muted">{project.summary}</p>

      {project.image ? (
        <img
          src={publicSrc(project.image.src)}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          loading="lazy"
          decoding="async"
          className="mt-5 aspect-video w-full rounded-xl border border-line object-cover"
        />
      ) : null}

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={copy.ui.technologies}>
        {project.technologies.map((technology) => (
          <li key={technology} className="rounded-md border border-line bg-canvas px-2.5 py-1 font-mono text-xs text-muted">
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <p className="font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
          {planned ? projectsSection.decisionsLabel : projectsSection.publishedDecisionsLabel}
        </p>
        <ul className="mt-3 space-y-2">
          {project.decisions.map((decision) => (
            <li key={decision} className="text-sm leading-relaxed text-ink">
              {decision}
            </li>
          ))}
        </ul>
      </div>

      {repository || demo ? (
        <div className="mt-6 flex flex-wrap gap-4 border-t border-line pt-4">
          {repository ? (
            <a
              href={repository}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent-soft hover:text-accent"
            >
              {projectsSection.repositoryLabel}
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only"> ({copy.ui.external})</span>
            </a>
          ) : null}
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent-soft hover:text-accent"
            >
              {projectsSection.demoLabel}
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only"> ({copy.ui.external})</span>
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}
