import assert from "node:assert/strict";
import test from "node:test";
import { content } from "../content/portfolio";
import { canIndex, getPageMetadata, getSiteOrigin } from "./site";

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
