import type { SocialKind } from '../types/content.ts'

/**
 * Dados pessoais e links.
 * Deixe a string vazia até existir uma URL ou e-mail real.
 * Só entram na interface links https válidos e e-mails com @.
 */
export const links: Record<SocialKind, string> = {
  github: 'https://github.com/KevinAlves55',
  linkedin: 'https://www.linkedin.com/in/kevinalvesdasilva/',
  email: 'programador.kevin4773@gmail.com',
}

export const site = {
  name: 'Kevin Alves',
  givenName: 'Kevin',
  familyName: 'Alves',
  url: 'https://kevinalves55.github.io/kevin-alves-portfolio/',
  cvFile: 'cv/kevin-alves-cv.pdf',
} as const

export const sections = [
  { id: 'sobre', href: '#sobre' },
  { id: 'experiencia', href: '#experiencia' },
  { id: 'habilidades', href: '#habilidades' },
  { id: 'projetos', href: '#projetos' },
  { id: 'contato', href: '#contato' },
] as const

export type SectionId = (typeof sections)[number]['id']

export const navigation = ['sobre', 'experiencia', 'projetos', 'habilidades', 'contato'] as const satisfies readonly SectionId[]
