import { ArrowRight, Bell, Database, Search, Wifi } from 'lucide-react'

import { mobileAlerts, mobileFeatureBullets } from '@/components/ask-fides/constants'

function MobileAlertCard({ alert }) {
  const labelColor = {
    alert: 'text-[#56a0ff]',
    success: 'text-[#42d491]',
    info: 'text-[#4f9bff]',
  }[alert.variant]

  return (
    <div className="rounded-[6px] border border-[rgba(34,71,126,0.75)] bg-[#0c1e3b] px-3 py-2.5">
      <div className="flex items-center justify-between">
        <span className={`text-[9px] font-semibold tracking-[0.25px] ${labelColor}`}>{alert.label}</span>
        <span className="text-[8px] text-[#8398bf]">{alert.time}</span>
      </div>
      <p className="mt-1.5 text-[10px] leading-[1.35] text-[#f2f7ff]">{alert.title}</p>
    </div>
  )
}

function MobileMockup() {
  return (
    <div className="relative w-full max-w-[370px]">
      <div className="absolute -bottom-3 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full bg-[rgba(51,122,255,0.28)] blur-2xl" />
      <div className="relative rounded-[6px] border border-[rgba(35,72,126,0.85)] bg-[#081a34] p-3 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
        <div className="mb-3 flex items-center justify-between border-b border-[rgba(33,67,118,0.65)] pb-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-[#3f89ff] text-[11px] font-semibold text-white">AF</span>
            <span className="text-base font-semibold text-[#ecf3ff] sm:text-lg">Ask Fides Mobile</span>
          </div>
          <Wifi size={14} className="text-[#7b92bc]" />
        </div>

        <div className="space-y-2.5">
          {mobileAlerts.map((item) => (
            <MobileAlertCard key={item.label} alert={item} />
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-[rgba(33,67,118,0.65)] px-2 pt-2 text-[#7390bc]">
          <Search size={12} />
          <Bell size={12} />
          <div className="h-5 w-5 rounded-full bg-[#475b7f]" />
        </div>
      </div>
    </div>
  )
}

export function MobileCommandSection() {
  return (
    <section className="border-b border-[rgba(27,56,104,0.45)] bg-[#071a34] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto rounded-[6px] border border-[rgba(39,73,126,0.7)] bg-[#10284d] px-4 py-8 sm:px-6 sm:py-10 lg:max-w-[1280px] lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(300px,380px)_minmax(0,1fr)] lg:gap-16">
          <div className="flex justify-center">
            <MobileMockup />
          </div>

          <div className="max-w-[520px]">
            <span className="inline-flex rounded-[3px] border border-[rgba(45,91,168,0.55)] bg-[rgba(13,38,79,0.8)] px-2 py-1 text-[10px] font-semibold tracking-[0.4px] text-[#69a3ff]">
              MOBILE COMMAND
            </span>

            <h3 className="mt-4 text-[34px] font-semibold leading-[1.12] tracking-[-0.35px] text-[#f0f5ff] sm:text-[40px] lg:text-[46px]">
              Advanced Research Anywhere.
            </h3>

            <p className="mt-4 text-[17px] leading-[1.6] text-[#b3c0db]">
              Harness AI-driven research to instantly access a global database of case law.
              Build stronger arguments and make faster decisions from your dashboard or mobile
              device.
            </p>

            <div className="mt-6 space-y-3">
              {mobileFeatureBullets.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[6px] border border-[rgba(35,69,120,0.7)] bg-[#0b2346] px-3.5 py-3"
                >
                  {index === 0 ? (
                    <Database size={14} className="text-[#4b95ff]" />
                  ) : (
                    <Bell size={14} className="text-[#4b95ff]" />
                  )}
                  <span className="text-[15px] text-[#ebf3ff] sm:text-[16px]">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold tracking-[0.15px] text-[#3495ff] transition-colors hover:text-[#66adff]"
            >
              <span>EXPLORE MOBILE FEATURES</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
