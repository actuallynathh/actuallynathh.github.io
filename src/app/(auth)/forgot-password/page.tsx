"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  const router = useRouter();

  return (
    <div>
      <Link
        href="/login"
        className="inline-flex items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-foreground"
      >
        <ChevronLeftIcon className="size-4" />
        Back to sign in
      </Link>

      <h1 className="mt-6 text-2xl font-extrabold tracking-tight">
        Forgot password?
      </h1>
      <p className="mt-1.5 text-sm text-muted">
        Enter the email linked to your account and we&apos;ll send you a reset
        link.
      </p>

      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/login");
        }}
      >
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="you@email.com"
          autoComplete="email"
          required
        />
        <Button type="submit" size="lg" className="w-full">
          Send reset link
        </Button>
      </form>
    </div>
  );
}
