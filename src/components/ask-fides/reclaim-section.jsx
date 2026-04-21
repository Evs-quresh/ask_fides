import { ArrowLeft, ArrowRight, BriefcaseBusiness, Building2, Scale, UserRound } from 'lucide-react'

import { reclaimCards } from '@/components/ask-fides/constants'

const iconMap = {
  solo: UserRound,
  firm: BriefcaseBusiness,
  inhouse: Building2,
  judge: Scale,
}

function ReclaimCard({ card }) {
  const Icon = iconMap[card.icon] ?? UserRound

  return (
    <article className="group flex h-full flex-col rounded-[6px] border border-[rgba(39,73,126,0.72)] bg-[#11274b] px-[25px] pt-[25px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(68,120,205,0.9)] hover:bg-[#14305a] hover:shadow-[0_12px_30px_rgba(0,0,0,0.28)] xl:h-[254px]">
      <div className="mb-[22px] flex items-center justify-between">
        <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-[4px] bg-[#0a2348] text-[#2f82ff] transition-colors duration-200 group-hover:bg-[#0f2e5d] group-hover:text-[#5aa2ff]">
          <Icon size={16} />
        </span>
        <span className="text-[10px] tracking-[0.2px] text-[#5f75a0] transition-colors duration-200 group-hover:text-[#7f9dd1]">{card.type}</span>
      </div>

      <h3 className="text-[22px] font-semibold leading-[1.15] text-[#ecf3ff] xl:text-[24px]">
        {card.title}
      </h3>
      <p className="mt-3 max-w-[242px] text-[15px] leading-[1.45] text-[#aebddb]">
        {card.description}
      </p>

      <div className="mt-auto pb-[25px] pt-[20px]">
        <div className="h-[3px] w-full rounded-full bg-[rgba(37,74,130,0.65)] transition-colors duration-200 group-hover:bg-[rgba(63,122,218,0.9)]" />
      </div>
    </article>
  )
}

export function ReclaimSection() {
  return (
    <section className="border-b border-[rgba(27,56,104,0.45)] bg-[#071a34] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-[100px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="px-0 sm:px-3 lg:px-[32px]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-8">
            <div className="max-w-[618px]">
              <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.35px] text-[#f3f7ff] sm:text-[44px] lg:text-[54px]">
              Reclaim <span className="text-[#2f88ff]">60-80%</span> of your time
              </h2>
              <p className="mt-6 text-[17px] leading-[1.5] text-[#b2bfd9]">
                Ask Fides delivers complete, jurisdiction-specific legal research -
                reliable, traceable, and crafted to save you weeks of effort.
              </p>
            </div>

            <div className="mb-[2px] flex items-center gap-2 self-end md:self-auto">
              <button
                aria-label="Previous"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-[rgba(39,73,126,0.7)] bg-[#11274b] text-[#9fb6db] transition-all duration-200 hover:border-[rgba(68,120,205,0.9)] hover:bg-[#16325c] hover:text-[#d5e5ff] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3f88ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071a34]"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                aria-label="Next"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-[rgba(39,73,126,0.7)] bg-[#11274b] text-[#9fb6db] transition-all duration-200 hover:border-[rgba(68,120,205,0.9)] hover:bg-[#16325c] hover:text-[#d5e5ff] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3f88ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071a34]"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {reclaimCards.map((card) => (
              <ReclaimCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
