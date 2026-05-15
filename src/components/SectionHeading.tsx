interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-[0.2em] uppercase text-amber bg-amber/10 border border-amber/20 mb-5">
        {label}
      </span>
      <h2 className="heading-italic text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-cream/50 font-body font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
