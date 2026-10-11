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

      gsap.set(items, { autoAlpha: 0, y: 18 })

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return
          gsap.to(items, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
          })
          observer.disconnect()
        },
        { threshold: 0.2 },
      )

      observer.observe(scope)

      return () => observer.disconnect()
    },
    { scope: root },
  )

  return root
}
