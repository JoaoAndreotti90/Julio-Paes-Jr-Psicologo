import CopyButton from "@/components/CopyButton";
import BookingForm from "@/components/BookingForm";
import type { CSSProperties, Dispatch, SetStateAction } from "react";
import Lines from "@/components/Lines";
import { whatsappLink, PHONE_DISPLAY, EMAIL, ADDRESS } from "@/lib/constants";
import type { BookingState } from "@/lib/booking";

type ContactProps = {
  booking: BookingState;
  setBooking: Dispatch<SetStateAction<BookingState>>;
};

export default function Contact({ booking, setBooking }: ContactProps) {
  return (
    <section className="contact" id="contato">
      <div className="wrap contact-grid">
        <div className="contact-main">
          <h2 data-lines>
            <Lines lines={["O primeiro passo", "pode ser uma conversa"]} />
          </h2>
          <p className="lede" data-reveal style={{ "--d": "160ms" } as CSSProperties}>
            Conte só o que estiver confortável, seja o atendimento para você, para seu filho ou para
            o casal. O restante a gente conversa com calma.
          </p>
          <p className="contact-alt" data-reveal style={{ "--d": "220ms" } as CSSProperties}>
            Prefere escrever do seu jeito?{" "}
            <a
              id="waContact"
              href={whatsappLink("Olá, Julio! Vi seu site e gostaria de conversar.")}
              target="_blank"
              rel="noopener"
            >
              Mande uma mensagem no WhatsApp
            </a>
          </p>

          <dl className="address-rows" data-reveal style={{ "--d": "280ms" } as CSSProperties}>
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

        <div className="contact-booking" data-reveal style={{ "--d": "120ms" } as CSSProperties}>
          <BookingForm booking={booking} setBooking={setBooking} />
        </div>
      </div>
    </section>
  );
}
