import { SparklesIcon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LessonCard } from "@/features/learn/components/lesson-card";
import {
  availableXp,
  completedLessons,
  earnedXp,
  lessons,
  totalLessons,
} from "@/features/learn/data";

/** Learn & Earn hub: course progress plus every lesson. */
export function LearnHub() {
  const overall = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="flex flex-col gap-5">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight">
          Learn &amp; Earn
        </h1>
        <p className="mt-0.5 text-sm text-muted">
          Watch a lesson to claim XP points and coins.
        </p>
      </header>

      <Card>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm text-muted">Course progress</p>
            <p className="mt-1 text-2xl font-extrabold tracking-tight">
              {completedLessons} of {totalLessons} lessons
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary-ink">
            <SparklesIcon className="size-4" />
            {earnedXp} / {availableXp} XP
          </span>
        </div>
        <Progress value={overall} className="mt-4 h-2" />
      </Card>

      <section className="grid gap-4 sm:grid-cols-2">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.slug} lesson={lesson} />
        ))}
      </section>
    </div>
  );
}
