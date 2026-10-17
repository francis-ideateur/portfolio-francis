import type { MetadataRoute } from "next";
import { locales } from "../content/portfolio";
import { canIndex, getSiteOrigin } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();
  if (!canIndex() || !origin) return [];
  return locales.map((locale) => ({
    url: `${origin}/${locale}`,
    alternates: { languages: { fr: `${origin}/fr`, en: `${origin}/en` } },
  }));
}
