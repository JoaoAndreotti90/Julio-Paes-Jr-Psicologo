"use client";

import { useRef } from "react";
import PrivacyDialog from "@/components/PrivacyDialog";
import { whatsappLink, PHONE_DISPLAY, EMAIL } from "@/lib/constants";

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
        <div className="wrap">
          <div className="foot-row foot-top">
            <div className="foot-left brand">
              <span className="wordmark">Julio Paes Jr.</span>
              <span className="brand-sub">Psicólogo, CRP 06/239409</span>
            </div>
            <div className="foot-mid foot-col">
              <strong>Atendimento</strong>
              <span>Crianças, adolescentes, adultos, casais e idosos</span>
              <span>Presencial em Agudos/SP e online</span>
            </div>
            <div className="foot-right foot-col">
              <strong>Contato</strong>
              <a
                href={whatsappLink("Olá, Julio! Vi seu site e gostaria de conversar.")}
                target="_blank"
                rel="noopener"
              >
                WhatsApp {PHONE_DISPLAY}
              </a>
              <a href={"mailto:" + EMAIL}>{EMAIL}</a>
            </div>
          </div>
          <div className="foot-row foot-base">
            <span className="foot-left">© 2026 Julio Paes Jr.</span>
            <span className="foot-mid">Em caso de emergência, ligue 188 (CVV) ou 192 (SAMU).</span>
            <button type="button" className="link-btn foot-right" onClick={openPrivacy}>
              Política de privacidade
            </button>
          </div>
        </div>
      </footer>
      <PrivacyDialog dialogRef={dialogRef} onClose={closePrivacy} />
    </>
  );
}
