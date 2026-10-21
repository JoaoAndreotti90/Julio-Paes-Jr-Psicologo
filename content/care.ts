import type { Quem } from "@/lib/booking";

export type AudiencePanel = {
  id: string;
  tabLabel: string;
  title: string;
  desc: string;
  formatTitle: string;
  formatText: string;
  ctaLabel: string;
  presetQuem: Quem;
  topics: string[];
};

export const PANELS: AudiencePanel[] = [
  {
    id: "criancas",
    tabLabel: "Crianças",
    title: "Um lugar seguro para a criança se expressar",
    desc: "Nem sempre a criança consegue dizer em palavras o que sente. Na terapia ela encontra outros caminhos para isso, e a família ganha apoio para entender o que está acontecendo.",
    formatTitle: "Como são as sessões",
    formatText:
      "Encontros com a criança usando recursos lúdicos, como brincadeiras, desenhos e histórias, e conversas periódicas com os responsáveis.",
    ctaLabel: "Pedir horário para meu filho(a)",
    presetQuem: "para meu filho ou minha filha",
    topics: [
      "Medos e ansiedade",
      "Mudanças de comportamento",
      "Adaptação escolar",
      "Separação dos pais ou chegada de irmãos",
      "Luto e perdas"
    ]
  },
  {
    id: "adolescentes",
    tabLabel: "Adolescentes",
    title: "Um espaço próprio, com sigilo e respeito",
    desc: "A adolescência traz mudanças rápidas e muitas cobranças. A terapia oferece um lugar para pensar sobre isso sem julgamento, com a confiança de que o que é dito ali é respeitado.",
    formatTitle: "Como são as sessões",
    formatText:
      "Sessões individuais semanais. O contato com os responsáveis acontece quando necessário e é combinado com o adolescente.",
    ctaLabel: "Pedir horário para meu filho(a)",
    presetQuem: "para meu filho ou minha filha",
    topics: [
      "Ansiedade e pressão escolar",
      "Autoestima e identidade",
      "Relações com amigos e família",
      "Escolhas e futuro",
      "Tristeza e isolamento"
    ]
  },
  {
    id: "adultos",
    tabLabel: "Adultos",
    title: "Para entender sua história e mudar o que já não serve",
    desc: "Um processo para olhar com calma para o que você vive, reconhecer padrões e encontrar formas mais saudáveis de lidar consigo e com os outros.",
    formatTitle: "Como são as sessões",
    formatText: "Sessões individuais de cerca de 50 minutos, semanais, presenciais ou online.",
    ctaLabel: "Pedir horário para mim",
    presetQuem: "para mim",
    topics: ["Ansiedade e estresse", "Autoestima", "Relacionamentos", "Transições de vida e carreira", "Luto e perdas"]
  },
  {
    id: "casais",
    tabLabel: "Casais",
    title: "Para a relação, não para apontar culpados",
    desc: "A terapia de casal olha para o que acontece entre as duas pessoas: como conversam, como lidam com conflitos e o que cada uma espera da relação.",
    formatTitle: "Como são as sessões",
    formatText: "Sessões com as duas pessoas juntas, presenciais ou online.",
    ctaLabel: "Pedir horário para o casal",
    presetQuem: "para o casal",
    topics: [
      "Comunicação",
      "Conflitos que se repetem",
      "Confiança",
      "Decisões em conjunto",
      "Fases de mudança, como filhos ou mudança de cidade"
    ]
  }
];
