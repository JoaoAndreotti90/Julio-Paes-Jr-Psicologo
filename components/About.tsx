import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="wrap grid12 about-grid">
        <div className="about-text">
          <h2 className="h2">Minha trajetória</h2>
          <div className="story">
            <p>
              Minha trajetória começou na graduação, quando percebi que a escuta, mais do que
              qualquer técnica, era o que transformava uma conversa em cuidado. Desde então venho
              construindo uma prática voltada para processos reais: sem fórmulas prontas e sem
              pressa para &quot;resolver&quot;, sempre no tempo de quem está do outro lado.
            </p>
            <p>
              Hoje atendo crianças, adolescentes, adultos e casais. Em cada fase da vida o ponto de
              partida é o mesmo: escutar com atenção e construir, junto com quem chega, um caminho
              que faça sentido.
            </p>
          </div>

          <blockquote>
            Mudança real acontece quando existe espaço seguro para pensar em voz alta.
          </blockquote>

          <div id="formacao">
            <p className="creds-title">Formação</p>
            <dl className="creds">
              <div>
                <dt>Graduação</dt>
                <dd>Psicologia · FIB – Faculdades Integradas de Bauru, 2026</dd>
              </div>
              <div>
                <dt>Abordagem</dt>
                <dd>Psicologia Analítica (junguiana)</dd>
              </div>
              <div>
                <dt>Registro</dt>
                <dd>CRP 06/239409 · ativo</dd>
              </div>
            </dl>
          </div>
        </div>

        <aside className="about-side">
          <div className="sticky">
            <figure style={{ margin: 0 }}>
              <div className="print">
                <div className="print-img">
                  <Image
                    src="/images/julio-about.jpg"
                    alt="Julio Paes Jr. de jaleco, em atendimento no consultório"
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "40% 20%" }}
                  />
                </div>
              </div>
            </figure>
          </div>
        </aside>
      </div>
    </section>
  );
}
