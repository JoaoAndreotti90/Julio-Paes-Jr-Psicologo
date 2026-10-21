export type Quem = "para mim" | "para meu filho ou minha filha" | "para o casal";
export type Modo = "presencial" | "online";
export type Periodo = "manhã" | "tarde" | "noite";

export type BookingState = {
  quem: Quem;
  modo: Modo;
  periodo: Periodo;
};

export const DEFAULT_BOOKING: BookingState = {
  quem: "para mim",
  modo: "presencial",
  periodo: "tarde"
};

export function bookingMessage(booking: BookingState): string {
  return (
    "Olá, Julio! Gostaria de agendar uma primeira conversa " +
    booking.quem +
    ", no formato " +
    booking.modo +
    ", de preferência no período da " +
    booking.periodo +
    "."
  );
}
