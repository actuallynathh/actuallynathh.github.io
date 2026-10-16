import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  compact = false,
  href = "/",
  inverse = false,
}: {
  className?: string;
  compact?: boolean;
  /** Where the logo points — `/` on public pages, `/dashboard` inside the app. */
  href?: string;
  /** Use on top of the green brand panel, where the default greens disappear. */
  inverse?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="XPVest home"
    >
      <span
        className={cn(
          "relative inline-flex size-9 items-center justify-center rounded-2xl",
          inverse
            ? "bg-white text-primary-ink"
            : "bg-primary text-on-primary shadow-[0_8px_18px_-8px_var(--primary)]",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 6l7 8 7-8" />
          <path d="M12 14v5" />
        </svg>
      </span>
      {!compact ? (
        <span
          className={cn(
            "text-lg font-extrabold tracking-tight",
            inverse ? "text-on-primary" : "text-foreground",
          )}
        >
          XP
          <span className={inverse ? "text-on-primary/75" : "text-primary-ink"}>
            Vest
          </span>
        </span>
      ) : null}
    </Link>
  );
}
