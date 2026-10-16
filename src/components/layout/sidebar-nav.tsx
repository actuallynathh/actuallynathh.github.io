"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  isActivePath,
  primaryNav,
  secondaryNav,
  type NavItem,
} from "@/components/layout/nav-items";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="glass-bar fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-border px-4 py-6 lg:flex">
      <Logo href="/dashboard" className="px-2" />

      <nav className="mt-8 flex flex-1 flex-col gap-1">
        {primaryNav.map((item) => (
          <NavLink key={item.href} item={item} active={isActivePath(pathname, item.href)} />
        ))}

        <p className="mt-6 px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted">
          Explore
        </p>
        {secondaryNav.map((item) => (
          <NavLink key={item.href} item={item} active={isActivePath(pathname, item.href)} />
        ))}
      </nav>

      <div className="rounded-2xl border border-primary/20 bg-primary-soft/70 p-4 backdrop-blur-md">
        <p className="text-sm font-semibold text-primary-ink">
          Learn, Simulate &amp; Earn
        </p>
        <p className="mt-1 text-xs text-muted">
          Finish lessons to claim XP and coins.
        </p>
      </div>
    </aside>
  );
}

function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-colors",
        active
          ? "bg-primary-soft text-primary-ink"
          : "text-muted hover:bg-input hover:text-foreground",
      )}
    >
      <Icon className="size-5" />
      {item.label}
    </Link>
  );
}
