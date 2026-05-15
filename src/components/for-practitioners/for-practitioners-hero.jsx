import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ForPractitionersPhoneMockup } from '@/components/for-practitioners/for-practitioners-phone-mockup'
import { marketingInner, marketingOuterX } from '@/components/shared/marketing-layout'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { practitionersHero } from '@/data/for-practitioners-content'

export function ForPractitionersHero() {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-white/[0.06] bg-[#020617]',
        marketingOuterX,
        'pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-16',
      )}
      aria-labelledby="practitioners-hero-heading"
    >
      <div className="pointer-events-none absolute -right-[200px] -top-[150px] h-[600px] w-[600px] rounded-full bg-[rgba(37,99,235,0.06)] blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-[120px] -left-[100px] h-[480px] w-[480px] rounded-full bg-[rgba(59,130,246,0.05)] blur-[45px]" />

      <div
        className={cn(
          marketingInner,
          'relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20',
        )}
      >
        <div className="min-w-0 lg:max-w-[min(100%,36rem)]">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/40 bg-[#1e3a8a]/30 px-3 py-1.5 text-xs font-semibold text-[#93c5fd] sm:text-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#60a5fa]" aria-hidden />
            {practitionersHero.badge}
          </p>

          <h1
            id="practitioners-hero-heading"
            className="mt-6 text-[40px] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-[52px] sm:leading-[1.06] lg:text-[60px] lg:leading-[1.05]"
          >
            {practitionersHero.titleBefore}{' '}
            <span className="text-[#7cb3ff] sm:text-[#93c5fd]">{practitionersHero.titleHighlight}</span>{' '}
            {practitionersHero.titleAfter}
          </h1>

          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-[#94a3b8] sm:text-lg sm:leading-relaxed">
            {practitionersHero.lead}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to={practitionersHero.primaryCta.to}
              className={cn(
                buttonVariants({ variant: 'primary', size: 'compact' }),
                'w-full justify-center gap-2 shadow-[0_12px_32px_rgba(37,99,235,0.35)] sm:w-auto sm:min-w-[180px]',
              )}
            >
              {practitionersHero.primaryCta.label}
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
            <Link
              to={practitionersHero.secondaryCta.to}
              className={cn(
                buttonVariants({ variant: 'outlineLight', size: 'compact' }),
                'w-full justify-center shadow-none sm:w-auto sm:min-w-[140px]',
              )}
            >
              {practitionersHero.secondaryCta.label}
            </Link>
          </div>

          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-8">
            {practitionersHero.trust.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm text-[#b6c4df]">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1d4ed8]/40 text-[#60a5fa]">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ForPractitionersPhoneMockup />
        </div>
      </div>
    </section>
  )
}
