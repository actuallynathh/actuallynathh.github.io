import Link from "next/link";
import { PlayIcon, SparklesIcon } from "@/components/icons";
import { buttonClass } from "@/components/ui/button";
import { GrowthChart } from "@/features/dashboard/components/growth-chart";
import {
  featuredLessons,
  growthLabels,
  growthSeries,
} from "@/features/dashboard/data";
import { stats } from "@/features/landing/data";
import { routes } from "@/lib/routes";

const lesson = featuredLessons[1];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary-ink">
            <SparklesIcon className="size-4" />
            Learn, Simulate &amp; Earn
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Build money confidence
            <br />
            <span className="text-primary-ink">before it&apos;s real.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base text-muted sm:text-lg">
            XPVest is your digital finance companion. Master the basics with
            short lessons, practise investing with a simulated portfolio, and
            redeem the coins you earn for real in-game rewards.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={routes.signup} className={buttonClass("primary", "lg")}>
              Create free account
            </Link>
            <Link href={routes.login} className={buttonClass("outline", "lg")}>
              Sign in
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xl font-extrabold tracking-tight text-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-0.5 text-xs text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="glass rounded-[2rem] p-4">
            <div className="rounded-3xl bg-linear-to-br from-primary to-primary-strong p-5 text-on-primary">
              <p className="text-xs font-medium text-on-primary/80">
                Total Balance
              </p>
              <p className="mt-1 text-3xl font-extrabold tracking-tight">
                67.000{" "}
                <span className="text-base font-semibold text-on-primary/85">
                  Coins
                </span>
              </p>
              <span className="mt-2 inline-flex rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold">
                +8.6% (+900 coins)
              </span>
            </div>

            <div className="mt-4 rounded-3xl border border-border bg-card/40 p-4 backdrop-blur-md">
              <p className="text-xs font-semibold text-muted">
                Investment Growth
              </p>
              <GrowthChart
                values={growthSeries}
                labels={growthLabels}
                className="mt-2"
              />
            </div>

            <div className="mt-3 flex items-center gap-3 rounded-2xl border border-border bg-card/40 p-3 backdrop-blur-md">
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary-ink">
                <PlayIcon className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{lesson.title}</p>
                <p className="text-xs text-muted">
                  {lesson.category} · Finish to claim +{lesson.reward} XP
                </p>
              </div>
            </div>
          </div>

          <div className="glass absolute -left-4 top-28 hidden rounded-2xl p-3 sm:block">
            <p className="text-xs text-muted">Refer a friend</p>
            <p className="text-sm font-bold text-primary-ink">+500 Coins</p>
          </div>
        </div>
      </div>
    </section>
  );
}
