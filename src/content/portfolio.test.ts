import assert from "node:assert/strict";
import test from "node:test";
import {
  content,
  contacts,
  getPublicContacts,
  getPublishedProjects,
  isLocale,
  locales,
  projects,
  projectStageLabels,
  projectStages,
  type Contact,
  type Project,
  type ProjectStage,
} from "./portfolio";

// Fictional fixtures are test data, never editorial content.
function approvedProject(overrides: Partial<Project> = {}): Project {
  return {
    id: "test-project",
    internalName: "Internal test reference",
    published: true,
    stage: "exploration",
    translations: {
      fr: {
        title: "Projet test",
        summary: "Résumé test",
        problem: "Besoin test",
      },
      en: {
        title: "Test project",
        summary: "Test summary",
        problem: "Test need",
      },
    },
    ...overrides,
  };
}

function approvedContact(overrides: Partial<Contact> = {}): Contact {
  return {
    id: "test-email",
    kind: "email",
    approved: true,
    label: { fr: "Écrire un email", en: "Send an email" },
    href: "mailto:person@example.com",
    ...overrides,
  };
}

function textPaths(value: unknown, path = ""): string[] {
  if (typeof value === "string") {
    assert.ok(value.trim(), `Missing text at ${path}`);
    return [path];
  }
  assert.ok(
    value !== null && typeof value === "object",
    `Invalid copy at ${path}`,
  );
  return Object.entries(value).flatMap(([key, child]) =>
    textPaths(child, path ? `${path}.${key}` : key),
  );
}

test("both supported languages have complete, matching content and stage labels", () => {
  assert.deepEqual([...locales], ["fr", "en"]);
  assert.deepEqual(textPaths(content.fr).sort(), textPaths(content.en).sort());
  for (const locale of locales) {
    assert.equal(isLocale(locale), true);
    assert.deepEqual(
      Object.keys(projectStageLabels[locale]).sort(),
      [...projectStages].sort(),
    );
    textPaths(projectStageLabels[locale]);
  }
  for (const unsupported of ["", "de", "FR", "fr-FR", "../en"]) {
    assert.equal(isLocale(unsupported), false);
  }
});

test("unconfirmed initiatives and contact details are absent from the public V1", () => {
  assert.deepEqual(
    projects.map(({ id }) => id),
    ["between", "parcelle-pour-tous", "codab"],
  );
  for (const project of projects) {
    assert.equal(project.published, false);
    assert.equal(project.stage, null);
    for (const locale of locales) {
      assert.equal(
        JSON.stringify(content[locale]).includes(project.internalName),
        false,
      );
    }
  }
  assert.deepEqual(contacts, []);
  for (const locale of locales) {
    assert.deepEqual(getPublishedProjects(locale), []);
    assert.deepEqual(getPublicContacts(locale), []);
  }
});

test("a complete project still requires explicit publication and a known status", () => {
  const rejected = [
    approvedProject({ published: false }),
    approvedProject({ stage: null }),
    approvedProject({ stage: "unverified" as ProjectStage }),
    approvedProject({ id: "  " }),
  ];
  for (const locale of locales) {
    assert.deepEqual(getPublishedProjects(locale, rejected), []);
  }
});

test("incomplete or blank project translations hide the project in both languages", () => {
  const complete = approvedProject();
  const rejected = [
    approvedProject({ translations: { fr: complete.translations.fr } }),
  ];
  for (const locale of locales) {
    for (const field of ["title", "summary", "problem"] as const) {
      rejected.push(
        approvedProject({
          translations: {
            ...complete.translations,
            [locale]: { ...complete.translations[locale], [field]: "  " },
          },
        }),
      );
    }
  }
  for (const locale of locales) {
    assert.deepEqual(getPublishedProjects(locale, rejected), []);
  }
});

test("project destinations must be real HTTPS URLs, never placeholders or script links", () => {
  const rejected = [
    "",
    "#",
    "#projects",
    "/project",
    "javascript:alert(1)",
    "http://example.com",
    "not a URL",
    "https://user:password@example.com",
  ];
  for (const href of rejected) {
    assert.deepEqual(
      getPublishedProjects("fr", [approvedProject({ href })]),
      [],
      href,
    );
  }
  assert.equal(
    getPublishedProjects("en", [
      approvedProject({ href: "https://example.com/project" }),
    ])[0]?.href,
    "https://example.com/project",
  );
  assert.equal(getPublishedProjects("en", [approvedProject()]).length, 1);
});

test("publication returns translated public fields without the internal reference", () => {
  const source = approvedProject();
  for (const locale of locales) {
    const [published] = getPublishedProjects(locale, [source]);
    assert.deepEqual(published, {
      id: source.id,
      ...source.translations[locale],
      stage: "exploration",
      stageLabel: projectStageLabels[locale].exploration,
    });
    assert.equal("internalName" in published, false);
    assert.equal("translations" in published, false);
  }
});

test("contact approval and complete bilingual labels are required together", () => {
  const rejected = [
    approvedContact({ approved: false }),
    approvedContact({ id: " " }),
    approvedContact({ label: { fr: "", en: "Email" } }),
    approvedContact({ label: { fr: "Email", en: " " } }),
  ];
  for (const locale of locales) {
    assert.deepEqual(getPublicContacts(locale, rejected), []);
  }
});

test("approved contacts use the correct channel and localised label", () => {
  const source = [
    approvedContact(),
    approvedContact({
      id: "test-linkedin",
      kind: "linkedin",
      href: "https://www.linkedin.com/in/example-person/",
    }),
    approvedContact({
      id: "test-whatsapp",
      kind: "whatsapp",
      href: "https://wa.me/12025550123",
    }),
  ];
  for (const locale of locales) {
    const published = getPublicContacts(locale, source);
    assert.equal(published.length, source.length);
    assert.deepEqual(
      published,
      source.map(({ id, kind, label, href }) => ({
        id,
        kind,
        label: label[locale],
        href,
      })),
    );
  }
});

test("contact validation rejects invalid destinations and lookalike domains", () => {
  const rejected: Contact[] = [
    ...[
      "#",
      "person@example.com",
      "mailto:person",
      "mailto:person@",
      "mailto:person@example.com/path",
      "mailto:person@example.com?bcc=other@example.com",
    ].map((href) => approvedContact({ href })),
    ...[
      "https://linkedin.com.evil.example/in/person",
      "https://linkedin.com/company/example",
      "http://linkedin.com/in/person",
      "javascript:alert(1)",
    ].map((href) => approvedContact({ kind: "linkedin", href })),
    ...[
      "https://wa.me.evil.example/12025550123",
      "https://wa.me/0123456789",
      "https://wa.me/+12025550123",
      "https://wa.me/not-a-number",
    ].map((href) => approvedContact({ kind: "whatsapp", href })),
  ];
  for (const contact of rejected) {
    assert.deepEqual(getPublicContacts("fr", [contact]), [], contact.href);
  }
});
