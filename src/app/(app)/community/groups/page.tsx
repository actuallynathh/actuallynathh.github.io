import type { Metadata } from "next";
import { CommunityList } from "@/features/community/components/community-list";

export const metadata: Metadata = {
  title: "Join a community — XPVest",
};

export default function CommunityGroupsPage() {
  return <CommunityList />;
}
