import { notFound } from "next/navigation";
import { TradeForm } from "@/features/invest/components/trade-form";
import { assets, getAsset } from "@/features/invest/data";

export function generateStaticParams() {
  return assets.map((asset) => ({ symbol: asset.symbol }));
}

export default async function BuyAssetPage({
  params,
}: {
  params: Promise<{ symbol: string }>;
}) {
  const { symbol } = await params;
  const asset = getAsset(symbol);
  if (!asset) notFound();

  return <TradeForm asset={asset} mode="buy" />;
}
