import { compactCoins } from "@/features/invest/data";
import { cn } from "@/lib/utils";

const W = 600;
const H = 190;

/**
 * Intraday price chart for a single asset. Colour follows the day's direction
 * so a falling asset reads red instead of green.
 */
export function PriceChart({
  values,
  labels,
  positive,
  className,
}: {
  values: number[];
  labels: string[];
  positive: boolean;
  className?: string;
}) {
  const padTop = 14;
  const padBottom = H - 14;

  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const stepX = values.length > 1 ? W / (values.length - 1) : W;

  const points = values.map((value, index) => {
    const x = index * stepX;
    const y = padBottom - ((value - min) / span) * (padBottom - padTop);
    return [x, y] as const;
  });

  const line = points
    .map(
      ([x, y], index) =>
        `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`,
    )
    .join(" ");
  const area = `${line} L ${W} ${H} L 0 ${H} Z`;

  const tone = positive ? "var(--primary)" : "var(--danger)";
  const gradientId = positive ? "priceFillUp" : "priceFillDown";

  const tickCount = 4;
  const tickValues = Array.from(
    { length: tickCount },
    (_, index) => max - (span * index) / (tickCount - 1),
  );

  const last = points[points.length - 1];

  return (
    <div className={cn("flex gap-3", className)}>
      <div className="flex flex-col justify-between py-1 text-[10px] font-medium tabular-nums text-muted">
        {tickValues.map((value) => (
          <span key={value}>{compactCoins(value)}</span>
        ))}
      </div>

      <div className="min-w-0 flex-1">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          className="h-44 w-full"
          role="img"
          aria-label={`Price chart, ${positive ? "up" : "down"} today`}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={tone} stopOpacity="0.32" />
              <stop offset="100%" stopColor={tone} stopOpacity="0" />
            </linearGradient>
          </defs>

          {[0, 1, 2, 3].map((index) => {
            const y = padTop + ((padBottom - padTop) * index) / 3;
            return (
              <line
                key={index}
                x1={0}
                x2={W}
                y1={y}
                y2={y}
                stroke="var(--border)"
                strokeWidth={1}
                strokeDasharray="4 6"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}

          <path d={area} fill={`url(#${gradientId})`} />
          <path
            d={line}
            fill="none"
            stroke={tone}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <circle
            cx={last[0]}
            cy={last[1]}
            r={4}
            fill={tone}
            stroke="var(--card)"
            strokeWidth={2.5}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="mt-2 flex justify-between text-[10px] font-medium text-muted">
          {labels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
