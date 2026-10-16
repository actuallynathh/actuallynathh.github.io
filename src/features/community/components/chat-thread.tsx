"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, SendIcon } from "@/components/icons";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { ChatMessage } from "@/features/community/data";
import { currentUser } from "@/features/profile/data";
import { cn } from "@/lib/utils";

/**
 * Shared chat surface for group rooms and 1:1 expert chats: bubble list plus a
 * composer. New messages live in component state only.
 */
export function ChatThread({
  title,
  subtitle,
  backHref,
  backLabel,
  seed,
  note,
  avatarName,
}: {
  title: string;
  subtitle: string;
  backHref: string;
  backLabel: string;
  seed: ChatMessage[];
  note?: string;
  avatarName?: string;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>(seed);
  const [draft, setDraft] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "nearest" });
  }, [messages]);

  function send() {
    const body = draft.trim();
    if (!body) return;
    setMessages((current) => [
      ...current,
      {
        id: `local-${Date.now()}`,
        author: currentUser.name,
        body,
        time: new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        mine: true,
      },
    ]);
    setDraft("");
  }

  return (
    <div className="flex flex-col gap-5">
      <Link
        href={backHref}
        className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-foreground"
      >
        <ChevronLeftIcon className="size-4" />
        {backLabel}
      </Link>

      <header className="flex items-center gap-3">
        <Avatar name={avatarName ?? title} />
        <div className="min-w-0">
          <h1 className="truncate text-lg font-extrabold tracking-tight">
            {title}
          </h1>
          <p className="truncate text-xs text-muted">{subtitle}</p>
        </div>
      </header>

      <Card className="flex flex-col gap-4">
        <div className="flex max-h-[55vh] flex-col gap-4 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-end gap-2",
                message.mine && "flex-row-reverse",
              )}
            >
              {message.mine ? null : <Avatar name={message.author} size="sm" />}
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-2.5",
                  message.mine ? "bg-primary text-on-primary" : "bg-input",
                )}
              >
                {message.mine ? null : (
                  <p className="text-xs font-semibold text-primary-ink">
                    {message.author}
                  </p>
                )}
                <p className="text-sm">{message.body}</p>
                <p
                  className={cn(
                    "mt-1 text-[10px]",
                    message.mine ? "text-on-primary/70" : "text-muted",
                  )}
                >
                  {message.time}
                </p>
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <form
          className="flex items-center gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            send();
          }}
        >
          <Input
            name="message"
            placeholder="Write a message…"
            autoComplete="off"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
          />
          <Button
            type="submit"
            className="shrink-0"
            disabled={draft.trim().length === 0}
            aria-label="Send message"
          >
            <SendIcon className="size-4" />
          </Button>
        </form>
      </Card>

      {note ? <p className="text-center text-xs text-muted">{note}</p> : null}
    </div>
  );
}
