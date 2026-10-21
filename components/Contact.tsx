import ArrowIcon from "@/components/ArrowIcon";
import CopyButton from "@/components/CopyButton";
import { whatsappLink, PHONE_DISPLAY, EMAIL, ADDRESS } from "@/lib/constants";

export default function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="wrap grid12 contact-grid">
        <div className="contact-main">
          <h2>
            Dar o primeiro passo
            <br />
            pode ser <em>uma conversa.</em>
          </h2>
          <p className="lede">
            Mande uma mensagem com o que estiver confortável contar, seja para você, para seu filho
            ou para o casal. O restante a gente conversa com calma.
          </p>
          <div className="contact-actions">
            <a
              className="btn btn-primary"
              id="waContact"
              href={whatsappLink("Olá, Julio! Vi seu site e gostaria de conversar.")}
              target="_blank"
              rel="noopener"
            >
              Conversar pelo WhatsApp
              <ArrowIcon />
            </a>
            <a className="btn btn-ghost" href="#agendar">
              Escolher horário
            </a>
          </div>
        </div>
        <dl className="channels">
          <div>
            <dt>Telefone e WhatsApp</dt>
            <dd>
              <span>{PHONE_DISPLAY}</span>
              <CopyButton text={PHONE_DISPLAY} />
            </dd>
          </div>
          <div>
            <dt>E-mail</dt>
            <dd>
              <span>{EMAIL}</span>
              <CopyButton text={EMAIL} />
            </dd>
          </div>
          <div>
            <dt>Consultório</dt>
            <dd>
              <span>{ADDRESS}</span>
            </dd>
          </div>
          <div>
            <dt>Online</dt>
            <dd>
              <span>Chamada de vídeo</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
