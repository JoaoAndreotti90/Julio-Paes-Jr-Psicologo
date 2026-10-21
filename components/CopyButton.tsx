"use client";

import { useState, type MouseEvent } from "react";

type CopyButtonProps = {
  text: string;
};

export default function CopyButton({ text }: CopyButtonProps) {
  const [label, setLabel] = useState("Copiar");

  async function handleClick(event: MouseEvent<HTMLButtonElement>) {
    const wrapper = event.currentTarget.previousElementSibling;
    try {
      await navigator.clipboard.writeText(text);
      setLabel("Copiado");
    } catch {
      if (wrapper) {
        const range = document.createRange();
        range.selectNodeContents(wrapper);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setLabel("Selecionado");
    }
    setTimeout(() => setLabel("Copiar"), 1600);
  }

  return (
    <button className="copy-btn" type="button" onClick={handleClick}>
      {label}
    </button>
  );
}
