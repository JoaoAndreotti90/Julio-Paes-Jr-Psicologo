import { QUESTIONS } from "@/content/faq";

export default function Faq() {
  return (
    <section className="faq" id="duvidas">
      <div className="wrap grid12 faq-grid">
        <div className="faq-head">
          <h2 className="h2">Dúvidas frequentes</h2>
          <p>Se a sua não estiver aqui, pergunte pelo WhatsApp.</p>
        </div>
        <div className="faq-list">
          {QUESTIONS.map((item) => (
            <details key={item.q}>
              <summary>
                {item.q}
                <span className="pm" aria-hidden="true" />
              </summary>
              <p className="ans">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
