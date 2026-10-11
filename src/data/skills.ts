import type { SkillGroup } from '../types/content.ts'

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces web do trabalho atual. React segue em estudo.',
    professional: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS'],
    learning: ['React'],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Serviços, APIs e microsserviços na sustentação de sistemas.',
    professional: ['PHP', 'Node.js', 'APIs REST', 'Microsserviços'],
    learning: [],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    description: 'Aplicações com Ionic no trabalho. React Native ainda em estudo.',
    professional: ['Ionic'],
    learning: ['React Native'],
  },
  {
    id: 'dados',
    title: 'Dados',
    description: 'Bancos usados nas aplicações em que atuo.',
    professional: ['MySQL', 'MongoDB'],
    learning: [],
  },
  {
    id: 'integracoes',
    title: 'Integrações',
    description: 'Serviços externos ligados aos produtos em produção.',
    professional: ['Gateways de pagamento', 'Delivery', 'Mensageria', 'Serviços externos'],
    learning: [],
  },
  {
    id: 'engenharia',
    title: 'Engenharia de software',
    description: 'Git e code review já fazem parte da rotina. O restante está em estudo.',
    professional: ['Git', 'Code review'],
    learning: ['Testes automatizados', 'CI/CD', 'Docker', 'Observabilidade', 'Arquitetura'],
  },
  {
    id: 'ia',
    title: 'Inteligência artificial',
    description: 'Ferramentas e conceitos que estou estudando para usar no desenvolvimento.',
    professional: [],
    learning: ['LLMs', 'Ferramentas de IA para desenvolvimento', 'Agentes de IA'],
  },
] as const satisfies readonly SkillGroup[]
