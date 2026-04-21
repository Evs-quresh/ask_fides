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

const descriptionHeightMap = {
  search: 'min-h-[121px]',
  timeline: 'min-h-[121px]',
  facts: 'min-h-[152px]',
  strategy: 'min-h-[121px]',
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
  const descriptionHeight = descriptionHeightMap[item.icon] ?? 'xl:min-h-[121px]'

  return (
    <article className="flex h-full w-full flex-col rounded-[6px] border border-[rgba(41,74,128,0.7)] bg-[#10284d] px-5 pt-6 sm:px-7 sm:pt-7 lg:px-[33px] lg:pt-[33px] xl:h-[414.25px]">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-[6px] border border-[rgba(32,74,136,0.7)] bg-[#08254d] text-[#2f82ff]">
        <Icon size={iconSize} strokeWidth={2} />
      </div>
      <h3 className="text-[28px] font-semibold leading-8 tracking-[-0.1px] text-[#eef3ff] sm:text-[32px]">
        <span className="align-middle text-[18px]">{item.title}</span>
      </h3>
      <p className={`mt-3 text-[15px] font-medium leading-[1.45] text-[#aebbd4] sm:text-[16px] sm:leading-[1.35] ${descriptionHeight}`}>
        {item.description}
      </p>
      <div className="mt-6 border-t border-[rgba(45,81,141,0.45)] pt-[25px] xl:mt-auto">
        <div className="flex items-center gap-[8px] text-[12px] text-[#7fb3ff]">
          <FooterIcon size={12} />
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

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilityCards.map((item) => (
            <CapabilityCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
