import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const magicButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-magic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        magic: "bg-primary text-primary-foreground shadow-magic hover:shadow-glow hover:scale-105 active:scale-95",
        theatrical: "bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-glow transform hover:-translate-y-1",
        elegant: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        outline: "border border-primary/50 bg-transparent hover:bg-primary/10 hover:border-primary"
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-12 text-lg"
      },
    },
    defaultVariants: {
      variant: "magic",
      size: "default",
    },
  }
)

export interface MagicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof magicButtonVariants> {
  asChild?: boolean
}

const MagicButton = React.forwardRef<HTMLButtonElement, MagicButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(magicButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
MagicButton.displayName = "MagicButton"

export { MagicButton, magicButtonVariants }