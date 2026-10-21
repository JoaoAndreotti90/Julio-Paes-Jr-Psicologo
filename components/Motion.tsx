"use client";

import { useEffect } from "react";

/**
 * Revela uma única vez os elementos marcados com data-reveal, data-lines ou data-shutter
 * quando chegam a ~88% da altura da tela. Nada acima da dobra fica escondido:
 * os estados ocultos só existem com a classe .js no <html> e sem "reduzir movimento".
 */
export default function Motion() {
  useEffect(() => {
    (window as unknown as { __motion?: boolean }).__motion = true;
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal],[data-lines],[data-shutter]"));

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.setAttribute("data-in", ""));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in", "");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 }
    );

    targets.forEach((el) => io.observe(el));
    root.classList.add("motion-ready");
    return () => io.disconnect();
  }, []);

  return null;
}
