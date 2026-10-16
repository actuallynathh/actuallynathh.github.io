import Link from "next/link";
import { routes } from "@/lib/routes";
import { CheckIcon, ChevronRightIcon } from "@/components/icons";
import { buttonClass } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { features, games, steps } from "@/features/landing/data";

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 lg:px-8 lg:py-20"
    >
      <SectionHeading
        eyebrow="Features"
        title="Everything you need to get finance-smart"
        description="One app for learning, practising and earning — designed to be safe, simple and genuinely fun."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="transition-colors hover:border-primary/40">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary-soft text-primary-ink">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold">{title}</h3>
            <p className="mt-1.5 text-sm text-muted">{description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-y border-border bg-surface/60 py-16 backdrop-blur-xl lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From zero to your first reward in three steps"
        />

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Card className="h-full">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-on-primary">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{step.description}</p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function RewardsSection() {
  return (
    <section
      id="rewards"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 lg:px-8 lg:py-20"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Rewards"
            title="Turn coins into the things you actually want"
            description="Browse the in-game store, pick your currency, enter your username and check out — your coins cover it."
          />

          <ul className="mt-8 flex flex-col gap-3">
            {[
              "5,000+ coin rewards across five game stores",
              "Buy, sell and track a simulated stock portfolio",
              "Referral bonuses and a weekly leaderboard",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary-ink">
                  <CheckIcon className="size-3.5" />
                </span>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href={routes.signup}
            className={buttonClass("primary", "lg", "mt-8")}
          >
            Start earning
            <ChevronRightIcon className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {games.map((game) => (
            <Card
              key={game}
              className="flex aspect-square flex-col items-center justify-center gap-2 text-center"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-primary-strong text-base font-extrabold text-on-primary">
                {game.slice(0, 1)}
              </span>
              <p className="text-sm font-semibold">{game}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-20 lg:px-8">
      <div className="relative overflow-hidden rounded-card bg-linear-to-br from-primary to-primary-strong px-6 py-14 text-center text-on-primary lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 size-72 rounded-full bg-white/15 blur-3xl"
        />
        <div className="relative">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Start learning, simulating and earning today
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-on-primary/85">
            Free to join. No real money required. Cancel anytime.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={routes.signup}
              className={buttonClass(
                "outline",
                "lg",
                "border-transparent bg-white text-primary-ink hover:bg-white/90",
              )}
            >
              Create free account
            </Link>
            <Link
              href={routes.login}
              className={buttonClass(
                "ghost",
                "lg",
                "border border-white/40 text-on-primary hover:bg-white/15 hover:text-on-primary",
              )}
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-widest text-primary-ink">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base text-muted">{description}</p>
      ) : null}
    </div>
  );
}
