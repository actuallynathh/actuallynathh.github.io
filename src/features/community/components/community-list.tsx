"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeftIcon, UsersIcon } from "@/components/icons";
import { Button, buttonClass } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { communities } from "@/features/community/data";
import { routes } from "@/lib/routes";

/** "Join a community" — open to every user, including the basic plan. */
export function CommunityList() {
  const [joined, setJoined] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-5">
      <Link
        href={routes.community}
        className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-foreground"
      >
        <ChevronLeftIcon className="size-4" />
        Forum Discussion
      </Link>

      <header>
        <h1 className="text-2xl font-extrabold tracking-tight">
          Join a community
        </h1>
        <p className="mt-0.5 text-sm text-muted">
          Free for everyone — pick a group and jump into the chat.
        </p>
      </header>

      <div className="flex flex-col gap-3">
        {communities.map((community) => {
          const isJoined = joined.includes(community.slug);
          return (
            <Card key={community.slug} className="flex items-center gap-3">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary-ink">
                <UsersIcon className="size-5" />
              </span>
              <div className="min-w-0">
                <Link
                  href={routes.communityRoom(community.slug)}
                  className="text-sm font-semibold hover:underline"
                >
                  {community.name}
                </Link>
                <p className="mt-0.5 text-xs text-muted">
                  {community.description}
                </p>
              </div>
              <div className="ml-auto shrink-0">
                {isJoined ? (
                  <Link
                    href={routes.communityRoom(community.slug)}
                    className={buttonClass("secondary", "sm")}
                  >
                    Open
                  </Link>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      setJoined((current) => [...current, community.slug])
                    }
                  >
                    Join
                  </Button>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      <p className="text-center text-xs text-muted">
        The Community Forum is part of the free plan.
      </p>
    </div>
  );
}
