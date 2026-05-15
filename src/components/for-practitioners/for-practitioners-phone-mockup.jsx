export function ForPractitionersPhoneMockup() {
  return (
    <div className="relative w-[min(100%,300px)] shrink-0" aria-hidden>
      <div className="pointer-events-none absolute inset-0 left-1/2 top-1/2 h-[125%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.38)_0%,transparent_68%)] blur-2xl" />
      <div className="relative rounded-[2.25rem] border border-[rgba(148,163,184,0.25)] bg-[#0f172a] p-2 shadow-[0_32px_64px_rgba(0,0,0,0.45)]">
        <div className="overflow-hidden rounded-[1.85rem] bg-[#0a192f]">
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
            <span className="text-xs font-semibold text-white">Matter Analysis</span>
            <span className="h-2 w-8 rounded-full bg-white/10" />
          </div>
          <div className="space-y-4 px-4 pb-6 pt-4">
            <div>
              <p className="text-[11px] font-semibold text-slate-300">Smith v. State</p>
              <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">Relevance score</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[84%] rounded-full bg-[#3b82f6]" />
                </div>
                <span className="text-xs font-semibold text-[#60a5fa]">84%</span>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#0a1628] p-3">
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#64748b]">Key precedent analysis</p>
              <ul className="mt-2 space-y-1.5 text-[11px] leading-relaxed text-slate-400">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#3b82f6]" />
                  <span>Holding aligns with prior circuit treatment of qualified immunity.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#3b82f6]" />
                  <span>Distinguishes State v. Rowe on temporal proximity of discovery.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
