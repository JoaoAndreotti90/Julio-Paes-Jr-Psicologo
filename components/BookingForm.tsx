"use client";

import { Fragment, type Dispatch, type SetStateAction } from "react";
import ArrowIcon from "@/components/ArrowIcon";
import { whatsappLink } from "@/lib/constants";
import { bookingMessage, type BookingState } from "@/lib/booking";
import { MODO_OPTIONS, PERIODO_OPTIONS, QUEM_OPTIONS } from "@/content/booking-options";

type BookingFormProps = {
  booking: BookingState;
  setBooking: Dispatch<SetStateAction<BookingState>>;
};

export default function BookingForm({ booking, setBooking }: BookingFormProps) {
  function updateField<K extends keyof BookingState>(field: K, value: BookingState[K]) {
    setBooking((current) => ({ ...current, [field]: value }));
  }

  return (
    <form
      className="booking"
      id="agendar"
      aria-labelledby="booking-title"
      onSubmit={(event) => event.preventDefault()}
    >
      <h2 id="booking-title">Peça seu primeiro horário</h2>

      <fieldset>
        <legend>Para quem é</legend>
        <div className="seg">
          {QUEM_OPTIONS.map((option) => (
            <Fragment key={option.id}>
              <input
                type="radio"
                name="quem"
                id={option.id}
                value={option.value}
                checked={booking.quem === option.value}
                onChange={() => updateField("quem", option.value)}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </Fragment>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Como prefere</legend>
        <div className="seg">
          {MODO_OPTIONS.map((option) => (
            <Fragment key={option.id}>
              <input
                type="radio"
                name="modo"
                id={option.id}
                value={option.value}
                checked={booking.modo === option.value}
                onChange={() => updateField("modo", option.value)}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </Fragment>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Melhor período</legend>
        <div className="seg">
          {PERIODO_OPTIONS.map((option) => (
            <Fragment key={option.id}>
              <input
                type="radio"
                name="periodo"
                id={option.id}
                value={option.value}
                checked={booking.periodo === option.value}
                onChange={() => updateField("periodo", option.value)}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </Fragment>
          ))}
        </div>
      </fieldset>

      <a
        className="btn btn-primary"
        id="bookBtn"
        href={whatsappLink(bookingMessage(booking))}
        target="_blank"
        rel="noopener"
      >
        Enviar pedido pelo WhatsApp
        <ArrowIcon />
      </a>
      <p className="note">A mensagem já vai preenchida. Você conversa direto com o Julio.</p>
    </form>
  );
}
