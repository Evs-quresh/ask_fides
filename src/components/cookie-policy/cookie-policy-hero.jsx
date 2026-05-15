import { COOKIE_LAST_UPDATED, COOKIE_LEAD } from '@/data/cookie-policy-content'

export function CookiePolicyHero() {
  return (
    <header className="border-b border-[rgba(30,58,138,0.3)] bg-[#0a192f] px-4 pb-12 pt-16 sm:px-6 sm:pb-14 sm:pt-20 lg:pt-24">
      <div className="mx-auto w-full max-w-[1216px]">
        <h1 className="text-[40px] font-bold leading-[1.2] tracking-[-0.02em] text-white sm:text-[48px] lg:text-[56px] lg:leading-[67px]">
          Cookie Policy
        </h1>
        <p className="mt-6 font-mono text-base font-normal leading-6 text-[#94a3b8]">
          Last updated: {COOKIE_LAST_UPDATED}
        </p>
        <p className="mt-6 max-w-[896px] text-xl font-light leading-8 text-[#cbd5e1]">{COOKIE_LEAD}</p>
      </div>
    </header>
  )
}
