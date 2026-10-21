import type { Modo, Periodo, Quem } from "@/lib/booking";

export type Option<T extends string> = {
  id: string;
  value: T;
  label: string;
};

export const QUEM_OPTIONS: Option<Quem>[] = [
  { id: "q-mim", value: "para mim", label: "Para mim" },
  { id: "q-filho", value: "para meu filho ou minha filha", label: "Meu filho(a)" },
  { id: "q-casal", value: "para o casal", label: "O casal" }
];

export const MODO_OPTIONS: Option<Modo>[] = [
  { id: "m-pres", value: "presencial", label: "Presencial" },
  { id: "m-online", value: "online", label: "Online" }
];

export const PERIODO_OPTIONS: Option<Periodo>[] = [
  { id: "p-manha", value: "manhã", label: "Manhã" },
  { id: "p-tarde", value: "tarde", label: "Tarde" },
  { id: "p-noite", value: "noite", label: "Noite" }
];
