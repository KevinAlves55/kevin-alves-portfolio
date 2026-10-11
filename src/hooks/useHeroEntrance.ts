import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export function useHeroEntrance() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
      if (reduce) return

      const glow = root.current?.querySelector('[data-hero-glow]') ?? null
      const items = gsap.utils.toArray<HTMLElement>('[data-hero-reveal]')
      const timeline = gsap.timeline()

      if (glow) {
        timeline.from(glow, {
          autoAlpha: 0,
          duration: 0.9,
          ease: 'power2.out',
        })
      }

      if (items.length > 0) {
        timeline.from(
          items,
          {
            autoAlpha: 0,
            y: 18,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
          },
          glow ? '-=0.2' : 0,
        )
      }
    },
    { scope: root },
  )

  return root
}
