import type { ReactNode } from 'react'
import { useLocale } from '../hooks/useLocale.ts'
import { cn } from '../lib/cn.ts'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  shape?: 'pill' | 'soft'
  external?: boolean
  download?: boolean
  className?: string
}

const variants: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
  primary: 'bg-accent text-white hover:bg-accent-hover',
  secondary: 'border border-line-strong bg-surface text-ink hover:border-accent hover:bg-raised',
}

const shapes: Record<NonNullable<ButtonLinkProps['shape']>, string> = {
  pill: 'min-h-11 rounded-full px-5',
  soft: 'min-h-13 rounded-[10px] px-6',
}

export function ButtonLink({ href, children, variant = 'primary', shape = 'pill', external = false, download = false, className }: ButtonLinkProps) {
  const { copy } = useLocale()

  return (
    <a
      href={href}
      className={cn(
        'interactive-control inline-flex cursor-pointer items-center justify-center gap-2 text-sm font-semibold',
        shapes[shape],
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
