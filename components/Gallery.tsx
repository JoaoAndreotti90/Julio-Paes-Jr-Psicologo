import Image from "next/image";
import leituraImg from "@/public/images/julio-leitura.jpg";
import sorrisoImg from "@/public/images/julio-sorriso.jpg";
import jalecoImg from "@/public/images/julio-about.jpg";
import type { CSSProperties } from "react";

const PHOTOS = [
  {
    src: leituraImg,
    alt: "Julio Paes Jr. lendo um livro à mesa do consultório",
    position: "50% 40%"
  },
  {
    src: sorrisoImg,
    alt: "Julio Paes Jr. sorrindo, com a mão apoiada no rosto, sentado à mesa do consultório",
    position: "50% 35%"
  },
  {
    src: jalecoImg,
    alt: "Julio Paes Jr. de jaleco, sentado à mesa do consultório",
    position: "40% 25%"
  }
];

export default function Gallery() {
  return (
    <section className="gallery" aria-label="Fotos do consultório">
      <div className="wrap gallery-grid">
        {PHOTOS.map((photo, i) => (
          <figure
            key={photo.alt}
            className="gallery-item"
            data-reveal
            style={{ "--d": `${i * 90}ms` } as CSSProperties}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              placeholder="blur"
              loading="eager"
              fill
              sizes="(max-width: 700px) 100vw, 34vw"
              style={{ objectFit: "cover", objectPosition: photo.position }}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
