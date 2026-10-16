import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { buttonClass } from "@/components/ui/button";
import { navLinks } from "@/features/landing/data";
import { routes } from "@/lib/routes";

export function LandingHeader() {
  return (
    <header className="glass-bar sticky top-0 z-50 border-b border-border">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 lg:px-8">
        <Logo compact className="sm:hidden" />
        <Logo className="hidden sm:inline-flex" />

        <nav className="ml-6 hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-input hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />

          <Link
            href={routes.login}
            className={buttonClass("ghost", "md", "px-3 sm:px-5")}
          >
            Log in
          </Link>
          <Link href={routes.signup} className={buttonClass("primary", "md")}>
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
