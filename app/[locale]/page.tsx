import { Metadata } from "next";
import { generateHomeMetadata } from "./metadata";
import HomeClient from "./home-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateHomeMetadata(locale);
}

export default function Home() {
  return <HomeClient />;
}
