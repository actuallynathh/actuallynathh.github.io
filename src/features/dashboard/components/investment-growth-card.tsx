import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";
import { Card, CardHeader } from "@/components/ui/card";
import { GrowthChart } from "@/features/dashboard/components/growth-chart";
import { growthLabels, growthSeries } from "@/features/dashboard/data";

export function InvestmentGrowthCard() {
  return (
    <Card>
      <CardHeader
        title="Investment Growth"
        subtitle="Your portfolio performance over 30 days."
        action={
          <Link
            href="/invest"
            className="inline-flex items-center gap-1 rounded-xl bg-input px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:text-foreground"
          >
            30 days
            <ChevronRightIcon className="size-3.5" />
          </Link>
        }
      />
      <GrowthChart values={growthSeries} labels={growthLabels} />
    </Card>
  );
}
