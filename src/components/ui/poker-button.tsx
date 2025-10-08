import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const pokerButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative",
  {
    variants: {
      suit: {
        heart: "bg-primary text-white hover:bg-primary/90 hover:scale-105 hover:shadow-lg active:scale-95",
        diamond: "bg-primary text-white hover:bg-primary/90 hover:scale-105 hover:shadow-lg active:scale-95",
        spade: "bg-foreground text-white hover:bg-foreground/90 hover:scale-105 hover:shadow-lg active:scale-95",
        club: "bg-foreground text-white hover:bg-foreground/90 hover:scale-105 hover:shadow-lg active:scale-95",
      },
      size: {
        default: "h-10 px-6 py-2 text-sm",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-12 px-8 py-3 text-base",
        xl: "h-14 px-10 py-4 text-lg",
      },
    },
    defaultVariants: {
      suit: "heart",
      size: "default",
    },
  }
)


export interface PokerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pokerButtonVariants> {
  asChild?: boolean
}

const PokerButton = React.forwardRef<HTMLButtonElement, PokerButtonProps>(
  ({ className, suit = "heart", size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(pokerButtonVariants({ suit, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
PokerButton.displayName = "PokerButton"

export { PokerButton, pokerButtonVariants }
