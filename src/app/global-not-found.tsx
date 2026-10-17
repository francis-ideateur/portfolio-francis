import "./globals.css";
import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body>
        <main className="not-found">
          <span className="wordmark">
            MOF<span>.</span>
          </span>
          <p className="eyebrow">404</p>
          <h1>Page introuvable</h1>
          <p lang="en">Page not found</p>
          <div className="flex flex-wrap gap-3">
            <Link className="button button-gold" href="/fr">
              Accueil en français →
            </Link>
            <Link className="button button-outline" href="/en" lang="en">
              Home in English →
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
