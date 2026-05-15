import { Building2, FolderOpen, Gavel, Upload } from 'lucide-react'

import { marketingInner, marketingOuterX, marketingSectionY } from '@/components/shared/marketing-layout'
import { cn } from '@/lib/utils'
import { practitionersAudience } from '@/data/for-practitioners-content'

const iconMap = {
  Upload,
  FolderOpen,
  Building2,
  Gavel,
}

export function ForPractitionersAudience() {
  const { overline, title, cards } = practitionersAudience

  return (
    <section
      className={cn(marketingOuterX, marketingSectionY, 'border-b border-white/[0.06] bg-[#020617]')}
      aria-labelledby="practitioners-audience-heading"
    >
      <div className={cn(marketingInner, 'max-w-[1120px] text-center')}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#60a5fa] sm:text-sm">{overline}</p>
        <h2
          id="practitioners-audience-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[40px]"
        >
          {title}
        </h2>
      </div>

      <ul className={cn(marketingInner, 'mt-12 grid max-w-[1120px] gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8')}>
        {cards.map(({ icon, title: cardTitle, body }) => {
          const Icon = iconMap[icon]
          return (
            <li
              key={cardTitle}
              className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#0b1220]/80 p-6 text-left shadow-[0_16px_40px_rgba(0,0,0,0.2)] ring-1 ring-white/[0.04]"
            >
              {Icon ? (
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-800/90 text-slate-300">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
              ) : null}
              <h3 className="mt-4 text-lg font-semibold text-white">{cardTitle}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#94a3b8]">{body}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
