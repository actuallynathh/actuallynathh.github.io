import { ShopBrowser } from "@/features/shop/components/shop-browser";
import { coinBalance } from "@/features/shop/data";
import { formatCoins } from "@/lib/utils";

export default function ShopPage() {
  return (
    <div className="flex flex-col gap-5">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight">
          In-Game Store
        </h1>
        <p className="mt-0.5 text-sm text-muted">
          Redeem your Coins for in-game currency · {formatCoins(coinBalance)}{" "}
          Coins available
        </p>
      </header>

      <ShopBrowser />
    </div>
  );
}
