import { Menu, Moon, Sun, X } from 'lucide-react'
import { GithubMark, LinkedinMark } from './BrandMarks.tsx'
import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { links, navigation, sections, site } from '../data/site.ts'
import { useActiveSection } from '../hooks/useActiveSection.ts'
import { useDialog } from '../hooks/useDialog.ts'
import { useLocale } from '../hooks/useLocale.ts'
import { useTheme } from '../hooks/useTheme.ts'
import { resolveHref } from '../lib/links.ts'
import { cn } from '../lib/cn.ts'

const accessClass =
  'inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-line text-ink transition-colors hover:border-line-strong hover:bg-surface'

function AccessLink({ href, label, external, children }: { href: string | null; label: string; external: string; children: ReactNode }) {
  if (!href) {
    return (
      <span role="img" aria-label={label} className={accessClass}>
        {children}
      </span>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className={accessClass}>
      {children}
      <span className="sr-only"> ({external})</span>
    </a>
  )
}

const sectionById = new Map(sections.map((item) => [item.id, item]))
const navItems = navigation.map((id) => sectionById.get(id)).filter((item) => item !== undefined)
const sectionIds = ['inicio', ...sections.map((item) => item.id)]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)
  const { theme, toggleTheme } = useTheme()
  const { locale, copy, toggleLocale } = useLocale()
  const close = useCallback(() => setOpen(false), [])
  const dialogRef = useDialog(open, close)
  const github = resolveHref('github', links.github)
  const linkedin = resolveHref('linkedin', links.linkedin)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors',
        scrolled || open ? 'border-line bg-canvas/90 backdrop-blur-md' : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#inicio" aria-label={site.name} className="flex min-h-11 min-w-0 items-center gap-2.5 font-semibold tracking-tight">
          <span
            className="grid size-8 shrink-0 place-items-center rounded-lg border border-line bg-surface font-mono text-[0.68rem] text-accent-soft"
            aria-hidden="true"
          >
            KA
          </span>
          <span className="font-mono text-sm tracking-tight">{'<KA/>'}</span>
        </a>

        <nav aria-label={copy.ui.navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={cn(
                    'inline-flex min-h-11 items-center rounded-full px-3 text-sm transition-colors',
                    active === item.id ? 'text-ink' : 'text-muted hover:text-ink',
                  )}
                >
                  {copy.nav[item.id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            className={cn(accessClass, 'font-sans text-xs font-semibold tracking-wide')}
            aria-label={locale === 'pt' ? copy.ui.languageToEnglish : copy.ui.languageToPortuguese}
          >
            {locale === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? copy.ui.themeToLight : copy.ui.themeToDark}
            className={accessClass}
          >
            {theme === 'dark' ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
          </button>
          <AccessLink href={github} label={copy.cta.github} external={copy.ui.external}>
            <GithubMark className="size-5" />
          </AccessLink>
          <AccessLink href={linkedin} label={copy.cta.linkedin} external={copy.ui.external}>
            <LinkedinMark className="size-5" />
          </AccessLink>
          <button
            type="button"
            className={cn(accessClass, 'lg:hidden')}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            <span className="sr-only">{open ? copy.ui.menuClose : copy.ui.menuOpen}</span>
          </button>
        </div>
      </div>
    </header>

      {open ? (
        <div
          id="menu-mobile"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={copy.ui.menuLabel}
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-line bg-canvas px-5 py-6 lg:hidden"
        >
          <nav aria-label={copy.ui.navLabel}>
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={close}
                    aria-current={active === item.id ? 'true' : undefined}
                    className="flex min-h-12 items-center border-b border-line text-lg"
                  >
                    {copy.nav[item.id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  )
}
