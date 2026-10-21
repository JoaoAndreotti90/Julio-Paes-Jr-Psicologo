import type { RefObject } from "react";

type PrivacyDialogProps = {
  dialogRef: RefObject<HTMLDialogElement>;
  onClose: () => void;
};

export default function PrivacyDialog({ dialogRef, onClose }: PrivacyDialogProps) {
  return (
    <dialog
      className="legal"
      id="privacyDialog"
      aria-labelledby="privacyTitle"
      ref={dialogRef}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <button className="legal-close" type="button" aria-label="Fechar" onClick={onClose}>
        &times;
      </button>
      <div className="legal-inner">
        <h3 id="privacyTitle">Política de privacidade</h3>
        <p>
          <strong>Quem é o responsável por este site:</strong> Julio Paes Jr., psicólogo (CRP
          06/239409), atendendo como pessoa física. Contato: psicologojuliopaesjr@gmail.com · Rua
          José de Rosa, 420 · Agudos/SP.
        </p>
        <p>
          <strong>Este site não coleta nem guarda nenhum dado seu.</strong> O formulário de
          agendamento só monta uma mensagem com as opções que você escolhe e abre o seu WhatsApp —
          a partir daí a conversa acontece direto entre você e o WhatsApp do Julio, sem passar por
          este site, por nenhum servidor ou por terceiros.
        </p>
        <p>Não usamos cookies, pixels ou qualquer ferramenta de rastreamento ou análise de navegação.</p>
        <p>
          As informações que você compartilhar durante o atendimento (no WhatsApp, por telefone ou
          em sessão) são tratadas pelo Julio fora deste site, com o sigilo profissional previsto no
          Código de Ética Profissional do Psicólogo e na Lei Geral de Proteção de Dados (LGPD).
        </p>
        <p>Dúvidas sobre esta política podem ser enviadas para o e-mail acima.</p>
        <p className="legal-meta">Última atualização: outubro de 2026.</p>
      </div>
    </dialog>
  );
}
