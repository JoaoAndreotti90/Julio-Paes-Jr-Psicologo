"use client";

import { useRef } from "react";
import PrivacyDialog from "@/components/PrivacyDialog";

export default function Footer() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openPrivacy() {
    dialogRef.current?.showModal();
  }

  function closePrivacy() {
    dialogRef.current?.close();
  }

  return (
    <>
      <footer>
        <div className="wrap grid12 foot">
          <div className="brand">
            <span className="wordmark">
              Julio Paes<span className="suffix">Jr.</span>
            </span>
            <span className="brand-sub">Psicólogo · CRP 06/239409</span>
          </div>
          <div className="foot-col">
            <strong>Atendimento</strong>
            <span>Crianças, adolescentes, adultos e casais</span>
            <span>Presencial e online</span>
          </div>
          <div className="foot-col">
            <strong>Contato</strong>
            <a href="#agendar">Pedir horário</a>
          </div>
          <div className="foot-base">
            <span>© 2026 Julio Paes Jr.</span>
            <span>Em caso de emergência, ligue 188 (CVV) ou 192 (SAMU).</span>
            <button type="button" className="link-btn" onClick={openPrivacy}>
              Política de privacidade
            </button>
          </div>
        </div>
      </footer>
      <PrivacyDialog dialogRef={dialogRef} onClose={closePrivacy} />
    </>
  );
}
