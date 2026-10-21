import Image from "next/image";
import retratoImg from "@/public/images/julio-retrato.jpg";
import type { CSSProperties } from "react";
import Lines from "@/components/Lines";

const STORY = [
  "Minha paixão pela Psicologia vem desde a infância, quando já gostava de ajudar as pessoas, seja com conselhos, ouvindo seus problemas ou buscando ajudar na resolução de conflitos. Com o passar dos anos, percebi que esse desejo de ajudar poderia se tornar minha profissão.",
  "Grande parte da minha escolha também teve a influência do meu pai, Julio Paes, neuropsicopedagogo, que sempre me apoiou, me ensinou e esteve ao meu lado durante toda a minha graduação.",
  "Durante a faculdade, conheci diferentes abordagens da Psicologia, mas foi no último ano que me encantei pela abordagem junguiana, que despertou em mim o interesse em compreender melhor a história, os sentimentos e a individualidade de cada pessoa.",
  "Hoje, dou início a uma nova etapa da minha vida, realizando um sonho que me acompanha desde criança: ajudar pessoas. Quero exercer a Psicologia com dedicação, respeito e responsabilidade, oferecendo um espaço de acolhimento e escuta, sempre guiado pelos princípios éticos da profissão."
];

const CREDS = [
  { label: "Graduação", value: "Psicologia pela FIB (Faculdades Integradas de Bauru), 2026" },
  { label: "Abordagem", value: "Psicologia Analítica (Junguiana)" },
  { label: "Registro", value: "CRP 06/239409, ativo" }
];

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="wrap about-grid">
        <figure className="about-photo" data-shutter>
          <Image
            src={retratoImg}
            placeholder="blur"
            loading="eager"
            alt="Retrato de Julio Paes Jr., de braços cruzados, com estante de livros ao fundo"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            style={{ objectFit: "cover", objectPosition: "45% 22%" }}
          />
        </figure>

        <div className="about-text">
          <h2 className="h2" data-lines>
            <Lines lines={["Minha trajetória e paixão", "pela Psicologia"]} />
          </h2>
          <div className="story">
            {STORY.map((paragraph, i) => (
              <p key={i} data-reveal style={{ "--d": `${Math.min(i, 3) * 80}ms` } as CSSProperties}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap" id="formacao">
        <h3 className="creds-title" data-reveal>
          Formação
        </h3>
        <dl className="creds">
          {CREDS.map((item, i) => (
            <div key={item.label} data-reveal style={{ "--d": `${i * 80}ms` } as CSSProperties}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
