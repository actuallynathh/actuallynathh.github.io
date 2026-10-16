import { BalanceCard } from "@/features/dashboard/components/balance-card";
import { InvestmentGrowthCard } from "@/features/dashboard/components/investment-growth-card";
import { LearnEarnRow } from "@/features/dashboard/components/learn-earn-row";
import { ReferralCard } from "@/features/dashboard/components/referral-card";
import { TopPlayersCard } from "@/features/leaderboard/components/top-players-card";
import { currentUser } from "@/features/profile/data";

export default function DashboardPage() {
  const firstName = currentUser.name.split(" ")[0];

  return (
    <div className="flex flex-col gap-5">
      <header>
        <p className="text-sm text-muted">Good to see you, {firstName}</p>
        <h1 className="mt-0.5 text-2xl font-extrabold tracking-tight">
          Your Digital Finance Companion
        </h1>
      </header>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <BalanceCard />
          <InvestmentGrowthCard />
        </div>

        <div className="flex flex-col gap-5">
          <TopPlayersCard />
          <ReferralCard />
        </div>
      </div>

      <LearnEarnRow />
    </div>
  );
}
