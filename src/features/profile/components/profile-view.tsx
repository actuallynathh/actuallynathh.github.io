import Link from "next/link";
import {
  ChevronRightIcon,
  KeyIcon,
  LogOutIcon,
  MailIcon,
  ProfileIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/icons";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { PremiumRow } from "@/features/profile/components/premium-row";
import { currentUser } from "@/features/profile/data";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const rowClass =
  "flex w-full items-center gap-3 px-5 py-4 text-left text-sm transition-colors";

/** Profile hub: identity, personal details and account settings. */
export function ProfileView() {
  return (
    <div className="flex flex-col gap-5">
      <header>
        <h1 className="text-2xl font-extrabold tracking-tight">Profile</h1>
        <p className="mt-0.5 text-sm text-muted">
          Manage your personal details, account settings and parental controls.
        </p>
      </header>

      <Card className="flex items-center gap-4">
        <Avatar name={currentUser.gamerTag} size="lg" />
        <div className="min-w-0">
          <p className="truncate text-lg font-extrabold tracking-tight">
            {currentUser.gamerTag}
          </p>
          <p className="truncate text-sm text-muted">{currentUser.handle}</p>
        </div>
      </Card>

      <section>
        <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-muted">
          Personal details
        </h2>
        <div className="overflow-hidden rounded-card border border-border bg-card">
          <div className={cn(rowClass, "border-b border-border")}>
            <ProfileIcon className="size-5 shrink-0 text-muted" />
            <span className="text-muted">Username</span>
            <span className="ml-auto truncate font-semibold">
              {currentUser.handle}
            </span>
          </div>
          <div className={rowClass}>
            <MailIcon className="size-5 shrink-0 text-muted" />
            <span className="text-muted">Email</span>
            <span className="ml-auto truncate font-semibold">
              {currentUser.email}
            </span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-muted">
          Account settings
        </h2>
        <div className="overflow-hidden rounded-card border border-border bg-card">
          <PremiumRow />
          <SettingsLink
            href={routes.changePassword}
            icon={<KeyIcon className="size-5 shrink-0 text-muted" />}
            label="Change Password"
          />
          <SettingsLink
            href={routes.securityPin}
            icon={<ShieldIcon className="size-5 shrink-0 text-muted" />}
            label="Security Settings (PIN)"
          />
          <SettingsLink
            href={routes.parentalGuide}
            icon={<UsersIcon className="size-5 shrink-0 text-muted" />}
            label="Parental Guide"
            last
          />
        </div>
      </section>

      <Link
        href={routes.login}
        className={cn(
          rowClass,
          "justify-center gap-2 rounded-card border border-border bg-card font-semibold text-danger hover:bg-danger-soft",
        )}
      >
        <LogOutIcon className="size-5" />
        Log Out
      </Link>
    </div>
  );
}

function SettingsLink({
  href,
  icon,
  label,
  last = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  last?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        rowClass,
        "hover:bg-input",
        !last && "border-b border-border",
      )}
    >
      {icon}
      <span className="font-medium">{label}</span>
      <ChevronRightIcon className="ml-auto size-5 shrink-0 text-muted" />
    </Link>
  );
}
