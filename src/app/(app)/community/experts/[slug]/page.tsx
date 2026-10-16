import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExpertChat } from "@/features/community/components/expert-chat";
import { PremiumGate } from "@/features/community/components/premium-gate";
import { experts, getExpert } from "@/features/community/data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return experts.map((expert) => ({ slug: expert.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const expert = getExpert(slug);
  return {
    title: expert ? `${expert.name} — Expert Chat — XPVest` : "Expert Chat — XPVest",
  };
}

export default async function ExpertChatPage({ params }: PageProps) {
  const { slug } = await params;
  const expert = getExpert(slug);
  if (!expert) notFound();

  return (
    <PremiumGate>
      <ExpertChat expert={expert} />
    </PremiumGate>
  );
}
