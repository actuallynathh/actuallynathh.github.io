"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SocialButtons } from "@/features/auth/components/social-buttons";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h1 className="text-2xl font-extrabold tracking-tight">Welcome back</h1>
      <p className="mt-1.5 text-sm text-muted">
        Learn, Simulate &amp; Earn — sign in to continue.
      </p>

      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/dashboard");
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

        <Input
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          autoComplete="current-password"
          required
          trailing={
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="p-2 text-muted transition-colors hover:text-foreground"
            >
              {showPassword ? (
                <EyeOffIcon className="size-5" />
              ) : (
                <EyeIcon className="size-5" />
              )}
            </button>
          }
        />

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm font-semibold text-primary-ink hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" size="lg" className="w-full">
          Sign In
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3 text-xs font-medium text-muted">
        <span className="h-px flex-1 bg-border" />
        Or continue with
        <span className="h-px flex-1 bg-border" />
      </div>
      <SocialButtons />

      <p className="mt-8 text-center text-sm text-muted">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-semibold text-primary-ink hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
