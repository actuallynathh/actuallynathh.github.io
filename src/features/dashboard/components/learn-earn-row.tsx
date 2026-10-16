import Link from "next/link";
import { PlayIcon, SparklesIcon } from "@/components/icons";
import { Card, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { featuredLessons } from "@/features/dashboard/data";

export function LearnEarnRow() {
  return (
    <Card>
      <CardHeader
        title="Learn & Earn"
        subtitle="Watch a lesson to claim XP points and coins."
        action={
          <Link
            href="/learn"
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary-ink hover:underline"
          >
            See all
          </Link>
        }
      />

      <div className="no-scrollbar -mx-1 flex snap-x gap-3 overflow-x-auto px-1 pb-1">
        {featuredLessons.map((lesson) => (
          <Link
            key={lesson.title}
            href="/learn"
            className="group w-56 shrink-0 snap-start rounded-2xl border border-border bg-card/50 p-4 backdrop-blur-md transition-colors hover:border-primary/40"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary-soft text-primary-ink transition-transform group-hover:scale-105">
              <PlayIcon className="size-4" />
            </span>

            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary-ink">
              {lesson.category}
            </p>
            <p className="mt-1 line-clamp-2 text-sm font-semibold">
              {lesson.title}
            </p>

            <div className="mt-3">
              <Progress value={lesson.progress} className="h-1.5" />
              <div className="mt-2 flex items-center justify-between text-xs text-muted">
                <span>{lesson.duration}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-primary-ink">
                  <SparklesIcon className="size-3.5" />+{lesson.reward} XP
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}
