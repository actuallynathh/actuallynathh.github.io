import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { BookIcon, ShieldIcon, TrendUpIcon } from "@/components/icons";

const highlights = [
  {
    icon: TrendUpIcon,
    title: "Simulate trades",
    description: "Practise investing with coins before using real money.",
  },
  {
    icon: BookIcon,
    title: "Learn & earn",
    description: "Finish short lessons to collect XP points and rewards.",
  },
  {
    icon: ShieldIcon,
    title: "Safe by design",
    description: "Parental guides and security settings built in.",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-dvh lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between overflow-hidden bg-linear-to-br from-primary to-primary-strong p-12 text-on-primary lg:flex">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-white/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-0 size-64 rounded-full bg-white/10 blur-3xl"
        />

        <Logo inverse className="relative" />

        <div className="relative">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
            Learn, Simulate
            <br />&amp; Earn
          </h1>
          <p className="mt-3 max-w-sm text-on-primary/85">
            Your digital finance companion. Build confidence with money in a
            playful, safe environment.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white/20">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{title}</span>
                  <span className="block text-sm text-on-primary/80">
                    {description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-xs text-on-primary/70">
          © {new Date().getFullYear()} XPVest. All rights reserved.
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center bg-background/70 px-4 py-12 backdrop-blur-2xl">
        <ThemeToggle className="absolute right-4 top-4" />
        <div className="w-full max-w-sm">
          <Logo className="mb-8 lg:hidden" />
          {children}
        </div>
      </div>
    </div>
  );
}
