import { Check, Shield, X } from 'lucide-react'

import { marketingOuterX, marketingSectionY } from '@/components/shared/marketing-layout'
import { cn } from '@/lib/utils'
import { practitionersComparison } from '@/data/for-practitioners-content'

function Cell({ row, side }) {
  const cell = side === 'legacy' ? row.legacy : row.fides
  if (cell.kind === 'icon') {
    if (cell.value === 'x') {
      return (
        <span className="flex justify-center text-slate-500 sm:justify-start">
          <X className="h-5 w-5" strokeWidth={2} aria-label="Not included" />
        </span>
      )
    }
    if (cell.value === 'check') {
      return (
        <span className="flex justify-center text-[#3b82f6] sm:justify-start">
          <Check className="h-5 w-5" strokeWidth={2.5} aria-label="Included" />
        </span>
      )
    }
    if (cell.value === 'shield') {
      return (
        <span className="flex justify-center text-[#3b82f6] sm:justify-start">
          <Shield className="h-5 w-5" aria-label="Shield guardrails" />
        </span>
      )
    }
  }
  if (cell.kind === 'text') {
    return (
      <span
        className={
          cell.highlight
            ? 'text-center text-base font-semibold text-[#60a5fa] sm:text-left'
            : 'text-center text-base text-slate-400 sm:text-left'
        }
      >
        {cell.value}
      </span>
    )
  }
  return null
}

const fidesColClass =
  'border-l-2 border-[#3b82f6]/35 bg-gradient-to-r from-[#1e3a8a]/35 to-[#1e3a8a]/10 shadow-[inset_6px_0_24px_-8px_rgba(59,130,246,0.25)]'

export function ForPractitionersComparison() {
  const { title, subtitle, columns, rows } = practitionersComparison

  return (
    <section
      className={cn(marketingOuterX, marketingSectionY, 'border-b border-white/[0.06] bg-[#020617]')}
      aria-labelledby="practitioners-comparison-heading"
    >
      <div className="mx-auto w-full max-w-[960px] text-center">
        <h2
          id="practitioners-comparison-heading"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[40px]"
        >
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-[#94a3b8] sm:text-lg">{subtitle}</p>

        <div className="mx-auto mt-12 max-w-[960px] overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0b1220]/90 shadow-[0_24px_48px_rgba(0,0,0,0.25)] ring-1 ring-white/[0.04]">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                {columns.map((col, i) => (
                  <th
                    key={col}
                    scope="col"
                    className={
                      i === 0
                        ? 'px-4 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:px-6'
                        : i === 2
                          ? cn(
                              'px-4 py-4 text-xs font-semibold uppercase tracking-wider text-[#93c5fd] sm:px-6',
                              fidesColClass,
                            )
                          : 'px-4 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:px-6'
                    }
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-white/[0.06] last:border-0">
                  <th scope="row" className="px-4 py-4 text-left font-medium text-slate-200 sm:px-6 sm:py-5">
                    {row.feature}
                  </th>
                  <td className="px-4 py-4 sm:px-6 sm:py-5">
                    <Cell row={row} side="legacy" />
                  </td>
                  <td className={cn('px-4 py-4 sm:px-6 sm:py-5', fidesColClass)}>
                    <Cell row={row} side="fides" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
