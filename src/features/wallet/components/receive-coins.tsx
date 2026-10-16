import Link from "next/link";
import { ChevronLeftIcon } from "@/components/icons";
import { buttonClass } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CopyField } from "@/components/ui/copy-field";
import { walletId } from "@/features/wallet/data";
import { routes } from "@/lib/routes";

/** Shows the account's wallet ID so friends can send Coins in. */
export function ReceiveCoins() {
  return (
    <div className="flex flex-col gap-5">
      <Link
        href={routes.dashboard}
        className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-foreground"
      >
        <ChevronLeftIcon className="size-4" />
        Dashboard
      </Link>

      <header>
        <h1 className="text-2xl font-extrabold tracking-tight">
          Receive Coins
        </h1>
        <p className="mt-0.5 text-sm text-muted">
          Share your ID with friends so they can send you Coins.
        </p>
      </header>

      <Card className="flex flex-col items-center gap-4 py-10 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-muted">
          Your ID
        </p>
        <p className="text-3xl font-extrabold tracking-[0.2em] tabular-nums">
          {walletId}
        </p>
        <CopyField value={walletId} />
      </Card>

      <Link
        href={routes.sendCoins}
        className={buttonClass("outline", "lg", "w-full")}
      >
        Send Coins instead
      </Link>

      <p className="text-center text-xs text-muted">
        Anyone with this ID can send you Coins. Transfers are simulated.
      </p>
    </div>
  );
}
