import type { Metadata } from "next";
import { SendCoinsForm } from "@/features/wallet/components/send-coins-form";

export const metadata: Metadata = {
  title: "Send Coins — XPVest",
};

export default function SendCoinsPage() {
  return <SendCoinsForm />;
}
