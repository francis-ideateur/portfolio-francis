import type { MetadataRoute } from "next";
import { canIndex, getSiteOrigin } from "../lib/site";

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteOrigin();
  if (!canIndex() || !origin)
    return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${origin}/sitemap.xml`,
  };
}
