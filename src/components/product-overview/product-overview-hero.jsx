import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { askFidesAssets } from '@/components/ask-fides/constants'
import { poInner, poOuterX } from '@/components/product-overview/product-overview-layout'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { productOverviewHero } from '@/data/product-overview-content'

export function ProductOverviewHero() {
  const { titlePrefix, titleGradient, subtitle, lead, cta } = productOverviewHero

  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-white/[0.06] bg-[#020617]',
        poOuterX,
        'pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-16',
      )}
      aria-labelledby="product-overview-hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_20%,rgba(37,99,235,0.18),transparent)]" />
      <div
        className={cn(
          poInner,
          'relative grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-20',
        )}
      >
        <div className="min-w-0 lg:max-w-[min(100%,36rem)]">
          <h1
            id="product-overview-hero-heading"
            className="text-[40px] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-[52px] sm:leading-[1.06] lg:text-[60px] lg:leading-[1.05]"
          >
            <span className="block">{titlePrefix}</span>
            <span className="mt-1 block bg-gradient-to-r from-[#60a5fa] to-[#a855f7] bg-clip-text text-transparent sm:mt-2">
              {titleGradient}
            </span>
          </h1>

          <p className="mt-6 text-xl font-semibold leading-snug text-white sm:text-2xl lg:text-3xl">{subtitle}</p>

          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-[#94a3b8] sm:text-lg sm:leading-relaxed">
            {lead}
          </p>

          <Link
            to={cta.to}
            className={cn(
              buttonVariants({ variant: 'primary', size: 'compact' }),
              'mt-10 inline-flex min-w-[180px] justify-center gap-2 shadow-[0_12px_32px_rgba(37,99,235,0.35)] sm:text-base',
            )}
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="relative min-w-0 lg:pt-2">
          <div className="pointer-events-none absolute -inset-6 rounded-[40%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),transparent_68%)] blur-2xl lg:-inset-8" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.4)] ring-1 ring-white/5">
            <img
              src={askFidesAssets.dashboardInterface}
              alt=""
              className="h-auto w-full object-cover"
              width={1200}
              height={800}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
