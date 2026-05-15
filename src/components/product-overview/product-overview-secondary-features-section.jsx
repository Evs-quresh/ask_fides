import { Calendar, FileText, Mic } from 'lucide-react'

import { ProductOverviewSection } from '@/components/product-overview/product-overview-layout'
import { cn } from '@/lib/utils'
import { productOverviewSecondaryCards } from '@/data/product-overview-content'

const iconMap = {
  Mic,
  FileText,
  Calendar,
}

const glowMap = {
  blue: 'bg-blue-500/12',
  violet: 'bg-violet-500/10',
  emerald: 'bg-emerald-500/10',
}

function SecondaryFeatureCard({ card }) {
  const Icon = iconMap[card.icon]

  return (
    <li className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1220]/90 p-7 shadow-[0_24px_48px_rgba(0,0,0,0.25)] ring-1 ring-white/[0.04] sm:p-8">
      <div
        className={cn(
          'pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl',
          glowMap[card.glow] ?? glowMap.blue,
        )}
        aria-hidden
      />
      {card.badge ? (
        <span className="absolute right-5 top-5 z-10 rounded-md border border-emerald-500/35 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-300">
          {card.badge}
        </span>
      ) : null}

      <div className="relative z-10 flex flex-1 flex-col">
        {Icon ? (
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#020617]/80 text-white">
            <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </span>
        ) : null}
        <h3 className="mt-5 text-lg font-semibold tracking-tight text-white sm:text-xl">{card.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#94a3b8] sm:text-[15px] sm:leading-relaxed">{card.description}</p>
        {card.footer === 'progress' ? (
          <div className="mt-auto pt-8">
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-[#60a5fa] to-[#a855f7]" />
            </div>
          </div>
        ) : (
          <div className="mt-auto" aria-hidden />
        )}
      </div>
    </li>
  )
}

export function ProductOverviewSecondaryFeaturesSection() {
  return (
    <ProductOverviewSection suppressTopBorder aria-labelledby="product-overview-secondary-heading">
      <h2 id="product-overview-secondary-heading" className="sr-only">
        Additional capabilities
      </h2>
      <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {productOverviewSecondaryCards.map((card) => (
          <SecondaryFeatureCard key={card.id} card={card} />
        ))}
      </ul>
    </ProductOverviewSection>
  )
}
