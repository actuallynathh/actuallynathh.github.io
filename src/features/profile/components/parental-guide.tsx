import Link from "next/link";
import {
  BookIcon,
  ChevronLeftIcon,
  LockIcon,
  MailIcon,
  WalletIcon,
} from "@/components/icons";
import { Card } from "@/components/ui/card";
import { routes } from "@/lib/routes";

const controls = [
  {
    icon: BookIcon,
    title: "Learning-only mode",
    description:
      "Pause buying and redemptions so the account can only be used for lessons and practice.",
  },
  {
    icon: WalletIcon,
    title: "Coin spend limits",
    description:
      "Cap how many Coins can be spent per day or per week across Invest and Shop.",
  },
  {
    icon: LockIcon,
    title: "Purchase approvals",
    description:
      "Require a security PIN before any redemption, so large spends stay in your hands.",
  },
  {
    icon: MailIcon,
    title: "Weekly activity reports",
    description:
      "Get a short email summary of lessons finished, simulated trades and redemptions.",
  },
];

/** Informational guide explaining the controls available to parents and guardians. */
export function ParentalGuide() {
  return (
    <div className="flex flex-col gap-5">
      <Link
        href={routes.profile}
        className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-foreground"
      >
        <ChevronLeftIcon className="size-4" />
        Profile
      </Link>

      <header>
        <h1 className="text-2xl font-extrabold tracking-tight">
          Parental Guide
        </h1>
        <p className="mt-0.5 text-sm text-muted">
          How XPVest keeps practice safe — and the controls you can turn on.
        </p>
      </header>

      <Card>
        <p className="text-sm text-muted">
          XPVest is a learning sandbox. Every Coin, trade and purchase is
          simulated, so nothing here costs real money. That makes it a safe place
          for a first taste of budgeting, investing and spending decisions.
        </p>
      </Card>

      <section className="grid gap-4 sm:grid-cols-2">
        {controls.map((control) => (
          <Card key={control.title} className="flex flex-col gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary-soft text-primary-ink">
              <control.icon className="size-5" />
            </span>
            <div>
              <h2 className="text-base font-semibold tracking-tight">
                {control.title}
              </h2>
              <p className="mt-1 text-sm text-muted">{control.description}</p>
            </div>
          </Card>
        ))}
      </section>

      <Card>
        <h2 className="text-base font-semibold tracking-tight">Talking points</h2>
        <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-sm text-muted">
          <li>Ask what your child learnt from their most recent lesson.</li>
          <li>
            Review the activity report together and talk through one decision.
          </li>
          <li>
            Remind them that simulated gains are practice, not real earnings.
          </li>
        </ul>
      </Card>

      <p className="text-center text-xs text-muted">
        Controls are illustrative in this demo — nothing is stored or enforced
        yet.
      </p>
    </div>
  );
}
