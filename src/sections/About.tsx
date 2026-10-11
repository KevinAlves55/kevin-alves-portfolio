import { Container } from '../components/Container.tsx'
import { SectionHeading } from '../components/SectionHeading.tsx'
import { useLocale } from '../hooks/useLocale.ts'

export function About() {
  const { copy } = useLocale()
  const about = copy.about

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="border-t border-line py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-start">
        <div>
          <SectionHeading id="sobre-titulo" index={about.index} title={about.title} />
          <div className="mt-8 max-w-2xl space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-pretty text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <aside className="panel rounded-2xl p-6">
          <h3 className="font-mono text-xs tracking-[0.18em] text-accent-soft uppercase">{about.focusTitle}</h3>
          <ul className="mt-5 divide-y divide-line">
            {about.focus.map((item) => (
              <li key={item.title} className="py-4 first:pt-0 last:pb-0">
                <p className="font-semibold tracking-tight">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </aside>
      </Container>
    </section>
  )
}
