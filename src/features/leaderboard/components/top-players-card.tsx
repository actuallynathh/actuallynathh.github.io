import Link from "next/link";
import { Card, CardHeader } from "@/components/ui/card";
import { LeaderboardList } from "@/features/leaderboard/components/leaderboard-list";
import { leaderboard } from "@/features/leaderboard/data";

export function TopPlayersCard() {
  return (
    <Card>
      <CardHeader
        title="Weekly Top Players"
        action={
          <Link
            href="/leaderboard"
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary-ink hover:underline"
          >
            See more
          </Link>
        }
      />
      <LeaderboardList players={leaderboard.slice(0, 3)} />
    </Card>
  );
}
