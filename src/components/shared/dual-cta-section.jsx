export function DualCtaSection({
  title = "Certainty isn't optional.\nIt's everything.",
  description = 'Join the 4,000+ legal professionals who have already upgraded their workflow with Ask Fides.',
  primaryLabel = 'Schedule a Demo',
  secondaryLabel = 'Contact Sales',
  onPrimaryClick,
  onSecondaryClick,
}) {
  const titleLines = title.split('\n')

  return (
    <section className="relative border-b border-[rgba(27,56,104,0.45)] bg-[#132b52] py-14 sm:py-16 lg:py-[72px]">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,51,92,0.35)] to-[rgba(19,43,82,0.08)]" />

      <div className="relative mx-auto flex w-full max-w-[1280px] justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="w-full max-w-[896px]">
          <h2 className="mx-auto max-w-[864px] text-[36px] font-semibold leading-[1.1] tracking-[-0.45px] text-[#f4f8ff] sm:text-[46px] lg:text-[56px] lg:leading-[1.07]">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          </h2>

          <div className="mx-auto mt-6 max-w-[672px]">
            <p className="text-[17px] leading-[1.76] text-[#b6c4df]">{description}</p>
          </div>

          <div className="mx-auto mt-9 flex w-full max-w-[864px] flex-col items-center justify-center gap-3.5 sm:flex-row">
            <button
              type="button"
              onClick={onPrimaryClick}
              className="h-[46px] w-full max-w-[260px] rounded-[6px] border border-[#4486ff] bg-gradient-to-b from-[#4a92ff] to-[#3f82f4] text-[13px] font-semibold text-white shadow-[0_12px_24px_rgba(52,114,230,0.25)] transition-all duration-200 hover:brightness-110 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#76a9ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#132b52] sm:w-[178px]"
            >
              {primaryLabel}
            </button>
            <button
              type="button"
              onClick={onSecondaryClick}
              className="h-[46px] w-full max-w-[260px] rounded-[6px] border border-[rgba(43,84,145,0.72)] bg-[#0b213f] text-[13px] font-semibold text-[#edf3ff] transition-all duration-200 hover:border-[rgba(88,130,194,0.85)] hover:bg-[#0f2b52] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#76a9ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#132b52] sm:w-[156px]"
            >
              {secondaryLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
