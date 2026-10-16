import {
  ArrowDownLeftIcon,
  GiftIcon,
  ShopIcon,
  TrendUpIcon,
} from "@/components/icons";
import {
  getNotifications,
  notificationGroups,
  type NotificationKind,
} from "@/features/notifications/data";
import { cn } from "@/lib/utils";

const iconByKind: Record<NotificationKind, typeof GiftIcon> = {
  reward: GiftIcon,
  investment: TrendUpIcon,
  redemption: ShopIcon,
  transfer: ArrowDownLeftIcon,
};

const toneByKind: Record<NotificationKind, string> = {
  reward: "bg-primary-soft text-primary-ink",
  investment: "bg-accent-soft text-accent",
  redemption: "bg-primary-soft text-primary-ink",
  transfer: "bg-accent-soft text-accent",
};

export function NotificationsView() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">
          Notifications
        </h1>
        <p className="mt-0.5 text-sm text-muted">
          Rewards, investment updates and transfer alerts.
        </p>
      </div>

      {notificationGroups.map((group) => {
        const items = getNotifications(group.id);
        if (items.length === 0) return null;

        return (
          <section key={group.id}>
            <h2 className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-wider text-muted">
              {group.label}
            </h2>

            <div className="glass overflow-hidden rounded-card">
              <ul className="divide-y divide-border">
                {items.map((notification) => {
                  const Icon = iconByKind[notification.kind];
                  const unread = group.id === "new";

                  return (
                    <li
                      key={notification.id}
                      className="flex items-start gap-3 px-5 py-4"
                    >
                      <span
                        className={cn(
                          "inline-flex size-10 shrink-0 items-center justify-center rounded-full",
                          toneByKind[notification.kind],
                        )}
                      >
                        <Icon className="size-5" />
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-foreground">
                          {notification.body}
                        </p>
                        <p className="mt-0.5 text-xs text-muted">
                          {notification.time}
                        </p>
                      </div>

                      {unread ? (
                        <span
                          className="mt-2 size-2 shrink-0 rounded-full bg-primary"
                          aria-label="Unread"
                        />
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}
