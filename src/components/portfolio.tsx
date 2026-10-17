import {
  content,
  getPublishedProjects,
  getPublicContacts,
  type Locale,
} from "@/content/portfolio";
import { Header } from "./header";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span className="arrow" aria-hidden="true">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

function Monogram() {
  return (
    <div className="monogram-art" aria-hidden="true">
      <svg viewBox="0 0 500 520" fill="none" className="orbital-art">
        <circle cx="250" cy="250" r="192" />
        <circle cx="250" cy="250" r="155" />
        <ellipse
          cx="250"
          cy="250"
          rx="100"
          ry="192"
          transform="rotate(35 250 250)"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="100"
          ry="192"
          transform="rotate(-35 250 250)"
        />
        <path
          d="M58 250H442M250 58V442M114 114L386 386M114 386L386 114"
          className="orbital-axis"
        />
        <circle cx="250" cy="58" r="5" className="orbital-dot" />
        <circle cx="386" cy="386" r="5" className="orbital-dot" />
        <path d="M29 75V29H75M425 29H471V75M29 425V471H75M425 471H471V425" />
      </svg>
      <span className="art-initials">
        MOF<span>.</span>
      </span>
      <span className="art-caption">MOUTIMA OKA FRANCIS</span>
    </div>
  );
}

export function Portfolio({ locale }: { locale: Locale }) {
  const c = content[locale];
  const projects = getPublishedProjects(locale);
  const contacts = getPublicContacts(locale);

  return (
    <>
      <a href="#main" className="skip-link">
        {c.common.skip}
      </a>
      <Header locale={locale} labels={c.nav} common={c.common} />
      <main id="main" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title" id="top">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="gold-line" />
                {c.hero.eyebrow}
              </p>
              <h1 id="hero-title">
                <span className="name-family">MOUTIMA OKA</span>
                <span className="name-given">
                  Francis<span className="gold">.</span>
                </span>
              </h1>
              <p className="hero-headline">{c.hero.headline}</p>
              <p className="hero-positioning">{c.hero.positioning}</p>
              <div className="hero-buttons flex flex-wrap gap-3">
                <a className="button button-gold" href="#projects">
                  {c.hero.projectsCta}
                  <Arrow />
                </a>
                <a className="button button-outline" href="#contact">
                  {c.hero.contactCta}
                  <Arrow diagonal />
                </a>
              </div>
            </div>
            <Monogram />
          </div>
          <div className="shell hero-bottom">
            <p>
              <span className="location-mark" aria-hidden="true">
                ◎
              </span>
              {c.hero.location}
            </p>
            <a href="#about">
              {c.nav.about}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section
          className="section section-light"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="shell about-grid">
            <div>
              <SectionLabel number="01">{c.about.eyebrow}</SectionLabel>
              <h2 id="about-title">{c.about.title}</h2>
              <a className="text-link" href="#manifesto">
                {c.nav.manifesto}
                <Arrow diagonal />
              </a>
            </div>
            <div className="about-copy">
              <p className="lead">{c.hero.intro}</p>
              <div className="small-divider" />
              <p>{c.about.body}</p>
            </div>
          </div>
        </section>

        <section
          className="section manifesto-section"
          id="manifesto"
          aria-labelledby="manifesto-title"
        >
          <div className="shell manifesto-inner">
            <SectionLabel number="02">{c.manifesto.eyebrow}</SectionLabel>
            <h2 className="sr-only" id="manifesto-title">
              {c.manifesto.title}
            </h2>
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              <p>{c.manifesto.quote}</p>
              <footer>MOUTIMA OKA Francis</footer>
            </blockquote>
            <p className="manifesto-motto">{c.hero.motto}</p>
            <p className="manifesto-note">{c.manifesto.note}</p>
          </div>
        </section>

        <section
          className="section section-light projects-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="shell">
            <SectionLabel number="03">{c.projectsSection.eyebrow}</SectionLabel>
            <div className="section-heading">
              <h2 id="projects-title">{c.projectsSection.title}</h2>
              <p>{c.projectsSection.intro}</p>
            </div>
            {projects.length > 0 ? (
              <div className="project-grid">
                {projects.map((project) => (
                  <article className="project-card" key={project.id}>
                    <span className="stage-label">{project.stageLabel}</span>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <p>{project.problem}</p>
                    {project.href && (
                      <a className="text-link" href={project.href}>
                        {project.title}
                        <Arrow diagonal />
                      </a>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div className="project-note">
                <span className="project-note-icon" aria-hidden="true">
                  ↗
                </span>
                <div>
                  <h3>{c.projectsSection.emptyTitle}</h3>
                  <p>{c.projectsSection.emptyBody}</p>
                </div>
              </div>
            )}
            <div className="areas-grid">
              {c.projectsSection.areas.map((area, i) => (
                <article className="area-card" key={area.title}>
                  <div className="area-top">
                    <span className="area-index">0{i + 1}</span>
                    <span
                      aria-hidden="true"
                      className={`area-symbol area-symbol-${i}`}
                    />
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section journey-section"
          id="journey"
          aria-labelledby="journey-title"
        >
          <div className="shell">
            <SectionLabel number="04">{c.journey.eyebrow}</SectionLabel>
            <div className="section-heading">
              <h2 id="journey-title">{c.journey.title}</h2>
              <p>{c.journey.intro}</p>
            </div>
            <ol className="journey-grid">
              {c.journey.items.map((item) => (
                <li key={item.title}>
                  <span className="journey-dot" aria-hidden="true" />
                  <p className="journey-label">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="section contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="shell contact-grid">
            <div>
              <SectionLabel number="05">{c.contact.eyebrow}</SectionLabel>
              <h2 id="contact-title">{c.contact.title}</h2>
              <p className="contact-intro">{c.contact.intro}</p>
            </div>
            <div className="contact-panel">
              {contacts.length > 0 ? (
                <div className="contact-links">
                  {contacts.map((contact) => (
                    <a
                      className="contact-link"
                      key={contact.id}
                      href={contact.href}
                    >
                      {contact.label}
                      <Arrow diagonal />
                    </a>
                  ))}
                </div>
              ) : (
                <>
                  <span className="contact-glyph" aria-hidden="true">
                    ↗
                  </span>
                  <h3>{c.contact.emptyTitle}</h3>
                  <p>{c.contact.emptyBody}</p>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell footer-top">
          <a
            className="wordmark"
            href={`/${locale}`}
            aria-label="MOUTIMA OKA Francis"
          >
            MOF<span>.</span>
          </a>
          <p>{c.footer.description}</p>
          <a className="back-top" href="#top">
            {c.common.backTop}
            <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className="shell footer-bottom">
          <p>© {new Date().getFullYear()} MOUTIMA OKA Francis</p>
          <p>{c.hero.evolving}</p>
          <p>{c.footer.signature}</p>
        </div>
      </footer>
    </>
  );
}
