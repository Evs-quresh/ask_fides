import { ForPractitionersAudience } from '@/components/for-practitioners/for-practitioners-audience'
import { ForPractitionersComparison } from '@/components/for-practitioners/for-practitioners-comparison'
import { ForPractitionersHero } from '@/components/for-practitioners/for-practitioners-hero'
import { DualCtaSection } from '@/components/shared/dual-cta-section'
import { practitionersCta } from '@/data/for-practitioners-content'

export function ForPractitionersPage() {
  return (
    <div className="overflow-x-hidden bg-[#020617] text-slate-100">
      <ForPractitionersHero />
      <ForPractitionersComparison />
      <ForPractitionersAudience />
      <DualCtaSection
        title={practitionersCta.title}
        description={practitionersCta.description}
        primaryLabel={practitionersCta.primaryLabel}
        secondaryLabel={practitionersCta.secondaryLabel}
        primaryTo={practitionersCta.primaryTo}
        secondaryTo={practitionersCta.secondaryTo}
        footnote={practitionersCta.footnote}
      />
    </div>
  )
}
