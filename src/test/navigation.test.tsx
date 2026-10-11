import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from '../App.tsx'
import { links, navigation, sections } from '../data/site.ts'
import { pt } from '../i18n/pt.ts'

describe('navegação', () => {
  it('liga o menu às seções da página', () => {
    render(<App />)

    for (const item of sections) {
      const linksInNav = screen.getAllByRole('link', { name: pt.nav[item.id] })
      expect(linksInNav.length).toBeGreaterThan(0)
      for (const link of linksInNav) {
        expect(link).toHaveAttribute('href', item.href)
      }
      expect(document.getElementById(item.id)).not.toBeNull()
    }

    const [desktop] = screen.getAllByRole('navigation', { name: pt.ui.navLabel })
    expect(within(desktop).getAllByRole('link').map((link) => link.textContent)).toEqual(
      navigation.map((id) => pt.nav[id]),
    )
  })

  it('abre e fecha o menu mobile pelo teclado', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menu = screen.getByRole('button', { name: pt.ui.menuOpen })
    expect(menu).toHaveAttribute('aria-expanded', 'false')

    await user.click(menu)

    const dialog = screen.getByRole('dialog', { name: pt.ui.menuLabel })
    expect(menu).toHaveAttribute('aria-expanded', 'true')
    expect(within(dialog).getByRole('link', { name: 'Projetos' })).toHaveAttribute('href', '#projetos')

    await user.keyboard('{Escape}')

    expect(menu).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('publica GitHub, LinkedIn e o e-mail', () => {
    render(<App />)

    expect(screen.queryByText('Não informado')).not.toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: links.email }).length).toBeGreaterThan(0)
    expect(screen.queryByRole('link', { name: /repositório/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Publicados' })).not.toBeInTheDocument()
    expect(screen.getAllByText('Planejado')).toHaveLength(5)
    expect(screen.getByRole('heading', { name: 'Estudos planejados' })).toBeInTheDocument()

    for (const link of screen.getAllByRole('link', { name: /GitHub/i })) {
      expect(link).toHaveAttribute('href', links.github)
    }
    for (const link of screen.getAllByRole('link', { name: /LinkedIn/i })) {
      expect(link).toHaveAttribute('href', links.linkedin)
    }
  })

  it('oferece o currículo para download', () => {
    render(<App />)

    const cv = screen.getByRole('link', { name: /baixar cv/i })
    expect(cv).toHaveAttribute('href', `${import.meta.env.BASE_URL}cv/kevin-alves-cv.pdf`)
    expect(cv).toHaveAttribute('download')
  })
})
