const TEXT =
  "Um espaço de acolhimento, escuta e respeito, onde cada pessoa pode falar sobre suas questões com tranquilidade, sem julgamentos e respeitando seu próprio tempo.";

export default function Statement() {
  const words = TEXT.split(" ");
  return (
    <section className="statement" aria-label="Como é o atendimento">
      <div className="wrap">
        <p className="statement-text">
          <span className="sr-only">{TEXT}</span>
          <span aria-hidden="true">
            {words.map((word, i) => (
              <span className="w" key={i}>
                {word}
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </span>
        </p>
      </div>
    </section>
  );
}
