"use client";

import Link from "next/link";
import { ChevronRightIcon, SparklesIcon } from "@/components/icons";
import { usePremium } from "@/components/premium/premium-provider";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

/** Profile settings row showing the current membership and linking to Premium. */
export function PremiumRow() {
  const { isPremium } = usePremium();

  return (
    <Link
      href={routes.premium}
      className="flex w-full items-center gap-3 border-b border-border px-5 py-4 text-left text-sm transition-colors hover:bg-input"
    >
      <SparklesIcon className="size-5 shrink-0 text-muted" />
      <span className="font-medium">Premium Membership</span>
      <span className="ml-auto flex items-center gap-2">
        <span
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold",
            isPremium
              ? "bg-primary-soft text-primary-ink"
              : "bg-input text-muted",
          )}
        >
          {isPremium ? "Active" : "Basic"}
        </span>
        <ChevronRightIcon className="size-5 shrink-0 text-muted" />
      </span>
    </Link>
  );
}
