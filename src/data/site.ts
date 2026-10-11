import type { NavItem, SocialKind } from '../types/content.ts'

/**
 * Dados pessoais e links.
 * Deixe a string vazia até existir uma URL ou e-mail real.
 * Só entram na interface links https válidos e e-mails com @.
 */
export const links: Record<SocialKind, string> = {
  github: '',
  linkedin: '',
  email: '',
}

export const site = {
  name: 'Kevin Alves',
  givenName: 'Kevin',
  familyName: 'Alves',
  greeting: 'Olá, sou',
  role: 'Desenvolvedor Full Stack Pleno',
  location: 'Itapevi, SP - Brasil',
  locale: 'pt-BR',
  title: 'Kevin Alves — Desenvolvedor Full Stack Pleno',
  description:
    'Portfólio de Kevin Alves, desenvolvedor Full Stack Pleno. Aplicações web e mobile, APIs, integrações, microsserviços e evolução de sistemas em produção.',
  url: 'https://kevinalves55.github.io/kevin-alves-portfolio/',
  headline: 'Transformo necessidades de negócio em soluções de software.',
  lede: '4 anos construindo aplicações web e mobile, APIs e microsserviços em produção. Especializado em arquitetura de software, integrações complexas e automação de processos com IA.',
  cvFile: '',
} as const

export const navigation = [
  { id: 'inicio', href: '#inicio', label: 'Início' },
  { id: 'sobre', href: '#sobre', label: 'Sobre' },
  { id: 'experiencia', href: '#experiencia', label: 'Experiência' },
  { id: 'projetos', href: '#projetos', label: 'Projetos' },
  { id: 'contato', href: '#contato', label: 'Contato' },
] as const satisfies readonly NavItem[]

export const callsToAction = {
  projects: { href: '#projetos', label: 'Ver projetos' },
  contact: { href: '#contato', label: 'Entrar em contato' },
  cv: 'Baixar CV',
  github: 'GitHub',
  linkedin: 'LinkedIn',
} as const

export const about = {
  index: '01',
  title: 'Sobre',
  paragraphs: [
    'Trabalho como Programador Web Júnior na Alphacode. O foco está em aplicações web e mobile que já rodam em produção: evolução de funcionalidades, manutenção e suporte para o sistema continuar operando.',
    'Nesse contexto, desenvolvo e sustento APIs, regras de negócio e integrações com serviços de pagamento, delivery e mensageria. Também participo de code review e ajudo a organizar as entregas do time.',
    'Sigo estudando arquitetura, qualidade de software e inteligência artificial aplicada ao desenvolvimento. Na seção de competências, isso aparece separado do que já uso no trabalho.',
  ],
  focusTitle: 'No que atuo',
  focus: [
    {
      title: 'Full stack',
      detail: 'Aplicações web e mobile, da interface à API e ao banco.',
    },
    {
      title: 'Integrações',
      detail: 'Pagamento, delivery, mensageria e outros serviços externos.',
    },
    {
      title: 'Produção',
      detail: 'Sustentação, correção e evolução de sistemas em uso.',
    },
    {
      title: 'Colaboração',
      detail: 'Code review e apoio à organização das entregas.',
    },
  ],
} as const

export const experienceSection = {
  index: '02',
  title: 'Experiência',
  description: 'Atuação em andamento na Alphacode.',
} as const

export const skillsSection = {
  index: '03',
  title: 'Competências',
  description:
    'Em uso profissional é o que entra no trabalho atual. Em estudo é interesse ou prática ainda sem entrega publicada.',
  professionalLabel: 'Em uso profissional',
  learningLabel: 'Em estudo',
} as const

export const projectsSection = {
  index: '04',
  title: 'Projetos',
  description:
    'Ainda não há projetos públicos publicados. Os cards abaixo são estudos planejados: uma direção de trabalho, não entregas concluídas.',
  publishedTitle: 'Publicados',
  plannedTitle: 'Estudos planejados',
  plannedLabel: 'Planejado',
  publishedLabel: 'Publicado',
  repositoryLabel: 'Repositório',
  demoLabel: 'Demonstração',
  decisionsLabel: 'Direção técnica',
  publishedDecisionsLabel: 'Decisões técnicas',
} as const

export const contactSection = {
  index: '05',
  title: 'Contato',
  description: 'Para uma conversa sobre código, integrações ou uma oportunidade.',
  missing: 'Não informado',
  channels: [
    { kind: 'github', label: 'GitHub' },
    { kind: 'linkedin', label: 'LinkedIn' },
    { kind: 'email', label: 'E-mail' },
  ] as const satisfies readonly { kind: SocialKind; label: string }[],
} as const

export const ui = {
  skip: 'Ir para o conteúdo',
  menuOpen: 'Abrir menu',
  menuClose: 'Fechar menu',
  menuLabel: 'Menu',
  navLabel: 'Principal',
  themeToLight: 'Ativar tema claro',
  themeToDark: 'Ativar tema escuro',
  languageToEnglish: 'English',
  external: 'abre em nova aba',
  currentRole: 'Atual',
  scrollHint: 'Continuar para a próxima seção',
} as const
