import Link from "next/link";
import { ChevronRightIcon, MessageIcon, UsersIcon } from "@/components/icons";
import { PremiumBadge } from "@/components/premium/premium-badge";
import { Card } from "@/components/ui/card";
import { routes } from "@/lib/routes";

/** Community landing: pick the public forum or the premium expert chat. */
export function CommunityHub() {
  return (
    <div className="flex flex-col gap-5">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight">
          Forum Discussion
        </h1>
        <p className="mt-0.5 text-sm text-muted">
          Join the conversation or ask an expert directly.
        </p>
      </header>

      <Link href={routes.communityGroups} className="group block">
        <Card className="flex items-center gap-4 transition-colors group-hover:border-primary/40">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary-ink">
            <UsersIcon className="size-6" />
          </span>
          <div className="min-w-0">
            <p className="text-base font-extrabold tracking-tight">
              Community Forum
            </p>
            <p className="mt-0.5 text-sm text-muted">
              Discuss investment strategies and simulator tips with other users.
            </p>
          </div>
          <ChevronRightIcon className="ml-auto size-5 shrink-0 text-muted" />
        </Card>
      </Link>

      <Link href={routes.experts} className="group block">
        <Card className="flex items-center gap-4 transition-colors group-hover:border-primary/40">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary-ink">
            <MessageIcon className="size-6" />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-base font-extrabold tracking-tight">
                Expert Chat
              </p>
              <PremiumBadge />
            </div>
            <p className="mt-0.5 text-sm text-muted">
              Get exclusive insights and ask questions directly to finance
              experts.
            </p>
          </div>
          <ChevronRightIcon className="ml-auto size-5 shrink-0 text-muted" />
        </Card>
      </Link>
    </div>
  );
}
