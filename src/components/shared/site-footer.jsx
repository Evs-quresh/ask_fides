import { Link2, Mail, Rss } from 'lucide-react'
import { AskFidesLogo } from '@/components/shared/ask-fides-logo'

const resources = ['Security & Trust', 'API Documentation', 'System Status', 'Privacy Policy']
const solutions = ['For Practitioners', 'Enterprise', 'Case Intelligence']
const company = ['About', 'Careers', 'Contact']

function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-[22px] font-semibold text-[#ecf3ff] sm:text-[25px]">
        <span className="align-middle text-[20px] sm:text-[24px]">{title}</span>
      </h4>
      <ul className="mt-3.5 space-y-2.5">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-[16px] text-[#b5c4df] transition-colors hover:text-white sm:text-[18px]">
              <span className="align-middle text-[16px] sm:text-[18px]">{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(27,56,104,0.45)] bg-[#071a34] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <AskFidesLogo className="h-8 w-auto sm:h-10" />
            <p className="mt-4 max-w-[330px] text-[15px] leading-[1.6] text-[#b5c4df] sm:text-[17px] sm:leading-[1.55]">
              The premier legal intelligence platform for the modern practitioner. Precision engineered for results.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              {[Link2, Mail, Rss].map((Icon, i) => (
                <button
                  key={i}
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-[6px] border border-[rgba(42,81,143,0.72)] bg-[#0e2649] text-[#9eb8df] transition-all hover:border-[rgba(88,130,194,0.85)] hover:text-white"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          <FooterColumn title="Resources" items={resources} />
          <FooterColumn title="Solutions" items={solutions} />
          <FooterColumn title="Company" items={company} />
        </div>

        <div className="mt-10 border-t border-[rgba(32,69,122,0.55)] pt-6">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
            <p className="max-w-[650px] text-[13px] leading-[1.5] text-[#7389b1]">
              ASK FIDES does not provide legal advice. All outputs are informational, grounded in verified sources and designed to support professional judgment.
            </p>
            <p className="text-[13px] text-[#7389b1]">© 2025 ASK FIDES. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
