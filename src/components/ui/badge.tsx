import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type BadgeTone = "success" | "danger" | "accent" | "neutral" | "warning";

const tones: Record<BadgeTone, string> = {
  success: "bg-primary-soft text-primary-ink",
  danger: "bg-danger-soft text-danger",
  accent: "bg-accent-soft text-accent",
  neutral: "bg-input text-muted",
  warning: "bg-warning/15 text-warning",
};

export function Badge({
  tone = "neutral",
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: BadgeTone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
