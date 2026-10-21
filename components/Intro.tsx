import Image from "next/image";
import heroImg from "@/public/images/julio-hero.jpg";

const FACTS = [
  { label: "Atendimento", value: "Crianças, adolescentes, adultos, casais e idosos" },
  { label: "Presencial", value: "Consultório em Agudos/SP" },
  { label: "Online", value: "Por chamada de vídeo" },
  { label: "Registro", value: "CRP 06/239409" }
];

export default function Intro() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <h1>
            Um espaço para
            <br />
            se escutar
          </h1>
          <p className="lede">
            Atendimento psicológico para crianças, adolescentes, adultos, casais e idosos, nas modalidades
            presencial e online.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#agendar">
              Agendar horário
            </a>
            <a className="text-link" href="#como-funciona">
              Como funciona a terapia
            </a>
          </div>
        </div>

        <figure className="hero-photo">
          <Image
            src={heroImg}
            placeholder="blur"
            alt="Julio Paes Jr., psicólogo, sentado à mesa do consultório com estantes de livros ao fundo"
            fill
            sizes="(max-width: 900px) 100vw, 44vw"
            style={{ objectFit: "cover", objectPosition: "50% 18%" }}
            priority
          />
        </figure>
      </div>

      <div className="wrap">
        <dl className="facts">
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
