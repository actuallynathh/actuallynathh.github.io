import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GroupChat } from "@/features/community/components/group-chat";
import { communities, getCommunity } from "@/features/community/data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return communities.map((community) => ({ slug: community.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunity(slug);
  return {
    title: community ? `${community.name} — XPVest` : "Community — XPVest",
  };
}

export default async function CommunityRoomPage({ params }: PageProps) {
  const { slug } = await params;
  const community = getCommunity(slug);
  if (!community) notFound();

  return <GroupChat community={community} />;
}
