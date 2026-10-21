import type { Metadata } from "next";
import "@fontsource/newsreader/latin-500.css";
import "@fontsource/source-sans-3/latin-400.css";
import "@fontsource/source-sans-3/latin-600.css";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Julio Paes Jr., psicólogo em Agudos/SP",
  description:
    "Julio Paes Jr., psicólogo (CRP 06/239409). Psicoterapia para crianças, adolescentes, adultos, casais e idosos, presencial em Agudos/SP ou online.",
  openGraph: {
    title: "Julio Paes Jr., psicólogo em Agudos/SP",
    description:
      "Psicoterapia para crianças, adolescentes, adultos, casais e idosos, presencial ou online.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Ativa as animações só com JavaScript rodando; se o script de movimento não subir em 2,5 s, tudo aparece normalmente */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){if(!window.__motion)document.documentElement.classList.remove('js')},2500);"
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
