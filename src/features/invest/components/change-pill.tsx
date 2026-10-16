import { ArrowDownLeftIcon, ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

/** Small green/red pill showing a percentage move. */
export function ChangePill({
  percent,
  className,
}: {
  percent: number;
  className?: string;
}) {
  const positive = percent >= 0;
  const Icon = positive ? ArrowUpRightIcon : ArrowDownLeftIcon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums",
        positive
          ? "bg-primary-soft text-primary-ink"
          : "bg-danger-soft text-danger",
        className,
      )}
    >
      <Icon className="size-3.5" />
      {positive ? "+" : "-"}
      {Math.abs(percent).toFixed(2)}%
    </span>
  );
}
