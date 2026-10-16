import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AssetDetail } from "@/features/invest/components/asset-detail";
import { assets, getAsset } from "@/features/invest/data";

type PageProps = { params: Promise<{ symbol: string }> };

export function generateStaticParams() {
  return assets.map((asset) => ({ symbol: asset.symbol }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { symbol } = await params;
  const asset = getAsset(symbol);
  return {
    title: asset ? `${asset.name} (${asset.symbol}) — XPVest` : "Invest — XPVest",
  };
}

export default async function AssetPage({ params }: PageProps) {
  const { symbol } = await params;
  const asset = getAsset(symbol);
  if (!asset) notFound();

  return <AssetDetail asset={asset} />;
}
