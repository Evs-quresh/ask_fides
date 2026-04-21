import { askFidesAssets } from '@/components/ask-fides/constants'

function BrowserChrome() {
  return (
    <div className="flex h-10 items-center justify-between border-b border-[rgba(30,58,138,0.3)] bg-[#0f1d36] px-4">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[rgba(239,68,68,0.8)]" />
        <span className="h-3 w-3 rounded-full bg-[rgba(234,179,8,0.8)]" />
        <span className="h-3 w-3 rounded-full bg-[rgba(34,197,94,0.8)]" />
      </div>
      <div className="flex h-5 w-64 items-center justify-center rounded bg-[rgba(30,58,138,0.2)]">
        <span className="font-mono text-[10px] leading-[15px] text-[#60a5fa]">
          askfides.ai/dashboard
        </span>
      </div>
    </div>
  )
}

function CitationCard() {
  return (
    <div className="absolute -bottom-10 -left-10 hidden w-64 rounded-md border border-[rgba(59,130,246,0.4)] bg-[#112240] p-[17px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] md:block">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-[0.6px] text-[#93c5fd]">
          Citation Analysis
        </span>
        <img src={askFidesAssets.externalLink} alt="" aria-hidden="true" className="h-[11.7px] w-[11.7px]" />
      </div>
      <div className="space-y-2 pb-1">
        <div className="h-2 w-[166px] rounded bg-[rgba(59,130,246,0.2)]" />
        <div className="h-2 w-full rounded bg-[rgba(59,130,246,0.2)]" />
        <div className="h-2 w-[111px] rounded bg-[rgba(59,130,246,0.2)]" />
      </div>
      <div className="mt-2 rounded border border-[rgba(30,58,138,0.3)] bg-[#0a192f] px-[9px] py-[9px]">
        <span className="font-mono text-xs text-white">&gt; 98.4% Accuracy verified</span>
      </div>
    </div>
  )
}

function AiStatusCard() {
  return (
    <div className="absolute -right-5 -top-5 hidden w-64 rounded-md border border-[rgba(59,130,246,0.4)] bg-[#112240] p-[17px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] md:block">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-[rgba(59,130,246,0.2)]">
          <img src={askFidesAssets.statusIcon} alt="" aria-hidden="true" className="h-[14.25px] w-[16.5px]" />
        </div>
        <div>
          <p className="text-xs text-[#9ca3af]">AI Status</p>
          <p className="text-sm font-bold text-white">Analyzing Precedents</p>
        </div>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-[#0a192f]">
        <div className="h-full w-2/3 bg-[#3b82f6]" />
      </div>
    </div>
  )
}

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[462.59px] shrink-0 self-center lg:ml-12">
      <div className="overflow-hidden rounded-md border border-[#233554] bg-[#020c1b] p-px shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <BrowserChrome />
        <img
          src={askFidesAssets.dashboardInterface}
          alt="Ask Fides dashboard interface preview"
          className="block aspect-square w-full object-cover"
        />
      </div>
      <CitationCard />
      <AiStatusCard />
    </div>
  )
}
