import { wallet } from "@/features/dashboard/data";

export type ShopProduct = {
  slug: string;
  /** Game the currency belongs to, e.g. "Valorant". */
  game: string;
  /** Currency unit, e.g. "Points", "Robux", "V-Bucks". */
  currency: string;
  /** Denomination of the bundle. */
  amount: number;
  /** Price in Coins. */
  price: number;
  /** Brand colour used for the product tile. */
  accent: string;
  /** Short code stamped on the tile. */
  short: string;
};

export const products: ShopProduct[] = [
  {
    slug: "valorant-475-points",
    game: "Valorant",
    currency: "Points",
    amount: 475,
    price: 56000,
    accent: "#ff4655",
    short: "Val",
  },
  {
    slug: "roblox-500-robux",
    game: "Roblox",
    currency: "Robux",
    amount: 500,
    price: 90000,
    accent: "#e2231a",
    short: "Rbx",
  },
  {
    slug: "codm-650-cp",
    game: "CODM",
    currency: "CP",
    amount: 650,
    price: 84000,
    accent: "#f2a33c",
    short: "CP",
  },
  {
    slug: "pubg-mobile-325-uc",
    game: "PUBG Mobile",
    currency: "UC",
    amount: 325,
    price: 70000,
    accent: "#f7b500",
    short: "UC",
  },
  {
    slug: "fortnite-1000-vbucks",
    game: "Fortnite",
    currency: "V-Bucks",
    amount: 1000,
    price: 240000,
    accent: "#7b5cff",
    short: "VB",
  },
  {
    slug: "mobile-legends-295-diamonds",
    game: "Mobile Legends",
    currency: "Diamonds",
    amount: 295,
    price: 75000,
    accent: "#2f9be8",
    short: "ML",
  },
];

export const coinBalance = wallet.balance;

/** e.g. { amount: 475, currency: "Points" } -> "475 Points". */
export function productTitle(product: ShopProduct): string {
  return `${new Intl.NumberFormat("id-ID").format(product.amount)} ${product.currency}`;
}

export function getProduct(slug: string): ShopProduct | undefined {
  return products.find((product) => product.slug === slug);
}
