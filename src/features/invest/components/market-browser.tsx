"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SearchIcon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AssetRow } from "@/features/invest/components/asset-row";
import { assets, type AssetKind } from "@/features/invest/data";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const tabs: { id: AssetKind; label: string }[] = [
  { id: "stock", label: "Stocks" },
  { id: "crypto", label: "Crypto" },
];

const pinned = assets.filter((asset) => asset.pinned);

export function MarketBrowser() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<AssetKind>("stock");

  const search = query.trim().toLowerCase();

  const results = useMemo(
    () =>
      assets.filter((asset) => {
        if (asset.kind !== tab) return false;
        if (!search) return true;
        return (
          asset.symbol.toLowerCase().includes(search) ||
          asset.name.toLowerCase().includes(search)
        );
      }),
    [search, tab],
  );

  return (
    <div className="flex flex-col gap-5">
      <Input
        name="symbol-search"
        type="search"
        placeholder="Search for symbols or companies…"
        aria-label="Search for symbols or companies"
        leading={<SearchIcon className="size-5" />}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted">
          My Symbols
        </p>
        <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {pinned.map((asset) => (
            <Link
              key={asset.symbol}
              href={routes.investAsset(asset.symbol)}
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2 text-sm font-semibold transition-colors hover:border-primary/40"
            >
              <span className="inline-flex size-6 items-center justify-center rounded-lg bg-primary-soft text-[10px] font-bold text-primary-ink">
                {asset.symbol.slice(0, 2)}
              </span>
              {asset.symbol}
            </Link>
          ))}
        </div>
      </div>

      <Card className="p-3 sm:p-4">
        <div
          role="tablist"
          aria-label="Market type"
          className="flex gap-1 rounded-2xl bg-input p-1"
        >
          {tabs.map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setTab(item.id)}
                className={cn(
                  "flex-1 rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
                  active
                    ? "bg-card text-foreground shadow-[0_1px_2px_rgba(8,22,15,0.06)]"
                    : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {results.length > 0 ? (
          <div className="mt-2 flex flex-col">
            {results.map((asset) => (
              <AssetRow key={asset.symbol} asset={asset} />
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-muted">
            No symbols match “{query}”.
          </p>
        )}
      </Card>
    </div>
  );
}
