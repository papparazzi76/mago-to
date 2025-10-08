import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const pokerButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative",
  {
    variants: {
      suit: {
        heart: "bg-red-600 text-white hover:bg-red-700 hover:scale-105 active:scale-95",
        diamond: "bg-red-600 text-white hover:bg-red-700 hover:scale-105 active:scale-95",
        spade: "bg-black text-white hover:bg-gray-900 hover:scale-105 active:scale-95",
        club: "bg-black text-white hover:bg-gray-900 hover:scale-105 active:scale-95",
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

const getSuitPath = (suit: string) => {
  switch (suit) {
    case 'heart':
      return "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    case 'diamond':
      return "M12 2L2 12l10 10 10-10L12 2z"
    case 'spade':
      return "M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.45-.36-1.59-.55-3.07-.55-3.07S7 16.5 7 14c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.5-1.29 4.38-1.29 4.38s-.19 1.48-.55 3.07C18.13 20.14 22 16.41 22 12c0-5.52-4.48-10-10-10z"
    case 'club':
      return "M12 2C9.79 2 8 3.79 8 6c0 1.48.81 2.75 2 3.45V11c-1.93 0-3.5 1.57-3.5 3.5S8.07 18 10 18h.09c-.05.33-.09.66-.09 1 0 1.66 1.34 3 3 3s3-1.34 3-3c0-.34-.04-.67-.09-1H16c1.93 0 3.5-1.57 3.5-3.5S17.93 11 16 11V9.45c1.19-.7 2-1.97 2-3.45 0-2.21-1.79-4-4-4-1.48 0-2.75.81-3.45 2H12c-.7-1.19-1.97-2-3.45-2z"
    default:
      return ""
  }
}

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
        style={{
          clipPath: suit === 'heart' 
            ? "polygon(50% 0%, 61% 8%, 75% 8%, 84% 16%, 88% 28%, 88% 40%, 84% 52%, 75% 60%, 61% 68%, 50% 100%, 39% 68%, 25% 60%, 16% 52%, 12% 40%, 12% 28%, 16% 16%, 25% 8%, 39% 8%)"
            : suit === 'diamond'
            ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
            : suit === 'spade'
            ? "polygon(50% 0%, 65% 15%, 75% 25%, 80% 40%, 75% 55%, 65% 65%, 55% 75%, 52% 85%, 60% 90%, 60% 100%, 40% 100%, 40% 90%, 48% 85%, 45% 75%, 35% 65%, 25% 55%, 20% 40%, 25% 25%, 35% 15%)"
            : suit === 'club'
            ? "polygon(50% 10%, 60% 15%, 68% 22%, 70% 32%, 68% 42%, 60% 48%, 55% 52%, 60% 58%, 68% 64%, 70% 74%, 68% 84%, 60% 90%, 55% 95%, 60% 100%, 40% 100%, 45% 95%, 40% 90%, 32% 84%, 30% 74%, 32% 64%, 40% 58%, 45% 52%, 40% 48%, 32% 42%, 30% 32%, 32% 22%, 40% 15%)"
            : undefined
        }}
      >
        {children}
      </Comp>
    )
  }
)
PokerButton.displayName = "PokerButton"

export { PokerButton, pokerButtonVariants }
