import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Turnstile } from "@marsidev/react-turnstile";
import type { TurnstileInstance } from "@marsidev/react-turnstile";
import { portfolioData } from "@/data/portfolio-data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { submitContactForm } from "@/services/emailService";
import { useRateLimit } from "@/hooks/useRateLimit";
import { Loader2, Send, Shield, Clock } from "lucide-react";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  email: z
    .string()
    .email("Email inválido")
    .min(5, "Email muito curto"),
  subject: z
    .string()
    .min(5, "Assunto deve ter pelo menos 5 caracteres")
    .max(100, "Assunto muito longo"),
  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem muito longa"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function Contact() {
  const { social } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | "warning" | null;
    message: string;
  }>({ type: null, message: "" });
  const [currentTime, setCurrentTime] = useState<number>(0);

  // Rate limiting: 3 envios a cada 10 minutos
  const rateLimit = useRateLimit({
    maxAttempts: 3,
    windowMs: 10 * 60 * 1000, // 10 minutos
    storageKey: "contact-form-rate-limit",
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Atualizar tempo atual a cada segundo
  useEffect(() => {
    setCurrentTime(Date.now());
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Formatar tempo restante
  const getResetTimeMessage = () => {
    if (!rateLimit.resetTime || typeof rateLimit.resetTime !== 'number') return "";
    const diff = rateLimit.resetTime - currentTime;
    const minutes = Math.ceil(diff / 60000);
    return `Tente novamente em ${minutes} minuto${minutes > 1 ? "s" : ""}.`;
  };

  async function onSubmit(data: ContactFormValues) {
    // Verificar rate limit
    if (rateLimit.isLimited) {
      setSubmitStatus({
        type: "warning",
        message: `Muitas tentativas. ${getResetTimeMessage()}`,
      });
      return;
    }

    // Verificar CAPTCHA
    if (!captchaToken) {
      setSubmitStatus({
        type: "error",
        message: "Por favor, complete a verificação de segurança.",
      });
      return;
    }

    // Registrar tentativa
    const canProceed = rateLimit.recordAttempt();
    if (!canProceed) {
      setSubmitStatus({
        type: "warning",
        message: `Limite de envios atingido. ${getResetTimeMessage()}`,
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const result = await submitContactForm(data);

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus({ type: "success", message: result.message });
      form.reset();
      setCaptchaToken("");
      turnstileRef.current?.reset();
    } else {
      setSubmitStatus({ type: "error", message: result.message });
      turnstileRef.current?.reset();
      setCaptchaToken("");
    }

    setTimeout(() => {
      setSubmitStatus({ type: null, message: "" });
    }, 5000);
  }

  return (
    <div
      id="contato"
      className="flex w-full min-h-screen justify-center items-center px-4 md:px-8 py-20"
    >
      <div className="flex flex-col items-start gap-8 md:gap-12 w-full max-w-6xl">
        {/* Header */}
        <div
          className="flex flex-col gap-2"
          style={{ animation: "fadeIn 0.8s ease-out" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
            Entre em Contato
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-2">
            Estou sempre aberto para discutir novos projetos e oportunidades
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 w-full">
          {/* Contact Form */}
          <div
            className="flex-1 backdrop-blur-xl bg-muted/50 border border-border rounded-2xl shadow-2xl p-4 md:p-6 lg:p-10"
            style={{ animation: "fadeIn 1s ease-out 0.2s backwards" }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seu.email@exemplo.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assunto</FormLabel>
                      <FormControl>
                        <Input placeholder="Assunto da mensagem" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descreva sua mensagem..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Cloudflare Turnstile */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Verificação de Segurança (Cloudflare)
                  </label>
                  <div className="w-full max-w-full overflow-hidden">
                    <Turnstile
                      ref={turnstileRef}
                      siteKey="0x4AAAAAACJXc843MaEnSHqg"
                      onSuccess={(token) => setCaptchaToken(token)}
                      onError={() => setCaptchaToken("")}
                      onExpire={() => setCaptchaToken("")}
                      options={{
                        theme: "auto",
                        size: "normal",
                      }}
                    />
                  </div>
                </div>

                {/* Rate Limit Info */}
                {!rateLimit.isLimited && rateLimit.remainingAttempts < 3 && (
                  <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-500 text-sm flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Você tem {rateLimit.remainingAttempts} envio{rateLimit.remainingAttempts !== 1 ? "s" : ""} restante{rateLimit.remainingAttempts !== 1 ? "s" : ""} nos próximos 10 minutos.
                  </div>
                )}

                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-500"
                        : submitStatus.type === "warning"
                        ? "bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-500"
                        : "bg-red-500/10 border border-red-500/20 text-red-500"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting || rateLimit.isLimited || !captchaToken}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : rateLimit.isLimited ? (
                    <>
                      <Clock className="mr-2 h-4 w-4" />
                      Limite Atingido
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>

          {/* Social Links */}
          <div
            className="lg:w-120 flex flex-col gap-4 md:gap-6"
            style={{ animation: "slideInRight 1s ease-out 0.4s backwards" }}
          >
            <div className="backdrop-blur-xl bg-muted/50 border border-border rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                Redes Sociais
              </h3>
              <div className="flex flex-col gap-4">
                {social.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-accent transition-all hover:scale-105 group"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-orange-400 to-amber-500 group-hover:from-orange-500 group-hover:to-amber-600 transition-all">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground">
                          {link.label}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground break-all">
                          {link.platform === "email"
                            ? "claytonoliveira.dev@gmail.com"
                            : `@${link.platform}`}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div className="backdrop-blur-xl bg-muted/50 border border-border rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">
                Disponibilidade
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-500 font-medium">
                  Disponível para projetos
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Tempo de resposta: 24-48 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
