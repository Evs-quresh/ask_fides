import { cn } from '@/lib/utils'

export function PrivacyPolicyToc({ items, activeSectionId, onNavigate }) {
  return (
    <nav aria-label="Table of contents" className="lg:sticky lg:top-28 lg:self-start">
      <h2 className="text-xl font-bold leading-7 text-[#f2f6ff]">Table of Contents</h2>
      <ul className="mt-6 flex flex-col gap-4 border-b border-[rgba(27,56,104,0.5)] pb-8 lg:border-0 lg:pb-0">
        {items.map((item) => {
          const active = activeSectionId === item.sectionId
          return (
            <li key={item.id}>
              <a
                href={`#${item.sectionId}`}
                className={cn(
                  'block text-xl leading-8 transition-colors',
                  active
                    ? 'font-semibold text-[#3b82f6]'
                    : 'font-normal text-[#94a3b8] hover:text-[#cbd5e1]',
                )}
                onClick={() => onNavigate?.(item.sectionId)}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
