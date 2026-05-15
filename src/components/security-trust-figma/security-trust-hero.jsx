import { Shield } from 'lucide-react'

const badges = ['SOC 2 Type II Certified', 'ISO 27001 Aligned', 'GDPR Compliant']

export function SecurityTrustHero() {
  return (
    <section className="relative overflow-hidden border-b border-[rgba(30,58,138,0.3)] bg-[#0a192f] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute -right-[200px] -top-[150px] h-[600px] w-[600px] rounded-full bg-[rgba(37,99,235,0.05)] blur-[50px]" />
      <div className="relative mx-auto w-full max-w-[1280px]">
        <h1 className="max-w-[1100px] text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-[#e6f1ff] sm:text-[56px] lg:text-[72px] lg:leading-[1.05]">
          Enterprise Integrity &amp;
          <br />
          <span className="bg-gradient-to-r from-[#3b82f6] to-[#93c5fd] bg-clip-text text-transparent">
            Uncompromised Security
          </span>
        </h1>
        <p className="mt-8 text-2xl font-bold leading-8 text-[#93c5fd]">Our Commitment to Security</p>
        <p className="mt-6 max-w-[960px] text-xl font-light leading-[32.5px] text-[#ccd6f6]">
          At Ask Fides, we understand that trust is the currency of the legal profession. Our security
          posture is built on a foundation of rigorous testing, global compliance, and a zero-trust
          architecture. We don&apos;t just protect your data; we guarantee its integrity through
          verifiable cryptographic proofs and strict adherence to international standards.
        </p>
        <ul className="mt-12 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-x-12 sm:gap-y-4">
          {badges.map((label) => (
            <li key={label} className="flex items-center gap-3">
              <Shield className="h-6 w-6 shrink-0 text-[#60a5fa]" aria-hidden />
              <span className="font-mono text-xl leading-7 text-[#ccd6f6]">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
