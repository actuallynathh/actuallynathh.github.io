import {
  BookIcon,
  GiftIcon,
  InvestIcon,
  ShieldIcon,
  ShopIcon,
  UsersIcon,
} from "@/components/icons";

type IconComponent = (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Rewards", href: "#rewards" },
];

export const stats = [
  { value: "6", label: "Finance lessons" },
  { value: "5", label: "Game stores" },
  { value: "100%", label: "Simulated money" },
  { value: "Weekly", label: "Leaderboard rewards" },
];

export const features: {
  icon: IconComponent;
  title: string;
  description: string;
}[] = [
  {
    icon: BookIcon,
    title: "Learn & Earn",
    description:
      "Short lessons on budgeting, crypto and e-wallets. Finish one to claim +15 XP and coins.",
  },
  {
    icon: InvestIcon,
    title: "Simulate investing",
    description:
      "Buy and sell stocks and crypto with coins. Watch your portfolio grow, risk-free.",
  },
  {
    icon: ShopIcon,
    title: "Real rewards",
    description:
      "Redeem your coins for Robux, Valorant Points, V-Bucks and more in the in-game store.",
  },
  {
    icon: GiftIcon,
    title: "Refer friends",
    description:
      "Share your code and you both get a bonus the moment they sign up.",
  },
  {
    icon: UsersIcon,
    title: "Community & experts",
    description:
      "Join discussions in the forum or ask questions directly to finance experts.",
  },
  {
    icon: ShieldIcon,
    title: "Safe by design",
    description:
      "PIN security, transaction history and parental guides are built in from day one.",
  },
];

export const steps = [
  {
    title: "Create your free account",
    description:
      "Sign up in seconds with your email — no real money ever changes hands.",
  },
  {
    title: "Learn, earn and simulate",
    description:
      "Complete lessons, collect XP, and practise investing with your coin balance.",
  },
  {
    title: "Redeem your rewards",
    description:
      "Cash your coins in for in-game currency and climb the weekly leaderboard.",
  },
];

export const games = [
  "Roblox",
  "Valorant",
  "Fortnite",
  "CODM",
  "PUBG Mobile",
];
