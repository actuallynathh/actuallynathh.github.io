import { ComingSoon } from "@/components/ui/coming-soon";

export default function HistoryPage() {
  return (
    <ComingSoon
      title="Transaction History"
      description="Review every coin movement across your account."
      planned={["All", "Income", "Outcome", "Grouped by date"]}
    />
  );
}
