import { Button } from '@/components/ui/button'
import { askFidesAssets, trustItems } from '@/components/ask-fides/constants'

function TrustBadge({ iconSrc, label }) {
  return (
    <div className="flex items-center gap-2">
      <img src={iconSrc} alt="" aria-hidden="true" className="h-5 w-4" />
      <span className="text-sm font-medium text-[rgba(204,214,246,0.6)]">{label}</span>
    </div>
  )
}

export function HeroCopy() {
  return (
    <div className="flex w-full max-w-[560px] flex-col items-start gap-6 text-left sm:gap-8">
      <div className="flex items-center gap-2 rounded-full border border-[rgba(59,130,246,0.3)] bg-[#112240] px-[13px] py-[7px]">
        <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
        <span className="text-sm font-semibold uppercase tracking-[0.35px] text-[#3b82f6]">
          v3.0 Production Ready
        </span>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-4xl font-bold leading-[1.05] tracking-[-1px] text-[#e6f1ff] sm:text-5xl lg:text-6xl">
          <span className="block">Precision Legal</span>
          <span className="block bg-gradient-to-r from-[#3b82f6] to-[#93c5fd] bg-clip-text text-transparent">
            Intelligence.
          </span>
        </h1>
        <p className="max-w-[512px] text-base leading-[1.7] text-[#ccd6f6] sm:text-lg sm:leading-[1.8] lg:text-xl">
          Engineered for the rigorous demands of modern practice. Ask Fides transforms
          disparate legal data into verifiable, high-fidelity insights.
        </p>
      </div>

      <div className="flex w-full flex-wrap items-center gap-3 pt-1 sm:gap-4 sm:pt-2">
        <Button>
          Start Free Trial
          <img src={askFidesAssets.arrowRight} alt="" aria-hidden="true" className="h-[13px] w-[13px]" />
        </Button>
        <Button variant="secondary">
          Request Demo
          <img
            src={askFidesAssets.arrowUpRight}
            alt=""
            aria-hidden="true"
            className="h-[16px] w-[15px]"
          />
        </Button>
      </div>

      <div className="flex w-full flex-wrap items-center gap-4 pt-3 sm:gap-6 sm:pt-4">
        {trustItems.map((item) => (
          <TrustBadge key={item.label} iconSrc={askFidesAssets[item.icon]} label={item.label} />
        ))}
      </div>
    </div>
  )
}
