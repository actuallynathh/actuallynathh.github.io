"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeftIcon, SearchIcon } from "@/components/icons";
import { Avatar } from "@/components/ui/avatar";
import { buttonClass } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { experts } from "@/features/community/data";
import { routes } from "@/lib/routes";

/** "Choose an Expert" — only reachable with Premium. */
export function ExpertList() {
  const [query, setQuery] = useState("");

  const term = query.trim().toLowerCase();
  const results = term
    ? experts.filter((expert) =>
        `${expert.name} ${expert.role} ${expert.bio}`
          .toLowerCase()
          .includes(term),
      )
    : experts;

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
          Choose an Expert
        </h1>
        <p className="mt-0.5 text-sm text-muted">
          Ask a verified investor or trader about your portfolio.
        </p>
      </header>

      <Input
        name="expert-search"
        type="search"
        placeholder="Search experts…"
        leading={<SearchIcon className="size-4" />}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <div className="flex flex-col gap-3">
        {results.map((expert) => (
          <Card key={expert.slug} className="flex items-center gap-3">
            <span className="relative shrink-0">
              <Avatar name={expert.name} />
              {expert.online ? (
                <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-card bg-primary" />
              ) : null}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold">{expert.name}</p>
              <p className="text-xs font-medium text-primary-ink">
                {expert.role}
              </p>
              <p className="mt-0.5 text-xs text-muted">{expert.bio}</p>
            </div>
            <Link
              href={routes.expertChat(expert.slug)}
              className={buttonClass("secondary", "sm", "ml-auto shrink-0")}
            >
              Chat
            </Link>
          </Card>
        ))}

        {results.length === 0 ? (
          <Card className="py-10 text-center">
            <p className="text-sm font-semibold">No experts found</p>
            <p className="mt-1 text-xs text-muted">
              Try a different name or specialty.
            </p>
          </Card>
        ) : null}
      </div>
    </div>
  );
}
