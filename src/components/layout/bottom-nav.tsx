"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath, primaryNav } from "@/components/layout/nav-items";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="glass-bar fixed inset-x-0 bottom-0 z-40 border-t border-border pb-[env(safe-area-inset-bottom)] lg:hidden">
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-2">
        {primaryNav.map((item) => {
          const active = isActivePath(pathname, item.href);
          const Icon = item.icon;
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-medium transition-colors",
                  active
                    ? "bg-primary-soft/70 text-primary-ink"
                    : "text-muted hover:text-foreground",
                )}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="size-6" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
