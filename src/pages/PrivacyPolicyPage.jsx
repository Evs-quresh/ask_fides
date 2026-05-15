import { useEffect, useState } from 'react'

import { PrivacyPolicyHero } from '@/components/privacy-policy/privacy-policy-hero'
import { PrivacyPolicySectionBlock } from '@/components/privacy-policy/privacy-policy-section-block'
import { PrivacyPolicyToc } from '@/components/privacy-policy/privacy-policy-toc'
import { DualCtaSection } from '@/components/shared/dual-cta-section'
import { privacyPolicySections, privacyTocItems } from '@/data/privacy-policy-content'

const sectionIds = privacyPolicySections.map((s) => s.id)

export function PrivacyPolicyPage() {
  const [activeSectionId, setActiveSectionId] = useState(sectionIds[0] ?? 'scope')

  useEffect(() => {
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)

    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        const id = visible?.target.id
        if (id) setActiveSectionId(id)
      },
      { rootMargin: '-45% 0px -35% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-[#0a192f] text-[#e6f1ff]">
      <PrivacyPolicyHero />
      <div className="mx-auto max-w-[896px] px-4 py-16 sm:px-6 sm:py-20 lg:px-6 lg:py-24">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,160px)_minmax(0,1fr)] lg:gap-x-12 lg:gap-y-0 xl:gap-x-16">
          <PrivacyPolicyToc
            items={privacyTocItems}
            activeSectionId={activeSectionId}
            onNavigate={setActiveSectionId}
          />
          <div className="flex min-w-0 flex-col gap-24 lg:gap-32">
            {privacyPolicySections.map((section) => (
              <PrivacyPolicySectionBlock key={section.id} section={section} />
            ))}
          </div>
        </div>
      </div>
      <DualCtaSection />
    </div>
  )
}
