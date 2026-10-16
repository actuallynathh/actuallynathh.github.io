import Link from "next/link";
import { CheckIcon, ChevronLeftIcon } from "@/components/icons";
import { buttonClass } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { productTitle, type ShopProduct } from "@/features/shop/data";
import { routes } from "@/lib/routes";
import { formatCoins } from "@/lib/utils";

/** Confirmation screen shown after a simulated redemption is completed. */
export function RedemptionSuccess({
  product,
  handle,
}: {
  product?: ShopProduct;
  handle?: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <Link
        href={routes.dashboard}
        className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-foreground"
      >
        <ChevronLeftIcon className="size-4" />
        Home Page
      </Link>

      <Card className="flex flex-col items-center gap-3 py-12 text-center">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary-soft text-primary-ink">
          <CheckIcon className="size-8" />
        </span>

        <h1 className="text-2xl font-extrabold tracking-tight">
          Redemption Successful
        </h1>

        <p className="max-w-md text-sm text-muted">
          {product
            ? `Your ${productTitle(product)} for ${product.game} is on its way${
                handle ? ` to @${handle}` : ""
              }. Check your email for the code. Total ${formatCoins(product.price)} Coins.`
            : "Your redemption is complete. Check your email for the code."}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link href={routes.shop} className={buttonClass("primary", "md")}>
            Back to shop
          </Link>
          <Link href={routes.dashboard} className={buttonClass("outline", "md")}>
            Back to dashboard
          </Link>
        </div>
      </Card>
    </div>
  );
}
