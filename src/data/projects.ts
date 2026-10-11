import type { Project } from '../types/content.ts'

/**
 * Projetos publicados de verdade entram aqui com status "publicado",
 * repository e demo apenas quando a URL existir.
 * Itens "planejado" são estudos futuros e não devem ser tratados como concluídos.
 */
export const projects: readonly Project[] = [
  {
    id: 'fullstack-react',
    name: 'Aplicação full stack',
    summary:
      'Estudo de uma aplicação web com interface em React e TypeScript, consumindo uma API com regras de negócio separadas do cliente.',
    technologies: ['React', 'TypeScript'],
    decisions: [
      'Separar a interface do contrato da API.',
      'Tipar o fluxo de dados de ponta a ponta.',
    ],
    status: 'planejado',
    repository: null,
    demo: null,
    image: null,
  },
  {
    id: 'api-rest',
    name: 'API REST',
    summary:
      'Estudo de um serviço HTTP em Node.js ou PHP, com contrato explícito, validação de entrada e erros consistentes.',
    technologies: ['Node.js', 'PHP', 'REST'],
    decisions: [
      'Definir recursos, status HTTP e formato de erro antes da implementação.',
      'Validar a entrada na borda do serviço.',
    ],
    status: 'planejado',
    repository: null,
    demo: null,
    image: null,
  },
  {
    id: 'filas',
    name: 'Integração assíncrona',
    summary:
      'Estudo de uma integração com fila, incluindo retentativa e tratamento de falha fora do pedido síncrono.',
    technologies: ['Filas', 'Node.js', 'PHP'],
    decisions: [
      'Isolar o processamento assíncrono do fluxo que o usuário espera na hora.',
      'Registrar a falha e permitir uma nova tentativa.',
    ],
    status: 'planejado',
    repository: null,
    demo: null,
    image: null,
  },
  {
    id: 'testes',
    name: 'Testes e qualidade',
    summary:
      'Estudo de uma suíte automatizada para regras críticas e para um fluxo de integração.',
    technologies: ['Testes automatizados'],
    decisions: [
      'Testar comportamento observável.',
      'Cobrir primeiro o que quebra produção quando falha.',
    ],
    status: 'planejado',
    repository: null,
    demo: null,
    image: null,
  },
  {
    id: 'ia-aplicada',
    name: 'IA aplicada',
    summary:
      'Estudo de um caso de uso real com LLM, com escopo limitado e revisão humana da saída.',
    technologies: ['LLM'],
    decisions: [
      'Restringir o modelo a uma tarefa delimitada.',
      'Validar a saída antes de ela seguir no sistema.',
    ],
    status: 'planejado',
    repository: null,
    demo: null,
    image: null,
  },
]

export const publishedProjects = projects.filter((project) => project.status === 'publicado')

export const plannedProjects = projects.filter((project) => project.status === 'planejado')
