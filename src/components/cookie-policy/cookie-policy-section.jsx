import { cn } from '@/lib/utils'

const paragraphTone = {
  lead: 'font-light text-[#cbd5e1]',
  body: 'font-normal text-[#cbd5e1]',
  muted: 'font-normal text-[#94a3b8]',
}

export function CookiePolicySection({ section }) {
  return (
    <article
      id={section.id}
      className="scroll-mt-28 border-b border-[rgba(27,56,104,0.35)] pb-16 last:border-0 last:pb-0 lg:scroll-mt-32"
      aria-labelledby={`${section.id}-heading`}
    >
      <h2 id={`${section.id}-heading`} className="flex flex-wrap items-end gap-x-3 gap-y-1">
        <span className="text-4xl font-bold leading-[47px] text-[#3b82f6]">{section.number}</span>
        <span className="text-4xl font-bold leading-[47px] text-white">{section.title}</span>
      </h2>

      {section.paragraphs?.length ? (
        <div className="mt-8 flex max-w-[751px] flex-col gap-6">
          {section.paragraphs.map((p, idx) => (
            <p key={`${section.id}-p-${idx}`} className={cn('text-xl leading-8', paragraphTone[p.tone] ?? paragraphTone.body)}>
              {p.text}
            </p>
          ))}
        </div>
      ) : null}

      {section.cards?.length ? (
        <div className="mt-8 flex max-w-[751px] flex-col gap-6">
          {section.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-[rgba(27,56,104,0.55)] bg-[rgba(7,26,52,0.35)] px-5 py-6 sm:px-8 sm:py-8"
            >
              <h3 className="text-2xl font-bold leading-8 text-white">{card.title}</h3>
              <p className="mt-4 text-xl leading-8 text-[#cbd5e1]">{card.body}</p>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  )
}
