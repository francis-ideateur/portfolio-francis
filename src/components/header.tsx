"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/content/portfolio";

type HeaderProps = {
  locale: Locale;
  labels: Record<
    "about" | "manifesto" | "projects" | "journey" | "contact",
    string
  >;
  common: { menu: string; close: string; language: string };
};

export function Header({ locale, labels, common }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const otherLocale = locale === "fr" ? "en" : "fr";

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="site-header"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="shell header-inner">
        <a
          className="wordmark"
          href={`/${locale}`}
          aria-label="MOUTIMA OKA Francis"
        >
          MOF<span>.</span>
        </a>
        <nav
          className="desktop-nav"
          aria-label={
            locale === "fr" ? "Navigation principale" : "Main navigation"
          }
        >
          {Object.entries(labels).map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <nav className="language-switch" aria-label={common.language}>
            <span aria-current="page" lang={locale}>
              {locale.toUpperCase()}
            </span>
            <span className="language-divider" aria-hidden="true">
              /
            </span>
            <a
              href={`/${otherLocale}`}
              hrefLang={otherLocale}
              lang={otherLocale}
              onClick={(event) => {
                if (
                  event.button !== 0 ||
                  event.metaKey ||
                  event.ctrlKey ||
                  event.shiftKey ||
                  event.altKey
                )
                  return;
                event.preventDefault();
                setOpen(false);
                router.push(`/${otherLocale}${window.location.hash}`);
              }}
            >
              {otherLocale.toUpperCase()}
            </a>
          </nav>
          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            <span>{open ? common.close : common.menu}</span>
            <span
              className={`menu-lines ${open ? "is-open" : ""}`}
              aria-hidden="true"
            >
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        hidden={!open}
        aria-label={locale === "fr" ? "Navigation mobile" : "Mobile navigation"}
      >
        {Object.entries(labels).map(([id, label], index) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            <span className="nav-number">0{index + 1}</span>
            {label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
