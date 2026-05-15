import { Link } from 'react-router-dom'

import { SectionShell } from '@/components/security-trust-figma/section-shell'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const cards = [
  {
    title: 'Third-Party Penetration\nTesting',
    body: 'Independent security firms conduct quarterly grey-box and black-box penetration tests on our infrastructure and application layers. Remediation is enforced within 72 hours for critical findings.',
    cta: 'Latest Report Available',
  },
  {
    title: 'ISO 27001 Alignment',
    body: 'Our Information Security Management System (ISMS) strictly follows ISO/IEC 27001:2013 standards, ensuring comprehensive management of information security risks.',
    cta: 'View Framework',
  },
  {
    title: 'AWS-Backed\nInfrastructure',
    body: 'Hosted on Amazon Web Services (AWS) utilizing top-tier physical security and environmental controls. We leverage AWS Shield for DDoS protection and AWS KMS for key management.',
    cta: 'Infrastructure Details',
  },
]

export function SecurityTestingSection() {
  return (
    <SectionShell tone="deep">
      <h2 className="text-[34px] font-semibold leading-10 tracking-[-0.4px] text-[#f2f6ff] sm:text-[40px] lg:text-[46px]">
        Security Testing &amp; Certifications
      </h2>
      <p className="mt-4 max-w-[720px] text-[17px] font-medium leading-[1.45] text-[#b9c6e0] sm:text-xl sm:leading-[32.5px]">
        We validate our defenses through continuous, rigorous external assessment.
      </p>
      <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {cards.map(({ title, body, cta }) => (
          <article
            key={title}
            className="flex flex-col rounded-[6px] border border-[rgba(39,73,126,0.72)] bg-[#10284d] p-8 lg:min-h-[320px]"
          >
            <h3 className="whitespace-pre-line text-2xl font-semibold leading-8 text-[#f2f6ff]">{title}</h3>
            <p className="mt-4 flex-1 text-[17px] leading-[1.45] text-[#aebbd4] sm:text-xl sm:leading-[32.5px]">
              {body}
            </p>
            <Link
              to="/docs"
              className={cn(
                buttonVariants({ variant: 'secondary' }),
                'mt-8 h-11 w-fit border-[#233554] bg-[#112240] px-4 text-lg font-semibold text-white hover:bg-[#162a4c]',
              )}
            >
              {cta}
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
