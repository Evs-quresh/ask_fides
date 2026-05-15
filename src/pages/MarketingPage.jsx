import { Link, Navigate } from 'react-router-dom'

import { MarketingBreadcrumb } from '@/components/shared/marketing-breadcrumb'
import { DualCtaSection } from '@/components/shared/dual-cta-section'
import { sitePageContent } from '@/data/site-page-content'

export function MarketingPage({ pageId }) {
  const page = sitePageContent[pageId]

  if (!page) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <article className="border-b border-[rgba(27,56,104,0.45)] bg-[#071a34] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[720px]">
          <MarketingBreadcrumb segment={page.title} />

          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.35px] text-[#f3f7ff] sm:text-4xl lg:text-[44px] lg:leading-[1.12]">
            {page.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-[#b6c4df] sm:text-xl">{page.lead}</p>

          <div className="mt-8 space-y-5 text-[17px] leading-[1.65] text-[#aebddb]">
            {page.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {page.bullets?.length ? (
            <ul className="mt-8 list-disc space-y-3 pl-5 text-[16px] leading-[1.55] text-[#c8d4ea] marker:text-[#3b82f6]">
              {page.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}

          <p className="mt-10 text-sm text-[#94a3b8]">
            <Link to="/" className="font-medium text-[#93c5fd] underline-offset-4 hover:text-white hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </article>
      <DualCtaSection />
    </>
  )
}
