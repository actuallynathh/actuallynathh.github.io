"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CheckIcon,
  ChevronLeftIcon,
  MessageIcon,
  SparklesIcon,
  TrendUpIcon,
} from "@/components/icons";
import {
  usePremium,
  type PlanId,
} from "@/components/premium/premium-provider";
import { Button, buttonClass } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getPlan, plans, premiumBenefits } from "@/features/premium/data";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const benefitIcons = [MessageIcon, SparklesIcon, TrendUpIcon];

export function PremiumPlans() {
  const { isPremium, plan, subscribe, cancel } = usePremium();
  const [selected, setSelected] = useState<PlanId>("yearly");

  const activePlan = plan ? getPlan(plan) : undefined;
  const chosen = getPlan(selected);

  return (
    <div className="flex flex-col gap-5">
      <Link
        href={routes.profile}
        className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-foreground"
      >
        <ChevronLeftIcon className="size-4" />
        Profile
      </Link>

      {isPremium && activePlan ? (
        <>
          <Card className="flex flex-col items-center gap-3 py-12 text-center">
            <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary-soft text-primary-ink">
              <SparklesIcon className="size-8" />
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight">
              You&apos;re Premium
            </h1>
            <p className="text-sm text-muted">
              <span className="font-semibold text-foreground">
                {activePlan.name}
              </span>{" "}
              · {activePlan.price} {activePlan.cadence}
            </p>
            <p className="max-w-md text-sm text-muted">
              Expert Chat is unlocked for this account. The Community Forum stays
              open to everyone.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link
                href={routes.experts}
                className={buttonClass("primary", "md")}
              >
                Chat with an expert
              </Link>
              <Button variant="outline" onClick={cancel}>
                Cancel premium
              </Button>
            </div>
          </Card>

          <p className="text-center text-xs text-muted">
            Membership is simulated and stored in this browser only.
          </p>
        </>
      ) : (
        <>
          <header>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-ink">
              Premium
            </p>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight">
              XPVest Premium
            </h1>
            <p className="mt-2 text-sm text-muted">
              Unlock 1:1 chat with finance experts. The Community Forum stays
              free for everyone.
            </p>
          </header>

          <Card className="flex flex-col gap-4">
            {premiumBenefits.map((benefit, index) => {
              const Icon = benefitIcons[index] ?? SparklesIcon;
              return (
                <div key={benefit.title} className="flex items-start gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary-ink">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{benefit.title}</p>
                    <p className="mt-0.5 text-xs text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {plans.map((option) => {
              const active = selected === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(option.id)}
                  className={cn(
                    "relative rounded-card border bg-card p-5 text-left transition-colors",
                    active
                      ? "border-primary ring-2 ring-primary/25"
                      : "border-border hover:border-primary/40",
                  )}
                >
                  {option.badge ? (
                    <span className="absolute right-4 top-4 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary-ink">
                      {option.badge}
                    </span>
                  ) : null}
                  <p className="text-sm font-semibold">{option.name}</p>
                  <p className="mt-2 text-2xl font-extrabold tracking-tight">
                    {option.price}
                  </p>
                  <p className="text-xs text-muted">{option.cadence}</p>
                  <p className="mt-3 text-xs text-muted">{option.note}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold">
                    <span
                      className={cn(
                        "inline-flex size-5 items-center justify-center rounded-full border",
                        active
                          ? "border-primary bg-primary text-on-primary"
                          : "border-border",
                      )}
                    >
                      {active ? <CheckIcon className="size-3" /> : null}
                    </span>
                    {active ? "Selected" : "Select"}
                  </span>
                </button>
              );
            })}
          </div>

          <Button
            size="lg"
            className="w-full"
            onClick={() => subscribe(selected)}
          >
            <SparklesIcon className="size-4" />
            Subscribe — {chosen?.price} {chosen?.cadence}
          </Button>

          <p className="text-center text-xs text-muted">
            No payment is taken. Subscribing flips the simulated Premium flag in
            this browser, and you can cancel from your Profile at any time.
          </p>
        </>
      )}
    </div>
  );
}
