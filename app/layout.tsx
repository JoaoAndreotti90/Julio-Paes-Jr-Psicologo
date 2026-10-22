import type { Metadata, Viewport } from "next";
import "@fontsource/newsreader/latin-500.css";
import "@fontsource/source-sans-3/latin-400.css";
import "@fontsource/source-sans-3/latin-600.css";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { ADDRESS, CRP, EMAIL, PHONE, SITE_NAME } from "@/lib/constants";

const TITLE = "Julio Paes Jr., psicólogo em Agudos/SP";
const DESCRIPTION =
  "Julio Paes Jr., psicólogo (CRP 06/239409). Psicoterapia para crianças, adolescentes, adultos, casais e idosos, presencial em Agudos/SP ou online.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description:
      "Psicoterapia para crianças, adolescentes, adultos, casais e idosos, presencial em Agudos/SP ou online.",
    url: "/",
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website"
  },
  twitter: { card: "summary_large_image" }
};

export const viewport: Viewport = {
  themeColor: "#f5f5f2"
};

// Dados estruturados: ajudam o Google a entender que é um psicólogo em Agudos/SP
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Julio Paes Jr., psicólogo",
  description: DESCRIPTION,
  url: SITE_URL,
  image: SITE_URL + "/opengraph-image.jpg",
  telephone: "+" + PHONE,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.split(", Agudos")[0],
    addressLocality: "Agudos",
    addressRegion: "SP",
    addressCountry: "BR"
  },
  areaServed: ["Agudos, SP", "Online"],
  founder: {
    "@type": "Person",
    name: "Julio Paes Jr.",
    jobTitle: "Psicólogo",
    identifier: CRP
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
