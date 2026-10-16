import { ChatThread } from "@/features/community/components/chat-thread";
import { getGroupThread, type Community } from "@/features/community/data";
import { routes } from "@/lib/routes";

export function GroupChat({ community }: { community: Community }) {
  return (
    <ChatThread
      title={community.name}
      subtitle={community.description}
      avatarName={community.name}
      backHref={routes.communityGroups}
      backLabel="Join a community"
      seed={getGroupThread(community.slug)}
      note="Group chat is open to everyone. Messages are simulated and reset on reload."
    />
  );
}
