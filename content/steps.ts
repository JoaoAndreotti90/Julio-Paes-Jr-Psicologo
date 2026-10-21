export type ProcessStep = {
  n: string;
  title: string;
  text: string;
};

export const STEPS: ProcessStep[] = [
  {
    n: "Primeiro contato",
    title: "Entrevista inicial",
    text: "Um momento para compreender as motivações que levaram à busca por atendimento, esclarecer dúvidas e apresentar a proposta de trabalho, avaliando conjuntamente os próximos passos."
  },
  {
    n: "Sessões regulares",
    title: "Processo terapêutico",
    text: "Os atendimentos são realizados, geralmente, com frequência semanal, em dia e horário previamente acordados, nas modalidades presencial ou online."
  },
  {
    n: "Acompanhamento",
    title: "Avaliação contínua",
    text: "Ao longo do processo, os objetivos terapêuticos são revisados periodicamente, considerando as necessidades e a evolução de cada caso. No atendimento de crianças e adolescentes, também podem ocorrer encontros com os responsáveis, conforme a necessidade clínica e as diretrizes éticas da Psicologia."
  }
];
