import { STEPS } from "@/content/steps";

export default function Steps() {
  return (
    <section className="steps-sec" id="como-funciona">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h2">Como funciona</h2>
          <p>Do primeiro contato ao acompanhamento, cada etapa é combinada com você ou com a família.</p>
        </div>
        <ol className="steps">
          {STEPS.map((step) => (
            <li key={step.title}>
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
