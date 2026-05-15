import { Check, LayoutDashboard, Search, Users } from 'lucide-react'

import {
  ProductClientPortalPanel,
  ProductDeadlinesPanel,
  ProductSearchPanel,
} from '@/components/product-overview/product-overview-panels'
import { ProductOverviewSection } from '@/components/product-overview/product-overview-layout'
import { cn } from '@/lib/utils'

const iconMap = {
  Search,
  LayoutDashboard,
  Users,
}

const panelMap = {
  search: ProductSearchPanel,
  deadlines: ProductDeadlinesPanel,
  portal: ProductClientPortalPanel,
}

const accentStyles = {
  blue: {
    icon: 'border-[#3b82f6]/40 bg-[#1e3a8a]/35 text-[#60a5fa]',
    title: 'text-[#60a5fa]',
  },
  purple: {
    icon: 'border-purple-500/40 bg-purple-950/40 text-purple-300',
    title: 'text-purple-300',
  },
  emerald: {
    icon: 'border-emerald-500/40 bg-emerald-950/35 text-emerald-400',
    title: 'text-emerald-400',
  },
}

export function ProductOverviewFeatureSection({ section, index }) {
  const Icon = iconMap[section.icon]
  const Panel = panelMap[section.panel]
  const panelFirst = Boolean(section.panelFirst)
  const accent = accentStyles[section.accent] ?? accentStyles.blue

  const textBlock = (
    <div className="min-w-0 flex-1 lg:max-w-[min(100%,32rem)]">
      {Icon ? (
        <span
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-lg border bg-[#020617]/40',
            accent.icon,
          )}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      ) : null}
      <h2
        id={`product-feature-${section.id}`}
        className={cn(
          'mt-5 text-[32px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[40px] lg:text-[44px] lg:leading-[1.08]',
          accent.title,
        )}
      >
        {section.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
      <p className="mt-5 text-base font-light leading-relaxed text-[#94a3b8] sm:text-lg sm:leading-relaxed">
        {section.body}
      </p>
      {section.bullets?.length ? (
        <ul className="mt-8 flex flex-col gap-3">
          {section.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#e2e8f0] sm:text-base">
              {section.bulletStyle === 'check' ? (
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/15 text-emerald-400"
                  aria-hidden
                >
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
              ) : (
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b82f6]" aria-hidden />
              )}
              {b}
            </li>
          ))}
        </ul>
      ) : null}
      {section.stats?.length === 2 ? (
        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:gap-0">
          <div className="flex-1 sm:pr-10">
            <p className="text-3xl font-bold text-white sm:text-4xl">{section.stats[0].value}</p>
            <p className="mt-1 text-sm text-[#94a3b8]">{section.stats[0].label}</p>
          </div>
          <div className="hidden h-14 w-px shrink-0 bg-white/15 sm:block" aria-hidden />
          <div className="flex-1 sm:pl-10">
            <p className="text-3xl font-bold text-white sm:text-4xl">{section.stats[1].value}</p>
            <p className="mt-1 text-sm text-[#94a3b8]">{section.stats[1].label}</p>
          </div>
        </div>
      ) : section.stats?.length ? (
        <div className="mt-8 flex flex-wrap gap-4">
          {section.stats.map((s) => (
            <div
              key={s.label}
              className="min-w-[140px] flex-1 rounded-xl border border-white/10 bg-black/25 px-5 py-4 sm:flex-initial"
            >
              <p className="text-3xl font-bold text-white">{s.value}</p>
              <p className="mt-1 text-sm text-[#94a3b8]">{s.label}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )

  const panelBlock = (
    <div className="relative min-w-0 flex-1 lg:pt-1">
      <div
        className="pointer-events-none absolute -inset-3 rounded-3xl bg-[radial-gradient(ellipse_at_70%_0%,rgba(59,130,246,0.12),transparent_55%)] blur-2xl sm:-inset-4"
        aria-hidden
      />
      <div className="relative">{Panel ? <Panel /> : null}</div>
    </div>
  )

  return (
    <ProductOverviewSection
      suppressTopBorder={index === 0}
      aria-labelledby={`product-feature-${section.id}`}
    >
      <div
        className={cn(
          'flex flex-col gap-10 sm:gap-12 lg:flex-row lg:items-start lg:gap-16 xl:gap-20',
          panelFirst && 'lg:flex-row-reverse',
        )}
      >
        {textBlock}
        {panelBlock}
      </div>
    </ProductOverviewSection>
  )
}
