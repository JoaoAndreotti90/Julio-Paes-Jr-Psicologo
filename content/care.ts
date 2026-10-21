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
    title: "Quando a criança não encontra as palavras",
    desc: "Nem sempre a criança consegue expressar em palavras o que sente. A terapia oferece um espaço acolhedor para que ela possa demonstrar suas emoções e compreender melhor suas experiências, com o apoio da família ao longo do processo.",
    formatTitle: "Como são as sessões",
    formatText:
      "Os atendimentos utilizam brincadeiras, desenhos e histórias para facilitar a expressão dos sentimentos e emoções da criança. Também são realizados encontros periódicos com os responsáveis para acompanhar o desenvolvimento e orientar a família quando necessário.",
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
    title: "Para falar sem medo de julgamento",
    desc: "A adolescência é uma fase de muitas mudanças, descobertas e desafios. A terapia oferece um espaço acolhedor para que o adolescente possa falar sobre seus sentimentos, dúvidas e dificuldades, com liberdade para se expressar e sem medo de julgamentos, respeitando o sigilo profissional.",
    formatTitle: "Como são as sessões",
    formatText:
      "Os atendimentos são individuais e, geralmente, semanais. O contato com os responsáveis ocorre quando necessário, respeitando os limites éticos do sigilo profissional e as necessidades do acompanhamento.",
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
    title: "Para compreender sua história",
    desc: "A terapia é um momento para olhar com mais atenção para sua história, compreender seus sentimentos e reconhecer padrões que podem estar afetando sua vida. Um processo de autoconhecimento que ajuda a desenvolver novas formas de lidar consigo mesmo e com suas relações.",
    formatTitle: "Como são as sessões",
    formatText:
      "Os atendimentos são individuais, com duração aproximada de 50 minutos, geralmente semanais, nas modalidades presencial ou online.",
    ctaLabel: "Pedir horário para mim",
    presetQuem: "para mim",
    topics: ["Ansiedade e estresse", "Autoestima", "Relacionamentos", "Transições de vida e carreira", "Luto e perdas"]
  },
  {
    id: "casais",
    tabLabel: "Casais",
    title: "Para cuidar da relação",
    desc: "A terapia de casal busca compreender a dinâmica da relação, melhorar a comunicação e ajudar o casal a lidar com os conflitos do dia a dia. O objetivo é oferecer um espaço de diálogo e compreensão, sem buscar culpados, mas entendendo as necessidades e expectativas de cada um.",
    formatTitle: "Como são as sessões",
    formatText:
      "Os atendimentos acontecem com as duas pessoas juntas, nas modalidades presencial ou online, em um ambiente de escuta, respeito e diálogo.",
    ctaLabel: "Pedir horário para o casal",
    presetQuem: "para o casal",
    topics: [
      "Comunicação",
      "Conflitos que se repetem",
      "Confiança",
      "Decisões em conjunto",
      "Fases de mudança, como filhos ou mudança de cidade"
    ]
  },
  {
    id: "idosos",
    tabLabel: "Idosos",
    title: "Sua história merece ser ouvida",
    desc: "O envelhecimento traz mudanças, novas experiências e desafios que nem sempre são fáceis de lidar. A terapia oferece um espaço para falar sobre sentimentos, recordar experiências, lidar com as mudanças dessa fase da vida e encontrar novas formas de viver com mais bem-estar, respeitando a história e o tempo de cada pessoa.",
    formatTitle: "Como são as sessões",
    formatText:
      "Os atendimentos são individuais, geralmente semanais, com duração aproximada de 50 minutos, nas modalidades presencial ou online. Cada sessão é conduzida de acordo com as necessidades e a realidade de cada pessoa.",
    ctaLabel: "Pedir horário",
    presetQuem: "para mim",
    topics: [
      "Aposentadoria e nova rotina",
      "Luto e perdas",
      "Solidão",
      "Mudanças na saúde e na autonomia",
      "Relações com filhos e netos"
    ]
  }
];
