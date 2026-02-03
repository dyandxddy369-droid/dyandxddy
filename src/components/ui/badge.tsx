import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const styles = {
    default: "bg-foreground text-background",
    accent: "bg-emerald-500 text-black",
    outline: "border border-border",
  } as const;
  return <span className={cn("inline-flex items-center rounded-md px-2 py-1 text-xs font-medium", styles[variant], className)} {...props} />;
}
