"use client";

import { useEffect, useState, type CSSProperties, type MouseEvent } from "react";
import Lines from "@/components/Lines";
import { QUESTIONS } from "@/content/faq";

// No computador as respostas ficam todas abertas, em duas colunas.
// No celular viram uma sanfona: a pessoa toca na pergunta e a resposta abre.
const DESKTOP_QUERY = "(min-width: 901px)";

export default function Faq() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  function keepOpenOnDesktop(event: MouseEvent<HTMLElement>) {
    if (isDesktop) event.preventDefault();
  }

  return (
    <section className="faq" id="duvidas">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <h2 className="h2" data-lines>
            <Lines lines={["Dúvidas", "frequentes"]} />
          </h2>
          <p data-reveal style={{ "--d": "160ms" } as CSSProperties}>
            Se a sua não estiver aqui, pergunte pelo WhatsApp.
          </p>
        </div>
        <div className="faq-text" data-reveal style={{ "--d": "120ms" } as CSSProperties}>
          {QUESTIONS.map((item) => (
            <details key={item.q} className="qa" open={isDesktop || undefined}>
              <summary className="faq-q" onClick={keepOpenOnDesktop} tabIndex={isDesktop ? -1 : undefined}>
                {item.q}
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
