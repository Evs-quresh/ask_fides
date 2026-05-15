import { ProductOverviewSection } from '@/components/product-overview/product-overview-layout'
import { productOverviewMission } from '@/data/product-overview-content'

export function ProductOverviewMissionSection() {
  const { lead, emphasis } = productOverviewMission

  return (
    <ProductOverviewSection borderBottom innerClassName="text-center" aria-labelledby="product-overview-mission-heading">
      <div className="mx-auto max-w-[52rem] text-pretty">
        <p className="text-base font-medium leading-relaxed text-[#e2e8f0] sm:text-lg sm:leading-relaxed">{lead}</p>
        <h2
          id="product-overview-mission-heading"
          className="mt-5 bg-gradient-to-r from-[#60a5fa] to-[#a855f7] bg-clip-text text-3xl font-bold leading-tight text-transparent sm:mt-6 sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-[1.12]"
        >
          {emphasis}
        </h2>
      </div>
    </ProductOverviewSection>
  )
}
