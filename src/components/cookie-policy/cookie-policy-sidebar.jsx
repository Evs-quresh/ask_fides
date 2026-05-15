import { Mail } from 'lucide-react'

import { cn } from '@/lib/utils'

import { COOKIE_LEGAL_EMAIL } from '@/data/cookie-policy-content'

export function CookiePolicySidebar({ items, activeSectionId, onNavigate }) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-xl border border-[rgba(42,81,143,0.45)] bg-[rgba(7,26,52,0.65)] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:p-7">
        <h2 className="text-xl font-bold leading-7 text-white">Command Center</h2>
        <nav aria-label="Cookie policy sections" className="mt-6">
          <ul className="flex flex-col gap-4">
            {items.map((item) => {
              const active = activeSectionId === item.sectionId
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.sectionId}`}
                    onClick={() => onNavigate?.(item.sectionId)}
                    className={cn(
                      'flex items-center gap-3 text-base leading-6 transition-colors',
                      active ? 'font-medium text-[#3b82f6]' : 'font-normal text-[#94a3b8] hover:text-[#cbd5e1]',
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-6 w-6 shrink-0 items-center justify-center rounded border text-xs leading-4',
                        active
                          ? 'border-[rgba(59,130,246,0.55)] text-[#3b82f6]'
                          : 'border-[rgba(148,163,184,0.35)] text-[#94a3b8]',
                      )}
                    >
                      {item.badge}
                    </span>
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="mt-8 border-t border-[rgba(27,56,104,0.55)] pt-6">
          <p className="text-xs font-normal uppercase tracking-wide text-[#64748b]">Legal support</p>
          <a
            href={`mailto:${COOKIE_LEGAL_EMAIL}`}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold leading-5 text-white transition-colors hover:text-[#93c5fd]"
          >
            <Mail className="h-3.5 w-3.5 shrink-0 text-[#94a3b8]" aria-hidden />
            {COOKIE_LEGAL_EMAIL}
          </a>
        </div>
      </div>
    </aside>
  )
}
