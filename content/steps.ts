export type ProcessStep = {
  n: string;
  title: string;
  text: string;
};

export const STEPS: ProcessStep[] = [
  {
    n: "Primeiro",
    title: "Uma conversa inicial",
    text: "Você conta o que motivou a procura e tira dúvidas. Juntos, vemos se faz sentido seguir."
  },
  {
    n: "Depois",
    title: "Sessões regulares",
    text: "Em geral semanais, no mesmo dia e horário, presenciais ou por vídeo."
  },
  {
    n: "Ao longo do tempo",
    title: "Acompanhamento",
    text: "Os objetivos são revistos periodicamente. No atendimento infantil, isso inclui conversas com os responsáveis."
  }
];
