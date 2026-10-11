import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from '../App.tsx'
import { themeStorageKey } from '../lib/theme.ts'
import { ui } from '../data/site.ts'

describe('tema', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.dataset.theme = ''
  })

  it('começa no tema escuro e alterna com persistência', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(document.documentElement.dataset.theme).toBe('dark')

    await user.click(screen.getByRole('button', { name: ui.themeToLight }))

    expect(document.documentElement.dataset.theme).toBe('light')
    expect(localStorage.getItem(themeStorageKey)).toBe('light')
    expect(screen.getByRole('button', { name: ui.themeToDark })).toBeInTheDocument()
  })

  it('restaura a preferência salva', () => {
    localStorage.setItem(themeStorageKey, 'light')
    render(<App />)

    expect(document.documentElement.dataset.theme).toBe('light')
    expect(screen.getByRole('button', { name: ui.themeToDark })).toBeInTheDocument()
  })
})
