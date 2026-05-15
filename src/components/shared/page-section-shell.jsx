import { cn } from '@/lib/utils'

/** Matches home: `#071a34` sections vs deeper `#0a192f` bands. */
const toneClasses = {
  navy: 'border-b border-[rgba(27,56,104,0.5)] bg-[#071a34]',
  deep: 'border-b border-[rgba(30,58,138,0.3)] bg-[#0a192f]',
}

export function SectionShell({ children, className, tone = 'navy', ...props }) {
  return (
    <section
      className={cn(
        'px-4 py-16 text-[#e6f1ff] sm:px-6 sm:py-20 lg:px-8 lg:py-24',
        toneClasses[tone] ?? toneClasses.navy,
        className,
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-[1280px]">{children}</div>
    </section>
  )
}
