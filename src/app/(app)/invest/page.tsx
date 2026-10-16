import { MarketBrowser } from "@/features/invest/components/market-browser";
import { coinBalance } from "@/features/invest/data";
import { formatCoins } from "@/lib/utils";

export default function InvestPage() {
  return (
    <div className="flex flex-col gap-5">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight">Invest</h1>
        <p className="mt-0.5 text-sm text-muted">
          Market open · simulated prices · {formatCoins(coinBalance)} Coins
          available
        </p>
      </header>

      <MarketBrowser />
    </div>
  );
}
