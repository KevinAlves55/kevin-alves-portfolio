import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export function useHeroEntrance() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>('[data-hero-reveal]')
      if (items.length === 0) return

      const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
      if (reduce) return

      gsap.from(items, {
        autoAlpha: 0,
        y: 18,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
      })
    },
    { scope: root },
  )

  return root
}
