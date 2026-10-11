import { describe, expect, it } from 'vitest'
import { resolveHref, splitHeadline } from './links.ts'

describe('resolveHref', () => {
  it('ignora link vazio', () => {
    expect(resolveHref('github', '')).toBeNull()
    expect(resolveHref('github', '   ')).toBeNull()
  })

  it('aceita apenas https para perfis', () => {
    expect(resolveHref('github', 'https://github.com/exemplo')).toBe('https://github.com/exemplo')
    expect(resolveHref('linkedin', 'http://linkedin.com/in/exemplo')).toBeNull()
    expect(resolveHref('github', 'github.com/exemplo')).toBeNull()
  })

  it('monta mailto somente com e-mail válido', () => {
    expect(resolveHref('email', 'kevin@exemplo.dev')).toBe('mailto:kevin@exemplo.dev')
    expect(resolveHref('email', 'mailto:kevin@exemplo.dev')).toBe('mailto:kevin@exemplo.dev')
    expect(resolveHref('email', 'não-é-email')).toBeNull()
  })
})

describe('splitHeadline', () => {
  it('separa a palavra de destaque', () => {
    expect(splitHeadline('soluções que conectam sistemas.', 'conectam')).toEqual({
      before: 'soluções que ',
      accent: 'conectam',
      after: ' sistemas.',
    })
  })

  it('devolve nulo quando a palavra não existe', () => {
    expect(splitHeadline('sem destaque', 'conectam')).toBeNull()
  })
})
