import type { Metadata } from "next";
import { ParentalGuide } from "@/features/profile/components/parental-guide";

export const metadata: Metadata = {
  title: "Parental Guide — XPVest",
};

export default function ParentalGuidePage() {
  return <ParentalGuide />;
}
