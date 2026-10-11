import { Container } from '../components/Container.tsx'
import { ProjectCard } from '../components/ProjectCard.tsx'
import { SectionHeading } from '../components/SectionHeading.tsx'
import { plannedProjects, publishedProjects } from '../data/projects.ts'
import { projectsSection } from '../data/site.ts'

export function Projects() {
  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="projetos-titulo"
          index={projectsSection.index}
          title={projectsSection.title}
          description={projectsSection.description}
        />

        {publishedProjects.length > 0 ? (
          <div className="mt-12">
            <h3 className="font-mono text-xs tracking-[0.18em] text-accent-soft uppercase">{projectsSection.publishedTitle}</h3>
            <ul className="mt-5 grid gap-4 lg:grid-cols-2">
              {publishedProjects.map((project, index) => (
                <li key={project.id}>
                  <ProjectCard project={project} index={index} />
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {plannedProjects.length > 0 ? (
          <div className={publishedProjects.length > 0 ? 'mt-14' : 'mt-12'}>
            <h3 className="font-mono text-xs tracking-[0.18em] text-muted uppercase">{projectsSection.plannedTitle}</h3>
            <ul className="mt-5 grid gap-4 lg:grid-cols-2">
              {plannedProjects.map((project, index) => (
                <li key={project.id}>
                  <ProjectCard project={project} index={publishedProjects.length + index} />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
