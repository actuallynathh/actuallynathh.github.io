import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckoutForm } from "@/features/shop/components/checkout-form";
import { getProduct, productTitle, products } from "@/features/shop/data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return {
    title: product
      ? `${productTitle(product)} — ${product.game} — XPVest`
      : "Shop — XPVest",
  };
}

export default async function ShopProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return <CheckoutForm product={product} />;
}
