import type { ExperienceEntry } from '../types/content.ts'

export const experience = [
  {
    id: 'alphacode',
    company: 'Alphacode',
    role: 'Programador Web Júnior',
    periodLabel: 'Atual',
    current: true,
    summary:
      'Desenvolvimento e manutenção de aplicações web e mobile, com APIs, integrações, bancos de dados e suporte a sistemas em produção.',
    activities: [
      'Desenvolver e manter aplicações web e mobile.',
      'Implementar APIs, regras de negócio e integrações.',
      'Trabalhar com bancos de dados relacionais e de documentos.',
      'Apoiar a sustentação e a evolução de sistemas em produção.',
      'Colaborar em code review e na organização das entregas.',
    ],
    technologies: ['PHP', 'Angular', 'Node.js', 'Ionic', 'TypeScript', 'MySQL', 'MongoDB'],
    domains: ['Pagamentos', 'Delivery', 'Mensageria'],
  },
] as const satisfies readonly ExperienceEntry[]
