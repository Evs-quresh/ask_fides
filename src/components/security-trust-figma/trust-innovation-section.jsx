import { SectionShell } from '@/components/security-trust-figma/section-shell'

const pillars = [
  {
    title: 'Verified Sources Only',
    body: 'System outputs are strictly constrained to uploaded legal documents and verified jurisdictional databases. Zero-shot generation is disabled for factual queries.',
    meta: 'CONSTRAINT LEVEL: ABSOLUTE',
  },
  {
    title: 'Transparent Citations',
    body: 'Granular citation mapping links every generated assertion to specific paragraphs in source material, enabling instant attorney verification.',
    meta: 'TRACEABILITY: 100%',
  },
  {
    title: 'Factual Integrity',
    body: 'RAG (Retrieval-Augmented Generation) architecture tuned for legal syntax minimizes hallucination risks through strict context window management.',
    meta: 'ARCHITECTURE: RAG-LEGAL-V2',
  },
]

export function TrustInnovationSection() {
  return (
    <SectionShell tone="navy">
      <h2 className="text-[34px] font-semibold leading-10 tracking-[-0.4px] text-[#f2f6ff] sm:text-[40px] lg:text-[46px]">
        Trustworthy Innovation
      </h2>
      <p className="mt-4 font-mono text-xl leading-[32.5px] tracking-wide text-[#7fb3ff]">
        EVIDENCE-BASED INTELLIGENCE ARCHITECTURE
      </p>
      <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {pillars.map(({ title, body, meta }) => (
          <article
            key={title}
            className="flex flex-col rounded-[6px] border border-[rgba(39,73,126,0.72)] bg-[#10284d] p-8"
          >
            <h3 className="text-2xl font-semibold leading-8 text-[#f2f6ff]">{title}</h3>
            <p className="mt-4 text-[17px] leading-[1.45] text-[#aebbd4] sm:text-xl sm:leading-[32.5px]">{body}</p>
            <p className="mt-6 font-mono text-lg leading-7 text-[#7fb3ff]">{meta}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
