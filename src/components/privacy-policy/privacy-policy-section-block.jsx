export function PrivacyPolicySectionBlock({ section }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28 border-b border-[rgba(27,56,104,0.35)] pb-24 last:border-0 last:pb-0 lg:scroll-mt-32"
      aria-labelledby={`${section.id}-heading`}
    >
      <div className="flex flex-col gap-0">
        <p className="text-[clamp(3rem,8vw,4.5rem)] font-bold leading-none tracking-[-0.05em] text-[#e6f1ff]">
          {section.number}
        </p>
        <div className="mt-0 border-b-2 border-[#3b82f6] pb-1 pt-2">
          <h2
            id={`${section.id}-heading`}
            className="text-[28px] font-bold leading-tight tracking-tight text-[#f2f6ff] sm:text-4xl sm:leading-[43.2px]"
          >
            {section.title}
          </h2>
        </div>
      </div>

      {section.intro ? (
        <p className="mt-8 text-xl leading-[40px] text-[#94a3b8]">{section.intro}</p>
      ) : null}

      {section.bullets?.length ? (
        <ul className="mt-8 space-y-4 border-l-4 border-[#3b82f6] pl-6">
          {section.bullets.map((line) => (
            <li key={line} className="text-xl leading-[40px] text-[#94a3b8]">
              {line}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
