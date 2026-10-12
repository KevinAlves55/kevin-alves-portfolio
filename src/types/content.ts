export type Theme = 'dark' | 'light'

export type ExperienceEntry = {
  id: string
  company: string
  role: string
  periodLabel: string
  current: boolean
  summary: string
  activities: readonly string[]
  technologies: readonly string[]
  domains: readonly string[]
}

export type ProjectStatus = 'publicado' | 'planejado'

export type ProjectImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type Project = {
  id: string
  name: string
  summary: string
  technologies: readonly string[]
  decisions: readonly string[]
  status: ProjectStatus
  repository: string | null
  demo: string | null
  image: ProjectImage | null
}

export type SkillGroup = {
  id: string
  title: string
  description: string
  professional: readonly string[]
  learning: readonly string[]
}

export type SocialKind = 'github' | 'linkedin' | 'email'
