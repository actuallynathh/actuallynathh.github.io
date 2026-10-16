import type { Metadata } from "next";
import { CommunityHub } from "@/features/community/components/community-hub";

export const metadata: Metadata = {
  title: "Forum Discussion — XPVest",
};

export default function CommunityPage() {
  return <CommunityHub />;
}
