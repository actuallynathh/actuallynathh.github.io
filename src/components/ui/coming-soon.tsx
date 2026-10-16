import Link from "next/link";
import { ChevronLeftIcon, SparklesIcon } from "@/components/icons";
import { buttonClass } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

/**
 * Temporary screen for flows that ship in the next pass. Keeps every navigation
 * target in the shell working instead of 404-ing.
 */
export function ComingSoon({
  title,
  description,
  planned = [],
}: {
  title: string;
  description: string;
  planned?: string[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <Link
        href="/dashboard"
        className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-foreground"
      >
        <ChevronLeftIcon className="size-4" />
        Back to Home
      </Link>

      <Card className="flex flex-col items-center gap-3 py-12 text-center">
        <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary-soft text-primary-ink">
          <SparklesIcon className="size-7" />
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight">{title}</h1>
        <p className="max-w-md text-sm text-muted">{description}</p>

        {planned.length > 0 ? (
          <ul className="mt-2 flex flex-wrap justify-center gap-2">
            {planned.map((item) => (
              <li
                key={item}
                className="rounded-full bg-input px-3 py-1 text-xs font-medium text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <Link
          href="/dashboard"
          className={buttonClass("primary", "md", "mt-4")}
        >
          Back to Dashboard
        </Link>
      </Card>
    </div>
  );
}
