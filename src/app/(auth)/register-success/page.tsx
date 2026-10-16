import Link from "next/link";
import { CheckIcon } from "@/components/icons";
import { buttonClass } from "@/components/ui/button";

export default function RegisterSuccessPage() {
  return (
    <div className="text-center">
      <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary-soft text-primary-ink">
        <CheckIcon className="size-8" />
      </span>

      <h1 className="mt-6 text-2xl font-extrabold tracking-tight">
        Registration Successful!
      </h1>
      <p className="mt-2 text-sm text-muted">
        Welcome to XPVest. Your account is ready — start learning, simulating
        and earning coins.
      </p>

      <Link
        href="/dashboard"
        className={buttonClass("primary", "lg", "mt-8 w-full")}
      >
        Go to Dashboard
      </Link>

      <p className="mt-6 text-sm text-muted">
        Not you?{" "}
        <Link
          href="/login"
          className="font-semibold text-primary-ink hover:underline"
        >
          Back to sign in
        </Link>
      </p>
    </div>
  );
}
