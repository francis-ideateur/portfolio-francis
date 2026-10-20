import Link from "next/link";
import {
  content,
  projectUi,
  type Locale,
  type ProjectDetail as ProjectDetailContent,
  type PublishedProject,
} from "@/content/portfolio";
import { Header } from "./header";

export function ProjectDetail({
  locale,
  project,
}: {
  locale: Locale;
  project: PublishedProject & { details: ProjectDetailContent };
}) {
  const c = content[locale];
  const ui = projectUi[locale];
  return (
    <>
      <a href="#main" className="skip-link">
        {c.common.skip}
      </a>
      <Header
        locale={locale}
        labels={c.nav}
        common={c.common}
        pagePath={`/projects/${project.id}`}
      />
      <main id="main" tabIndex={-1}>
        <section
          className="project-hero"
          aria-labelledby="project-title"
          id="top"
        >
          <div className="shell">
            <Link href={`/${locale}#projects`} className="project-back">
              <span aria-hidden="true">←</span>
              {ui.backToProjects}
            </Link>
            <p className="eyebrow gold">{project.details.category}</p>
            <h1 id="project-title">
              {project.title}
              <span className="gold">.</span>
            </h1>
            <p className="project-summary">{project.summary}</p>
            <p className="project-status">
              {project.stageLabel} — {project.details.statusNote}
            </p>
          </div>
        </section>
        <div className="section section-light">
          <div className="shell project-detail-grid">
            <nav className="project-contents" aria-label={ui.contents}>
              <p className="eyebrow">{ui.contents}</p>
              <ol>
                {project.details.sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>
                      <span aria-hidden="true">0{index + 1}</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <article className="project-body" aria-labelledby="project-title">
              {project.details.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`project-detail-section${section.id === "progress" ? " project-progress" : ""}`}
                  aria-labelledby={`${section.id}-title`}
                >
                  <h2 id={`${section.id}-title`}>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
              <Link className="button button-gold" href={`/${locale}#contact`}>
                {ui.discuss}
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          </div>
        </div>
      </main>
      <footer className="site-footer">
        <div className="shell footer-top">
          <Link
            className="wordmark"
            href={`/${locale}`}
            aria-label="MOUTIMA OKA Francis"
          >
            MOF<span>.</span>
          </Link>
          <p>{c.footer.description}</p>
          <a className="back-top" href="#top">
            {c.common.backTop}
            <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className="shell footer-bottom">
          <p>© {new Date().getFullYear()} MOUTIMA OKA Francis</p>
          <Link href={`/${locale}#projects`}>{ui.backToProjects}</Link>
          <p>{c.footer.signature}</p>
        </div>
      </footer>
    </>
  );
}
