"use client";

import Link from "next/link";
import { ChevronLeftIcon, LockIcon, SparklesIcon } from "@/components/icons";
import { usePremium } from "@/components/premium/premium-provider";
import { buttonClass } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { routes } from "@/lib/routes";

const backLinkClass =
  "inline-flex w-fit items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-foreground";

/**
 * Premium-only wrapper. The Community Forum stays open to everyone, so this is
 * only used around Expert Chat.
 */
export function PremiumGate({ children }: { children: React.ReactNode }) {
  const { isPremium } = usePremium();

  if (isPremium) return <>{children}</>;

  return (
    <div className="flex flex-col gap-5">
      <Link href={routes.community} className={backLinkClass}>
        <ChevronLeftIcon className="size-4" />
        Community
      </Link>

      <Card className="flex flex-col items-center gap-3 py-12 text-center">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary-soft text-primary-ink">
          <LockIcon className="size-8" />
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight">
          Expert Chat is a Premium feature
        </h1>
        <p className="max-w-md text-sm text-muted">
          Subscribe to ask verified investors and traders your questions
          directly. The Community Forum stays free for everyone.
        </p>
        <Link
          href={routes.premium}
          className={buttonClass("primary", "md", "mt-4")}
        >
          <SparklesIcon className="size-4" />
          See Premium plans
        </Link>
      </Card>
    </div>
  );
}
