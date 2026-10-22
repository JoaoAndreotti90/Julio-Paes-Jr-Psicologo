"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { whatsappLink, PHONE_DISPLAY } from "@/lib/constants";

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
  const burgerRef = useRef<HTMLButtonElement>(null);

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
    // Com o menu aberto, o resto da página fica fora do alcance do teclado e do leitor de tela
    const outside = [document.querySelector("main"), document.querySelector("footer")];
    outside.forEach((el) => el?.toggleAttribute("inert", menuOpen));
    if (menuOpen) {
      document.querySelector<HTMLAnchorElement>(".menu .nav-links a")?.focus({ preventScroll: true });
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        burgerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      outside.forEach((el) => el?.removeAttribute("inert"));
    };
  }, [menuOpen]);

  return (
    <header id="siteHeader" className={scrolled ? "scrolled" : ""}>
      <a className="skip" href="#top">
        Pular para o conteúdo
      </a>
      <div className="wrap nav">
        <a href="#top" className="brand" aria-label="Julio Paes Jr., psicólogo. Voltar ao topo">
          <span className="wordmark">Julio Paes Jr.</span>
          <span className="brand-sub">Psicólogo, CRP 06/239409</span>
        </a>
        <nav aria-label="Principal" className={"menu" + (menuOpen ? " open" : "")} id="navlist">
          <ul className="nav-links">
            {LINKS.map((link, i) => (
              <li key={link.href} style={{ "--i": i } as CSSProperties}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Só aparece no menu do celular */}
          <div className="menu-foot">
            <a href="#agendar" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
              Agendar horário
            </a>
            <a
              className="menu-wa"
              href={whatsappLink("Olá, Julio! Vi seu site e gostaria de conversar.")}
              target="_blank"
              rel="noopener"
            >
              WhatsApp {PHONE_DISPLAY}
            </a>
            <p>Presencial em Agudos/SP e online</p>
          </div>
        </nav>
        <div className="nav-right">
          <a href="#agendar" className="btn btn-primary">
            Agendar
          </a>
          <button
            ref={burgerRef}
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
