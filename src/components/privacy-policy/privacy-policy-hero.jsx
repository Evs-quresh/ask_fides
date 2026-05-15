import { PRIVACY_LAST_UPDATED, PRIVACY_LEAD } from '@/data/privacy-policy-content'

export function PrivacyPolicyHero() {
  return (
    <header className="border-b border-[rgba(30,58,138,0.3)] bg-[#0a192f] px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:pt-24">
      <div className="mx-auto w-full max-w-[896px]">
        <h1 className="text-[40px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#e6f1ff] sm:text-[48px] lg:text-[56px] lg:leading-[61.6px]">
          Privacy Policy
        </h1>
        <p className="mt-6 text-sm font-medium uppercase leading-5 tracking-[0.1em] text-[#94a3b8]">
          Last updated: {PRIVACY_LAST_UPDATED}
        </p>
        <blockquote className="mt-8 border-l-4 border-[#3b82f6] pl-6">
          <p className="text-xl leading-8 text-[#94a3b8]">{PRIVACY_LEAD}</p>
        </blockquote>
      </div>
    </header>
  )
}
