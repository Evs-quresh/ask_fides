import {
  ArrowRight,
  BrainCircuit,
  FileSearch,
  GitBranch,
  Lightbulb,
  Search,
} from 'lucide-react'

import { capabilityCards } from '@/components/ask-fides/constants'

const iconMap = {
  search: Search,
  timeline: GitBranch,
  facts: FileSearch,
  strategy: Lightbulb,
}

const footerIconMap = {
  search: BrainCircuit,
  timeline: BrainCircuit,
  facts: GitBranch,
  strategy: BrainCircuit,
}

const iconSizeMap = {
  search: 22.5,
  timeline: 22,
  facts: 21,
  strategy: 20,
}

function CapabilityCard({ item }) {
  const Icon = iconMap[item.icon] ?? Search
  const FooterIcon = footerIconMap[item.icon] ?? BrainCircuit
  const iconSize = iconSizeMap[item.icon] ?? 22

  return (
    <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-[rgba(58,98,167,0.62)] bg-[linear-gradient(180deg,#14315f_0%,#10284d_58%,#0f2447_100%)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(91,145,236,0.95)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.32)] sm:p-7 lg:p-8">
      <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[rgba(59,130,246,0.14)] blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg border border-[rgba(71,123,206,0.65)] bg-[linear-gradient(180deg,#0c2e5e_0%,#0a264c_100%)] text-[#5aa2ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
        <Icon size={iconSize} strokeWidth={2} />
      </div>
      <h3 className="text-[22px] font-semibold leading-[1.2] tracking-[-0.2px] text-[#eef3ff] sm:text-[26px]">
        {item.title}
      </h3>
      <p className="mt-3 text-[15px] leading-[1.6] text-[#c0cde3] sm:text-[16px]">
        {item.description}
      </p>
      <div className="mt-6 pt-5 xl:mt-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(64,109,183,0.52)] bg-[rgba(14,40,79,0.72)] px-3 py-1.5 text-[12px] text-[#8ebcff]">
          <FooterIcon size={12} className="opacity-90" />
          <span>{item.footer}</span>
        </div>
      </div>
    </article>
  )
}

export function SystemCapabilitiesSection() {
  return (
    <section className="border-b border-[rgba(27,56,104,0.5)] bg-[#071a34] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-[100px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[651px]">
            <h2 className="text-[34px] font-semibold tracking-[-0.4px] text-[#f2f6ff] sm:text-[40px] lg:text-[46px]">
              System Capabilities
            </h2>
            <p className="mt-4 text-[17px] font-medium leading-[1.45] text-[#b6c2dc]">
              Modular legal tools designed for granular control and comprehensive
              oversight.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 pb-[2px] text-[18px] font-medium text-[#3090ff] transition-colors hover:text-[#66adff]"
          >
            <span>View Full Specifications</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilityCards.map((item) => (
            <CapabilityCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
