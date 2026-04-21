import { navItems } from '@/components/ask-fides/constants'
import { AskFidesLogo } from '@/components/shared/ask-fides-logo'

function NavbarLogo() {
  return (
    <AskFidesLogo className="h-7 w-auto lg:h-8" />
  )
}

export function Navbar() {
  return (
    <header className="relative border-b border-[rgba(56,85,139,0.5)] bg-[#071a34]">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between gap-4 px-4 sm:h-[70px] sm:px-6 lg:px-7">
        <NavbarLogo />
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-[#d5ddf2] transition-colors hover:text-white lg:text-base"
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="h-9 shrink-0 rounded-[8px] border border-[#3a6ff2] bg-gradient-to-b from-[#3f84ff] to-[#3a6ef4] px-3 text-xs font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_6px_14px_rgba(40,86,191,0.35)] transition-all hover:brightness-110 sm:px-[18px]">
          Login
        </button>
      </div>
    </header>
  )
}
