import { venique } from "./venique";

/**
 * Public copy is sourced from docs/CONTENU_INITIAL.md.
 * Keep unconfirmed project information out of the rendered page.
 * Both language versions must be complete before publishing a project.
 */
export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export type PortfolioContent = {
  nav: {
    about: string;
    manifesto: string;
    projects: string;
    journey: string;
    contact: string;
  };
  common: {
    skip: string;
    menu: string;
    close: string;
    language: string;
    backTop: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    intro: string;
    positioning: string;
    projectsCta: string;
    contactCta: string;
    motto: string;
    location: string;
    evolving: string;
  };
  about: { eyebrow: string; title: string; body: string };
  manifesto: { eyebrow: string; title: string; quote: string; note: string };
  projectsSection: {
    eyebrow: string;
    title: string;
    intro: string;
    emptyTitle: string;
    emptyBody: string;
    areas: { title: string; description: string }[];
  };
  journey: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { label: string; title: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    emptyTitle: string;
    emptyBody: string;
  };
  footer: { description: string; signature: string };
  seo: { title: string; description: string };
};

export const content: Record<Locale, PortfolioContent> = {
  fr: {
    nav: {
      about: "À propos",
      manifesto: "Manifeste",
      projects: "Projets",
      journey: "Parcours",
      contact: "Collaborer",
    },
    common: {
      skip: "Aller au contenu",
      menu: "Ouvrir le menu",
      close: "Fermer le menu",
      language: "Choisir la langue",
      backTop: "Retour en haut",
    },
    hero: {
      eyebrow: "Entrepreneuriat · Apprentissage · Impact",
      headline: "Des idées aux solutions concrètes.",
      intro:
        "Je suis un entrepreneur en construction, passionné par la création de projets et l'apprentissage continu. Je pars des difficultés du quotidien pour imaginer des solutions utiles. Sur ce portfolio, je partage mon cheminement, mes tentatives et ce que j'apprends en construisant.",
      positioning:
        "Entrepreneur en construction, créateur de projets et apprenant permanent.",
      projectsCta: "Découvrir mes projets",
      contactCta: "Me contacter",
      motto: "La réussite est possible à celui qui tente.",
      location: "République du Congo · Ouvert sur le monde",
      evolving: "Un portfolio qui évolue avec mon parcours",
    },
    about: {
      eyebrow: "À propos",
      title: "L'envie de créer. La volonté d'apprendre.",
      body: "À huit ans, je fabriquais de petites voitures en fil de fer que je vendais à d'autres enfants. Avec le temps, mon envie de créer a rencontré une autre motivation : résoudre des problèmes que je trouvais inutilement difficiles à vivre. L'accès à une éducation de qualité a également marqué mon parcours. Aujourd'hui, je souhaite continuer à apprendre, développer des projets économiquement viables et partager honnêtement mes essais, mes erreurs et mes apprentissages.",
    },
    manifesto: {
      eyebrow: "Mon manifeste",
      title: "Faire le choix d'essayer.",
      quote:
        "Je n'ai pas encore l'histoire d'un homme qui a réussi. J'ai celle d'un homme qui essaie.",
      note: "Les premiers mots d'un manifeste en construction.",
    },
    projectsSection: {
      eyebrow: "Mes projets & intentions",
      title: "Construire ce qui peut être utile.",
      intro:
        "Mon ambition : construire des solutions utiles, contribuer au renforcement des compétences et partir du Congo pour explorer des besoins comparables ailleurs.",
      emptyTitle: "Les projets se dévoileront ici.",
      emptyBody:
        "Ce portfolio s'enrichira progressivement de présentations de projets, avec leur contexte et leur état d'avancement confirmé.",
      areas: [
        {
          title: "Entrepreneuriat",
          description:
            "Partir des difficultés du quotidien pour imaginer des solutions utiles et économiquement viables.",
        },
        {
          title: "Développement de projets",
          description:
            "Explorer comment transformer une idée en projet concret, en gardant les besoins réels comme point de départ.",
        },
        {
          title: "Apprentissage continu",
          description:
            "Continuer à apprendre et partager honnêtement mes essais, mes erreurs et les leçons du chemin.",
        },
      ],
    },
    journey: {
      eyebrow: "Parcours & apprentissage",
      title: "Un chemin qui se construit.",
      intro:
        "La création, l'entrepreneuriat et la formation continue sont les fils conducteurs de mon parcours.",
      items: [
        {
          label: "À huit ans",
          title: "Les premiers essais",
          description:
            "Je fabriquais de petites voitures en fil de fer que je vendais à d'autres enfants.",
        },
        {
          label: "Aujourd'hui",
          title: "Apprendre en construisant",
          description:
            "Je m'intéresse à la gestion de projet, à l'entrepreneuriat et à la formation continue.",
        },
        {
          label: "La suite",
          title: "Développer et transmettre",
          description:
            "Je souhaite développer des projets économiquement viables et partager mes apprentissages.",
        },
      ],
    },
    contact: {
      eyebrow: "Collaborer",
      title: "Les idées avancent aussi par la rencontre.",
      intro:
        "Vous travaillez sur une problématique concrète, un projet entrepreneurial ou une initiative de développement ? Je suis ouvert aux échanges constructifs, aux collaborations et au mentorat.",
      emptyTitle: "Coordonnées à venir",
      emptyBody:
        "Mes coordonnées publiques seront ajoutées après confirmation. Elles ne sont pas encore disponibles sur ce portfolio.",
    },
    footer: {
      description:
        "Entrepreneur en construction. Depuis la République du Congo, avec une ouverture sur le monde.",
      signature: "La réussite est possible à celui qui tente.",
    },
    seo: {
      title: "MOUTIMA OKA Francis — Portfolio entrepreneurial",
      description:
        "Découvrez le parcours, la vision et les projets de MOUTIMA OKA Francis, entrepreneur en construction au Congo.",
    },
  },
  en: {
    nav: {
      about: "About",
      manifesto: "Manifesto",
      projects: "Projects",
      journey: "Journey",
      contact: "Collaborate",
    },
    common: {
      skip: "Skip to content",
      menu: "Open menu",
      close: "Close menu",
      language: "Choose a language",
      backTop: "Back to top",
    },
    hero: {
      eyebrow: "Entrepreneurship · Learning · Impact",
      headline: "Turning ideas into practical solutions.",
      intro:
        "I am an aspiring entrepreneur with a passion for building projects and learning continuously. Everyday challenges inspire me to explore useful solutions. Through this portfolio, I share my journey, my experiments, and what I learn along the way.",
      positioning:
        "Aspiring entrepreneur, project creator, and lifelong learner.",
      projectsCta: "Explore my projects",
      contactCta: "Get in touch",
      motto: "Success is possible for those who dare to try.",
      location: "Republic of the Congo · Open to the world",
      evolving: "A portfolio that grows with my journey",
    },
    about: {
      eyebrow: "About me",
      title: "A desire to create. A commitment to learn.",
      body: "At eight years old, I made small toy cars out of wire and sold them to other children. Over time, my interest in creating things grew into another motivation: finding solutions to everyday problems. Limited access to quality education also shaped my perspective. Today, I want to keep learning, develop sustainable projects, and openly share my attempts, mistakes, and lessons.",
    },
    manifesto: {
      eyebrow: "My manifesto",
      title: "Choosing to try.",
      quote:
        "I do not yet have the story of a man who has succeeded. I have the story of a man who is trying.",
      note: "The opening words of a manifesto taking shape.",
    },
    projectsSection: {
      eyebrow: "My projects & intentions",
      title: "Building what can be useful.",
      intro:
        "My ambition: to build useful solutions, help people develop their skills, and start in the Congo before exploring similar needs elsewhere.",
      emptyTitle: "Projects will find their place here.",
      emptyBody:
        "This portfolio will gradually feature project introductions, with their context and confirmed stage of progress.",
      areas: [
        {
          title: "Entrepreneurship",
          description:
            "Starting with everyday challenges to imagine useful and economically viable solutions.",
        },
        {
          title: "Project development",
          description:
            "Exploring how to turn an idea into a practical project, with real needs as the starting point.",
        },
        {
          title: "Continuous learning",
          description:
            "Continuing to learn and openly sharing my attempts, mistakes, and lessons along the way.",
        },
      ],
    },
    journey: {
      eyebrow: "Journey & learning",
      title: "A path taking shape.",
      intro:
        "Creating, entrepreneurship, and continuous learning are the threads that connect my journey.",
      items: [
        {
          label: "At eight years old",
          title: "The first experiments",
          description:
            "I made small toy cars out of wire and sold them to other children.",
        },
        {
          label: "Today",
          title: "Learning by building",
          description:
            "My interests include project management, entrepreneurship, and continuous learning.",
        },
        {
          label: "Looking ahead",
          title: "Developing and sharing",
          description:
            "I want to develop economically viable projects and share what I learn.",
        },
      ],
    },
    contact: {
      eyebrow: "Collaborate",
      title: "Ideas also grow through conversation.",
      intro:
        "Working on a real-world challenge, an entrepreneurial project, or a development initiative? I welcome thoughtful conversations, potential collaborations, and mentorship opportunities.",
      emptyTitle: "Contact details to come",
      emptyBody:
        "My public contact details will be added once confirmed. They are not yet available on this portfolio.",
    },
    footer: {
      description:
        "An aspiring entrepreneur. From the Republic of the Congo, with an openness to the world.",
      signature: "Success is possible for those who dare to try.",
    },
    seo: {
      title: "MOUTIMA OKA Francis — Entrepreneurial Portfolio",
      description:
        "Discover the journey, vision, and projects of MOUTIMA OKA Francis, an aspiring entrepreneur based in the Republic of the Congo.",
    },
  },
};

export const projectStages = [
  "idea",
  "exploration",
  "design",
  "development",
  "pilot",
  "completed",
  "paused",
  "abandoned",
] as const;

export type ProjectStage = (typeof projectStages)[number];

export const projectStageLabels: Record<
  Locale,
  Record<ProjectStage, string>
> = {
  fr: {
    idea: "Idée",
    exploration: "Exploration",
    design: "En conception",
    development: "En développement",
    pilot: "Pilote",
    completed: "Réalisé",
    paused: "En pause",
    abandoned: "Abandonné / non abouti",
  },
  en: {
    idea: "Idea",
    exploration: "Exploration",
    design: "In design",
    development: "In development",
    pilot: "Pilot",
    completed: "Completed",
    paused: "On hold",
    abandoned: "Abandoned / unrealized",
  },
};

export type ProjectDetail = {
  category: string;
  statusNote: string;
  sections: readonly {
    id: string;
    title: string;
    paragraphs: readonly string[];
    bullets?: readonly string[];
  }[];
};

export const projectUi: Record<
  Locale,
  {
    readMore: string;
    backToProjects: string;
    contents: string;
    discuss: string;
    externalLink: string;
  }
> = {
  fr: {
    readMore: "Découvrir le projet",
    backToProjects: "Retour aux projets",
    contents: "Dans cette fiche",
    discuss: "Échanger sur ce projet",
    externalLink: "Visiter le site du projet",
  },
  en: {
    readMore: "Explore the project",
    backToProjects: "Back to projects",
    contents: "On this page",
    discuss: "Discuss this project",
    externalLink: "Visit the project website",
  },
};

export type ProjectTranslation = {
  title: string;
  summary: string;
  problem: string;
  details?: ProjectDetail;
};

export type Project = {
  id: string;
  /** Internal reference only. It does not authorize publication. */
  internalName: string;
  published: boolean;
  stage: ProjectStage | null;
  translations: Partial<Record<Locale, ProjectTranslation>>;
  /** Optional, approved public HTTPS destination. */
  href?: string;
};

export type PublishedProject = ProjectTranslation & {
  id: string;
  stage: ProjectStage;
  stageLabel: string;
  href?: string;
};

/** Names are already in the repository documentation. No private detail belongs here. */
export const projects: readonly Project[] = [
  venique,
  {
    id: "between",
    internalName: "Between",
    published: false,
    stage: null,
    translations: {},
  },
  {
    id: "parcelle-pour-tous",
    internalName: "Parcelle pour tous",
    published: false,
    stage: null,
    translations: {},
  },
  {
    id: "codab",
    internalName: "CODAB",
    published: false,
    stage: null,
    translations: {},
  },
];

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isSlug(value: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

function hasCompleteDetails(project: Project): boolean {
  const details = locales.map(
    (locale) => project.translations[locale]?.details,
  );
  if (details.every((detail) => detail === undefined)) return true;
  return details.every(
    (detail) =>
      detail &&
      isNonEmpty(detail.category) &&
      isNonEmpty(detail.statusNote) &&
      detail.sections.length > 0 &&
      new Set(detail.sections.map((section) => section.id)).size ===
        detail.sections.length &&
      detail.sections.every(
        (section) =>
          isSlug(section.id) &&
          isNonEmpty(section.title) &&
          section.paragraphs.every(isNonEmpty) &&
          (section.bullets === undefined ||
            section.bullets.every(isNonEmpty)) &&
          (section.paragraphs.length > 0 || (section.bullets?.length ?? 0) > 0),
      ) &&
      detail.sections.map((section) => section.id).join(",") ===
        details[0]?.sections.map((section) => section.id).join(","),
  );
}

function isPublicHttpsUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      url.hostname.includes(".") &&
      !url.username &&
      !url.password
    );
  } catch {
    return false;
  }
}

export function getPublishedProjects(
  locale: Locale,
  source: readonly Project[] = projects,
): PublishedProject[] {
  return source.flatMap((project) => {
    if (
      project.published !== true ||
      !isSlug(project.id) ||
      !project.stage ||
      !projectStages.some((stage) => stage === project.stage) ||
      !locales.every((language) => {
        const translation = project.translations[language];
        return (
          translation &&
          isNonEmpty(translation.title) &&
          isNonEmpty(translation.summary) &&
          isNonEmpty(translation.problem)
        );
      }) ||
      (project.href !== undefined && !isPublicHttpsUrl(project.href)) ||
      !hasCompleteDetails(project)
    ) {
      return [];
    }

    const translation = project.translations[locale];
    if (!translation) return [];

    return [
      {
        id: project.id,
        ...translation,
        stage: project.stage,
        stageLabel: projectStageLabels[locale][project.stage],
        ...(project.href ? { href: project.href } : {}),
      },
    ];
  });
}

export function getProjectDetails(
  locale: Locale,
  id: string,
  source: readonly Project[] = projects,
): (PublishedProject & { details: ProjectDetail }) | undefined {
  const project = getPublishedProjects(locale, source).find(
    (item) => item.id === id,
  );
  return project?.details
    ? { ...project, details: project.details }
    : undefined;
}

export type Contact = {
  id: string;
  kind: "email" | "linkedin" | "whatsapp";
  approved: boolean;
  label: Record<Locale, string>;
  href: string;
};

export type PublicContact = {
  id: string;
  kind: Contact["kind"];
  label: string;
  href: string;
};

/** Add a contact only after the owner explicitly approves publishing it. */
export const contacts: readonly Contact[] = [
  {
    id: "public-email",
    kind: "email",
    approved: true,
    label: {
      fr: "francismoutima@gmail.com",
      en: "francismoutima@gmail.com",
    },
    href: "mailto:francismoutima@gmail.com",
  },
];

function isContactDestination(contact: Contact): boolean {
  if (contact.kind === "email") {
    return /^mailto:[a-z0-9._+-]+@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/i.test(
      contact.href,
    );
  }

  if (!isPublicHttpsUrl(contact.href)) return false;
  const url = new URL(contact.href);

  if (contact.kind === "linkedin") {
    return (
      ["linkedin.com", "www.linkedin.com"].includes(url.hostname) &&
      /^\/in\/[^/]+\/?$/.test(url.pathname)
    );
  }

  return (
    contact.kind === "whatsapp" &&
    url.hostname === "wa.me" &&
    /^\/[1-9][0-9]{6,14}\/?$/.test(url.pathname)
  );
}

export function getPublicContacts(
  locale: Locale,
  source: readonly Contact[] = contacts,
): PublicContact[] {
  return source
    .filter(
      (contact) =>
        contact.approved === true &&
        isNonEmpty(contact.id) &&
        locales.every((language) => isNonEmpty(contact.label[language])) &&
        isContactDestination(contact),
    )
    .map((contact) => ({
      id: contact.id,
      kind: contact.kind,
      label: contact.label[locale],
      href: contact.href,
    }));
}
