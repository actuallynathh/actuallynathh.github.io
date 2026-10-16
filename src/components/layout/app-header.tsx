"use client";

import Link from "next/link";
import { BellIcon, SearchIcon } from "@/components/icons";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Avatar } from "@/components/ui/avatar";
import { currentUser } from "@/features/profile/data";

export function AppHeader() {
  return (
    <header className="glass-bar sticky top-0 z-30 border-b border-border">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 lg:px-8">
        <Logo href="/dashboard" className="lg:hidden" />

        <div className="ml-auto flex items-center gap-2">
          <label className="hidden h-10 items-center gap-2 rounded-full border border-border bg-input/70 px-3.5 text-sm text-muted backdrop-blur-md md:flex md:w-64">
            <SearchIcon className="size-4" />
            <input
              type="search"
              placeholder="Search symbols, games…"
              className="w-full bg-transparent text-foreground outline-none placeholder:text-muted/80"
            />
          </label>

          <ThemeToggle />

          <Link
            href="/notifications"
            aria-label="Notifications"
            className="relative inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/70 text-foreground backdrop-blur-md transition-colors hover:bg-card"
          >
            <BellIcon className="size-5" />
            <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-danger" />
          </Link>

          <Link href="/profile" aria-label="Your profile" className="ml-1">
            <Avatar name={currentUser.name} />
          </Link>
        </div>
      </div>
    </header>
  );
}
