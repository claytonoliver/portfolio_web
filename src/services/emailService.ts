import type { ContactFormData } from "@/types/portfolio";

const WEB3FORMS_ACCESS_KEY = "e2c52564-51fe-4b18-8f05-2af3d1787fdd";

export interface EmailServiceResponse {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<EmailServiceResponse> {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        from_name: "Portfolio - Clayton Oliveira",
        replyto: data.email,
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return {
        success: true,
        message: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
      };
    } else {
      throw new Error(result.message || "Erro ao enviar mensagem");
    }
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    return {
      success: false,
      message:
        "Erro ao enviar mensagem. Por favor, tente novamente mais tarde ou entre em contato diretamente pelo email.",
    };
  }
}
