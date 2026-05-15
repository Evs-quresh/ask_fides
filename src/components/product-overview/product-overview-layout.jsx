import { cn } from '@/lib/utils'

/** Shared horizontal gutter + content width for Product Overview (matches practitioners marketing). */
export const poOuterX = 'px-4 sm:px-6 lg:px-8'

export const poInner = 'mx-auto w-full max-w-[1280px]'

/** Default vertical rhythm between major bands. */
export const poSectionY = 'py-16 sm:py-20 lg:py-24'

/**
 * Full-bleed section on `#020617` — avoids SectionShell navy/deep tones so bands align with Figma.
 */
export function ProductOverviewSection({
  children,
  className,
  innerClassName,
  /** Omit top rule when the previous section already ends with a bottom border (e.g. hero → highlights). */
  suppressTopBorder,
  /** Optional bottom divider between bands. */
  borderBottom,
  /** For radial overlays (closing). */
  relative,
  ...rest
}) {
  return (
    <section
      className={cn(
        poOuterX,
        poSectionY,
        'bg-[#020617] text-slate-100',
        !suppressTopBorder && 'border-t border-white/[0.06]',
        borderBottom && 'border-b border-white/[0.06]',
        relative && 'relative overflow-hidden',
        className,
      )}
      {...rest}
    >
      <div className={cn(poInner, innerClassName)}>{children}</div>
    </section>
  )
}
