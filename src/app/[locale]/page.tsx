import { notFound } from "next/navigation";
import { isLocale } from "@/content/portfolio";
import { Portfolio } from "@/components/portfolio";
import { getPageMetadata } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return getPageMetadata(locale);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Portfolio locale={locale} />;
}
