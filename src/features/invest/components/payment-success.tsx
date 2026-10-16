import Link from "next/link";
import { CheckIcon, ChevronLeftIcon } from "@/components/icons";
import { buttonClass } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { routes } from "@/lib/routes";

/** Confirmation screen shown after a simulated buy or sell is filled. */
export function PaymentSuccess({
  mode,
  symbol,
  units,
  total,
}: {
  mode?: string;
  symbol?: string;
  units?: string;
  total?: string;
}) {
  const isSell = mode === "sell";
  const action = isSell ? "sold" : "bought";

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
          Payment Successful
        </h1>

        <p className="max-w-md text-sm text-muted">
          {symbol && units
            ? `Your simulated order is filled: you ${action} ${units} ${symbol}.`
            : "Your simulated order is filled."}
          {total ? ` Total ${total} Coins.` : ""}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link href={routes.invest} className={buttonClass("primary", "md")}>
            Back to market
          </Link>
          <Link href={routes.dashboard} className={buttonClass("outline", "md")}>
            Back to dashboard
          </Link>
        </div>
      </Card>
    </div>
  );
}
