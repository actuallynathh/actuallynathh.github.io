"use client";

import { useMemo, useState } from "react";
import { SearchIcon } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/features/shop/components/product-card";
import { products, productTitle } from "@/features/shop/data";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  ...Array.from(new Set(products.map((product) => product.game))),
];

export function ShopBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const search = query.trim().toLowerCase();

  const results = useMemo(
    () =>
      products.filter((product) => {
        if (category !== "All" && product.game !== category) return false;
        if (!search) return true;
        return (
          product.game.toLowerCase().includes(search) ||
          product.currency.toLowerCase().includes(search) ||
          productTitle(product).toLowerCase().includes(search)
        );
      }),
    [search, category],
  );

  return (
    <div className="flex flex-col gap-5">
      <Input
        name="game-search"
        type="search"
        placeholder="Search for games or currency…"
        aria-label="Search for games or currency"
        leading={<SearchIcon className="size-5" />}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {categories.map((item) => {
          const active = category === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => setCategory(item)}
              className={cn(
                "shrink-0 rounded-2xl border px-3.5 py-2 text-sm font-semibold transition-colors",
                active
                  ? "border-primary bg-primary-soft text-primary-ink"
                  : "border-border bg-card text-muted hover:text-foreground",
              )}
            >
              {item}
            </button>
          );
        })}
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {results.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p className="py-10 text-center text-sm text-muted">
          No games match “{query}”.
        </p>
      )}
    </div>
  );
}
