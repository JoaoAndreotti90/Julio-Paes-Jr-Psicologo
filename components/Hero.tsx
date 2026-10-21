import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
import BookingForm from "@/components/BookingForm";
import type { BookingState } from "@/lib/booking";

type HeroProps = {
  booking: BookingState;
  setBooking: Dispatch<SetStateAction<BookingState>>;
};

export default function Hero({ booking, setBooking }: HeroProps) {
  return (
    <section className="hero">
      <div className="wrap grid12 hero-grid">
        <h1>
          <span className="line">
            <span>Um espaço para</span>
          </span>
          <span className="line">
            <span>
              se <em>escutar.</em>
            </span>
          </span>
        </h1>

        <figure className="hero-photo">
          <div className="print">
            <div className="print-img">
              <Image
                src="/images/julio-hero.jpg"
                alt="Julio Paes Jr., psicólogo, sentado à mesa do consultório com estantes de livros ao fundo"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "50% 18%" }}
                priority
              />
            </div>
          </div>
          <figcaption className="caption">
            <span>Julio Paes Jr., psicólogo clínico</span>
            <span>CRP 06/239409</span>
          </figcaption>
        </figure>

        <div className="hero-intro">
          <p className="lede">
            Psicoterapia para crianças, adolescentes, adultos e casais. Atendimento presencial e
            online, com escuta atenta, sem julgamento e no tempo de cada um.
          </p>
          <BookingForm booking={booking} setBooking={setBooking} />
        </div>
      </div>
    </section>
  );
}
