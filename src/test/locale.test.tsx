import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from '../App.tsx'
import { pt } from '../i18n/pt.ts'

describe('idioma', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.lang = 'en'
  })

  it('permanece em português, sem alternância para inglês', () => {
    localStorage.setItem('locale', 'en')
    render(<App />)

    expect(document.documentElement.lang).toBe('pt-BR')
    expect(document.title).toBe(pt.site.title)
    expect(screen.queryByRole('button', { name: 'EN' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'PT' })).not.toBeInTheDocument()
    expect(screen.getByText(pt.site.headline)).toBeInTheDocument()
    expect(screen.getByText('Nos sistemas em que atuo')).toBeInTheDocument()
  })
})
