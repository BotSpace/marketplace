import { Metadata } from "next";
import { generatePricingMetadata } from "../metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePricingMetadata(locale);
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

