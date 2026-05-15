import * as React from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-md text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-[#3b82f6] text-white shadow-[0_20px_25px_-5px_rgba(30,58,138,0.2),0_8px_10px_-6px_rgba(30,58,138,0.2)] hover:bg-[#2563eb]',
        secondary:
          'border border-[#233554] bg-[#112240] text-white hover:bg-[#162a4c]',
        /** Dark hero — white outline CTA */
        outlineLight:
          'border border-white/70 bg-transparent text-white shadow-none hover:bg-white/10',
      },
      size: {
        hero: 'h-12 px-5 text-base leading-6 sm:h-14 sm:px-7 sm:text-lg sm:leading-7',
        /** Marketing / inner pages — matches compact link-style CTAs */
        compact:
          'h-11 px-5 text-sm font-semibold leading-5 shadow-[0_12px_24px_rgba(52,114,230,0.22)] sm:h-11 sm:px-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'hero',
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
