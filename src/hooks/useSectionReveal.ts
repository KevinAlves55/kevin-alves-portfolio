import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export function useSectionReveal() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
      if (reduce || typeof IntersectionObserver === 'undefined') return

      const scope = root.current
      if (!scope) return

      const items = gsap.utils.toArray<HTMLElement>('[data-reveal]', scope)
      if (items.length === 0) return

      const fromLeft = items.filter((item) => item.dataset.reveal === 'left')
      const fromBelow = items.filter((item) => item.dataset.reveal !== 'left')

      if (fromBelow.length > 0) gsap.set(fromBelow, { autoAlpha: 0, y: 18 })
      if (fromLeft.length > 0) gsap.set(fromLeft, { autoAlpha: 0, x: -32 })

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return
          const timeline = gsap.timeline()
          if (fromBelow.length > 0) {
            timeline.to(fromBelow, {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.08,
              ease: 'power2.out',
            })
          }
          if (fromLeft.length > 0) {
            timeline.to(
              fromLeft,
              {
                autoAlpha: 1,
                x: 0,
                duration: 0.75,
                stagger: 0.12,
                ease: 'power2.out',
              },
              fromBelow.length > 0 ? '-=0.35' : 0,
            )
          }
          observer.disconnect()
        },
        { threshold: 0.15 },
      )

      observer.observe(scope)

      return () => observer.disconnect()
    },
    { scope: root },
  )

  return root
}
