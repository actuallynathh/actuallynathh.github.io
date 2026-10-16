import Link from "next/link";
import { PlayIcon, SparklesIcon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Lesson } from "@/features/learn/data";
import { routes } from "@/lib/routes";

/** Catalog tile for a single lesson. */
export function LessonCard({ lesson }: { lesson: Lesson }) {
  const done = lesson.progress >= 100;

  return (
    <Link
      href={routes.learnLesson(lesson.slug)}
      className="group block h-full"
    >
      <Card className="flex h-full flex-col gap-3 transition-colors group-hover:border-primary/40">
        <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary-soft text-primary-ink transition-transform group-hover:scale-105">
          <PlayIcon className="size-4" />
        </span>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-ink">
            {lesson.category}
          </p>
          <p className="mt-0.5 text-base font-extrabold tracking-tight">
            {lesson.title}
          </p>
        </div>

        <p className="line-clamp-2 text-xs text-muted">{lesson.description}</p>

        <div className="mt-auto">
          <Progress value={lesson.progress} className="h-1.5" />
          <div className="mt-2 flex items-center justify-between text-xs text-muted">
            <span>{lesson.duration}</span>
            <span className="inline-flex items-center gap-1 font-semibold text-primary-ink">
              <SparklesIcon className="size-3.5" />
              {done ? "Earned" : `+${lesson.reward} XP`}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
