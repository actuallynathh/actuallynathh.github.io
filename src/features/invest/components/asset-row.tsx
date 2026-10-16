import Link from "next/link";
import { ChangePill } from "@/features/invest/components/change-pill";
import { changePercent, type Asset } from "@/features/invest/data";
import { routes } from "@/lib/routes";
import { formatCoins } from "@/lib/utils";

/** One row in the market list: ticker, name, price and today's move. */
export function AssetRow({ asset }: { asset: Asset }) {
  return (
    <Link
      href={routes.investAsset(asset.symbol)}
      className="flex items-center gap-3 rounded-2xl px-2 py-3 transition-colors hover:bg-input"
    >
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl bg-input text-[11px] font-bold tracking-tight text-foreground">
        {asset.symbol.slice(0, 2)}
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{asset.name}</p>
        <p className="text-xs text-muted">{asset.symbol}</p>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-1">
        <p className="text-sm font-semibold tabular-nums">
          {formatCoins(asset.price)}
        </p>
        <ChangePill percent={changePercent(asset)} />
      </div>
    </Link>
  );
}
