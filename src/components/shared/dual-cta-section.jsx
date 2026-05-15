import { Link } from 'react-router-dom'

import { marketingOuterX } from '@/components/shared/marketing-layout'
import { cn } from '@/lib/utils'

const primaryClassName =
  'inline-flex min-h-[48px] w-full max-w-[280px] items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.45)] transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1930] sm:w-auto'

const secondaryClassName =
  'inline-flex min-h-[48px] w-full max-w-[280px] items-center justify-center rounded-md border border-slate-600 bg-transparent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1930] sm:w-auto'

/**
 * Shared marketing CTA — same layout and styling on Home, Product, Practitioners, and policy pages.
 */
export function DualCtaSection({
  title = "Certainty isn't optional.\nIt's everything.",
  description = 'Join the 4,000+ legal professionals who have already upgraded their workflow with Ask Fides.',
  primaryLabel = 'Schedule a Demo',
  secondaryLabel = 'Contact Sales',
  primaryTo = '/contact',
  secondaryTo = '/contact',
  onPrimaryClick,
  onSecondaryClick,
  showDescription = true,
  showSecondary = true,
  footnote,
}) {
  const titleLines = title.split('\n')

  return (
    <section
      className={cn(
        'border-b border-slate-800/80 bg-[#0B1930] py-20 text-center sm:py-24',
        marketingOuterX,
      )}
      aria-labelledby="dual-cta-heading"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center">
        <h2
          id="dual-cta-heading"
          className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl md:leading-[1.1]"
        >
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>

        {showDescription ? (
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
            {description}
          </p>
        ) : null}

        <div className="mt-10 flex w-full max-w-lg flex-col flex-wrap items-stretch justify-center gap-4 sm:max-w-none sm:flex-row sm:items-center">
          {onPrimaryClick ? (
            <button type="button" onClick={onPrimaryClick} className={primaryClassName}>
              {primaryLabel}
            </button>
          ) : (
            <Link to={primaryTo} className={primaryClassName}>
              {primaryLabel}
            </Link>
          )}
          {showSecondary ? (
            onSecondaryClick ? (
              <button type="button" onClick={onSecondaryClick} className={secondaryClassName}>
                {secondaryLabel}
              </button>
            ) : (
              <Link to={secondaryTo} className={secondaryClassName}>
                {secondaryLabel}
              </Link>
            )
          ) : null}
        </div>

        {footnote ? (
          <p className="mx-auto mt-8 max-w-xl text-pretty text-sm leading-relaxed text-slate-400">{footnote}</p>
        ) : null}
      </div>
    </section>
  )
}
