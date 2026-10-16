"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckIcon, ChevronLeftIcon, ShieldIcon } from "@/components/icons";
import { buttonClass, Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SecureField } from "@/features/profile/components/secure-field";
import { routes } from "@/lib/routes";

const PIN_LENGTH = 4;

export function SecurityPinForm() {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [done, setDone] = useState(false);

  const canSubmit =
    next.length === PIN_LENGTH &&
    confirm === next &&
    (current.length === 0 || current.length === PIN_LENGTH);

  const error =
    next.length === PIN_LENGTH && next === current
      ? "Choose a PIN different from your current one."
      : next.length === PIN_LENGTH && confirm.length === PIN_LENGTH && confirm !== next
        ? "PINs don't match."
        : confirm.length === PIN_LENGTH && next.length < PIN_LENGTH
          ? `Your new PIN must be ${PIN_LENGTH} digits.`
          : null;

  if (done) {
    return (
      <div className="flex flex-col gap-5">
        <BackLink />
        <Card className="flex flex-col items-center gap-3 py-12 text-center">
          <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary-soft text-primary-ink">
            <CheckIcon className="size-8" />
          </span>
          <h1 className="text-2xl font-extrabold tracking-tight">PIN updated</h1>
          <p className="max-w-md text-sm text-muted">
            Your security PIN has been saved. You&apos;ll be asked for it before
            a purchase or redemption.
          </p>
          <Link
            href={routes.profile}
            className={buttonClass("primary", "md", "mt-4")}
          >
            Back to profile
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <BackLink />

      <header>
        <h1 className="text-2xl font-extrabold tracking-tight">
          Security Settings (PIN)
        </h1>
        <p className="mt-0.5 text-sm text-muted">
          Set a {PIN_LENGTH}-digit PIN to confirm purchases and redemptions.
        </p>
      </header>

      <Card>
        <div className="mb-4 flex items-center gap-3 rounded-2xl bg-primary-soft p-3 text-primary-ink">
          <ShieldIcon className="size-5 shrink-0" />
          <p className="text-xs font-medium">
            Keep your PIN private. Support will never ask you for it.
          </p>
        </div>

        <form
          className="flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            if (canSubmit) setDone(true);
          }}
        >
          <SecureField
            label="Current PIN (if any)"
            name="current-pin"
            placeholder="Enter your current PIN"
            hint="Leave blank if you haven't set a PIN yet."
            numeric
            maxLength={PIN_LENGTH}
            value={current}
            onChange={setCurrent}
          />

          <SecureField
            label={`New PIN (${PIN_LENGTH} digits)`}
            name="new-pin"
            placeholder="••••"
            numeric
            maxLength={PIN_LENGTH}
            value={next}
            onChange={setNext}
          />

          <SecureField
            label="Confirm New PIN"
            name="confirm-pin"
            placeholder="••••"
            numeric
            maxLength={PIN_LENGTH}
            value={confirm}
            onChange={setConfirm}
          />

          {error ? (
            <p className="text-xs font-semibold text-danger">{error}</p>
          ) : null}

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={!canSubmit}
          >
            Save PIN
          </Button>
        </form>
      </Card>

      <p className="text-center text-xs text-muted">
        PIN changes are simulated — nothing is stored on a server.
      </p>
    </div>
  );
}

function BackLink() {
  return (
    <Link
      href={routes.profile}
      className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-foreground"
    >
      <ChevronLeftIcon className="size-4" />
      Profile
    </Link>
  );
}
