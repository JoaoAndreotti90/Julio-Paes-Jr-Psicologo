import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Julio Paes Jr. Psicólogo",
  description:
    "Julio Paes Jr., psicólogo (CRP 06/239409). Psicoterapia para crianças, adolescentes, adultos e casais, presencial ou online.",
  openGraph: {
    title: "Julio Paes Jr. — Psicólogo",
    description:
      "Psicoterapia para crianças, adolescentes, adultos e casais, presencial ou online.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Petit+Formal+Script&family=Outfit:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
