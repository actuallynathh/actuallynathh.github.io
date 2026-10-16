import type { Metadata } from "next";
import { ReceiveCoins } from "@/features/wallet/components/receive-coins";

export const metadata: Metadata = {
  title: "Receive Coins — XPVest",
};

export default function ReceiveCoinsPage() {
  return <ReceiveCoins />;
}
