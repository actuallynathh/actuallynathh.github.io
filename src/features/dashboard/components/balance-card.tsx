import Link from "next/link";
import { SendIcon, WalletIcon } from "@/components/icons";
import { buttonClass } from "@/components/ui/button";
import { formatCoins, formatDelta } from "@/lib/utils";
import { wallet } from "@/features/dashboard/data";

export function BalanceCard() {
  return (
    <section className="relative overflow-hidden rounded-card bg-linear-to-br from-primary to-primary-strong p-6 text-on-primary shadow-[0_18px_40px_-24px_var(--primary)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-16 size-52 rounded-full bg-white/15 blur-2xl"
      />
      <div className="relative">
        <div className="flex items-center gap-2 text-sm font-medium text-on-primary/80">
          <WalletIcon className="size-4" />
          Total Balance
        </div>

        <div className="mt-3 flex flex-wrap items-end gap-x-3 gap-y-1">
          <p className="text-4xl font-extrabold tracking-tight">
            {formatCoins(wallet.balance)}
          </p>
          <span className="pb-1 text-base font-semibold text-on-primary/85">
            Coins
          </span>
        </div>

        <div className="mt-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold">
            +{wallet.changePercent}% ({formatDelta(wallet.changeCoins)} coins)
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/wallet/send"
            className={buttonClass(
              "outline",
              "md",
              "border-transparent bg-white text-primary-ink hover:bg-white/90",
            )}
          >
            <SendIcon className="size-4" />
            Send
          </Link>
          <Link
            href="/wallet/receive"
            className={buttonClass(
              "ghost",
              "md",
              "border border-white/40 text-on-primary hover:bg-white/15 hover:text-on-primary",
            )}
          >
            Receive
          </Link>
        </div>
      </div>
    </section>
  );
}
