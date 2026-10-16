import { wallet } from "@/features/dashboard/data";

export type AssetKind = "stock" | "crypto";

export type Asset = {
  symbol: string;
  name: string;
  kind: AssetKind;
  /** Price in Coins for a single unit. */
  price: number;
  /** Absolute change in Coins since the previous close. */
  change: number;
  /** Shown in the "My Symbols" watchlist. */
  pinned?: boolean;
};

export const assets: Asset[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    kind: "stock",
    price: 25000,
    change: 950,
    pinned: true,
  },
  {
    symbol: "NKE",
    name: "NIKE, Inc.",
    kind: "stock",
    price: 93000,
    change: 7110,
    pinned: true,
  },
  { symbol: "TSLA", name: "Tesla, Inc.", kind: "stock", price: 19940, change: 880 },
  {
    symbol: "JKSE",
    name: "IDX Composite",
    kind: "stock",
    price: 6920,
    change: -86,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    kind: "stock",
    price: 41250,
    change: 210,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    kind: "stock",
    price: 17830,
    change: -140,
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    kind: "crypto",
    price: 70000,
    change: 2500,
    pinned: true,
  },
  { symbol: "ETH", name: "Ethereum", kind: "crypto", price: 4230, change: -113 },
  { symbol: "SOL", name: "Solana", kind: "crypto", price: 845, change: 62 },
  { symbol: "DOGE", name: "Dogecoin", kind: "crypto", price: 124, change: 9.5 },
];

/** Units the simulated account already owns. */
export type Holding = { symbol: string; units: number; avgPrice: number };

export const holdings: Holding[] = [
  { symbol: "AAPL", units: 1, avgPrice: 23500 },
  { symbol: "SOL", units: 4, avgPrice: 780 },
  { symbol: "BTC", units: 0.0012, avgPrice: 68000 },
];

export const coinBalance = wallet.balance;

export const intradayLabels = [
  "9:30",
  "10:00",
  "11:00",
  "12:00",
  "1:00",
  "2:00",
  "3:00",
  "4:00",
];

export function getAsset(symbol: string): Asset | undefined {
  const key = symbol.toUpperCase();
  return assets.find((asset) => asset.symbol === key);
}

export function getHolding(symbol: string): Holding | undefined {
  const key = symbol.toUpperCase();
  return holdings.find((holding) => holding.symbol === key);
}

export function changePercent(asset: Asset): number {
  const previous = asset.price - asset.change;
  return previous === 0 ? 0 : (asset.change / previous) * 100;
}

export function isUp(asset: Asset): boolean {
  return asset.change >= 0;
}

const INTRADAY_POINTS = 32;

/**
 * Deterministic intraday curve: drifts from the previous close to the current
 * price with a small, symbol-specific wobble so the chart is stable across
 * renders.
 */
export function intradaySeries(asset: Asset): number[] {
  const start = asset.price - asset.change;
  const seed = hashSymbol(asset.symbol);
  const amplitude = asset.price * 0.004;

  return Array.from({ length: INTRADAY_POINTS }, (_, index) => {
    const progress = index / (INTRADAY_POINTS - 1);
    const drift = start + (asset.price - start) * progress;
    const wobble =
      (Math.sin(seed + index * 1.7) + Math.sin(seed * 0.5 + index * 0.9)) / 2;
    return Math.max(drift + wobble * amplitude, asset.price * 0.5);
  });
}

/** Compact axis label, e.g. 93000 -> "93k", 6920 -> "6.9k", 124 -> "124". */
export function compactCoins(value: number): string {
  if (Math.abs(value) >= 10000) return `${Math.round(value / 1000)}k`;
  if (Math.abs(value) >= 1000) return `${(value / 1000).toFixed(1)}k`;
  return `${Math.round(value)}`;
}

/** Unit amounts can be fractional for crypto, so keep up to 4 decimals. */
export function formatUnits(units: number): string {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 4 }).format(
    units,
  );
}

function hashSymbol(symbol: string): number {
  let hash = 0;
  for (let index = 0; index < symbol.length; index += 1) {
    hash = (hash * 31 + symbol.charCodeAt(index)) % 97;
  }
  return hash;
}
