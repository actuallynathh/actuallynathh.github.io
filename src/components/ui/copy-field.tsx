"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

/** Read-only value with a copy-to-clipboard affordance. */
export function CopyField({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard may be blocked; leave the value visible to copy manually */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${value}`}
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl border border-dashed border-primary/40 bg-primary-soft/70 px-3.5 py-2.5 font-mono text-sm font-semibold tracking-wide text-primary-ink backdrop-blur-md transition-colors hover:brightness-95",
        className,
      )}
    >
      {value}
      {copied ? (
        <CheckIcon className="size-4" />
      ) : (
        <CopyIcon className="size-4" />
      )}
    </button>
  );
}
