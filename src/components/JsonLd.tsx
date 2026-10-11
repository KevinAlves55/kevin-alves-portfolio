import { links, site } from '../data/site.ts'
import { resolveHref } from '../lib/links.ts'

export function JsonLd() {
  const sameAs = (['github', 'linkedin'] as const).flatMap((kind) => {
    const href = resolveHref(kind, links[kind])
    return href ? [href] : []
  })
  const email = resolveHref('email', links.email)

  const data: {
    '@context': string
    '@type': string
    name: string
    jobTitle: string
    url: string
    description: string
    worksFor: { '@type': string; name: string }
    sameAs?: string[]
    email?: string
  } = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    description: site.description,
    worksFor: {
      '@type': 'Organization',
      name: 'Alphacode',
    },
  }

  if (sameAs.length > 0) data.sameAs = sameAs
  if (email) data.email = email.replace(/^mailto:/, '')

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
