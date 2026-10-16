import Link from "next/link";
import { Card } from "@/components/ui/card";
import { productTitle, type ShopProduct } from "@/features/shop/data";
import { routes } from "@/lib/routes";
import { formatCoins } from "@/lib/utils";

/** Catalog tile for a single game-currency bundle. */
export function ProductCard({ product }: { product: ShopProduct }) {
  return (
    <Link href={routes.shopProduct(product.slug)} className="group block h-full">
      <Card className="flex h-full flex-col gap-3 transition-colors group-hover:border-primary/40">
        <span
          className="inline-flex size-12 items-center justify-center rounded-2xl text-xs font-extrabold uppercase tracking-tight text-white"
          style={{ backgroundColor: product.accent }}
        >
          {product.short}
        </span>

        <div>
          <p className="text-base font-extrabold tracking-tight">
            {productTitle(product)}
          </p>
          <p className="text-xs text-muted">{product.game}</p>
        </div>

        <p className="mt-auto text-sm font-semibold tabular-nums text-primary-ink">
          {formatCoins(product.price)} Coins
        </p>
      </Card>
    </Link>
  );
}
