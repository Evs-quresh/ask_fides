import { FileText, FileUp, ListX } from 'lucide-react'

import { workflowSteps } from '@/components/ask-fides/constants'

const iconMap = {
  upload: FileUp,
  contradictions: ListX,
  export: FileText,
}

function StepIcon({ icon }) {
  const Icon = iconMap[icon] ?? FileText

  return (
    <div className="relative z-10 flex h-[78px] w-[78px] items-center justify-center rounded-full border border-[rgba(63,114,255,0.55)] bg-[rgba(12,36,75,0.95)] shadow-[0_0_0_2px_rgba(21,49,96,0.45),0_0_28px_rgba(49,99,247,0.18)]">
      <Icon size={28} strokeWidth={1.9} className="text-[rgba(206,220,248,0.82)]" />
    </div>
  )
}

export function HowItWorksSection() {
  return (
    <section className="relative border-b border-[rgba(27,56,104,0.5)] bg-[#071a34] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-center text-[34px] font-semibold tracking-[-0.4px] text-[#f2f6ff] sm:text-[40px] lg:text-[46px]">
          How Ask Fides Works
        </h2>
        <p className="mx-auto mt-5 max-w-[760px] text-center text-[17px] font-medium leading-[1.45] tracking-[0.1px] text-[#b9c6e0]">
          A streamlined workflow designed for high-stakes litigation and research. From
          query to actionable strategy in three precise steps.
        </p>

        <div className="relative mt-12 sm:mt-14">
          <div className="absolute left-0 right-0 top-[39px] hidden h-[1px] bg-gradient-to-r from-transparent via-[rgba(55,99,192,0.55)] to-transparent md:block" />
          <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">
            {workflowSteps.map((step) => (
              <article key={step.title} className="flex flex-col items-center text-center">
                <StepIcon icon={step.icon} />
                <h3 className="mt-5 text-[30px] font-semibold tracking-[-0.2px] text-[#f2f6ff] sm:text-[40px]">
                  <span className="align-middle text-[24px] sm:text-[31px]">{step.title}</span>
                </h3>
                <p className="mt-3 max-w-[340px] text-[16px] font-medium leading-[1.45] text-[#9facca]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
