import type { Metadata } from "next";
import { PremiumPlans } from "@/features/premium/components/premium-plans";

export const metadata: Metadata = {
  title: "XPVest Premium",
};

export default function PremiumPage() {
  return <PremiumPlans />;
}
