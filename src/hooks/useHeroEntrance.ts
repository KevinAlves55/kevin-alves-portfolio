import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export function useHeroEntrance() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
      if (reduce) return

      const scope = root.current
      if (!scope) return

      const glow = scope.querySelector('[data-hero-glow]')
      const badge = scope.querySelector('[data-hero-badge]')
      const items = gsap.utils.toArray<HTMLElement>('[data-hero-reveal]', scope)
      const timeline = gsap.timeline()

      if (glow) {
        timeline.from(glow, {
          autoAlpha: 0,
          duration: 1.15,
          ease: 'power1.out',
        })
      }

      if (badge) {
        timeline.from(
          badge,
          {
            autoAlpha: 0,
            y: -14,
            duration: 0.65,
            ease: 'power2.out',
          },
          glow ? '-=0.28' : 0,
        )
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
          badge || glow ? '-=0.12' : 0,
        )
      }
    },
    { scope: root },
  )

  return root
}
