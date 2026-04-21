import { Bolt, CircleCheckBig, Sparkles } from 'lucide-react'

import { architecturePoints, timelineItems } from '@/components/ask-fides/constants'

function TimelineRow({ item, highlighted = false }) {
  return (
    <div
      className={`rounded-[6px] border px-3 py-2.5 ${
        highlighted
          ? 'border-[rgba(43,92,170,0.95)] bg-[#0a1c37]'
          : 'border-[rgba(35,68,120,0.65)] bg-[#0a1b34]'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold tracking-[0.35px] text-[#71a8ff]">{item.date}</p>
          <h4 className="mt-1 text-[11px] font-semibold text-[#eaf1ff]">{item.title}</h4>
          <p className="mt-1 line-clamp-2 text-[8.5px] leading-[1.45] text-[#8ba0c6]">{item.summary}</p>
        </div>
        {item.badge ? (
          <span className={`shrink-0 rounded px-1.5 py-0.5 text-[6.5px] font-semibold tracking-[0.2px] ${highlighted ? 'bg-[rgba(146,49,67,0.35)] text-[#ff8fa7]' : 'bg-[rgba(43,89,161,0.35)] text-[#7eb2ff]'}`}>
            {item.badge}
          </span>
        ) : null}
      </div>
    </div>
  )
}

function TimelinePanel() {
  return (
    <div className="w-full max-w-[560px] rounded-[4px] border border-[rgba(39,73,126,0.7)] bg-[linear-gradient(180deg,#132e58_0%,#10274b_100%)] p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#aac5f5]">
          <Sparkles size={12} />
          <span className="text-[11px] font-semibold tracking-[0.3px]">CASE TIMELINE VIEW</span>
        </div>
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e94a60]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#eac147]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#43d386]" />
        </div>
      </div>

      <div className="space-y-2.5">
        {timelineItems.map((item, index) => (
          <TimelineRow key={item.date + item.title} item={item} highlighted={index === 0} />
        ))}
      </div>
    </div>
  )
}

function ArchitecturePanel() {
  return (
    <div className="w-full max-w-[500px] text-center lg:-mt-1">
      <span className="inline-flex rounded-[2px] border border-[rgba(45,91,168,0.55)] bg-[rgba(13,38,79,0.8)] px-2 py-1 text-[9px] font-semibold tracking-[0.45px] text-[#69a3ff]">
        CORE ARCHITECTURE
      </span>

      <h3 className="mt-3 text-[30px] font-semibold leading-[1.08] tracking-[-0.2px] text-[#f0f5ff] sm:text-[37px]">
        <span className="block">Not just another tool.</span>
        <span className="block text-[#3f8fff]">A shift in certainty.</span>
      </h3>

      <div className="mt-5 space-y-5">
        {architecturePoints.map((point, index) => (
          <div key={point.title} className="flex items-start justify-center gap-3 text-left">
            <div className="mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#0f2a57] text-[#4e93ff]">
              {index === 0 ? <Bolt size={12} /> : <CircleCheckBig size={12} />}
            </div>
            <div className="min-w-0">
              <h4 className="text-[22px] font-medium leading-[1.2] text-[#eaf1ff] sm:text-[27px]">{point.title}</h4>
              <p className="mt-1.5 text-[15px] leading-[1.55] text-[#aebddb]">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ArchitectureSection() {
  return (
    <section className="border-b border-[rgba(27,56,104,0.45)] bg-[#071a34] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1120px] items-start justify-center gap-8 lg:grid-cols-[560px_500px] lg:gap-10">
        <div className="flex justify-center">
          <TimelinePanel />
        </div>
        <div className="flex justify-center">
          <ArchitecturePanel />
        </div>
      </div>
    </section>
  )
}
