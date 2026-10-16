import type { Metadata } from "next";
import { ExpertList } from "@/features/community/components/expert-list";
import { PremiumGate } from "@/features/community/components/premium-gate";

export const metadata: Metadata = {
  title: "Choose an Expert — XPVest",
};

export default function ExpertsPage() {
  return (
    <PremiumGate>
      <ExpertList />
    </PremiumGate>
  );
}
