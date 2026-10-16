"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { RedemptionSuccess } from "@/features/shop/components/redemption-success";
import { getProduct } from "@/features/shop/data";

/**
 * `?slug=&handle=` live in the URL, so this confirmation reads them on the
 * client. The Suspense boundary keeps the page statically exportable.
 */
function ShopSuccessContent() {
  const params = useSearchParams();
  const slug = params.get("slug") ?? undefined;
  const product = slug ? getProduct(slug) : undefined;

  return (
    <RedemptionSuccess product={product} handle={params.get("handle") ?? undefined} />
  );
}

export default function ShopSuccessPage() {
  return (
    <Suspense fallback={null}>
      <ShopSuccessContent />
    </Suspense>
  );
}
