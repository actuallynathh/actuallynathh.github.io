"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronLeftIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  coinBalance,
  productTitle,
  type ShopProduct,
} from "@/features/shop/data";
import { routes } from "@/lib/routes";
import { formatCoins } from "@/lib/utils";

/** Username entry + transaction summary for redeeming a game-currency bundle. */
export function CheckoutForm({ product }: { product: ShopProduct }) {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const remaining = coinBalance - product.price;
  const affordable = remaining >= 0;
  const handle = username.trim().replace(/^@+/, "");
  const canSubmit = affordable && handle.length >= 3;

  function submit() {
    if (!canSubmit) return;
    const params = new URLSearchParams({
      slug: product.slug,
      handle,
    });
    router.push(`${routes.shopSuccess}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col gap-5">
      <Link
        href={routes.shop}
        className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-foreground"
      >
        <ChevronLeftIcon className="size-4" />
        Game Currency Shop
      </Link>

      <header>
        <h1 className="text-2xl font-extrabold tracking-tight">
          {productTitle(product)}
        </h1>
        <p className="mt-0.5 text-sm text-muted">
          {product.game} · {formatCoins(product.price)} Coins
        </p>
      </header>

      <Card>
        <div className="flex items-center gap-3">
          <span
            className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl text-xs font-extrabold uppercase tracking-tight text-white"
            style={{ backgroundColor: product.accent }}
          >
            {product.short}
          </span>
          <div className="min-w-0">
            <p className="truncate font-semibold">{productTitle(product)}</p>
            <p className="text-xs text-muted">
              Price: {formatCoins(product.price)} Coins
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-base font-semibold tracking-tight">
          Enter Username
        </h2>
        <p className="mt-1 text-xs text-muted">
          To deliver your {product.game} currency we need your {product.game}{" "}
          username. For example: @kimberly13
        </p>

        <div className="mt-4">
          <Input
            label={`${product.game} username`}
            name="game-username"
            placeholder="@kimberly13"
            autoComplete="off"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
      </Card>

      <Card>
        <h2 className="text-base font-semibold tracking-tight">
          Your Transaction
        </h2>

        <dl className="mt-4 flex flex-col gap-3 text-sm">
          <Row
            label="Total Balance"
            value={`${formatCoins(coinBalance)} Coins`}
          />
          <Row label="Amount" value={`${formatCoins(product.price)} Coins`} />
          <div className="flex items-center justify-between border-t border-border pt-3">
            <dt className="font-semibold">Remaining</dt>
            <dd
              className={
                affordable
                  ? "text-base font-extrabold tabular-nums"
                  : "text-base font-extrabold tabular-nums text-danger"
              }
            >
              {formatCoins(remaining)} Coins
            </dd>
          </div>
        </dl>

        {!affordable ? (
          <p className="mt-3 text-xs font-semibold text-danger">
            You need {formatCoins(-remaining)} more Coins for this item.
          </p>
        ) : null}
      </Card>

      <Button
        size="lg"
        variant="primary"
        className="w-full"
        disabled={!canSubmit}
        onClick={submit}
      >
        Buy Now
      </Button>

      <p className="text-center text-xs text-muted">
        Redemptions are simulated — no real money is involved.
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
