import { HeroCopy } from '@/components/ask-fides/hero-copy'
import { HeroVisual } from '@/components/ask-fides/hero-visual'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[rgba(30,58,138,0.3)] bg-[#0a192f]">
      <div className="pointer-events-none absolute -right-[200px] -top-[150px] h-[600px] w-[600px] rounded-full bg-[rgba(37,99,235,0.05)] blur-[50px]" />
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <HeroCopy />
        <HeroVisual />
      </div>
    </section>
  )
}
