import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  inverted?: boolean
  className?: string
}

export function SectionHeading({ eyebrow, title, description, inverted, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <p className="text-sm font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2
        className={cn(
          'mt-3 font-display text-4xl font-extrabold uppercase italic leading-none tracking-tight text-balance md:text-6xl',
          inverted ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed text-pretty',
            inverted ? 'text-primary-foreground/80' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
