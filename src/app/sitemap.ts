import type { MetadataRoute } from "next";
import { getPublishedProjects, locales } from "../content/portfolio";
import { canIndex, getSiteOrigin } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();
  if (!canIndex() || !origin) return [];
  const paths = [
    "",
    ...getPublishedProjects("fr")
      .filter((project) => project.details)
      .map((project) => `/projects/${project.id}`),
  ];
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${origin}/${locale}${path}`,
      alternates: {
        languages: { fr: `${origin}/fr${path}`, en: `${origin}/en${path}` },
      },
    })),
  );
}
