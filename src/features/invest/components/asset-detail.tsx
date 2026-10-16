import Link from "next/link";
import { ChevronLeftIcon } from "@/components/icons";
import { buttonClass } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChangePill } from "@/features/invest/components/change-pill";
import { PriceChart } from "@/features/invest/components/price-chart";
import {
  changePercent,
  coinBalance,
  formatUnits,
  getHolding,
  intradayLabels,
  intradaySeries,
  isUp,
  type Asset,
} from "@/features/invest/data";
import { routes } from "@/lib/routes";
import { formatCoins, formatDelta } from "@/lib/utils";

/** Asset screen: today's move, intraday chart, position and trade actions. */
export function AssetDetail({ asset }: { asset: Asset }) {
  const percent = changePercent(asset);
  const up = isUp(asset);
  const holding = getHolding(asset.symbol);
  const heldValue = holding ? holding.units * asset.price : 0;

  return (
    <div className="flex flex-col gap-5">
      <Link
        href={routes.invest}
        className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-foreground"
      >
        <ChevronLeftIcon className="size-4" />
        Back to market
      </Link>

      <Card>
        <div className="flex items-center gap-3">
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-input text-xs font-bold tracking-tight">
            {asset.symbol.slice(0, 2)}
          </span>
          <div className="min-w-0">
            <h1 className="truncate text-lg font-extrabold tracking-tight">
              {asset.name}
            </h1>
            <p className="text-xs text-muted">
              {asset.symbol} ·{" "}
              {asset.kind === "crypto" ? "Cryptocurrency" : "Stock"}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-2">
          <p className="text-3xl font-extrabold tracking-tight tabular-nums">
            {formatCoins(asset.price)}
          </p>
          <span className="pb-1 text-sm font-semibold text-muted">
            Coins / {asset.symbol}
          </span>
        </div>

        <span
          className={
            up
              ? "mt-3 inline-flex items-center gap-1 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary-ink"
              : "mt-3 inline-flex items-center gap-1 rounded-full bg-danger-soft px-2.5 py-1 text-xs font-semibold text-danger"
          }
        >
          {up ? "+" : ""}
          {percent.toFixed(2)}% ({formatDelta(asset.change)} Coins) Today
        </span>

        <PriceChart
          values={intradaySeries(asset)}
          labels={intradayLabels}
          positive={up}
          className="mt-5"
        />
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        <Link
          href={routes.investBuy(asset.symbol)}
          className={buttonClass("primary", "lg", "w-full")}
        >
          Buy {asset.symbol}
        </Link>
        <Link
          href={routes.investSell(asset.symbol)}
          className={buttonClass("outline", "lg", "w-full")}
        >
          Sell {asset.symbol}
        </Link>
      </div>

      <Card>
        <h2 className="text-base font-semibold tracking-tight">
          Your position
        </h2>

        <dl className="mt-4 flex flex-col gap-3 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-muted">Coin balance</dt>
            <dd className="font-semibold tabular-nums">
              {formatCoins(coinBalance)} Coins
            </dd>
          </div>

          <div className="flex items-center justify-between">
            <dt className="text-muted">Units held</dt>
            <dd className="font-semibold tabular-nums">
              {holding ? `${formatUnits(holding.units)} ${asset.symbol}` : "—"}
            </dd>
          </div>

          <div className="flex items-center justify-between">
            <dt className="text-muted">Position value</dt>
            <dd className="font-semibold tabular-nums">
              {holding ? `${formatCoins(Math.round(heldValue))} Coins` : "—"}
            </dd>
          </div>

          <div className="flex items-center justify-between">
            <dt className="text-muted">Average buy price</dt>
            <dd className="font-semibold tabular-nums">
              {holding ? `${formatCoins(holding.avgPrice)} Coins` : "—"}
            </dd>
          </div>
        </dl>

        {holding ? (
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
            <span className="text-muted">Unrealised profit</span>
            <span className="font-semibold tabular-nums">
              <ChangePill
                percent={
                  ((asset.price - holding.avgPrice) / holding.avgPrice) * 100
                }
              />
            </span>
          </div>
        ) : (
          <p className="mt-4 border-t border-border pt-4 text-xs text-muted">
            You don&apos;t own {asset.symbol} yet. Buys are simulated — no real
            money is ever used.
          </p>
        )}
      </Card>
    </div>
  );
}
