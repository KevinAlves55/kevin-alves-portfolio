import { ChevronDown, Download, Sparkle } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink.tsx'
import { Container } from '../components/Container.tsx'
import { site } from '../data/site.ts'
import { useHeroEntrance } from '../hooks/useHeroEntrance.ts'
import { useLocale } from '../hooks/useLocale.ts'

function cvHref(file: string): string | null {
  const trimmed = file.trim().replace(/^\//, '')
  if (trimmed.length === 0) return null
  return `${import.meta.env.BASE_URL}${trimmed}`
}

export function Hero() {
  const { copy } = useLocale()
  const cv = cvHref(site.cvFile)
  const root = useHeroEntrance()

  return (
    <section id="inicio" ref={root} className="relative overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        data-hero-glow
        className="pointer-events-none absolute top-16 left-1/2 size-144 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_68%)]"
        aria-hidden="true"
      />
      <Container className="relative flex min-h-svh flex-col items-center justify-center pt-28 pb-16 text-center">
        <div className="flex w-full max-w-4xl flex-col items-center">
          <p data-hero-reveal className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs text-muted sm:text-sm">
            <span className="status-dot shrink-0" aria-hidden="true" />
            <span>{copy.site.role}</span>
          </p>
          <p data-hero-reveal className="mt-8 font-mono text-sm tracking-[0.16em] text-accent-soft sm:text-base">{copy.site.greeting}</p>
          <h1 data-hero-reveal className="mt-0 font-serif text-[45px] leading-[1.05] font-medium tracking-tight text-balance sm:text-[69px] lg:text-[93px]">
            {site.givenName} <span className="text-accent">{site.familyName}</span>
          </h1>
          <p data-hero-reveal className="mt-6 max-w-3xl font-serif text-[21px] leading-snug font-normal text-pretty sm:text-[27px]">{copy.site.headline}</p>
          <p data-hero-reveal className="mt-5 max-w-2xl text-[13px] leading-relaxed text-pretty text-muted sm:text-[15px]">{copy.site.lede}</p>
          <div data-hero-reveal className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <ButtonLink href="#projetos" shape="soft" className="w-full sm:w-auto">
              <Sparkle className="size-4" aria-hidden="true" />
              {copy.cta.projects}
            </ButtonLink>
            {cv ? (
              <ButtonLink href={cv} variant="secondary" shape="soft" download className="w-full sm:w-auto">
                <Download className="size-4" aria-hidden="true" />
                {copy.cta.cv}
              </ButtonLink>
            ) : (
              <a
                aria-disabled="true"
                className="interactive-control inline-flex min-h-13 w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border border-line-strong bg-surface px-6 text-sm font-semibold text-ink hover:border-accent hover:bg-raised sm:w-auto"
              >
                <Download className="size-4" aria-hidden="true" />
                {copy.cta.cv}
              </a>
            )}
          </div>
        </div>
        <a
          href="#sobre"
          data-hero-reveal
          className="mt-14 inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-muted transition-colors hover:text-ink"
        >
          <ChevronDown className="size-5" aria-hidden="true" />
          <span className="sr-only">{copy.ui.scrollHint}</span>
        </a>
      </Container>
    </section>
  )
}
