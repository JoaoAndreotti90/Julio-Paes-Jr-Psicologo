import type { CSSProperties } from "react";

/** Título dividido nas linhas escritas à mão, para subir linha a linha quando entra na tela. */
export default function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span className="line" key={line}>
          <span style={{ "--i": i } as CSSProperties}>{line}</span>
          {i < lines.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}
