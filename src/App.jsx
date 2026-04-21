import { ArchitectureSection } from '@/components/ask-fides/architecture-section'
import { HeroSection } from '@/components/ask-fides/hero-section'
import { HowItWorksSection } from '@/components/ask-fides/how-it-works-section'
import { LatestIntelligenceSection } from '@/components/ask-fides/latest-intelligence-section'
import { MobileCommandSection } from '@/components/ask-fides/mobile-command-section'
import { Navbar } from '@/components/ask-fides/navbar'
import { ReclaimSection } from '@/components/ask-fides/reclaim-section'
import { SystemCapabilitiesSection } from '@/components/ask-fides/system-capabilities-section'
import { DualCtaSection } from '@/components/shared/dual-cta-section'
import { SiteFooter } from '@/components/shared/site-footer'

function App() {
  return (
    <main className="min-h-screen bg-[#0a192f] font-sans antialiased">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <SystemCapabilitiesSection />
      <ArchitectureSection />
      <MobileCommandSection />
      <ReclaimSection />
      <LatestIntelligenceSection />
      <DualCtaSection />
      <SiteFooter />
    </main>
  )
}

export default App
