import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'
import {
  productClientPortalPanel,
  productDeadlinesPanel,
  productSearchPanel,
} from '@/data/product-overview-content'

const statusToneClasses = {
  amber: 'border-amber-500/25 bg-amber-500/15 text-amber-200',
  emerald: 'border-emerald-500/25 bg-emerald-500/15 text-emerald-200',
}

export function ProductSearchPanel() {
  const { urlBar, query, rows } = productSearchPanel
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1220] shadow-[0_24px_48px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.04]">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/90" />
        </span>
        <div className="ml-2 flex-1 rounded-md bg-black/30 px-3 py-1 text-center text-[11px] text-slate-400">{urlBar}</div>
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-300">
            <Search className="h-4 w-4 shrink-0 text-slate-500" aria-hidden />
            {query}
          </div>
          <button
            type="button"
            className="rounded-lg bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]"
          >
            Search
          </button>
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_auto] gap-2 border-b border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            <span>CASE NUMBER</span>
            <span>SUMMARY</span>
            <span className="text-right">ACTION</span>
          </div>
          {rows.map((row) => (
            <div
              key={row.caseNo}
              className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_auto] gap-2 border-b border-white/5 px-3 py-3 text-xs last:border-0 sm:text-sm"
            >
              <span className="font-mono text-slate-400">{row.caseNo}</span>
              <span className="text-slate-300">{row.summary}</span>
              <span className="text-right text-[10px] font-semibold uppercase tracking-wide text-[#60a5fa] sm:text-xs">
                {row.action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProductDeadlinesPanel() {
  const { title, items } = productDeadlinesPanel
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1220] p-4 shadow-[0_24px_48px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.04] sm:p-5">
      <div className="border-b border-white/10 pb-3">
        <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
      </div>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-3 rounded-lg border border-white/10 bg-black/20 p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <p className="font-medium text-slate-100">{item.title}</p>
              <p className="text-sm text-slate-400">{item.subtitle}</p>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
              <span
                className={cn(
                  'rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                  statusToneClasses[item.statusTone] ?? statusToneClasses.amber,
                )}
              >
                {item.status}
              </span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-slate-400">{item.date}</span>
                <Link
                  to="/contact"
                  className="text-[11px] font-semibold uppercase tracking-wide text-[#60a5fa] transition-colors hover:text-[#93c5fd]"
                >
                  View Details
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ProductClientPortalPanel() {
  const { title, columns, rows } = productClientPortalPanel
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1220] shadow-[0_24px_48px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.04]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <span className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              {columns.map((c) => (
                <th key={c} className="px-3 py-2 sm:px-4">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="border-b border-white/5 last:border-0">
                <td className="px-3 py-3 font-medium text-slate-200 sm:px-4">{row.name}</td>
                <td className="px-3 py-3 sm:px-4">
                  <span
                    className={cn(
                      'rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                      statusToneClasses[row.statusTone] ?? statusToneClasses.emerald,
                    )}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-3 py-3 text-slate-400 sm:px-4">{row.lastActivity}</td>
                <td className="px-3 py-3 sm:px-4">
                  <Link
                    to="/contact"
                    className="text-[11px] font-semibold uppercase tracking-wide text-[#60a5fa] transition-colors hover:text-[#93c5fd]"
                  >
                    {row.action}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
