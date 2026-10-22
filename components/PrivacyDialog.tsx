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
          06/239409), atendendo como pessoa física. E-mail: psicologojuliopaesjr@gmail.com.
          Endereço: Rua José de Rosa, 420, Agudos/SP.
        </p>
        <p>
          <strong>Este site não pede, não coleta e não guarda dados pessoais seus.</strong> O
          formulário de agendamento só monta uma mensagem com as opções que você escolhe e abre o seu
          WhatsApp. A partir daí, a conversa acontece direto entre você e o Julio pelo WhatsApp, sem
          passar por este site.
        </p>
        <p>Não usamos cookies, pixels ou qualquer ferramenta de rastreamento ou análise de navegação.</p>
        <p>
          Como acontece com qualquer site, a empresa que hospeda esta página (Vercel) registra
          automaticamente alguns dados técnicos de acesso, como endereço IP, data, horário e tipo de
          navegador. Esses registros são guardados por tempo limitado e usados apenas para a segurança e
          o funcionamento do serviço.
        </p>
        <p>
          <strong>Seus direitos:</strong> pela LGPD, você pode pedir a qualquer momento a confirmação,
          o acesso, a correção ou a exclusão dos seus dados pessoais tratados pelo Julio. Basta enviar
          um e-mail para o endereço acima.
        </p>
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
