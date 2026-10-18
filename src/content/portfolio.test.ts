import assert from "node:assert/strict";
import test from "node:test";
import {
  content,
  contacts,
  getPublicContacts,
  getProjectDetails,
  getPublishedProjects,
  isLocale,
  locales,
  projects,
  projectStageLabels,
  projectStages,
  type Contact,
  type Project,
  type ProjectDetail,
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

function detailedProject(overrides: Partial<Project> = {}): Project {
  const project = approvedProject();
  return {
    ...project,
    translations: {
      fr: {
        ...project.translations.fr!,
        details: {
          category: "Catégorie test",
          statusNote: "Note de statut test",
          sections: [
            {
              id: "overview",
              title: "Présentation",
              paragraphs: ["Texte test"],
            },
          ],
        },
      },
      en: {
        ...project.translations.en!,
        details: {
          category: "Test category",
          statusNote: "Test status note",
          sections: [
            { id: "overview", title: "Overview", paragraphs: ["Test text"] },
          ],
        },
      },
    },
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

test("only approved Venique is public while unconfirmed initiatives remain drafts", () => {
  const drafts = projects.filter(({ id }) => id !== "venique");
  assert.deepEqual(
    drafts.map(({ id }) => id),
    ["between", "parcelle-pour-tous", "codab"],
  );
  for (const project of drafts) {
    assert.equal(project.published, false);
    assert.equal(project.stage, null);
    for (const locale of locales) {
      assert.equal(
        JSON.stringify(content[locale]).includes(project.internalName),
        false,
      );
    }
  }
  for (const locale of locales) {
    assert.deepEqual(
      getPublishedProjects(locale).map(({ id }) => id),
      ["venique"],
    );
    for (const project of drafts) {
      assert.equal(getProjectDetails(locale, project.id), undefined);
    }
  }
});

test("Venique has six complete bilingual sections and its approved development status", () => {
  const expectedStatus = {
    fr: "En développement — modules fonctionnels testés localement",
    en: "In development — functional modules tested locally",
  };
  for (const locale of locales) {
    const project = getProjectDetails(locale, "venique");
    assert.ok(project);
    assert.equal(project.stage, "development");
    assert.equal(
      `${project.stageLabel} — ${project.details.statusNote}`,
      expectedStatus[locale],
    );
    assert.deepEqual(
      project.details.sections.map(({ id }) => id),
      ["overview", "problem", "solution", "progress", "impact", "outlook"],
    );
    textPaths(project.details);
    assert.equal(project.href, undefined, "No unapproved demo destination");
  }
  assert.deepEqual(
    textPaths(getProjectDetails("fr", "venique")!.details).sort(),
    textPaths(getProjectDetails("en", "venique")!.details).sort(),
  );
});

test("direct project lookup cannot expose a draft, unknown stage, or incomplete translation", () => {
  const complete = detailedProject();
  const rejected = [
    detailedProject({ published: false }),
    detailedProject({ stage: null }),
    detailedProject({ stage: "unverified" as ProjectStage }),
    detailedProject({ translations: { fr: complete.translations.fr } }),
    detailedProject({
      translations: {
        ...complete.translations,
        en: { ...complete.translations.en!, summary: " " },
      },
    }),
    approvedProject(),
  ];
  for (const locale of locales) {
    assert.ok(getProjectDetails(locale, complete.id, [complete]));
    assert.equal(getProjectDetails(locale, "unknown", [complete]), undefined);
    for (const project of rejected) {
      assert.equal(getProjectDetails(locale, project.id, [project]), undefined);
    }
  }
});

test("project routes accept only safe slugs", () => {
  for (const id of [
    " ",
    "Venique",
    "../venique",
    "test/project",
    "test?draft",
    "test#details",
    "test--project",
    "test_project",
  ]) {
    const project = detailedProject({ id });
    for (const locale of locales) {
      assert.deepEqual(getPublishedProjects(locale, [project]), []);
      assert.equal(getProjectDetails(locale, id, [project]), undefined);
    }
  }
});

test("partial or empty project details are unavailable in both languages", () => {
  const complete = detailedProject();
  const details = complete.translations.en!.details!;
  const invalidDetails: (ProjectDetail | undefined)[] = [
    undefined,
    { ...details, category: " " },
    { ...details, statusNote: " " },
    { ...details, sections: [] },
    {
      ...details,
      sections: [{ id: "overview", title: " ", paragraphs: ["Test text"] }],
    },
    {
      ...details,
      sections: [{ id: "overview", title: "Overview", paragraphs: [] }],
    },
    {
      ...details,
      sections: [{ id: "overview", title: "Overview", paragraphs: [" "] }],
    },
    {
      ...details,
      sections: [
        { id: "overview", title: "Overview", paragraphs: [], bullets: [" "] },
      ],
    },
    { ...details, sections: [{ ...details.sections[0], id: "../overview" }] },
    { ...details, sections: [details.sections[0], details.sections[0]] },
    {
      ...details,
      sections: [{ ...details.sections[0], id: "different-section" }],
    },
  ];
  for (const invalid of invalidDetails) {
    const project = detailedProject({
      translations: {
        ...complete.translations,
        en: { ...complete.translations.en!, details: invalid },
      },
    });
    for (const locale of locales) {
      assert.deepEqual(getPublishedProjects(locale, [project]), []);
      assert.equal(getProjectDetails(locale, project.id, [project]), undefined);
    }
  }
});

test("only the email authorized by Francis is public in both languages", () => {
  assert.equal(contacts.length, 1);
  assert.equal(contacts[0].approved, true);
  for (const locale of locales) {
    assert.deepEqual(getPublicContacts(locale), [
      {
        id: "public-email",
        kind: "email",
        label: "francismoutima@gmail.com",
        href: "mailto:francismoutima@gmail.com",
      },
    ]);
    assert.deepEqual(getPublicContacts(locale, []), []);
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
