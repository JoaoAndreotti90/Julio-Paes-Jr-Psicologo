import type { CSSProperties } from "react";
import Lines from "@/components/Lines";
import { QUESTIONS } from "@/content/faq";

export default function Faq() {
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
            <p key={item.q}>
              <span className="faq-q">{item.q}</span> {item.a}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
