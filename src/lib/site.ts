import type { Metadata } from "next";
import { isIP } from "node:net";
import {
  content,
  type Locale,
  type PublishedProject,
} from "../content/portfolio";

type SiteEnvironment = {
  [key: string]: string | undefined;
  SITE_URL?: string;
  ALLOW_INDEXING?: string;
  VERCEL_ENV?: string;
};

/** Only an explicitly configured public HTTPS origin can become a canonical URL. */
export function getSiteOrigin(
  env: SiteEnvironment = process.env,
): string | undefined {
  const value = env.SITE_URL;
  if (!value || !/^https:\/\/[^/?#\\\s]+\/?$/i.test(value)) return undefined;
  try {
    const url = new URL(value);
    const hostname = url.hostname.toLowerCase();
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      url.search ||
      url.hash ||
      url.pathname !== "/" ||
      url.port ||
      !hostname.includes(".") ||
      hostname.endsWith(".") ||
      !hostname
        .split(".")
        .every((label) => /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(label)) ||
      /\.(localhost|local|internal)$/.test(hostname) ||
      isIP(hostname.replace(/^\[|\]$/g, "")) !== 0
    )
      return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}

export function canIndex(env: SiteEnvironment = process.env): boolean {
  return Boolean(
    getSiteOrigin(env) &&
    env.ALLOW_INDEXING === "true" &&
    (env.VERCEL_ENV === undefined || env.VERCEL_ENV === "production"),
  );
}

export function getPageMetadata(
  locale: Locale,
  env: SiteEnvironment = process.env,
): Metadata {
  const { title, description } = content[locale].seo;
  const origin = getSiteOrigin(env);
  const index = canIndex(env);
  return {
    title,
    description,
    applicationName: "MOUTIMA OKA Francis",
    ...(origin
      ? {
          metadataBase: new URL(origin),
          alternates: {
            canonical: `${origin}/${locale}`,
            languages: {
              fr: `${origin}/fr`,
              en: `${origin}/en`,
              "x-default": `${origin}/fr`,
            },
          },
        }
      : {}),
    robots: { index, follow: index },
    icons: { icon: { url: "/icon.svg", type: "image/svg+xml" } },
    openGraph: {
      type: "website",
      title,
      description,
      siteName: "MOUTIMA OKA Francis",
      locale: locale === "fr" ? "fr_CG" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_CG",
      ...(origin ? { url: `${origin}/${locale}` } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function getProjectMetadata(
  locale: Locale,
  project: PublishedProject,
  env: SiteEnvironment = process.env,
): Metadata {
  const base = getPageMetadata(locale, env);
  const origin = getSiteOrigin(env);
  const path = `/projects/${project.id}`;
  const title = `${project.title} — MOUTIMA OKA Francis`;
  const description = project.summary;
  const image = {
    url: `/${locale}${path}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: title,
  };
  return {
    ...base,
    title,
    description,
    ...(origin
      ? {
          alternates: {
            canonical: `${origin}/${locale}${path}`,
            languages: {
              fr: `${origin}/fr${path}`,
              en: `${origin}/en${path}`,
              "x-default": `${origin}/fr${path}`,
            },
          },
        }
      : {}),
    openGraph: {
      ...base.openGraph,
      title,
      description,
      ...(origin ? { url: `${origin}/${locale}${path}` } : {}),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
