export type NotificationKind =
  | "reward"
  | "investment"
  | "redemption"
  | "transfer";

export type NotificationGroup = "new" | "earlier";

export type Notification = {
  id: string;
  kind: NotificationKind;
  body: string;
  time: string;
  group: NotificationGroup;
};

export const notifications: Notification[] = [
  {
    id: "reward-intro-to-crypto",
    kind: "reward",
    body: 'You just earned 50 Coins for watching "Intro to Crypto"!',
    time: "2 minutes ago",
    group: "new",
  },
  {
    id: "investment-aapl",
    kind: "investment",
    body: "Your simulated investment in AAPL is up 8.6% today.",
    time: "15 minutes ago",
    group: "new",
  },
  {
    id: "redemption-robux",
    kind: "redemption",
    body: "Your redemption of 800 Robux was successful. Check your email for the code.",
    time: "1 hour ago",
    group: "earlier",
  },
  {
    id: "transfer-dianaa",
    kind: "transfer",
    body: "@dianaa sent you 10,000 Coins.",
    time: "Yesterday",
    group: "earlier",
  },
];

export const notificationGroups: { id: NotificationGroup; label: string }[] = [
  { id: "new", label: "New" },
  { id: "earlier", label: "Earlier" },
];

export function getNotifications(group: NotificationGroup): Notification[] {
  return notifications.filter((notification) => notification.group === group);
}
