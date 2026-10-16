import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { navLinks } from "@/features/landing/data";
import { routes } from "@/lib/routes";

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-surface/60 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-muted">
            XPVest is your digital finance companion: learn, simulate and earn
            with a simulated wallet and zero real-money risk.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted">
            Product
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted">
            Account
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <Link
                href={routes.login}
                className="text-muted transition-colors hover:text-foreground"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                href={routes.signup}
                className="text-muted transition-colors hover:text-foreground"
              >
                Create account
              </Link>
            </li>
            <li>
              <Link
                href={routes.leaderboard}
                className="text-muted transition-colors hover:text-foreground"
              >
                Leaderboard
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto w-full max-w-6xl px-4 py-6 text-xs text-muted lg:px-8">
          © {new Date().getFullYear()} XPVest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
