import type { Metadata } from "next";
import { SecurityPinForm } from "@/features/profile/components/security-pin-form";

export const metadata: Metadata = {
  title: "Security Settings (PIN) — XPVest",
};

export default function SecuritySettingsPage() {
  return <SecurityPinForm />;
}
