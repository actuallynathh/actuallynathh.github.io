import {
  HomeIcon,
  InvestIcon,
  ProfileIcon,
  ShopIcon,
  TrophyIcon,
  UsersIcon,
} from "@/components/icons";

export type NavItem = {
  href: string;
  label: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
};

/** Primary destinations — mirrored by the mobile bottom nav (per the design). */
export const primaryNav: NavItem[] = [
  { href: "/dashboard", label: "Home", icon: HomeIcon },
  { href: "/invest", label: "Invest", icon: InvestIcon },
  { href: "/shop", label: "Shop", icon: ShopIcon },
  { href: "/profile", label: "Profile", icon: ProfileIcon },
];

/** Extra destinations surfaced in the desktop sidebar. */
export const secondaryNav: NavItem[] = [
  { href: "/leaderboard", label: "Leaderboard", icon: TrophyIcon },
  { href: "/community", label: "Community", icon: UsersIcon },
];

export function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
