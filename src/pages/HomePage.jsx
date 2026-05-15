import { ArchitectureSection } from '@/components/ask-fides/architecture-section'
import { HeroSection } from '@/components/ask-fides/hero-section'
import { HowItWorksSection } from '@/components/ask-fides/how-it-works-section'
import { LatestIntelligenceSection } from '@/components/ask-fides/latest-intelligence-section'
import { MobileCommandSection } from '@/components/ask-fides/mobile-command-section'
import { ReclaimSection } from '@/components/ask-fides/reclaim-section'
import { SystemCapabilitiesSection } from '@/components/ask-fides/system-capabilities-section'
import { DualCtaSection } from '@/components/shared/dual-cta-section'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <SystemCapabilitiesSection />
      <ArchitectureSection />
      <MobileCommandSection />
      <ReclaimSection />
      <LatestIntelligenceSection />
      <DualCtaSection />
    </>
  )
}
