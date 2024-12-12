import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@components/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-caption2 font-medium font-pretendard transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300",
  {
    variants: {
      variant: {
        primary:
          "border-1 border-primary-60 border-transparent bg-primary-50 text-white hover:bg-primary-60 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80",
        secondary:
          "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        destructive:
          "border-transparent bg-red-500 text-neutral-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/80",
        outline: "text-neutral-950 dark:text-neutral-50",
      },
      size: {
        sm: "h-4 px-2",
        md: "h-5 px-3",
        lg: "h-6 px-4.5",
        xl: "h-8 px-5",
        icon: "h-5 w-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
