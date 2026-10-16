import { GiftIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CopyField } from "@/components/ui/copy-field";
import { referral } from "@/features/dashboard/data";

export function ReferralCard() {
  return (
    <Card className="border-primary/25 bg-primary-soft">
      <div className="flex items-center gap-2 text-primary-ink">
        <GiftIcon className="size-5" />
        <h3 className="text-base font-semibold">{referral.title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted">{referral.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <CopyField value={referral.code} className="bg-card" />
        <Button variant="primary" size="sm">
          Share Now
        </Button>
      </div>
    </Card>
  );
}
