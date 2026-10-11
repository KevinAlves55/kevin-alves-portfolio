import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from '../App.tsx'
import { navigation, ui } from '../data/site.ts'

describe('navegação', () => {
  it('liga o menu às seções da página', () => {
    render(<App />)

    for (const item of navigation) {
      const links = screen.getAllByRole('link', { name: item.label })
      expect(links.length).toBeGreaterThan(0)
      for (const link of links) {
        expect(link).toHaveAttribute('href', item.href)
      }
      expect(document.getElementById(item.id)).not.toBeNull()
    }
  })

  it('abre e fecha o menu mobile pelo teclado', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menu = screen.getByRole('button', { name: ui.menuOpen })
    expect(menu).toHaveAttribute('aria-expanded', 'false')

    await user.click(menu)

    const dialog = screen.getByRole('dialog', { name: ui.menuLabel })
    expect(menu).toHaveAttribute('aria-expanded', 'true')
    expect(within(dialog).getByRole('link', { name: 'Projetos' })).toHaveAttribute('href', '#projetos')

    await user.keyboard('{Escape}')

    expect(menu).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('não publica links sociais nem projetos concluídos sem dados reais', () => {
    render(<App />)

    expect(screen.getAllByText('Não informado')).toHaveLength(3)
    expect(screen.queryByRole('link', { name: /repositório/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Publicados' })).not.toBeInTheDocument()
    expect(screen.getAllByText('Planejado')).toHaveLength(5)
    expect(screen.getByRole('heading', { name: 'Estudos planejados' })).toBeInTheDocument()
  })
})
