import { useEffect, useState } from 'react'

import { CookiePolicyHero } from '@/components/cookie-policy/cookie-policy-hero'
import { CookiePolicySection } from '@/components/cookie-policy/cookie-policy-section'
import { CookiePolicySidebar } from '@/components/cookie-policy/cookie-policy-sidebar'
import { DualCtaSection } from '@/components/shared/dual-cta-section'
import { cookiePolicySections, cookiePolicyTocItems } from '@/data/cookie-policy-content'

const sectionIds = cookiePolicySections.map((s) => s.id)

export function CookiePolicyPage() {
  const [activeSectionId, setActiveSectionId] = useState(sectionIds[0] ?? 'what-are-cookies')

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
      <CookiePolicyHero />
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,352px)_minmax(0,1fr)] lg:items-start lg:gap-x-12 xl:gap-x-16">
          <CookiePolicySidebar
            items={cookiePolicyTocItems}
            activeSectionId={activeSectionId}
            onNavigate={setActiveSectionId}
          />
          <div className="flex min-w-0 flex-col gap-16 lg:max-w-[784px] lg:gap-20">
            {cookiePolicySections.map((section) => (
              <CookiePolicySection key={section.id} section={section} />
            ))}
          </div>
        </div>
      </div>
      <DualCtaSection />
    </div>
  )
}
