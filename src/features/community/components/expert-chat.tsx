import { ChatThread } from "@/features/community/components/chat-thread";
import { getExpertThread, type Expert } from "@/features/community/data";
import { routes } from "@/lib/routes";

export function ExpertChat({ expert }: { expert: Expert }) {
  return (
    <ChatThread
      title={expert.name}
      subtitle={`${expert.role} · ${expert.online ? "Online" : "Offline"}`}
      avatarName={expert.name}
      backHref={routes.experts}
      backLabel="Choose an Expert"
      seed={getExpertThread(expert.slug)}
      note="Private expert chat is included with Premium. Messages are simulated."
    />
  );
}
