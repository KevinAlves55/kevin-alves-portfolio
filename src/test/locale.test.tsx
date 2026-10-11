import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from '../App.tsx'
import { en } from '../i18n/en.ts'
import { localeStorageKey } from '../i18n/index.ts'
import { pt } from '../i18n/pt.ts'

describe('idioma', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.lang = 'pt-BR'
  })

  it('abre em português e alterna para inglês com persistência', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(document.documentElement.lang).toBe('pt-BR')
    expect(screen.getByRole('button', { name: pt.ui.languageToEnglish })).toHaveTextContent('EN')
    expect(screen.getByRole('link', { name: /baixar cv/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: pt.ui.languageToEnglish }))

    expect(document.documentElement.lang).toBe('en')
    expect(document.title).toBe(en.site.title)
    expect(localStorage.getItem(localeStorageKey)).toBe('en')
    expect(screen.getByRole('button', { name: en.ui.languageToPortuguese })).toHaveTextContent('PT')
    expect(screen.getByRole('link', { name: /download cv/i })).toHaveAttribute('download')
    expect(screen.getByText(en.site.headline)).toBeInTheDocument()
    expect(screen.queryByText(pt.site.headline)).not.toBeInTheDocument()
  })

  it('restaura o inglês salvo', () => {
    localStorage.setItem(localeStorageKey, 'en')
    render(<App />)

    expect(document.documentElement.lang).toBe('en')
    expect(screen.getByRole('button', { name: en.ui.languageToPortuguese })).toHaveTextContent('PT')
    expect(screen.getByText(en.site.role)).toBeInTheDocument()
  })
})
