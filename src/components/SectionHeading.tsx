type SectionHeadingProps = {
  id: string
  index: string
  title: string
  description?: string
}

export function SectionHeading({ id, index, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs tracking-[0.22em] text-accent-soft uppercase">{index}</p>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-pretty text-muted">{description}</p> : null}
    </div>
  )
}
