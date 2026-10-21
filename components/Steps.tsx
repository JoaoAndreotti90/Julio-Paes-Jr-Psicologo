import type { CSSProperties } from "react";
import Lines from "@/components/Lines";
import { STEPS } from "@/content/steps";

export default function Steps() {
  return (
    <section className="steps-sec" id="como-funciona">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h2" data-lines>
            <Lines lines={["Como funciona o", "processo terapêutico"]} />
          </h2>
          <p data-reveal style={{ "--d": "180ms" } as CSSProperties}>
            Do primeiro contato ao acompanhamento psicológico, cada etapa é conduzida de forma
            individualizada, respeitando suas necessidades e, quando pertinente, as da família.
          </p>
        </div>
        <ol className="steps">
          {STEPS.map((step, i) => (
            <li key={step.title} data-reveal style={{ "--d": `${i * 90}ms` } as CSSProperties}>
              <span className="n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
