import { SectionShell } from '@/components/security-trust-figma/section-shell'

function ComplianceBadgeBox({ children }) {
  return (
    <div className="flex h-40 w-40 items-center justify-center rounded-lg bg-[#e6f1ff] p-2 shadow-sm">{children}</div>
  )
}

export function PrivacyComplianceSection() {
  return (
    <SectionShell tone="navy">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col gap-8 lg:col-span-4">
          <h2 className="text-4xl font-semibold leading-10 tracking-[-0.4px] text-[#f2f6ff] sm:text-[40px] lg:text-[46px]">
            Privacy &amp; Global
            <br />
            Compliance
          </h2>
          <p className="text-[17px] font-medium leading-[1.45] text-[#b9c6e0] sm:text-xl sm:leading-[32.5px]">
            ASK FIDES operates within strict regulatory boundaries. Our compliance framework is not an
            add-on but a foundational architecture designed to meet multi-jurisdictional requirements
            simultaneously.
          </p>
          <div className="border border-[rgba(39,73,126,0.72)] bg-[#112240] px-8 pb-8 pt-10">
            <p className="font-mono text-xl font-bold uppercase leading-[32.5px] tracking-wide text-[#f2f6ff]">
              DATA RESIDENCY
              <br />
              PROTOCOL:
            </p>
            <p className="mt-4 font-mono text-xl leading-[32.5px] text-[#ccd6f6]">
              Client-specific DPAs available. Cross-border transfers executed under Standard Contractual
              Clauses (SCCs).
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-16 lg:col-span-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
            <div className="flex flex-col items-center gap-4">
              <ComplianceBadgeBox>
                <span className="text-xs font-bold uppercase text-slate-600">GDPR</span>
              </ComplianceBadgeBox>
              <p className="pt-2 font-mono text-xl leading-7 tracking-[0.125em] text-[#ccd6f6]">EU REGION</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <ComplianceBadgeBox>
                <span className="text-xs font-bold uppercase text-slate-600">SOC2</span>
              </ComplianceBadgeBox>
              <p className="pt-2 font-mono text-xl leading-7 tracking-[0.125em] text-[#ccd6f6]">SECURITY</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-40 w-40 items-center justify-center rounded-lg bg-[#e6f1ff] p-3 shadow-sm">
                <div className="flex flex-col items-center rounded-full border-4 border-[#0a192f] px-4 py-3 text-center">
                  <span className="text-3xl font-bold leading-9 text-[#0a192f]">PDPA</span>
                  <span className="mt-0.5 text-sm font-normal leading-5 text-[#0a192f]">COMPLIANT</span>
                </div>
              </div>
              <p className="pt-2 font-mono text-xl leading-7 tracking-[0.125em] text-[#ccd6f6]">SINGAPORE</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-40 w-40 flex-col items-center justify-center rounded-lg bg-[#e6f1ff] p-4 shadow-sm">
                <div className="border-b-4 border-[#0a192f] pb-1 text-center">
                  <span className="text-3xl font-bold leading-9 text-[#0a192f]">CCPA</span>
                  <span className="mt-1 block text-lg font-normal leading-7 text-[#0a192f]">READY</span>
                </div>
              </div>
              <p className="pt-2 font-mono text-xl leading-7 tracking-[0.125em] text-[#ccd6f6]">CALIFORNIA</p>
            </div>
          </div>

          <div className="border-t border-[rgba(27,56,104,0.5)] pt-16">
            <div className="grid grid-cols-2 gap-y-6 text-center sm:grid-cols-4">
              {['UK GDPR\nCompliant', 'PIPEDA\n(Canada)', 'Hong Kong PDPO', 'ISO 27001\nAligned'].map(
                (label) => (
                  <p
                    key={label}
                    className="whitespace-pre-line font-mono text-xl leading-7 text-[#b9c6e0]"
                  >
                    {label}
                  </p>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
