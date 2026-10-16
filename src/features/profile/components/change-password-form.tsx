"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckIcon, ChevronLeftIcon } from "@/components/icons";
import { buttonClass, Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SecureField } from "@/features/profile/components/secure-field";
import { routes } from "@/lib/routes";

const MIN_LENGTH = 8;

export function ChangePasswordForm() {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [done, setDone] = useState(false);

  const canSubmit =
    current.length > 0 &&
    next.length >= MIN_LENGTH &&
    next !== current &&
    confirm === next;

  const error =
    next.length > 0 && next.length < MIN_LENGTH
      ? `Use at least ${MIN_LENGTH} characters.`
      : next.length > 0 && next === current
        ? "Choose a password different from your current one."
        : confirm.length > 0 && confirm !== next
          ? "Passwords don't match."
          : null;

  if (done) {
    return (
      <div className="flex flex-col gap-5">
        <BackLink />
        <Card className="flex flex-col items-center gap-3 py-12 text-center">
          <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary-soft text-primary-ink">
            <CheckIcon className="size-8" />
          </span>
          <h1 className="text-2xl font-extrabold tracking-tight">
            Password updated
          </h1>
          <p className="max-w-md text-sm text-muted">
            Your password has been changed. Use it the next time you sign in.
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
          Change Password
        </h1>
        <p className="mt-0.5 text-sm text-muted">
          Choose a new password for your account.
        </p>
      </header>

      <Card>
        <form
          className="flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            if (canSubmit) setDone(true);
          }}
        >
          <SecureField
            label="Current Password"
            name="current-password"
            placeholder="Enter your current password"
            autoComplete="current-password"
            value={current}
            onChange={setCurrent}
          />

          <SecureField
            label="New Password"
            name="new-password"
            placeholder="Enter your new password"
            autoComplete="new-password"
            hint={`At least ${MIN_LENGTH} characters.`}
            value={next}
            onChange={setNext}
          />

          <SecureField
            label="Confirm New Password"
            name="confirm-password"
            placeholder="Confirm your new password"
            autoComplete="new-password"
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
            Update Password
          </Button>
        </form>
      </Card>

      <p className="text-center text-xs text-muted">
        Password changes are simulated — no credentials are stored.
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
