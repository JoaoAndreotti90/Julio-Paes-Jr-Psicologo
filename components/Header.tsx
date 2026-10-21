"use client";

import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

const LINKS: NavLink[] = [
  { href: "#atendimento", label: "Atendimento" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header id="siteHeader" className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <a href="#top" className="brand" aria-label="Julio Paes Jr., psicólogo. Voltar ao topo">
          <span className="wordmark">
            Julio Paes<span className="suffix">Jr.</span>
          </span>
          <span className="brand-sub">Psicólogo · CRP 06/239409</span>
        </a>
        <nav aria-label="Principal">
          <ul className={"nav-links" + (menuOpen ? " open" : "")} id="navlist">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-right">
          <a href="#agendar" className="btn btn-primary">
            Agendar
          </a>
          <button
            className="burger"
            id="burger"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="navlist"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line className="l1" x1="4" y1="8.5" x2="20" y2="8.5" />
              <line className="l2" x1="4" y1="15.5" x2="20" y2="15.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
