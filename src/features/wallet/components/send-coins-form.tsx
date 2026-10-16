"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckIcon, ChevronLeftIcon, SendIcon } from "@/components/icons";
import { buttonClass, Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { wallet } from "@/features/dashboard/data";
import { quickAmounts } from "@/features/wallet/data";
import { routes } from "@/lib/routes";
import { formatCoins } from "@/lib/utils";

const MIN_ID_LENGTH = 4;

/** Transfer Coins to another account by user ID. */
export function SendCoinsForm() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [sent, setSent] = useState(false);

  const value = Number.parseInt(amount || "0", 10);
  const overBalance = value > wallet.balance;
  const canSubmit =
    recipient.length >= MIN_ID_LENGTH && value > 0 && !overBalance;

  if (sent) {
    return (
      <div className="flex flex-col gap-5">
        <BackLink />
        <Card className="flex flex-col items-center gap-3 py-12 text-center">
          <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary-soft text-primary-ink">
            <CheckIcon className="size-8" />
          </span>
          <h1 className="text-2xl font-extrabold tracking-tight">
            Coins sent
          </h1>
          <p className="max-w-md text-sm text-muted">
            You sent {formatCoins(value)} Coins to ID {recipient}. They&apos;ll
            see it in their wallet right away.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              href={routes.receiveCoins}
              className={buttonClass("primary", "md")}
            >
              Receive Coins
            </Link>
            <Link
              href={routes.dashboard}
              className={buttonClass("outline", "md")}
            >
              Back to dashboard
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <BackLink />

      <header>
        <h1 className="text-2xl font-extrabold tracking-tight">Send Coins</h1>
        <p className="mt-0.5 text-sm text-muted">
          Transfer Coins to a friend using their user ID.
        </p>
      </header>

      <Card>
        <form
          className="flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            if (canSubmit) setSent(true);
          }}
        >
          <Input
            label="Recipient's ID"
            name="recipient-id"
            inputMode="numeric"
            maxLength={12}
            placeholder="User's ID"
            value={recipient}
            onChange={(event) =>
              setRecipient(event.target.value.replace(/\D/g, ""))
            }
          />

          <div>
            <Input
              label="Amount"
              name="amount"
              inputMode="numeric"
              maxLength={12}
              placeholder="0"
              value={amount ? formatCoins(value) : ""}
              onChange={(event) =>
                setAmount(event.target.value.replace(/\D/g, ""))
              }
              hint={`Balance: ${formatCoins(wallet.balance)} Coins`}
            />

            <div className="mt-3 flex gap-2">
              {quickAmounts.map((quick) => (
                <button
                  key={quick}
                  type="button"
                  onClick={() => setAmount(String(quick))}
                  className="flex-1 rounded-xl bg-input px-3 py-2 text-xs font-semibold text-muted transition-colors hover:text-foreground"
                >
                  {formatCoins(quick)}
                </button>
              ))}
            </div>
          </div>

          {overBalance ? (
            <p className="text-xs font-semibold text-danger">
              That&apos;s more Coins than you have.
            </p>
          ) : null}

          <Button type="submit" size="lg" className="w-full" disabled={!canSubmit}>
            <SendIcon className="size-4" />
            Send Coins
          </Button>
        </form>
      </Card>

      <p className="text-center text-xs text-muted">
        Transfers are simulated — no real money leaves your account.
      </p>
    </div>
  );
}

function BackLink() {
  return (
    <Link
      href={routes.dashboard}
      className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-foreground"
    >
      <ChevronLeftIcon className="size-4" />
      Dashboard
    </Link>
  );
}
