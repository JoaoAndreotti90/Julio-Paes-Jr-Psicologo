export const PHONE = "5514988384955";
export const SITE_NAME = "Julio Paes Jr.";
export const CRP = "CRP 06/239409";
export const EMAIL = "psicologojuliopaesjr@gmail.com";
export const PHONE_DISPLAY = "(14) 98838-4955";
export const ADDRESS = "Rua José de Rosa, 420, Agudos/SP";

export function whatsappLink(message: string): string {
  return "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(message);
}
