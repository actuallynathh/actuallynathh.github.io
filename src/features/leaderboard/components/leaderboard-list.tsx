import { cn } from "@/lib/utils";
import type { Player } from "@/features/leaderboard/data";

const medalStyles: Record<number, string> = {
  1: "bg-warning/20 text-warning",
  2: "bg-muted/15 text-muted",
  3: "bg-[#c87838]/15 text-[#c87838]",
};

/** Shared ranking list used on the dashboard (top 3) and leaderboard page. */
export function LeaderboardList({
  players,
  className,
}: {
  players: Player[];
  className?: string;
}) {
  return (
    <ol className={cn("flex flex-col gap-1", className)}>
      {players.map((player) => (
        <li
          key={player.handle}
          className="flex items-center gap-3 rounded-2xl px-2 py-2 transition-colors hover:bg-input"
        >
          <span
            className={cn(
              "inline-flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold",
              medalStyles[player.rank] ?? "bg-input text-muted",
            )}
          >
            {player.rank}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold">
              {player.name}
            </span>
            <span className="block truncate text-xs text-muted">
              {player.handle}
            </span>
          </span>
          <span className="shrink-0 text-right text-sm font-semibold tabular-nums">
            {new Intl.NumberFormat("id-ID").format(player.points)}
            <span className="ml-1 text-xs font-medium text-muted">Pts</span>
          </span>
        </li>
      ))}
    </ol>
  );
}
