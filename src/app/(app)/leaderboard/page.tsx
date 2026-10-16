import { Card, CardHeader } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { LeaderboardList } from "@/features/leaderboard/components/leaderboard-list";
import { leaderboard } from "@/features/leaderboard/data";

export default function LeaderboardPage() {
  const podium = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  return (
    <div className="flex flex-col gap-5">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight">
          Weekly Leaderboard
        </h1>
        <p className="mt-0.5 text-sm text-muted">
          Top players this week. Earn points by learning, investing and
          referring friends.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        {podium.map((player, index) => (
          <Card
            key={player.handle}
            className={
              index === 1
                ? "border-primary/40 bg-primary-soft text-center"
                : "text-center"
            }
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wide text-muted">
                #{player.rank}
              </span>
              <Avatar name={player.name} size="lg" />
              <p className="text-sm font-semibold">{player.name}</p>
              <p className="text-xs text-muted">{player.handle}</p>
              <p className="text-lg font-extrabold tabular-nums text-primary-ink">
                {new Intl.NumberFormat("id-ID").format(player.points)}
                <span className="ml-1 text-xs font-medium text-muted">Pts</span>
              </p>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader title="Full ranking" subtitle="Top 10 players this week" />
        <LeaderboardList players={leaderboard} />
        <p className="mt-4 text-xs text-muted">
          {rest.length} more players ranked below.
        </p>
      </Card>
    </div>
  );
}
