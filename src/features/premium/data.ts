import type { PlanId } from "@/components/premium/premium-provider";

export type Plan = {
  id: PlanId;
  name: string;
  price: string;
  cadence: string;
  note: string;
  /** Discount chip shown on the yearly plan. */
  badge?: string;
  highlight?: boolean;
};

/**
 * Subscription options. Prices are placeholders for the simulated billing
 * flow — adjust them here and both the card and the copy follow.
 */
export const plans: Plan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: "Rp 29.000",
    cadence: "per month",
    note: "Billed monthly. Cancel whenever you like.",
  },
  {
    id: "yearly",
    name: "Yearly",
    price: "Rp 249.000",
    cadence: "per year",
    note: "One payment a year, about two months free.",
    badge: "Save 28%",
    highlight: true,
  },
];

export function getPlan(id: PlanId): Plan | undefined {
  return plans.find((plan) => plan.id === id);
}

export const premiumBenefits = [
  {
    title: "1:1 expert chat",
    description:
      "Ask verified investors and traders your questions directly, any time.",
  },
  {
    title: "Exclusive insights",
    description:
      "Market notes and simulator tips you won't find in the public forum.",
  },
  {
    title: "Priority answers",
    description: "Your questions jump the queue with every expert.",
  },
];
