"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronLeftIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  changePercent,
  coinBalance,
  formatUnits,
  getHolding,
  type Asset,
} from "@/features/invest/data";
import { routes } from "@/lib/routes";
import { formatCoins } from "@/lib/utils";

const FEE_RATE = 0.005;

/** Only digits and a single decimal point reach the field state. */
function sanitize(value: string): string {
  const cleaned = value.replace(/[^0-9.]/g, "");
  const [head, ...rest] = cleaned.split(".");
  return rest.length > 0 ? `${head}.${rest.join("")}` : head;
}

/**
 * Buy and sell ticket. Buys are entered as Coins to spend, sells as units of
 * the asset to give up — mirroring the design's two tickets.
 */
export function TradeForm({
  asset,
  mode,
}: {
  asset: Asset;
  mode: "buy" | "sell";
}) {
  const router = useRouter();
  const [raw, setRaw] = useState("");

  const isBuy = mode === "buy";
  const holding = getHolding(asset.symbol);
  const heldUnits = holding?.units ?? 0;

  const amount = Number.parseFloat(raw) || 0;
  const gross = isBuy ? amount : amount * asset.price;
  const units = isBuy ? amount / asset.price : amount;
  const fee = gross * FEE_RATE;
  const total = isBuy ? gross + fee : gross - fee;

  const limit = isBuy ? coinBalance : heldUnits;
  const overLimit = amount > limit;
  const canSubmit = amount > 0 && !overLimit;

  const maxOut = isBuy
    ? String(Math.floor(coinBalance / (1 + FEE_RATE)))
    : String(heldUnits);

  function submit() {
    if (!canSubmit) return;
    const params = new URLSearchParams({
      mode,
      symbol: asset.symbol,
      units: formatUnits(units),
      total: formatCoins(Math.round(total)),
    });
    router.push(`${routes.investSuccess}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col gap-5">
      <Link
        href={routes.investAsset(asset.symbol)}
        className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-foreground"
      >
        <ChevronLeftIcon className="size-4" />
        {isBuy ? "Buy" : "Sell"} {asset.symbol}
      </Link>

      <header>
        <h1 className="text-2xl font-extrabold tracking-tight">
          {isBuy ? "Buy" : "Sell"} {asset.symbol}
        </h1>
        <p className="mt-0.5 text-sm text-muted">
          {asset.name} · {formatCoins(asset.price)} Coins per {asset.symbol} ·{" "}
          {changePercent(asset) >= 0 ? "+" : ""}
          {changePercent(asset).toFixed(2)}% today
        </p>
      </header>

      <Card>
        <Input
          label={isBuy ? "Amount to spend (Coins)" : `Amount to sell (${asset.symbol})`}
          name="amount"
          inputMode="decimal"
          placeholder="0"
          value={raw}
          onChange={(event) => setRaw(sanitize(event.target.value))}
          hint={
            isBuy
              ? `Balance: ${formatCoins(coinBalance)} Coins`
              : `You have: ${formatUnits(heldUnits)} ${asset.symbol}`
          }
        />

        <div className="mt-3 flex flex-wrap gap-2">
          {[0.25, 0.5, 1].map((ratio) => {
            const value = Number.parseFloat(maxOut) * ratio;
            return (
              <button
                key={ratio}
                type="button"
                onClick={() =>
                  setRaw(
                    isBuy
                      ? String(Math.floor(value))
                      : String(Number(value.toFixed(4))),
                  )
                }
                className="rounded-xl bg-input px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:text-foreground"
              >
                {ratio === 1 ? "Max" : `${ratio * 100}%`}
              </button>
            );
          })}
        </div>

        {overLimit ? (
          <p className="mt-3 text-xs font-semibold text-danger">
            {isBuy
              ? "That's more Coins than you have."
              : `You only hold ${formatUnits(heldUnits)} ${asset.symbol}.`}
          </p>
        ) : null}
      </Card>

      <Card>
        <dl className="flex flex-col gap-3 text-sm">
          <Row
            label="You will get approx."
            value={
              isBuy
                ? `${formatUnits(units)} ${asset.symbol}`
                : `${formatCoins(Math.round(total))} Coins`
            }
          />
          <Row
            label="Price"
            value={`${formatCoins(asset.price)} Coins / ${asset.symbol}`}
          />
          <Row label="Fee (0.5%)" value={`${formatCoins(Math.round(fee))} Coins`} />

          <div className="flex items-center justify-between border-t border-border pt-3">
            <dt className="font-semibold">Total</dt>
            <dd className="text-base font-extrabold tabular-nums">
              {formatCoins(Math.round(total))} Coins
            </dd>
          </div>
        </dl>
      </Card>

      <Button
        size="lg"
        variant={isBuy ? "primary" : "danger"}
        className="w-full"
        disabled={!canSubmit}
        onClick={submit}
      >
        {isBuy ? "Buy Now" : "Sell Now"}
      </Button>

      <p className="text-center text-xs text-muted">
        Simulated order — no real money is involved.
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right font-semibold tabular-nums">{value}</dd>
    </div>
  );
}
