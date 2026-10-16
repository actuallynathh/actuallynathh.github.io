"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PaymentSuccess } from "@/features/invest/components/payment-success";

/**
 * `?mode=&symbol=&units=&total=` live in the URL, so this confirmation reads
 * them on the client. The Suspense boundary keeps the page statically exportable.
 */
function InvestSuccessContent() {
  const params = useSearchParams();

  return (
    <PaymentSuccess
      mode={params.get("mode") ?? undefined}
      symbol={params.get("symbol") ?? undefined}
      units={params.get("units") ?? undefined}
      total={params.get("total") ?? undefined}
    />
  );
}

export default function InvestSuccessPage() {
  return (
    <Suspense fallback={null}>
      <InvestSuccessContent />
    </Suspense>
  );
}
