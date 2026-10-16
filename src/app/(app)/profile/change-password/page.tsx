import type { Metadata } from "next";
import { ChangePasswordForm } from "@/features/profile/components/change-password-form";

export const metadata: Metadata = {
  title: "Change Password — XPVest",
};

export default function ChangePasswordPage() {
  return <ChangePasswordForm />;
}
