import type { ReactNode } from 'react'
import { ui } from '../data/site.ts'
import { cn } from '../lib/cn.ts'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
  download?: boolean
  className?: string
}

const variants: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
  primary: 'bg-accent text-accent-ink hover:bg-accent-hover',
  secondary: 'border border-line-strong bg-surface text-ink hover:border-accent',
}

export function ButtonLink({ href, children, variant = 'primary', external = false, download = false, className }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors',
        variants[variant],
        className,
      )}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      {...(download ? { download: '' } : {})}
    >
      {children}
      {external ? <span className="sr-only"> ({ui.external})</span> : null}
    </a>
  )
}
