import type { ReactNode } from 'react'
import { useLocale } from '../hooks/useLocale.ts'
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
  secondary: 'border border-line-strong bg-surface text-ink hover:border-accent hover:bg-raised',
}

export function ButtonLink({ href, children, variant = 'primary', external = false, download = false, className }: ButtonLinkProps) {
  const { copy } = useLocale()

  return (
    <a
      href={href}
      className={cn(
        'interactive-control inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold',
        variants[variant],
        className,
      )}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      {...(download ? { download: '' } : {})}
    >
      {children}
      {external ? <span className="sr-only"> ({copy.ui.external})</span> : null}
    </a>
  )
}
