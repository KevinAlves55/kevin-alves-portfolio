import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocale } from '../hooks/useLocale.ts'
import { cn } from '../lib/cn.ts'

export function BackToTop() {
  const { copy } = useLocale()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#inicio"
      aria-label={copy.ui.backToTop}
      aria-hidden={visible ? undefined : true}
      tabIndex={visible ? undefined : -1}
      className={cn(
        'interactive-control fixed right-4 bottom-4 z-30 inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-line bg-canvas/90 text-ink backdrop-blur-md transition-opacity hover:border-line-strong hover:bg-surface sm:right-8 sm:bottom-8',
        visible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <ArrowUp className="size-4" aria-hidden="true" />
    </a>
  )
}
