import { EncryptionSection } from '@/components/security-trust-figma/encryption-section'
import { PrivacyComplianceSection } from '@/components/security-trust-figma/privacy-compliance-section'
import { SecurityTestingSection } from '@/components/security-trust-figma/security-testing-section'
import { SecurityTrustHero } from '@/components/security-trust-figma/security-trust-hero'
import { TrustInnovationSection } from '@/components/security-trust-figma/trust-innovation-section'
import { DualCtaSection } from '@/components/shared/dual-cta-section'

/**
 * Security & Trust page (from Figma). Uses the same palette as the home page (`#0a192f` / `#071a34`).
 * Rendered at `/security` with shared SiteLayout.
 */
export function SecurityTrustFigmaPage() {
  return (
    <>
      <SecurityTrustHero />
      <PrivacyComplianceSection />
      <SecurityTestingSection />
      <TrustInnovationSection />
      <EncryptionSection />
      <DualCtaSection />
    </>
  )
}
