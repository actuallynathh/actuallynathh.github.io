"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CheckIcon,
  ChevronLeftIcon,
  PlayIcon,
  SparklesIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Lesson } from "@/features/learn/data";
import { routes } from "@/lib/routes";

/** How long the simulated playback runs before the reward unlocks. */
const WATCH_MS = 1600;

type Phase = "idle" | "watching" | "claimable" | "claimed";

/** Lesson screen: watch the video, then claim the XP reward. */
export function LessonPlayer({ lesson }: { lesson: Lesson }) {
  const [phase, setPhase] = useState<Phase>(
    lesson.progress >= 100 ? "claimed" : "idle",
  );

  useEffect(() => {
    if (phase !== "watching") return;
    const timer = window.setTimeout(() => setPhase("claimable"), WATCH_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

  const progress = phase === "idle" ? lesson.progress : 100;
  const done = phase === "claimed";

  const labels: Record<Phase, string> = {
    idle: "Watch to Claim Reward",
    watching: "Watching…",
    claimable: `Claim +${lesson.reward} XP Points`,
    claimed: "",
  };

  return (
    <div className="flex flex-col gap-5">
      <Link
        href={routes.learn}
        className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-foreground"
      >
        <ChevronLeftIcon className="size-4" />
        Learn &amp; Earn
      </Link>

      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-ink">
          {lesson.category}
        </p>
        <h1 className="mt-1 text-2xl font-extrabold tracking-tight">
          {lesson.title}
        </h1>
        <p className="mt-2 text-sm text-muted">{lesson.description}</p>
      </header>

      <div className="relative aspect-video overflow-hidden rounded-card bg-linear-to-br from-primary to-primary-strong shadow-[0_18px_40px_-24px_var(--primary)]">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex size-16 items-center justify-center rounded-full bg-white/20 text-on-primary backdrop-blur">
            {done ? (
              <CheckIcon className="size-7" />
            ) : (
              <PlayIcon className="size-7" />
            )}
          </span>
        </div>
        <span className="absolute bottom-3 right-3 rounded-full bg-black/35 px-2.5 py-1 text-xs font-semibold text-white">
          {lesson.duration}
        </span>
      </div>

      <Card>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Progress</span>
          <span className="font-semibold tabular-nums">{progress}%</span>
        </div>
        <Progress
          value={progress}
          className="mt-3 h-2"
          barClassName="transition-[width] duration-[1.6s] ease-out"
        />

        <div className="mt-5">
          {done ? (
            <div className="flex items-center gap-3 rounded-2xl bg-primary-soft p-4 text-primary-ink">
              <CheckIcon className="size-5 shrink-0" />
              <p className="text-sm font-semibold">
                Reward claimed — +{lesson.reward} XP Points added to your
                account.
              </p>
            </div>
          ) : (
            <Button
              size="lg"
              className="w-full"
              disabled={phase === "watching"}
              onClick={() =>
                setPhase(phase === "claimable" ? "claimed" : "watching")
              }
            >
              <SparklesIcon className="size-4" />
              {labels[phase]}
            </Button>
          )}
        </div>

        {!done ? (
          <p className="mt-3 text-center text-xs text-muted">
            Finish the video to get +{lesson.reward} XP Points.
          </p>
        ) : null}
      </Card>
    </div>
  );
}
