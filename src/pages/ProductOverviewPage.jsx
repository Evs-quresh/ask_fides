import { ProductOverviewFeatureSection } from '@/components/product-overview/product-overview-feature-section'
import { ProductOverviewHero } from '@/components/product-overview/product-overview-hero'
import { ProductOverviewMissionSection } from '@/components/product-overview/product-overview-mission-section'
import { ProductOverviewSecondaryFeaturesSection } from '@/components/product-overview/product-overview-secondary-features-section'
import { DualCtaSection } from '@/components/shared/dual-cta-section'
import { productOverviewFeatures } from '@/data/product-overview-content'

export function ProductOverviewPage() {
  return (
    <div className="overflow-x-hidden bg-[#020617] text-slate-100">
      <ProductOverviewHero />
      {productOverviewFeatures.map((section, index) => (
        <ProductOverviewFeatureSection key={section.id} section={section} index={index} />
      ))}
      <ProductOverviewMissionSection />
      <ProductOverviewSecondaryFeaturesSection />
      <DualCtaSection />
    </div>
  )
}
