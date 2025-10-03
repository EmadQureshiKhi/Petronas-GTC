import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 md:py-24 lg:py-32", className)}
        {...props}
      >
        {children}
      </section>
    )
  }
)
Section.displayName = "Section"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  className?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  className
}) => {
  return (
    <div className={cn("text-center mb-16", className)}>
      {badge && (
        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-4 bg-muted/50">
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

export { Section, SectionHeader }