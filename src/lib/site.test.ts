import assert from "node:assert/strict";
import test from "node:test";
import { content, getProjectDetails, locales } from "../content/portfolio";
import sitemap from "../app/sitemap";
import {
  canIndex,
  getPageMetadata,
  getProjectMetadata,
  getSiteOrigin,
} from "./site";

test("canonical origin must be explicitly configured as public HTTPS", () => {
  assert.equal(getSiteOrigin({}), undefined);
  assert.equal(
    getSiteOrigin({ SITE_URL: "https://portfolio.example.org/" }),
    "https://portfolio.example.org",
  );
  for (const SITE_URL of [
    "bad url",
    "http://portfolio.example.org",
    "https://user:pass@example.org",
    "https://example.org/fr",
    "https://example.org/?draft=true",
    "https://example.org/#preview",
    "https://localhost",
    "https://dev.local",
    "https://preview.localhost",
    "https://server.internal",
    "https://127.0.0.1",
    "https://10.0.0.1",
    "https://192.168.0.1",
    "https://[::1]",
    "https://example.org:3000",
    " https://example.org",
    "https://example.org ",
    "https://example.org/?",
    "https://example.org/#",
    "https://example.org/fr/..",
    "https://bad_host.example.org",
    "https://example.org\\fr",
  ])
    assert.equal(getSiteOrigin({ SITE_URL }), undefined, SITE_URL);
});

test("indexing is opt-in and previews remain excluded", () => {
  const SITE_URL = "https://portfolio.example.org";
  assert.equal(canIndex({}), false);
  assert.equal(canIndex({ SITE_URL }), false);
  assert.equal(canIndex({ ALLOW_INDEXING: "true" }), false);
  assert.equal(canIndex({ SITE_URL, ALLOW_INDEXING: "TRUE" }), false);
  assert.equal(canIndex({ SITE_URL, ALLOW_INDEXING: "true" }), true);
  assert.equal(
    canIndex({ SITE_URL, ALLOW_INDEXING: "true", VERCEL_ENV: "production" }),
    true,
  );
  for (const VERCEL_ENV of ["preview", "development", ""]) {
    assert.equal(
      canIndex({ SITE_URL, ALLOW_INDEXING: "true", VERCEL_ENV }),
      false,
    );
  }
});

test("both languages receive translated metadata without invented URLs", () => {
  for (const locale of ["fr", "en"] as const) {
    const metadata = getPageMetadata(locale, {});
    assert.equal(metadata.title, content[locale].seo.title);
    assert.equal(metadata.description, content[locale].seo.description);
    assert.equal(metadata.alternates, undefined);
    assert.equal(metadata.metadataBase, undefined);
    assert.deepEqual(metadata.robots, { index: false, follow: false });
  }
});

test("approved origin creates canonical and bilingual alternatives", () => {
  const metadata = getPageMetadata("en", {
    SITE_URL: "https://portfolio.example.org",
    ALLOW_INDEXING: "true",
  });
  assert.deepEqual(metadata.alternates, {
    canonical: "https://portfolio.example.org/en",
    languages: {
      fr: "https://portfolio.example.org/fr",
      en: "https://portfolio.example.org/en",
      "x-default": "https://portfolio.example.org/fr",
    },
  });
  assert.deepEqual(metadata.robots, { index: true, follow: true });
});

for (const id of ["venique", "between"]) {
  test(`${id} metadata remains noindex by default and uses its localized content`, () => {
    for (const locale of locales) {
      const project = getProjectDetails(locale, id);
      assert.ok(project);
      const metadata = getProjectMetadata(locale, project, {});
      assert.equal(metadata.title, `${project.title} — MOUTIMA OKA Francis`);
      assert.equal(metadata.description, project.summary);
      assert.equal(metadata.alternates, undefined);
      assert.equal(metadata.metadataBase, undefined);
      assert.deepEqual(metadata.robots, { index: false, follow: false });
      assert.equal(metadata.openGraph?.title, metadata.title);
      assert.equal(metadata.openGraph?.description, project.summary);
      assert.equal(metadata.openGraph?.url, undefined);
      assert.equal(metadata.twitter?.title, metadata.title);
      assert.equal(metadata.twitter?.description, project.summary);

      for (const images of [
        metadata.openGraph?.images,
        metadata.twitter?.images,
      ]) {
        assert.ok(
          images,
          "Project metadata must provide its own sharing image",
        );
        const image = Array.isArray(images) ? images[0] : images;
        const url =
          typeof image === "object" && "url" in image ? image.url : image;
        assert.ok(
          String(url).endsWith(`/${locale}/projects/${id}/opengraph-image`),
        );
      }
    }
  });

  test(`${id} canonical and language URLs stay on the same project`, () => {
    const SITE_URL = "https://portfolio.example.org";
    for (const locale of locales) {
      const project = getProjectDetails(locale, id);
      assert.ok(project);
      const metadata = getProjectMetadata(locale, project, {
        SITE_URL,
        ALLOW_INDEXING: "true",
      });
      assert.deepEqual(metadata.alternates, {
        canonical: `${SITE_URL}/${locale}/projects/${id}`,
        languages: {
          fr: `${SITE_URL}/fr/projects/${id}`,
          en: `${SITE_URL}/en/projects/${id}`,
          "x-default": `${SITE_URL}/fr/projects/${id}`,
        },
      });
      assert.equal(
        metadata.openGraph?.url,
        `${SITE_URL}/${locale}/projects/${id}`,
      );
      assert.deepEqual(metadata.robots, { index: true, follow: true });
    }
  });

  test(`${id} previews remain noindex even when indexing is enabled`, () => {
    for (const locale of locales) {
      const project = getProjectDetails(locale, id);
      assert.ok(project);
      for (const VERCEL_ENV of ["preview", "development"]) {
        const metadata = getProjectMetadata(locale, project, {
          SITE_URL: "https://portfolio.example.org",
          ALLOW_INDEXING: "true",
          VERCEL_ENV,
        });
        assert.deepEqual(metadata.robots, { index: false, follow: false });
      }
    }
  });
}

test("sitemap includes only approved bilingual pages after explicit indexing activation", () => {
  const keys = ["SITE_URL", "ALLOW_INDEXING", "VERCEL_ENV"] as const;
  const previous = keys.map((key) => process.env[key]);
  try {
    for (const key of keys) delete process.env[key];
    assert.deepEqual(sitemap(), []);
    process.env.SITE_URL = "https://portfolio.example.org";
    assert.deepEqual(sitemap(), []);
    process.env.ALLOW_INDEXING = "true";
    process.env.VERCEL_ENV = "production";
    assert.deepEqual(
      sitemap(),
      ["", "/projects/venique", "/projects/between"].flatMap((path) =>
        locales.map((locale) => ({
          url: `https://portfolio.example.org/${locale}${path}`,
          alternates: {
            languages: {
              fr: `https://portfolio.example.org/fr${path}`,
              en: `https://portfolio.example.org/en${path}`,
            },
          },
        })),
      ),
    );
    process.env.VERCEL_ENV = "preview";
    assert.deepEqual(sitemap(), []);
  } finally {
    keys.forEach((key, index) => {
      const value = previous[index];
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    });
  }
});
