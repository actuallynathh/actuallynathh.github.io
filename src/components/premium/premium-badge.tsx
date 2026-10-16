"use client";

import { LockIcon } from "@/components/icons";
import { usePremium } from "@/components/premium/premium-provider";

/** Shows a "Premium" lock chip — only while the account is on the basic plan. */
export function PremiumBadge() {
  const { isPremium } = usePremium();

  if (isPremium) return null;

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary-ink">
      <LockIcon className="size-3" />
      Premium
    </span>
  );
}
